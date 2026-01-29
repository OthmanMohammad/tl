'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { MapPin, Clock, Globe, Users } from 'lucide-react'

type ThreeModule = typeof import('three')

interface Office {
  id: string
  name: string
  country: string
  lat: number
  lng: number
  timezone: string
  description: string
}

interface MarkerRefs {
  pin: any
  pinMaterial: any
  glow: any
  glowMaterial: any
  ring: any
  ringMaterial: any
  glowSphere: any
  glowSphereMaterial: any
}

const ThreeGlobe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredOffice, setHoveredOffice] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const markersRef = useRef<Map<string, MarkerRefs>>(new Map())
  const isVisibleRef = useRef(true)
  const cleanupRef = useRef<(() => void) | null>(null)
  const t = useTranslations('globe')

  const offices: Office[] = [
    {
      id: 'uk',
      name: t('aberdeenName'),
      country: t('aberdeenCountry'),
      lat: 57.5, // Little more north
      lng: 1.0, // Tiny bit west
      timezone: 'GMT+0',
      description: t('aberdeenDescription')
    },
    {
      id: 'palestine',
      name: t('nablusName'),
      country: t('nablusCountry'),
      lat: 33.0, // Little more north
      lng: 35.2544,
      timezone: 'GMT+2',
      description: t('nablusDescription')
    }
  ]

  useEffect(() => {
    if (!containerRef.current) return

    let animationId: number
    let renderer: any
    let scene: any
    let camera: any
    let globeGroup: any
    let arcMeshes: any[] = []
    let resizeTimeout: NodeJS.Timeout | null = null

    // Store all disposable resources for cleanup
    const disposables = {
      textures: [] as any[],
      geometries: [] as any[],
      materials: [] as any[]
    }

    const initGlobe = async () => {
      const THREE = await import('three') as ThreeModule

      const container = containerRef.current
      if (!container) return

      const width = container.clientWidth
      const height = 500

      // Scene with transparent background
      scene = new THREE.Scene()

      // Camera - zoom out more on mobile for better fit
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
      const isMobile = width < 768
      camera.position.z = isMobile ? 3.5 : 2.8

      // Check for WebGL support
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      if (!gl) {
        console.warn('WebGL not supported')
        setIsLoaded(true)
        return
      }

      // Renderer with transparency - lower pixel ratio for performance
      renderer = new THREE.WebGLRenderer({
        antialias: window.devicePixelRatio < 2,
        alpha: true,
        powerPreference: 'default'
      })
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.setClearColor(0x000000, 0)
      container.appendChild(renderer.domElement)

      // Texture loader with error handling
      const textureLoader = new THREE.TextureLoader()

      const loadTexture = (path: string): Promise<any> => {
        return new Promise((resolve, reject) => {
          textureLoader.load(
            path,
            (texture) => {
              texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 4)
              disposables.textures.push(texture)
              resolve(texture)
            },
            undefined,
            (error) => {
              console.warn(`Failed to load texture: ${path}`, error)
              resolve(null)
            }
          )
        })
      }

      // Load single clean map texture
      const earthTexture = await loadTexture('/textures/earth/maps.png')
      if (earthTexture) {
        earthTexture.colorSpace = THREE.SRGBColorSpace
      }

      // Globe group for rotation
      globeGroup = new THREE.Group()
      scene.add(globeGroup)

      // Earth geometry
      const earthGeometry = new THREE.SphereGeometry(1, 64, 64)
      disposables.geometries.push(earthGeometry)

      // Simple earth material with transparency support
      const earthMaterial = new THREE.MeshBasicMaterial({
        map: earthTexture,
        transparent: true,
        side: THREE.FrontSide
      })
      disposables.materials.push(earthMaterial)

      const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial)
      globeGroup.add(earthMesh)

      // Helper: Convert lat/lng to 3D position
      // Adjusted for custom map texture alignment
      const LNG_OFFSET = -192 // Longitude offset
      const LAT_OFFSET = -43 // Latitude offset (negative = move south)
      const latLngToVector3 = (lat: number, lng: number, radius: number) => {
        const adjustedLat = lat + LAT_OFFSET
        const phi = (90 - adjustedLat) * (Math.PI / 180)
        const theta = (lng + LNG_OFFSET) * (Math.PI / 180)
        // Negate x to flip horizontally (mirror left-right)
        const x = -radius * Math.sin(phi) * Math.cos(theta)
        const y = radius * Math.cos(phi)
        const z = radius * Math.sin(phi) * Math.sin(theta)
        return new THREE.Vector3(x, y, z)
      }

      // Create traveling arc with tube geometry
      const createTravelingArc = (
        startLat: number, startLng: number,
        endLat: number, endLng: number,
        color: number = 0xEB1600,
        segmentLength: number = 15,
        initialDelay: number = 0
      ) => {
        const start = latLngToVector3(startLat, startLng, 1.02)
        const end = latLngToVector3(endLat, endLng, 1.02)

        const distance = start.distanceTo(end)
        const arcHeight = 1.02 + distance * 0.35

        const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5)
        mid.normalize().multiplyScalar(arcHeight)

        const curve = new THREE.QuadraticBezierCurve3(start, mid, end)

        // Fewer segments for performance
        const numSegments = 40
        const tubeRadius = 0.005
        const tubeSegments: any[] = []
        const glowGroup = new THREE.Group()

        for (let i = 0; i < numSegments; i++) {
          const t1 = Math.max(0, (i - 0.1) / numSegments)
          const t2 = Math.min(1, (i + 1.1) / numSegments)
          const p1 = curve.getPoint(t1)
          const p2 = curve.getPoint(t2)

          const segmentCurve = new THREE.LineCurve3(p1, p2)
          const segmentGeometry = new THREE.TubeGeometry(segmentCurve, 1, tubeRadius, 8, false)
          disposables.geometries.push(segmentGeometry)

          const segmentMaterial = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0,
            depthWrite: false
          })
          disposables.materials.push(segmentMaterial)

          const segment = new THREE.Mesh(segmentGeometry, segmentMaterial)
          segment.userData.index = i
          tubeSegments.push(segment)
          glowGroup.add(segment)

          // Glow layer
          const glowGeometry = new THREE.TubeGeometry(segmentCurve, 1, tubeRadius * 2, 8, false)
          disposables.geometries.push(glowGeometry)

          const glowMaterial = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0,
            depthWrite: false
          })
          disposables.materials.push(glowMaterial)

          const glowSegment = new THREE.Mesh(glowGeometry, glowMaterial)
          glowSegment.userData.index = i
          glowSegment.userData.isGlow = true
          tubeSegments.push(glowSegment)
          glowGroup.add(glowSegment)
        }

        glowGroup.userData = {
          progress: initialDelay,
          totalPoints: numSegments,
          segmentLength: segmentLength,
          segments: tubeSegments
        }

        return glowGroup
      }

      // Destination coordinates (adjusted for shorter beam distances)
      const dubaiLat = 25.8, dubaiLng = 53.0 // Tiny north, shorter
      const riyadhLat = 24.7136, riyadhLng = 45.2 // Tiny bit more east
      const miamiLat = 25.7617, miamiLng = -80.1918

      // Create arcs
      const arcAberdeenToNablus = createTravelingArc(
        offices[0].lat, offices[0].lng,
        offices[1].lat, offices[1].lng,
        0xEB1600, 28, 0
      )
      globeGroup.add(arcAberdeenToNablus)
      arcMeshes.push(arcAberdeenToNablus)

      const arcNablusToDubai = createTravelingArc(
        offices[1].lat, offices[1].lng,
        dubaiLat, dubaiLng,
        0xEB1600, 24, -24
      )
      globeGroup.add(arcNablusToDubai)
      arcMeshes.push(arcNablusToDubai)

      const arcNablusToRiyadh = createTravelingArc(
        offices[1].lat, offices[1].lng,
        riyadhLat, riyadhLng,
        0xEB1600, 24, -48
      )
      globeGroup.add(arcNablusToRiyadh)
      arcMeshes.push(arcNablusToRiyadh)

      const arcNablusToMiami = createTravelingArc(
        offices[1].lat, offices[1].lng,
        miamiLat, miamiLng,
        0xEB1600, 28, -72
      )
      globeGroup.add(arcNablusToMiami)
      arcMeshes.push(arcNablusToMiami)

      // Office pin markers - Simple pin sprite
      // Create pin texture using canvas
      const createPinTexture = (color: string) => {
        const canvas = document.createElement('canvas')
        canvas.width = 64
        canvas.height = 64
        const ctx = canvas.getContext('2d')!

        // Draw pin shape (teardrop/marker)
        ctx.fillStyle = color
        ctx.beginPath()
        // Pin head (circle)
        ctx.arc(32, 20, 16, 0, Math.PI * 2)
        ctx.fill()
        // Pin point (triangle)
        ctx.beginPath()
        ctx.moveTo(16, 20)
        ctx.lineTo(32, 58)
        ctx.lineTo(48, 20)
        ctx.fill()
        // Inner circle (white dot)
        ctx.fillStyle = 'white'
        ctx.beginPath()
        ctx.arc(32, 20, 6, 0, Math.PI * 2)
        ctx.fill()

        const texture = new THREE.CanvasTexture(canvas)
        disposables.textures.push(texture)
        return texture
      }

      // Aberdeen (UK) = BLUE, Nablus (Palestine) = RED
      offices.forEach(office => {
        const pos = latLngToVector3(office.lat, office.lng, 1.04)
        const pinColor = office.id === 'uk' ? '#00AAFF' : '#EB1600'

        const pinTexture = createPinTexture(pinColor)
        const spriteMaterial = new THREE.SpriteMaterial({
          map: pinTexture,
          transparent: true,
          depthTest: false
        })
        disposables.materials.push(spriteMaterial)

        const sprite = new THREE.Sprite(spriteMaterial)
        sprite.position.copy(pos)
        sprite.scale.set(0.08, 0.08, 1)
        sprite.userData = { officeId: office.id }
        globeGroup.add(sprite)

        // Store reference (simplified - no animations)
        markersRef.current.set(office.id, {
          pin: sprite, pinMaterial: spriteMaterial,
          glow: sprite, glowMaterial: spriteMaterial,
          ring: sprite, ringMaterial: spriteMaterial,
          glowSphere: sprite, glowSphereMaterial: spriteMaterial
        })
      })

      // ===========================================
      // GLOBE VIEW ROTATION - Adjust to show desired region on load
      // rotation.y: Horizontal rotation (negative = rotate west/left, positive = rotate east/right)
      //             -2.2 radians ≈ -126 degrees (shows Middle East)
      //             0 = shows Pacific Ocean
      // rotation.x: Vertical tilt (positive = tilt down to show more north)
      //             0.4 radians ≈ 23 degrees tilt
      // ===========================================
      const INITIAL_ROTATION_Y = -1.9 // Horizontal: shows Middle East region
      const INITIAL_ROTATION_X = -0.1 // Tilt down to show more south

      globeGroup.rotation.y = INITIAL_ROTATION_Y
      globeGroup.rotation.x = INITIAL_ROTATION_X

      // No lighting needed - using MeshBasicMaterial which is unlit

      // Animation with visibility detection
      let time = 0
      const baseRotationY = globeGroup.rotation.y

      const animate = () => {
        animationId = requestAnimationFrame(animate)

        // Skip rendering if not visible
        if (!isVisibleRef.current) return

        time += 0.016

        // Gentle floating oscillation
        globeGroup.rotation.y = baseRotationY + Math.sin(time * 0.3) * 0.15

        // Animate traveling arcs
        arcMeshes.forEach((arc) => {
          const data = arc.userData
          data.progress += 0.25

          if (data.progress > data.totalPoints + data.segmentLength + 20) {
            data.progress = 0
          }

          if (data.segments) {
            data.segments.forEach((segment: any) => {
              const idx = segment.userData.index
              const isGlow = segment.userData.isGlow

              if (data.progress >= 0) {
                const head = Math.floor(data.progress)
                const tail = Math.floor(data.progress - data.segmentLength)

                if (idx >= tail && idx <= head && idx < data.totalPoints) {
                  segment.material.opacity = isGlow ? 0.6 : 1.0
                } else {
                  segment.material.opacity = 0
                }
              } else {
                segment.material.opacity = 0
              }
            })
          }
        })

        // Pin markers are static sprites - no animation needed

        renderer.render(scene, camera)
      }

      animate()
      setIsLoaded(true)

      // Debounced resize handler
      const handleResize = () => {
        if (resizeTimeout) clearTimeout(resizeTimeout)
        resizeTimeout = setTimeout(() => {
          if (!container) return
          const newWidth = container.clientWidth
          const newHeight = container.clientHeight
          const isMobileNow = newWidth < 768
          camera.aspect = newWidth / newHeight
          camera.position.z = isMobileNow ? 3.5 : 2.8
          camera.updateProjectionMatrix()
          renderer.setSize(newWidth, newHeight)
        }, 100)
      }

      window.addEventListener('resize', handleResize)

      // Visibility detection using Intersection Observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            isVisibleRef.current = entry.isIntersecting
          })
        },
        { threshold: 0.1 }
      )
      observer.observe(container)

      // Page visibility API
      const handleVisibilityChange = () => {
        isVisibleRef.current = !document.hidden &&
          (containerRef.current?.getBoundingClientRect().top ?? 0) < window.innerHeight
      }
      document.addEventListener('visibilitychange', handleVisibilityChange)

      // Store cleanup function
      cleanupRef.current = () => {
        window.removeEventListener('resize', handleResize)
        document.removeEventListener('visibilitychange', handleVisibilityChange)
        observer.disconnect()
        if (resizeTimeout) clearTimeout(resizeTimeout)

        // Dispose all resources
        disposables.textures.forEach(t => t?.dispose())
        disposables.geometries.forEach(g => g?.dispose())
        disposables.materials.forEach(m => m?.dispose())

        markersRef.current.clear()
      }

      return cleanupRef.current
    }

    initGlobe()

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (cleanupRef.current) cleanupRef.current()
      if (renderer && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
        renderer.dispose()
        renderer.forceContextLoss()
      }
    }
  }, [])

  return (
    <div className="globe-wrapper">
      <style jsx>{`
        .globe-wrapper {
          background: var(--bg-secondary);
          border-radius: var(--radius-2xl);
          padding: var(--space-6);
          border: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }

        .globe-header {
          text-align: center;
          margin-bottom: var(--space-4);
        }

        .globe-title {
          font-size: 1.25rem;
          font-weight: var(--font-weight-semibold);
          color: var(--text-primary);
          margin-bottom: var(--space-2);
        }

        .globe-subtitle {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0;
        }

        .globe-container {
          width: 100%;
          height: 500px;
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        .globe-canvas {
          width: 100%;
          height: 100%;
        }

        .loading-placeholder {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .offices-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-4);
          margin-top: var(--space-6);
        }

        .office-card {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          text-align: center;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .office-card:hover,
        .office-card.active {
          border-color: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 54, 33, 0.1);
        }

        .office-icon {
          width: 2.5rem;
          height: 2.5rem;
          background: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--space-3);
          color: white;
        }

        .office-name {
          font-weight: var(--font-weight-semibold);
          color: var(--text-primary);
          margin-bottom: var(--space-1);
          font-size: 0.9rem;
        }

        .office-tz {
          font-size: 0.75rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-1);
        }

        .benefits-section {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-4);
          padding-top: var(--space-6);
          margin-top: var(--space-6);
          border-top: 1px solid var(--border);
        }

        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
          padding: var(--space-3);
          background: var(--bg-primary);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
        }

        .benefit-icon {
          width: 2rem;
          height: 2rem;
          background: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .benefit-title {
          font-size: 0.875rem;
          font-weight: var(--font-weight-semibold);
          color: var(--text-primary);
          margin: 0 0 var(--space-1) 0;
        }

        .benefit-desc {
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .globe-wrapper {
            padding: var(--space-4);
          }

          .globe-container {
            height: 320px;
          }

          .globe-header {
            margin-bottom: var(--space-2);
          }

          .globe-title {
            font-size: 1.1rem;
          }

          .globe-subtitle {
            font-size: 0.8rem;
          }

          .offices-grid {
            grid-template-columns: 1fr;
            gap: var(--space-3);
            margin-top: var(--space-4);
          }

          .office-card {
            padding: var(--space-3);
          }

          .benefits-section {
            grid-template-columns: 1fr;
            gap: var(--space-3);
            padding-top: var(--space-4);
            margin-top: var(--space-4);
          }
        }
      `}</style>

      <div className="globe-header">
        <h3 className="globe-title">{t('title')}</h3>
        <p className="globe-subtitle">{t('subtitle')}</p>
      </div>

      <div className="globe-container">
        <div ref={containerRef} className="globe-canvas" />
        {!isLoaded && <div className="loading-placeholder">Loading globe...</div>}
      </div>

      <div className="offices-grid">
        {offices.map((office) => (
          <div
            key={office.id}
            className={`office-card ${hoveredOffice === office.id ? 'active' : ''}`}
            onMouseEnter={() => setHoveredOffice(office.id)}
            onMouseLeave={() => setHoveredOffice(null)}
          >
            <div className="office-icon">
              <MapPin size={16} />
            </div>
            <div className="office-name">{office.name}</div>
            <div className="office-tz">
              <Clock size={12} />
              {office.timezone}
            </div>
          </div>
        ))}
      </div>

      <div className="benefits-section">
        <div className="benefit-item">
          <div className="benefit-icon">
            <Globe size={14} />
          </div>
          <div>
            <h4 className="benefit-title">{t('worldwideTitle')}</h4>
            <p className="benefit-desc">{t('worldwideDescription')}</p>
          </div>
        </div>
        <div className="benefit-item">
          <div className="benefit-icon">
            <Users size={14} />
          </div>
          <div>
            <h4 className="benefit-title">{t('crossCulturalTitle')}</h4>
            <p className="benefit-desc">{t('crossCulturalDescription')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreeGlobe
