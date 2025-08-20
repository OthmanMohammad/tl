import { Metadata } from 'next'
import { Mail, Shield, Database, Globe, Users, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - TransformerLabs',
  description: 'TransformerLabs Privacy Policy. Learn how we collect, use, and protect your personal information in compliance with international data protection laws.',
}

export default function PrivacyPolicy() {
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
              <Shield size={48} className="text-primary" />
            </div>
            <h1>Privacy Policy</h1>
            <p className="hero-subtitle">
              How we collect, use, and protect your personal information
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
            
            {/* Company Information */}
            <div style={{
              backgroundColor: 'var(--surface)',
              padding: 'var(--space-8)',
              borderRadius: 'var(--radius-xl)',
              marginBottom: 'var(--space-12)',
              border: '1px solid var(--border)'
            }}>
              <h2 style={{ marginBottom: 'var(--space-4)', fontSize: '1.5rem' }}>Company Information</h2>
              <div style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <p><strong>Legal Entity:</strong> Transformer Innovation Co. for Programming and Artificial Intelligence</p>
                <p><strong>Commercial Name:</strong> TransformerLabs</p>
                <p><strong>Company Number:</strong> 564007243</p>
                <p><strong>Address:</strong> Nablus, West Bank, Palestine</p>
                <p><strong>Contact:</strong> <a href="mailto:Mo@MohammadOthman.com" style={{ color: 'var(--primary)' }}>Mo@MohammadOthman.com</a></p>
              </div>
            </div>

            {/* Privacy Content */}
            <div className="space-y-8">
              
              {/* Introduction */}
              <section>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>1. Introduction</h2>
                <p>TransformerLabs ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with us professionally.</p>
                <p>This policy applies to all users of our website and clients of our AI development and software engineering services.</p>
              </section>

              {/* Information We Collect */}
              <section>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <Database size={24} className="text-primary" />
                  <h2 style={{ margin: 0 }}>2. Information We Collect</h2>
                </div>
                
                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>2.1 Information You Provide</h3>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li><strong>Contact Information:</strong> Name, email address, phone number, company name, job title</li>
                  <li><strong>Project Information:</strong> Requirements, specifications, business needs, technical details</li>
                  <li><strong>Communication Records:</strong> Emails, messages, meeting notes, project correspondence</li>
                  <li><strong>Payment Information:</strong> Billing details, payment records (processed securely through third parties)</li>
                  <li><strong>Professional Information:</strong> CV/resume data for career applications</li>
                </ul>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>2.2 Information We Collect Automatically</h3>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li><strong>Website Usage:</strong> IP address, browser type, device information, pages visited, time spent</li>
                  <li><strong>Technical Data:</strong> Browser settings, operating system, referring websites</li>
                  <li><strong>Analytics Data:</strong> User interactions, website performance metrics (when analytics are implemented)</li>
                  <li><strong>Cookies:</strong> Session data, preferences, authentication tokens</li>
                </ul>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>2.3 Information from Third Parties</h3>
                <ul style={{ marginLeft: 'var(--space-6)' }}>
                  <li><strong>Professional Networks:</strong> LinkedIn and other business platforms</li>
                  <li><strong>Client Systems:</strong> Data accessed during project delivery (with authorization)</li>
                  <li><strong>Reference Checks:</strong> Information from professional references</li>
                </ul>
              </section>

              {/* How We Use Information */}
              <section>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <Users size={24} className="text-primary" />
                  <h2 style={{ margin: 0 }}>3. How We Use Your Information</h2>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>3.1 Service Delivery</h3>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li>Providing AI development and software engineering services</li>
                  <li>Project management, communication, and collaboration</li>
                  <li>Technical support and maintenance</li>
                  <li>Quality assurance and testing</li>
                </ul>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>3.2 Business Operations</h3>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li>Processing payments and managing accounts</li>
                  <li>Responding to inquiries and providing customer support</li>
                  <li>Improving our services and website functionality</li>
                  <li>Compliance with legal and regulatory requirements</li>
                </ul>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>3.3 Communication</h3>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li>Sending project updates and status reports</li>
                  <li>Providing technical documentation and deliverables</li>
                  <li>Sharing relevant industry insights (with consent)</li>
                  <li>Recruitment and career-related communications</li>
                </ul>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>3.4 Legal Basis for Processing</h3>
                <p>We process your data based on:</p>
                <ul style={{ marginLeft: 'var(--space-6)' }}>
                  <li><strong>Contract Performance:</strong> To deliver services you've contracted for</li>
                  <li><strong>Legitimate Interest:</strong> To operate our business and improve services</li>
                  <li><strong>Consent:</strong> Where you've explicitly agreed to specific uses</li>
                  <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <Globe size={24} className="text-primary" />
                  <h2 style={{ margin: 0 }}>4. Information Sharing and Disclosure</h2>
                </div>

                <p>We do not sell, trade, or rent your personal information. We may share your information in these limited circumstances:</p>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>4.1 Service Providers</h3>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li><strong>Cloud Hosting:</strong> GitHub, hosting providers for secure code storage</li>
                  <li><strong>Communication:</strong> Email providers, video conferencing platforms</li>
                  <li><strong>Payment Processing:</strong> Financial institutions and payment processors</li>
                  <li><strong>Analytics:</strong> Website analytics providers (when implemented)</li>
                </ul>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>4.2 Legal Requirements</h3>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li>When required by law or legal process</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>To prevent fraud or illegal activities</li>
                  <li>In connection with business transfers or mergers</li>
                </ul>

                <h3 style={{ fontSize: '1.25rem', marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>4.3 International Transfers</h3>
                <p>We may transfer your data internationally for business operations. When we do, we ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.</p>
              </section>

              {/* Data Security */}
              <section>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <Lock size={24} className="text-primary" />
                  <h2 style={{ margin: 0 }}>5. Data Security</h2>
                </div>

                <p>We implement appropriate technical and organizational measures to protect your personal information:</p>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li><strong>Encryption:</strong> Data in transit and at rest</li>
                  <li><strong>Access Controls:</strong> Limited access on a need-to-know basis</li>
                  <li><strong>Secure Systems:</strong> Regular security updates and monitoring</li>
                  <li><strong>Staff Training:</strong> Regular privacy and security awareness training</li>
                  <li><strong>Incident Response:</strong> Procedures for handling security breaches</li>
                </ul>

                <p>However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.</p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>6. Data Retention</h2>
                <p>We retain your personal information for as long as necessary to:</p>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li>Provide our services and fulfill contractual obligations</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Maintain business records for operational purposes</li>
                </ul>
                
                <p>Typical retention periods:</p>
                <ul style={{ marginLeft: 'var(--space-6)' }}>
                  <li><strong>Active Projects:</strong> Duration of engagement plus 3 years</li>
                  <li><strong>Financial Records:</strong> 7 years for tax and legal compliance</li>
                  <li><strong>Marketing Data:</strong> Until you opt-out or 3 years of inactivity</li>
                  <li><strong>Website Analytics:</strong> 26 months (industry standard)</li>
                </ul>
              </section>

              {/* Your Rights */}
              <section>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>7. Your Rights</h2>
                <p>You have the following rights regarding your personal information:</p>

                <div style={{
                  backgroundColor: 'var(--surface)',
                  padding: 'var(--space-6)',
                  borderRadius: 'var(--radius-lg)',
                  marginTop: 'var(--space-4)',
                  border: '1px solid var(--border)'
                }}>
                  <ul style={{ marginLeft: 'var(--space-4)' }}>
                    <li><strong>Access:</strong> Request copies of your personal data</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
                    <li><strong>Portability:</strong> Request transfer of your data in a structured format</li>
                    <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                    <li><strong>Restriction:</strong> Request limitation of processing activities</li>
                    <li><strong>Withdrawal:</strong> Withdraw consent for consent-based processing</li>
                  </ul>
                </div>

                <p style={{ marginTop: 'var(--space-4)' }}>
                  To exercise your rights, contact us at{' '}
                  <a href="mailto:Mo@MohammadOthman.com?subject=Data Protection Request" style={{ color: 'var(--primary)' }}>
                    Mo@MohammadOthman.com
                  </a>
                  {' '}with "Data Protection Request" in the subject line.
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>8. Cookies and Tracking</h2>
                <p>Our website may use cookies and similar tracking technologies to:</p>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website usage and performance</li>
                  <li>Provide secure access to client areas</li>
                  <li>Improve user experience and functionality</li>
                </ul>

                <p>You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.</p>
              </section>

              {/* International Users */}
              <section>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>9. International Users</h2>
                <p>We serve clients globally and comply with applicable data protection laws including:</p>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li><strong>GDPR (EU/UK):</strong> For European clients and visitors</li>
                  <li><strong>CCPA (California):</strong> For California residents</li>
                  <li><strong>Local Laws:</strong> Applicable regulations in client jurisdictions</li>
                </ul>

                <p>If you are located in the EU or UK, you have additional rights under GDPR, including the right to lodge a complaint with your local data protection authority.</p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>10. Children's Privacy</h2>
                <p>Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child, we will take steps to delete such information promptly.</p>
              </section>

              {/* Changes to Policy */}
              <section>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>11. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. We will notify you of material changes by:</p>
                <ul style={{ marginLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <li>Posting the updated policy on our website</li>
                  <li>Sending email notifications to active clients</li>
                  <li>Providing notice during your next interaction with us</li>
                </ul>
                <p>Your continued use of our services after changes become effective constitutes acceptance of the updated policy.</p>
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
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--space-3)',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <Mail size={24} className="text-primary" />
                    <h2 style={{ margin: 0 }}>12. Contact Us</h2>
                  </div>
                  
                  <p style={{ marginBottom: 'var(--space-4)' }}>
                    If you have questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  
                  <div style={{ color: 'var(--text-secondary)' }}>
                    <p><strong>Email:</strong> <a href="mailto:Mo@MohammadOthman.com" style={{ color: 'var(--primary)' }}>Mo@MohammadOthman.com</a></p>
                    <p><strong>Subject Line:</strong> Privacy Policy Inquiry</p>
                    <p><strong>Address:</strong> Nablus, West Bank, Palestine</p>
                  </div>
                  
                  <p style={{ 
                    fontSize: '0.875rem', 
                    color: 'var(--text-muted)',
                    marginTop: 'var(--space-4)' 
                  }}>
                    We will respond to privacy-related inquiries within 30 days.
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