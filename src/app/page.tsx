// src/app/page.tsx - Improved Professional Homepage
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              AI Solutions That Actually Work<br />
              <span style={{ color: 'var(--primary)' }}>For Your Business</span>
            </h1>
            
            <p className="hero-subtitle">
              We build practical AI applications that solve real business problems. 
              Chatbots, data analytics, workflow automation, and custom AI solutions 
              that deliver measurable results.
            </p>

            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Start a Project
              </Link>
              <Link href="/services" className="btn btn-secondary btn-lg">
                What We Build
              </Link>
            </div>

            {/* Stats */}
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Global</span>
                <span className="stat-label">Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">AI Solutions We Build</h2>
            <p className="section-subtitle">
              Practical AI applications that integrate with your existing business processes
            </p>
          </div>
          
          <div className="grid-3">
            {[
              {
                title: "AI Chatbots & Assistants",
                description: "Customer service bots that handle real conversations, internal assistants for employee support, and specialized AI agents for specific business functions.",
                icon: "💬"
              },
              {
                title: "Smart Document Processing", 
                description: "AI systems that read, understand, and extract insights from your documents, contracts, reports, and data files automatically.",
                icon: "📄"
              },
              {
                title: "Workflow Automation",
                description: "Automate repetitive tasks, streamline business processes, and eliminate manual work with intelligent automation systems.",
                icon: "⚡"
              },
              {
                title: "Data Analytics & Insights",
                description: "Transform your business data into actionable insights with automated reporting, trend analysis, and predictive analytics.",
                icon: "📊"
              },
              {
                title: "Knowledge Management",
                description: "AI that searches through your company knowledge base, documents, and databases to answer questions instantly.",
                icon: "🔍"
              },
              {
                title: "Custom AI Applications",
                description: "Purpose-built AI solutions designed specifically for your industry, use case, and technical requirements.",
                icon: "🛠️"
              }
            ].map((service, index) => (
              <div key={index} className="card">
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: 'var(--space-4)',
                  textAlign: 'center'
                }}>
                  {service.icon}
                </div>
                <h3 className="card-title" style={{ textAlign: 'center', marginBottom: 'var(--space-3)' }}>
                  {service.title}
                </h3>
                <p className="card-description" style={{ textAlign: 'center' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>
                How We Partner With You
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Fixed-Scope Projects",
                    description: "Clear deliverables, timeline, and budget. Perfect for well-defined AI implementations.",
                    icon: "📋"
                  },
                  {
                    title: "Ongoing Development",
                    description: "Long-term partnership as your dedicated AI development team with flexible monthly arrangements.",
                    icon: "🤝"
                  },
                  {
                    title: "Strategic Consulting",
                    description: "AI planning, technical architecture review, and strategic guidance for your AI initiatives.",
                    icon: "💡"
                  },
                  {
                    title: "Maintenance & Support",
                    description: "Keep your AI systems running smoothly with ongoing monitoring, updates, and improvements.",
                    icon: "🛡️"
                  }
                ].map((feature, index) => (
                  <div key={index} style={{ marginBottom: 'var(--space-6)' }}>
                    <div className="flex items-start gap-4">
                      <div style={{
                        fontSize: '1.5rem',
                        flexShrink: 0,
                        marginTop: 'var(--space-1)'
                      }}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 style={{ 
                          fontSize: '1.125rem',
                          fontWeight: '600',
                          marginBottom: 'var(--space-2)',
                          color: 'var(--text-primary)'
                        }}>
                          {feature.title}
                        </h3>
                        <p style={{ 
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                          fontSize: '1rem'
                        }}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
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
                  marginBottom: 'var(--space-6)',
                  fontSize: '1.25rem',
                  fontWeight: '600'
                }}>
                  Why Choose TransformerLabs
                </h3>
                
                <div className="space-y-4">
                  {[
                    "✅ Proven track record of successful AI implementations",
                    "✅ Clear communication throughout every project", 
                    "✅ Business-focused approach, not just technical solutions",
                    "✅ Flexible work arrangements to fit your budget and timeline",
                    "✅ Ongoing support to ensure long-term success",
                    "✅ Global reach with local expertise in MENA markets"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span style={{ 
                        color: 'var(--text-secondary)',
                        fontSize: '1rem',
                        lineHeight: 1.6
                      }}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div style={{
                  marginTop: 'var(--space-6)',
                  paddingTop: 'var(--space-4)',
                  borderTop: '1px solid var(--border)'
                }}>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    fontStyle: 'italic',
                    textAlign: 'center'
                  }}>
                    "We deliver working solutions, not just demos"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trusted By Businesses Worldwide</h2>
            <p className="section-subtitle">
              From startups to established enterprises across multiple industries
            </p>
          </div>
          
          <div className="grid-3">
            {[
              {
                industry: "E-commerce & Retail",
                description: "AI chatbots for customer support, inventory management automation, and personalized product recommendations."
              },
              {
                industry: "Healthcare & Medical",
                description: "Patient data analysis, appointment scheduling automation, and medical document processing systems."
              },
              {
                industry: "Financial Services",
                description: "Fraud detection systems, automated report generation, and customer service AI assistants."
              },
              {
                industry: "Manufacturing",
                description: "Quality control automation, predictive maintenance systems, and supply chain optimization."
              },
              {
                industry: "Education & Training",
                description: "Student support chatbots, automated grading systems, and personalized learning platforms."
              },
              {
                industry: "Professional Services",
                description: "Document analysis, client communication automation, and business process optimization."
              }
            ].map((item, index) => (
              <div key={index} className="card">
                <h3 className="card-title" style={{ 
                  fontSize: '1.125rem', 
                  marginBottom: 'var(--space-3)',
                  color: 'var(--primary)'
                }}>
                  {item.industry}
                </h3>
                <p className="card-description">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="cta-section">
            <h2 style={{ marginBottom: 'var(--space-6)' }}>
              Ready to Transform Your Business with AI?
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'var(--text-secondary)', 
              marginBottom: 'var(--space-8)',
              maxWidth: '700px',
              margin: '0 auto var(--space-8)'
            }}>
              Let's discuss your project. We'll provide honest feedback on what's possible, 
              realistic timelines, and how AI can actually benefit your business.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Start Your AI Project
              </Link>
              <a 
                href="mailto:Mo@MohammadOthman.com" 
                className="btn btn-secondary btn-lg"
              >
                Email Us Directly
              </a>
            </div>

            <div style={{
              marginTop: 'var(--space-10)',
              paddingTop: 'var(--space-6)',
              borderTop: '1px solid var(--border)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'var(--space-8)',
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
                <span>Palestine & United Kingdom</span>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>24-hour response time</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}