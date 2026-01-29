'use client'

import React, { useEffect, useRef, useState } from 'react'
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
    let isDragging = false
    let previousMousePosition = { x: 0, y: 0 }
    let globeGroup: any
    let arcMeshes: any[] = []

    const initGlobe = async () => {
      const THREE = await import('three') as ThreeModule

      const container = containerRef.current
      if (!container) return

      const width = container.clientWidth
      const height = 500

      // Scene with transparent background
      scene = new THREE.Scene()

      // Camera
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
      camera.position.z = 2.8

      // Renderer with transparency
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

      // Load high quality textures
      const earthDayTexture = textureLoader.load('/textures/earth/earthmap10k.jpg', (texture) => {
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy()
        texture.colorSpace = THREE.SRGBColorSpace
      })

      const earthNightTexture = textureLoader.load('/textures/earth/earth-night-4k.jpg', (texture) => {
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy()
      })

      const earthBumpTexture = textureLoader.load('/textures/earth/earth-bump.jpg', (texture) => {
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy()
      })

      const earthSpecularTexture = textureLoader.load('/textures/earth/earth-specular.jpg', (texture) => {
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy()
      })

      // Globe group for rotation
      globeGroup = new THREE.Group()
      scene.add(globeGroup)

      // Earth geometry - high detail
      const earthGeometry = new THREE.SphereGeometry(1, 128, 128)

      // Dark base sphere with faint geography (day texture heavily darkened)
      const earthMaterial = new THREE.MeshPhongMaterial({
        map: earthDayTexture,
        bumpMap: earthBumpTexture,
        bumpScale: 0.01,
        color: 0x111115, // Very dark tint
        shininess: 5,
        emissive: 0x000005,
        emissiveIntensity: 0.1
      })

      const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial)
      globeGroup.add(earthMesh)

      // Night lights layer - PRIMARY visible layer
      const nightMaterial = new THREE.MeshBasicMaterial({
        map: earthNightTexture,
        transparent: true,
        opacity: 1.0,
        blending: THREE.AdditiveBlending
      })
      const nightMesh = new THREE.Mesh(earthGeometry.clone(), nightMaterial)
      globeGroup.add(nightMesh)

      // Fresnel atmosphere glow
      const fresnelMaterial = new THREE.ShaderMaterial({
        uniforms: {
          color1: { value: new THREE.Color(0x0088ff) },
          color2: { value: new THREE.Color(0x000000) },
          fresnelBias: { value: 0.1 },
          fresnelScale: { value: 1.0 },
          fresnelPower: { value: 4.0 }
        },
        vertexShader: `
          uniform float fresnelBias;
          uniform float fresnelScale;
          uniform float fresnelPower;
          varying float vReflectionFactor;

          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
            vec3 worldNormal = normalize(mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * normal);
            vec3 I = worldPosition.xyz - cameraPosition;
            vReflectionFactor = fresnelBias + fresnelScale * pow(1.0 + dot(normalize(I), worldNormal), fresnelPower);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
          varying float vReflectionFactor;

          void main() {
            float f = clamp(vReflectionFactor, 0.0, 1.0);
            gl_FragColor = vec4(mix(color2, color1, vec3(f)), f);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending
      })

      const atmosphereGeometry = new THREE.SphereGeometry(1.01, 64, 64)
      const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, fresnelMaterial)
      globeGroup.add(atmosphereMesh)

      // Helper: Convert lat/lng to 3D position
      const latLngToVector3 = (lat: number, lng: number, radius: number) => {
        const phi = (90 - lat) * (Math.PI / 180)
        const theta = (lng + 180) * (Math.PI / 180)
        const x = -(radius * Math.sin(phi) * Math.cos(theta))
        const y = radius * Math.cos(phi)
        const z = radius * Math.sin(phi) * Math.sin(theta)
        return new THREE.Vector3(x, y, z)
      }

      // Create traveling arc (animated beam from start to end)
      const createTravelingArc = (startLat: number, startLng: number, endLat: number, endLng: number) => {
        const start = latLngToVector3(startLat, startLng, 1.02)
        const end = latLngToVector3(endLat, endLng, 1.02)

        const distance = start.distanceTo(end)
        const arcHeight = 1.02 + distance * 0.35

        const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5)
        mid.normalize().multiplyScalar(arcHeight)

        const curve = new THREE.QuadraticBezierCurve3(start, mid, end)
        const points = curve.getPoints(100)

        const geometry = new THREE.BufferGeometry().setFromPoints(points)

        // Glowing line material
        const material = new THREE.LineBasicMaterial({
          color: 0x00ffaa,
          transparent: true,
          opacity: 0.9,
          linewidth: 2
        })

        const line = new THREE.Line(geometry, material)
        line.userData = {
          progress: 0,
          totalPoints: 101,
          segmentLength: 15 // Length of the traveling segment
        }

        // Start with nothing visible
        geometry.setDrawRange(0, 0)

        return line
      }

      // Create arc from Nablus to Aberdeen
      const travelingArc = createTravelingArc(
        offices[1].lat, offices[1].lng, // Nablus (start)
        offices[0].lat, offices[0].lng  // Aberdeen (end)
      )
      globeGroup.add(travelingArc)
      arcMeshes.push(travelingArc)

      // Second arc going back (with delay)
      const travelingArc2 = createTravelingArc(
        offices[0].lat, offices[0].lng, // Aberdeen (start)
        offices[1].lat, offices[1].lng  // Nablus (end)
      )
      travelingArc2.userData.progress = -50 // Start delayed
      travelingArc2.material.color.setHex(0xff6644) // Orange color
      globeGroup.add(travelingArc2)
      arcMeshes.push(travelingArc2)

      // Office pin markers - WHITE GLOWING
      offices.forEach(office => {
        const pos = latLngToVector3(office.lat, office.lng, 1.02)

        // Inner bright white pin
        const pinGeometry = new THREE.SphereGeometry(0.02, 16, 16)
        const pinMaterial = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 1.0
        })
        const pin = new THREE.Mesh(pinGeometry, pinMaterial)
        pin.position.copy(pos)
        pin.userData = { officeId: office.id }
        globeGroup.add(pin)

        // Outer glow sphere (larger, transparent)
        const glowSphereGeometry = new THREE.SphereGeometry(0.035, 16, 16)
        const glowSphereMaterial = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.3
        })
        const glowSphere = new THREE.Mesh(glowSphereGeometry, glowSphereMaterial)
        glowSphere.position.copy(pos)
        globeGroup.add(glowSphere)

        // Pulsing ring effect - white
        const ringGeometry = new THREE.RingGeometry(0.04, 0.055, 32)
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.4,
          side: THREE.DoubleSide
        })
        const ring = new THREE.Mesh(ringGeometry, ringMaterial)
        ring.position.copy(pos.clone().multiplyScalar(1.001))
        ring.lookAt(0, 0, 0)
        ring.userData = { isPulse: true }
        globeGroup.add(ring)

        // Hover glow ring
        const hoverGlowGeometry = new THREE.RingGeometry(0.05, 0.07, 32)
        const hoverGlowMaterial = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0,
          side: THREE.DoubleSide
        })
        const hoverGlow = new THREE.Mesh(hoverGlowGeometry, hoverGlowMaterial)
        hoverGlow.position.copy(pos.clone().multiplyScalar(1.002))
        hoverGlow.lookAt(0, 0, 0)
        globeGroup.add(hoverGlow)

        markersRef.current.set(office.id, {
          pin, pinMaterial,
          glow: hoverGlow, glowMaterial: hoverGlowMaterial,
          ring, ringMaterial,
          glowSphere, glowSphereMaterial
        })
      })

      // Rotate to show Middle East
      globeGroup.rotation.y = -0.3
      globeGroup.rotation.x = 0.1

      // Subtle lighting - keep it dark for night view
      const sunLight = new THREE.DirectionalLight(0xffffff, 0.3)
      sunLight.position.set(5, 3, 5)
      scene.add(sunLight)

      const ambientLight = new THREE.AmbientLight(0x222233, 0.5)
      scene.add(ambientLight)

      // Mouse interaction for rotation
      const onMouseDown = (event: MouseEvent) => {
        isDragging = true
        previousMousePosition = { x: event.clientX, y: event.clientY }
      }

      const onMouseMove = (event: MouseEvent) => {
        if (!isDragging) return

        const deltaX = event.clientX - previousMousePosition.x
        const deltaY = event.clientY - previousMousePosition.y

        globeGroup.rotation.y += deltaX * 0.005
        globeGroup.rotation.x += deltaY * 0.005
        globeGroup.rotation.x = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, globeGroup.rotation.x))

        previousMousePosition = { x: event.clientX, y: event.clientY }
      }

      const onMouseUp = () => {
        isDragging = false
      }

      const onTouchStart = (event: TouchEvent) => {
        if (event.touches.length === 1) {
          isDragging = true
          previousMousePosition = { x: event.touches[0].clientX, y: event.touches[0].clientY }
        }
      }

      const onTouchMove = (event: TouchEvent) => {
        if (!isDragging || event.touches.length !== 1) return

        const deltaX = event.touches[0].clientX - previousMousePosition.x
        const deltaY = event.touches[0].clientY - previousMousePosition.y

        globeGroup.rotation.y += deltaX * 0.005
        globeGroup.rotation.x += deltaY * 0.005
        globeGroup.rotation.x = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, globeGroup.rotation.x))

        previousMousePosition = { x: event.touches[0].clientX, y: event.touches[0].clientY }
      }

      const onTouchEnd = () => {
        isDragging = false
      }

      renderer.domElement.addEventListener('mousedown', onMouseDown)
      renderer.domElement.addEventListener('mousemove', onMouseMove)
      renderer.domElement.addEventListener('mouseup', onMouseUp)
      renderer.domElement.addEventListener('mouseleave', onMouseUp)
      renderer.domElement.addEventListener('touchstart', onTouchStart)
      renderer.domElement.addEventListener('touchmove', onTouchMove)
      renderer.domElement.addEventListener('touchend', onTouchEnd)

      // Animation
      let time = 0

      const animate = () => {
        animationId = requestAnimationFrame(animate)
        time += 0.016

        // Gentle auto-rotation when not dragging
        if (!isDragging) {
          globeGroup.rotation.y += 0.001
        }

        // Animate traveling arcs
        arcMeshes.forEach((arc) => {
          const data = arc.userData
          data.progress += 1.5 // Speed of travel

          if (data.progress > data.totalPoints + data.segmentLength + 30) {
            // Reset after completing + pause
            data.progress = 0
          }

          if (data.progress >= 0) {
            // Calculate draw range for traveling segment
            const start = Math.max(0, Math.floor(data.progress - data.segmentLength))
            const end = Math.min(data.totalPoints, Math.floor(data.progress))
            const count = Math.max(0, end - start)

            arc.geometry.setDrawRange(start, count)

            // Fade out at the end
            if (data.progress > data.totalPoints - 5) {
              arc.material.opacity = Math.max(0, 1 - (data.progress - data.totalPoints + 5) / 10)
            } else {
              arc.material.opacity = 0.9
            }
          } else {
            arc.geometry.setDrawRange(0, 0)
          }
        })

        // Pulse effect on pin rings and glow spheres
        markersRef.current.forEach((marker, id) => {
          if (marker.ring && marker.ring.userData.isPulse) {
            const scale = 1 + Math.sin(time * 2) * 0.3
            marker.ring.scale.set(scale, scale, scale)
            marker.ringMaterial.opacity = 0.4 * (1 - (scale - 1) / 0.3)
          }

          // Pulsing glow sphere
          if (marker.glowSphere) {
            const glowScale = 1 + Math.sin(time * 1.5) * 0.15
            marker.glowSphere.scale.set(glowScale, glowScale, glowScale)
            marker.glowSphereMaterial.opacity = 0.25 + Math.sin(time * 1.5) * 0.1
          }

          // Hover effects
          const isHovered = hoveredOffice === id
          const targetOpacity = isHovered ? 0.8 : 0
          const targetScale = isHovered ? 1.3 : 1.0

          marker.glowMaterial.opacity += (targetOpacity - marker.glowMaterial.opacity) * 0.1
          const currentScale = marker.pin.scale.x
          const newScale = currentScale + (targetScale - currentScale) * 0.1
          marker.pin.scale.set(newScale, newScale, newScale)

          if (isHovered) {
            marker.glow.scale.setScalar(1 + Math.sin(time * 4) * 0.2)
          }
        })

        renderer.render(scene, camera)
      }

      animate()
      setIsLoaded(true)

      // Resize handler
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
        renderer.domElement.removeEventListener('mousedown', onMouseDown)
        renderer.domElement.removeEventListener('mousemove', onMouseMove)
        renderer.domElement.removeEventListener('mouseup', onMouseUp)
        renderer.domElement.removeEventListener('mouseleave', onMouseUp)
        renderer.domElement.removeEventListener('touchstart', onTouchStart)
        renderer.domElement.removeEventListener('touchmove', onTouchMove)
        renderer.domElement.removeEventListener('touchend', onTouchEnd)
      }
    }

    initGlobe()

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
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
          cursor: grab;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        .globe-container:active {
          cursor: grabbing;
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

        .drag-hint {
          position: absolute;
          bottom: var(--space-3);
          left: 50%;
          transform: translateX(-50%);
          color: var(--text-secondary);
          font-size: 0.75rem;
          opacity: 0.7;
          pointer-events: none;
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
          .globe-container {
            height: 400px;
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
        {isLoaded && <div className="drag-hint">Drag to rotate</div>}
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
