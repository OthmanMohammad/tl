import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              AI Solutions That Actually Work
            </h1>
            
            <p className="hero-subtitle">
              We build practical AI applications for businesses worldwide. 
              Chatbots, data analytics, workflow automation, and custom solutions 
              that deliver real results.
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
                icon: "🤖"
              },
              {
                title: "Data Analytics & Insights", 
                description: "Transform your business data into actionable insights with automated reporting, predictive analytics, and intelligent dashboards.",
                icon: "📊"
              },
              {
                title: "Workflow Automation",
                description: "Streamline business processes with intelligent automation that handles repetitive tasks and complex decision-making workflows.",
                icon: "⚡"
              },
              {
                title: "Document Processing",
                description: "AI that reads, understands, and extracts insights from documents, contracts, and reports automatically.",
                icon: "📄"
              },
              {
                title: "Knowledge Systems",
                description: "Searchable AI systems that provide instant answers from your company's knowledge base and documentation.",
                icon: "🔍"
              },
              {
                title: "Custom AI Solutions",
                description: "Tailored AI applications designed specifically for your industry requirements and business processes.",
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

      {/* Why Choose Us */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose TransformerLabs</h2>
          </div>
          
          <div className="grid-3">
            {[
              {
                title: "Proven Results",
                description: "Track record of successful AI implementations across multiple industries with measurable business impact.",
                icon: "✅"
              },
              {
                title: "Business-First Approach",
                description: "We focus on solving real business problems, not just implementing cool technology.",
                icon: "🎯"
              },
              {
                title: "End-to-End Service",
                description: "From strategy and development to deployment and ongoing support - we handle everything.",
                icon: "🔄"
              }
            ].map((feature, index) => (
              <div key={index} className="card">
                <div style={{
                  fontSize: '2.5rem',
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
              AI solutions tailored for your industry's specific needs
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
              Let's discuss how AI can solve your specific business challenges. 
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