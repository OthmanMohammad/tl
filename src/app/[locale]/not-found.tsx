import Link from 'next/link'
import { Home, ArrowLeft, Search, Mail } from 'lucide-react'

export default function NotFound() {
  return (
    <main style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-8)'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        {/* 404 Number */}
        <div style={{
          fontSize: 'clamp(6rem, 20vw, 12rem)',
          fontWeight: 'var(--font-weight-bold)',
          lineHeight: 1,
          background: 'linear-gradient(135deg, var(--primary) 0%, #ff6b5b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: 'var(--space-4)'
        }}>
          404
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--text-primary)',
          marginBottom: 'var(--space-4)'
        }}>
          Page Not Found
        </h1>

        {/* Description */}
        <p style={{
          fontSize: '1.125rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          marginBottom: 'var(--space-8)'
        }}>
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
          It might have been moved, deleted, or never existed.
        </p>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: 'var(--space-4)',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 'var(--space-10)'
        }}>
          <Link
            href="/en"
            className="btn btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)'
            }}
          >
            <Home size={18} />
            Go Home
          </Link>
          <Link
            href="/en/contact"
            className="btn btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)'
            }}
          >
            <Mail size={18} />
            Contact Us
          </Link>
        </div>

        {/* Helpful Links */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: 'var(--space-6)'
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: 'var(--text-muted)',
            marginBottom: 'var(--space-4)'
          }}>
            Here are some helpful links:
          </p>
          <div style={{
            display: 'flex',
            gap: 'var(--space-6)',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link
              href="/en/services"
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'color 0.2s ease'
              }}
            >
              Our Services
            </Link>
            <Link
              href="/en/about"
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'color 0.2s ease'
              }}
            >
              About Us
            </Link>
            <Link
              href="/en/careers"
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'color 0.2s ease'
              }}
            >
              Careers
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
