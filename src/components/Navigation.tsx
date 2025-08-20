'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open - simple and reliable
  useEffect(() => {
    if (isMenuOpen) {
      // Simple approach: just prevent scrolling
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none' // Prevent iOS bounce scroll
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [isMenuOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Logo */}
        <Link href="/" className="logo" onClick={handleLinkClick}>
          <Image
            src="/Transformer-Inverted-Color-Transparent-bg.svg"
            alt="TransformerLabs"
            width={180}
            height={36}
            className="logo-image"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA Button */}
        <Link href="/contact" className="btn btn-primary nav-cta-desktop">
          Get Started
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="nav-overlay"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Navigation */}
        <div 
          className={`nav-links-mobile ${isMenuOpen ? 'active' : ''}`}
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="nav-links-mobile-content">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link-mobile ${isActive ? 'active' : ''}`}
                  onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
              )
            })}
            
            {/* Removed mobile CTA button as per best practice */}
          </div>
        </div>
      </div>
    </nav>
  )
}