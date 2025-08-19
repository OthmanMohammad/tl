// src/app/about/page.tsx - About Page
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About TransformerLabs',
  description: 'Learn about TransformerLabs - AI development company specializing in practical business solutions across MENA and Gulf markets.',
}

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
        <div className="container">
          <div className="hero-content">
            <h1>
              About TransformerLabs
            </h1>
            
            <p className="hero-subtitle">
              We build AI solutions for businesses that need reliable, practical technology. 
              Based in Palestine and the UK, we specialize in serving companies across 
              the MENA and Gulf regions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-12)', alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>
                Who We Are
              </h2>
              <p style={{ 
                fontSize: '1.125rem', 
                lineHeight: 1.7, 
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-6)'
              }}>
                TransformerLabs is an AI development company founded in 2023. We focus on 
                building practical AI applications that solve real business problems rather 
                than experimental or research projects.
              </p>
              <p style={{ 
                fontSize: '1.125rem', 
                lineHeight: 1.7, 
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-6)'
              }}>
                Our team has deep experience in machine learning, software development, 
                and business applications. We understand both the technical possibilities 
                of AI and the practical requirements of running a business.
              </p>
              <p style={{ 
                fontSize: '1.125rem', 
                lineHeight: 1.7, 
                color: 'var(--text-secondary)'
              }}>
                We work with companies across different industries, from startups to 
                established enterprises, helping them implement AI solutions that 
                actually deliver value.
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-8)'
            }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '600', 
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)'
              }}>
                Key Facts
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Founded", value: "December 2023" },
                  { label: "Headquarters", value: "Nablus, Palestine & London, UK" },
                  { label: "Focus Markets", value: "MENA and Gulf regions" },
                  { label: "Specialization", value: "Business AI applications" },
                  { label: "Work Style", value: "Projects, partnerships, consulting" }
                ].map((fact, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <span style={{ 
                      fontWeight: '500', 
                      color: 'var(--text-secondary)' 
                    }}>
                      {fact.label}
                    </span>
                    <span style={{ 
                      fontWeight: '600', 
                      color: 'var(--text-primary)' 
                    }}>
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Expertise</h2>
            <p className="section-subtitle">
              We focus on AI technologies that have proven business value
            </p>
          </div>
          
          <div className="grid-3">
            {[
              {
                area: "MACHINE LEARNING",
                title: "AI Development",
                description: "Deep learning, natural language processing, computer vision, and predictive analytics."
              },
              {
                area: "SOFTWARE ENGINEERING",
                title: "System Integration", 
                description: "Building AI solutions that work with existing business systems and processes."
              },
              {
                area: "BUSINESS APPLICATIONS",
                title: "Practical Implementation",
                description: "Understanding business requirements and translating them into working AI solutions."
              },
              {
                area: "DATA PROCESSING",
                title: "Analytics & Insights",
                description: "Data pipeline development, automated reporting, and business intelligence."
              },
              {
                area: "REGIONAL KNOWLEDGE",
                title: "MENA Market Focus",
                description: "Understanding of local business culture, languages, and regulatory requirements."
              },
              {
                area: "PROJECT MANAGEMENT",
                title: "Reliable Delivery",
                description: "Proven track record of delivering projects on time and within scope."
              }
            ].map((expertise, index) => (
              <div key={index} className="card">
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: 'var(--space-3)'
                }}>
                  {expertise.area}
                </div>
                <h3 className="card-title">{expertise.title}</h3>
                <p className="card-description">{expertise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Approach</h2>
          </div>
          
          <div className="grid-2" style={{ gap: 'var(--space-12)' }}>
            <div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Practical Over Experimental
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: 'var(--space-6)',
                lineHeight: 1.7
              }}>
                We focus on AI technologies that are proven and reliable rather than 
                cutting-edge research. Our goal is to build solutions that work 
                consistently in real business environments.
              </p>
              
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Clear Communication
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: 'var(--space-6)',
                lineHeight: 1.7
              }}>
                We explain technical concepts in business terms and keep you informed 
                throughout the development process. No jargon, no overselling.
              </p>

              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Long-term Thinking
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)',
                lineHeight: 1.7
              }}>
                We build solutions that can grow with your business and provide 
                ongoing support to ensure they continue delivering value.
              </p>
            </div>
            
            <div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Regional Focus
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: 'var(--space-6)',
                lineHeight: 1.7
              }}>
                We understand the business culture and requirements of companies 
                in the MENA and Gulf regions, allowing us to build solutions 
                that fit local contexts.
              </p>
              
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Flexible Arrangements
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: 'var(--space-6)',
                lineHeight: 1.7
              }}>
                Whether you need a specific project completed, ongoing development 
                support, or strategic consulting, we adapt our services to your needs.
              </p>

              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Quality Focus
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)',
                lineHeight: 1.7
              }}>
                We prioritize building robust, maintainable solutions over quick 
                fixes. Every project includes proper testing, documentation, and 
                knowledge transfer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Leadership</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div style={{
              backgroundColor: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-10)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '5rem',
                height: '5rem',
                backgroundColor: 'var(--surface)',
                borderRadius: '50%',
                margin: '0 auto var(--space-6)',
                border: '1px solid var(--border)'
              }}></div>
              
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: 'var(--space-2)',
                color: 'var(--text-primary)'
              }}>
                Mohammad Othman
              </h3>
              
              <p style={{ 
                color: 'var(--primary)', 
                fontWeight: '500',
                marginBottom: 'var(--space-4)'
              }}>
                Founder & Lead AI Engineer
              </p>
              
              <p style={{ 
                color: 'var(--text-secondary)', 
                lineHeight: 1.7,
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Deep learning engineer with expertise in building practical AI applications 
                for business use. Focused on delivering reliable solutions that solve real 
                problems rather than experimental technology.
              </p>
              
              <div style={{ marginTop: 'var(--space-6)' }}>
                <a 
                  href="mailto:Mo@MohammadOthman.com" 
                  className="btn btn-secondary"
                >
                  Contact Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-section">
            <h2 style={{ marginBottom: 'var(--space-6)' }}>
              Let's Work Together
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              color: 'var(--text-secondary)', 
              marginBottom: 'var(--space-8)',
              maxWidth: '600px',
              margin: '0 auto var(--space-8)'
            }}>
              Whether you have a specific project in mind or want to explore 
              how AI can benefit your business, we're here to help.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Get in Touch
              </Link>
              <Link href="/services" className="btn btn-secondary btn-lg">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}