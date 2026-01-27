import { CookiePreferences, CookieConsentData, DEFAULT_PREFERENCES, CONSENT_VERSION } from '@/types/cookies'

const STORAGE_KEY = 'transformerlabs-cookie-consent'
const STORAGE_DATE_KEY = 'transformerlabs-cookie-consent-date'

export class CookieManager {
  private static instance: CookieManager
  private preferences: CookiePreferences = DEFAULT_PREFERENCES
  private hasConsent: boolean = false

  private constructor() {
    if (typeof window !== 'undefined') {
      this.loadSavedPreferences()
    }
  }

  static getInstance(): CookieManager {
    if (!CookieManager.instance) {
      CookieManager.instance = new CookieManager()
    }
    return CookieManager.instance
  }

  private loadSavedPreferences(): void {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const data: CookieConsentData = JSON.parse(saved)
        
        // Check if consent is still valid (not older than 1 year)
        const consentDate = new Date(data.consentDate)
        const oneYearAgo = new Date()
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)
        
        if (consentDate > oneYearAgo && data.version === CONSENT_VERSION) {
          this.preferences = { ...DEFAULT_PREFERENCES, ...data.preferences }
          this.hasConsent = true
          this.initializeServices()
        } else {
          // Consent expired or version changed
          this.clearConsent()
        }
      }
    } catch (error) {
      console.error('Error loading cookie preferences:', error)
      this.clearConsent()
    }
  }

  savePreferences(preferences: CookiePreferences): void {
    const consentData: CookieConsentData = {
      preferences,
      consentDate: new Date().toISOString(),
      version: CONSENT_VERSION
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consentData))
      this.preferences = { ...preferences }
      this.hasConsent = true
      this.initializeServices()
      
      // Dispatch custom event for other components to listen to
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('cookieConsentChanged', { 
          detail: preferences 
        }))
      }
    } catch (error) {
      console.error('Error saving cookie preferences:', error)
    }
  }

  getPreferences(): CookiePreferences {
    return { ...this.preferences }
  }

  hasUserConsent(): boolean {
    return this.hasConsent
  }

  shouldShowBanner(): boolean {
    return !this.hasConsent
  }

  clearConsent(): void {
    try {
      localStorage.removeItem(STORAGE_KEY)
      localStorage.removeItem(STORAGE_DATE_KEY)
      this.preferences = DEFAULT_PREFERENCES
      this.hasConsent = false
      
      // Clear analytics cookies if they exist
      this.clearAnalyticsCookies()
      
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('cookieConsentCleared'))
      }
    } catch (error) {
      console.error('Error clearing consent:', error)
    }
  }

  private clearAnalyticsCookies(): void {
    if (typeof document === 'undefined') return
    
    // Clear Google Analytics cookies
    const gaCookies = ['_ga', '_ga_G-DQ0NDRJWQP', '_gid', '_gat', '_gat_gtag_G_DQ0NDRJWQP']
    gaCookies.forEach(cookie => {
      document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`
      document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${window.location.hostname}`
    })
  }

  private initializeServices(): void {
    if (!this.hasConsent) return

    // Initialize analytics
    if (this.preferences.analytics) {
      this.initializeAnalytics()
    }

    // Initialize marketing cookies
    if (this.preferences.marketing) {
      this.initializeMarketing()
    }

    // Initialize functional cookies
    if (this.preferences.functional) {
      this.initializeFunctional()
    }
  }

  private initializeAnalytics(): void {
    const gaId = 'G-DQ0NDRJWQP' // Your actual GA ID
    if (typeof window === 'undefined') return

    try {
      // Initialize Google Analytics
      if (!window.gtag) {
        // Load gtag script
        const script = document.createElement('script')
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
        document.head.appendChild(script)

        // Initialize gtag
        window.dataLayer = window.dataLayer || []
        function gtag(command: string, ...args: (string | Date | GtagParams)[]) {
          window.dataLayer.push([command, ...args])
        }
        window.gtag = gtag

        gtag('js', new Date())
        gtag('config', gaId, {
          anonymize_ip: true,
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
          cookie_flags: 'SameSite=Strict;Secure'
        })
      }

      console.log('✅ Google Analytics initialized for TransformerLabs')
    } catch (error) {
      console.error('Error initializing analytics:', error)
    }
  }

  private initializeMarketing(): void {
    // Initialize marketing tools (LinkedIn Insight Tag, Facebook Pixel, etc.)
    console.log('🎯 Marketing cookies initialized')
  }

  private initializeFunctional(): void {
    // Initialize functional tools (chat widgets, etc.)
    console.log('⚙️ Functional cookies initialized')
  }

  // Helper methods for components
  acceptAll(): void {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true
    }
    this.savePreferences(allAccepted)
  }

  acceptNecessaryOnly(): void {
    this.savePreferences(DEFAULT_PREFERENCES)
  }

  isConsentRequired(): boolean {
    // Always show consent for GDPR compliance
    return true
  }
}

// Gtag parameter types
type GtagParams = Record<string, string | number | boolean | undefined>

// Global type declarations
declare global {
  interface Window {
    gtag: (command: string, ...args: (string | Date | GtagParams)[]) => void
    dataLayer: unknown[][]
  }
}

export default CookieManager