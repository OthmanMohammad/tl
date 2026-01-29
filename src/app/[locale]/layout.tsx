import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales, localeMetadata, type Locale } from '@/i18n/config'
import '../globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieConsentBanner from '@/components/CookieConsentBanner'
import Analytics from '@/components/Analytics'
import JsonLd from '@/components/JsonLd'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  const isArabic = locale === 'ar'

  return {
    metadataBase: new URL('https://transformerlabs.io'),
    title: {
      default: isArabic
        ? 'TransformerLabs | خدمات تطوير الذكاء الاصطناعي والاستشارات'
        : 'TransformerLabs | AI Development & Consulting Services',
      template: isArabic ? '%s | TransformerLabs' : '%s | TransformerLabs'
    },
    description: isArabic
      ? 'خدمات تطوير ذكاء اصطناعي احترافية للشركات حول العالم. نبني روبوتات المحادثة وتحليل البيانات وأتمتة سير العمل وحلول الذكاء الاصطناعي المخصصة التي تحقق نتائج حقيقية.'
      : 'Professional AI development services for businesses worldwide. We build chatbots, data analytics, workflow automation, and custom AI solutions that deliver real results.',
    keywords: isArabic
      ? [
          'استشارات الذكاء الاصطناعي',
          'خدمات تطوير الذكاء الاصطناعي',
          'حلول ذكاء اصطناعي مخصصة',
          'تطوير روبوتات المحادثة',
          'تحليل البيانات',
          'أتمتة سير العمل',
          'خدمات الذكاء الاصطناعي فلسطين',
          'حلول ذكاء اصطناعي للأعمال'
        ]
      : [
          'AI consulting',
          'AI development services',
          'custom AI solutions',
          'chatbot development',
          'data analytics AI',
          'workflow automation',
          'Scotland AI services',
          'Palestine AI services',
          'business AI solutions'
        ],
    authors: [{ name: 'Mohammad Othman', url: 'https://MohammadOthman.com' }],
    creator: 'TransformerLabs',
    publisher: 'TransformerLabs',
    openGraph: {
      type: 'website',
      locale: localeMetadata[locale as Locale]?.ogLocale || 'en_US',
      url: 'https://transformerlabs.io',
      siteName: 'TransformerLabs',
      title: isArabic
        ? 'TransformerLabs | تطوير واستشارات الذكاء الاصطناعي الاحترافي'
        : 'TransformerLabs | Professional AI Development & Consulting',
      description: isArabic
        ? 'نبني حلول ذكاء اصطناعي عملية للشركات حول العالم. من روبوتات المحادثة الذكية إلى تحليل البيانات المتقدم.'
        : 'We build practical AI solutions for businesses worldwide. From intelligent chatbots to advanced data analytics.',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: isArabic ? 'TransformerLabs - خدمات تطوير الذكاء الاصطناعي' : 'TransformerLabs - AI Development Services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isArabic ? 'TransformerLabs | خدمات تطوير الذكاء الاصطناعي' : 'TransformerLabs | AI Development Services',
      description: isArabic ? 'حلول ذكاء اصطناعي احترافية تحل مشاكل الأعمال الحقيقية.' : 'Professional AI solutions that solve real business problems.',
      images: ['/twitter-image.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: { url: '/Logo_only_Transparent.svg', type: 'image/svg+xml' },
      apple: { url: '/Logo_only_Transparent.svg', type: 'image/svg+xml' },
      shortcut: '/Logo_only_Transparent.svg',
    },
    manifest: '/site.webmanifest',
    alternates: {
      canonical: `https://transformerlabs.io/${locale}`,
      languages: {
        en: 'https://transformerlabs.io/en',
        ar: 'https://transformerlabs.io/ar',
      },
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Get messages for the locale
  const messages = await getMessages()

  // Get locale metadata
  const { lang, dir } = localeMetadata[locale as Locale] || localeMetadata.en

  return (
    <html lang={lang} dir={dir}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#EB1600" />
        <meta name="facebook-domain-verification" content="jh1uuo4izvzvyr8e72y3n0pe5vbwri" />
        <link rel="alternate" hrefLang="en" href="https://transformerlabs.io/en" />
        <link rel="alternate" hrefLang="ar" href="https://transformerlabs.io/ar" />
        <link rel="alternate" hrefLang="x-default" href="https://transformerlabs.io/en" />
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* JSON-LD Structured Data */}
        <JsonLd locale={locale} />
      </head>
      <body className={dir === 'rtl' ? 'rtl' : 'ltr'}>
        <NextIntlClientProvider messages={messages}>
          {/* Google Analytics - Only loads with user consent */}
          <Analytics />

          <Navigation />
          <main>{children}</main>
          <Footer />

          {/* TransformerLabs Cookie Consent Banner */}
          <CookieConsentBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
