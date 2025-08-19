// src/app/services/page.tsx - Services Page
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Development Services',
  description: 'Professional AI development services - chatbots, data analytics, workflow automation, generative AI applications, and custom AI solutions for businesses.',
}

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
        <div className="container">
          <div className="hero-content">
            <h1>
              AI Development Services
            </h1>
            
            <p className="hero-subtitle">
              We build practical AI solutions that work reliably in business environments. 
              From chatbots to complex data analytics, we handle the technical complexity 
              so you can focus on your business.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Build</h2>
          </div>
          
          <div className="grid-2" style={{ gap: 'var(--space-12)' }}>
            {[
              {
                title: "Chatbots & AI Assistants",
                category: "CONVERSATIONAL AI",
                description: "Customer service bots that handle real conversations, internal assistants for employee support, and specialized AI agents for specific business functions.",
                features: [
                  "Natural language understanding",
                  "Integration with existing systems",
                  "Multi-language support",
                  "Analytics and reporting",
                  "Escalation to human agents"
                ]
              },
              {
                title: "Data Analytics & Reporting",
                category: "BUSINESS INTELLIGENCE",
                description: "Transform your data into actionable insights with automated analysis, intelligent reporting, and predictive analytics.",
                features: [
                  "Automated report generation",
                  "Predictive analytics",
                  "Data visualization dashboards",
                  "Anomaly detection",
                  "Real-time monitoring"
                ]
              },
              {
                title: "Knowledge Systems",
                category: "INFORMATION RETRIEVAL", 
                description: "AI that searches through your documents, databases, and files to provide instant answers to questions from employees or customers.",
                features: [
                  "Document processing and indexing",
                  "Intelligent search capabilities",
                  "Question answering systems",
                  "Content recommendations",
                  "Access control and security"
                ]
              },
              {
                title: "Workflow Automation",
                category: "PROCESS AUTOMATION",
                description: "Automate repetitive business processes, data entry, document processing, and decision-making workflows using AI.",
                features: [
                  "Process analysis and optimization",
                  "Automated data processing",
                  "Decision support systems",
                  "Integration with business tools",
                  "Error handling and monitoring"
                ]
              },
              {
                title: "Generative AI Applications",
                category: "CONTENT GENERATION",
                description: "Content generation, writing assistance, image creation, and other creative AI tools customized for your specific needs and brand.",
                features: [
                  "Custom content generation",
                  "Brand-compliant outputs",
                  "Multi-format support",
                  "Quality control systems",
                  "Usage analytics"
                ]
              },
              {
                title: "Custom AI Solutions",
                category: "SPECIALIZED DEVELOPMENT",
                description: "Purpose-built AI systems designed specifically for your industry, use case, and technical requirements.",
                features: [
                  "Requirements analysis",
                  "Custom model development",
                  "System integration",
                  "Performance optimization",
                  "Ongoing maintenance"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="card" style={{ padding: 'var(--space-10)' }}>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: 'var(--space-4)'
                }}>
                  {service.category}
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600', 
                  marginBottom: 'var(--space-4)',
                  color: 'var(--text-primary)'
                }}>
                  {service.title}
                </h3>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  marginBottom: 'var(--space-6)',
                  lineHeight: 1.6
                }}>
                  {service.description}
                </p>
                <div>
                  <h4 style={{ 
                    fontSize: '0.875rem', 
                    fontWeight: '600', 
                    marginBottom: 'var(--space-3)',
                    color: 'var(--text-primary)'
                  }}>
                    Key Features:
                  </h4>
                  <ul style={{ 
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-2)'
                  }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div style={{
                          width: '0.25rem',
                          height: '0.25rem',
                          backgroundColor: 'var(--primary)',
                          borderRadius: '50%',
                          marginTop: '0.625rem',
                          flexShrink: 0
                        }}></div>
                        <span style={{ 
                          fontSize: '0.875rem', 
                          color: 'var(--text-secondary)' 
                        }}>
                          {feature}
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

      {/* Work Arrangements */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">
              Flexible arrangements to fit your needs and timeline
            </p>
          </div>
          
          <div className="grid-4">
            {[
              {
                title: "Fixed-Price Projects",
                description: "Clear scope, timeline, and deliverables. Best for well-defined requirements.",
                timeline: "2-12 weeks"
              },
              {
                title: "Ongoing Development",
                description: "Continuous development as your dedicated AI team. Flexible monthly arrangements.",
                timeline: "Ongoing"
              },
              {
                title: "Consulting & Strategy",
                description: "AI planning, technical review, and strategic guidance for your projects.",
                timeline: "1-4 weeks"
              },
              {
                title: "Support & Maintenance",
                description: "Keep your AI systems running smoothly with ongoing monitoring and updates.",
                timeline: "Monthly"
              }
            ].map((arrangement, index) => (
              <div key={index} className="card">
                <h3 className="card-title">{arrangement.title}</h3>
                <p className="card-description">{arrangement.description}</p>
                <div style={{
                  marginTop: 'var(--space-4)',
                  padding: 'var(--space-2) var(--space-3)',
                  backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border)'
                }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-muted)'
                  }}>
                    Timeline: {arrangement.timeline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Process</h2>
          </div>
          
          <div className="grid-3">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We understand your requirements, assess technical feasibility, and create a clear project plan."
              },
              {
                step: "02", 
                title: "Development & Testing",
                description: "Build your AI solution with regular check-ins and testing to ensure everything works as expected."
              },
              {
                step: "03",
                title: "Deployment & Support",
                description: "Deploy your solution and provide training, documentation, and ongoing support as needed."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  backgroundColor: 'var(--primary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-4)',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: 'white'
                }}>
                  {step.step}
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  marginBottom: 'var(--space-3)',
                  color: 'var(--text-primary)'
                }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-section">
            <h2 style={{ marginBottom: 'var(--space-6)' }}>
              Ready to Discuss Your Project?
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              color: 'var(--text-secondary)', 
              marginBottom: 'var(--space-8)',
              maxWidth: '600px',
              margin: '0 auto var(--space-8)'
            }}>
              Tell us what you're looking to build. We'll provide honest feedback 
              on what's possible and how we can help.
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
          </div>
        </div>
      </section>
    </main>
  )
}