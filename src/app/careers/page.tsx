import { Metadata } from 'next'
import { 
  Code, 
  Brain, 
  Globe, 
  Clock, 
  Users, 
  Lightbulb,
  Target,
  Zap,
  Heart,
  CheckCircle,
  Mail,
  Send,
  MapPin,
  Laptop,
  Calendar,
  TrendingUp
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers - Join TransformerLabs',
  description: 'Join our team of AI engineers and software developers. Remote-first culture with flexible hours. Help build the future of AI applications for businesses worldwide.',
}

export default function Careers() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
        <div className="container">
          <div className="hero-content">
            <h1>
              Join Our Team
            </h1>
            
            <p className="hero-subtitle">
              We're building the future of AI applications for businesses worldwide. 
              Join a team that values expertise, creativity, and work-life balance.
            </p>
            
            <div className="hero-buttons">
              <a 
                href="mailto:Mo@MohammadOthman.com?subject=TransformerLabs Career Interest - [Your Position]"
                className="btn btn-primary btn-lg"
              >
                Apply Now
              </a>
              <a href="#open-roles" className="btn btn-secondary btn-lg">
                View Open Roles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Work With Us</h2>
            <p className="section-subtitle">
              We're not just building AI solutions – we're creating the future of how 
              businesses work, and we want the best people to help us get there.
            </p>
          </div>
          
          <div className="grid-3">
            {[
              {
                icon: <Target size={48} className="text-primary" />,
                title: "Meaningful Impact",
                description: "Your work directly shapes how businesses worldwide use AI. Every solution you build solves real problems for real companies."
              },
              {
                icon: <TrendingUp size={48} className="text-primary" />,
                title: "Cutting-Edge Technology",
                description: "Work with the latest AI technologies and frameworks. We invest in the best tools and give you freedom to innovate."
              },
              {
                icon: <Users size={48} className="text-primary" />,
                title: "Small Team, Big Opportunities",
                description: "Shape the direction of the company. Your ideas matter, your voice is heard, and your contributions make a real difference."
              }
            ].map((reason, index) => (
              <div key={index} className="card">
                <div style={{
                  marginBottom: 'var(--space-4)',
                  textAlign: 'center'
                }}>
                  {reason.icon}
                </div>
                <h3 className="card-title" style={{ textAlign: 'center', marginBottom: 'var(--space-3)' }}>
                  {reason.title}
                </h3>
                <p className="card-description" style={{ textAlign: 'center' }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Culture */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Benefits & Culture</h2>
            <p className="section-subtitle">
              We believe great work happens when people have the freedom and support they need
            </p>
          </div>
          
          <div className="grid-2" style={{ gap: 'var(--space-10)' }}>
            <div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)'
              }}>
                Work-Life Balance
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <Clock size={20} className="text-primary" />,
                    title: "Flexible Hours",
                    description: "Work when you're most productive. Core overlap hours for collaboration, but flexibility to manage your schedule."
                  },
                  {
                    icon: <Globe size={20} className="text-primary" />,
                    title: "Remote-First Culture",
                    description: "Work from anywhere. Our team spans multiple countries and time zones, and we've built processes that support distributed work."
                  },
                  {
                    icon: <Calendar size={20} className="text-primary" />,
                    title: "Unlimited PTO",
                    description: "Take the time you need to recharge. We trust our team to manage their time responsibly and take care of themselves."
                  }
                ].map((benefit, index) => (
                  <div key={index} style={{ 
                    display: 'flex',
                    gap: 'var(--space-3)',
                    alignItems: 'flex-start',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <div style={{ marginTop: '0.125rem', flexShrink: 0 }}>
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 style={{ 
                        fontWeight: '600', 
                        color: 'var(--text-primary)',
                        marginBottom: 'var(--space-1)',
                        fontSize: '1rem'
                      }}>
                        {benefit.title}
                      </h4>
                      <p style={{ 
                        fontSize: '0.875rem', 
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                        margin: 0
                      }}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)'
              }}>
                Growth & Development
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <Brain size={20} className="text-primary" />,
                    title: "Learning Budget",
                    description: "Annual budget for courses, conferences, books, and certifications. We invest in your professional development."
                  },
                  {
                    icon: <Lightbulb size={20} className="text-primary" />,
                    title: "Innovation Time",
                    description: "Dedicated time for exploring new technologies, working on side projects, and contributing to open source."
                  },
                  {
                    icon: <Users size={20} className="text-primary" />,
                    title: "Direct Mentorship",
                    description: "Work directly with experienced engineers and get personalized guidance on your career development."
                  }
                ].map((benefit, index) => (
                  <div key={index} style={{ 
                    display: 'flex',
                    gap: 'var(--space-3)',
                    alignItems: 'flex-start',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <div style={{ marginTop: '0.125rem', flexShrink: 0 }}>
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 style={{ 
                        fontWeight: '600', 
                        color: 'var(--text-primary)',
                        marginBottom: 'var(--space-1)',
                        fontSize: '1rem'
                      }}>
                        {benefit.title}
                      </h4>
                      <p style={{ 
                        fontSize: '0.875rem', 
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                        margin: 0
                      }}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section" id="open-roles">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Open Roles</h2>
            <p className="section-subtitle">
              We're always looking for exceptional engineers to join our team
            </p>
          </div>
          
          <div className="grid-2" style={{ gap: 'var(--space-8)' }}>
            {[
              {
                title: "AI Engineer",
                type: "Part-time • Remote",
                icon: <Brain size={32} className="text-primary" />,
                description: "Build and deploy AI solutions for enterprise clients. Work with LLMs, computer vision, and custom ML models.",
                requirements: [
                  "3+ years experience with Python and ML frameworks",
                  "Experience with LLMs (OpenAI, Anthropic, etc.)",
                  "Knowledge of vector databases and embeddings",
                  "Experience with cloud deployment (AWS, GCP, Azure)"
                ],
                bonus: [
                  "Experience with RAG systems and retrieval workflows",
                  "Production ML deployment experience",
                  "Open source contributions"
                ]
              },
              {
                title: "Full-Stack Software Engineer",
                type: "Part-time • Remote",
                icon: <Code size={32} className="text-primary" />,
                description: "Build web applications and APIs that power our AI solutions. Focus on performance, scalability, and user experience.",
                requirements: [
                  "4+ years experience with modern web frameworks",
                  "Strong knowledge of React, Node.js, TypeScript",
                  "Experience with databases and API design",
                  "Understanding of software architecture patterns"
                ],
                bonus: [
                  "Experience with Next.js or Python",
                  "DevOps and cloud infrastructure knowledge",
                  "UI/UX design skills"
                ]
              }
            ].map((role, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <div className="card-main">
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-3)',
                      marginBottom: 'var(--space-4)'
                    }}>
                      {role.icon}
                      <div>
                        <h3 style={{ 
                          fontSize: '1.5rem', 
                          fontWeight: '600', 
                          color: 'var(--text-primary)',
                          margin: 0
                        }}>
                          {role.title}
                        </h3>
                        <p style={{
                          fontSize: '0.875rem',
                          color: 'var(--text-muted)',
                          margin: 0
                        }}>
                          {role.type}
                        </p>
                      </div>
                    </div>
                    
                    <p style={{ 
                      color: 'var(--text-secondary)', 
                      marginBottom: 'var(--space-6)',
                      lineHeight: 1.6,
                      fontSize: '1rem'
                    }}>
                      {role.description}
                    </p>
                    
                    <div style={{ marginBottom: 'var(--space-4)' }}>
                      <h4 style={{ 
                        fontSize: '0.875rem', 
                        fontWeight: '600', 
                        marginBottom: 'var(--space-3)',
                        color: 'var(--text-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        Requirements:
                      </h4>
                      <ul style={{ 
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-2)',
                        margin: 0,
                        padding: 0
                      }}>
                        {role.requirements.map((req, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                            <CheckCircle size={16} className="text-green-600" style={{ marginTop: '0.125rem', flexShrink: 0 }} />
                            <span style={{ 
                              fontSize: '0.875rem', 
                              color: 'var(--text-secondary)',
                              lineHeight: 1.5
                            }}>
                              {req}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 style={{ 
                        fontSize: '0.875rem', 
                        fontWeight: '600', 
                        marginBottom: 'var(--space-3)',
                        color: 'var(--text-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        Bonus Points:
                      </h4>
                      <ul style={{ 
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-2)',
                        margin: 0,
                        padding: 0
                      }}>
                        {role.bonus.map((bonus, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                            <Zap size={16} className="text-primary" style={{ marginTop: '0.125rem', flexShrink: 0 }} />
                            <span style={{ 
                              fontSize: '0.875rem', 
                              color: 'var(--text-secondary)',
                              lineHeight: 1.5
                            }}>
                              {bonus}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="card-footer-content">
                    <a 
                      href={`mailto:Mo@MohammadOthman.com?subject=TransformerLabs Application - ${role.title}&body=Hi Mohammad,%0D%0A%0D%0AI'm interested in the ${role.title} position at TransformerLabs.%0D%0A%0D%0AAttached is my CV. Here's a bit about myself:%0D%0A%0D%0A[Please tell us about your background, experience, and why you're interested in this role]%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`}
                      className="btn btn-primary w-full"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 'var(--space-2)'
                      }}
                    >
                      <Send size={16} />
                      Apply for {role.title}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How to Apply</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div style={{
              backgroundColor: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--space-10)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-6)'
              }}>
                <Mail size={24} className="text-primary" />
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600', 
                  color: 'var(--text-primary)',
                  margin: 0
                }}>
                  Send Your Application
                </h3>
              </div>
              
              <div style={{ marginBottom: 'var(--space-6)' }}>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  marginBottom: 'var(--space-4)',
                  fontSize: '1.125rem',
                  lineHeight: 1.6
                }}>
                  We'd love to hear from you! Send us an email with:
                </p>
                
                <ul style={{ 
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-6)',
                  padding: 0
                }}>
                  {[
                    "Your CV/resume attached",
                    "The position you're interested in",
                    "A brief introduction about yourself",
                    "Why you want to work with TransformerLabs",
                    "Any relevant projects or portfolio links"
                  ].map((item, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                      <CheckCircle size={20} className="text-green-600" style={{ marginTop: '0.125rem', flexShrink: 0 }} />
                      <span style={{ 
                        fontSize: '1rem', 
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5
                      }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div style={{
                padding: 'var(--space-6)',
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                marginBottom: 'var(--space-6)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  marginBottom: 'var(--space-3)'
                }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Email:</strong>
                  <code style={{ 
                    fontSize: '1rem',
                    color: 'var(--primary)',
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: 0
                  }}>
                    Mo@MohammadOthman.com
                  </code>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)'
                }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Subject:</strong>
                  <code style={{ 
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: 0
                  }}>
                    TransformerLabs Application - [Position Name]
                  </code>
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <a 
                  href="mailto:Mo@MohammadOthman.com?subject=TransformerLabs Career Interest - [Your Position]&body=Hi Mohammad,%0D%0A%0D%0AI'm interested in joining TransformerLabs.%0D%0A%0D%0AAttached is my CV. Here's a bit about myself:%0D%0A%0D%0A[Please tell us about your background, experience, and why you're interested in working with us]%0D%0A%0D%0ABest regards,%0D%0A[Your Name]"
                  className="btn btn-primary btn-lg"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}
                >
                  <Send size={20} />
                  Send Application
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Interest */}
      <section className="section">
        <div className="container">
          <div className="cta-section">
            <h2 style={{ marginBottom: 'var(--space-6)' }}>
              Don't See Your Role?
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              color: 'var(--text-secondary)', 
              marginBottom: 'var(--space-8)',
              maxWidth: '600px',
              margin: '0 auto var(--space-8)'
            }}>
              We're always interested in hearing from exceptional engineers, even if 
              we don't have an open position that matches your background exactly. 
              Send us your details and we'll keep you in mind for future opportunities.
            </p>
            
            <div className="flex justify-center">
              <a 
                href="mailto:Mo@MohammadOthman.com?subject=TransformerLabs General Interest - Tell me about opportunities&body=Hi Mohammad,%0D%0A%0D%0AI'm interested in potential opportunities at TransformerLabs.%0D%0A%0D%0AAttached is my CV. Here's a bit about my background:%0D%0A%0D%0A[Please tell us about your experience, skills, and what type of role interests you]%0D%0A%0D%0ABest regards,%0D%0A[Your Name]"
                className="btn btn-secondary btn-lg"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)'
                }}
              >
                <Heart size={20} />
                Express Interest
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
                <Laptop size={16} className="text-green-600" />
                <span>Remote-first culture</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Globe size={16} className="text-green-600" />
                <span>Work from anywhere</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Clock size={16} className="text-green-600" />
                <span>Flexible hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}