import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    'AI Chatbots & Assistants',
    'Data Analytics & Insights',
    'Workflow Automation', 
    'Document Processing',
    'Knowledge Systems',
    'Custom AI Solutions'
  ]

  const industries = [
    'E-commerce & Retail',
    'Healthcare & Medical',
    'Financial Services',
    'Manufacturing',
    'Professional Services',
    'Education'
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-brand">
            <Image
              src="/Logo_only_Transparent.svg"
              alt="TransformerLabs"
              width={40}
              height={40}
              className="footer-logo"
            />
            
            <p className="footer-description">
              TransformerLabs builds practical AI solutions for businesses worldwide. 
              We specialize in chatbots, data analytics, workflow automation, and 
              custom AI applications.
            </p>

            <div className="footer-contact">
              <a 
                href="mailto:Mo@MohammadOthman.com" 
                className="contact-item"
              >
                <Mail size={16} className="contact-icon" />
                <span>Mo@MohammadOthman.com</span>
              </a>
              
              <div className="contact-item">
                <MapPin size={16} className="contact-icon" />
                <span>Aberdeen, Scotland & Nablus, Palestine</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-section">
            <h3 className="footer-section-title">Company</h3>
            <ul className="footer-links">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="footer-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-section-title">Services</h3>
            <ul className="footer-links">
              {services.map((service) => (
                <li key={service}>
                  <span className="footer-text">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="footer-section">
            <h3 className="footer-section-title">Industries</h3>
            <ul className="footer-links">
              {industries.map((industry) => (
                <li key={industry}>
                  <span className="footer-text">
                    {industry}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2025 TransformerLabs. Building the future with AI.
          </div>

          <div className="footer-bottom-right">
            <a 
              href="https://www.linkedin.com/company/transformer-labs" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Follow us on LinkedIn"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <div className="footer-locations">
              <div className="footer-location">
                <MapPin size={12} />
                <span>Scotland</span>
              </div>
              <span>&</span>
              <div className="footer-location">
                <MapPin size={12} />
                <span>Palestine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}