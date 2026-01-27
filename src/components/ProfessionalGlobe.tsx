'use client'

import React, { useState, useEffect } from 'react';
import { MapPin, Globe, Clock, Users } from 'lucide-react';

interface Office {
  id: string;
  name: string;
  country: string;
  coordinates: { x: number; y: number };
  timezone: string;
  description: string;
}

const ProfessionalGlobe: React.FC = () => {
  const [hoveredOffice, setHoveredOffice] = useState<string | null>(null);

  useEffect(() => {
    // Animation trigger for entrance effects
    const timer = setTimeout(() => {}, 300);
    return () => clearTimeout(timer);
  }, []);

  const offices: Office[] = [
    {
      id: 'uk',
      name: 'Aberdeen, Scotland',
      country: 'United Kingdom',
      coordinates: { x: 180, y: 120 },
      timezone: 'GMT+0',
      description: 'European operations hub'
    },
    {
      id: 'palestine',
      name: 'Nablus, West Bank',
      country: 'Palestine',
      coordinates: { x: 220, y: 140 },
      timezone: 'GMT+2',
      description: 'Middle East headquarters'
    }
  ];

  return (
    <div className="globe-container">
      <style jsx>{`
        .globe-container {
          background: linear-gradient(135deg, var(--surface) 0%, var(--background) 100%);
          border-radius: var(--radius-2xl);
          padding: var(--space-8);
          border: 1px solid var(--border);
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          max-width: 100%;
        }
        
        .globe-container::before {
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
          letter-spacing: -0.02em;
          font-family: var(--font-display);
        }
        
        .globe-subtitle {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0;
          line-height: 1.6;
        }
        
        .globe-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-6);
          position: relative;
          height: 280px;
        }
        
        .globe-svg {
          width: 240px;
          height: 240px;
          filter: drop-shadow(0 8px 16px rgba(27, 49, 57, 0.1));
        }
        
        .globe-sphere {
          fill: url(#globeGradient);
          stroke: var(--border-accent);
          stroke-width: 1;
        }
        
        .globe-continents {
          fill: var(--primary);
          opacity: 0.15;
          stroke: var(--primary);
          stroke-width: 0.5;
          opacity: 0;
          animation: fadeInContinents 1.5s ease-in-out forwards;
          animation-delay: 0.5s;
        }
        
        .globe-lines {
          stroke: var(--border);
          stroke-width: 0.5;
          fill: none;
          opacity: 0.3;
        }
        
        .office-pin-globe {
          cursor: pointer;
          transition: all var(--duration-normal) var(--ease);
          transform-origin: center;
          opacity: 0;
          animation: fadeInPin 0.8s ease-out forwards;
        }
        
        .office-pin-globe:nth-child(1) {
          animation-delay: 1s;
        }
        
        .office-pin-globe:nth-child(2) {
          animation-delay: 1.2s;
        }
        
        .office-pin-globe:hover {
          transform: scale(1.2);
        }
        
        .pin-circle-globe {
          fill: var(--primary);
          stroke: var(--background);
          stroke-width: 2;
          filter: drop-shadow(0 2px 4px rgba(255, 54, 33, 0.3));
        }
        
        .pin-icon-globe {
          fill: var(--background);
        }
        
        .office-tooltip-globe {
          position: absolute;
          background: var(--navy-800);
          color: var(--text-inverse);
          padding: var(--space-2) var(--space-3);
          border-radius: var(--radius-md);
          font-size: 0.75rem;
          font-weight: var(--font-weight-medium);
          pointer-events: none;
          transform: translate(-50%, -120%);
          opacity: 0;
          transition: all var(--duration-normal) var(--ease);
          z-index: 10;
          white-space: nowrap;
          box-shadow: var(--shadow-md);
        }
        
        .office-tooltip-globe::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 4px solid transparent;
          border-top-color: var(--navy-800);
        }
        
        .office-tooltip-globe.visible {
          opacity: 1;
          transform: translate(-50%, -140%);
        }
        
        .offices-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-4);
          margin-bottom: var(--space-6);
        }
        
        .office-item {
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          transition: all var(--duration-normal) var(--ease);
          cursor: pointer;
          text-align: center;
        }
        
        .office-item:hover,
        .office-item.highlighted {
          border-color: var(--primary);
          transform: translateY(-1px);
          box-shadow: var(--shadow-sm);
        }
        
        .office-flag {
          width: 1.5rem;
          height: 1.5rem;
          background: var(--primary);
          border-radius: 50%;
          margin: 0 auto var(--space-2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--background);
          font-size: 0.75rem;
        }
        
        .office-name {
          font-size: 0.875rem;
          font-weight: var(--font-weight-medium);
          color: var(--text-primary);
          margin-bottom: var(--space-1);
        }
        
        .office-timezone {
          font-size: 0.75rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-1);
        }
        
        .global-benefits {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--space-4);
          padding-top: var(--space-6);
          border-top: 1px solid var(--border);
        }
        
        .benefit-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-3);
          background: rgba(255, 54, 33, 0.02);
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
          color: var(--background);
          flex-shrink: 0;
        }
        
        .benefit-content h4 {
          font-size: 0.875rem;
          font-weight: var(--font-weight-semibold);
          color: var(--text-primary);
          margin: 0 0 var(--space-1) 0;
        }
        
        .benefit-content p {
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.4;
        }
        
        @keyframes fadeInContinents {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 0.15;
            transform: scale(1);
          }
        }
        
        @keyframes fadeInPin {
          from {
            opacity: 0;
            transform: scale(0) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .globe-container {
            padding: var(--space-6);
          }
          
          .globe-visual {
            height: 220px;
          }
          
          .globe-svg {
            width: 180px;
            height: 180px;
          }
          
          .offices-list {
            grid-template-columns: 1fr;
            gap: var(--space-3);
          }
          
          .global-benefits {
            grid-template-columns: 1fr;
            gap: var(--space-3);
          }
        }
        
        @media (max-width: 480px) {
          .globe-container {
            padding: var(--space-4);
          }
          
          .globe-visual {
            height: 180px;
          }
          
          .globe-svg {
            width: 140px;
            height: 140px;
          }
          
          .benefit-item {
            padding: var(--space-2);
            gap: var(--space-2);
          }
          
          .benefit-icon {
            width: 1.5rem;
            height: 1.5rem;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .globe-continents,
          .office-pin-globe {
            animation: none !important;
          }
          
          .office-pin-globe {
            opacity: 1;
          }
          
          .globe-continents {
            opacity: 0.15;
          }
        }
      `}</style>

      <div className="globe-header">
        <h3 className="globe-title">Global Operations</h3>
        <p className="globe-subtitle">
          Strategic locations connecting Europe and the Middle East
        </p>
      </div>

      <div className="globe-visual">
        <svg
          className="globe-svg"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Globe showing TransformerLabs office locations"
        >
          <defs>
            {/* Globe gradient for 3D effect */}
            <radialGradient id="globeGradient" cx="0.3" cy="0.3">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="70%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </radialGradient>
            
            {/* Shadow gradient */}
            <radialGradient id="shadowGradient" cx="0.5" cy="0.8">
              <stop offset="0%" stopColor="rgba(0,0,0,0.1)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
          </defs>
          
          {/* Globe shadow */}
          <ellipse cx="150" cy="260" rx="80" ry="15" fill="url(#shadowGradient)" />
          
          {/* Main globe */}
          <circle cx="150" cy="150" r="100" className="globe-sphere" />
          
          {/* Longitude lines */}
          <g className="globe-lines">
            <path d="M 150 50 Q 120 150 150 250" />
            <path d="M 150 50 Q 180 150 150 250" />
            <path d="M 150 50 Q 100 150 150 250" />
            <path d="M 150 50 Q 200 150 150 250" />
            <path d="M 50 150 Q 150 120 250 150" />
            <path d="M 50 150 Q 150 180 250 150" />
          </g>
          
          {/* Latitude lines */}
          <g className="globe-lines">
            <ellipse cx="150" cy="150" rx="100" ry="30" fill="none" />
            <ellipse cx="150" cy="150" rx="85" ry="15" fill="none" />
            <ellipse cx="150" cy="150" rx="85" ry="45" fill="none" />
            <ellipse cx="150" cy="150" rx="70" ry="60" fill="none" />
          </g>
          
          {/* Simplified continents */}
          <g className="globe-continents">
            {/* Europe/UK area */}
            <path d="M 120 110 Q 140 100 160 110 Q 150 120 140 125 Q 130 120 120 110" />
            {/* Middle East/Palestine area */}
            <path d="M 170 130 Q 185 125 195 135 Q 190 145 180 148 Q 175 140 170 130" />
            {/* Africa */}
            <path d="M 140 160 Q 165 155 175 180 Q 160 200 145 195 Q 135 180 140 160" />
            {/* Asia */}
            <path d="M 180 120 Q 210 115 220 140 Q 205 155 185 150 Q 175 135 180 120" />
          </g>
          
          {/* Office pins */}
          {offices.map((office, index) => (
            <g
              key={office.id}
              className="office-pin-globe"
              onMouseEnter={() => setHoveredOffice(office.id)}
              onMouseLeave={() => setHoveredOffice(null)}
              style={{ animationDelay: `${1 + index * 0.2}s` }}
            >
              <circle
                cx={office.coordinates.x}
                cy={office.coordinates.y}
                r="8"
                className="pin-circle-globe"
              />
              <MapPin
                x={office.coordinates.x - 5}
                y={office.coordinates.y - 5}
                width="10"
                height="10"
                className="pin-icon-globe"
              />
            </g>
          ))}
        </svg>

        {/* Tooltips */}
        {offices.map((office) => (
          <div
            key={`tooltip-${office.id}`}
            className={`office-tooltip-globe ${hoveredOffice === office.id ? 'visible' : ''}`}
            style={{
              left: `calc(50% + ${office.coordinates.x - 150}px)`,
              top: `calc(50% + ${office.coordinates.y - 150}px)`,
            }}
          >
            <strong>{office.name}</strong>
            <br />
            {office.timezone}
          </div>
        ))}
      </div>

      <div className="offices-list">
        {offices.map((office) => (
          <div
            key={office.id}
            className={`office-item ${hoveredOffice === office.id ? 'highlighted' : ''}`}
            onMouseEnter={() => setHoveredOffice(office.id)}
            onMouseLeave={() => setHoveredOffice(null)}
          >
            <div className="office-flag">
              <MapPin size={12} />
            </div>
            <div className="office-name">{office.name}</div>
            <div className="office-timezone">
              <Clock size={12} />
              {office.timezone}
            </div>
          </div>
        ))}
      </div>

      <div className="global-benefits">
        <div className="benefit-item">
          <div className="benefit-icon">
            <Globe size={16} />
          </div>
          <div className="benefit-content">
            <h4>Worldwide Service Coverage</h4>
            <p>24/7 support across all major time zones with local expertise</p>
          </div>
        </div>
        
        <div className="benefit-item">
          <div className="benefit-icon">
            <Users size={16} />
          </div>
          <div className="benefit-content">
            <h4>Cross-Cultural Teams</h4>
            <p>Diverse perspectives enabling solutions for global markets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalGlobe;