import Link from 'next/link'
import { Metadata } from 'next'
import { 
  Bot, 
  BarChart3, 
  Zap, 
  Search, 
  Sparkles, 
  Settings,
  Target,
  Clock,
  MessageSquare,
  HeadphonesIcon,
  Mail,
  CheckCircle
} from 'lucide-react'
import ProfessionalGlobe from '@/components/ProfessionalGlobe'

export const metadata: Metadata = {
  title: 'About TransformerLabs',
  description: 'Learn about TransformerLabs - AI development company specializing in practical business solutions. Based in Palestine and UK.',
}

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
        <div className="container">
          <div className="hero-content">
            <h1>
              About TransformerLabs
            </h1>
            
            <p className="hero-subtitle">
              We build AI solutions that solve real business problems. Founded in 2023, 
              we work with companies worldwide to implement practical AI applications 
              that deliver measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          {/* Story Header - Full Width */}
          <h2 style={{ marginBottom: 'var(--space-8)' }}>
            Our Story
          </h2>
          
          {/* Story Content - Aligned Grid */}
          <div className="grid-2" style={{ gap: 'var(--space-12)', alignItems: 'start' }}>
            {/* Left Column - Description */}
            <div>
              <p style={{ 
                fontSize: '1.125rem', 
                lineHeight: 1.7, 
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-6)'
              }}>
                TransformerLabs was founded with a simple mission: make AI accessible 
                and practical for businesses of all sizes. We saw too many companies 
                struggling with experimental AI projects that never delivered real value.
              </p>
              <p style={{ 
                fontSize: '1.125rem', 
                lineHeight: 1.7, 
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-6)'
              }}>
                Our approach is different. We focus on proven AI technologies and 
                practical implementations that integrate seamlessly with existing 
                business processes. No hype, no unrealistic promises – just reliable 
                AI solutions that work.
              </p>
              <p style={{ 
                fontSize: '1.125rem', 
                lineHeight: 1.7, 
                color: 'var(--text-secondary)'
              }}>
                Based in Palestine and the United Kingdom, we serve clients globally, 
                with particular expertise in Middle Eastern and European markets.
              </p>
            </div>
            
            {/* Right Column - Our Focus */}
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
                Our Focus
              </h3>
              <div className="space-y-4">
                {[
                  { 
                    title: "Practical AI", 
                    desc: "Solutions that solve real business problems, not experimental tech",
                    icon: <Target size={20} className="text-primary" />
                  },
                  { 
                    title: "Reliable Delivery", 
                    desc: "Proven track record of on-time, on-budget project completion",
                    icon: <Clock size={20} className="text-primary" />
                  },
                  { 
                    title: "Clear Communication", 
                    desc: "No technical jargon – we explain everything in business terms",
                    icon: <MessageSquare size={20} className="text-primary" />
                  },
                  { 
                    title: "Ongoing Support", 
                    desc: "We stick around to ensure your AI solutions continue working",
                    icon: <HeadphonesIcon size={20} className="text-primary" />
                  }
                ].map((item, index) => (
                  <div key={index} style={{ 
                    marginBottom: 'var(--space-4)',
                    display: 'flex',
                    gap: 'var(--space-3)',
                    alignItems: 'flex-start'
                  }}>
                    <div style={{ marginTop: '0.125rem' }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ 
                        fontWeight: '600', 
                        color: 'var(--text-primary)',
                        marginBottom: 'var(--space-1)',
                        fontSize: '1rem'
                      }}>
                        {item.title}
                      </h4>
                      <p style={{ 
                        fontSize: '0.875rem', 
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                        margin: 0
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section with Professional Globe */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Global Presence</h2>
            <p className="section-subtitle">
              Strategic locations in Scotland and Palestine enable us to serve clients 
              across Europe, the Middle East, and beyond
            </p>
          </div>
          
          <ProfessionalGlobe />
        </div>
      </section>

      {/* What We Build */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Specialize In</h2>
            <p className="section-subtitle">
              We focus on AI applications with proven business value
            </p>
          </div>
          
          <div className="grid-3">
            {[
              {
                icon: <Bot size={40} className="text-primary" />,
                title: "Conversational AI",
                description: "Customer service chatbots, internal assistants, and AI agents that handle real conversations with customers and employees."
              },
              {
                icon: <BarChart3 size={40} className="text-primary" />,
                title: "Data & Analytics", 
                description: "Automated reporting, predictive analytics, and intelligent insights that help you make better business decisions."
              },
              {
                icon: <Zap size={40} className="text-primary" />,
                title: "Process Automation",
                description: "Streamline workflows, automate repetitive tasks, and optimize business processes using intelligent automation."
              },
              {
                icon: <Search size={40} className="text-primary" />,
                title: "Knowledge Systems",
                description: "AI that searches through your documents and data to provide instant answers to questions from your team or customers."
              },
              {
                icon: <Sparkles size={40} className="text-primary" />,
                title: "Generative AI",
                description: "Content generation, writing assistance, and creative AI tools customized for your specific business needs."
              },
              {
                icon: <Settings size={40} className="text-primary" />,
                title: "Custom Solutions",
                description: "Purpose-built AI applications designed specifically for your industry, use case, and technical requirements."
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

      {/* Our Approach */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How We Work</h2>
          </div>
          
          <div className="grid-2" style={{ gap: 'var(--space-12)' }}>
            <div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Business-First Approach
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: 'var(--space-6)',
                lineHeight: 1.7
              }}>
                We start by understanding your business goals, not the technology. 
                Our AI solutions are designed to integrate with your existing processes 
                and deliver measurable improvements to your operations.
              </p>
              
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Transparent Communication
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                lineHeight: 1.7
              }}>
                We keep you informed every step of the way. No technical jargon, 
                no hidden costs, no surprises. You&apos;ll always know what we&apos;re building, 
                why we&apos;re building it, and when it will be ready.
              </p>
            </div>
            
            <div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Flexible Partnership
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: 'var(--space-6)',
                lineHeight: 1.7
              }}>
                Whether you need a one-off project, ongoing development support, 
                or strategic consulting, we adapt our services to your needs and timeline.
              </p>
              
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Long-term Success
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)',
                lineHeight: 1.7
              }}>
                We build solutions that grow with your business and provide ongoing 
                support to ensure they continue delivering value as your needs evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Leadership</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div style={{
              backgroundColor: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-10)',
              textAlign: 'center'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: 'var(--space-2)',
                color: 'var(--text-primary)'
              }}>
                Mohammad Othman
              </h3>
              
              <p style={{ 
                color: 'var(--primary)', 
                fontWeight: '500',
                marginBottom: 'var(--space-6)',
                fontSize: '1.125rem'
              }}>
                Founder & Lead AI Engineer
              </p>
              
              <p style={{ 
                color: 'var(--text-secondary)', 
                lineHeight: 1.7,
                maxWidth: '600px',
                margin: '0 auto var(--space-6)',
                fontSize: '1.125rem'
              }}>
                AI engineer with deep expertise in building practical business applications. 
                Focused on delivering reliable solutions that solve real problems rather than 
                experimental technology. Based between Palestine and the UK.
              </p>
              
              <div style={{ marginTop: 'var(--space-6)' }}>
                <a 
                  href="mailto:Mo@MohammadOthman.com" 
                  className="btn btn-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}
                >
                  <Mail size={16} />
                  Contact Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-section">
            <h2 style={{ marginBottom: 'var(--space-6)' }}>
              Ready to Work Together?
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              color: 'var(--text-secondary)', 
              marginBottom: 'var(--space-8)',
              maxWidth: '600px',
              margin: '0 auto var(--space-8)'
            }}>
              Whether you have a specific AI project in mind or want to explore 
              how AI can benefit your business, let&apos;s start a conversation.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Get in Touch
              </Link>
              <Link href="/services" className="btn btn-secondary btn-lg">
                View Our Services
              </Link>
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
                <span>Free consultation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <CheckCircle size={16} className="text-green-600" />
                <span>No obligation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <CheckCircle size={16} className="text-green-600" />
                <span>24-hour response</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}