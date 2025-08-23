'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  // Enhanced active state detection
  const isActiveLink = useCallback((href: string): boolean => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }, [pathname])

  // Handle scroll detection for nav styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflowY = 'scroll' // Prevent layout shift
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflowY = ''
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflowY = ''
    }
  }, [isMenuOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

  // Memoized handlers for performance
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeMenu()
    }
  }, [closeMenu])

  const handleLinkClick = useCallback(() => {
    closeMenu()
  }, [closeMenu])

  return (
    <>
      {/* Main Navigation */}
      <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <Link href="/" className="logo" onClick={handleLinkClick}>
            <Image
              src="/Transformer-Inverted-Color-Transparent-bg.svg"
              alt="TransformerLabs"
              width={180}
              height={36}
              className="logo-image interactive"
              priority
              draggable={false}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links-desktop">
            {navigation.map((item) => {
              const isActive = isActiveLink(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
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

          {/* Mobile Menu Toggle - Always accessible */}
          <button
            className="nav-toggle"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls="mobile-menu"
            type="button"
          >
            {isMenuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Portal */}
      {isMenuOpen && (
        <div className="mobile-menu-portal">
          {/* Backdrop */}
          <div 
            className="mobile-menu-backdrop"
            onClick={handleOverlayClick}
            aria-hidden="true"
          />
          
          {/* Mobile Menu Content */}
          <div 
            className="mobile-menu-content"
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="mobile-menu-header">
              <Link href="/" className="mobile-menu-logo" onClick={handleLinkClick}>
                <Image
                  src="/Logo_only_Transparent.svg"
                  alt="TransformerLabs"
                  width={32}
                  height={32}
                  draggable={false}
                />
                <span>TransformerLabs</span>
              </Link>
              
              <button
                className="mobile-menu-close"
                onClick={closeMenu}
                aria-label="Close menu"
                type="button"
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>
            
            <nav className="mobile-menu-nav">
              {navigation.map((item) => {
                const isActive = isActiveLink(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`mobile-menu-link ${isActive ? 'active' : ''}`}
                    onClick={handleLinkClick}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}