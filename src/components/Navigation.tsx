// src/components/Navigation.tsx - Fixed Professional Navigation
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Logo */}
        <Link href="/" className="logo">
          <Image
            src="/Transformer-Inverted-Color-Transparent-bg.svg"
            alt="TransformerLabs"
            width={200}
            height={40}
            className="logo-image"
            priority
            style={{
              height: '2.5rem',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links flex">
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

        {/* CTA Button */}
        <Link href="/contact" className="btn btn-primary">
          <span>Get Started</span>
        </Link>
      </div>
    </nav>
  )
}