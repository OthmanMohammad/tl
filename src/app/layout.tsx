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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#EB1600" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}