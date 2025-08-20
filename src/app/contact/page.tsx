import { Metadata } from 'next'
import { 
  Mail, 
  MapPin, 
  Clock, 
  Zap,
  ClipboardList,
  FileText,
  DollarSign,
  Building2,
  CheckCircle,
  Handshake,
  Lightbulb,
  Linkedin
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact TransformerLabs',
  description: 'Get in touch with TransformerLabs for AI development projects, partnerships, or consulting. Based in Aberdeen, Scotland and Nablus, Palestine, serving clients worldwide.',
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
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}>
                    <Mail size={20} className="text-primary" />
                    Email
                  </h3>
                  <a 
                    href="mailto:Mo@MohammadOthman.com"
                    style={{
                      fontSize: '1.125rem',
                      color: 'var(--primary)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)'
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
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}>
                    <Linkedin size={20} className="text-primary" />
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
                    Our Offices
                  </h3>
                  <div className="space-y-4">
                    <div style={{
                      padding: 'var(--space-4)',
                      backgroundColor: 'var(--surface)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border)'
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 'var(--space-2)',
                        marginBottom: 'var(--space-2)' 
                      }}>
                        <MapPin size={20} className="text-primary" />
                        <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                          Scotland Office
                        </span>
                      </div>
                      <div style={{ color: 'var(--text-secondary)' }}>
                        Aberdeen, Scotland<br />
                        United Kingdom
                      </div>
                    </div>
                    
                    <div style={{
                      padding: 'var(--space-4)',
                      backgroundColor: 'var(--surface)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border)'
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 'var(--space-2)',
                        marginBottom: 'var(--space-2)' 
                      }}>
                        <MapPin size={20} className="text-primary" />
                        <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                          Palestine Office
                        </span>
                      </div>
                      <div style={{ color: 'var(--text-secondary)' }}>
                        Nablus, West Bank<br />
                        Palestine
                      </div>
                    </div>
                  </div>
                  <p style={{ 
                    fontSize: '0.875rem', 
                    color: 'var(--text-muted)',
                    marginTop: 'var(--space-3)',
                    fontStyle: 'italic'
                  }}>
                    Serving clients worldwide from our offices in Scotland and Palestine
                  </p>
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
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    padding: 'var(--space-4)',
                    backgroundColor: 'var(--surface)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)'
                  }}>
                    <div style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      backgroundColor: 'var(--primary)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Zap size={20} color="white" />
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                        24-Hour Response Guarantee
                      </div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        We respond to all project inquiries within 24 hours
                      </div>
                    </div>
                  </div>
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
                      description: "Brief description of what you're looking to build or achieve",
                      icon: <ClipboardList size={20} className="text-primary" />
                    },
                    {
                      title: "Current Situation", 
                      description: "What systems or processes you currently have in place",
                      icon: <FileText size={20} className="text-primary" />
                    },
                    {
                      title: "Timeline",
                      description: "When you'd like to start and any important deadlines",
                      icon: <Clock size={20} className="text-primary" />
                    },
                    {
                      title: "Budget Range",
                      description: "Approximate budget or budget range for the project",
                      icon: <DollarSign size={20} className="text-primary" />
                    },
                    {
                      title: "Company Information",
                      description: "Brief info about your company and industry",
                      icon: <Building2 size={20} className="text-primary" />
                    }
                  ].map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      gap: 'var(--space-3)',
                      alignItems: 'flex-start'
                    }}>
                      <div style={{ marginTop: 'var(--space-1)' }}>
                        {item.icon}
                      </div>
                      <div>
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
                          lineHeight: 1.6,
                          margin: 0
                        }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div style={{
                  marginTop: 'var(--space-8)',
                  paddingTop: 'var(--space-6)',
                  borderTop: '1px solid var(--border)',
                  textAlign: 'center'
                }}>
                  <p style={{ 
                    fontSize: '0.875rem', 
                    color: 'var(--text-secondary)',
                    fontStyle: 'italic',
                    marginBottom: 'var(--space-4)'
                  }}>
                    Don&apos;t worry if you don&apos;t have all these details yet. 
                    We can help you figure out the specifics during our initial discussion.
                  </p>
                  
                  <a 
                    href="mailto:Mo@MohammadOthman.com?subject=AI Project Inquiry"
                    className="btn btn-primary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)'
                    }}
                  >
                    <Mail size={16} />
                    Send Project Inquiry
                  </a>
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
          
          <div className="grid-3">
            {[
              {
                type: "FIXED PROJECTS",
                title: "Defined Scope Projects",
                description: "Projects with clear requirements, timeline, and deliverables.",
                examples: ["Chatbot development", "Data analysis system", "Process automation"],
                icon: <ClipboardList size={32} className="text-primary" />
              },
              {
                type: "ONGOING WORK",
                title: "Development Partnerships",
                description: "Long-term collaboration as your AI development team.",
                examples: ["Monthly development", "Feature additions", "System expansion"],
                icon: <Handshake size={32} className="text-primary" />
              },
              {
                type: "CONSULTING",
                title: "Strategic Guidance",
                description: "AI planning, technical review, and strategic advice.",
                examples: ["AI strategy", "Technical assessment", "Architecture review"],
                icon: <Lightbulb size={32} className="text-primary" />
              }
            ].map((workType, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <div className="card-main">
                    <div style={{
                      textAlign: 'center',
                      marginBottom: 'var(--space-4)'
                    }}>
                      {workType.icon}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: 'var(--primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: 'var(--space-3)',
                      textAlign: 'center'
                    }}>
                      {workType.type}
                    </div>
                    <h3 className="card-title" style={{ textAlign: 'center' }}>
                      {workType.title}
                    </h3>
                    <p style={{ 
                      color: 'var(--text-secondary)', 
                      marginBottom: 'var(--space-4)',
                      fontSize: '0.875rem',
                      textAlign: 'center'
                    }}>
                      {workType.description}
                    </p>
                  </div>
                  
                  <div className="card-footer-content">
                    <div style={{
                      padding: 'var(--space-4)',
                      backgroundColor: 'var(--background)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border)'
                    }}>
                      <h4 style={{ 
                        fontSize: '0.75rem', 
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: 'var(--text-muted)',
                        marginBottom: 'var(--space-3)',
                        textAlign: 'center'
                      }}>
                        Examples:
                      </h4>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-2)',
                        alignItems: 'center'
                      }}>
                        {workType.examples.map((example, idx) => (
                          <span key={idx} style={{ 
                            color: 'var(--text-secondary)', 
                            fontSize: '0.875rem',
                            textAlign: 'center'
                          }}>
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
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
                  answer: "We work with clients globally and are flexible with meeting times. Most communication happens via email and scheduled video calls at mutually convenient times. Our offices in Scotland and Palestine allow us to provide coverage across multiple time zones."
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
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-3)'
                  }}>
                    <div style={{
                      width: '0.5rem',
                      height: '0.5rem',
                      background: 'linear-gradient(135deg, var(--primary) 0%, #FF6B47 100%)',
                      borderRadius: '50%',
                      marginTop: '0.5rem',
                      flexShrink: 0,
                      boxShadow: '0 2px 4px rgba(255, 54, 33, 0.2)'
                    }}></div>
                    <span>{faq.question}</span>
                  </h3>
                  <p style={{ 
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginLeft: 'calc(0.5rem + var(--space-3))' // Align with question text
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
              Send us an email with your project details and we&apos;ll get back to you 
              within 24 hours with next steps.
            </p>
            
            <div className="flex justify-center">
              <a 
                href="mailto:Mo@MohammadOthman.com?subject=AI Project Inquiry"
                className="btn btn-primary btn-lg"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)'
                }}
              >
                <Mail size={20} />
                Send Project Inquiry
              </a>
            </div>

            <div style={{
              marginTop: 'var(--space-8)',
              paddingTop: 'var(--space-6)',
              borderTop: '1px solid var(--border)',
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--space-6)',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <CheckCircle size={16} className="text-green-600" />
                <span>Free initial consultation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <CheckCircle size={16} className="text-green-600" />
                <span>No-obligation assessment</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <CheckCircle size={16} className="text-green-600" />
                <span>24-hour response time</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}