'use client'

import React, { useState, useEffect } from 'react'
import { Header } from '@/components/blocks/header'
import FooterSection from '@/components/blocks/footer-section'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { motion } from 'framer-motion'

/* ─────────────────────────────────────────────────────────────
   TOC data — num drives §XX in both sidebar and headings
───────────────────────────────────────────────────────────── */

const TOC = [
  { id: 'introduction',        num: '01', label: 'Introduction' },
  { id: 'who-we-are',          num: '02', label: 'Who We Are' },
  { id: 'what-we-collect',     num: '03', label: 'What We Collect' },
  { id: 'why-we-use',          num: '04', label: 'Why We Use Your Information' },
  { id: 'legal-bases',         num: '05', label: 'Legal Bases (DPDP Act 2023)' },
  { id: 'defense-procurement', num: '06', label: 'Government & Defense Data' },
  { id: 'export-control',      num: '07', label: 'Export Control & SCOMET' },
  { id: 'cross-border',        num: '08', label: 'Cross-Border Transfers' },
  { id: 'cookies',             num: '09', label: 'Cookies & Tracking' },
  { id: 'how-we-share',        num: '10', label: 'How We Disclose Information' },
  { id: 'dpa',                 num: '11', label: 'Data Processor Agreements' },
  { id: 'sensitive-data',      num: '12', label: 'Sensitive Personal Data' },
  { id: 'opsec',               num: '13', label: 'Operational Security Notice' },
  { id: 'retention',           num: '14', label: 'Data Retention' },
  { id: 'security',            num: '15', label: 'Security' },
  { id: 'breach',              num: '16', label: 'Breach Notification' },
  { id: 'children',            num: '17', label: 'Children' },
  { id: 'your-rights',         num: '18', label: 'Your Rights' },
  { id: 'third-party',         num: '19', label: 'Third-Party Links' },
  { id: 'changes',             num: '20', label: 'Changes to This Policy' },
  { id: 'contact',             num: '21', label: 'Contact & Complaints' },
] as const

const SECTION_NUMS: Record<string, string> = Object.fromEntries(
  TOC.map(({ id, num }) => [id, num])
)

/* ─────────────────────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────────────────────── */

function Divider() {
  return (
    <div className="my-12 flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-amber-500/20 to-transparent" />
      <div className="w-1 h-1 bg-amber-500/40 rotate-45 shrink-0" />
      <div className="h-px flex-1 bg-gradient-to-l from-amber-500/20 to-transparent" />
    </div>
  )
}

function SectionHeading({
  id,
  children,
  warning = false,
}: {
  id: string
  children: React.ReactNode
  warning?: boolean
}) {
  const num = SECTION_NUMS[id]
  return (
    <div
      className={`border-l-2 pl-5 mb-5 mt-2 ${
        warning ? 'border-red-600/70' : 'border-amber-500'
      }`}
    >
      <div className="flex items-baseline gap-3">
        {num && (
          <span
            className={`font-mono text-xs tracking-widest shrink-0 ${
              warning ? 'text-red-500' : 'text-amber-500'
            }`}
          >
            §{num}
          </span>
        )}
        <h2
          className={`text-xl md:text-2xl font-bold ${
            warning ? 'text-red-200' : 'text-white'
          }`}
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          {children}
        </h2>
      </div>
    </div>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-3 text-sm font-semibold text-neutral-200 mb-3 mt-7">
      <span className="w-4 h-px bg-amber-500/50 shrink-0" />
      {children}
    </h3>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="leading-relaxed text-neutral-400 mb-5 text-[15px]">{children}</p>
  )
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc list-outside pl-5 mb-5 space-y-2 text-neutral-400 leading-relaxed text-[15px] marker:text-amber-500">
      {children}
    </ul>
  )
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors duration-200"
    >
      {children}
    </a>
  )
}

function AlertBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 mb-2 bg-red-950/25 border border-red-800/40 rounded-sm px-5 py-4">
      <div className="flex items-start gap-3">
        <span className="font-mono text-[10px] tracking-widest text-red-500 uppercase shrink-0 mt-0.5">
          ⚠ NOTICE
        </span>
        <div className="text-red-200/75 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

function InfoCard({
  label,
  children,
  accent = false,
}: {
  label: string
  children: React.ReactNode
  accent?: boolean
}) {
  return (
    <div
      className={`rounded-sm px-5 py-5 mb-5 ${
        accent
          ? 'bg-neutral-900/60 border border-amber-500/20'
          : 'bg-neutral-900/60 border border-neutral-800'
      }`}
    >
      <p className="font-mono text-[10px] tracking-widest uppercase text-amber-500/70 mb-3">
        {label}
      </p>
      {children}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────── */

export default function PrivacyPolicyPage() {
  const [activeId, setActiveId] = useState<string>('')
  const [tocOpen, setTocOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )
    TOC.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-amber-500/20 overflow-x-hidden font-sans">

      {/* Ambient background */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <BackgroundPaths title="" />
      </div>

      {/* Tactical amber grid */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245, 158, 11, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Radial vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-[2]"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, transparent 40%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      <Header />

      <main className="relative z-10 pt-32 md:pt-44 pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex gap-12 xl:gap-16">

          {/* ── Sticky sidebar TOC — desktop only ── */}
          <aside className="hidden xl:block w-56 shrink-0">
            <div className="sticky top-36">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-4 h-px bg-amber-500/60" />
                <p className="font-mono text-[10px] uppercase tracking-widest text-amber-500/60">
                  Contents
                </p>
              </div>
              <nav className="space-y-0.5">
                {TOC.map(({ id, num, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`flex items-start gap-2.5 text-[11px] py-1.5 pl-3 border-l transition-all duration-200 ${
                      activeId === id
                        ? 'border-amber-500 text-amber-400'
                        : 'border-neutral-800 text-neutral-600 hover:text-neutral-300 hover:border-neutral-600'
                    }`}
                  >
                    <span
                      className={`font-mono shrink-0 mt-0.5 ${
                        activeId === id ? 'text-amber-500/60' : 'opacity-30'
                      }`}
                    >
                      {num}
                    </span>
                    <span className="leading-snug">{label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* ── Main content ── */}
          <div className="flex-1 min-w-0 max-w-3xl">

            {/* Document metadata strip */}
            

            {/* Title block */}
            <div className="mb-14">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-px w-8 bg-amber-500/60" />
                <span className="font-mono text-[11px] tracking-[0.25em] text-amber-500/60 uppercase">
                  Legal Documentation
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="text-5xl md:text-[4.5rem] lg:text-[5.5rem] font-black uppercase leading-[0.92] tracking-tight text-white mb-7"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Privacy<br />
                <span className="text-amber-500">Policy</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-600 uppercase tracking-widest"
              >
                <span>Last updated: 17 Jun 2026</span>
                <span className="text-neutral-800">·</span>
                <span>Effective: 17 Jun 2026</span>
                <span className="text-neutral-800">·</span>
                <span>Version 2.0</span>
              </motion.div>
            </div>

            {/* Mobile TOC */}
            <div className="xl:hidden mb-10">
              <button
                onClick={() => setTocOpen((v) => !v)}
                className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-500 border border-neutral-800 px-4 py-2.5 w-full hover:border-amber-500/40 hover:text-neutral-300 transition-colors uppercase"
              >
                <span className="flex-1 text-left">Table of Contents</span>
                <span className="text-amber-500/60">{tocOpen ? '▲' : '▼'}</span>
              </button>
              {tocOpen && (
                <nav className="border border-t-0 border-neutral-800 px-4 py-3 space-y-0.5">
                  {TOC.map(({ id, num, label }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={() => setTocOpen(false)}
                      className="flex items-center gap-2.5 text-xs text-neutral-500 hover:text-amber-400 transition-colors py-1.5"
                    >
                      <span className="font-mono text-amber-500/40 shrink-0">{num}</span>
                      {label}
                    </a>
                  ))}
                </nav>
              )}
            </div>

            {/* ─── All sections ─── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >

              {/* §01 Introduction */}
              <section id="introduction" className="scroll-mt-40">
                <SectionHeading id="introduction">Introduction</SectionHeading>
                <P>
                  Kshatra Labs (&ldquo;Kshatra Labs&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
                  &ldquo;our&rdquo;) is a defence technology company headquartered in Bengaluru,
                  India, focused on autonomous systems, precision hardware, and advanced defence
                  solutions. We are committed to protecting the personal information of everyone who
                  interacts with us — whether you are a site visitor, customer, business partner,
                  government procurement contact, or technical user.
                </P>
                <P>
                  This Privacy Policy explains how Kshatra Labs collects, uses, discloses, retains,
                  and otherwise processes personal information when you visit or use{' '}
                  <A href="https://kshatralabs.in">kshatralabs.in</A> (the &ldquo;Site&rdquo;),
                  make a purchase, interact with customer or technical support, submit a warranty or
                  RMA request, subscribe to communications, or otherwise engage with us
                  (collectively, the &ldquo;Services&rdquo;).
                </P>
                <P>
                  &ldquo;Personal information&rdquo; means any information that identifies, relates
                  to, describes, or could reasonably be linked — directly or indirectly — with a
                  specific individual.
                </P>
                <P>This Policy applies to:</P>
                <UL>
                  <li>Site visitors and general enquirers</li>
                  <li>Customers and prospective customers (individual and business)</li>
                  <li>
                    Government, defence, and institutional procurement contacts and their authorised
                    representatives
                  </li>
                  <li>
                    Business customers and their employees/representatives (B2B contacts)
                  </li>
                  <li>
                    Individuals who contact us for support, warranty/RMA, or technical assistance
                  </li>
                  <li>Research partners, integrators, and authorised third-party collaborators</li>
                </UL>
                <P>
                  This Policy does <strong>not</strong> govern data processed under classified
                  government contracts or programmes; such handling is governed by the relevant
                  contract, applicable national security law, and data agreements executed with the
                  contracting authority.
                </P>
                <P>
                  If you do not agree with this Privacy Policy, please do not use the Services.
                </P>
              </section>

              <Divider />

              {/* §02 Who We Are */}
              <section id="who-we-are" className="scroll-mt-40">
                <SectionHeading id="who-we-are">Who We Are (Data Fiduciary)</SectionHeading>
                <InfoCard label="Data Fiduciary">
                  <p className="text-neutral-300 leading-loose text-sm font-mono">
                    <span className="text-white font-semibold">Entity:</span> Kshatra Labs<br />
                    <span className="text-white font-semibold">Registered Address:</span>{' '}
                    <span className="text-neutral-500">[Insert MCA/ROC-registered legal address], Bengaluru, Karnataka, India</span><br />
                    <span className="text-white font-semibold">Operational Facility:</span>{' '}
                    Autonomous Systems Facility, Bengaluru, Karnataka, India<br />
                    <span className="text-white font-semibold">Email:</span>{' '}
                    <A href="mailto:contact@kshatralabs.in">contact@kshatralabs.in</A><br />
                    <span className="text-white font-semibold">Phone:</span> +91 97304 58528
                  </p>
                </InfoCard>
                <P>
                  Under India&rsquo;s Digital Personal Data Protection Act, 2023 (&ldquo;DPDP
                  Act&rdquo;) and applicable rules, Kshatra Labs is the{' '}
                  <strong className="text-white">Data Fiduciary</strong> responsible for your
                  personal data.
                </P>
                <P>
                  <strong className="text-white">Grievance Officer / Data Protection Contact</strong>
                  <br />
                  Email:{' '}
                  <A href="mailto:contact@kshatralabs.in">contact@kshatralabs.in</A> — Subject:{' '}
                  <em>Privacy Grievance</em>
                  <br />
                  We acknowledge grievances within{' '}
                  <strong className="text-white">48 hours</strong> and aim to resolve them within{' '}
                  <strong className="text-white">30 days</strong>, in accordance with the DPDP Act.
                </P>
              </section>

              <Divider />

              {/* §03 What We Collect */}
              <section id="what-we-collect" className="scroll-mt-40">
                <SectionHeading id="what-we-collect">What We Collect</SectionHeading>

                <SubHeading>A. Information you provide directly</SubHeading>
                <UL>
                  <li>
                    <strong className="text-neutral-200">Contact details:</strong> name, email
                    address, phone number, billing and shipping address
                  </li>
                  <li>
                    <strong className="text-neutral-200">Account details:</strong> login
                    credentials, role, preferences, and communication history
                  </li>
                  <li>
                    <strong className="text-neutral-200">Order and transaction information:</strong>{' '}
                    items purchased, quantities, order history, invoices, and payment confirmation.
                    We do not receive or store full card numbers — payment processors handle card
                    data under their own PCI-DSS compliance.
                  </li>
                  <li>
                    <strong className="text-neutral-200">
                      Customer and technical support content:
                    </strong>{' '}
                    emails, chat transcripts, call notes, support tickets, warranty claims, and RMA
                    submissions including device serial numbers
                  </li>
                  <li>
                    <strong className="text-neutral-200">B2B and procurement information:</strong>{' '}
                    company or organisation name, job title/role, work email, GSTIN/TIN (where
                    provided), procurement documents, signed agreements and NDAs, and authorised
                    signatory details
                  </li>
                  <li>
                    <strong className="text-neutral-200">RMA and diagnostic submissions:</strong>{' '}
                    installation photographs, wiring diagrams, system configuration files, telemetry
                    logs, and test notes. These may contain personal information indirectly (e.g.,
                    names in filenames, metadata, email headers, IP addresses, or device IDs).
                  </li>
                  <li>
                    <strong className="text-neutral-200">
                      Government and institutional contact information:
                    </strong>{' '}
                    name, designation, department, official email, and information provided during
                    procurement engagement. See the{' '}
                    <A href="#defense-procurement">Government &amp; Defense Data</A> section.
                  </li>
                </UL>

                <SubHeading>B. Information collected automatically</SubHeading>
                <UL>
                  <li>
                    <strong className="text-neutral-200">Device and network data:</strong> IP
                    address, browser type and version, OS, device identifiers, screen resolution,
                    language, and time zone
                  </li>
                  <li>
                    <strong className="text-neutral-200">Usage data:</strong> pages viewed, links
                    clicked, time on page, scroll depth, referral source, and cart interactions
                  </li>
                  <li>
                    <strong className="text-neutral-200">Approximate location</strong> inferred from
                    IP address (city/region level only; no GPS)
                  </li>
                  <li>
                    <strong className="text-neutral-200">Session and performance data:</strong> page
                    load times, errors, and crash reports
                  </li>
                </UL>
                <P>
                  Collected via cookies, web beacons, pixels, and similar technologies. See the{' '}
                  <A href="#cookies">Cookies &amp; Tracking</A> section for your controls.
                </P>

                <SubHeading>C. Information we receive from third parties</SubHeading>
                <UL>
                  <li>
                    <strong className="text-neutral-200">Payment processors</strong> (e.g.,
                    Razorpay): payment status and confirmation; not full card numbers
                  </li>
                  <li>
                    <strong className="text-neutral-200">
                      Shipping and logistics partners:
                    </strong>{' '}
                    delivery status, tracking events, and address validation
                  </li>
                  <li>
                    <strong className="text-neutral-200">
                      Analytics and advertising partners
                    </strong>{' '}
                    (where enabled): aggregated campaign performance and attribution signals
                  </li>
                  <li>
                    <strong className="text-neutral-200">Fraud and security vendors:</strong> risk
                    scores used to protect our customers and systems
                  </li>
                  <li>
                    <strong className="text-neutral-200">Public sources:</strong> company
                    registries, GeM portal, and professional directories for B2B verification
                  </li>
                </UL>

                <SubHeading>D. Product telemetry and operational data</SubHeading>
                <P>
                  Certain Kshatra Labs hardware products (autonomous systems, sensor units, IoT
                  devices) may transmit operational telemetry to our infrastructure for diagnostics,
                  firmware updates, and performance monitoring. This may include:
                </P>
                <UL>
                  <li>Device identifiers, firmware version, and uptime</li>
                  <li>System health metrics, error codes, and sensor readings</li>
                  <li>Network identifiers (e.g., local IP, MAC address of the device)</li>
                  <li>Usage patterns (e.g., operational hours, mode of use)</li>
                </UL>
                <P>
                  Product telemetry scope is documented in the relevant product manual and data
                  sheet. Customers operating products in sensitive environments should review
                  telemetry settings and, where necessary, operate in an offline or air-gapped
                  configuration per the product manual.
                </P>
              </section>

              <Divider />

              {/* §04 Why We Use */}
              <section id="why-we-use" className="scroll-mt-40">
                <SectionHeading id="why-we-use">Why We Use Your Information</SectionHeading>
                <UL>
                  <li>
                    <strong className="text-neutral-200">
                      Provide and operate the Services:
                    </strong>{' '}
                    process orders and payments, arrange shipping, manage returns and RMAs, generate
                    invoices, and fulfil contractual obligations
                  </li>
                  <li>
                    <strong className="text-neutral-200">
                      Customer and technical support:
                    </strong>{' '}
                    troubleshoot issues, evaluate warranty claims, process RMAs, issue product
                    safety advisories, and provide firmware/software updates
                  </li>
                  <li>
                    <strong className="text-neutral-200">Security and fraud prevention:</strong>{' '}
                    detect, investigate, and prevent fraudulent transactions, abuse, and security
                    threats
                  </li>
                  <li>
                    <strong className="text-neutral-200">
                      Product and service improvement:
                    </strong>{' '}
                    analytics, usage monitoring, telemetry analysis, and product quality improvement
                  </li>
                  <li>
                    <strong className="text-neutral-200">Research and development:</strong>{' '}
                    improving autonomous systems, sensor performance, and related technologies,
                    using anonymised data where possible
                  </li>
                  <li>
                    <strong className="text-neutral-200">Marketing and communications:</strong>{' '}
                    newsletters, product launches, and defence-sector updates — subject to your
                    consent where required by law
                  </li>
                  <li>
                    <strong className="text-neutral-200">Legal and compliance:</strong> tax records,
                    accounting, statutory filings, responding to lawful government requests, and
                    enforcing our terms
                  </li>
                  <li>
                    <strong className="text-neutral-200">
                      Government and defence procurement:
                    </strong>{' '}
                    managing bids, quotations, GeM empanelment, contract execution, and
                    institutional account management
                  </li>
                  <li>
                    <strong className="text-neutral-200">Export compliance:</strong> screening
                    transactions against India&rsquo;s SCOMET list and applicable international
                    trade control obligations. See the{' '}
                    <A href="#export-control">Export Control</A> section.
                  </li>
                </UL>
              </section>

              <Divider />

              {/* §05 Legal Bases */}
              <section id="legal-bases" className="scroll-mt-40">
                <SectionHeading id="legal-bases">
                  Legal Bases for Processing (DPDP Act 2023)
                </SectionHeading>
                <P>Under India&rsquo;s DPDP Act, we process personal data based on:</P>
                <UL>
                  <li>
                    <strong className="text-neutral-200">Consent:</strong> where you have given
                    free, specific, informed, and unambiguous consent — e.g., marketing emails or
                    non-essential cookies. You may withdraw consent at any time without affecting
                    prior lawful processing.
                  </li>
                  <li>
                    <strong className="text-neutral-200">Contractual necessity:</strong> to fulfil a
                    contract with you or take steps at your request before entering one (e.g.,
                    processing an order, RMA, or support request).
                  </li>
                  <li>
                    <strong className="text-neutral-200">Legal obligation:</strong> to comply with
                    applicable laws — DPDP Act, GST, Companies Act, defence procurement
                    regulations, and lawful orders from competent authorities.
                  </li>
                  <li>
                    <strong className="text-neutral-200">
                      Legitimate uses / reasonable purposes:
                    </strong>{' '}
                    for fraud prevention, security, analytics, and operations — consistent with
                    reasonable expectations under the DPDP framework.
                  </li>
                  <li>
                    <strong className="text-neutral-200">State / public interest:</strong> where
                    processing is required to fulfil obligations to the State or a public authority
                    under applicable Indian law, particularly in defence and national security
                    contexts.
                  </li>
                </UL>
                <P>
                  We provide notice at or before the point of data collection and maintain
                  mechanisms for you to exercise your rights and raise grievances as described in
                  the <A href="#your-rights">Your Rights</A> section.
                </P>
              </section>

              <Divider />

              {/* §06 Defence Procurement */}
              <section id="defense-procurement" className="scroll-mt-40">
                <SectionHeading id="defense-procurement">
                  Government &amp; Defence Procurement Data
                </SectionHeading>
                <P>
                  Kshatra Labs works with government ministries, defence establishments, public
                  sector undertakings (PSUs), and institutional buyers. In these contexts we may
                  process personal data of procurement officers, authorised representatives, and
                  points of contact.
                </P>
                <UL>
                  <li>
                    <strong className="text-neutral-200">Government contact data</strong> (name,
                    designation, department, official email, phone) is used solely for the relevant
                    procurement engagement, contract management, or institutional relationship — not
                    for commercial marketing without separate consent.
                  </li>
                  <li>
                    <strong className="text-neutral-200">Procurement documents</strong> (bid
                    documents, technical specifications, letters of intent, supply orders) may
                    contain personal information and are retained for the duration required by
                    applicable procurement and audit regulations.
                  </li>
                  <li>
                    Data shared under classified or restricted government contracts is governed by
                    the terms of that contract and applicable national security law, handled under
                    separate security protocols outside the scope of this Policy.
                  </li>
                  <li>
                    Organisations procuring via the Government e-Marketplace (GeM) should also
                    refer to GeM&rsquo;s own privacy policies applicable to their platform usage.
                  </li>
                </UL>
                <P>
                  If you represent a government or defence organisation with specific data handling
                  requirements, contact us at{' '}
                  <A href="mailto:contact@kshatralabs.in">contact@kshatralabs.in</A> to arrange a
                  Data Processing Agreement or bespoke data handling arrangement.
                </P>
              </section>

              <Divider />

              {/* §07 Export Control */}
              <section id="export-control" className="scroll-mt-40">
                <SectionHeading id="export-control">
                  Export Control &amp; Regulatory Compliance (SCOMET)
                </SectionHeading>
                <P>
                  Kshatra Labs develops and supplies defence and dual-use technology that may be
                  subject to India&rsquo;s Special Chemicals, Organisms, Materials, Equipment and
                  Technologies (&ldquo;SCOMET&rdquo;) export control list administered by DGFT, as
                  well as other applicable Indian and international trade control regulations.
                </P>
                <P>
                  To comply with these obligations, we may process personal data of customers,
                  end-users, and business partners for:
                </P>
                <UL>
                  <li>
                    Verifying the identity and eligibility of buyers, end-users, and intermediaries
                  </li>
                  <li>
                    Screening against applicable denied party, debarment, and sanctions lists
                  </li>
                  <li>
                    Obtaining, maintaining, and evidencing end-user certificates (EUCs) and export
                    authorisation documents where required
                  </li>
                  <li>
                    Maintaining records required for export licence compliance and DGFT or authority
                    audit
                  </li>
                </UL>
                <P>
                  This processing is a{' '}
                  <strong className="text-white">legal obligation</strong> and cannot be opted out
                  of where it applies. Records collected for export compliance are retained for the
                  periods required by law, which may exceed our standard retention periods. For
                  questions, contact{' '}
                  <A href="mailto:contact@kshatralabs.in">contact@kshatralabs.in</A>.
                </P>
              </section>

              <Divider />

              {/* §08 Cross-Border */}
              <section id="cross-border" className="scroll-mt-40">
                <SectionHeading id="cross-border">Cross-Border Data Transfers</SectionHeading>
                <P>
                  We use third-party infrastructure and service providers — including cloud hosting,
                  analytics, email delivery, and payment processing — that may store or process your
                  personal data outside India (e.g., in the United States, the European Union,
                  Singapore, or other jurisdictions).
                </P>
                <P>
                  Where such international transfers occur, we ensure your data is protected by:
                </P>
                <UL>
                  <li>
                    Engaging only providers that maintain appropriate technical and organisational
                    security measures
                  </li>
                  <li>
                    Implementing contractual safeguards (data processing agreements, standard
                    contractual clauses) with service providers where applicable
                  </li>
                  <li>
                    Assessing whether the destination jurisdiction offers adequate protections for
                    personal data
                  </li>
                </UL>
                <P>
                  As India&rsquo;s DPDP Rules on cross-border transfers are progressively notified
                  under Section 16 of the DPDP Act, we will update our transfer mechanisms and this
                  Policy accordingly to ensure ongoing compliance.
                </P>
                <P>
                  <strong className="text-white">Defence-sensitive data note:</strong> Personal data
                  related to classified or restricted defence programmes is not transferred to
                  offshore infrastructure. Such data is handled under separate security arrangements
                  as agreed with the relevant contracting authority.
                </P>
              </section>

              <Divider />

              {/* §09 Cookies */}
              <section id="cookies" className="scroll-mt-40">
                <SectionHeading id="cookies">Cookies &amp; Tracking</SectionHeading>
                <P>
                  We use cookies and similar technologies (pixels, tags, local storage) for:
                </P>
                <UL>
                  <li>
                    <strong className="text-neutral-200">Strictly necessary:</strong> required for
                    the Site and checkout to function — cannot be disabled
                  </li>
                  <li>
                    <strong className="text-neutral-200">Functional:</strong> remember preferences,
                    language settings, and session state
                  </li>
                  <li>
                    <strong className="text-neutral-200">Analytics:</strong> understand how visitors
                    use the Site to improve it
                  </li>
                  <li>
                    <strong className="text-neutral-200">Marketing/advertising:</strong> measure
                    campaign performance and support targeted advertising — only with your consent
                    where required by law
                  </li>
                </UL>
                <SubHeading>Your choices</SubHeading>
                <UL>
                  <li>
                    Manage non-essential cookies via the cookie consent banner when you first visit
                    the Site
                  </li>
                  <li>
                    Adjust or withdraw preferences at any time via your browser or device settings
                  </li>
                  <li>
                    Opt out of marketing emails via the &ldquo;Unsubscribe&rdquo; link in any email
                    (transactional messages such as order confirmations are not subject to marketing
                    opt-out)
                  </li>
                </UL>
                <P>
                  <strong className="text-white">Global Privacy Control (GPC):</strong> If you
                  visit the Site with GPC enabled, we treat it as a request to opt out of
                  non-essential cookies and targeted advertising sharing where required by
                  applicable law and where technically feasible.
                </P>
              </section>

              <Divider />

              {/* §10 How We Share */}
              <section id="how-we-share" className="scroll-mt-40">
                <SectionHeading id="how-we-share">
                  How We Disclose Your Information
                </SectionHeading>
                <P>
                  We do not sell your personal data. We may disclose personal information to:
                </P>
                <UL>
                  <li>
                    <strong className="text-neutral-200">
                      IT and infrastructure service providers:
                    </strong>{' '}
                    cloud hosting, databases, CDN, monitoring, and security — operating as Data
                    Processors under our instruction
                  </li>
                  <li>
                    <strong className="text-neutral-200">Payment processors</strong> (e.g.,
                    Razorpay): to securely process and confirm payments
                  </li>
                  <li>
                    <strong className="text-neutral-200">
                      Shipping and logistics partners:
                    </strong>{' '}
                    to fulfil orders, arrange delivery, and manage returns
                  </li>
                  <li>
                    <strong className="text-neutral-200">Customer support platforms:</strong>{' '}
                    helpdesk software and communication tools used to provide support
                  </li>
                  <li>
                    <strong className="text-neutral-200">Analytics providers:</strong> to measure
                    Site performance in aggregate
                  </li>
                  <li>
                    <strong className="text-neutral-200">
                      Marketing and advertising partners
                    </strong>{' '}
                    (only where consented or permitted): for campaign attribution and measurement
                  </li>
                  <li>
                    <strong className="text-neutral-200">Professional advisers:</strong> lawyers,
                    accountants, and auditors — subject to confidentiality obligations
                  </li>
                  <li>
                    <strong className="text-neutral-200">
                      Government authorities and regulators:
                    </strong>{' '}
                    when required by law, court order, or binding regulatory request, or to protect
                    rights and safety. In a defence context, this includes lawful requests from the
                    Ministry of Defence, DRDO, and other authorised national security bodies.
                  </li>
                  <li>
                    <strong className="text-neutral-200">Business transfers:</strong> in a merger,
                    acquisition, or sale of assets — with reasonable notice and, where required,
                    your consent before any transfer that materially changes how your data is used.
                  </li>
                </UL>
                <P>
                  All service providers acting as Data Processors on our behalf are required to
                  process personal data only on our documented instructions, maintain
                  confidentiality, and implement security measures consistent with the DPDP Act.
                </P>
              </section>

              <Divider />

              {/* §11 DPA */}
              <section id="dpa" className="scroll-mt-40">
                <SectionHeading id="dpa">
                  Data Processor Agreements (B2B &amp; Government)
                </SectionHeading>
                <P>
                  If your organisation is itself a Data Fiduciary under the DPDP Act (or an
                  equivalent data controller under another applicable law) and you engage Kshatra
                  Labs to process personal data on your behalf — for example, by sharing end-user
                  data for product integration or system deployment — a formal Data Processing
                  Agreement (&ldquo;DPA&rdquo;) is required before any such personal data is
                  shared with us.
                </P>
                <P>
                  Contact us at{' '}
                  <A href="mailto:contact@kshatralabs.in">contact@kshatralabs.in</A> (Subject:{' '}
                  <em>DPA Request</em>) to initiate this process. For government and defence
                  institutional buyers with sovereign data handling requirements, we can accommodate
                  bespoke contractual arrangements.
                </P>
              </section>

              <Divider />

              {/* §12 Sensitive Data */}
              <section id="sensitive-data" className="scroll-mt-40">
                <SectionHeading id="sensitive-data">Sensitive Personal Data</SectionHeading>
                <P>
                  We do not intentionally collect sensitive personal data — such as health or
                  medical information, biometric data, financial account credentials, caste or
                  religion, sexual orientation, or political opinion — for the purpose of inferring
                  characteristics about individuals.
                </P>
                <P>
                  If you voluntarily share such information through support communications or
                  diagnostic submissions, we use it only to address your specific request and for
                  lawful compliance. We apply heightened access controls and security measures to
                  any information classified as sensitive, and do not share it with third parties
                  except as strictly required by law or to provide the requested service.
                </P>
                <P>
                  Personnel security data (e.g., information relating to security clearances or
                  vetting) is never collected through our public-facing Services and is handled
                  exclusively through appropriate government-mandated processes where relevant.
                </P>
              </section>

              <Divider />

              {/* §13 OPSEC — WARNING */}
              <section id="opsec" className="scroll-mt-40">
                <SectionHeading id="opsec" warning>
                  Operational Security (OPSEC) Notice
                </SectionHeading>
                <P>
                  When submitting RMA requests, diagnostic data, telemetry logs, or technical
                  support materials relating to products deployed in sensitive or operational
                  environments, please exercise appropriate operational security:
                </P>
                <UL>
                  <li>
                    <strong className="text-neutral-200">
                      Do not submit classified, restricted, or mission-sensitive data
                    </strong>{' '}
                    through standard support channels. Contact{' '}
                    <A href="mailto:contact@kshatralabs.in">contact@kshatralabs.in</A> to arrange a
                    secure channel before sharing such materials.
                  </li>
                  <li>
                    Sanitise or redact operational details (deployment locations, unit identifiers,
                    mission parameters) from logs and images before submission where operationally
                    appropriate.
                  </li>
                  <li>
                    If you believe you have inadvertently submitted sensitive operational data
                    through standard channels, notify us immediately at{' '}
                    <A href="mailto:contact@kshatralabs.in">contact@kshatralabs.in</A> so we can
                    take appropriate containment steps.
                  </li>
                </UL>
                <AlertBox>
                  Any data submitted for support purposes is accessed only by authorised technical
                  personnel on a strict need-to-know basis and is not used for any purpose beyond
                  resolving your support request.
                </AlertBox>
              </section>

              <Divider />

              {/* §14 Retention */}
              <section id="retention" className="scroll-mt-40">
                <SectionHeading id="retention">Data Retention</SectionHeading>
                <P>
                  We retain personal data only as long as necessary for the applicable purpose:
                </P>
                <UL>
                  <li>
                    <strong className="text-neutral-200">
                      Order and transaction records:
                    </strong>{' '}
                    7 years from the transaction date, per GST, Income Tax Act, and Companies Act
                    requirements
                  </li>
                  <li>
                    <strong className="text-neutral-200">
                      Customer support and RMA records:
                    </strong>{' '}
                    3 years from closure of the support case or end of the product warranty period,
                    whichever is later
                  </li>
                  <li>
                    <strong className="text-neutral-200">Product telemetry:</strong> 12 months from
                    collection, unless retained longer for active fault investigation or product
                    safety
                  </li>
                  <li>
                    <strong className="text-neutral-200">
                      Marketing and communications data:
                    </strong>{' '}
                    until you unsubscribe or withdraw consent, after which it is suppressed to
                    honour your opt-out
                  </li>
                  <li>
                    <strong className="text-neutral-200">
                      Government and defence procurement records:
                    </strong>{' '}
                    as required by applicable procurement audit regulations (typically 5–10 years
                    depending on contract type)
                  </li>
                  <li>
                    <strong className="text-neutral-200">Export compliance records:</strong> minimum
                    5 years as required by DGFT and applicable law, or longer if mandated
                  </li>
                  <li>
                    <strong className="text-neutral-200">
                      Security and fraud prevention logs:
                    </strong>{' '}
                    up to 12 months, or longer if required for an active investigation
                  </li>
                  <li>
                    <strong className="text-neutral-200">Account data:</strong> for the duration of
                    your account plus 2 years following closure, subject to legal retention
                    obligations
                  </li>
                </UL>
                <P>
                  When data is no longer required, we securely delete, anonymise, or pseudonymise
                  it in accordance with our internal data lifecycle policy.
                </P>
              </section>

              <Divider />

              {/* §15 Security */}
              <section id="security" className="scroll-mt-40">
                <SectionHeading id="security">Security</SectionHeading>
                <P>
                  As a defence technology company, security is foundational to how we operate. We
                  implement administrative, technical, and physical safeguards proportionate to the
                  sensitivity of the data we handle, including:
                </P>
                <UL>
                  <li>
                    Encryption in transit (TLS) and at rest for personal data stored on our
                    infrastructure
                  </li>
                  <li>
                    Role-based access controls and the principle of least privilege for all internal
                    systems
                  </li>
                  <li>
                    Multi-factor authentication for administrative access to systems holding
                    personal data
                  </li>
                  <li>
                    Vendor security assessments before onboarding service providers that process
                    personal data
                  </li>
                  <li>Periodic review of access rights and internal security assessments</li>
                  <li>Physical access controls at our facilities</li>
                </UL>
                <P>
                  No system is perfectly secure. We cannot guarantee absolute security of data
                  transmitted over the internet. Do not send sensitive or classified information via
                  unencrypted channels. To arrange secure communication, contact{' '}
                  <A href="mailto:contact@kshatralabs.in">contact@kshatralabs.in</A>.
                </P>
              </section>

              <Divider />

              {/* §16 Breach */}
              <section id="breach" className="scroll-mt-40">
                <SectionHeading id="breach">Breach Notification</SectionHeading>
                <P>
                  In the event of a personal data breach likely to result in harm, we will:
                </P>
                <UL>
                  <li>
                    Notify the Data Protection Board of India (once constituted) as required under
                    the DPDP Act within the prescribed timeframe
                  </li>
                  <li>
                    Notify affected individuals without undue delay where required by law, with
                    sufficient information for them to take protective steps
                  </li>
                  <li>
                    Maintain records of all personal data breaches, including those below the
                    notification threshold, as required
                  </li>
                </UL>
                <P>
                  If you believe your personal data held by us may have been compromised, please
                  contact us immediately at{' '}
                  <A href="mailto:contact@kshatralabs.in">contact@kshatralabs.in</A> (Subject:{' '}
                  <em>Security Concern</em>).
                </P>
              </section>

              <Divider />

              {/* §17 Children */}
              <section id="children" className="scroll-mt-40">
                <SectionHeading id="children">Children</SectionHeading>
                <P>
                  The Services are not directed at children under the age of 18, and we do not
                  knowingly collect personal information from children. Our products and services
                  are intended for professional, institutional, and adult individual use only.
                </P>
                <P>
                  If you believe a child has provided us with personal information without
                  appropriate parental or guardian consent, please contact us at{' '}
                  <A href="mailto:contact@kshatralabs.in">contact@kshatralabs.in</A> and we will
                  take prompt steps to delete such information.
                </P>
              </section>

              <Divider />

              {/* §18 Your Rights */}
              <section id="your-rights" className="scroll-mt-40">
                <SectionHeading id="your-rights">Your Rights</SectionHeading>

                <SubHeading>Under the DPDP Act 2023</SubHeading>
                <P>As a Data Principal under the DPDP Act, you have the right to:</P>
                <UL>
                  <li>
                    <strong className="text-neutral-200">Access:</strong> obtain a summary of the
                    personal data we hold about you and how it has been processed
                  </li>
                  <li>
                    <strong className="text-neutral-200">Correction and completion:</strong> request
                    correction of inaccurate, incomplete, or outdated personal data
                  </li>
                  <li>
                    <strong className="text-neutral-200">Erasure:</strong> request deletion of
                    personal data no longer necessary for the purpose it was collected — subject to
                    our legal retention obligations (e.g., tax records, export compliance,
                    procurement audit requirements)
                  </li>
                  <li>
                    <strong className="text-neutral-200">Withdraw consent:</strong> withdraw any
                    consent given at any time, without affecting prior lawful processing. Note that
                    withdrawal may affect our ability to provide certain services.
                  </li>
                  <li>
                    <strong className="text-neutral-200">Grievance redressal:</strong> raise a
                    complaint with our Grievance Officer and, where unresolved, escalate to the
                    Data Protection Board of India (once constituted)
                  </li>
                  <li>
                    <strong className="text-neutral-200">Nomination:</strong> nominate another
                    individual to exercise your rights on your behalf in the event of your death or
                    incapacity, as provided under the DPDP Act
                  </li>
                </UL>

                <SubHeading>Limitations</SubHeading>
                <P>
                  Certain rights may be limited or excluded where personal data is processed under a
                  legal obligation — including defence procurement regulations, export control law,
                  or a lawful order from a competent authority — or where erasure would conflict
                  with ongoing legal or contractual obligations.
                </P>

                <SubHeading>How to exercise your rights</SubHeading>
                <P>
                  Email{' '}
                  <A href="mailto:contact@kshatralabs.in">contact@kshatralabs.in</A> (Subject:{' '}
                  <em>Privacy Request</em>) with:
                </P>
                <UL>
                  <li>Your full name</li>
                  <li>The email address associated with your order or account</li>
                  <li>
                    The type of request: access / correction / deletion / opt-out / withdraw consent
                  </li>
                  <li>Any supporting details to help us locate your records</li>
                </UL>
                <P>
                  We may request identity verification to protect against fraudulent requests. You
                  may use an authorised agent where permitted by law, subject to verification. We
                  respond within <strong className="text-white">30 days</strong>, with a possible
                  extension of 30 additional days for complex requests.
                </P>
              </section>

              <Divider />

              {/* §19 Third-Party */}
              <section id="third-party" className="scroll-mt-40">
                <SectionHeading id="third-party">
                  Third-Party Links &amp; Services
                </SectionHeading>
                <P>
                  The Site may link to third-party websites, platforms, or procurement portals —
                  including government portals such as GeM, DRDO, or MoD procurement platforms. We
                  are not responsible for the privacy practices, content, or security of those third
                  parties. Review their privacy policies before providing any personal information
                  on third-party platforms.
                </P>
              </section>

              <Divider />

              {/* §20 Changes */}
              <section id="changes" className="scroll-mt-40">
                <SectionHeading id="changes">Changes to This Privacy Policy</SectionHeading>
                <P>
                  We may update this Privacy Policy for operational, legal, or regulatory reasons —
                  including to reflect updates to India&rsquo;s DPDP Rules as progressively
                  notified, or changes in our products and processing activities.
                </P>
                <P>
                  We will post the updated version on the Site and update the &ldquo;Last
                  updated&rdquo; date at the top of this page. Where changes are material —
                  affecting your rights or how we use your personal data in a significant way — we
                  will provide more prominent notice (such as a Site banner, account notification,
                  or email). Continued use of the Services after any update constitutes
                  acknowledgment of the revised Policy.
                </P>
              </section>

              <Divider />

              {/* §21 Contact */}
              <section id="contact" className="scroll-mt-40">
                <SectionHeading id="contact">Contact &amp; Complaints</SectionHeading>
                <P>
                  For any privacy-related queries, requests, or complaints, contact our Grievance
                  Officer:
                </P>
                <InfoCard label="Grievance Officer — Kshatra Labs" accent>
                  <p className="text-neutral-300 leading-loose text-sm font-mono">
                    <span className="text-white font-semibold">Email:</span>{' '}
                    <A href="mailto:contact@kshatralabs.in">contact@kshatralabs.in</A><br />
                    <span className="text-white font-semibold">Subject line:</span>{' '}
                    <em className="text-neutral-400">Privacy Grievance</em> or{' '}
                    <em className="text-neutral-400">Privacy Request</em><br />
                    <span className="text-white font-semibold">Phone:</span> +91 97304 58528<br />
                    <span className="text-white font-semibold">Postal address:</span>{' '}
                    <span className="text-neutral-500">
                      Kshatra Labs, [Insert registered legal address], Bengaluru, Karnataka —
                      560 001, India
                    </span>
                  </p>
                </InfoCard>
                <P>
                  Please contact us first so we can investigate and respond within{' '}
                  <strong className="text-white">30 days</strong>. If your grievance remains
                  unresolved, you may escalate to:
                </P>
                <UL>
                  <li>
                    The{' '}
                    <strong className="text-neutral-200">
                      Data Protection Board of India
                    </strong>{' '}
                    — once formally constituted and operational under the DPDP Act and rules
                  </li>
                  <li>
                    Any other remedy available under applicable Indian law, including civil remedies
                    under the Information Technology Act, 2000 (as amended)
                  </li>
                </UL>
                <P>
                  We take every privacy complaint seriously and are committed to resolving concerns
                  promptly, transparently, and fairly.
                </P>
              </section>

            </motion.div>

            {/* Document footer */}
            <div className="mt-20 pt-8 border-t border-neutral-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="font-mono text-[11px] text-neutral-700 tracking-widest uppercase">
                © {new Date().getFullYear()} Kshatra Labs. All Rights Reserved.
              </p>
              <p className="font-mono text-[11px] text-amber-500/30 tracking-widest uppercase">
                KL-LEGAL-PP-002 &nbsp;·&nbsp; Rev 2.0
              </p>
            </div>

          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}