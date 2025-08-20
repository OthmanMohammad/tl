import Link from 'next/link'
import { Metadata } from 'next'
import { 
  Bot, 
  BarChart3, 
  FileText, 
  Zap, 
  Sparkles, 
  Settings,
  ClipboardList,
  Handshake,
  Lightbulb,
  Shield,
  CheckCircle,
  Clock,
  Building2
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Development Services - TransformerLabs',
  description: 'Professional AI development services including chatbots, data analytics, workflow automation, and custom AI solutions. Clear pricing and reliable delivery.',
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
              We build practical AI solutions that work reliably in real business environments. 
              From intelligent chatbots to advanced data analytics, we handle the complexity 
              so you can focus on growing your business.
            </p>
            
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Discuss Your Project
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

      {/* Core Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Build</h2>
            <p className="section-subtitle">
              Proven AI applications that integrate seamlessly with your business
            </p>
          </div>
          
          <div className="grid-2" style={{ gap: 'var(--space-10)' }}>
            {[
              {
                title: "AI Chatbots & Virtual Assistants",
                category: "CONVERSATIONAL AI",
                icon: <Bot size={48} className="text-primary" />,
                description: "Intelligent chatbots that handle customer inquiries, support tickets, and internal requests. Our bots understand context, manage complex conversations, and escalate to humans when needed.",
                features: [
                  "Natural language understanding and responses",
                  "Integration with your existing systems (CRM, databases, etc.)",
                  "Multi-language support for global businesses",
                  "Analytics dashboard to track performance",
                  "Seamless handoff to human agents"
                ],
                examples: "Customer support, FAQ automation, lead qualification, appointment scheduling"
              },
              {
                title: "Data Analytics & Business Intelligence",
                category: "SMART ANALYTICS",
                icon: <BarChart3 size={48} className="text-primary" />,
                description: "Transform your raw data into actionable insights with automated reporting, trend analysis, and predictive analytics that help you make better business decisions.",
                features: [
                  "Automated report generation and scheduling",
                  "Predictive analytics and forecasting",
                  "Interactive data visualization dashboards",
                  "Anomaly detection and alerting",
                  "Real-time monitoring and KPI tracking"
                ],
                examples: "Sales forecasting, inventory optimization, customer behavior analysis, financial reporting"
              },
              {
                title: "Document Processing & Knowledge Systems",
                category: "INTELLIGENT AUTOMATION", 
                icon: <FileText size={48} className="text-primary" />,
                description: "AI that reads, understands, and extracts information from your documents, contracts, reports, and files. Build searchable knowledge bases that answer questions instantly.",
                features: [
                  "Automated document classification and tagging",
                  "Information extraction from PDFs, images, and text",
                  "Intelligent search across all your content",
                  "Question-answering systems for employees/customers",
                  "Compliance and audit trail features"
                ],
                examples: "Contract analysis, invoice processing, research assistance, policy Q&A systems"
              },
              {
                title: "Workflow Automation & Process Optimization",
                category: "PROCESS AUTOMATION",
                icon: <Zap size={48} className="text-primary" />,
                description: "Streamline repetitive business processes with intelligent automation that handles data entry, approvals, routing, and decision-making workflows.",
                features: [
                  "Business process analysis and optimization",
                  "Automated data entry and validation",
                  "Intelligent routing and approval workflows",
                  "Integration with existing business tools",
                  "Error handling and exception management"
                ],
                examples: "Order processing, employee onboarding, expense approvals, inventory management"
              },
              {
                title: "Content Generation & Creative AI",
                category: "GENERATIVE AI",
                icon: <Sparkles size={48} className="text-primary" />,
                description: "AI-powered content creation tools that generate marketing copy, product descriptions, reports, and other business content while maintaining your brand voice.",
                features: [
                  "Custom content generation for your industry",
                  "Brand voice and style consistency",
                  "Multi-format content creation (text, images, videos)",
                  "Quality control and approval workflows",
                  "Usage analytics and optimization"
                ],
                examples: "Marketing copy, product descriptions, social media content, technical documentation"
              },
              {
                title: "Custom AI Solutions",
                category: "SPECIALIZED DEVELOPMENT",
                icon: <Settings size={48} className="text-primary" />,
                description: "Purpose-built AI applications designed specifically for your unique business requirements, industry constraints, and technical environment.",
                features: [
                  "Detailed requirements analysis and planning",
                  "Custom machine learning model development",
                  "Seamless integration with existing systems",
                  "Performance optimization and scaling",
                  "Comprehensive testing and quality assurance"
                ],
                examples: "Industry-specific AI tools, custom prediction models, specialized automation systems"
              }
            ].map((service, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <div className="card-main">
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-3)',
                      marginBottom: 'var(--space-4)'
                    }}>
                      {service.icon}
                      <div style={{
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: 'var(--primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                      }}>
                        {service.category}
                      </div>
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
                      lineHeight: 1.6,
                      fontSize: '1.125rem'
                    }}>
                      {service.description}
                    </p>
                    
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                      <h4 style={{ 
                        fontSize: '0.875rem', 
                        fontWeight: '600', 
                        marginBottom: 'var(--space-3)',
                        color: 'var(--text-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
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
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                            <CheckCircle size={16} className="text-green-600" style={{ marginTop: '0.125rem', flexShrink: 0 }} />
                            <span style={{ 
                              fontSize: '0.875rem', 
                              color: 'var(--text-secondary)',
                              lineHeight: 1.5
                            }}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="card-footer-content">
                    <div style={{
                      padding: 'var(--space-4)',
                      backgroundColor: 'var(--surface)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border)'
                    }}>
                      <h4 style={{ 
                        fontSize: '0.75rem', 
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: 'var(--text-muted)',
                        marginBottom: 'var(--space-2)'
                      }}>
                        Common Use Cases:
                      </h4>
                      <p style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                        margin: 0
                      }}>
                        {service.examples}
                      </p>
                    </div>
                  </div>
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
            <h2 className="section-title">How We Work With You</h2>
            <p className="section-subtitle">
              Flexible arrangements designed to fit your needs, timeline, and budget
            </p>
          </div>
          
          <div className="grid-4">
            {[
              {
                title: "Fixed-Price Projects",
                icon: <ClipboardList size={32} className="text-primary" />,
                description: "Clearly defined scope, timeline, and deliverables. Perfect for well-understood requirements with specific outcomes.",
                timeline: "2-12 weeks",
                bestFor: "Specific AI implementations, chatbot development, automation projects",
                pricing: "Fixed quote based on scope"
              },
              {
                title: "Ongoing Development Partnership",
                icon: <Handshake size={32} className="text-primary" />,
                description: "Continuous development as your dedicated AI team. Flexible monthly arrangements that scale with your needs.",
                timeline: "3+ months",
                bestFor: "Growing AI capabilities, iterative development, long-term projects",
                pricing: "Monthly retainer"
              },
              {
                title: "Strategic AI Consulting",
                icon: <Lightbulb size={32} className="text-primary" />,
                description: "AI strategy planning, technical architecture review, and guidance for your internal teams.",
                timeline: "1-4 weeks",
                bestFor: "AI strategy development, technical reviews, team guidance",
                pricing: "Hourly or project-based"
              },
              {
                title: "Maintenance & Support",
                icon: <Shield size={32} className="text-primary" />,
                description: "Keep your AI systems running smoothly with monitoring, updates, bug fixes, and performance optimization.",
                timeline: "Ongoing",
                bestFor: "Existing AI systems, performance monitoring, regular updates",
                pricing: "Monthly support plan"
              }
            ].map((arrangement, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <div className="card-main">
                    <div style={{ 
                      marginBottom: 'var(--space-4)',
                      textAlign: 'center'
                    }}>
                      {arrangement.icon}
                    </div>
                    <h3 className="card-title" style={{ textAlign: 'center' }}>
                      {arrangement.title}
                    </h3>
                    <p className="card-description" style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
                      {arrangement.description}
                    </p>
                  </div>
                  
                  <div className="service-card-metadata">
                    <div className="service-metadata-item">
                      <div className="service-metadata-label">
                        <Clock size={14} className="text-primary" />
                        <div style={{ 
                          fontSize: '0.75rem', 
                          fontWeight: '600',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: 'var(--text-muted)'
                        }}>
                          Timeline
                        </div>
                      </div>
                      <div style={{ 
                        fontSize: '0.875rem',
                        color: 'var(--text-primary)',
                        fontWeight: '500'
                      }}>
                        {arrangement.timeline}
                      </div>
                    </div>
                    
                    <div className="service-metadata-item">
                      <div className="service-metadata-label">
                        <Building2 size={14} className="text-primary" />
                        <div style={{ 
                          fontSize: '0.75rem', 
                          fontWeight: '600',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: 'var(--text-muted)'
                        }}>
                          Best For
                        </div>
                      </div>
                      <div style={{ 
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.4
                      }}>
                        {arrangement.bestFor}
                      </div>
                    </div>
                  </div>
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
            <h2 className="section-title">Our Development Process</h2>
            <p className="section-subtitle">
              Proven methodology that ensures successful AI implementations
            </p>
          </div>
          
          <div className="grid-3">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We start by understanding your business goals, current processes, and technical requirements. Together, we define success metrics and create a detailed project roadmap.",
                deliverables: "Requirements document, technical architecture, project timeline"
              },
              {
                step: "02", 
                title: "Development & Testing",
                description: "Our team builds your AI solution with regular check-ins and testing phases. You'll see progress weekly and can provide feedback throughout the development process.",
                deliverables: "Working prototypes, regular demos, testing reports"
              },
              {
                step: "03",
                title: "Deployment & Support",
                description: "We deploy your solution to your environment, provide comprehensive training for your team, and offer ongoing support to ensure long-term success.",
                deliverables: "Live system, user training, documentation, support plan"
              }
            ].map((step, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <div className="card-main">
                    <div style={{
                      width: '4rem',
                      height: '4rem',
                      backgroundColor: 'var(--primary)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto var(--space-6)',
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: 'white'
                    }}>
                      {step.step}
                    </div>
                    <h3 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: '600', 
                      marginBottom: 'var(--space-4)',
                      color: 'var(--text-primary)',
                      textAlign: 'center'
                    }}>
                      {step.title}
                    </h3>
                    <p style={{ 
                      color: 'var(--text-secondary)',
                      marginBottom: 'var(--space-4)',
                      lineHeight: 1.6,
                      textAlign: 'center'
                    }}>
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="process-card-deliverables">
                    <div style={{
                      padding: 'var(--space-3)',
                      backgroundColor: 'var(--surface)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border)',
                      textAlign: 'center'
                    }}>
                      <div style={{ 
                        fontSize: '0.75rem', 
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: 'var(--text-muted)',
                        marginBottom: 'var(--space-2)'
                      }}>
                        Key Deliverables
                      </div>
                      <div style={{ 
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.4
                      }}>
                        {step.deliverables}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="cta-section">
            <h2 style={{ marginBottom: 'var(--space-6)' }}>
              Ready to Build Your AI Solution?
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              color: 'var(--text-secondary)', 
              marginBottom: 'var(--space-8)',
              maxWidth: '700px',
              margin: '0 auto var(--space-8)'
            }}>
              Let&apos;s discuss your project requirements. We&apos;ll provide honest feedback 
              on what&apos;s possible, realistic timelines, and how AI can actually benefit 
              your specific business situation.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Start Your Project
              </Link>
              <a 
                href="mailto:Mo@MohammadOthman.com?subject=AI Project Inquiry" 
                className="btn btn-secondary btn-lg"
              >
                Email Us Directly
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
              gap: 'var(--space-6)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <CheckCircle size={16} className="text-green-600" />
                <span>Free initial consultation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <CheckCircle size={16} className="text-green-600" />
                <span>No-obligation project assessment</span>
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