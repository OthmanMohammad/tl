// src/app/page.tsx - Direct Professional Homepage
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              We Build AI Solutions<br />
              <span style={{ color: 'var(--primary)' }}>For Your Business</span>
            </h1>
            
            <p className="hero-subtitle">
              Generative AI, chatbots, data analytics, and automated workflows. 
              We work with companies to build reliable AI systems that solve real problems.
            </p>

            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Discuss Your Project
              </Link>
              <Link href="/services" className="btn btn-secondary btn-lg">
                What We Build
              </Link>
            </div>

            {/* Stats */}
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Companies Served</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">8+</span>
                <span className="stat-label">Countries</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Project Success</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Build</h2>
            <p className="section-subtitle">
              We specialize in practical AI applications that work reliably in business environments.
            </p>
          </div>
          
          <div className="grid-3">
            {[
              {
                title: "Chatbots & AI Assistants",
                description: "Customer service bots, internal assistants, and specialized AI agents that handle real conversations.",
                icon: "Chat"
              },
              {
                title: "Knowledge Systems", 
                description: "AI that searches through your documents, databases, and files to answer questions instantly.",
                icon: "Search"
              },
              {
                title: "Workflow Automation",
                description: "Automate repetitive tasks, data processing, and business processes with intelligent systems.",
                icon: "Automation"
              },
              {
                title: "Data Analytics & Reporting",
                description: "Transform your data into insights with automated reports and intelligent analysis.",
                icon: "Analytics"
              },
              {
                title: "Generative AI Applications",
                description: "Content generation, writing assistance, and creative AI tools customized for your needs.",
                icon: "AI Generation"
              },
              {
                title: "Custom AI Solutions",
                description: "Purpose-built AI systems designed specifically for your industry and requirements.",
                icon: "Custom Development"
              }
            ].map((service, index) => (
              <div key={index} className="card">
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: 'var(--space-4)'
                }}>
                  {service.icon}
                </div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>
                How We Work With You
              </h2>
              
              <div className="feature-grid">
                {[
                  {
                    title: "Project-Based Work",
                    description: "Fixed-scope projects with clear deliverables and timelines.",
                    icon: "PROJECT"
                  },
                  {
                    title: "Ongoing Partnerships",
                    description: "Long-term collaboration as your dedicated AI development team.",
                    icon: "PARTNERSHIP"
                  },
                  {
                    title: "Consulting & Strategy",
                    description: "AI planning, architecture review, and technical guidance.",
                    icon: "CONSULTING"
                  },
                  {
                    title: "Support & Maintenance",
                    description: "Keep your AI systems running smoothly with ongoing support.",
                    icon: "SUPPORT"
                  }
                ].map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon" style={{ backgroundColor: 'var(--primary)' }}>
                      <span style={{ 
                        fontSize: '0.75rem', 
                        fontWeight: '700',
                        color: 'white',
                        letterSpacing: '0.1em'
                      }}>
                        {feature.icon}
                      </span>
                    </div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{
                backgroundColor: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-8)',
                position: 'relative'
              }}>
                <h3 style={{ 
                  color: 'var(--text-primary)', 
                  marginBottom: 'var(--space-4)',
                  fontSize: '1.25rem'
                }}>
                  Why Companies Choose Us
                </h3>
                
                <div className="space-y-4">
                  {[
                    "We deliver working solutions, not just demos",
                    "Clear communication throughout the project",
                    "Experienced with real business requirements", 
                    "Flexible work arrangements to fit your needs",
                    "Based in Palestine and UK with regional expertise"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div style={{
                        width: '0.375rem',
                        height: '0.375rem',
                        backgroundColor: 'var(--primary)',
                        borderRadius: '50%',
                        marginTop: '0.625rem',
                        flexShrink: 0
                      }}></div>
                      <span style={{ color: 'var(--text-secondary)' }}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="section">
        <div className="container">
          <div className="cta-section">
            <h2 style={{ marginBottom: 'var(--space-6)' }}>
              Ready to Build Something?
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'var(--text-secondary)', 
              marginBottom: 'var(--space-8)',
              maxWidth: '600px',
              margin: '0 auto var(--space-8)'
            }}>
              Tell us about your project. We'll discuss what's possible, 
              timeline, and how we can work together.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Start a Conversation
              </Link>
              <a 
                href="mailto:Mo@MohammadOthman.com" 
                className="btn btn-secondary btn-lg"
              >
                Email Directly
              </a>
            </div>

            <div style={{
              marginTop: 'var(--space-8)',
              paddingTop: 'var(--space-6)',
              borderTop: '1px solid var(--border)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'var(--space-6)',
              flexWrap: 'wrap',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)'
            }}>
              <div className="contact-item">
                <svg className="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>Mo@MohammadOthman.com</span>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Palestine & UK</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}