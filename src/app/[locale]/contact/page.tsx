import { getTranslations, setRequestLocale } from 'next-intl/server'
import {
  Mail,
  MapPin,
  Clock,
  Zap,
  ClipboardList,
  FileText,
  DollarSign,
  Building2,
  CheckCircle,
  Handshake,
  Lightbulb,
  Linkedin
} from 'lucide-react'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

export default async function Contact({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('contact')
  const tCommon = await getTranslations('common')

  const inquiryItems = [
    {
      title: t('inquiry.projectOverview.title'),
      description: t('inquiry.projectOverview.description'),
      icon: <ClipboardList size={20} className="text-primary" />
    },
    {
      title: t('inquiry.currentSituation.title'),
      description: t('inquiry.currentSituation.description'),
      icon: <FileText size={20} className="text-primary" />
    },
    {
      title: t('inquiry.timeline.title'),
      description: t('inquiry.timeline.description'),
      icon: <Clock size={20} className="text-primary" />
    },
    {
      title: t('inquiry.budget.title'),
      description: t('inquiry.budget.description'),
      icon: <DollarSign size={20} className="text-primary" />
    },
    {
      title: t('inquiry.companyInfo.title'),
      description: t('inquiry.companyInfo.description'),
      icon: <Building2 size={20} className="text-primary" />
    }
  ]

  const workTypes = [
    {
      type: t('workTypes.fixedProjects.type'),
      title: t('workTypes.fixedProjects.title'),
      description: t('workTypes.fixedProjects.description'),
      examples: t.raw('workTypes.fixedProjects.examples') as string[],
      icon: <ClipboardList size={32} className="text-primary" />
    },
    {
      type: t('workTypes.ongoing.type'),
      title: t('workTypes.ongoing.title'),
      description: t('workTypes.ongoing.description'),
      examples: t.raw('workTypes.ongoing.examples') as string[],
      icon: <Handshake size={32} className="text-primary" />
    },
    {
      type: t('workTypes.consulting.type'),
      title: t('workTypes.consulting.title'),
      description: t('workTypes.consulting.description'),
      examples: t.raw('workTypes.consulting.examples') as string[],
      icon: <Lightbulb size={32} className="text-primary" />
    }
  ]

  const faqs = [
    {
      question: t('faq.q1.question'),
      answer: t('faq.q1.answer')
    },
    {
      question: t('faq.q2.question'),
      answer: t('faq.q2.answer')
    },
    {
      question: t('faq.q3.question'),
      answer: t('faq.q3.answer')
    },
    {
      question: t('faq.q4.question'),
      answer: t('faq.q4.answer')
    },
    {
      question: t('faq.q5.question'),
      answer: t('faq.q5.answer')
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
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-12)' }}>
            {/* Contact Information */}
            <div>
              <h2 style={{ marginBottom: 'var(--space-8)' }}>
                {t('info.title')}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    marginBottom: 'var(--space-3)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}>
                    <Mail size={20} className="text-primary" />
                    {t('info.email')}
                  </h3>
                  <a
                    href="mailto:Mo@MohammadOthman.com"
                    style={{
                      fontSize: '1.125rem',
                      color: 'var(--primary)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)'
                    }}
                  >
                    Mo@MohammadOthman.com
                  </a>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    marginTop: 'var(--space-2)'
                  }}>
                    {t('info.emailDescription')}
                  </p>
                </div>

                <div>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    marginBottom: 'var(--space-3)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}>
                    <Linkedin size={20} className="text-primary" />
                    {t('info.linkedIn')}
                  </h3>
                  <a
                    href="https://www.linkedin.com/company/transformer-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '1.125rem',
                      color: 'var(--primary)',
                      textDecoration: 'none'
                    }}
                  >
                    {t('info.linkedInPage')}
                  </a>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    marginTop: 'var(--space-2)'
                  }}>
                    {t('info.linkedInDescription')}
                  </p>
                </div>

                <div>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    marginBottom: 'var(--space-3)',
                    color: 'var(--text-primary)'
                  }}>
                    {t('info.offices')}
                  </h3>
                  <div className="space-y-4">
                    <div style={{
                      padding: 'var(--space-4)',
                      backgroundColor: 'var(--surface)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border)'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-2)',
                        marginBottom: 'var(--space-2)'
                      }}>
                        <MapPin size={20} className="text-primary" />
                        <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                          {t('info.scotlandOffice')}
                        </span>
                      </div>
                      <div style={{ color: 'var(--text-secondary)' }}>
                        {t('info.scotlandAddress')}
                      </div>
                    </div>

                    <div style={{
                      padding: 'var(--space-4)',
                      backgroundColor: 'var(--surface)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border)'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-2)',
                        marginBottom: 'var(--space-2)'
                      }}>
                        <MapPin size={20} className="text-primary" />
                        <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                          {t('info.palestineOffice')}
                        </span>
                      </div>
                      <div style={{ color: 'var(--text-secondary)' }}>
                        {t('info.palestineAddress')}
                      </div>
                    </div>
                  </div>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    marginTop: 'var(--space-3)',
                    fontStyle: 'italic'
                  }}>
                    {t('info.servingClients')}
                  </p>
                </div>

                <div>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    marginBottom: 'var(--space-3)',
                    color: 'var(--text-primary)'
                  }}>
                    {t('info.responseTime')}
                  </h3>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    padding: 'var(--space-4)',
                    backgroundColor: 'var(--surface)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)'
                  }}>
                    <div style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      backgroundColor: 'var(--primary)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Zap size={20} color="white" />
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                        {t('info.responseGuarantee')}
                      </div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        {t('info.responseDescription')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Inquiry Guide */}
            <div>
              <h2 style={{ marginBottom: 'var(--space-8)' }}>
                {t('inquiry.title')}
              </h2>

              <div style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-8)'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: 'var(--space-6)',
                  color: 'var(--text-primary)'
                }}>
                  {t('inquiry.whatToInclude')}
                </h3>

                <div className="space-y-6">
                  {inquiryItems.map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      gap: 'var(--space-3)',
                      alignItems: 'flex-start'
                    }}>
                      <div style={{ marginTop: 'var(--space-1)' }}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 style={{
                          fontSize: '1rem',
                          fontWeight: '600',
                          marginBottom: 'var(--space-2)',
                          color: 'var(--text-primary)'
                        }}>
                          {item.title}
                        </h4>
                        <p style={{
                          fontSize: '0.875rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                          margin: 0
                        }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{
                  marginTop: 'var(--space-8)',
                  paddingTop: 'var(--space-6)',
                  borderTop: '1px solid var(--border)',
                  textAlign: 'center'
                }}>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    fontStyle: 'italic',
                    marginBottom: 'var(--space-4)'
                  }}>
                    {t('inquiry.noWorry')}
                  </p>

                  <a
                    href="mailto:Mo@MohammadOthman.com?subject=AI Project Inquiry"
                    className="btn btn-primary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)'
                    }}
                  >
                    <Mail size={16} />
                    {tCommon('emailUs')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Types */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('workTypes.title')}</h2>
          </div>

          <div className="grid-3">
            {workTypes.map((workType, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <div className="card-main">
                    <div style={{
                      textAlign: 'center',
                      marginBottom: 'var(--space-4)'
                    }}>
                      {workType.icon}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: 'var(--primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: 'var(--space-3)',
                      textAlign: 'center'
                    }}>
                      {workType.type}
                    </div>
                    <h3 className="card-title" style={{ textAlign: 'center' }}>
                      {workType.title}
                    </h3>
                    <p style={{
                      color: 'var(--text-secondary)',
                      marginBottom: 'var(--space-4)',
                      fontSize: '0.875rem',
                      textAlign: 'center'
                    }}>
                      {workType.description}
                    </p>
                  </div>

                  <div className="card-footer-content">
                    <div style={{
                      padding: 'var(--space-4)',
                      backgroundColor: 'var(--background)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border)'
                    }}>
                      <h4 style={{
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: 'var(--text-muted)',
                        marginBottom: 'var(--space-3)',
                        textAlign: 'center'
                      }}>
                        {t('workTypes.examples')}:
                      </h4>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-2)',
                        alignItems: 'center'
                      }}>
                        {workType.examples.map((example, idx) => (
                          <span key={idx} style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.875rem',
                            textAlign: 'center'
                          }}>
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('faq.title')}</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} style={{
                  borderBottom: '1px solid var(--border)',
                  paddingBottom: 'var(--space-6)'
                }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    marginBottom: 'var(--space-3)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-3)'
                  }}>
                    <div style={{
                      width: '0.5rem',
                      height: '0.5rem',
                      background: 'linear-gradient(135deg, var(--primary) 0%, #FF6B47 100%)',
                      borderRadius: '50%',
                      marginTop: '0.5rem',
                      flexShrink: 0,
                      boxShadow: '0 2px 4px rgba(255, 54, 33, 0.2)'
                    }}></div>
                    <span>{faq.question}</span>
                  </h3>
                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginLeft: 'calc(0.5rem + var(--space-3))'
                  }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
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
              maxWidth: '600px',
              margin: '0 auto var(--space-8)'
            }}>
              {t('cta.subtitle')}
            </p>

            <div className="flex justify-center">
              <a
                href="mailto:Mo@MohammadOthman.com?subject=AI Project Inquiry"
                className="btn btn-primary btn-lg"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)'
                }}
              >
                <Mail size={20} />
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
              flexWrap: 'wrap'
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
