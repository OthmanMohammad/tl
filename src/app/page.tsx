import Link from 'next/link'
import {
  Bot,
  BarChart3,
  Zap,
  Code,
  Globe,
  Settings,
  Target,
  RotateCcw,
  Sparkles
} from 'lucide-react'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              Technology Solutions That Actually Work
            </h1>

            <p className="hero-subtitle">
              We build AI-powered applications, custom software, and modern websites for businesses worldwide. Practical solutions that deliver real results.
            </p>

            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Start a Project
              </Link>
              <Link href="/services" className="btn btn-secondary btn-lg">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Build</h2>
            <p className="section-subtitle">
              AI solutions that integrate seamlessly with your business operations
            </p>
          </div>
          
          <div className="grid-3">
            {[
              {
                title: "AI Chatbots & Assistants",
                description: "Intelligent chatbots for customer service, support tickets, and internal operations that understand context and handle complex conversations.",
                icon: <Bot size={48} className="text-primary" />
              },
              {
                title: "Software Development",
                description: "Custom web applications built with modern technologies. Scalable backends, APIs, and full-stack solutions tailored to your business needs.",
                icon: <Code size={48} className="text-primary" />
              },
              {
                title: "Web Design & Development",
                description: "Professional websites and web applications that look great and perform even better. Responsive, fast, and built for conversions.",
                icon: <Globe size={48} className="text-primary" />
              },
              {
                title: "Data Analytics & Insights",
                description: "Transform your business data into actionable insights with automated reporting, predictive analytics, and intelligent dashboards.",
                icon: <BarChart3 size={48} className="text-primary" />
              },
              {
                title: "Workflow Automation",
                description: "Streamline business processes with intelligent automation that handles repetitive tasks and complex decision-making workflows.",
                icon: <Zap size={48} className="text-primary" />
              },
              {
                title: "Custom AI Solutions",
                description: "Tailored AI applications designed specifically for your industry requirements and business processes.",
                icon: <Settings size={48} className="text-primary" />
              }
            ].map((service, index) => (
              <div key={index} className="card">
                <div style={{
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

      {/* Why Choose Us */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose TransformerLabs</h2>
          </div>
          
          <div className="grid-3">
            {[
              {
                title: "Quality-First Approach",
                description: "We build solutions that last. Clean code, modern architecture, and thorough testing ensure your investment pays off.",
                icon: <Sparkles size={48} className="text-primary" />
              },
              {
                title: "Business-Focused",
                description: "We focus on solving real business problems, not just implementing cool technology. Your goals drive our solutions.",
                icon: <Target size={48} className="text-primary" />
              },
              {
                title: "End-to-End Service",
                description: "From strategy and development to deployment and ongoing support – we handle everything so you can focus on your business.",
                icon: <RotateCcw size={48} className="text-primary" />
              }
            ].map((feature, index) => (
              <div key={index} className="card">
                <div style={{
                  marginBottom: 'var(--space-4)',
                  textAlign: 'center'
                }}>
                  {feature.icon}
                </div>
                <h3 className="card-title" style={{ textAlign: 'center', marginBottom: 'var(--space-3)' }}>
                  {feature.title}
                </h3>
                <p className="card-description" style={{ textAlign: 'center' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">
              AI solutions tailored for your industry&apos;s specific needs
            </p>
          </div>
          
          <div className="grid-3">
            {[
              {
                industry: "E-commerce & Retail",
                description: "Customer service automation, inventory management, and personalized shopping experiences."
              },
              {
                industry: "Healthcare & Medical",
                description: "Patient data analysis, appointment systems, and medical document processing."
              },
              {
                industry: "Financial Services",
                description: "Fraud detection, automated reporting, and customer service optimization."
              },
              {
                industry: "Manufacturing",
                description: "Quality control automation, predictive maintenance, and supply chain optimization."
              },
              {
                industry: "Professional Services",
                description: "Document analysis, client management, and business process automation."
              },
              {
                industry: "Education",
                description: "Student support systems, automated grading, and personalized learning platforms."
              }
            ].map((item, index) => (
              <div key={index} className="card">
                <h3 className="card-title" style={{ 
                  fontSize: '1.25rem', 
                  marginBottom: 'var(--space-3)',
                  color: 'var(--primary)',
                  textAlign: 'center'
                }}>
                  {item.industry}
                </h3>
                <p className="card-description" style={{ textAlign: 'center' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="cta-section">
            <h2 style={{ marginBottom: 'var(--space-6)' }}>
              Ready to Transform Your Business?
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'var(--text-secondary)', 
              marginBottom: 'var(--space-8)',
              maxWidth: '600px',
              margin: '0 auto var(--space-8)'
            }}>
              Let&apos;s discuss how AI can solve your specific business challenges. 
              We provide honest assessments and realistic timelines.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Get Started
              </Link>
              <a 
                href="mailto:Mo@MohammadOthman.com" 
                className="btn btn-secondary btn-lg"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}