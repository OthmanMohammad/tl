import { Metadata } from 'next'
import { Scale, FileText, CreditCard, Shield, Users, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service - TransformerLabs',
  description: 'TransformerLabs Terms of Service. Legal terms and conditions for our AI development and software engineering services.',
}

export default function TermsOfService() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-16)' }}>
        <div className="container">
          <div className="hero-content">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--space-3)',
              marginBottom: 'var(--space-6)'
            }}>
              <Scale size={48} className="text-primary" />
            </div>
            <h1>Terms of Service</h1>
            <p className="hero-subtitle">
              Legal terms and conditions for our AI development and software engineering services
            </p>
            <p style={{ 
              fontSize: '0.875rem', 
              color: 'var(--text-muted)',
              marginTop: 'var(--space-4)'
            }}>
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Legal Content */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            
            {/* Important Notice */}
            <div style={{
              backgroundColor: 'rgba(255, 54, 33, 0.05)',
              border: '1px solid rgba(255, 54, 33, 0.2)',
              padding: 'var(--space-6)',
              borderRadius: 'var(--radius-xl)',
              marginBottom: 'var(--space-12)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-3)'
              }}>
                <AlertTriangle size={24} className="text-primary" />
                <h3 style={{ margin: 0, color: 'var(--text-primary)' }}>Important Legal Agreement</h3>
              </div>
              <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                By accessing our website or engaging our services, you agree to be bound by these Terms of Service. 
                Please read them carefully before proceeding.
              </p>
            </div>

            {/* Terms Content */}
            <div className="space-y-8">
              
              {/* Company Information */}
              <section>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>1. Company Information</h2>
                <div style={{
                  backgroundColor: 'var(--surface)',
                  padding: 'var(--space-6)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border)'
                }}>
                  <p><strong>Legal Entity:</strong> Transformer Innovation Co. for Programming and Artificial Intelligence</p>
                  <p><strong>Commercial Name:</strong> TransformerLabs</p>
                  <p><strong>Company Number:</strong> 564007243</p>
                  <p><strong>Registered Address:</strong> Nablus, West Bank, Palestine</p>
                  <p><strong>Contact Email:</strong> <a href="mailto:Mo@MohammadOthman.com" style={{ color: 'var(--primary)' }}>Mo@MohammadOthman.com</a></p>
                  <p style={{ margin: 0 }}><strong>Governing Law:</strong> Laws of Palestine</p>
                </div>
              </section>

              {/* Definitions */}
              <section>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>2. Definitions</h2>
                <p>In these Terms of Service:</p>
                <ul style={{ marginLeft: 'var(--space-6)' }}>
                  <li><strong>"Company," "we," "us," "our"</strong> refers to TransformerLabs</li>
                  <li><strong>"Client," "you," "your"</strong> refers to the individual or entity engaging our services</li>
                  <li><strong>"Services"</strong> refers to AI development, software engineering, consulting, and related professional services</li>
                  <li><strong>"Deliverables"</strong> refers to work products, code, documentation, and other materials created for you</li>
                  <li><strong>"Agreement"</strong> refers to these Terms plus any project-specific contracts or statements of work</li>
                  <li><strong>"Confidential Information"</strong> refers to non-public information disclosed by either party</li>
                </ul>
              </section>

              {/* Services */}
              <section>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <FileText size={24} className="text-primary" />
                  <h2 style={{ margin: 0 }}>3. Services</h2>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>3.1 Service Description</h3>
                <p>We provide professional services including:</p>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li>AI system development and implementation</li>
                  <li>Custom software engineering and development</li>
                  <li>Machine learning model development and deployment</li>
                  <li>Data analytics and business intelligence solutions</li>
                  <li>Technical consulting and strategy advisory</li>
                  <li>System integration and automation</li>
                </ul>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>3.2 Service Scope</h3>
                <p>The specific scope, timeline, and deliverables for each project will be defined in:</p>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li>Written proposals and estimates</li>
                  <li>Statements of Work (SOW)</li>
                  <li>Project contracts and amendments</li>
                  <li>Email confirmations of scope changes</li>
                </ul>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>3.3 Client Responsibilities</h3>
                <p>You agree to:</p>
                <ul style={{ marginLeft: 'var(--space-6)' }}>
                  <li>Provide accurate and complete project requirements</li>
                  <li>Grant necessary access to systems, data, and personnel</li>
                  <li>Respond to requests for information within reasonable timeframes</li>
                  <li>Designate authorized representatives for project decisions</li>
                  <li>Ensure compliance with applicable laws and regulations</li>
                  <li>Maintain confidentiality of our methodologies and processes</li>
                </ul>
              </section>

              {/* Payment Terms */}
              <section>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <CreditCard size={24} className="text-primary" />
                  <h2 style={{ margin: 0 }}>4. Payment Terms</h2>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>4.1 Fees and Payment</h3>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li>Fees are specified in project proposals and contracts</li>
                  <li>Payment terms are net 30 days from invoice date unless otherwise agreed</li>
                  <li>Invoices are sent electronically to your designated contact</li>
                  <li>Payment is typically made via bank transfer to our designated account</li>
                  <li>All fees are exclusive of applicable taxes, which you are responsible for</li>
                </ul>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>4.2 Late Payment</h3>
                <div style={{
                  backgroundColor: 'var(--surface)',
                  padding: 'var(--space-6)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <ul style={{ marginLeft: 'var(--space-4)', margin: 0 }}>
                    <li>Late payments incur interest at 2% per month (24% annually)</li>
                    <li>We may suspend services for accounts more than 15 days overdue</li>
                    <li>Collections costs and legal fees are your responsibility</li>
                    <li>No right to offset without our written agreement</li>
                  </ul>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>4.3 Expenses</h3>
                <p>You will reimburse pre-approved expenses including:</p>
                <ul style={{ marginLeft: 'var(--space-6)' }}>
                  <li>Third-party software licenses and subscriptions</li>
                  <li>Cloud computing and hosting costs</li>
                  <li>Travel expenses for on-site work (when approved)</li>
                  <li>Specialized hardware or equipment purchases</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>5. Intellectual Property Rights</h2>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>5.1 Client Deliverables</h3>
                <p>Upon full payment, you will own:</p>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li>Custom code developed specifically for your project</li>
                  <li>Documentation and specifications created for your use</li>
                  <li>Final deliverables as defined in the project scope</li>
                  <li>Data and content you provide to us</li>
                </ul>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>5.2 TransformerLabs Retention</h3>
                <p>We retain ownership of:</p>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li>Our general methodologies, frameworks, and processes</li>
                  <li>Pre-existing intellectual property and tools</li>
                  <li>Reusable code libraries and components we develop</li>
                  <li>Know-how and expertise gained during the project</li>
                  <li>The right to use de-identified data for service improvement</li>
                </ul>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>5.3 Third-Party Rights</h3>
                <p>We ensure our deliverables don't infringe third-party rights, but you're responsible for:</p>
                <ul style={{ marginLeft: 'var(--space-6)' }}>
                  <li>Content and data you provide</li>
                  <li>Third-party services and APIs you choose to integrate</li>
                  <li>Compliance with software licenses for tools you select</li>
                </ul>
              </section>

              {/* Warranties and Disclaimers */}
              <section>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <Shield size={24} className="text-primary" />
                  <h2 style={{ margin: 0 }}>6. Warranties and Disclaimers</h2>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>6.1 Our Warranties</h3>
                <p>We warrant that:</p>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li>Services will be performed with professional skill and care</li>
                  <li>We have the right to provide the services</li>
                  <li>Deliverables will substantially conform to agreed specifications</li>
                  <li>We will not knowingly introduce malicious code</li>
                </ul>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>6.2 Warranty Period</h3>
                <p>We provide a 90-day warranty on deliverables to:</p>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li>Fix defects that prevent substantial conformance to specifications</li>
                  <li>Correct errors in functionality as originally delivered</li>
                  <li>Address documentation inaccuracies</li>
                </ul>
                <p>This warranty excludes issues caused by modifications, third-party integrations, or changes to the operating environment.</p>

                <div style={{
                  backgroundColor: 'rgba(255, 54, 33, 0.05)',
                  border: '1px solid rgba(255, 54, 33, 0.2)',
                  padding: 'var(--space-6)',
                  borderRadius: 'var(--radius-lg)',
                  marginTop: 'var(--space-6)'
                }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>6.3 DISCLAIMER</h3>
                  <p style={{ 
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    color: 'var(--text-primary)',
                    margin: 0
                  }}>
                    EXCEPT AS EXPRESSLY STATED, WE PROVIDE SERVICES "AS IS" WITHOUT WARRANTIES OF ANY KIND. 
                    WE DISCLAIM ALL IMPLIED WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR PURPOSE, AND NON-INFRINGEMENT. 
                    WE DO NOT WARRANT THAT SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR MEET ALL YOUR REQUIREMENTS.
                  </p>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>7. Limitation of Liability</h2>
                
                <div style={{
                  backgroundColor: 'rgba(255, 54, 33, 0.05)',
                  border: '1px solid rgba(255, 54, 33, 0.2)',
                  padding: 'var(--space-8)',
                  borderRadius: 'var(--radius-xl)',
                  marginBottom: 'var(--space-6)'
                }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>IMPORTANT LIABILITY LIMITATIONS</h3>
                  
                  <div style={{ marginBottom: 'var(--space-4)' }}>
                    <h4 style={{ fontSize: '1rem', marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>7.1 Damages Cap</h4>
                    <p style={{ 
                      fontWeight: 'bold',
                      color: 'var(--text-primary)',
                      textTransform: 'uppercase',
                      margin: 0
                    }}>
                      Our total liability for any project will not exceed the fees paid by you for that specific project.
                    </p>
                  </div>
                  
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>7.2 Excluded Damages</h4>
                    <p style={{ 
                      fontWeight: 'bold',
                      color: 'var(--text-primary)',
                      textTransform: 'uppercase',
                      margin: 0
                    }}>
                      We are not liable for indirect, consequential, incidental, special, or punitive damages, 
                      including lost profits, business interruption, or data loss, even if advised of the possibility.
                    </p>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>7.3 Exceptions</h3>
                <p>These limitations don't apply to:</p>
                <ul style={{ marginLeft: 'var(--space-6)' }}>
                  <li>Our breach of confidentiality obligations</li>
                  <li>Intentional misconduct or gross negligence</li>
                  <li>Violations of intellectual property rights</li>
                  <li>Damages that cannot be limited under applicable law</li>
                </ul>
              </section>

              {/* Confidentiality */}
              <section>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>8. Confidentiality</h2>
                
                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>8.1 Mutual Obligations</h3>
                <p>Both parties agree to:</p>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li>Protect confidential information using reasonable care</li>
                  <li>Use confidential information only for authorized purposes</li>
                  <li>Not disclose confidential information to third parties</li>
                  <li>Return or destroy confidential information upon termination</li>
                </ul>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>8.2 Exceptions</h3>
                <p>Confidentiality obligations don't apply to information that:</p>
                <ul style={{ marginLeft: 'var(--space-6)' }}>
                  <li>Is publicly available or becomes public through no breach</li>
                  <li>Was known before disclosure</li>
                  <li>Is independently developed without using confidential information</li>
                  <li>Must be disclosed by law or court order</li>
                </ul>
              </section>

              {/* Termination */}
              <section>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>9. Termination</h2>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>9.1 Termination for Convenience</h3>
                <p>Either party may terminate with 30 days' written notice. You will pay for:</p>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li>All work completed before termination</li>
                  <li>Costs incurred for ongoing work</li>
                  <li>Non-cancellable commitments made on your behalf</li>
                </ul>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>9.2 Termination for Cause</h3>
                <p>Either party may terminate immediately for:</p>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li>Material breach of these terms (if not cured within 15 days of notice)</li>
                  <li>Non-payment of undisputed amounts (after 30 days of notice)</li>
                  <li>Insolvency or bankruptcy proceedings</li>
                  <li>Violation of confidentiality obligations</li>
                </ul>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>9.3 Effect of Termination</h3>
                <p>Upon termination:</p>
                <ul style={{ marginLeft: 'var(--space-6)' }}>
                  <li>We will provide completed deliverables upon payment</li>
                  <li>Each party returns or destroys confidential information</li>
                  <li>Payment obligations for completed work survive</li>
                  <li>Intellectual property provisions remain in effect</li>
                </ul>
              </section>

              {/* Indemnification */}
              <section>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>10. Indemnification</h2>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>10.1 Client Indemnification</h3>
                <p>You agree to indemnify us against claims arising from:</p>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li>Your use of deliverables in violation of these terms</li>
                  <li>Content, data, or materials you provide</li>
                  <li>Your violation of applicable laws or third-party rights</li>
                  <li>Modifications you make to our deliverables</li>
                </ul>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>10.2 Our Indemnification</h3>
                <p>We will indemnify you against claims that our deliverables infringe third-party intellectual property rights, provided you:</p>
                <ul style={{ marginLeft: 'var(--space-6)' }}>
                  <li>Notify us promptly of any claims</li>
                  <li>Give us control of the defense and settlement</li>
                  <li>Cooperate reasonably with our defense</li>
                </ul>
              </section>

              {/* Force Majeure */}
              <section>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>11. Force Majeure</h2>
                <p>Neither party is liable for delays or failures due to events beyond reasonable control, including:</p>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li>Natural disasters, pandemics, or public health emergencies</li>
                  <li>War, terrorism, or civil unrest</li>
                  <li>Government actions, sanctions, or regulatory changes</li>
                  <li>Internet outages, cyber attacks, or infrastructure failures</li>
                  <li>Labor strikes or supplier failures</li>
                </ul>
                <p>The affected party must notify the other promptly and use reasonable efforts to mitigate the impact.</p>
              </section>

              {/* Governing Law */}
              <section>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>12. Governing Law and Disputes</h2>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>12.1 Governing Law</h3>
                <p>These terms are governed by the laws of Palestine, without regard to conflict of laws principles.</p>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>12.2 Dispute Resolution</h3>
                <div style={{
                  backgroundColor: 'var(--surface)',
                  padding: 'var(--space-6)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border)'
                }}>
                  <ol style={{ marginLeft: 'var(--space-4)' }}>
                    <li><strong>Direct Negotiation:</strong> Parties will first attempt to resolve disputes through good faith negotiations</li>
                    <li><strong>Mediation:</strong> If negotiation fails, disputes will be submitted to mediation</li>
                    <li><strong>Arbitration:</strong> Unresolved disputes will be settled by binding arbitration</li>
                    <li><strong>Court Jurisdiction:</strong> Courts in Palestine have exclusive jurisdiction for enforcement</li>
                  </ol>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>12.3 International Enforcement</h3>
                <p>For international clients, we agree that this agreement may be enforced in the courts of your jurisdiction for collection purposes, provided Palestine law still governs the interpretation of terms.</p>
              </section>

              {/* General Provisions */}
              <section>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <Users size={24} className="text-primary" />
                  <h2 style={{ margin: 0 }}>13. General Provisions</h2>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>13.1 Entire Agreement</h3>
                <p>These terms, together with project-specific contracts and statements of work, constitute the entire agreement between us.</p>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>13.2 Modifications</h3>
                <p>We may update these terms periodically. Material changes will be communicated via email or website notice. Continued use constitutes acceptance.</p>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>13.3 Severability</h3>
                <p>If any provision is found unenforceable, the remainder of these terms remains in effect.</p>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>13.4 Assignment</h3>
                <p>You may not assign these terms without our written consent. We may assign to affiliates or in connection with business transfers.</p>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>13.5 Independent Contractors</h3>
                <p>We are independent contractors. These terms don't create partnership, joint venture, or agency relationships.</p>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>13.6 Notices</h3>
                <p>Legal notices must be sent via email to <a href="mailto:Mo@MohammadOthman.com" style={{ color: 'var(--primary)' }}>Mo@MohammadOthman.com</a> and are effective upon receipt acknowledgment.</p>
              </section>

              {/* Contact Information */}
              <section>
                <div style={{
                  backgroundColor: 'var(--surface)',
                  padding: 'var(--space-8)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--border)',
                  textAlign: 'center'
                }}>
                  <h2 style={{ marginBottom: 'var(--space-4)' }}>14. Contact Information</h2>
                  
                  <p style={{ marginBottom: 'var(--space-4)' }}>
                    Questions about these Terms of Service? Contact us:
                  </p>
                  
                  <div style={{ color: 'var(--text-secondary)' }}>
                    <p><strong>Email:</strong> <a href="mailto:Mo@MohammadOthman.com" style={{ color: 'var(--primary)' }}>Mo@MohammadOthman.com</a></p>
                    <p><strong>Subject Line:</strong> Terms of Service Inquiry</p>
                    <p><strong>Address:</strong> Nablus, West Bank, Palestine</p>
                  </div>
                  
                  <p style={{ 
                    fontSize: '0.875rem', 
                    color: 'var(--text-muted)',
                    marginTop: 'var(--space-4)' 
                  }}>
                    We respond to legal inquiries within 5 business days.
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}