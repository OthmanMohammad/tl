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
    default: 'TransformerLabs - Advanced AI Solutions & Neural Systems',
    template: '%s | TransformerLabs'
  },
  description: 'Leading AI company building production-ready neural systems, LLM agents, and intelligent workflows. Transforming businesses across the Middle East with cutting-edge artificial intelligence.',
  keywords: [
    'artificial intelligence',
    'AI development',
    'LLM agents',
    'neural networks',
    'machine learning',
    'deep learning',
    'AI consulting',
    'RAG systems',
    'AI automation',
    'Middle East AI',
    'enterprise AI',
    'generative AI',
    'AI infrastructure',
    'custom AI models',
    'neural workflows'
  ],
  authors: [{ name: 'Mohammad Othman', url: 'https://MohammadOthman.com' }],
  creator: 'TransformerLabs',
  publisher: 'TransformerLabs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://transformerlabs.io',
    siteName: 'TransformerLabs',
    title: 'TransformerLabs - Advanced AI Solutions & Neural Systems',
    description: 'Leading AI company building production-ready neural systems, LLM agents, and intelligent workflows for businesses across the Middle East.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TransformerLabs - AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TransformerLabs - Advanced AI Solutions',
    description: 'Leading AI company building production-ready neural systems and intelligent workflows.',
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
  category: 'technology',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TransformerLabs',
  alternateName: 'Transformer Labs',
  url: 'https://transformerlabs.io',
  logo: 'https://transformerlabs.io/logo.png',
  description: 'Leading AI company building production-ready neural systems, LLM agents, and intelligent workflows.',
  foundingDate: '2023-12',
  founder: {
    '@type': 'Person',
    name: 'Mohammad Othman',
    email: 'Mo@MohammadOthman.com',
    jobTitle: 'CEO & AI Engineer',
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
      '@type': 'Country',
      name: 'Palestine'
    },
    {
      '@type': 'Country',
      name: 'United Kingdom'
    },
    {
      '@type': 'Place',
      name: 'Middle East'
    },
    {
      '@type': 'Place',
      name: 'Gulf States'
    }
  ],
  serviceType: [
    'Artificial Intelligence Development',
    'LLM Agent Development',
    'Neural Network Design',
    'Machine Learning Consulting',
    'AI Infrastructure',
    'RAG Systems',
    'AI Automation',
    'Custom AI Models'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Business',
    email: 'Mo@MohammadOthman.com',
    availableLanguage: ['English', 'Arabic']
  },
  sameAs: [
    'https://linkedin.com/company/transformerlabs',
    'https://twitter.com/transformerlabs',
    'https://github.com/transformerlabs'
  ],
  knowsAbout: [
    'Large Language Models',
    'Neural Networks',
    'Deep Learning',
    'Machine Learning',
    'Artificial Intelligence',
    'Natural Language Processing',
    'Computer Vision',
    'MLOps',
    'AI Infrastructure'
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
        <meta name="theme-color" content="#00d9ff" />
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