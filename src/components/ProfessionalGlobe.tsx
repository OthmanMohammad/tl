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

      // Earth day material
      const earthMaterial = new THREE.MeshPhongMaterial({
        map: earthDayTexture,
        bumpMap: earthBumpTexture,
        bumpScale: 0.015,
        specularMap: earthSpecularTexture,
        specular: new THREE.Color(0x222222),
        shininess: 15
      })

      const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial)
      globeGroup.add(earthMesh)

      // Night lights layer
      const nightMaterial = new THREE.MeshBasicMaterial({
        map: earthNightTexture,
        transparent: true,
        opacity: 0.4,
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

      // Office pin markers
      offices.forEach(office => {
        const phi = (90 - office.lat) * (Math.PI / 180)
        const theta = (office.lng + 180) * (Math.PI / 180)

        const x = -(Math.sin(phi) * Math.cos(theta))
        const y = Math.cos(phi)
        const z = Math.sin(phi) * Math.sin(theta)

        // Pin marker
        const pinGeometry = new THREE.SphereGeometry(0.02, 16, 16)
        const pinMaterial = new THREE.MeshBasicMaterial({
          color: 0xff3621,
          transparent: true,
          opacity: 1.0
        })
        const pin = new THREE.Mesh(pinGeometry, pinMaterial)
        pin.position.set(x * 1.02, y * 1.02, z * 1.02)
        pin.userData = { officeId: office.id }
        globeGroup.add(pin)

        // Glow ring
        const glowGeometry = new THREE.RingGeometry(0.025, 0.04, 32)
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: 0xff3621,
          transparent: true,
          opacity: 0,
          side: THREE.DoubleSide
        })
        const glow = new THREE.Mesh(glowGeometry, glowMaterial)
        glow.position.set(x * 1.025, y * 1.025, z * 1.025)
        glow.lookAt(0, 0, 0)
        globeGroup.add(glow)

        markersRef.current.set(office.id, { pin, pinMaterial, glow, glowMaterial })
      })

      // Rotate to show Middle East
      globeGroup.rotation.y = -0.3
      globeGroup.rotation.x = 0.1

      // Lighting
      const sunLight = new THREE.DirectionalLight(0xffffff, 2)
      sunLight.position.set(5, 3, 5)
      scene.add(sunLight)

      const ambientLight = new THREE.AmbientLight(0x404040, 1)
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

        // Clamp vertical rotation
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
        time += 0.01

        // Gentle auto-rotation when not dragging
        if (!isDragging) {
          globeGroup.rotation.y += 0.001
        }

        // Hover effects on pins
        markersRef.current.forEach((marker, id) => {
          const isHovered = hoveredOffice === id
          const targetOpacity = isHovered ? 0.9 : 0
          const targetScale = isHovered ? 1.5 : 1.0

          marker.glowMaterial.opacity += (targetOpacity - marker.glowMaterial.opacity) * 0.1
          const currentScale = marker.pin.scale.x
          const newScale = currentScale + (targetScale - currentScale) * 0.1
          marker.pin.scale.set(newScale, newScale, newScale)

          if (isHovered) {
            marker.glow.scale.setScalar(1 + Math.sin(time * 4) * 0.3)
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
