// src/app/contact/page.tsx - Contact Page
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact TransformerLabs',
  description: 'Get in touch with TransformerLabs for AI development projects, partnerships, or consulting. Based in Palestine and UK, serving MENA and Gulf markets.',
}

export default function Contact() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
        <div className="container">
          <div className="hero-content">
            <h1>
              Get in Touch
            </h1>
            
            <p className="hero-subtitle">
              Ready to discuss your AI project? We respond to all inquiries within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-12)' }}>
            {/* Contact Information */}
            <div>
              <h2 style={{ marginBottom: 'var(--space-8)' }}>
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 style={{ 
                    fontSize: '1.125rem', 
                    fontWeight: '600', 
                    marginBottom: 'var(--space-3)',
                    color: 'var(--text-primary)'
                  }}>
                    Email
                  </h3>
                  <a 
                    href="mailto:Mo@MohammadOthman.com"
                    style={{
                      fontSize: '1.125rem',
                      color: 'var(--primary)',
                      textDecoration: 'none'
                    }}
                  >
                    Mo@MohammadOthman.com
                  </a>
                  <p style={{ 
                    fontSize: '0.875rem', 
                    color: 'var(--text-secondary)',
                    marginTop: 'var(--space-2)'
                  }}>
                    Best for project inquiries and detailed discussions
                  </p>
                </div>

                <div>
                  <h3 style={{ 
                    fontSize: '1.125rem', 
                    fontWeight: '600', 
                    marginBottom: 'var(--space-3)',
                    color: 'var(--text-primary)'
                  }}>
                    LinkedIn
                  </h3>
                  <a 
                    href="https://www.linkedin.com/company/transformer-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '1.125rem',
                      color: 'var(--primary)',
                      textDecoration: 'none'
                    }}
                  >
                    TransformerLabs Company Page
                  </a>
                  <p style={{ 
                    fontSize: '0.875rem', 
                    color: 'var(--text-secondary)',
                    marginTop: 'var(--space-2)'
                  }}>
                    Connect with us professionally
                  </p>
                </div>

                <div>
                  <h3 style={{ 
                    fontSize: '1.125rem', 
                    fontWeight: '600', 
                    marginBottom: 'var(--space-3)',
                    color: 'var(--text-primary)'
                  }}>
                    Locations
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <span style={{ fontWeight: '500', color: 'var(--text-primary)' }}>
                        Palestine Office
                      </span>
                      <br />
                      <span style={{ color: 'var(--text-secondary)' }}>
                        Nablus, West Bank
                      </span>
                    </div>
                    <div>
                      <span style={{ fontWeight: '500', color: 'var(--text-primary)' }}>
                        UK Operations
                      </span>
                      <br />
                      <span style={{ color: 'var(--text-secondary)' }}>
                        London, United Kingdom
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 style={{ 
                    fontSize: '1.125rem', 
                    fontWeight: '600', 
                    marginBottom: 'var(--space-3)',
                    color: 'var(--text-primary)'
                  }}>
                    Response Time
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    We respond to all project inquiries within 24 hours. 
                    For urgent matters, please mention it in your subject line.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Inquiry Guide */}
            <div>
              <h2 style={{ marginBottom: 'var(--space-8)' }}>
                Project Inquiries
              </h2>
              
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
                  What to Include in Your Message
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Project Overview",
                      description: "Brief description of what you're looking to build or achieve"
                    },
                    {
                      title: "Current Situation", 
                      description: "What systems or processes you currently have in place"
                    },
                    {
                      title: "Timeline",
                      description: "When you'd like to start and any important deadlines"
                    },
                    {
                      title: "Budget Range",
                      description: "Approximate budget or budget range for the project"
                    },
                    {
                      title: "Company Information",
                      description: "Brief info about your company and industry"
                    }
                  ].map((item, index) => (
                    <div key={index}>
                      <h4 style={{ 
                        fontSize: '1rem', 
                        fontWeight: '600', 
                        marginBottom: 'var(--space-2)',
                        color: 'var(--text-primary)'
                      }}>
                        {item.title}
                      </h4>
                      <p style={{ 
                        fontSize: '0.875rem', 
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6
                      }}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div style={{
                  marginTop: 'var(--space-8)',
                  paddingTop: 'var(--space-6)',
                  borderTop: '1px solid var(--border)'
                }}>
                  <p style={{ 
                    fontSize: '0.875rem', 
                    color: 'var(--text-secondary)',
                    fontStyle: 'italic'
                  }}>
                    Don't worry if you don't have all these details yet. 
                    We can help you figure out the specifics during our initial discussion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Types */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Types of Work We Take On</h2>
          </div>
          
          <div className="grid-4">
            {[
              {
                type: "FIXED PROJECTS",
                title: "Defined Scope Projects",
                description: "Projects with clear requirements, timeline, and deliverables.",
                examples: ["Chatbot development", "Data analysis system", "Process automation"]
              },
              {
                type: "ONGOING WORK",
                title: "Development Partnerships",
                description: "Long-term collaboration as your AI development team.",
                examples: ["Monthly development", "Feature additions", "System expansion"]
              },
              {
                type: "CONSULTING",
                title: "Strategic Guidance",
                description: "AI planning, technical review, and strategic advice.",
                examples: ["AI strategy", "Technical assessment", "Architecture review"]
              },
              {
                type: "MAINTENANCE",
                title: "Support Services",
                description: "Ongoing support for existing AI systems.",
                examples: ["System monitoring", "Updates & fixes", "Performance optimization"]
              }
            ].map((workType, index) => (
              <div key={index} className="card">
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: 'var(--space-3)'
                }}>
                  {workType.type}
                </div>
                <h3 className="card-title">{workType.title}</h3>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  marginBottom: 'var(--space-4)',
                  fontSize: '0.875rem'
                }}>
                  {workType.description}
                </p>
                <div>
                  <h4 style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-muted)',
                    marginBottom: 'var(--space-2)'
                  }}>
                    Examples:
                  </h4>
                  <ul style={{ listStyle: 'none', fontSize: '0.875rem' }}>
                    {workType.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-2 mb-1">
                        <div style={{
                          width: '0.25rem',
                          height: '0.25rem',
                          backgroundColor: 'var(--primary)',
                          borderRadius: '50%',
                          marginTop: '0.625rem',
                          flexShrink: 0
                        }}></div>
                        <span style={{ color: 'var(--text-secondary)' }}>
                          {example}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Common Questions</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  question: "How do you handle projects across different time zones?",
                  answer: "We work with clients globally and are flexible with meeting times. Most communication happens via email and scheduled video calls at mutually convenient times."
                },
                {
                  question: "Do you work with startups or only established companies?",
                  answer: "We work with companies of all sizes, from startups to large enterprises. Our approach adapts to your company's stage and requirements."
                },
                {
                  question: "What's your typical project timeline?",
                  answer: "It depends on the scope, but most projects range from 2-12 weeks. We provide detailed timelines during the planning phase."
                },
                {
                  question: "Do you provide ongoing support after project completion?",
                  answer: "Yes, we offer various support arrangements including maintenance, updates, and expansion of existing systems."
                },
                {
                  question: "Can you work with our existing development team?",
                  answer: "Absolutely. We often collaborate with internal teams and can provide training and knowledge transfer as needed."
                }
              ].map((faq, index) => (
                <div key={index} style={{
                  borderBottom: '1px solid var(--border)',
                  paddingBottom: 'var(--space-6)'
                }}>
                  <h3 style={{ 
                    fontSize: '1.125rem', 
                    fontWeight: '600', 
                    marginBottom: 'var(--space-3)',
                    color: 'var(--text-primary)'
                  }}>
                    {faq.question}
                  </h3>
                  <p style={{ 
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="cta-section">
            <h2 style={{ marginBottom: 'var(--space-6)' }}>
              Ready to Start?
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              color: 'var(--text-secondary)', 
              marginBottom: 'var(--space-8)',
              maxWidth: '600px',
              margin: '0 auto var(--space-8)'
            }}>
              Send us an email with your project details and we'll get back to you 
              within 24 hours with next steps.
            </p>
            
            <div className="flex justify-center">
              <a 
                href="mailto:Mo@MohammadOthman.com?subject=AI Project Inquiry"
                className="btn btn-primary btn-lg"
              >
                Send Project Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}