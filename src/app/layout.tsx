import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieConsentBanner from '@/components/CookieConsentBanner'
import Analytics from '@/components/Analytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://transformerlabs.io'),
  title: {
    default: 'TransformerLabs | AI Development & Consulting Services',
    template: '%s | TransformerLabs'
  },
  description: 'Professional AI development services for businesses worldwide. We build chatbots, data analytics, workflow automation, and custom AI solutions that deliver real results.',
  keywords: [
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
    locale: 'en_US',
    url: 'https://transformerlabs.io',
    siteName: 'TransformerLabs',
    title: 'TransformerLabs | Professional AI Development & Consulting',
    description: 'We build practical AI solutions for businesses worldwide. From intelligent chatbots to advanced data analytics.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TransformerLabs - AI Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TransformerLabs | AI Development Services',
    description: 'Professional AI solutions that solve real business problems.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#EB1600" />
      </head>
      <body>
        {/* Google Analytics - Only loads with user consent */}
        <Analytics />
        
        <Navigation />
        <main>{children}</main>
        <Footer />
        
        {/* TransformerLabs Cookie Consent Banner */}
        <CookieConsentBanner />
      </body>
    </html>
  )
}