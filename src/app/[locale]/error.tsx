'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Home, RefreshCw, AlertTriangle, Mail } from 'lucide-react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Page Error:', error)
  }, [error])

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
        {/* Error Icon */}
        <div style={{
          width: '80px',
          height: '80px',
          background: 'rgba(239, 68, 68, 0.1)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto var(--space-6)'
        }}>
          <AlertTriangle size={40} style={{ color: '#ef4444' }} />
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--text-primary)',
          marginBottom: 'var(--space-4)'
        }}>
          Something went wrong
        </h1>

        {/* Description */}
        <p style={{
          fontSize: '1.125rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          marginBottom: 'var(--space-8)'
        }}>
          We apologize for the inconvenience. An unexpected error occurred.
          Please try again or contact us if the problem persists.
        </p>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: 'var(--space-4)',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 'var(--space-10)'
        }}>
          <button
            onClick={() => reset()}
            className="btn btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)'
            }}
          >
            <RefreshCw size={18} />
            Try Again
          </button>
          <Link
            href="/en"
            className="btn btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)'
            }}
          >
            <Home size={18} />
            Go Home
          </Link>
        </div>

        {/* Contact Support */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: 'var(--space-6)'
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: 'var(--text-muted)',
            marginBottom: 'var(--space-4)'
          }}>
            Need help? Contact our support team:
          </p>
          <a
            href="mailto:Mo@MohammadOthman.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              color: 'var(--primary)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 'var(--font-weight-medium)'
            }}
          >
            <Mail size={16} />
            Mo@MohammadOthman.com
          </a>
        </div>

        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === 'development' && error.digest && (
          <div style={{
            marginTop: 'var(--space-8)',
            padding: 'var(--space-4)',
            background: 'var(--surface)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)'
          }}>
            <p style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              fontFamily: 'monospace'
            }}>
              Error ID: {error.digest}
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
