'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Settings, Shield, BarChart3, MessageCircle, Target } from 'lucide-react'
import CookieManager from '@/utils/cookieManager'
import { CookiePreferences, COOKIE_CATEGORIES, DEFAULT_PREFERENCES } from '@/types/cookies'

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES)
  const [isLoading, setIsLoading] = useState(false)

  const cookieManager = CookieManager.getInstance()

  useEffect(() => {
    // Small delay to avoid flash on page load
    const timer = setTimeout(() => {
      if (cookieManager.shouldShowBanner()) {
        setIsVisible(true)
      }
    }, 1500) // Slightly longer delay for better UX

    return () => clearTimeout(timer)
  }, [cookieManager])

  useEffect(() => {
    // Load current preferences
    setPreferences(cookieManager.getPreferences())
  }, [cookieManager])

  const handleAcceptAll = async () => {
    setIsLoading(true)
    cookieManager.acceptAll()
    await new Promise(resolve => setTimeout(resolve, 400)) // Smooth transition
    setIsVisible(false)
    setIsLoading(false)
  }

  const handleAcceptNecessary = async () => {
    setIsLoading(true)
    cookieManager.acceptNecessaryOnly()
    await new Promise(resolve => setTimeout(resolve, 400))
    setIsVisible(false)
    setIsLoading(false)
  }

  const handleSavePreferences = async () => {
    setIsLoading(true)
    cookieManager.savePreferences(preferences)
    await new Promise(resolve => setTimeout(resolve, 400))
    setShowPreferences(false)
    setIsVisible(false)
    setIsLoading(false)
  }

  const updatePreference = (category: keyof CookiePreferences, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [category]: value
    }))
  }

  const getCategoryIcon = (categoryId: string) => {
    const icons = {
      necessary: <Shield size={20} className="text-primary" />,
      analytics: <BarChart3 size={20} className="text-primary" />,
      functional: <MessageCircle size={20} className="text-primary" />,
      marketing: <Target size={20} className="text-primary" />
    }
    return icons[categoryId as keyof typeof icons] || <Shield size={20} />
  }

  if (!isVisible) return null

  return (
    <>
      {/* Cookie Banner - TransformerLabs Style */}
      <div 
        className="cookie-banner"
        role="banner"
        aria-label="Cookie consent notice"
      >
        <div className="cookie-banner-container">
          <div className="cookie-banner-content">
            <div className="cookie-banner-main">
              <div className="cookie-banner-icon">
                <Shield size={24} className="text-primary" />
              </div>
              
              <div className="cookie-banner-text">
                <h3 className="cookie-banner-title">
                  We value your privacy
                </h3>
                <p className="cookie-banner-description">
                  We use cookies to enhance your browsing experience, analyze website performance, 
                  and provide better AI development services. Customize your preferences or review our{' '}
                  <Link href="/privacy" className="cookie-banner-link">
                    Privacy Policy
                  </Link>.
                </p>
              </div>
            </div>

            <div className="cookie-banner-actions">
              <button
                onClick={() => setShowPreferences(true)}
                className="btn btn-ghost btn-sm cookie-settings-btn"
                aria-label="Customize cookie preferences"
                disabled={isLoading}
              >
                <Settings size={16} />
                <span className="cookie-btn-text">Preferences</span>
              </button>
              
              <button
                onClick={handleAcceptNecessary}
                className="btn btn-secondary btn-sm"
                disabled={isLoading}
              >
                Essential Only
              </button>
              
              <button
                onClick={handleAcceptAll}
                className={`btn btn-primary btn-sm ${isLoading ? 'btn-loading' : ''}`}
                disabled={isLoading}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="cookie-modal-overlay">
          <div className="cookie-modal" role="dialog" aria-label="Cookie preferences" aria-modal="true">
            <div className="cookie-modal-header">
              <h2 className="cookie-modal-title">Cookie Preferences</h2>
              <button
                onClick={() => setShowPreferences(false)}
                className="cookie-modal-close"
                aria-label="Close preferences dialog"
                disabled={isLoading}
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="cookie-modal-content">
              <p className="cookie-modal-intro">
                Manage your cookie preferences for TransformerLabs. You can enable or disable different types of cookies below.
              </p>
              
              <div className="cookie-categories">
                {COOKIE_CATEGORIES.map((category) => (
                  <div key={category.id} className="cookie-category">
                    <div className="cookie-category-header">
                      <div className="cookie-category-title-row">
                        {getCategoryIcon(category.id)}
                        <h3 className="cookie-category-title">{category.title}</h3>
                      </div>
                      
                      <label className="cookie-toggle">
                        <input
                          type="checkbox"
                          checked={preferences[category.id]}
                          onChange={(e) => updatePreference(category.id, e.target.checked)}
                          disabled={category.required || isLoading}
                          className="cookie-checkbox"
                          aria-describedby={`${category.id}-description`}
                        />
                        <span className="cookie-toggle-slider"></span>
                      </label>
                    </div>
                    
                    <p id={`${category.id}-description`} className="cookie-category-description">
                      {category.description}
                    </p>
                    
                    <div className="cookie-category-examples">
                      <span className="cookie-examples-label">Examples:</span>
                      <span className="cookie-examples-text">
                        {category.examples.join(', ')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cookie-modal-footer">
              <button
                onClick={() => setShowPreferences(false)}
                className="btn btn-ghost"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                onClick={handleSavePreferences}
                className={`btn btn-primary ${isLoading ? 'btn-loading' : ''}`}
                disabled={isLoading}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* TransformerLabs Cookie Banner Styles */
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: var(--background);
          border-top: 3px solid var(--primary);
          box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -2px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          animation: slideUp 0.4s var(--ease-out) forwards;
          backdrop-filter: blur(20px);
        }

        .cookie-banner-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-6) var(--space-8);
        }

        .cookie-banner-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-8);
          flex-wrap: wrap;
        }

        .cookie-banner-main {
          display: flex;
          align-items: flex-start;
          gap: var(--space-4);
          flex: 1;
          min-width: 0;
          max-width: 600px;
        }

        .cookie-banner-icon {
          flex-shrink: 0;
          padding-top: var(--space-1);
        }

        .cookie-banner-text {
          flex: 1;
          min-width: 0;
        }

        .cookie-banner-title {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: var(--font-weight-semibold);
          color: var(--text-primary);
          margin: 0 0 var(--space-2) 0;
          line-height: 1.4;
        }

        .cookie-banner-description {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
          letter-spacing: -0.011em;
        }

        .cookie-banner-link {
          color: var(--primary);
          text-decoration: none;
          font-weight: var(--font-weight-medium);
          transition: all var(--duration-fast) var(--ease);
        }

        .cookie-banner-link:hover {
          color: var(--primary-hover);
          text-decoration: underline;
        }

        .cookie-banner-actions {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          flex-shrink: 0;
        }

        .cookie-settings-btn {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .cookie-btn-text {
          font-size: 0.875rem;
        }

        /* Modal Styles - TransformerLabs Theme */
        .cookie-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1001;
          padding: var(--space-4);
          animation: fadeIn 0.3s var(--ease-out);
        }

        .cookie-modal {
          background: var(--background);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-xl);
          max-width: 600px;
          width: 100%;
          max-height: 85vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          animation: modalSlideIn 0.4s var(--ease-out);
          border: 1px solid var(--border);
        }

        .cookie-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-8);
          border-bottom: 1px solid var(--border);
          background: var(--surface);
        }

        .cookie-modal-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: var(--font-weight-semibold);
          color: var(--text-primary);
          margin: 0;
          letter-spacing: -0.02em;
        }

        .cookie-modal-close {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-secondary);
          padding: var(--space-2);
          border-radius: var(--radius-lg);
          transition: all var(--duration-fast) var(--ease);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cookie-modal-close:hover:not(:disabled) {
          background: var(--surface-hover);
          color: var(--text-primary);
        }

        .cookie-modal-close:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .cookie-modal-content {
          padding: var(--space-8);
          overflow-y: auto;
          flex: 1;
        }

        .cookie-modal-intro {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0 0 var(--space-8) 0;
        }

        .cookie-categories {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .cookie-category {
          padding: var(--space-6);
          background: var(--surface);
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          transition: all var(--duration-normal) var(--ease);
        }

        .cookie-category:hover {
          border-color: var(--border-accent);
          box-shadow: var(--shadow-sm);
        }

        .cookie-category-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-4);
          margin-bottom: var(--space-3);
        }

        .cookie-category-title-row {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          flex: 1;
        }

        .cookie-category-title {
          font-size: 1rem;
          font-weight: var(--font-weight-semibold);
          color: var(--text-primary);
          margin: 0;
          font-family: var(--font-display);
        }

        .cookie-toggle {
          position: relative;
          display: flex;
          align-items: center;
          cursor: pointer;
          flex-shrink: 0;
        }

        .cookie-checkbox {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }

        .cookie-toggle-slider {
          width: 44px;
          height: 24px;
          background: var(--border-accent);
          border-radius: var(--radius-full);
          position: relative;
          transition: all var(--duration-normal) var(--ease);
        }

        .cookie-toggle-slider::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 20px;
          height: 20px;
          background: var(--background);
          border-radius: 50%;
          transition: all var(--duration-normal) var(--ease);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .cookie-checkbox:checked + .cookie-toggle-slider {
          background: var(--primary);
        }

        .cookie-checkbox:checked + .cookie-toggle-slider::after {
          transform: translateX(20px);
        }

        .cookie-checkbox:disabled + .cookie-toggle-slider {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .cookie-toggle:has(.cookie-checkbox:disabled) {
          cursor: not-allowed;
        }

        .cookie-category-description {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0 0 var(--space-3) 0;
          letter-spacing: -0.011em;
        }

        .cookie-category-examples {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .cookie-examples-label {
          font-weight: var(--font-weight-medium);
          color: var(--text-secondary);
        }

        .cookie-examples-text {
          margin-left: var(--space-2);
        }

        .cookie-modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: var(--space-3);
          padding: var(--space-8);
          border-top: 1px solid var(--border);
          background: var(--surface);
        }

        /* Animations */
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalSlideIn {
          from {
            transform: translateY(60px) scale(0.95);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        /* Mobile Responsive - TransformerLabs Style */
        @media (max-width: 768px) {
          .cookie-banner-container {
            padding: var(--space-4) var(--space-4);
          }

          .cookie-banner-content {
            flex-direction: column;
            align-items: stretch;
            gap: var(--space-6);
          }

          .cookie-banner-main {
            max-width: none;
          }

          .cookie-banner-actions {
            justify-content: center;
            flex-wrap: wrap;
            gap: var(--space-2);
          }

          .cookie-modal {
            margin: var(--space-3);
            max-height: calc(100vh - 1.5rem);
          }

          .cookie-modal-header,
          .cookie-modal-content,
          .cookie-modal-footer {
            padding: var(--space-6);
          }

          .cookie-category {
            padding: var(--space-4);
          }

          .cookie-category-header {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-3);
          }

          .cookie-toggle {
            align-self: flex-end;
          }

          .cookie-btn-text {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .cookie-banner-container {
            padding: var(--space-3);
          }

          .cookie-modal {
            margin: var(--space-2);
          }

          .cookie-modal-header,
          .cookie-modal-content,
          .cookie-modal-footer {
            padding: var(--space-4);
          }

          .cookie-banner-title {
            font-size: 1rem;
          }

          .cookie-banner-description {
            font-size: 0.8rem;
          }

          .cookie-modal-footer {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  )
}