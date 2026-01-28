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

      // Scene setup with dark space background
      scene = new THREE.Scene()
      scene.background = new THREE.Color(0x000810)

      // Camera
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
      camera.position.z = 2.5

      // Renderer
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance'
      })
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.2
      container.appendChild(renderer.domElement)

      // Texture loader
      const textureLoader = new THREE.TextureLoader()

      // Load all textures
      const earthDayTexture = textureLoader.load('/textures/earth/earth-day.jpg')
      const earthNightTexture = textureLoader.load('/textures/earth/earth-night.jpg')
      const earthBumpTexture = textureLoader.load('/textures/earth/earth-bump.jpg')
      const earthSpecularTexture = textureLoader.load('/textures/earth/earth-specular.jpg')

      // Earth group (tilted like real Earth)
      const earthGroup = new THREE.Group()
      earthGroup.rotation.z = -23.4 * Math.PI / 180
      scene.add(earthGroup)

      // Create Earth sphere with real textures
      const earthGeometry = new THREE.SphereGeometry(1, 64, 64)

      // Earth material with real textures
      const earthMaterial = new THREE.MeshPhongMaterial({
        map: earthDayTexture,
        bumpMap: earthBumpTexture,
        bumpScale: 0.03,
        specularMap: earthSpecularTexture,
        specular: new THREE.Color(0x333333),
        shininess: 25
      })

      const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial)
      earthGroup.add(earthMesh)

      // City lights layer (night side glow) - using real night texture
      const lightsMaterial = new THREE.MeshBasicMaterial({
        map: earthNightTexture,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      })
      const lightsMesh = new THREE.Mesh(earthGeometry.clone(), lightsMaterial)
      earthGroup.add(lightsMesh)

      // Atmosphere glow (Fresnel effect)
      const atmosphereGeometry = new THREE.SphereGeometry(1.015, 64, 64)
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
            float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity * 0.8;
          }
        `,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        transparent: true
      })
      const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
      earthGroup.add(atmosphereMesh)

      // Office markers
      const markerGeometry = new THREE.SphereGeometry(0.025, 16, 16)
      const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xff3621 })

      offices.forEach(office => {
        // Convert lat/lng to 3D position
        const phi = (90 - office.lat) * (Math.PI / 180)
        const theta = (office.lng + 180) * (Math.PI / 180)

        const x = -(Math.sin(phi) * Math.cos(theta))
        const y = Math.cos(phi)
        const z = Math.sin(phi) * Math.sin(theta)

        const marker = new THREE.Mesh(markerGeometry, markerMaterial)
        marker.position.set(x * 1.02, y * 1.02, z * 1.02)
        marker.userData = { office }
        earthGroup.add(marker)

        // Add glow ring around marker
        const ringGeometry = new THREE.RingGeometry(0.035, 0.055, 32)
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: 0xff3621,
          transparent: true,
          opacity: 0.6,
          side: THREE.DoubleSide
        })
        const ring = new THREE.Mesh(ringGeometry, ringMaterial)
        ring.position.copy(marker.position)
        ring.lookAt(0, 0, 0)
        earthGroup.add(ring)

        // Add outer pulsing ring
        const pulseRingGeometry = new THREE.RingGeometry(0.06, 0.065, 32)
        const pulseRingMaterial = new THREE.MeshBasicMaterial({
          color: 0xff3621,
          transparent: true,
          opacity: 0.3,
          side: THREE.DoubleSide
        })
        const pulseRing = new THREE.Mesh(pulseRingGeometry, pulseRingMaterial)
        pulseRing.position.copy(marker.position)
        pulseRing.lookAt(0, 0, 0)
        pulseRing.userData = { isPulse: true, baseScale: 1 }
        earthGroup.add(pulseRing)
      })

      // Stars background
      const starsGeometry = new THREE.BufferGeometry()
      const starsCount = 3000
      const starsPositions = new Float32Array(starsCount * 3)
      const starsSizes = new Float32Array(starsCount)

      for (let i = 0; i < starsCount; i++) {
        const radius = 20 + Math.random() * 30
        const u = Math.random()
        const v = Math.random()
        const theta = 2 * Math.PI * u
        const phi = Math.acos(2 * v - 1)

        starsPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
        starsPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
        starsPositions[i * 3 + 2] = radius * Math.cos(phi)
        starsSizes[i] = Math.random() * 1.5 + 0.5
      }

      starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3))
      starsGeometry.setAttribute('size', new THREE.BufferAttribute(starsSizes, 1))

      const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.08,
        transparent: true,
        opacity: 0.9,
        sizeAttenuation: true
      })
      const stars = new THREE.Points(starsGeometry, starsMaterial)
      scene.add(stars)

      // Lighting - simulating sun
      const sunLight = new THREE.DirectionalLight(0xffffff, 2.5)
      sunLight.position.set(-3, 0.5, 1.5)
      scene.add(sunLight)

      // Subtle fill light
      const fillLight = new THREE.DirectionalLight(0x4488ff, 0.3)
      fillLight.position.set(2, 0, -1)
      scene.add(fillLight)

      // Very subtle ambient
      const ambientLight = new THREE.AmbientLight(0x222233, 0.3)
      scene.add(ambientLight)

      // Animation
      let time = 0
      const animate = () => {
        animationId = requestAnimationFrame(animate)
        time += 0.016

        // Rotate earth slowly
        earthMesh.rotation.y += 0.001
        lightsMesh.rotation.y += 0.001

        // Pulse effect on markers
        earthGroup.children.forEach(child => {
          if (child.userData.isPulse) {
            const scale = 1 + Math.sin(time * 2) * 0.3
            child.scale.set(scale, scale, scale)
            ;(child as any).material.opacity = 0.3 * (1 - (scale - 1) / 0.3)
          }
        })

        // Rotate stars very slowly
        stars.rotation.y -= 0.0001

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
  }, [])

  return (
    <div className="globe-wrapper">
      <style jsx>{`
        .globe-wrapper {
          background: linear-gradient(180deg, #000810 0%, #001020 50%, #000810 100%);
          border-radius: var(--radius-2xl);
          padding: var(--space-6);
          border: 1px solid rgba(100, 149, 237, 0.15);
          position: relative;
          overflow: hidden;
        }

        .globe-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(100, 149, 237, 0.3), transparent);
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
          color: white;
          margin-bottom: var(--space-2);
        }

        .globe-subtitle {
          color: rgba(148, 163, 184, 1);
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
          color: rgba(148, 163, 184, 0.6);
          font-size: 0.875rem;
        }

        .offices-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-4);
          margin-top: var(--space-6);
          position: relative;
          z-index: 1;
        }

        .office-card {
          background: rgba(20, 30, 50, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(100, 149, 237, 0.15);
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
          box-shadow: 0 8px 25px rgba(255, 54, 33, 0.15);
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
          color: white;
          margin-bottom: var(--space-1);
          font-size: 0.9rem;
        }

        .office-tz {
          font-size: 0.75rem;
          color: rgba(148, 163, 184, 1);
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
          border-top: 1px solid rgba(100, 149, 237, 0.15);
          position: relative;
          z-index: 1;
        }

        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
          padding: var(--space-3);
          background: rgba(20, 30, 50, 0.4);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(100, 149, 237, 0.1);
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
          color: white;
          margin: 0 0 var(--space-1) 0;
        }

        .benefit-desc {
          font-size: 0.75rem;
          color: rgba(148, 163, 184, 1);
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
