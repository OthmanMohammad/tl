'use client'

import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Globe, Clock, Users, Plane } from 'lucide-react';
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
  const [isAnimated, setIsAnimated] = useState(false);
  const t = useTranslations('globe');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

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

  // Convert lat/lng to SVG coordinates for our map projection
  const latLngToSvg = (lat: number, lng: number) => {
    // Mercator-like projection adjusted for our viewBox
    const x = ((lng + 180) / 360) * 800;
    const y = ((90 - lat) / 180) * 400;
    return { x, y };
  };

  const aberdeenPos = latLngToSvg(offices[0].lat, offices[0].lng);
  const nablusPos = latLngToSvg(offices[1].lat, offices[1].lng);

  // Calculate arc control point for curved connection line
  const midX = (aberdeenPos.x + nablusPos.x) / 2;
  const midY = (aberdeenPos.y + nablusPos.y) / 2 - 40; // Curve upward

  return (
    <div className="globe-container" ref={containerRef}>
      <style jsx>{`
        .globe-container {
          background: linear-gradient(180deg, #0a192f 0%, #112240 50%, #1a365d 100%);
          border-radius: var(--radius-2xl);
          padding: var(--space-8);
          border: 1px solid rgba(100, 255, 218, 0.1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .globe-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
        }

        .stars {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          opacity: 0.3;
          animation: twinkle 3s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        .globe-header {
          text-align: center;
          margin-bottom: var(--space-6);
          position: relative;
          z-index: 1;
        }

        .globe-title {
          font-size: 1.5rem;
          font-weight: var(--font-weight-bold);
          color: white;
          margin-bottom: var(--space-2);
          letter-spacing: -0.02em;
          font-family: var(--font-display);
        }

        .globe-subtitle {
          color: rgba(148, 163, 184, 1);
          font-size: 1rem;
          margin: 0;
          line-height: 1.6;
        }

        .map-container {
          position: relative;
          margin: var(--space-6) 0;
          border-radius: var(--radius-xl);
          overflow: hidden;
          background: linear-gradient(180deg, rgba(30, 58, 95, 0.3) 0%, rgba(15, 30, 50, 0.5) 100%);
          border: 1px solid rgba(100, 255, 218, 0.1);
        }

        .world-map {
          width: 100%;
          height: auto;
          display: block;
        }

        .continent {
          fill: rgba(100, 255, 218, 0.15);
          stroke: rgba(100, 255, 218, 0.3);
          stroke-width: 0.5;
          transition: all 0.3s ease;
        }

        .continent:hover {
          fill: rgba(100, 255, 218, 0.25);
        }

        .grid-line {
          stroke: rgba(100, 255, 218, 0.08);
          stroke-width: 0.5;
          fill: none;
        }

        .connection-arc {
          fill: none;
          stroke: url(#arcGradient);
          stroke-width: 2;
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          filter: drop-shadow(0 0 6px rgba(255, 54, 33, 0.6));
        }

        .connection-arc.animated {
          animation: drawArc 2s ease-out forwards;
        }

        @keyframes drawArc {
          to {
            stroke-dashoffset: 0;
          }
        }

        .arc-glow {
          fill: none;
          stroke: rgba(255, 54, 33, 0.3);
          stroke-width: 6;
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
        }

        .arc-glow.animated {
          animation: drawArc 2s ease-out forwards;
        }

        .office-marker {
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .office-marker:hover {
          transform: scale(1.2);
        }

        .marker-pulse {
          fill: var(--primary);
          opacity: 0.4;
          animation: pulse 2s ease-out infinite;
        }

        .marker-pulse.animated {
          animation: pulse 2s ease-out infinite;
        }

        @keyframes pulse {
          0% {
            r: 8;
            opacity: 0.6;
          }
          100% {
            r: 25;
            opacity: 0;
          }
        }

        .marker-dot {
          fill: var(--primary);
          stroke: white;
          stroke-width: 2;
          filter: drop-shadow(0 2px 8px rgba(255, 54, 33, 0.5));
        }

        .marker-inner {
          fill: white;
        }

        .floating-plane {
          animation: flyPlane 4s ease-in-out infinite;
          opacity: 0;
        }

        .floating-plane.animated {
          opacity: 1;
        }

        @keyframes flyPlane {
          0% {
            offset-distance: 0%;
          }
          100% {
            offset-distance: 100%;
          }
        }

        .tooltip {
          position: absolute;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(100, 255, 218, 0.2);
          color: white;
          padding: var(--space-3) var(--space-4);
          border-radius: var(--radius-lg);
          font-size: 0.875rem;
          pointer-events: none;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
          z-index: 100;
          min-width: 160px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .tooltip.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .tooltip-name {
          font-weight: var(--font-weight-semibold);
          margin-bottom: var(--space-1);
          color: white;
        }

        .tooltip-country {
          font-size: 0.75rem;
          color: rgba(100, 255, 218, 0.8);
          margin-bottom: var(--space-2);
        }

        .tooltip-timezone {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: 0.75rem;
          color: rgba(148, 163, 184, 1);
        }

        .offices-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-4);
          margin-bottom: var(--space-6);
          position: relative;
          z-index: 1;
        }

        .office-card {
          background: rgba(30, 41, 59, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(100, 255, 218, 0.1);
          border-radius: var(--radius-xl);
          padding: var(--space-5);
          transition: all 0.3s ease;
          cursor: pointer;
          text-align: center;
        }

        .office-card:hover,
        .office-card.highlighted {
          border-color: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 54, 33, 0.2);
        }

        .office-icon-wrapper {
          width: 3rem;
          height: 3rem;
          background: linear-gradient(135deg, var(--primary) 0%, #ff6b5b 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--space-3);
          box-shadow: 0 4px 15px rgba(255, 54, 33, 0.4);
        }

        .office-icon {
          color: white;
        }

        .office-card-name {
          font-size: 1rem;
          font-weight: var(--font-weight-semibold);
          color: white;
          margin-bottom: var(--space-1);
        }

        .office-card-country {
          font-size: 0.875rem;
          color: rgba(148, 163, 184, 1);
          margin-bottom: var(--space-2);
        }

        .office-card-timezone {
          display: inline-flex;
          align-items: center;
          gap: var(--space-1);
          font-size: 0.75rem;
          color: rgba(100, 255, 218, 0.8);
          background: rgba(100, 255, 218, 0.1);
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-full);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-4);
          padding-top: var(--space-6);
          border-top: 1px solid rgba(100, 255, 218, 0.1);
          position: relative;
          z-index: 1;
        }

        .benefit-card {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
          padding: var(--space-4);
          background: rgba(30, 41, 59, 0.3);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(100, 255, 218, 0.05);
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          background: rgba(30, 41, 59, 0.5);
          border-color: rgba(100, 255, 218, 0.15);
        }

        .benefit-icon-wrapper {
          width: 2.5rem;
          height: 2.5rem;
          background: linear-gradient(135deg, var(--primary) 0%, #ff6b5b 100%);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .benefit-icon {
          color: white;
        }

        .benefit-title {
          font-size: 0.875rem;
          font-weight: var(--font-weight-semibold);
          color: white;
          margin: 0 0 var(--space-1) 0;
        }

        .benefit-desc {
          font-size: 0.8rem;
          color: rgba(148, 163, 184, 1);
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .globe-container {
            padding: var(--space-6);
          }

          .offices-grid,
          .benefits-grid {
            grid-template-columns: 1fr;
          }

          .globe-title {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .globe-container {
            padding: var(--space-4);
          }

          .office-card {
            padding: var(--space-4);
          }

          .benefit-card {
            padding: var(--space-3);
          }
        }
      `}</style>

      {/* Animated stars background */}
      <div className="stars">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="globe-header">
        <h3 className="globe-title">{t('title')}</h3>
        <p className="globe-subtitle">{t('subtitle')}</p>
      </div>

      {/* Interactive World Map */}
      <div className="map-container">
        <svg
          className="world-map"
          viewBox="0 0 800 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="50%" stopColor="#ff6b5b" />
              <stop offset="100%" stopColor="var(--primary)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Grid lines */}
          {[...Array(9)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 50}
              x2="800"
              y2={i * 50}
              className="grid-line"
            />
          ))}
          {[...Array(17)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 50}
              y1="0"
              x2={i * 50}
              y2="400"
              className="grid-line"
            />
          ))}

          {/* Simplified continents */}
          {/* Europe */}
          <path
            className="continent"
            d="M340 80 L380 75 L420 80 L440 100 L430 130 L400 140 L370 135 L350 110 Z"
          />
          {/* UK & Ireland */}
          <path
            className="continent"
            d="M335 85 L345 80 L350 90 L345 100 L335 95 Z"
          />
          {/* Africa */}
          <path
            className="continent"
            d="M350 150 L400 145 L440 160 L450 220 L430 280 L380 290 L340 260 L330 200 Z"
          />
          {/* Middle East */}
          <path
            className="continent"
            d="M440 130 L480 120 L510 140 L500 170 L460 175 L440 160 Z"
          />
          {/* Asia */}
          <path
            className="continent"
            d="M500 60 L600 50 L700 70 L720 120 L700 180 L600 200 L520 170 L500 120 Z"
          />
          {/* North America */}
          <path
            className="continent"
            d="M80 60 L180 50 L260 70 L280 130 L250 180 L180 190 L100 160 L60 100 Z"
          />
          {/* South America */}
          <path
            className="continent"
            d="M200 200 L260 190 L280 250 L260 340 L220 360 L180 320 L190 250 Z"
          />
          {/* Australia */}
          <path
            className="continent"
            d="M620 260 L700 250 L720 290 L700 330 L640 340 L610 300 Z"
          />

          {/* Connection arc with glow */}
          <path
            className={`arc-glow ${isAnimated ? 'animated' : ''}`}
            d={`M ${aberdeenPos.x} ${aberdeenPos.y} Q ${midX} ${midY} ${nablusPos.x} ${nablusPos.y}`}
          />
          <path
            className={`connection-arc ${isAnimated ? 'animated' : ''}`}
            d={`M ${aberdeenPos.x} ${aberdeenPos.y} Q ${midX} ${midY} ${nablusPos.x} ${nablusPos.y}`}
            filter="url(#glow)"
          />

          {/* Office markers */}
          {offices.map((office, index) => {
            const pos = index === 0 ? aberdeenPos : nablusPos;
            return (
              <g
                key={office.id}
                className="office-marker"
                onMouseEnter={() => setHoveredOffice(office.id)}
                onMouseLeave={() => setHoveredOffice(null)}
                style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
              >
                <circle
                  cx="0"
                  cy="0"
                  r="8"
                  className={`marker-pulse ${isAnimated ? 'animated' : ''}`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                />
                <circle
                  cx="0"
                  cy="0"
                  r="8"
                  className={`marker-pulse ${isAnimated ? 'animated' : ''}`}
                  style={{ animationDelay: `${index * 0.5 + 1}s` }}
                />
                <circle cx="0" cy="0" r="8" className="marker-dot" />
                <circle cx="0" cy="0" r="3" className="marker-inner" />
              </g>
            );
          })}
        </svg>

        {/* Tooltips */}
        {offices.map((office, index) => {
          const pos = index === 0 ? aberdeenPos : nablusPos;
          const mapWidth = containerRef.current?.querySelector('.map-container')?.clientWidth || 800;
          const scale = mapWidth / 800;
          return (
            <div
              key={`tooltip-${office.id}`}
              className={`tooltip ${hoveredOffice === office.id ? 'visible' : ''}`}
              style={{
                left: `${pos.x * scale}px`,
                top: `${pos.y * scale - 60}px`,
                transform: 'translateX(-50%)',
              }}
            >
              <div className="tooltip-name">{office.name}</div>
              <div className="tooltip-country">{office.country}</div>
              <div className="tooltip-timezone">
                <Clock size={12} />
                <span>{office.timezone}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Office cards */}
      <div className="offices-grid">
        {offices.map((office) => (
          <div
            key={office.id}
            className={`office-card ${hoveredOffice === office.id ? 'highlighted' : ''}`}
            onMouseEnter={() => setHoveredOffice(office.id)}
            onMouseLeave={() => setHoveredOffice(null)}
          >
            <div className="office-icon-wrapper">
              <MapPin size={20} className="office-icon" />
            </div>
            <div className="office-card-name">{office.name}</div>
            <div className="office-card-country">{office.country}</div>
            <div className="office-card-timezone">
              <Clock size={12} />
              <span>{office.timezone}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Benefits */}
      <div className="benefits-grid">
        <div className="benefit-card">
          <div className="benefit-icon-wrapper">
            <Globe size={18} className="benefit-icon" />
          </div>
          <div>
            <h4 className="benefit-title">{t('worldwideTitle')}</h4>
            <p className="benefit-desc">{t('worldwideDescription')}</p>
          </div>
        </div>
        <div className="benefit-card">
          <div className="benefit-icon-wrapper">
            <Users size={18} className="benefit-icon" />
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
