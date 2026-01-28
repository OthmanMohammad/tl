'use client'

import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Globe, Clock, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface Office {
  id: string;
  name: string;
  country: string;
  lat: number;
  lng: number;
  timezone: string;
  description: string;
}

const ProfessionalGlobe: React.FC = () => {
  const [hoveredOffice, setHoveredOffice] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const t = useTranslations('globe');
  const globeRef = useRef<SVGSVGElement>(null);

  // Auto-rotate globe when not hovering
  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.3) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, [isHovering]);

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
  ];

  // Convert lat/lng to 3D sphere coordinates, then project to 2D
  const latLngTo3D = (lat: number, lng: number, radius: number = 120) => {
    const adjustedLng = lng + rotation;
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (adjustedLng + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    // Check if point is on visible side of globe
    const isVisible = z > -20;

    return { x: x + 150, y: y + 150, z, isVisible };
  };

  return (
    <div className="globe-wrapper">
      <style jsx>{`
        .globe-wrapper {
          background: linear-gradient(135deg, var(--surface) 0%, var(--background) 100%);
          border-radius: var(--radius-2xl);
          padding: var(--space-8);
          border: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }

        .globe-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gradient-primary);
          border-radius: var(--radius-2xl) var(--radius-2xl) 0 0;
        }

        .globe-header {
          text-align: center;
          margin-bottom: var(--space-6);
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
          display: flex;
          align-items: center;
          justify-content: center;
          margin: var(--space-6) 0;
          position: relative;
        }

        .globe-svg {
          width: 300px;
          height: 300px;
          cursor: grab;
        }

        .globe-svg:active {
          cursor: grabbing;
        }

        .globe-ocean {
          fill: url(#oceanGradient);
          stroke: var(--border);
          stroke-width: 1;
        }

        .globe-land {
          fill: var(--primary);
          opacity: 0.2;
          stroke: var(--primary);
          stroke-width: 0.5;
          stroke-opacity: 0.5;
        }

        .globe-graticule {
          fill: none;
          stroke: var(--border);
          stroke-width: 0.3;
          opacity: 0.5;
        }

        .office-pin {
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .office-pin:hover {
          transform: scale(1.3);
        }

        .pin-outer {
          fill: var(--primary);
          filter: drop-shadow(0 2px 4px rgba(255, 54, 33, 0.4));
        }

        .pin-inner {
          fill: white;
        }

        .pin-pulse {
          fill: var(--primary);
          opacity: 0;
          animation: pulse 2s ease-out infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.6; r: 6; }
          100% { opacity: 0; r: 20; }
        }

        .tooltip {
          position: absolute;
          background: var(--navy-800, #1e293b);
          color: white;
          padding: var(--space-2) var(--space-3);
          border-radius: var(--radius-md);
          font-size: 0.75rem;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease;
          z-index: 10;
          white-space: nowrap;
          box-shadow: var(--shadow-md);
        }

        .tooltip.visible {
          opacity: 1;
        }

        .tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 5px solid transparent;
          border-top-color: var(--navy-800, #1e293b);
        }

        .offices-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-4);
          margin-bottom: var(--space-6);
        }

        .office-card {
          background: var(--background);
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
          box-shadow: var(--shadow-sm);
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
          border-top: 1px solid var(--border);
        }

        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
          padding: var(--space-3);
          background: rgba(255, 54, 33, 0.03);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(255, 54, 33, 0.1);
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
            padding: var(--space-6);
          }

          .globe-svg {
            width: 250px;
            height: 250px;
          }

          .offices-grid,
          .benefits-section {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .globe-svg {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>

      <div className="globe-header">
        <h3 className="globe-title">{t('title')}</h3>
        <p className="globe-subtitle">{t('subtitle')}</p>
      </div>

      <div className="globe-container">
        <svg
          ref={globeRef}
          className="globe-svg"
          viewBox="0 0 300 300"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <defs>
            <radialGradient id="oceanGradient" cx="30%" cy="30%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#bae6fd" />
            </radialGradient>
            <clipPath id="globeClip">
              <circle cx="150" cy="150" r="120" />
            </clipPath>
          </defs>

          {/* Globe base */}
          <circle cx="150" cy="150" r="120" className="globe-ocean" />

          {/* Graticule lines */}
          <g className="globe-graticule" clipPath="url(#globeClip)">
            {/* Latitude lines */}
            {[-60, -30, 0, 30, 60].map(lat => {
              const y = 150 - (lat / 90) * 120;
              const r = Math.cos(lat * Math.PI / 180) * 120;
              return (
                <ellipse
                  key={`lat-${lat}`}
                  cx="150"
                  cy={y}
                  rx={r}
                  ry={r * 0.3}
                  style={{ transform: `rotateY(${rotation}deg)`, transformOrigin: '150px 150px' }}
                />
              );
            })}
            {/* Longitude lines */}
            {[0, 30, 60, 90, 120, 150].map(lng => (
              <ellipse
                key={`lng-${lng}`}
                cx="150"
                cy="150"
                rx={Math.abs(Math.cos((lng + rotation) * Math.PI / 180)) * 120}
                ry="120"
                style={{ transform: `rotateZ(${(lng + rotation) % 180}deg)`, transformOrigin: '150px 150px' }}
              />
            ))}
          </g>

          {/* Simplified continent shapes */}
          <g clipPath="url(#globeClip)">
            {/* Europe */}
            <path
              className="globe-land"
              d="M 145 90 Q 160 85 175 90 Q 180 100 175 115 Q 165 120 155 118 Q 145 110 145 90"
              style={{
                transform: `translateX(${Math.sin(rotation * Math.PI / 180) * 30}px)`,
                opacity: Math.cos(rotation * Math.PI / 180) > -0.3 ? 0.2 : 0
              }}
            />
            {/* UK */}
            <path
              className="globe-land"
              d="M 135 95 Q 140 90 145 95 Q 145 105 140 108 Q 135 105 135 95"
              style={{
                transform: `translateX(${Math.sin(rotation * Math.PI / 180) * 30}px)`,
                opacity: Math.cos(rotation * Math.PI / 180) > -0.3 ? 0.2 : 0
              }}
            />
            {/* Africa */}
            <path
              className="globe-land"
              d="M 150 130 Q 170 125 180 145 Q 175 180 160 195 Q 145 190 140 165 Q 145 145 150 130"
              style={{
                transform: `translateX(${Math.sin(rotation * Math.PI / 180) * 30}px)`,
                opacity: Math.cos(rotation * Math.PI / 180) > -0.3 ? 0.2 : 0
              }}
            />
            {/* Middle East */}
            <path
              className="globe-land"
              d="M 175 115 Q 195 110 205 125 Q 200 140 185 145 Q 175 135 175 115"
              style={{
                transform: `translateX(${Math.sin(rotation * Math.PI / 180) * 30}px)`,
                opacity: Math.cos(rotation * Math.PI / 180) > -0.3 ? 0.2 : 0
              }}
            />
            {/* Asia */}
            <path
              className="globe-land"
              d="M 190 80 Q 230 70 250 90 Q 255 120 240 150 Q 210 160 190 140 Q 185 110 190 80"
              style={{
                transform: `translateX(${Math.sin(rotation * Math.PI / 180) * 30}px)`,
                opacity: Math.cos((rotation - 40) * Math.PI / 180) > -0.3 ? 0.2 : 0
              }}
            />
            {/* North America */}
            <path
              className="globe-land"
              d="M 50 85 Q 90 70 120 90 Q 125 120 110 145 Q 80 150 55 130 Q 45 105 50 85"
              style={{
                transform: `translateX(${Math.sin((rotation + 100) * Math.PI / 180) * 30}px)`,
                opacity: Math.cos((rotation + 100) * Math.PI / 180) > -0.3 ? 0.2 : 0
              }}
            />
            {/* South America */}
            <path
              className="globe-land"
              d="M 85 155 Q 105 150 115 170 Q 110 210 95 225 Q 80 220 75 190 Q 80 165 85 155"
              style={{
                transform: `translateX(${Math.sin((rotation + 80) * Math.PI / 180) * 30}px)`,
                opacity: Math.cos((rotation + 80) * Math.PI / 180) > -0.3 ? 0.2 : 0
              }}
            />
          </g>

          {/* Office pins */}
          {offices.map((office) => {
            const pos = latLngTo3D(office.lat, office.lng);
            if (!pos.isVisible) return null;

            const scale = (pos.z + 120) / 240; // Depth scaling

            return (
              <g
                key={office.id}
                className="office-pin"
                transform={`translate(${pos.x}, ${pos.y})`}
                onMouseEnter={() => setHoveredOffice(office.id)}
                onMouseLeave={() => setHoveredOffice(null)}
              >
                <circle className="pin-pulse" cx="0" cy="0" r="6" />
                <circle className="pin-outer" cx="0" cy="0" r={8 * scale} />
                <circle className="pin-inner" cx="0" cy="0" r={3 * scale} />
              </g>
            );
          })}

          {/* Globe edge highlight */}
          <circle
            cx="150"
            cy="150"
            r="120"
            fill="none"
            stroke="var(--border)"
            strokeWidth="2"
          />
        </svg>

        {/* Tooltips */}
        {offices.map((office) => {
          const pos = latLngTo3D(office.lat, office.lng);
          if (!pos.isVisible) return null;

          return (
            <div
              key={`tip-${office.id}`}
              className={`tooltip ${hoveredOffice === office.id ? 'visible' : ''}`}
              style={{
                left: `calc(50% + ${pos.x - 150}px)`,
                top: `calc(50% + ${pos.y - 150 - 35}px)`,
                transform: 'translateX(-50%)'
              }}
            >
              <strong>{office.name}</strong>
              <br />
              {office.timezone}
            </div>
          );
        })}
      </div>

      {/* Office cards */}
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

      {/* Benefits */}
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
  );
};

export default ProfessionalGlobe;
