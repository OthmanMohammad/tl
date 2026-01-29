'use client'

import dynamic from 'next/dynamic'

const ProfessionalGlobe = dynamic(
  () => import('@/components/ProfessionalGlobe'),
  {
    ssr: false,
    loading: () => (
      <div style={{
        width: '100%',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--surface)',
        borderRadius: 'var(--radius-xl)',
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '3px solid var(--border)',
          borderTopColor: 'var(--primary)',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }} />
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }
)

export default function ClientGlobe() {
  return <ProfessionalGlobe />
}
