// src/app/layout.tsx - Clean Professional Layout
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  metadataBase: new URL('https://transformerlabs.io'),
  title: {
    default: 'TransformerLabs - AI Development & Data Analytics Services',
    template: '%s | TransformerLabs'
  },
  description: 'We build AI solutions for businesses worldwide, specializing in MENA and Gulf markets - chatbots, data analytics, workflow automation, and generative AI applications.',
  keywords: [
    'AI consulting',
    'AI development services',
    'custom AI solutions',
    'LLM integration',
    'artificial intelligence consulting',
    'machine learning development',
    'AI strategy consulting',
    'workflow automation',
    'RAG systems',
    'AI implementation',
    'Middle East AI services',
    'enterprise AI solutions',
    'AI partnership',
    'business intelligence',
    'AI transformation'
  ],
  authors: [{ name: 'Mohammad Othman', url: 'https://MohammadOthman.com' }],
  creator: 'TransformerLabs',
  publisher: 'TransformerLabs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://transformerlabs.io',
    siteName: 'TransformerLabs',
    title: 'TransformerLabs - AI Consulting & Development Services',
    description: 'Professional AI consulting and development services for businesses across the Middle East. Custom AI solutions that deliver real results.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TransformerLabs - AI Consulting Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TransformerLabs - AI Consulting & Development Services',
    description: 'Professional AI consulting and development services for businesses across the Middle East.',
    images: ['/twitter-image.jpg'],
    creator: '@transformerlabs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'deSo6Vlgg1JO3UF_wLjJHmfMyImof4tpOf9B_ekRowI',
  },
  alternates: {
    canonical: 'https://transformerlabs.io',
  },
  category: 'business',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'TransformerLabs',
  alternateName: 'Transformer Labs',
  url: 'https://transformerlabs.io',
  logo: 'https://transformerlabs.io/logo.png',
  description: 'Professional AI consulting and development services for businesses across the Middle East.',
  foundingDate: '2023-12',
  founder: {
    '@type': 'Person',
    name: 'Mohammad Othman',
    email: 'Mo@MohammadOthman.com',
    jobTitle: 'CEO & AI Consultant',
    url: 'https://MohammadOthman.com'
  },
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Nablus',
      addressRegion: 'West Bank',
      addressCountry: 'PS'
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB'
    }
  ],
  areaServed: [
    {
      '@type': 'Place',
      name: 'Worldwide'
    },
    {
      '@type': 'Place',
      name: 'MENA Region'
    },
    {
      '@type': 'Place',
      name: 'Gulf States'
    },
    {
      '@type': 'Country',
      name: 'Palestine'
    },
    {
      '@type': 'Country',
      name: 'United Kingdom'
    }
  ],
  serviceType: [
    'AI Consulting',
    'Custom AI Development',
    'LLM Integration',
    'Machine Learning Development',
    'AI Strategy Consulting',
    'Workflow Automation',
    'RAG Systems Development',
    'AI Implementation Services'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Strategy & Consulting',
          description: 'Comprehensive AI strategy development and consulting services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom AI Development',
          description: 'Custom AI solutions development tailored to business needs'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'LLM Integration',
          description: 'Large Language Model integration and customization services'
        }
      }
    ]
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Business',
    email: 'Mo@MohammadOthman.com',
    availableLanguage: ['English', 'Arabic']
  },
  sameAs: [
    'https://www.linkedin.com/company/transformer-labs',
    'https://twitter.com/transformerlabs',
    'https://github.com/transformerlabs'
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Large Language Models',
    'Natural Language Processing',
    'AI Strategy',
    'Business Intelligence',
    'Workflow Automation',
    'Custom Software Development'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#EB1600" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}