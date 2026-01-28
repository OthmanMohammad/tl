import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Mail, Shield, Database, Globe, Users, Lock } from 'lucide-react'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'privacy' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

export default async function PrivacyPolicy({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('privacy')

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-16)' }}>
        <div className="container">
          <div className="hero-content">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--space-3)',
              marginBottom: 'var(--space-6)'
            }}>
              <Shield size={48} className="text-primary" />
            </div>
            <h1>{t('title')}</h1>
            <p className="hero-subtitle">
              {t('subtitle')}
            </p>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              marginTop: 'var(--space-4)'
            }}>
              {t('lastUpdated')}
            </p>
          </div>
        </div>
      </section>

      {/* Legal Content */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">

            {/* Company Information */}
            <div style={{
              backgroundColor: 'var(--surface)',
              padding: 'var(--space-8)',
              borderRadius: 'var(--radius-xl)',
              marginBottom: 'var(--space-12)',
              border: '1px solid var(--border)'
            }}>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>{t('companyInfo.title')}</h2>
              <p><strong>{t('companyInfo.legalEntity')}</strong> {t('companyInfo.legalEntityValue')}</p>
              <p><strong>{t('companyInfo.commercialName')}</strong> {t('companyInfo.commercialNameValue')}</p>
              <p><strong>{t('companyInfo.companyNumber')}</strong> {t('companyInfo.companyNumberValue')}</p>
              <p><strong>{t('companyInfo.address')}</strong> {t('companyInfo.addressValue')}</p>
              <p style={{ margin: 0 }}><strong>{t('companyInfo.contact')}</strong> Mo@MohammadOthman.com</p>
            </div>

            {/* Introduction */}
            <section className="legal-section" style={{ marginBottom: 'var(--space-12)' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-4)'
              }}>
                <Shield size={24} className="text-primary" />
                <h2 style={{ margin: 0 }}>{t('sections.s1.title')}</h2>
              </div>
              <p>{t('sections.s1.p1')}</p>
              <p>{t('sections.s1.p2')}</p>
            </section>

            {/* Information We Collect */}
            <section className="legal-section" style={{ marginBottom: 'var(--space-12)' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-4)'
              }}>
                <Database size={24} className="text-primary" />
                <h2 style={{ margin: 0 }}>{t('sections.s2.title')}</h2>
              </div>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s2.s2_1.title')}
              </h3>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s2.s2_1.items.0')}</li>
                <li>{t('sections.s2.s2_1.items.1')}</li>
                <li>{t('sections.s2.s2_1.items.2')}</li>
                <li>{t('sections.s2.s2_1.items.3')}</li>
                <li>{t('sections.s2.s2_1.items.4')}</li>
              </ul>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s2.s2_2.title')}
              </h3>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s2.s2_2.items.0')}</li>
                <li>{t('sections.s2.s2_2.items.1')}</li>
                <li>{t('sections.s2.s2_2.items.2')}</li>
                <li>{t('sections.s2.s2_2.items.3')}</li>
              </ul>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s2.s2_3.title')}
              </h3>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s2.s2_3.items.0')}</li>
                <li>{t('sections.s2.s2_3.items.1')}</li>
                <li>{t('sections.s2.s2_3.items.2')}</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="legal-section" style={{ marginBottom: 'var(--space-12)' }}>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>{t('sections.s3.title')}</h2>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s3.s3_1.title')}
              </h3>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s3.s3_1.items.0')}</li>
                <li>{t('sections.s3.s3_1.items.1')}</li>
                <li>{t('sections.s3.s3_1.items.2')}</li>
                <li>{t('sections.s3.s3_1.items.3')}</li>
              </ul>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s3.s3_2.title')}
              </h3>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s3.s3_2.items.0')}</li>
                <li>{t('sections.s3.s3_2.items.1')}</li>
                <li>{t('sections.s3.s3_2.items.2')}</li>
                <li>{t('sections.s3.s3_2.items.3')}</li>
              </ul>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s3.s3_4.title')}
              </h3>
              <p>{t('sections.s3.s3_4.intro')}</p>
              <ul style={{ marginLeft: 'var(--space-6)' }}>
                <li>{t('sections.s3.s3_4.items.0')}</li>
                <li>{t('sections.s3.s3_4.items.1')}</li>
                <li>{t('sections.s3.s3_4.items.2')}</li>
                <li>{t('sections.s3.s3_4.items.3')}</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="legal-section" style={{ marginBottom: 'var(--space-12)' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-4)'
              }}>
                <Users size={24} className="text-primary" />
                <h2 style={{ margin: 0 }}>{t('sections.s4.title')}</h2>
              </div>
              <p>{t('sections.s4.intro')}</p>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s4.s4_1.title')}
              </h3>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s4.s4_1.items.0')}</li>
                <li>{t('sections.s4.s4_1.items.1')}</li>
                <li>{t('sections.s4.s4_1.items.2')}</li>
                <li>{t('sections.s4.s4_1.items.3')}</li>
              </ul>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s4.s4_2.title')}
              </h3>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s4.s4_2.items.0')}</li>
                <li>{t('sections.s4.s4_2.items.1')}</li>
                <li>{t('sections.s4.s4_2.items.2')}</li>
                <li>{t('sections.s4.s4_2.items.3')}</li>
              </ul>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s4.s4_3.title')}
              </h3>
              <p>{t('sections.s4.s4_3.content')}</p>
            </section>

            {/* Data Security */}
            <section className="legal-section" style={{ marginBottom: 'var(--space-12)' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-4)'
              }}>
                <Lock size={24} className="text-primary" />
                <h2 style={{ margin: 0 }}>{t('sections.s5.title')}</h2>
              </div>
              <p>{t('sections.s5.intro')}</p>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s5.items.0')}</li>
                <li>{t('sections.s5.items.1')}</li>
                <li>{t('sections.s5.items.2')}</li>
                <li>{t('sections.s5.items.3')}</li>
                <li>{t('sections.s5.items.4')}</li>
              </ul>
              <p>{t('sections.s5.disclaimer')}</p>
            </section>

            {/* Data Retention */}
            <section className="legal-section" style={{ marginBottom: 'var(--space-12)' }}>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>{t('sections.s6.title')}</h2>
              <p>{t('sections.s6.intro')}</p>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s6.items.0')}</li>
                <li>{t('sections.s6.items.1')}</li>
                <li>{t('sections.s6.items.2')}</li>
                <li>{t('sections.s6.items.3')}</li>
              </ul>
              <p>{t('sections.s6.periodsIntro')}</p>
              <ul style={{ marginLeft: 'var(--space-6)' }}>
                <li>{t('sections.s6.periods.0')}</li>
                <li>{t('sections.s6.periods.1')}</li>
                <li>{t('sections.s6.periods.2')}</li>
                <li>{t('sections.s6.periods.3')}</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section className="legal-section" style={{ marginBottom: 'var(--space-12)' }}>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>{t('sections.s7.title')}</h2>
              <p>{t('sections.s7.intro')}</p>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s7.rights.0')}</li>
                <li>{t('sections.s7.rights.1')}</li>
                <li>{t('sections.s7.rights.2')}</li>
                <li>{t('sections.s7.rights.3')}</li>
                <li>{t('sections.s7.rights.4')}</li>
                <li>{t('sections.s7.rights.5')}</li>
                <li>{t('sections.s7.rights.6')}</li>
              </ul>
              <p>
                {t('sections.s7.exercise')}{' '}
                <a href="mailto:Mo@MohammadOthman.com" style={{ color: 'var(--primary)' }}>Mo@MohammadOthman.com</a>
                {' '}{t('sections.s7.subjectLine')}
              </p>
            </section>

            {/* Cookies and Tracking */}
            <section className="legal-section" style={{ marginBottom: 'var(--space-12)' }}>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>{t('sections.s8.title')}</h2>
              <p>{t('sections.s8.intro')}</p>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s8.items.0')}</li>
                <li>{t('sections.s8.items.1')}</li>
                <li>{t('sections.s8.items.2')}</li>
                <li>{t('sections.s8.items.3')}</li>
              </ul>
              <p>{t('sections.s8.control')}</p>
            </section>

            {/* International Users */}
            <section className="legal-section" style={{ marginBottom: 'var(--space-12)' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-4)'
              }}>
                <Globe size={24} className="text-primary" />
                <h2 style={{ margin: 0 }}>{t('sections.s9.title')}</h2>
              </div>
              <p>{t('sections.s9.intro')}</p>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s9.items.0')}</li>
                <li>{t('sections.s9.items.1')}</li>
                <li>{t('sections.s9.items.2')}</li>
              </ul>
              <p>{t('sections.s9.euRights')}</p>
            </section>

            {/* Children's Privacy */}
            <section className="legal-section" style={{ marginBottom: 'var(--space-12)' }}>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>{t('sections.s10.title')}</h2>
              <p>{t('sections.s10.content')}</p>
            </section>

            {/* Changes to Policy */}
            <section className="legal-section" style={{ marginBottom: 'var(--space-12)' }}>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>{t('sections.s11.title')}</h2>
              <p>{t('sections.s11.intro')}</p>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s11.items.0')}</li>
                <li>{t('sections.s11.items.1')}</li>
                <li>{t('sections.s11.items.2')}</li>
              </ul>
              <p>{t('sections.s11.acceptance')}</p>
            </section>

            {/* Contact */}
            <section className="legal-section">
              <div style={{
                backgroundColor: 'var(--surface)',
                padding: 'var(--space-8)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border)',
                textAlign: 'center'
              }}>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>{t('sections.s12.title')}</h2>
                <p style={{ marginBottom: 'var(--space-4)' }}>{t('sections.s12.intro')}</p>
                <div style={{ color: 'var(--text-secondary)' }}>
                  <p>
                    <strong>{t('sections.s12.emailLabel')}</strong>{' '}
                    <a href="mailto:Mo@MohammadOthman.com" style={{ color: 'var(--primary)' }}>
                      Mo@MohammadOthman.com
                    </a>
                  </p>
                  <p><strong>{t('sections.s12.subjectLabel')}</strong> {t('sections.s12.subjectValue')}</p>
                  <p><strong>{t('sections.s12.addressLabel')}</strong> {t('sections.s12.addressValue')}</p>
                </div>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  marginTop: 'var(--space-4)'
                }}>
                  {t('sections.s12.responseTime')}
                </p>
              </div>
            </section>

          </div>
        </div>
      </section>
    </main>
  )
}
