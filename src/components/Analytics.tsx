'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import CookieManager from '@/utils/cookieManager'

export default function Analytics() {
  const [canLoadAnalytics, setCanLoadAnalytics] = useState(false)
  const cookieManager = CookieManager.getInstance()
  
  // Your actual Google Analytics ID
  const GA_ID = 'G-DQ0NDRJWQP'

  useEffect(() => {
    // Check initial consent
    const checkConsent = () => {
      const preferences = cookieManager.getPreferences()
      setCanLoadAnalytics(preferences.analytics && cookieManager.hasUserConsent())
    }

    checkConsent()

    // Listen for consent changes
    const handleConsentChange = (event: CustomEvent) => {
      const preferences = event.detail
      setCanLoadAnalytics(preferences.analytics)
      
      if (!preferences.analytics) {
        // User disabled analytics, clear existing data
        clearAnalyticsData()
      }
    }

    const handleConsentCleared = () => {
      setCanLoadAnalytics(false)
      clearAnalyticsData()
    }

    // Add event listeners
    window.addEventListener('cookieConsentChanged', handleConsentChange as EventListener)
    window.addEventListener('cookieConsentCleared', handleConsentCleared as EventListener)

    return () => {
      window.removeEventListener('cookieConsentChanged', handleConsentChange as EventListener)
      window.removeEventListener('cookieConsentCleared', handleConsentCleared as EventListener)
    }
  }, [cookieManager])

  const clearAnalyticsData = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      // Disable Google Analytics
      window.gtag('config', GA_ID, {
        send_page_view: false
      })
    }
  }

  // Don't load analytics if no consent
  if (!canLoadAnalytics) {
    return null
  }

  return (
    <>
      {/* Google Analytics for TransformerLabs */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      
      <Script
        id="google-analytics-transformerlabs"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${GA_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false,
              cookie_flags: 'SameSite=Strict;Secure'
            });

            // Track TransformerLabs specific events
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href,
              site_name: 'TransformerLabs'
            });
          `,
        }}
      />
    </>
  )
}

// Utility functions for tracking TransformerLabs events
export const trackEvent = (eventName: string, parameters?: Record<string, string | number | boolean>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const cookieManager = CookieManager.getInstance()
    const preferences = cookieManager.getPreferences()
    
    if (preferences.analytics) {
      window.gtag('event', eventName, {
        ...parameters,
        timestamp: new Date().toISOString(),
        site_name: 'TransformerLabs'
      })
    }
  }
}

// TransformerLabs specific tracking functions
export const trackContactFormSubmit = (formType: 'contact' | 'quote' | 'consultation') => {
  trackEvent('form_submit', {
    form_type: formType,
    category: 'lead_generation',
    business_type: 'B2B_AI_services'
  })
}

export const trackServicePageView = (serviceName: string) => {
  trackEvent('service_interest', {
    service_name: serviceName,
    category: 'service_pages',
    business_vertical: 'AI_development'
  })
}

export const trackDownload = (downloadType: string, fileName?: string) => {
  trackEvent('file_download', {
    download_type: downloadType,
    ...(fileName && { file_name: fileName }),
    category: 'engagement'
  })
}

export const trackOutboundLink = (url: string, linkType: 'email' | 'phone' | 'external' | 'social') => {
  trackEvent('click', {
    link_url: url,
    link_type: linkType,
    category: 'outbound_links'
  })
}