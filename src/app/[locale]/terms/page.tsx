import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Scale, FileText, CreditCard, Shield, Users, AlertTriangle } from 'lucide-react'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'terms' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

export default async function TermsOfService({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('terms')

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
              <Scale size={48} className="text-primary" />
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

            {/* Important Notice */}
            <div style={{
              backgroundColor: 'rgba(255, 54, 33, 0.05)',
              border: '1px solid rgba(255, 54, 33, 0.2)',
              padding: 'var(--space-6)',
              borderRadius: 'var(--radius-xl)',
              marginBottom: 'var(--space-12)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-3)'
              }}>
                <AlertTriangle size={24} className="text-primary" />
                <h3 style={{ margin: 0, color: 'var(--text-primary)' }}>{t('importantNotice.title')}</h3>
              </div>
              <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                {t('importantNotice.content')}
              </p>
            </div>

            {/* Company Information */}
            <section>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>{t('sections.s1.title')}</h2>
              <div style={{
                backgroundColor: 'var(--surface)',
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)'
              }}>
                <p><strong>{t('sections.s1.legalEntity')}</strong> {t('sections.s1.legalEntityValue')}</p>
                <p><strong>{t('sections.s1.commercialName')}</strong> {t('sections.s1.commercialNameValue')}</p>
                <p><strong>{t('sections.s1.companyNumber')}</strong> {t('sections.s1.companyNumberValue')}</p>
                <p><strong>{t('sections.s1.registeredAddress')}</strong> {t('sections.s1.registeredAddressValue')}</p>
                <p>
                  <strong>{t('sections.s1.contactEmail')}</strong>{' '}
                  <a href="mailto:Mo@MohammadOthman.com" style={{ color: 'var(--primary)' }}>Mo@MohammadOthman.com</a>
                </p>
                <p style={{ margin: 0 }}><strong>{t('sections.s1.governingLaw')}</strong> {t('sections.s1.governingLawValue')}</p>
              </div>
            </section>

            {/* Definitions */}
            <section style={{ marginTop: 'var(--space-12)' }}>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>{t('sections.s2.title')}</h2>
              <p>{t('sections.s2.intro')}</p>
              <ul style={{ marginLeft: 'var(--space-6)' }}>
                <li>{t('sections.s2.items.0')}</li>
                <li>{t('sections.s2.items.1')}</li>
                <li>{t('sections.s2.items.2')}</li>
                <li>{t('sections.s2.items.3')}</li>
                <li>{t('sections.s2.items.4')}</li>
                <li>{t('sections.s2.items.5')}</li>
              </ul>
            </section>

            {/* Services */}
            <section style={{ marginTop: 'var(--space-12)' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-4)'
              }}>
                <FileText size={24} className="text-primary" />
                <h2 style={{ margin: 0 }}>{t('sections.s3.title')}</h2>
              </div>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s3.s3_1.title')}
              </h3>
              <p>{t('sections.s3.s3_1.intro')}</p>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s3.s3_1.items.0')}</li>
                <li>{t('sections.s3.s3_1.items.1')}</li>
                <li>{t('sections.s3.s3_1.items.2')}</li>
                <li>{t('sections.s3.s3_1.items.3')}</li>
                <li>{t('sections.s3.s3_1.items.4')}</li>
                <li>{t('sections.s3.s3_1.items.5')}</li>
              </ul>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s3.s3_2.title')}
              </h3>
              <p>{t('sections.s3.s3_2.intro')}</p>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s3.s3_2.items.0')}</li>
                <li>{t('sections.s3.s3_2.items.1')}</li>
                <li>{t('sections.s3.s3_2.items.2')}</li>
                <li>{t('sections.s3.s3_2.items.3')}</li>
              </ul>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s3.s3_3.title')}
              </h3>
              <p>{t('sections.s3.s3_3.intro')}</p>
              <ul style={{ marginLeft: 'var(--space-6)' }}>
                <li>{t('sections.s3.s3_3.items.0')}</li>
                <li>{t('sections.s3.s3_3.items.1')}</li>
                <li>{t('sections.s3.s3_3.items.2')}</li>
                <li>{t('sections.s3.s3_3.items.3')}</li>
                <li>{t('sections.s3.s3_3.items.4')}</li>
                <li>{t('sections.s3.s3_3.items.5')}</li>
              </ul>
            </section>

            {/* Payment Terms */}
            <section style={{ marginTop: 'var(--space-12)' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-4)'
              }}>
                <CreditCard size={24} className="text-primary" />
                <h2 style={{ margin: 0 }}>{t('sections.s4.title')}</h2>
              </div>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s4.s4_1.title')}
              </h3>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s4.s4_1.items.0')}</li>
                <li>{t('sections.s4.s4_1.items.1')}</li>
                <li>{t('sections.s4.s4_1.items.2')}</li>
                <li>{t('sections.s4.s4_1.items.3')}</li>
                <li>{t('sections.s4.s4_1.items.4')}</li>
              </ul>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s4.s4_2.title')}
              </h3>
              <div style={{
                backgroundColor: 'var(--surface)',
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                marginBottom: 'var(--space-4)'
              }}>
                <ul style={{ marginLeft: 'var(--space-4)', margin: 0 }}>
                  <li>{t('sections.s4.s4_2.items.0')}</li>
                  <li>{t('sections.s4.s4_2.items.1')}</li>
                  <li>{t('sections.s4.s4_2.items.2')}</li>
                  <li>{t('sections.s4.s4_2.items.3')}</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section style={{ marginTop: 'var(--space-12)' }}>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>{t('sections.s5.title')}</h2>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s5.s5_1.title')}
              </h3>
              <p>{t('sections.s5.s5_1.intro')}</p>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s5.s5_1.items.0')}</li>
                <li>{t('sections.s5.s5_1.items.1')}</li>
                <li>{t('sections.s5.s5_1.items.2')}</li>
                <li>{t('sections.s5.s5_1.items.3')}</li>
              </ul>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s5.s5_2.title')}
              </h3>
              <p>{t('sections.s5.s5_2.intro')}</p>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s5.s5_2.items.0')}</li>
                <li>{t('sections.s5.s5_2.items.1')}</li>
                <li>{t('sections.s5.s5_2.items.2')}</li>
                <li>{t('sections.s5.s5_2.items.3')}</li>
                <li>{t('sections.s5.s5_2.items.4')}</li>
              </ul>
            </section>

            {/* Warranties */}
            <section style={{ marginTop: 'var(--space-12)' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-4)'
              }}>
                <Shield size={24} className="text-primary" />
                <h2 style={{ margin: 0 }}>{t('sections.s6.title')}</h2>
              </div>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s6.s6_1.title')}
              </h3>
              <p>{t('sections.s6.s6_1.intro')}</p>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s6.s6_1.items.0')}</li>
                <li>{t('sections.s6.s6_1.items.1')}</li>
                <li>{t('sections.s6.s6_1.items.2')}</li>
                <li>{t('sections.s6.s6_1.items.3')}</li>
              </ul>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s6.s6_2.title')}
              </h3>
              <p>{t('sections.s6.s6_2.intro')}</p>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s6.s6_2.items.0')}</li>
                <li>{t('sections.s6.s6_2.items.1')}</li>
                <li>{t('sections.s6.s6_2.items.2')}</li>
              </ul>
              <p>{t('sections.s6.s6_2.exclusion')}</p>

              <div style={{
                backgroundColor: 'rgba(255, 54, 33, 0.05)',
                border: '1px solid rgba(255, 54, 33, 0.2)',
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-lg)',
                marginTop: 'var(--space-6)'
              }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                  {t('sections.s6.s6_3.title')}
                </h3>
                <p style={{
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  color: 'var(--text-primary)',
                  margin: 0
                }}>
                  {t('sections.s6.s6_3.content')}
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section style={{ marginTop: 'var(--space-12)' }}>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>{t('sections.s7.title')}</h2>

              <div style={{
                backgroundColor: 'rgba(255, 54, 33, 0.05)',
                border: '1px solid rgba(255, 54, 33, 0.2)',
                padding: 'var(--space-8)',
                borderRadius: 'var(--radius-xl)',
                marginBottom: 'var(--space-6)'
              }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                  {t('sections.s7.important')}
                </h3>

                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <h4 style={{ fontSize: '1rem', marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                    {t('sections.s7.s7_1.title')}
                  </h4>
                  <p style={{
                    fontWeight: 'bold',
                    color: 'var(--text-primary)',
                    textTransform: 'uppercase',
                    margin: 0
                  }}>
                    {t('sections.s7.s7_1.content')}
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                    {t('sections.s7.s7_2.title')}
                  </h4>
                  <p style={{
                    fontWeight: 'bold',
                    color: 'var(--text-primary)',
                    textTransform: 'uppercase',
                    margin: 0
                  }}>
                    {t('sections.s7.s7_2.content')}
                  </p>
                </div>
              </div>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s7.s7_3.title')}
              </h3>
              <p>{t('sections.s7.s7_3.intro')}</p>
              <ul style={{ marginLeft: 'var(--space-6)' }}>
                <li>{t('sections.s7.s7_3.items.0')}</li>
                <li>{t('sections.s7.s7_3.items.1')}</li>
                <li>{t('sections.s7.s7_3.items.2')}</li>
                <li>{t('sections.s7.s7_3.items.3')}</li>
              </ul>
            </section>

            {/* Confidentiality */}
            <section style={{ marginTop: 'var(--space-12)' }}>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>{t('sections.s8.title')}</h2>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s8.s8_1.title')}
              </h3>
              <p>{t('sections.s8.s8_1.intro')}</p>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s8.s8_1.items.0')}</li>
                <li>{t('sections.s8.s8_1.items.1')}</li>
                <li>{t('sections.s8.s8_1.items.2')}</li>
                <li>{t('sections.s8.s8_1.items.3')}</li>
              </ul>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s8.s8_2.title')}
              </h3>
              <p>{t('sections.s8.s8_2.intro')}</p>
              <ul style={{ marginLeft: 'var(--space-6)' }}>
                <li>{t('sections.s8.s8_2.items.0')}</li>
                <li>{t('sections.s8.s8_2.items.1')}</li>
                <li>{t('sections.s8.s8_2.items.2')}</li>
                <li>{t('sections.s8.s8_2.items.3')}</li>
              </ul>
            </section>

            {/* Termination */}
            <section style={{ marginTop: 'var(--space-12)' }}>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>{t('sections.s9.title')}</h2>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s9.s9_1.title')}
              </h3>
              <p>{t('sections.s9.s9_1.intro')}</p>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s9.s9_1.items.0')}</li>
                <li>{t('sections.s9.s9_1.items.1')}</li>
                <li>{t('sections.s9.s9_1.items.2')}</li>
              </ul>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s9.s9_2.title')}
              </h3>
              <p>{t('sections.s9.s9_2.intro')}</p>
              <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                <li>{t('sections.s9.s9_2.items.0')}</li>
                <li>{t('sections.s9.s9_2.items.1')}</li>
                <li>{t('sections.s9.s9_2.items.2')}</li>
                <li>{t('sections.s9.s9_2.items.3')}</li>
              </ul>
            </section>

            {/* Governing Law */}
            <section style={{ marginTop: 'var(--space-12)' }}>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>{t('sections.s12.title')}</h2>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s12.s12_1.title')}
              </h3>
              <p>{t('sections.s12.s12_1.content')}</p>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s12.s12_2.title')}
              </h3>
              <div style={{
                backgroundColor: 'var(--surface)',
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)'
              }}>
                <ul style={{ marginLeft: 'var(--space-4)' }}>
                  <li>{t('sections.s12.s12_2.items.0')}</li>
                  <li>{t('sections.s12.s12_2.items.1')}</li>
                  <li>{t('sections.s12.s12_2.items.2')}</li>
                  <li>{t('sections.s12.s12_2.items.3')}</li>
                </ul>
              </div>
            </section>

            {/* General Provisions */}
            <section style={{ marginTop: 'var(--space-12)' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-4)'
              }}>
                <Users size={24} className="text-primary" />
                <h2 style={{ margin: 0 }}>{t('sections.s13.title')}</h2>
              </div>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s13.s13_1.title')}
              </h3>
              <p>{t('sections.s13.s13_1.content')}</p>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s13.s13_2.title')}
              </h3>
              <p>{t('sections.s13.s13_2.content')}</p>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s13.s13_3.title')}
              </h3>
              <p>{t('sections.s13.s13_3.content')}</p>

              <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>
                {t('sections.s13.s13_6.title')}
              </h3>
              <p>
                {t('sections.s13.s13_6.content')}{' '}
                <a href="mailto:Mo@MohammadOthman.com" style={{ color: 'var(--primary)' }}>Mo@MohammadOthman.com</a>
                {' '}{t('sections.s13.s13_6_end')}
              </p>
            </section>

            {/* Contact Information */}
            <section style={{ marginTop: 'var(--space-12)' }}>
              <div style={{
                backgroundColor: 'var(--surface)',
                padding: 'var(--space-8)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border)',
                textAlign: 'center'
              }}>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>{t('sections.s14.title')}</h2>

                <p style={{ marginBottom: 'var(--space-4)' }}>
                  {t('sections.s14.intro')}
                </p>

                <div style={{ color: 'var(--text-secondary)' }}>
                  <p>
                    <strong>{t('sections.s14.emailLabel')}</strong>{' '}
                    <a href="mailto:Mo@MohammadOthman.com" style={{ color: 'var(--primary)' }}>Mo@MohammadOthman.com</a>
                  </p>
                  <p><strong>{t('sections.s14.subjectLabel')}</strong> {t('sections.s14.subjectValue')}</p>
                  <p><strong>{t('sections.s14.addressLabel')}</strong> {t('sections.s14.addressValue')}</p>
                </div>

                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  marginTop: 'var(--space-4)'
                }}>
                  {t('sections.s14.responseTime')}
                </p>
              </div>
            </section>

          </div>
        </div>
      </section>
    </main>
  )
}
