'use client'

import React from 'react'
import { Header } from '@/components/blocks/header'
import FooterSection from '@/components/blocks/footer-section'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { motion } from 'framer-motion'

export default function PrivacyPolicyPage() {
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
                                   Privacy Policy
                              </motion.h1>
                              <motion.p
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8, delay: 0.2 }}
                                   className="text-lg text-neutral-400 font-light leading-relaxed"
                              >
                                   Last updated: 01-Jan-2026
                              </motion.p>
                         </div>

                         <motion.div 
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.3 }}
                              className="text-neutral-300"
                         >
                              <p className="leading-relaxed mb-6">
                                   Kshatra Labs (“Kshatra Labs”, “we”, “us”, “our”)
                              </p>
                              <p className="leading-relaxed mb-6">
                                   This Privacy Policy explains how Kshatra Labs collects, uses, discloses, and otherwise processes personal information when you visit or use kshatralabs.in (the “Site”), make a purchase, interact with our customer support, subscribe to marketing, or otherwise communicate with us (collectively, the “Services”).
                              </p>
                              <p className="leading-relaxed mb-6">
                                   For purposes of this Privacy Policy, “personal information” (or “personal data”) means information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked (directly or indirectly) with an individual.
                              </p>
                              <p className="leading-relaxed mb-4">This Policy applies to:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>Site visitors</li>
                                   <li>Customers and prospective customers</li>
                                   <li>Business customers and their employees/representatives (B2B contacts)</li>
                                   <li>Individuals who contact us for support, warranty/RMA, or technical assistance</li>
                              </ul>
                              <p className="leading-relaxed mb-6">
                                   If you do not agree with this Privacy Policy, do not use the Services.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">1) Who we are (Controller / Data Fiduciary)</h2>
                              <p className="leading-relaxed mb-4">Entity: Kshatra Labs<br/>Address: Autonomous Systems Facility, Bangalore, India.<br/>Email: <a href="mailto:contact@kshatralabs.in" className="text-blue-400 hover:text-blue-300 transition-colors">contact@kshatralabs.in</a><br/>Phone: +91 97304 58528</p>
                              <p className="leading-relaxed mb-4">Where laws use specific terms:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>Under the GDPR/UK GDPR, we are the Data Controller.</li>
                                   <li>Under India’s Digital Personal Data Protection Act, 2023 and related rules, we are the Data Fiduciary.</li>
                              </ul>
                              <p className="leading-relaxed mb-6">
                                   Data Protection/Privacy Contact (for all regions):<br/>
                                   Email: <a href="mailto:contact@kshatralabs.in" className="text-blue-400 hover:text-blue-300 transition-colors">contact@kshatralabs.in</a>
                              </p>
                              <p className="leading-relaxed mb-6">
                                   EU/UK Representative / DPO (if applicable): Not applicable.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">2) What we collect</h2>
                              <h3 className="text-xl font-semibold text-neutral-200 mb-2 mt-4">A. Information you provide directly</h3>
                              <p className="leading-relaxed mb-4">Depending on how you use the Services, you may provide:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>Contact details: name, email, phone number, billing/shipping address</li>
                                   <li>Account details: login credentials (Shopify/customer account), preferences</li>
                                   <li>Order and transaction information: items purchased, order history, invoices, payment confirmation (we typically do not receive full card details; payment processors handle them)</li>
                                   <li>Customer support and technical support content: emails, chats, call notes, support tickets, warranty/RMA information</li>
                                   <li>B2B information: company name, role/title, work email, VAT/GST details (where provided), procurement documents</li>
                                   <li>RMA/diagnostic submissions: installation photos, wiring images, telemetry logs, test notes. These can include personal information indirectly (e.g., names in filenames, email headers, IP addresses, device IDs).</li>
                              </ul>

                              <h3 className="text-xl font-semibold text-neutral-200 mb-2 mt-4">B. Information collected automatically (cookies and similar technologies)</h3>
                              <p className="leading-relaxed mb-4">When you use the Site, we may collect:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>Device and network data: IP address, browser type, OS, device identifiers, language, time zone</li>
                                   <li>Usage data: pages viewed, clicks, time on page, referrals, cart activity, and interactions</li>
                                   <li>Approximate location inferred from IP address</li>
                              </ul>
                              <p className="leading-relaxed mb-6">
                                   We collect this using cookies, pixels, tags, and similar technologies.
                              </p>

                              <h3 className="text-xl font-semibold text-neutral-200 mb-2 mt-4">C. Information we receive from third parties</h3>
                              <p className="leading-relaxed mb-4">We may receive personal information from:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>Payment processors (payment status/confirmation; not usually full card numbers)</li>
                                   <li>Shipping and logistics providers (delivery status, address validation)</li>
                                   <li>Analytics and advertising partners (where enabled) via cookies/pixels (e.g., conversions, campaign performance)</li>
                                   <li>Fraud-prevention and security vendors (risk signals)</li>
                              </ul>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">3) Why we use your information (purposes)</h2>
                              <p className="leading-relaxed mb-4">We use personal information to:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li><strong>Provide and operate the Services:</strong> process orders and payments, ship products, manage returns and RMAs, provide invoices</li>
                                   <li><strong>Provide customer support and technical assistance:</strong> troubleshooting, warranty evaluation, RMA processing, product safety advisories</li>
                                   <li><strong>Security and fraud prevention:</strong> detect fraud, secure accounts, protect the Site and our customers</li>
                                   <li><strong>Improve and develop products and Services:</strong> analytics, performance monitoring, operational reporting, product quality improvement</li>
                                   <li><strong>Marketing and communications:</strong> newsletters, product updates, marketing campaigns (subject to your choices/consent where required)</li>
                                   <li><strong>Legal and compliance:</strong> tax and accounting, regulatory compliance, responding to lawful requests, enforcing terms, protecting rights and safety</li>
                                   <li><strong>Business-to-business relationship management:</strong> quotations, fulfilment, account management, procurement communication</li>
                              </ul>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">4) Legal bases for processing (EU/UK)</h2>
                              <p className="leading-relaxed mb-4">Where the GDPR/UK GDPR applies, we rely on one or more of the following legal bases:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>Contract (to fulfil your order or provide support you requested)</li>
                                   <li>Legitimate interests (to operate, secure, and improve our business and Services, prevent fraud, and maintain customer relationships)</li>
                                   <li>Consent (for certain cookies/marketing where required)</li>
                                   <li>Legal obligation (tax, accounting, compliance, lawful requests)</li>
                              </ul>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">5) India (DPDP Act) notice essentials</h2>
                              <p className="leading-relaxed mb-6">
                                   Where India’s DPDP regime applies, we provide notice and process personal data for lawful purposes, typically based on consent or other lawful grounds as applicable, and we provide mechanisms to exercise rights and raise grievances. DPDP notice principles and operationalisation are reflected in official and reputable explanations of the DPDP framework.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">6) Cookies, targeted advertising, and preference controls</h2>
                              <p className="leading-relaxed mb-4">We use cookies and similar technologies to:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>run the Site and checkout</li>
                                   <li>remember preferences</li>
                                   <li>measure and improve performance</li>
                                   <li>(if enabled) support advertising and attribution</li>
                              </ul>
                              <p className="leading-relaxed mb-4">Your choices:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>Adjust cookie settings via your browser/device controls</li>
                                   <li>Use any cookie consent banner/settings we provide (where required)</li>
                                   <li>Opt out of marketing emails via the “unsubscribe” link (we may still send transactional messages)</li>
                              </ul>
                              <p className="leading-relaxed mb-6">
                                   <strong>Global Privacy Control (GPC):</strong> If you access the Site with a recognised opt-out preference signal such as GPC enabled, we will treat it as a request to opt out of certain types of sharing/targeted advertising where required by law (and where technically feasible).
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">7) How we disclose (share) personal information</h2>
                              <p className="leading-relaxed mb-4">We may disclose personal information to:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>Service providers: hosting, IT, analytics, customer support tools, cloud storage, email services</li>
                                   <li>Payment processors: to process payments</li>
                                   <li>Shipping/fulfilment partners: to deliver your order and manage logistics</li>
                                   <li>Marketing and advertising partners (if enabled): for campaign measurement and targeted advertising</li>
                                   <li>Professional advisers: legal, accounting, auditors</li>
                                   <li>Authorities / legal compliance: when required by law, court order, or to protect rights/safety</li>
                                   <li>Business transfers: in a merger, acquisition, restructuring, or sale of assets (subject to lawful safeguards)</li>
                              </ul>
                              <p className="leading-relaxed mb-6">
                                   We require service providers to process data only on our instructions and to apply appropriate confidentiality and security obligations.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">8) “Sale”, “Sharing”, and targeted advertising (California / some US states)</h2>
                              <p className="leading-relaxed mb-6">
                                   Some privacy laws (including California) define “sell” and “share” broadly to include certain advertising-related disclosures. California’s Attorney General guidance emphasises “notice at collection” and opt-out mechanisms where applicable.
                              </p>
                              <p className="leading-relaxed mb-4">
                                   If we engage in targeted advertising or similar activities that constitute “selling” or “sharing” under applicable law, you may have the right to opt out. Where required, we will provide:
                              </p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>a “Do Not Sell or Share My Personal Information” option, and/or</li>
                                   <li>an opt-out mechanism through our cookie preference tools.</li>
                              </ul>
                              <p className="leading-relaxed mb-6">
                                   Kshatra Labs does not sell personal information in exchange for money.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">9) Sensitive data</h2>
                              <p className="leading-relaxed mb-6">
                                   We do not intentionally collect “sensitive personal information” for the purpose of inferring characteristics about you. If you submit information that could be considered sensitive (e.g., through support communications), we use it only to address your request and for lawful compliance.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">10) International transfers</h2>
                              <p className="leading-relaxed mb-6">
                                   We are based in India, and our service providers may process data in other countries. Where required (e.g., EEA/UK transfers), we use recognised safeguards such as Standard Contractual Clauses or equivalent mechanisms, unless the destination is recognised as providing adequate protection under applicable law.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">11) Data retention</h2>
                              <p className="leading-relaxed mb-4">We retain personal information only as long as necessary for:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>fulfilling orders and providing support</li>
                                   <li>warranty/RMA and quality control</li>
                                   <li>legal, tax, and accounting obligations</li>
                                   <li>dispute resolution and enforcement</li>
                              </ul>
                              <p className="leading-relaxed mb-6">
                                   When no longer needed, we delete, anonymise, or securely archive information.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">12) Security</h2>
                              <p className="leading-relaxed mb-6">
                                   We implement reasonable administrative, technical, and physical safeguards designed to protect personal information. No system is perfectly secure, and we cannot guarantee absolute security. Avoid sending sensitive information via unencrypted channels.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">13) Children</h2>
                              <p className="leading-relaxed mb-6">
                                   The Services are not intended for children, and we do not knowingly collect personal information from children. If you believe a child has provided us personal information, contact us and we will take appropriate steps to delete it.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">14) Your rights (by region)</h2>
                              <p className="leading-relaxed mb-4">Depending on your location and applicable law, you may have rights including:</p>

                              <h3 className="text-xl font-semibold text-neutral-200 mb-2 mt-4">EU/UK (GDPR/UK GDPR)</h3>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>Access, correction, deletion</li>
                                   <li>Objection and restriction</li>
                                   <li>Data portability</li>
                                   <li>Withdraw consent (where consent is the basis)</li>
                                   <li>Lodge a complaint with your data protection authority</li>
                              </ul>

                              <h3 className="text-xl font-semibold text-neutral-200 mb-2 mt-4">India (DPDP)</h3>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>Access to information about processing (as applicable)</li>
                                   <li>Correction and erasure (as applicable)</li>
                                   <li>Grievance redressal and complaint pathways</li>
                              </ul>

                              <h3 className="text-xl font-semibold text-neutral-200 mb-2 mt-4">California and certain US states</h3>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>Right to know/access</li>
                                   <li>Right to delete</li>
                                   <li>Right to correct (in some cases)</li>
                                   <li>Right to opt out of sale/sharing/targeted advertising (where applicable)</li>
                                   <li>Non-discrimination for exercising rights</li>
                              </ul>

                              <p className="leading-relaxed mb-4"><strong>How to exercise rights</strong></p>
                              <p className="leading-relaxed mb-4">Email: <a href="mailto:contact@kshatralabs.in" className="text-blue-400 hover:text-blue-300 transition-colors">contact@kshatralabs.in</a> with:</p>
                              <ul className="list-disc list-inside mb-6 space-y-2">
                                   <li>your name</li>
                                   <li>email used on the order/account</li>
                                   <li>the request type (access/delete/correct/opt-out)</li>
                              </ul>
                              <p className="leading-relaxed mb-6">
                                   We may request verification to protect against fraudulent requests. You may use an authorised agent where allowed by law, subject to verification.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">15) Third-party links</h2>
                              <p className="leading-relaxed mb-6">
                                   The Services may link to third-party websites or tools. We are not responsible for their privacy practices. Review their policies before providing information.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">16) Changes to this Privacy Policy</h2>
                              <p className="leading-relaxed mb-6">
                                   We may update this Privacy Policy from time to time for operational, legal, or regulatory reasons. We will post the updated version on the Site and update the “Last updated” date. Some laws expect periodic updates.
                              </p>

                              <h2 className="text-2xl font-bold text-white mb-4 mt-8">17) Contact and complaints</h2>
                              <p className="leading-relaxed mb-6">
                                   Privacy contact: <a href="mailto:contact@kshatralabs.in" className="text-blue-400 hover:text-blue-300 transition-colors">contact@kshatralabs.in</a><br/>
                                   Phone: +91 97304 58528<br/>
                                   Postal address: KSHATRA LABS, Autonomous Systems Facility, Bangalore, India
                              </p>
                              <p className="leading-relaxed mb-6">
                                   If you have a complaint, contact us first so we can investigate and respond. Where applicable, you may also lodge a complaint with your local data protection authority or the appropriate body under Indian law.
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
