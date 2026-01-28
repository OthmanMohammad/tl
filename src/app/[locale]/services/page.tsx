import Link from 'next/link'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import {
  Bot,
  BarChart3,
  FileText,
  Zap,
  Sparkles,
  Settings,
  ClipboardList,
  Handshake,
  Lightbulb,
  CheckCircle,
  Clock,
  Building2,
  Globe,
  Code
} from 'lucide-react'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'services' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

export default async function Services({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('services')
  const tCommon = await getTranslations('common')

  const services = [
    {
      title: t('core.chatbots.title'),
      category: t('core.chatbots.category'),
      icon: <Bot size={48} className="text-primary" />,
      description: t('core.chatbots.description'),
      features: [
        t('core.chatbots.features.0'),
        t('core.chatbots.features.1'),
        t('core.chatbots.features.2'),
        t('core.chatbots.features.3'),
        t('core.chatbots.features.4')
      ],
      examples: t('core.chatbots.examples')
    },
    {
      title: t('core.analytics.title'),
      category: t('core.analytics.category'),
      icon: <BarChart3 size={48} className="text-primary" />,
      description: t('core.analytics.description'),
      features: [
        t('core.analytics.features.0'),
        t('core.analytics.features.1'),
        t('core.analytics.features.2'),
        t('core.analytics.features.3'),
        t('core.analytics.features.4')
      ],
      examples: t('core.analytics.examples')
    },
    {
      title: t('core.documents.title'),
      category: t('core.documents.category'),
      icon: <FileText size={48} className="text-primary" />,
      description: t('core.documents.description'),
      features: [
        t('core.documents.features.0'),
        t('core.documents.features.1'),
        t('core.documents.features.2'),
        t('core.documents.features.3'),
        t('core.documents.features.4')
      ],
      examples: t('core.documents.examples')
    },
    {
      title: t('core.workflow.title'),
      category: t('core.workflow.category'),
      icon: <Zap size={48} className="text-primary" />,
      description: t('core.workflow.description'),
      features: [
        t('core.workflow.features.0'),
        t('core.workflow.features.1'),
        t('core.workflow.features.2'),
        t('core.workflow.features.3'),
        t('core.workflow.features.4')
      ],
      examples: t('core.workflow.examples')
    },
    {
      title: t('core.content.title'),
      category: t('core.content.category'),
      icon: <Sparkles size={48} className="text-primary" />,
      description: t('core.content.description'),
      features: [
        t('core.content.features.0'),
        t('core.content.features.1'),
        t('core.content.features.2'),
        t('core.content.features.3'),
        t('core.content.features.4')
      ],
      examples: t('core.content.examples')
    },
    {
      title: t('core.webDesign.title'),
      category: t('core.webDesign.category'),
      icon: <Globe size={48} className="text-primary" />,
      description: t('core.webDesign.description'),
      features: [
        t('core.webDesign.features.0'),
        t('core.webDesign.features.1'),
        t('core.webDesign.features.2'),
        t('core.webDesign.features.3'),
        t('core.webDesign.features.4')
      ],
      examples: t('core.webDesign.examples')
    },
    {
      title: t('core.software.title'),
      category: t('core.software.category'),
      icon: <Code size={48} className="text-primary" />,
      description: t('core.software.description'),
      features: [
        t('core.software.features.0'),
        t('core.software.features.1'),
        t('core.software.features.2'),
        t('core.software.features.3'),
        t('core.software.features.4')
      ],
      examples: t('core.software.examples')
    },
    {
      title: t('core.custom.title'),
      category: t('core.custom.category'),
      icon: <Settings size={48} className="text-primary" />,
      description: t('core.custom.description'),
      features: [
        t('core.custom.features.0'),
        t('core.custom.features.1'),
        t('core.custom.features.2'),
        t('core.custom.features.3'),
        t('core.custom.features.4')
      ],
      examples: t('core.custom.examples')
    }
  ]

  const arrangements = [
    {
      title: t('workArrangements.fixedPrice.title'),
      icon: <ClipboardList size={32} className="text-primary" />,
      description: t('workArrangements.fixedPrice.description'),
      timeline: t('workArrangements.fixedPrice.timeline'),
      bestFor: t('workArrangements.fixedPrice.bestFor')
    },
    {
      title: t('workArrangements.ongoing.title'),
      icon: <Handshake size={32} className="text-primary" />,
      description: t('workArrangements.ongoing.description'),
      timeline: t('workArrangements.ongoing.timeline'),
      bestFor: t('workArrangements.ongoing.bestFor')
    },
    {
      title: t('workArrangements.consulting.title'),
      icon: <Lightbulb size={32} className="text-primary" />,
      description: t('workArrangements.consulting.description'),
      timeline: t('workArrangements.consulting.timeline'),
      bestFor: t('workArrangements.consulting.bestFor')
    }
  ]

  const process = [
    {
      step: "01",
      title: t('process.discovery.title'),
      description: t('process.discovery.description'),
      deliverables: t('process.discovery.deliverables')
    },
    {
      step: "02",
      title: t('process.development.title'),
      description: t('process.development.description'),
      deliverables: t('process.development.deliverables')
    },
    {
      step: "03",
      title: t('process.deployment.title'),
      description: t('process.deployment.description'),
      deliverables: t('process.deployment.deliverables')
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
        <div className="container">
          <div className="hero-content">
            <h1>
              {t('hero.title')}
            </h1>

            <p className="hero-subtitle">
              {t('hero.subtitle')}
            </p>

            <div className="hero-buttons">
              <Link href={`/${locale}/contact`} className="btn btn-primary btn-lg">
                {t('hero.cta1')}
              </Link>
              <a
                href="mailto:Mo@MohammadOthman.com"
                className="btn btn-secondary btn-lg"
              >
                {tCommon('emailUs')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('core.title')}</h2>
            <p className="section-subtitle">
              {t('core.subtitle')}
            </p>
          </div>

          <div className="grid-2" style={{ gap: 'var(--space-10)' }}>
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <div className="card-main">
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-3)',
                      marginBottom: 'var(--space-4)'
                    }}>
                      {service.icon}
                      <div style={{
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: 'var(--primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                      }}>
                        {service.category}
                      </div>
                    </div>

                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      marginBottom: 'var(--space-4)',
                      color: 'var(--text-primary)'
                    }}>
                      {service.title}
                    </h3>

                    <p style={{
                      color: 'var(--text-secondary)',
                      marginBottom: 'var(--space-6)',
                      lineHeight: 1.6,
                      fontSize: '1.125rem'
                    }}>
                      {service.description}
                    </p>

                    <div style={{ marginBottom: 'var(--space-6)' }}>
                      <h4 style={{
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        marginBottom: 'var(--space-3)',
                        color: 'var(--text-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        {t('core.keyFeatures')}
                      </h4>
                      <ul style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-2)'
                      }}>
                        {service.features.map((feature, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                            <CheckCircle size={16} className="text-green-600" style={{ marginTop: '0.125rem', flexShrink: 0 }} />
                            <span style={{
                              fontSize: '0.875rem',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.5
                            }}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="card-footer-content">
                    <div style={{
                      padding: 'var(--space-4)',
                      backgroundColor: 'var(--surface)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border)'
                    }}>
                      <h4 style={{
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: 'var(--text-muted)',
                        marginBottom: 'var(--space-2)'
                      }}>
                        {t('core.commonUseCases')}
                      </h4>
                      <p style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                        margin: 0
                      }}>
                        {service.examples}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Arrangements */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('workArrangements.title')}</h2>
            <p className="section-subtitle">
              {t('workArrangements.subtitle')}
            </p>
          </div>

          <div className="grid-4">
            {arrangements.map((arrangement, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <div className="card-main">
                    <div style={{
                      marginBottom: 'var(--space-4)',
                      textAlign: 'center'
                    }}>
                      {arrangement.icon}
                    </div>
                    <h3 className="card-title" style={{ textAlign: 'center' }}>
                      {arrangement.title}
                    </h3>
                    <p className="card-description" style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
                      {arrangement.description}
                    </p>
                  </div>

                  <div className="service-card-metadata">
                    <div className="service-metadata-item">
                      <div className="service-metadata-label">
                        <Clock size={14} className="text-primary" />
                        <div style={{
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: 'var(--text-muted)'
                        }}>
                          {t('workArrangements.timelineLabel')}
                        </div>
                      </div>
                      <div style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-primary)',
                        fontWeight: '500'
                      }}>
                        {arrangement.timeline}
                      </div>
                    </div>

                    <div className="service-metadata-item">
                      <div className="service-metadata-label">
                        <Building2 size={14} className="text-primary" />
                        <div style={{
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: 'var(--text-muted)'
                        }}>
                          {t('workArrangements.bestForLabel')}
                        </div>
                      </div>
                      <div style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.4
                      }}>
                        {arrangement.bestFor}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('process.title')}</h2>
            <p className="section-subtitle">
              {t('process.subtitle')}
            </p>
          </div>

          <div className="grid-3">
            {process.map((step, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <div className="card-main">
                    <div style={{
                      width: '4rem',
                      height: '4rem',
                      backgroundColor: 'var(--primary)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto var(--space-6)',
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: 'white'
                    }}>
                      {step.step}
                    </div>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      marginBottom: 'var(--space-4)',
                      color: 'var(--text-primary)',
                      textAlign: 'center'
                    }}>
                      {step.title}
                    </h3>
                    <p style={{
                      color: 'var(--text-secondary)',
                      marginBottom: 'var(--space-4)',
                      lineHeight: 1.6,
                      textAlign: 'center'
                    }}>
                      {step.description}
                    </p>
                  </div>

                  <div className="process-card-deliverables">
                    <div style={{
                      padding: 'var(--space-3)',
                      backgroundColor: 'var(--surface)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border)',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: 'var(--text-muted)',
                        marginBottom: 'var(--space-2)'
                      }}>
                        {t('process.keyDeliverables')}
                      </div>
                      <div style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.4
                      }}>
                        {step.deliverables}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="cta-section">
            <h2 style={{ marginBottom: 'var(--space-6)' }}>
              {t('cta.title')}
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-8)',
              maxWidth: '700px',
              margin: '0 auto var(--space-8)'
            }}>
              {t('cta.subtitle')}
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link href={`/${locale}/contact`} className="btn btn-primary btn-lg">
                {t('cta.cta1')}
              </Link>
              <a
                href="mailto:Mo@MohammadOthman.com?subject=AI Project Inquiry"
                className="btn btn-secondary btn-lg"
              >
                {tCommon('emailUs')}
              </a>
            </div>

            <div style={{
              marginTop: 'var(--space-8)',
              paddingTop: 'var(--space-6)',
              borderTop: '1px solid var(--border)',
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--space-4)',
              flexWrap: 'wrap',
              flexDirection: 'row'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: 'var(--space-2) var(--space-3)',
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                minWidth: 'fit-content',
                whiteSpace: 'nowrap'
              }}>
                <CheckCircle size={16} className="text-green-600" />
                <span>{tCommon('freeConsultation')}</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: 'var(--space-2) var(--space-3)',
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                minWidth: 'fit-content',
                whiteSpace: 'nowrap'
              }}>
                <CheckCircle size={16} className="text-green-600" />
                <span>{tCommon('noObligation')}</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: 'var(--space-2) var(--space-3)',
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                minWidth: 'fit-content',
                whiteSpace: 'nowrap'
              }}>
                <CheckCircle size={16} className="text-green-600" />
                <span>{tCommon('response24h')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
