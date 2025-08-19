import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Enterprise AI Solutions<br />
            <span className="hero-subtitle">Built for Scale</span>
          </h1>
          <p>
            We deliver production-ready AI systems, LLM agents, and intelligent workflows 
            that transform businesses across the Middle East and beyond.
          </p>
          <div className="hero-buttons">
            <Link href="/contact" className="btn-primary btn-large">
              Start Your AI Project
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>AI Solutions That Drive Results</h2>
            <p>From intelligent chatbots to complex multi-agent systems, we build AI that works.</p>
          </div>
          
          <div className="services-grid">
            {[
              {
                title: "LLM Agents & Chatbots",
                description: "Custom conversational AI that understands your business context and customer needs.",
                icon: "🤖"
              },
              {
                title: "RAG & Knowledge Systems", 
                description: "Intelligent document processing and retrieval systems that unlock your data's potential.",
                icon: "📚"
              },
              {
                title: "AI Workflows & Automation",
                description: "End-to-end process automation that scales with your business requirements.",
                icon: "⚡"
              },
              {
                title: "Custom AI Development",
                description: "Tailored machine learning solutions built specifically for your industry challenges.",
                icon: "🔧"
              },
              {
                title: "AI Strategy & Consulting",
                description: "Strategic guidance to help you navigate AI adoption and maximize ROI.",
                icon: "💡"
              },
              {
                title: "Enterprise Integration",
                description: "Seamless integration of AI systems with your existing technology infrastructure.",
                icon: "🔗"
              }
            ].map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero">
        <div className="hero-content">
          <h2 style={{fontSize: '2.5rem', marginBottom: '2rem'}}>
            Ready to Transform Your Business with AI?
          </h2>
          <p style={{marginBottom: '3rem'}}>
            Let's discuss how our AI solutions can drive growth and efficiency for your organization.
          </p>
          <div className="hero-buttons">
            <Link href="/contact" className="btn-primary btn-large">
              Schedule a Consultation
            </Link>
            <a href="mailto:Mo@MohammadOthman.com" className="btn-secondary">
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}