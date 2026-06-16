'use client'

import React from 'react'
import { Header } from '@/components/blocks/header'
import FooterSection from '@/components/blocks/footer-section'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { motion } from 'framer-motion'

export default function TermsOfServicePage() {
     return (
          <div className="relative min-h-screen bg-black text-white selection:bg-white/20 overflow-hidden font-sans">
               {/* Fixed Background */}
               <div className="fixed inset-0 z-0 opacity-40">
                    <BackgroundPaths title="" />
               </div>

               <Header />

               <main className="relative z-10 pt-32 md:pt-40 pb-24 px-6 md:px-12 text-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                         <div className="space-y-6 mb-16">
                              <motion.h1
                                   initial={{ opacity: 0, y: 30 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 1, delay: 0.1 }}
                                   className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6"
                                   style={{ fontFamily: 'var(--font-space-grotesk)' }}
                              >
                                   Website Terms of Use
                              </motion.h1>
                              <motion.p
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8, delay: 0.2 }}
                                   className="text-lg text-neutral-400 font-light leading-relaxed"
                              >
                                   Effective Date: 01-Jan-2026
                              </motion.p>
                         </div>

                         <motion.div 
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.3 }}
                              className="text-neutral-300"
                         >
                              <p className="leading-relaxed mb-6">
                                   These Terms of Service (“Terms”) govern access to and use of the website kshatralabs.in and all associated services, documentation, tools, and digital content operated by Kshatra Labs (“Kshatra Labs”, “Company”, “we”, “us”, or “our”).
                              </p>
                              <p className="leading-relaxed mb-6">
                                   By accessing or using the website or any related services (collectively, the “Services”), you agree to be bound by these Terms. If you do not agree, you must immediately discontinue use of the Services.
                              </p>
                              <p className="leading-relaxed mb-6">
                                   These Terms govern website use only and are separate from:
                              </p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>Terms of Sale</li>
                                   <li>Warranty & Liability Agreement</li>
                                   <li>Privacy Policy</li>
                              </ul>
                              <p className="leading-relaxed mb-12">
                                   which govern product transactions and data practices.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">1. Company Identification</h2>
                              <p className="leading-relaxed mb-6">
                                   KSHATRA LABS<br/>
                                   Autonomous Systems Facility<br/>
                                   Bangalore, India<br/><br/>
                                   Phone: +91 97304 58528
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">2. Eligibility</h2>
                              <p className="leading-relaxed mb-4">The Services are intended for use by:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>individuals aged 18 years or older</li>
                                   <li>legally authorised representatives of businesses or institutions</li>
                              </ul>
                              <p className="leading-relaxed mb-6">
                                   By using the Services you represent that you have the legal authority to enter into binding agreements.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">3. Nature of the Website</h2>
                              <p className="leading-relaxed mb-4">The website provides:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>technical information</li>
                                   <li>product specifications</li>
                                   <li>documentation</li>
                                   <li>engineering resources</li>
                                   <li>purchasing capabilities</li>
                                   <li>support channels</li>
                              </ul>
                              <p className="leading-relaxed mb-6">
                                   All information is provided for informational and evaluation purposes only and does not constitute engineering certification, design approval, or regulatory compliance assurance.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">4. Permitted Use</h2>
                              <p className="leading-relaxed mb-4">Users may access the website for legitimate purposes including:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>learning about Kshatra Labs products</li>
                                   <li>evaluating technical specifications</li>
                                   <li>placing orders</li>
                                   <li>requesting technical support</li>
                                   <li>communicating with the Company</li>
                              </ul>
                              <p className="leading-relaxed mb-6">
                                   Any use beyond these purposes is prohibited unless explicitly authorised in writing.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">5. Prohibited Activities</h2>
                              <p className="leading-relaxed mb-4">You agree not to:</p>
                              <h3 className="text-xl font-semibold text-neutral-200 mb-2 mt-4">Technical misuse</h3>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>scrape or harvest technical data</li>
                                   <li>use automated bots or crawlers without permission</li>
                                   <li>copy engineering documentation for competitive development</li>
                                   <li>reverse engineer product designs based on website content</li>
                                   <li>reproduce schematics, firmware descriptions, or engineering insights</li>
                              </ul>

                              <h3 className="text-xl font-semibold text-neutral-200 mb-2 mt-4">Security violations</h3>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>attempt unauthorised access to servers or databases</li>
                                   <li>probe vulnerabilities or bypass security systems</li>
                                   <li>introduce malware or harmful code</li>
                              </ul>

                              <h3 className="text-xl font-semibold text-neutral-200 mb-2 mt-4">Competitive misuse</h3>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>use website data for competing product development</li>
                                   <li>benchmark Kshatra Labs products using unpublished or misrepresented methods</li>
                                   <li>misrepresent Kshatra Labs specifications or documentation</li>
                              </ul>

                              <h3 className="text-xl font-semibold text-neutral-200 mb-2 mt-4">Data exploitation</h3>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>train AI models or data systems on website engineering data without written consent</li>
                              </ul>

                              <p className="leading-relaxed mb-4">Violation may result in:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>termination of access</li>
                                   <li>legal action</li>
                                   <li>reporting to authorities where applicable.</li>
                              </ul>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">6. Technical Documentation Disclaimer</h2>
                              <p className="leading-relaxed mb-4">Engineering data available on this website may include:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>product specifications</li>
                                   <li>performance curves</li>
                                   <li>application notes</li>
                                   <li>integration guidelines</li>
                                   <li>test data</li>
                              </ul>

                              <p className="leading-relaxed mb-4">These materials:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>represent controlled internal test conditions</li>
                                   <li>may change without notice</li>
                                   <li>may vary depending on system integration</li>
                              </ul>

                              <p className="leading-relaxed mb-6">
                                   Kshatra Labs does not guarantee system-level outcomes resulting from use of this information.
                              </p>

                              <p className="leading-relaxed mb-4">Users remain responsible for:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>validating designs</li>
                                   <li>performing safety testing</li>
                                   <li>ensuring regulatory compliance.</li>
                              </ul>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">7. Product Safety Notice</h2>
                              <p className="leading-relaxed mb-4">Products referenced on this website may involve:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>rotating propulsion systems</li>
                                   <li>high current electronics</li>
                                   <li>high temperature components</li>
                                   <li>fuel combustion systems (IC engines)</li>
                              </ul>

                              <p className="leading-relaxed mb-4">Improper integration may result in:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>equipment damage</li>
                                   <li>fire</li>
                                   <li>serious injury or death</li>
                              </ul>

                              <p className="leading-relaxed mb-6">
                                   The website does not provide complete safety guidance for system design. Users must ensure appropriate safety procedures and testing protocols.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">8. Intellectual Property</h2>
                              <p className="leading-relaxed mb-4">All website content including:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>designs</li>
                                   <li>text</li>
                                   <li>graphics</li>
                                   <li>documentation</li>
                                   <li>photographs</li>
                                   <li>engineering data</li>
                                   <li>software elements</li>
                                   <li>trademarks and branding</li>
                              </ul>

                              <p className="leading-relaxed mb-6">
                                   is the intellectual property of Kshatra Labs or its licensors.
                              </p>

                              <p className="leading-relaxed mb-4">You may not:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>reproduce or redistribute content</li>
                                   <li>create derivative works</li>
                                   <li>replicate engineering designs</li>
                                   <li>commercially exploit website content</li>
                              </ul>

                              <p className="leading-relaxed mb-6">
                                   without written permission. Limited permission is granted to download materials solely for internal evaluation purposes.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">9. User Submissions</h2>
                              <p className="leading-relaxed mb-4">Users may submit:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>feedback</li>
                                   <li>reviews</li>
                                   <li>support requests</li>
                                   <li>technical inquiries</li>
                              </ul>

                              <p className="leading-relaxed mb-6">
                                   By submitting content you grant Kshatra Labs a non-exclusive, worldwide, royalty-free license to use such submissions for operational or improvement purposes.
                              </p>

                              <p className="leading-relaxed mb-4">Users must not submit content that:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>infringes intellectual property</li>
                                   <li>contains malicious code</li>
                                   <li>violates applicable laws.</li>
                              </ul>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">10. Third-Party Links</h2>
                              <p className="leading-relaxed mb-4">
                                   The website may link to third-party platforms or services. Kshatra Labs does not control and is not responsible for:
                              </p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>content</li>
                                   <li>security</li>
                                   <li>policies</li>
                              </ul>
                              <p className="leading-relaxed mb-6">
                                   of external websites. Accessing third-party websites is at your own risk.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">11. Website Availability</h2>
                              <p className="leading-relaxed mb-4">
                                   Kshatra Labs does not guarantee uninterrupted availability of the Services. The website may be unavailable due to:
                              </p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>maintenance</li>
                                   <li>software upgrades</li>
                                   <li>infrastructure failures</li>
                                   <li>cyber incidents</li>
                                   <li>external service provider outages.</li>
                              </ul>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">12. Disclaimer of Warranties</h2>
                              <p className="leading-relaxed mb-4">
                                   The Services and website content are provided “as is” and “as available.” Kshatra Labs makes no warranties regarding:
                              </p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>completeness or accuracy of website content</li>
                                   <li>uninterrupted operation</li>
                                   <li>compatibility with user systems</li>
                              </ul>
                              <p className="leading-relaxed mb-6">
                                   Product warranties are governed exclusively by the Terms of Sale and Warranty Agreement.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">13. Limitation of Liability</h2>
                              <p className="leading-relaxed mb-4">
                                   To the maximum extent permitted by law, Kshatra Labs shall not be liable for:
                              </p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>loss of profits</li>
                                   <li>business interruption</li>
                                   <li>loss of data</li>
                                   <li>engineering redesign costs</li>
                                   <li>reliance on website technical information</li>
                                   <li>indirect or consequential damages</li>
                              </ul>
                              <p className="leading-relaxed mb-6">
                                   arising from website use. Nothing in these Terms excludes liability where exclusion is prohibited by law.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">14. Export Control</h2>
                              <p className="leading-relaxed mb-6">
                                   Information and products presented on this website may be subject to export control laws and international trade restrictions. Users agree not to use or transfer information in violation of such laws.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">15. Security Monitoring</h2>
                              <p className="leading-relaxed mb-4">
                                   Kshatra Labs may monitor website activity to detect misuse or security threats. We reserve the right to:
                              </p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>suspend access</li>
                                   <li>investigate suspicious activity</li>
                                   <li>cooperate with law enforcement authorities.</li>
                              </ul>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">16. Privacy</h2>
                              <p className="leading-relaxed mb-6">
                                   Use of the Services is subject to the Kshatra Labs Privacy Policy, which governs collection and processing of personal data.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">17. Governing Law</h2>
                              <p className="leading-relaxed mb-6">
                                   These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Bangalore, Karnataka, unless applicable consumer laws require otherwise.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">18. Changes to Terms</h2>
                              <p className="leading-relaxed mb-6">
                                   Kshatra Labs may update these Terms at any time. The updated version will be published on the website with a revised effective date. Continued use of the Services constitutes acceptance of the updated Terms.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">19. Severability</h2>
                              <p className="leading-relaxed mb-6">
                                   If any provision of these Terms is deemed invalid or unenforceable, the remaining provisions shall remain in full force.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">20. Contact</h2>
                              <p className="leading-relaxed mb-6">
                                   KSHATRA LABS<br/>
                                   Autonomous Systems Facility<br/>
                                   Bangalore, India<br/><br/>
                                   Phone: +91 97304 58528<br/><br/>
                                   Email: <a href="mailto:contact@kshatralabs.in" className="text-blue-400 hover:text-blue-300 transition-colors">contact@kshatralabs.in</a>
                              </p>
                         </motion.div>
                    </div>
               </main>

               {/* Grid Overlay */}
               <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
               <FooterSection />
          </div>
     )
}
