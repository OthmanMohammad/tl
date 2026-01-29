'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('navigation')
  const locale = useLocale()

  const navigation = [
    { name: tNav('home'), href: `/${locale}` },
    { name: tNav('services'), href: `/${locale}/services` },
    { name: tNav('about'), href: `/${locale}/about` },
    { name: tNav('contact'), href: `/${locale}/contact` },
    { name: tNav('careers'), href: `/${locale}/careers` },
  ]

  const legalLinks = [
    { name: tNav('privacyPolicy'), href: `/${locale}/privacy` },
    { name: tNav('termsOfService'), href: `/${locale}/terms` },
  ]

  const styles = {
    footer: {
      background: 'var(--gradient-surface)',
      borderTop: '1px solid var(--border)',
      padding: 'var(--space-16) 0 var(--space-6)',
      position: 'relative' as const,
      width: '100%',
      marginTop: 'auto'
    },
    accentLine: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      height: '2px',
      background: 'var(--gradient-primary)',
      opacity: 0.3
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 var(--space-6)',
      width: '100%',
      boxSizing: 'border-box' as const
    },
    brandSection: {
      textAlign: 'center' as const,
      marginBottom: 'var(--space-12)',
      maxWidth: '600px',
      margin: '0 auto var(--space-12)'
    },
    logoLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      textDecoration: 'none',
      color: 'var(--text-primary)',
      marginBottom: 'var(--space-4)',
      fontWeight: 'var(--font-weight-bold)',
      fontSize: '1.5rem',
      transition: 'all var(--duration-fast) var(--ease)'
    },
    logoImage: {
      height: '2.5rem',
      width: 'auto',
      flexShrink: 0
    },
    companyName: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--font-weight-bold)',
      letterSpacing: '-0.02em'
    },
    description: {
      color: 'var(--text-secondary)',
      lineHeight: 1.6,
      fontSize: '1.125rem',
      letterSpacing: '-0.011em',
      margin: 0
    },
    mainContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: 'var(--space-10)',
      marginBottom: 'var(--space-12)',
      textAlign: 'center' as const
    },
    contentColumn: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      gap: 'var(--space-4)'
    },
    columnTitle: {
      color: 'var(--text-primary)',
      fontSize: '0.875rem',
      fontWeight: 'var(--font-weight-semibold)',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.1em',
      fontFamily: 'var(--font-display)',
      marginBottom: 'var(--space-2)'
    },
    navList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column' as const,
      gap: 'var(--space-2)',
      alignItems: 'center'
    },
    navItem: {
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      fontSize: '0.875rem',
      transition: 'all var(--duration-fast) var(--ease)',
      fontWeight: 'var(--font-weight-normal)',
      letterSpacing: '-0.011em'
    },
    contactList: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: 'var(--space-3)',
      alignItems: 'center'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      fontSize: '0.875rem',
      fontWeight: 'var(--font-weight-medium)',
      transition: 'all var(--duration-fast) var(--ease)'
    },
    socialList: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: 'var(--space-3)',
      alignItems: 'center'
    },
    linkedinLink: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      fontSize: '0.875rem',
      fontWeight: 'var(--font-weight-medium)',
      transition: 'all var(--duration-fast) var(--ease)'
    },
    bottomSection: {
      paddingTop: 'var(--space-8)',
      borderTop: '1px solid var(--border)',
      textAlign: 'center' as const
    },
    officesList: {
      display: 'flex',
      justifyContent: 'center',
      gap: 'var(--space-8)',
      marginBottom: 'var(--space-6)',
      flexWrap: 'wrap' as const
    },
    officeLocation: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      color: 'var(--text-muted)',
      fontSize: '0.8rem',
      fontWeight: 'var(--font-weight-normal)'
    },
    officeIcon: {
      flexShrink: 0,
      opacity: 0.7
    },
    copyrightText: {
      color: 'var(--text-muted)',
      fontSize: '0.875rem',
      fontWeight: 'var(--font-weight-medium)',
      letterSpacing: '-0.011em',
      margin: 0,
      textAlign: 'center' as const,
      width: '100%'
    }
  }

  const mobileStyles = `
    @media (max-width: 1024px) {
      .footer-main-content {
        grid-template-columns: 1fr 1fr !important;
        gap: var(--space-8) !important;
        text-align: center !important;
      }
    }

    @media (max-width: 768px) {
      .footer-main-content {
        grid-template-columns: 1fr !important;
        gap: var(--space-8) !important;
        text-align: center !important;
      }

      .footer-brand-section {
        margin-bottom: var(--space-8) !important;
      }

      .footer-nav-list {
        flex-direction: row !important;
        gap: var(--space-4) !important;
        justify-content: center;
        flex-wrap: wrap;
      }

      .footer-offices-list {
        flex-direction: column !important;
        gap: var(--space-2) !important;
        align-items: center !important;
      }

      .footer-container {
        padding: 0 var(--space-4) !important;
      }
    }

    @media (max-width: 480px) {
      .footer {
        padding: var(--space-12) 0 var(--space-4) !important;
      }

      .footer-container {
        padding: 0 var(--space-3) !important;
      }

      .footer-logo-link {
        font-size: 1.25rem !important;
      }

      .footer-logo-image {
        height: 2rem !important;
      }

      .footer-description {
        font-size: 1rem !important;
      }

      .footer-nav-list {
        gap: var(--space-3) !important;
      }

      .footer-nav-item {
        font-size: 0.8rem !important;
      }

      .footer-contact-item,
      .footer-linkedin-link {
        font-size: 0.8rem !important;
      }

      .footer-copyright-text {
        font-size: 0.75rem !important;
      }

      .footer-office-location {
        font-size: 0.75rem !important;
      }

      .footer-offices-list {
        margin-bottom: var(--space-4) !important;
      }
    }

    @media (max-width: 320px) {
      .footer-container {
        padding: 0 var(--space-2) !important;
      }

      .footer-logo-image {
        height: 1.75rem !important;
      }

      .footer-description {
        font-size: 0.9rem !important;
      }

      .footer-copyright-text {
        font-size: 0.7rem !important;
      }

      .footer-office-location {
        font-size: 0.7rem !important;
      }
    }

    /* Hover effects */
    .footer-nav-item:hover,
    .footer-contact-item:hover,
    .footer-linkedin-link:hover {
      color: var(--primary) !important;
      text-decoration: none !important;
      transform: translateY(-1px);
    }

    .footer-logo-link:hover {
      color: var(--primary) !important;
      text-decoration: none !important;
      transform: scale(1.02);
    }
  `

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: mobileStyles }} />
      <footer style={styles.footer}>
        <div style={styles.accentLine} />

        <div className="footer-container" style={styles.container}>
          {/* Top Section - Company Brand */}
          <div className="footer-brand-section" style={styles.brandSection}>
            <Link href={`/${locale}`} className="footer-logo-link" style={{ ...styles.logoLink, direction: 'ltr' }}>
              <Image
                src="/Logo_only_Transparent.svg"
                alt="TransformerLabs"
                width={40}
                height={40}
                className="footer-logo-image interactive no-flip"
                style={{ ...styles.logoImage, transform: 'none' }}
                draggable={false}
              />
              <span style={styles.companyName}>
                TransformerLabs
              </span>
            </Link>

            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.875rem',
              margin: '0 0 var(--space-3) 0',
              direction: 'rtl',
              fontWeight: 'var(--font-weight-medium)'
            }}>
              شركة ترانسفورمرز انوفيشن للبرمجة والذكاء الاصطناعي
            </p>

            <p className="footer-description" style={styles.description}>
              {t('description')}
            </p>
          </div>

          {/* Middle Section - Four Column Grid */}
          <div className="footer-main-content" style={styles.mainContent}>
            {/* Navigation Column */}
            <div style={styles.contentColumn}>
              <h3 style={styles.columnTitle}>{t('navigation')}</h3>
              <ul className="footer-nav-list" style={styles.navList}>
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="footer-nav-item" style={styles.navItem}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div style={styles.contentColumn}>
              <h3 style={styles.columnTitle}>{t('contactTitle')}</h3>
              <div style={styles.contactList}>
                <a
                  href="mailto:Mo@MohammadOthman.com"
                  className="footer-contact-item"
                  style={styles.contactItem}
                >
                  <Mail size={16} />
                  <span>Mo@MohammadOthman.com</span>
                </a>
              </div>
            </div>

            {/* Social Column */}
            <div style={styles.contentColumn}>
              <h3 style={styles.columnTitle}>{t('connect')}</h3>
              <div style={styles.socialList}>
                <a
                  href="https://www.linkedin.com/company/transformer-labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-linkedin-link"
                  style={styles.linkedinLink}
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" style={{ userSelect: 'none', pointerEvents: 'none' }}>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>{t('linkedIn')}</span>
                </a>
              </div>
            </div>

            {/* Legal Column */}
            <div style={styles.contentColumn}>
              <h3 style={styles.columnTitle}>{t('legal')}</h3>
              <ul className="footer-nav-list" style={styles.navList}>
                {legalLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="footer-nav-item" style={styles.navItem}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section - Offices & Copyright */}
          <div className="footer-bottom-section" style={styles.bottomSection}>
            <div className="footer-offices-list" style={styles.officesList}>
              <div className="footer-office-location" style={styles.officeLocation}>
                <MapPin size={16} style={styles.officeIcon} />
                <span>{t('scotlandOffice')}</span>
              </div>
              <div className="footer-office-location" style={styles.officeLocation}>
                <MapPin size={16} style={styles.officeIcon} />
                <span>{t('palestineOffice')}</span>
              </div>
            </div>

            <p className="footer-copyright-text" style={styles.copyrightText}>
              &copy; {t('copyright')}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
