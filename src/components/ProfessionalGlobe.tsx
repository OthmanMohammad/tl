'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { MapPin, Clock, Globe, Users } from 'lucide-react'

// Types for Three.js (dynamically imported)
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

const ThreeGlobe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredOffice, setHoveredOffice] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const markersRef = useRef<Map<string, any>>(new Map())
  const t = useTranslations('globe')

  const offices: Office[] = [
    {
      id: 'uk',
      name: t('aberdeenName'),
      country: t('aberdeenCountry'),
      lat: 57.1497,
      lng: -2.0943,
      timezone: 'GMT+0',
      description: t('aberdeenDescription')
    },
    {
      id: 'palestine',
      name: t('nablusName'),
      country: t('nablusCountry'),
      lat: 32.2211,
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

    const initGlobe = async () => {
      // Dynamically import Three.js to avoid SSR issues
      const THREE = await import('three') as ThreeModule

      const container = containerRef.current
      if (!container) return

      const width = container.clientWidth
      const height = 400

      // Scene setup - transparent background to show page bg
      scene = new THREE.Scene()

      // Camera
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
      camera.position.z = 2.5

      // Renderer with alpha for transparent background
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      })
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setClearColor(0x000000, 0)
      container.appendChild(renderer.domElement)

      // Texture loader
      const textureLoader = new THREE.TextureLoader()

      // Load night texture (primary) and day texture (subtle)
      const earthNightTexture = textureLoader.load('/textures/earth/earth-night.jpg')
      const earthBumpTexture = textureLoader.load('/textures/earth/earth-bump.jpg')

      // Earth group (tilted like real Earth)
      const earthGroup = new THREE.Group()
      earthGroup.rotation.z = -23.4 * Math.PI / 180
      scene.add(earthGroup)

      // Create Earth sphere - night side primary
      const earthGeometry = new THREE.SphereGeometry(1, 64, 64)

      // Dark earth base with subtle bump
      const earthMaterial = new THREE.MeshPhongMaterial({
        color: 0x111122,
        bumpMap: earthBumpTexture,
        bumpScale: 0.02,
        shininess: 5
      })

      const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial)
      earthGroup.add(earthMesh)

      // City lights layer - this is the main visible layer
      const lightsMaterial = new THREE.MeshBasicMaterial({
        map: earthNightTexture,
        transparent: true,
        opacity: 1.0,
        blending: THREE.AdditiveBlending
      })
      const lightsMesh = new THREE.Mesh(earthGeometry.clone(), lightsMaterial)
      earthGroup.add(lightsMesh)

      // Subtle atmosphere glow
      const atmosphereGeometry = new THREE.SphereGeometry(1.02, 64, 64)
      const atmosphereMaterial = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          void main() {
            float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            gl_FragColor = vec4(0.2, 0.4, 0.8, 1.0) * intensity * 0.4;
          }
        `,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        transparent: true
      })
      const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
      earthGroup.add(atmosphereMesh)

      // Office pin markers
      offices.forEach(office => {
        // Convert lat/lng to 3D position
        const phi = (90 - office.lat) * (Math.PI / 180)
        const theta = (office.lng + 180) * (Math.PI / 180)

        const x = -(Math.sin(phi) * Math.cos(theta))
        const y = Math.cos(phi)
        const z = Math.sin(phi) * Math.sin(theta)

        // Pin base (small sphere)
        const pinBaseGeometry = new THREE.SphereGeometry(0.018, 16, 16)
        const pinBaseMaterial = new THREE.MeshBasicMaterial({ color: 0xff3621 })
        const pinBase = new THREE.Mesh(pinBaseGeometry, pinBaseMaterial)
        pinBase.position.set(x * 1.01, y * 1.01, z * 1.01)
        earthGroup.add(pinBase)

        // Pin stem (cylinder pointing outward)
        const pinStemGeometry = new THREE.CylinderGeometry(0.004, 0.004, 0.05, 8)
        const pinStemMaterial = new THREE.MeshBasicMaterial({ color: 0xff3621 })
        const pinStem = new THREE.Mesh(pinStemGeometry, pinStemMaterial)

        // Position and orient the stem
        const stemPos = new THREE.Vector3(x, y, z).multiplyScalar(1.035)
        pinStem.position.copy(stemPos)
        pinStem.lookAt(0, 0, 0)
        pinStem.rotateX(Math.PI / 2)
        earthGroup.add(pinStem)

        // Pin head (larger sphere at top)
        const pinHeadGeometry = new THREE.SphereGeometry(0.025, 16, 16)
        const pinHeadMaterial = new THREE.MeshBasicMaterial({
          color: 0xff3621,
          transparent: true,
          opacity: 1.0
        })
        const pinHead = new THREE.Mesh(pinHeadGeometry, pinHeadMaterial)
        const headPos = new THREE.Vector3(x, y, z).multiplyScalar(1.06)
        pinHead.position.copy(headPos)
        pinHead.userData = { officeId: office.id }
        earthGroup.add(pinHead)

        // Glow ring (visible on hover)
        const glowGeometry = new THREE.RingGeometry(0.03, 0.05, 32)
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: 0xff3621,
          transparent: true,
          opacity: 0,
          side: THREE.DoubleSide
        })
        const glow = new THREE.Mesh(glowGeometry, glowMaterial)
        glow.position.copy(headPos)
        glow.lookAt(0, 0, 0)
        glow.userData = { isGlow: true, officeId: office.id }
        earthGroup.add(glow)

        // Store references for hover effects
        markersRef.current.set(office.id, {
          pinHead,
          pinHeadMaterial,
          glow,
          glowMaterial
        })
      })

      // Subtle ambient light
      const ambientLight = new THREE.AmbientLight(0x333344, 0.5)
      scene.add(ambientLight)

      // Gentle directional light for depth
      const dirLight = new THREE.DirectionalLight(0x6688aa, 0.3)
      dirLight.position.set(1, 0.5, 1)
      scene.add(dirLight)

      // Animation - gentle floating motion
      let time = 0
      const baseRotation = earthGroup.rotation.y

      const animate = () => {
        animationId = requestAnimationFrame(animate)
        time += 0.01

        // Gentle oscillating rotation (floating effect)
        earthMesh.rotation.y = baseRotation + Math.sin(time * 0.5) * 0.15
        lightsMesh.rotation.y = baseRotation + Math.sin(time * 0.5) * 0.15

        // Update hover effects
        markersRef.current.forEach((marker, id) => {
          const isHovered = hoveredOffice === id
          const targetOpacity = isHovered ? 0.8 : 0
          const targetScale = isHovered ? 1.3 : 1.0

          // Animate glow
          marker.glowMaterial.opacity += (targetOpacity - marker.glowMaterial.opacity) * 0.1

          // Animate pin head scale
          const currentScale = marker.pinHead.scale.x
          const newScale = currentScale + (targetScale - currentScale) * 0.1
          marker.pinHead.scale.set(newScale, newScale, newScale)

          // Pulsing glow when hovered
          if (isHovered) {
            marker.glow.scale.setScalar(1 + Math.sin(time * 4) * 0.2)
          }
        })

        renderer.render(scene, camera)
      }

      animate()
      setIsLoaded(true)

      // Handle resize
      const handleResize = () => {
        if (!container) return
        const newWidth = container.clientWidth
        camera.aspect = newWidth / height
        camera.updateProjectionMatrix()
        renderer.setSize(newWidth, height)
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }

    initGlobe()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (renderer && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
        renderer.dispose()
      }
    }
  }, [hoveredOffice])

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
          position: relative;
          z-index: 1;
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
          height: 400px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .globe-canvas {
          width: 100%;
          height: 100%;
          border-radius: var(--radius-lg);
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
          margin-top: var(--space-8);
          padding-top: var(--space-4);
          position: relative;
          z-index: 1;
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
          position: relative;
          z-index: 1;
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
          .globe-container {
            height: 300px;
          }

          .offices-grid,
          .benefits-section {
            grid-template-columns: 1fr;
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
