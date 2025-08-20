import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    'AI Chatbots & Assistants',
    'Data Analytics & Insights',
    'Workflow Automation', 
    'Document Processing',
    'Knowledge Systems',
    'Custom AI Solutions'
  ]

  const industries = [
    'E-commerce & Retail',
    'Healthcare & Medical',
    'Financial Services',
    'Manufacturing',
    'Professional Services',
    'Education'
  ]

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 'var(--space-12)',
          marginBottom: 'var(--space-12)',
          maxWidth: '1000px',
          margin: '0 auto var(--space-12)'
        }}>
          {/* Company Info */}
          <div>
            <Image
              src="/Logo_only_Transparent.svg"
              alt="TransformerLabs"
              width={40}
              height={40}
              style={{ marginBottom: 'var(--space-4)' }}
            />
            
            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-6)',
              lineHeight: 1.6,
              fontSize: '1rem'
            }}>
              TransformerLabs builds practical AI solutions for businesses worldwide. 
              We specialize in chatbots, data analytics, workflow automation, and 
              custom AI applications.
            </p>

            <div style={{ marginBottom: 'var(--space-4)' }}>
              <a 
                href="mailto:Mo@MohammadOthman.com" 
                className="footer-link"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  marginBottom: 'var(--space-2)'
                }}
              >
                <Mail size={16} />
                Mo@MohammadOthman.com
              </a>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                color: 'var(--text-secondary)',
                fontSize: '0.875rem'
              }}>
                <MapPin size={16} />
                Aberdeen, Scotland & Nablus, Palestine
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 style={{
              color: 'var(--text-primary)',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: 'var(--space-4)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Company
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="footer-link"
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.875rem'
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{
              color: 'var(--text-primary)',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: 'var(--space-4)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Services
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {services.map((service) => (
                <li key={service}>
                  <span style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    display: 'block'
                  }}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 style={{
              color: 'var(--text-primary)',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: 'var(--space-4)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Industries
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {industries.map((industry) => (
                <li key={industry}>
                  <span style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    display: 'block'
                  }}>
                    {industry}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: 'var(--space-6)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-4)',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{
            color: 'var(--text-muted)',
            fontSize: '0.875rem'
          }}>
            © 2025 TransformerLabs. Building the future with AI.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
            <a 
              href="https://www.linkedin.com/company/transformer-labs" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2rem',
                height: '2rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--surface)',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                border: '1px solid var(--border)'
              }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <div style={{
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                <MapPin size={12} />
                <span>Scotland</span>
              </div>
              <span>&</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                <MapPin size={12} />
                <span>Palestine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}