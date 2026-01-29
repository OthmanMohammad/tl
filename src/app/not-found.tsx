import Link from 'next/link'
import { Home, Mail } from 'lucide-react'

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        background: '#0a0a0a',
        color: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <main style={{
          textAlign: 'center',
          maxWidth: '600px',
          padding: '2rem'
        }}>
          {/* 404 Number */}
          <div style={{
            fontSize: 'clamp(6rem, 20vw, 12rem)',
            fontWeight: 700,
            lineHeight: 1,
            background: 'linear-gradient(135deg, #FF3621 0%, #ff6b5b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem'
          }}>
            404
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: 600,
            marginBottom: '1rem'
          }}>
            Page Not Found
          </h1>

          {/* Description */}
          <p style={{
            fontSize: '1.125rem',
            color: '#888888',
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}>
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link
              href="/en"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: '#FF3621',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 500,
                transition: 'background 0.2s ease'
              }}
            >
              <Home size={18} />
              Go Home
            </Link>
            <Link
              href="/en/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 500,
                border: '1px solid #333333',
                transition: 'border-color 0.2s ease'
              }}
            >
              <Mail size={18} />
              Contact Us
            </Link>
          </div>
        </main>
      </body>
    </html>
  )
}
