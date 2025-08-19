import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap'
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://transformerlabs.io'),
  title: {
    default: 'TransformerLabs - Enterprise AI Solutions & LLM Development',
    template: '%s | TransformerLabs'
  },
  description: 'Leading AI consulting company specializing in LLM agents, chatbots, RAG systems, and enterprise AI workflows. Serving businesses across the Middle East with scalable AI solutions.',
  keywords: [
    'AI consulting',
    'LLM development',
    'chatbot development', 
    'RAG systems',
    'AI agents',
    'machine learning consulting',
    'artificial intelligence solutions',
    'Middle East AI company',
    'enterprise AI',
    'AI automation',
    'generative AI',
    'deep learning services'
  ],
  verification: {
    google: 'deSo6Vlgg1JO3UF_wLjJHmfMyImof4tpOf9B_ekRowI',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}