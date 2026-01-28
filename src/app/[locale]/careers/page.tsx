import { getTranslations, setRequestLocale } from 'next-intl/server'
import {
  Code,
  Brain,
  Globe,
  Clock,
  Users,
  Lightbulb,
  Target,
  Zap,
  Heart,
  CheckCircle,
  Mail,
  Send,
  Laptop,
  Calendar,
  TrendingUp
} from 'lucide-react'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'careers' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

export default async function Careers({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('careers')

  const whyJoin = [
    {
      icon: <Target size={48} className="text-primary" />,
      title: t('why.impact.title'),
      description: t('why.impact.description')
    },
    {
      icon: <TrendingUp size={48} className="text-primary" />,
      title: t('why.technology.title'),
      description: t('why.technology.description')
    },
    {
      icon: <Users size={48} className="text-primary" />,
      title: t('why.opportunities.title'),
      description: t('why.opportunities.description')
    }
  ]

  const workLifeBenefits = [
    {
      icon: <Clock size={20} className="text-primary" />,
      title: t('benefits.workLife.flexibleHours.title'),
      description: t('benefits.workLife.flexibleHours.description')
    },
    {
      icon: <Globe size={20} className="text-primary" />,
      title: t('benefits.workLife.remote.title'),
      description: t('benefits.workLife.remote.description')
    },
    {
      icon: <Calendar size={20} className="text-primary" />,
      title: t('benefits.workLife.pto.title'),
      description: t('benefits.workLife.pto.description')
    }
  ]

  const growthBenefits = [
    {
      icon: <Brain size={20} className="text-primary" />,
      title: t('benefits.growth.learningBudget.title'),
      description: t('benefits.growth.learningBudget.description')
    },
    {
      icon: <Lightbulb size={20} className="text-primary" />,
      title: t('benefits.growth.innovationTime.title'),
      description: t('benefits.growth.innovationTime.description')
    },
    {
      icon: <Users size={20} className="text-primary" />,
      title: t('benefits.growth.mentorship.title'),
      description: t('benefits.growth.mentorship.description')
    }
  ]

  const roles = [
    {
      title: t('roles.aiEngineer.title'),
      type: t('roles.aiEngineer.type'),
      icon: <Brain size={32} className="text-primary" />,
      description: t('roles.aiEngineer.description'),
      requirements: [
        t('roles.aiEngineer.requirements.0'),
        t('roles.aiEngineer.requirements.1'),
        t('roles.aiEngineer.requirements.2'),
        t('roles.aiEngineer.requirements.3')
      ],
      bonus: [
        t('roles.aiEngineer.bonus.0'),
        t('roles.aiEngineer.bonus.1'),
        t('roles.aiEngineer.bonus.2')
      ]
    },
    {
      title: t('roles.fullStack.title'),
      type: t('roles.fullStack.type'),
      icon: <Code size={32} className="text-primary" />,
      description: t('roles.fullStack.description'),
      requirements: [
        t('roles.fullStack.requirements.0'),
        t('roles.fullStack.requirements.1'),
        t('roles.fullStack.requirements.2'),
        t('roles.fullStack.requirements.3')
      ],
      bonus: [
        t('roles.fullStack.bonus.0'),
        t('roles.fullStack.bonus.1'),
        t('roles.fullStack.bonus.2')
      ]
    }
  ]

  const applicationItems = [
    t('howToApply.items.0'),
    t('howToApply.items.1'),
    t('howToApply.items.2'),
    t('howToApply.items.3'),
    t('howToApply.items.4')
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
              <a
                href="mailto:Mo@MohammadOthman.com?subject=TransformerLabs Career Interest - [Your Position]"
                className="btn btn-primary btn-lg"
              >
                {t('hero.applyNow')}
              </a>
              <a href="#open-roles" className="btn btn-secondary btn-lg">
                {t('hero.viewRoles')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('why.title')}</h2>
            <p className="section-subtitle">
              {t('why.subtitle')}
            </p>
          </div>

          <div className="grid-3">
            {whyJoin.map((reason, index) => (
              <div key={index} className="card">
                <div style={{
                  marginBottom: 'var(--space-4)',
                  textAlign: 'center'
                }}>
                  {reason.icon}
                </div>
                <h3 className="card-title" style={{ textAlign: 'center', marginBottom: 'var(--space-3)' }}>
                  {reason.title}
                </h3>
                <p className="card-description" style={{ textAlign: 'center' }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Culture */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('benefits.title')}</h2>
            <p className="section-subtitle">
              {t('benefits.subtitle')}
            </p>
          </div>

          <div className="grid-2" style={{ gap: 'var(--space-10)' }}>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)'
              }}>
                {t('benefits.workLife.title')}
              </h3>
              <div className="space-y-4">
                {workLifeBenefits.map((benefit, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    gap: 'var(--space-3)',
                    alignItems: 'flex-start',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <div style={{ marginTop: '0.125rem', flexShrink: 0 }}>
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 style={{
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: 'var(--space-1)',
                        fontSize: '1rem'
                      }}>
                        {benefit.title}
                      </h4>
                      <p style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                        margin: 0
                      }}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)'
              }}>
                {t('benefits.growth.title')}
              </h3>
              <div className="space-y-4">
                {growthBenefits.map((benefit, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    gap: 'var(--space-3)',
                    alignItems: 'flex-start',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <div style={{ marginTop: '0.125rem', flexShrink: 0 }}>
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 style={{
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: 'var(--space-1)',
                        fontSize: '1rem'
                      }}>
                        {benefit.title}
                      </h4>
                      <p style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                        margin: 0
                      }}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section" id="open-roles">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('roles.title')}</h2>
            <p className="section-subtitle">
              {t('roles.subtitle')}
            </p>
          </div>

          <div className="grid-2" style={{ gap: 'var(--space-8)' }}>
            {roles.map((role, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <div className="card-main">
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-3)',
                      marginBottom: 'var(--space-4)'
                    }}>
                      {role.icon}
                      <div>
                        <h3 style={{
                          fontSize: '1.5rem',
                          fontWeight: '600',
                          color: 'var(--text-primary)',
                          margin: 0
                        }}>
                          {role.title}
                        </h3>
                        <p style={{
                          fontSize: '0.875rem',
                          color: 'var(--text-muted)',
                          margin: 0
                        }}>
                          {role.type}
                        </p>
                      </div>
                    </div>

                    <p style={{
                      color: 'var(--text-secondary)',
                      marginBottom: 'var(--space-6)',
                      lineHeight: 1.6,
                      fontSize: '1rem'
                    }}>
                      {role.description}
                    </p>

                    <div style={{ marginBottom: 'var(--space-4)' }}>
                      <h4 style={{
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        marginBottom: 'var(--space-3)',
                        color: 'var(--text-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        {t('roles.requirements')}:
                      </h4>
                      <ul style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-2)',
                        margin: 0,
                        padding: 0
                      }}>
                        {role.requirements.map((req, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                            <CheckCircle size={16} className="text-green-600" style={{ marginTop: '0.125rem', flexShrink: 0 }} />
                            <span style={{
                              fontSize: '0.875rem',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.5
                            }}>
                              {req}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 style={{
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        marginBottom: 'var(--space-3)',
                        color: 'var(--text-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        {t('roles.bonusPoints')}:
                      </h4>
                      <ul style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-2)',
                        margin: 0,
                        padding: 0
                      }}>
                        {role.bonus.map((bonus, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                            <Zap size={16} className="text-primary" style={{ marginTop: '0.125rem', flexShrink: 0 }} />
                            <span style={{
                              fontSize: '0.875rem',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.5
                            }}>
                              {bonus}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="card-footer-content">
                    <a
                      href={`mailto:Mo@MohammadOthman.com?subject=TransformerLabs Application - ${role.title}&body=Hi Mohammad,%0D%0A%0D%0AI'm interested in the ${role.title} position at TransformerLabs.%0D%0A%0D%0AAttached is my CV. Here's a bit about myself:%0D%0A%0D%0A[Please tell us about your background, experience, and why you're interested in this role]%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`}
                      className="btn btn-primary w-full"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 'var(--space-2)'
                      }}
                    >
                      <Send size={16} />
                      {t('roles.applyFor')} {role.title}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('howToApply.title')}</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div style={{
              backgroundColor: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--space-10)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-6)'
              }}>
                <Mail size={24} className="text-primary" />
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  margin: 0
                }}>
                  {t('howToApply.sendApplication')}
                </h3>
              </div>

              <div style={{ marginBottom: 'var(--space-6)' }}>
                <p style={{
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-4)',
                  fontSize: '1.125rem',
                  lineHeight: 1.6
                }}>
                  {t('howToApply.intro')}
                </p>

                <ul style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-6)',
                  padding: 0
                }}>
                  {applicationItems.map((item, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                      <CheckCircle size={20} className="text-green-600" style={{ marginTop: '0.125rem', flexShrink: 0 }} />
                      <span style={{
                        fontSize: '1rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5
                      }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                padding: 'var(--space-6)',
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                marginBottom: 'var(--space-6)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  marginBottom: 'var(--space-3)'
                }}>
                  <strong style={{ color: 'var(--text-primary)' }}>{t('howToApply.emailLabel')}</strong>
                  <code style={{
                    fontSize: '1rem',
                    color: 'var(--primary)',
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: 0
                  }}>
                    Mo@MohammadOthman.com
                  </code>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)'
                }}>
                  <strong style={{ color: 'var(--text-primary)' }}>{t('howToApply.subjectLabel')}</strong>
                  <code style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: 0
                  }}>
                    TransformerLabs Application - [Position Name]
                  </code>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <a
                  href="mailto:Mo@MohammadOthman.com?subject=TransformerLabs Career Interest - [Your Position]&body=Hi Mohammad,%0D%0A%0D%0AI'm interested in joining TransformerLabs.%0D%0A%0D%0AAttached is my CV. Here's a bit about myself:%0D%0A%0D%0A[Please tell us about your background, experience, and why you're interested in working with us]%0D%0A%0D%0ABest regards,%0D%0A[Your Name]"
                  className="btn btn-primary btn-lg"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}
                >
                  <Send size={20} />
                  {t('howToApply.sendButton')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Interest */}
      <section className="section">
        <div className="container">
          <div className="cta-section">
            <h2 style={{ marginBottom: 'var(--space-6)' }}>
              {t('general.title')}
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-8)',
              maxWidth: '600px',
              margin: '0 auto var(--space-8)'
            }}>
              {t('general.subtitle')}
            </p>

            <div className="flex justify-center">
              <a
                href="mailto:Mo@MohammadOthman.com?subject=TransformerLabs General Interest - Tell me about opportunities&body=Hi Mohammad,%0D%0A%0D%0AI'm interested in potential opportunities at TransformerLabs.%0D%0A%0D%0AAttached is my CV. Here's a bit about my background:%0D%0A%0D%0A[Please tell us about your experience, skills, and what type of role interests you]%0D%0A%0D%0ABest regards,%0D%0A[Your Name]"
                className="btn btn-secondary btn-lg"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)'
                }}
              >
                <Heart size={20} />
                {t('general.expressInterest')}
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
              gap: 'var(--space-6)',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Laptop size={16} className="text-green-600" />
                <span>{t('general.remoteCulture')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Globe size={16} className="text-green-600" />
                <span>{t('general.workAnywhere')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Clock size={16} className="text-green-600" />
                <span>{t('general.flexibleHours')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
