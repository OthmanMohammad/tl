export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

export interface CookieCategory {
  id: keyof CookiePreferences
  title: string
  description: string
  required: boolean
  examples: string[]
}

export interface CookieConsentData {
  preferences: CookiePreferences
  consentDate: string
  version: string
}

export const COOKIE_CATEGORIES: CookieCategory[] = [
  {
    id: 'necessary',
    title: 'Essential Cookies',
    description: 'Required for the website to function properly. These cannot be disabled.',
    required: true,
    examples: ['Session management', 'Security', 'Basic functionality']
  },
  {
    id: 'analytics',
    title: 'Analytics Cookies',
    description: 'Help us understand how visitors use our website to improve performance and user experience.',
    required: false,
    examples: ['Google Analytics', 'Page views', 'User behavior']
  },
  {
    id: 'functional',
    title: 'Functional Cookies',
    description: 'Enable enhanced features and personalization, such as chat support and preferences.',
    required: false,
    examples: ['Language preferences', 'Chat widgets', 'Form data']
  },
  {
    id: 'marketing',
    title: 'Marketing Cookies',
    description: 'Track visitors across websites to show relevant advertisements and measure campaign effectiveness.',
    required: false,
    examples: ['Ad targeting', 'Social media', 'Conversion tracking']
  }
]

export const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false
}

export const CONSENT_VERSION = '1.0'