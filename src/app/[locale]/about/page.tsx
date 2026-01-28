import Link from 'next/link'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import {
  Bot,
  BarChart3,
  Zap,
  Search,
  Sparkles,
  Settings,
  Target,
  Clock,
  MessageSquare,
  HeadphonesIcon,
  Mail,
  CheckCircle
} from 'lucide-react'
import ProfessionalGlobe from '@/components/ProfessionalGlobe'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

export default async function About({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('about')
  const tCommon = await getTranslations('common')

  const focus = [
    {
      title: t('focus.practical.title'),
      desc: t('focus.practical.description'),
      icon: <Target size={20} className="text-primary" />
    },
    {
      title: t('focus.reliable.title'),
      desc: t('focus.reliable.description'),
      icon: <Clock size={20} className="text-primary" />
    },
    {
      title: t('focus.communication.title'),
      desc: t('focus.communication.description'),
      icon: <MessageSquare size={20} className="text-primary" />
    },
    {
      title: t('focus.support.title'),
      desc: t('focus.support.description'),
      icon: <HeadphonesIcon size={20} className="text-primary" />
    }
  ]

  const specializations = [
    {
      icon: <Bot size={40} className="text-primary" />,
      title: t('specialize.conversational.title'),
      description: t('specialize.conversational.description')
    },
    {
      icon: <BarChart3 size={40} className="text-primary" />,
      title: t('specialize.dataAnalytics.title'),
      description: t('specialize.dataAnalytics.description')
    },
    {
      icon: <Zap size={40} className="text-primary" />,
      title: t('specialize.processAutomation.title'),
      description: t('specialize.processAutomation.description')
    },
    {
      icon: <Search size={40} className="text-primary" />,
      title: t('specialize.knowledge.title'),
      description: t('specialize.knowledge.description')
    },
    {
      icon: <Sparkles size={40} className="text-primary" />,
      title: t('specialize.generative.title'),
      description: t('specialize.generative.description')
    },
    {
      icon: <Settings size={40} className="text-primary" />,
      title: t('specialize.customSolutions.title'),
      description: t('specialize.customSolutions.description')
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

      {/* Company Story */}
      <section className="section">
        <div className="container">
          {/* Story Header - Full Width */}
          <h2 style={{ marginBottom: 'var(--space-8)' }}>
            {t('story.title')}
          </h2>

          {/* Story Content - Aligned Grid */}
          <div className="grid-2" style={{ gap: 'var(--space-12)', alignItems: 'start' }}>
            {/* Left Column - Description */}
            <div>
              <p style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-6)'
              }}>
                {t('story.p1')}
              </p>
              <p style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-6)'
              }}>
                {t('story.p2')}
              </p>
              <p style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)'
              }}>
                {t('story.p3')}
              </p>
            </div>

            {/* Right Column - Our Focus */}
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
                {t('focus.title')}
              </h3>
              <div className="space-y-4">
                {focus.map((item, index) => (
                  <div key={index} style={{
                    marginBottom: 'var(--space-4)',
                    display: 'flex',
                    gap: 'var(--space-3)',
                    alignItems: 'flex-start'
                  }}>
                    <div style={{ marginTop: '0.125rem' }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: 'var(--space-1)',
                        fontSize: '1rem'
                      }}>
                        {item.title}
                      </h4>
                      <p style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                        margin: 0
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section with Professional Globe */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('global.title')}</h2>
            <p className="section-subtitle">
              {t('global.subtitle')}
            </p>
          </div>

          <ProfessionalGlobe />
        </div>
      </section>

      {/* What We Build */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('specialize.title')}</h2>
            <p className="section-subtitle">
              {t('specialize.subtitle')}
            </p>
          </div>

          <div className="grid-3">
            {specializations.map((service, index) => (
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

      {/* Our Approach */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('howWeWork.title')}</h2>
          </div>

          <div className="grid-2" style={{ gap: 'var(--space-12)' }}>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                {t('howWeWork.businessFirst.title')}
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-6)',
                lineHeight: 1.7
              }}>
                {t('howWeWork.businessFirst.description')}
              </p>

              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                {t('howWeWork.transparent.title')}
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.7
              }}>
                {t('howWeWork.transparent.description')}
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                {t('howWeWork.flexible.title')}
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-6)',
                lineHeight: 1.7
              }}>
                {t('howWeWork.flexible.description')}
              </p>

              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                {t('howWeWork.longTerm.title')}
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.7
              }}>
                {t('howWeWork.longTerm.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('leadership.title')}</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div style={{
              backgroundColor: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-10)',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: 'var(--space-2)',
                color: 'var(--text-primary)'
              }}>
                {t('leadership.name')}
              </h3>

              <p style={{
                color: 'var(--primary)',
                fontWeight: '500',
                marginBottom: 'var(--space-6)',
                fontSize: '1.125rem'
              }}>
                {t('leadership.role')}
              </p>

              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '600px',
                margin: '0 auto var(--space-6)',
                fontSize: '1.125rem'
              }}>
                {t('leadership.bio')}
              </p>

              <div style={{ marginTop: 'var(--space-6)' }}>
                <a
                  href="mailto:Mo@MohammadOthman.com"
                  className="btn btn-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}
                >
                  <Mail size={16} />
                  {t('leadership.contactDirectly')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
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

            <div className="flex gap-4 justify-center flex-wrap">
              <Link href={`/${locale}/contact`} className="btn btn-primary btn-lg">
                {t('cta.getInTouch')}
              </Link>
              <Link href={`/${locale}/services`} className="btn btn-secondary btn-lg">
                {tCommon('viewServices')}
              </Link>
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
                <CheckCircle size={16} className="text-green-600" />
                <span>{tCommon('freeConsultation')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <CheckCircle size={16} className="text-green-600" />
                <span>{tCommon('noObligation')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
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
