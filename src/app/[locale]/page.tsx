import Link from 'next/link'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import {
  Bot,
  BarChart3,
  Zap,
  Code,
  Globe,
  Settings,
  Target,
  RotateCcw,
  Sparkles
} from 'lucide-react'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('home')
  const tCommon = await getTranslations('common')

  const services = [
    {
      title: t('services.chatbots.title'),
      description: t('services.chatbots.description'),
      icon: <Bot size={48} className="text-primary" />
    },
    {
      title: t('services.software.title'),
      description: t('services.software.description'),
      icon: <Code size={48} className="text-primary" />
    },
    {
      title: t('services.webDesign.title'),
      description: t('services.webDesign.description'),
      icon: <Globe size={48} className="text-primary" />
    },
    {
      title: t('services.analytics.title'),
      description: t('services.analytics.description'),
      icon: <BarChart3 size={48} className="text-primary" />
    },
    {
      title: t('services.automation.title'),
      description: t('services.automation.description'),
      icon: <Zap size={48} className="text-primary" />
    },
    {
      title: t('services.custom.title'),
      description: t('services.custom.description'),
      icon: <Settings size={48} className="text-primary" />
    }
  ]

  const whyChoose = [
    {
      title: t('whyChoose.quality.title'),
      description: t('whyChoose.quality.description'),
      icon: <Sparkles size={48} className="text-primary" />
    },
    {
      title: t('whyChoose.business.title'),
      description: t('whyChoose.business.description'),
      icon: <Target size={48} className="text-primary" />
    },
    {
      title: t('whyChoose.endToEnd.title'),
      description: t('whyChoose.endToEnd.description'),
      icon: <RotateCcw size={48} className="text-primary" />
    }
  ]

  const industries = [
    {
      industry: t('industries.ecommerce.title'),
      description: t('industries.ecommerce.description')
    },
    {
      industry: t('industries.healthcare.title'),
      description: t('industries.healthcare.description')
    },
    {
      industry: t('industries.financial.title'),
      description: t('industries.financial.description')
    },
    {
      industry: t('industries.manufacturing.title'),
      description: t('industries.manufacturing.description')
    },
    {
      industry: t('industries.professional.title'),
      description: t('industries.professional.description')
    },
    {
      industry: t('industries.education.title'),
      description: t('industries.education.description')
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
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
              <Link href={`/${locale}/services`} className="btn btn-secondary btn-lg">
                {t('hero.cta2')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('services.title')}</h2>
            <p className="section-subtitle">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid-3">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div style={{
                  marginBottom: 'var(--space-4)',
                  textAlign: 'center'
                }}>
                  {service.icon}
                </div>
                <h3 className="card-title" style={{ textAlign: 'center', marginBottom: 'var(--space-3)' }}>
                  {service.title}
                </h3>
                <p className="card-description" style={{ textAlign: 'center' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('whyChoose.title')}</h2>
          </div>

          <div className="grid-3">
            {whyChoose.map((feature, index) => (
              <div key={index} className="card">
                <div style={{
                  marginBottom: 'var(--space-4)',
                  textAlign: 'center'
                }}>
                  {feature.icon}
                </div>
                <h3 className="card-title" style={{ textAlign: 'center', marginBottom: 'var(--space-3)' }}>
                  {feature.title}
                </h3>
                <p className="card-description" style={{ textAlign: 'center' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('industries.title')}</h2>
            <p className="section-subtitle">
              {t('industries.subtitle')}
            </p>
          </div>

          <div className="grid-3">
            {industries.map((item, index) => (
              <div key={index} className="card">
                <h3 className="card-title" style={{
                  fontSize: '1.25rem',
                  marginBottom: 'var(--space-3)',
                  color: 'var(--primary)',
                  textAlign: 'center'
                }}>
                  {item.industry}
                </h3>
                <p className="card-description" style={{ textAlign: 'center' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="cta-section">
            <h2 style={{ marginBottom: 'var(--space-6)' }}>
              {t('cta.title')}
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-8)',
              maxWidth: '600px',
              margin: '0 auto var(--space-8)'
            }}>
              {t('cta.subtitle')}
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link href={`/${locale}/contact`} className="btn btn-primary btn-lg">
                {tCommon('getStarted')}
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
    </main>
  )
}
