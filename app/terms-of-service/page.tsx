'use client'

import React from 'react'
import { Header } from '@/components/blocks/header'
import FooterSection from '@/components/blocks/footer-section'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { motion } from 'framer-motion'

/* ─────────────────────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────────────────────── */



function SectionDivider() {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-amber-500/40 to-transparent" />
      <div className="w-1.5 h-1.5 bg-amber-500/60 rotate-45 shrink-0" />
    </div>
  )
}

interface SectionProps {
  num: string
  title: string
  children: React.ReactNode
  warning?: boolean
}

function Section({ num, title, children, warning = false }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className={`border-l-2 pl-6 ${warning ? 'border-red-600/70' : 'border-amber-500'}`}>
        {/* Section header */}
        <div className="flex items-baseline gap-3 mb-4">
          <span
            className={`font-mono text-xs tracking-widest shrink-0 ${
              warning ? 'text-red-500' : 'text-amber-500'
            }`}
          >
            §{num}
          </span>
          <h2
            className={`text-xl md:text-2xl font-bold tracking-tight leading-snug ${
              warning ? 'text-red-200' : 'text-white'
            }`}
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            {title}
          </h2>
        </div>

        {/* Section body */}
        <div className="text-neutral-400 leading-relaxed space-y-3 text-[15px]">
          {children}
        </div>
      </div>
    </motion.section>
  )
}

interface BulletListProps {
  items: string[]
  danger?: boolean
}

function BulletList({ items, danger = false }: BulletListProps) {
  return (
    <ul className="space-y-2 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className={`font-mono text-xs mt-[5px] shrink-0 select-none ${
              danger ? 'text-red-500' : 'text-amber-500'
            }`}
          >
            —
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

interface SubGroupProps {
  label: string
  items: string[]
}

function SubGroup({ label, items }: SubGroupProps) {
  return (
    <div className="mt-5">
      <p className="font-mono text-[10px] tracking-widest uppercase text-red-500/80 mb-2">
        {label}
      </p>
      <BulletList items={items} danger />
    </div>
  )
}

function AlertBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 bg-red-950/25 border border-red-800/40 rounded-sm px-5 py-4">
      <div className="flex items-start gap-3">
        <span className="font-mono text-[10px] tracking-widest text-red-500 uppercase shrink-0 mt-0.5">
          ⚠ NOTICE
        </span>
        <p className="text-red-200/75 text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  )
}

function InfoCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-neutral-900/60 border border-neutral-800 rounded-sm px-5 py-4 font-mono text-sm leading-loose">
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

/* ─────────────────────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────────────────────── */



function SectionDivider() {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-amber-500/40 to-transparent" />
      <div className="w-1.5 h-1.5 bg-amber-500/60 rotate-45 shrink-0" />
    </div>
  )
}

interface SectionProps {
  num: string
  title: string
  children: React.ReactNode
  warning?: boolean
}

function Section({ num, title, children, warning = false }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className={`border-l-2 pl-6 ${warning ? 'border-red-600/70' : 'border-amber-500'}`}>
        {/* Section header */}
        <div className="flex items-baseline gap-3 mb-4">
          <span
            className={`font-mono text-xs tracking-widest shrink-0 ${
              warning ? 'text-red-500' : 'text-amber-500'
            }`}
          >
            §{num}
          </span>
          <h2
            className={`text-xl md:text-2xl font-bold tracking-tight leading-snug ${
              warning ? 'text-red-200' : 'text-white'
            }`}
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            {title}
          </h2>
        </div>

        {/* Section body */}
        <div className="text-neutral-400 leading-relaxed space-y-3 text-[15px]">
          {children}
        </div>
      </div>
    </motion.section>
  )
}

interface BulletListProps {
  items: string[]
  danger?: boolean
}

function BulletList({ items, danger = false }: BulletListProps) {
  return (
    <ul className="space-y-2 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className={`font-mono text-xs mt-[5px] shrink-0 select-none ${
              danger ? 'text-red-500' : 'text-amber-500'
            }`}
          >
            —
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

interface SubGroupProps {
  label: string
  items: string[]
}

function SubGroup({ label, items }: SubGroupProps) {
  return (
    <div className="mt-5">
      <p className="font-mono text-[10px] tracking-widest uppercase text-red-500/80 mb-2">
        {label}
      </p>
      <BulletList items={items} danger />
    </div>
  )
}

function AlertBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 bg-red-950/25 border border-red-800/40 rounded-sm px-5 py-4">
      <div className="flex items-start gap-3">
        <span className="font-mono text-[10px] tracking-widest text-red-500 uppercase shrink-0 mt-0.5">
          ⚠ NOTICE
        </span>
        <p className="text-red-200/75 text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  )
}

function InfoCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-neutral-900/60 border border-neutral-800 rounded-sm px-5 py-4 font-mono text-sm leading-loose">
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

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-amber-500/20 overflow-hidden font-sans">

      {/* Ambient background */}
      <div className="fixed inset-0 z-0 opacity-20">
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
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-amber-500/20 overflow-hidden font-sans">

      {/* Ambient background */}
      <div className="fixed inset-0 z-0 opacity-20">
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
      <Header />

      <main className="relative z-10 pt-32 md:pt-44 pb-28 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">

          {/* ── Document metadata strip ── */}
          

          {/* ── Title block ── */}
          <div className="mb-18 md:mb-20">
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
              className="text-5xl md:text-[4.5rem] lg:text-[5.5rem] font-black uppercase leading-[0.92] tracking-tight text-white"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Website<br />
              <span className="text-amber-500">Terms</span>{' '}
              <span className="text-neutral-500">of Use</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="font-mono text-xs text-neutral-600 tracking-widest mt-7 uppercase"
            >
              Kshatra Labs &nbsp;·&nbsp; kshatralabs.in &nbsp;·&nbsp; Effective 01-Jan-2026
            </motion.p>
          </div>
      <main className="relative z-10 pt-32 md:pt-44 pb-28 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">

          {/* ── Document metadata strip ── */}
          

          {/* ── Title block ── */}
          <div className="mb-18 md:mb-20">
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
              className="text-5xl md:text-[4.5rem] lg:text-[5.5rem] font-black uppercase leading-[0.92] tracking-tight text-white"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Website<br />
              <span className="text-amber-500">Terms</span>{' '}
              <span className="text-neutral-500">of Use</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="font-mono text-xs text-neutral-600 tracking-widest mt-7 uppercase"
            >
              Kshatra Labs &nbsp;·&nbsp; kshatralabs.in &nbsp;·&nbsp; Effective 01-Jan-2026
            </motion.p>
          </div>

          {/* ── Intro ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-neutral-400 leading-relaxed space-y-4 text-[15px] mb-18 pl-6 border-l border-neutral-800"
          >
            <p>
              These Terms of Service (&quot;Terms&quot;) govern access to and use of the website{' '}
              <span className="text-white font-medium">kshatralabs.in</span> and all associated
              services, documentation, tools, and digital content operated by Kshatra Labs
              (&quot;Kshatra Labs&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
            </p>
            <p>
              By accessing or using the website or any related services (collectively, the
              &quot;Services&quot;), you agree to be bound by these Terms. If you do not agree, you must
              immediately discontinue use of the Services.
            </p>
            <p>
              These Terms govern website use only and are separate from the{' '}
              <span className="text-white font-medium">Privacy Policy</span>, which governs
              product transactions and data practices.
            </p>
          </motion.div>

          <SectionDivider />

          {/* ── All Sections ── */}
          <div className="mt-16 space-y-14">

            {/* §01 */}
            <Section num="01" title="Company Identification">
              <InfoCard label="Operator">
                <p className="text-white font-semibold">KSHATRA LABS</p>
                <p className="text-neutral-500">Autonomous Systems Facility</p>
                <p className="text-neutral-500">Bangalore, India</p>
                <p className="text-neutral-400 mt-2">+91 97304 58528</p>
              </InfoCard>
            </Section>

            {/* §02 */}
            <Section num="02" title="Eligibility">
              <p>The Services are intended for use by:</p>
              <BulletList
                items={[
                  'individuals aged 18 years or older',
                  'legally authorised representatives of businesses or institutions',
                ]}
              />
              <p className="mt-3">
                By using the Services you represent that you have the legal authority to enter
                into binding agreements.
              </p>
            </Section>
            {/* §02 */}
            <Section num="02" title="Eligibility">
              <p>The Services are intended for use by:</p>
              <BulletList
                items={[
                  'individuals aged 18 years or older',
                  'legally authorised representatives of businesses or institutions',
                ]}
              />
              <p className="mt-3">
                By using the Services you represent that you have the legal authority to enter
                into binding agreements.
              </p>
            </Section>

            {/* §03 */}
            <Section num="03" title="Nature of the Website">
              <p>The website provides:</p>
              <BulletList
                items={[
                  'technical information',
                  'product specifications',
                  'documentation',
                  'engineering resources',
                  'contact and support information',
                ]}
              />
              <p className="mt-3">
                All information is provided for informational and evaluation purposes only and
                does not constitute engineering certification, design approval, or regulatory
                compliance assurance.
              </p>
            </Section>
            {/* §03 */}
            <Section num="03" title="Nature of the Website">
              <p>The website provides:</p>
              <BulletList
                items={[
                  'technical information',
                  'product specifications',
                  'documentation',
                  'engineering resources',
                  'contact and support information',
                ]}
              />
              <p className="mt-3">
                All information is provided for informational and evaluation purposes only and
                does not constitute engineering certification, design approval, or regulatory
                compliance assurance.
              </p>
            </Section>

            {/* §04 */}
            <Section num="04" title="Permitted Use">
              <p>Users may access the website for legitimate purposes including:</p>
              <BulletList
                items={[
                  'learning about Kshatra Labs products',
                  'evaluating technical specifications',
                  'contacting us for inquiries or technical support',
                ]}
              />
              <p className="mt-3">
                Any use beyond these purposes is prohibited unless explicitly authorised in
                writing.
              </p>
            </Section>
            {/* §04 */}
            <Section num="04" title="Permitted Use">
              <p>Users may access the website for legitimate purposes including:</p>
              <BulletList
                items={[
                  'learning about Kshatra Labs products',
                  'evaluating technical specifications',
                  'contacting us for inquiries or technical support',
                ]}
              />
              <p className="mt-3">
                Any use beyond these purposes is prohibited unless explicitly authorised in
                writing.
              </p>
            </Section>

            {/* §05 – WARNING */}
            <Section num="05" title="Prohibited Activities" warning>
              <p>You agree not to engage in the following activities:</p>

              <SubGroup
                label="Technical Misuse"
                items={[
                  'scrape or harvest technical data',
                  'use automated bots or crawlers without permission',
                  'copy engineering documentation for competitive development',
                  'reverse engineer product designs based on website content',
                  'reproduce schematics, firmware descriptions, or engineering insights',
                ]}
              />
              <SubGroup
                label="Security Violations"
                items={[
                  'attempt unauthorised access to servers or databases',
                  'probe vulnerabilities or bypass security systems',
                  'introduce malware or harmful code',
                ]}
              />
              <SubGroup
                label="Competitive Misuse"
                items={[
                  'use website data for competing product development',
                  'benchmark Kshatra Labs products using unpublished or misrepresented methods',
                  'misrepresent Kshatra Labs specifications or documentation',
                ]}
              />
              <SubGroup
                label="Data Exploitation"
                items={[
                  'train AI models or data systems on website engineering data without written consent',
                ]}
              />
            {/* §05 – WARNING */}
            <Section num="05" title="Prohibited Activities" warning>
              <p>You agree not to engage in the following activities:</p>

              <SubGroup
                label="Technical Misuse"
                items={[
                  'scrape or harvest technical data',
                  'use automated bots or crawlers without permission',
                  'copy engineering documentation for competitive development',
                  'reverse engineer product designs based on website content',
                  'reproduce schematics, firmware descriptions, or engineering insights',
                ]}
              />
              <SubGroup
                label="Security Violations"
                items={[
                  'attempt unauthorised access to servers or databases',
                  'probe vulnerabilities or bypass security systems',
                  'introduce malware or harmful code',
                ]}
              />
              <SubGroup
                label="Competitive Misuse"
                items={[
                  'use website data for competing product development',
                  'benchmark Kshatra Labs products using unpublished or misrepresented methods',
                  'misrepresent Kshatra Labs specifications or documentation',
                ]}
              />
              <SubGroup
                label="Data Exploitation"
                items={[
                  'train AI models or data systems on website engineering data without written consent',
                ]}
              />

              <AlertBox>
                Violation may result in immediate termination of access, civil or criminal
                legal action, and reporting to relevant authorities where applicable.
              </AlertBox>
            </Section>
              <AlertBox>
                Violation may result in immediate termination of access, civil or criminal
                legal action, and reporting to relevant authorities where applicable.
              </AlertBox>
            </Section>

            {/* §06 */}
            <Section num="06" title="Technical Documentation Disclaimer">
              <p>
                Engineering data available on this website may include product specifications,
                performance curves, application notes, integration guidelines, and test data.
              </p>
              <BulletList
                items={[
                  'materials represent controlled internal test conditions and may change without notice',
                  'performance may vary depending on system integration',
                  'Kshatra Labs does not guarantee system-level outcomes resulting from use of this information',
                ]}
              />
              <p className="mt-3">
                Users remain responsible for validating designs, performing safety testing, and
                ensuring regulatory compliance.
              </p>
            </Section>
            {/* §06 */}
            <Section num="06" title="Technical Documentation Disclaimer">
              <p>
                Engineering data available on this website may include product specifications,
                performance curves, application notes, integration guidelines, and test data.
              </p>
              <BulletList
                items={[
                  'materials represent controlled internal test conditions and may change without notice',
                  'performance may vary depending on system integration',
                  'Kshatra Labs does not guarantee system-level outcomes resulting from use of this information',
                ]}
              />
              <p className="mt-3">
                Users remain responsible for validating designs, performing safety testing, and
                ensuring regulatory compliance.
              </p>
            </Section>

            {/* §07 – WARNING */}
            <Section num="07" title="Product Safety Notice" warning>
              <p>Products referenced on this website may involve:</p>
              <BulletList
                items={[
                  'rotating propulsion systems',
                  'high current electronics',
                  'high temperature components',
                  'fuel combustion systems (IC engines)',
                ]}
                danger
              />
              <AlertBox>
                Improper integration may result in equipment damage, fire, serious injury, or
                death. The website does not provide complete safety guidance for system design.
                Users must ensure appropriate safety procedures and testing protocols are in
                place prior to any deployment or integration.
              </AlertBox>
            </Section>

            {/* §08 */}
            <Section num="08" title="Intellectual Property">
              <p>
                All website content — including designs, text, graphics, documentation,
                photographs, engineering data, software elements, trademarks, and branding —
                is the intellectual property of Kshatra Labs or its licensors.
              </p>
              <p className="mt-3">You may not:</p>
              <BulletList
                items={[
                  'reproduce or redistribute content',
                  'create derivative works',
                  'replicate engineering designs',
                  'commercially exploit website content',
                ]}
              />
              <p className="mt-3">
                without written permission. Limited permission is granted to download materials
                solely for internal evaluation purposes.
              </p>
            </Section>

            {/* §09 */}
            <Section num="09" title="User Submissions">
              <p>
                Users may submit feedback, reviews, support requests, and technical inquiries.
                By submitting content you grant Kshatra Labs a non-exclusive, worldwide,
                royalty-free license to use such submissions for operational or improvement
                purposes.
              </p>
              <p className="mt-3">Users must not submit content that:</p>
              <BulletList
                items={[
                  'infringes intellectual property',
                  'contains malicious code',
                  'violates applicable laws',
                ]}
              />
            </Section>

            {/* §10 */}
            <Section num="10" title="Third-Party Links">
              <p>
                The website may link to third-party platforms or services. Kshatra Labs does
                not control and is not responsible for the content, security, or policies of
                external websites. Accessing third-party websites is at your own risk.
              </p>
            </Section>
            {/* §07 – WARNING */}
            <Section num="07" title="Product Safety Notice" warning>
              <p>Products referenced on this website may involve:</p>
              <BulletList
                items={[
                  'rotating propulsion systems',
                  'high current electronics',
                  'high temperature components',
                  'fuel combustion systems (IC engines)',
                ]}
                danger
              />
              <AlertBox>
                Improper integration may result in equipment damage, fire, serious injury, or
                death. The website does not provide complete safety guidance for system design.
                Users must ensure appropriate safety procedures and testing protocols are in
                place prior to any deployment or integration.
              </AlertBox>
            </Section>

            {/* §08 */}
            <Section num="08" title="Intellectual Property">
              <p>
                All website content — including designs, text, graphics, documentation,
                photographs, engineering data, software elements, trademarks, and branding —
                is the intellectual property of Kshatra Labs or its licensors.
              </p>
              <p className="mt-3">You may not:</p>
              <BulletList
                items={[
                  'reproduce or redistribute content',
                  'create derivative works',
                  'replicate engineering designs',
                  'commercially exploit website content',
                ]}
              />
              <p className="mt-3">
                without written permission. Limited permission is granted to download materials
                solely for internal evaluation purposes.
              </p>
            </Section>

            {/* §09 */}
            <Section num="09" title="User Submissions">
              <p>
                Users may submit feedback, reviews, support requests, and technical inquiries.
                By submitting content you grant Kshatra Labs a non-exclusive, worldwide,
                royalty-free license to use such submissions for operational or improvement
                purposes.
              </p>
              <p className="mt-3">Users must not submit content that:</p>
              <BulletList
                items={[
                  'infringes intellectual property',
                  'contains malicious code',
                  'violates applicable laws',
                ]}
              />
            </Section>

            {/* §10 */}
            <Section num="10" title="Third-Party Links">
              <p>
                The website may link to third-party platforms or services. Kshatra Labs does
                not control and is not responsible for the content, security, or policies of
                external websites. Accessing third-party websites is at your own risk.
              </p>
            </Section>

            {/* §11 */}
            <Section num="11" title="Website Availability">
              <p>
                Kshatra Labs does not guarantee uninterrupted availability of the Services. The
                website may be unavailable due to:
              </p>
              <BulletList
                items={[
                  'scheduled maintenance',
                  'software upgrades',
                  'infrastructure failures',
                  'cyber incidents',
                  'external service provider outages',
                ]}
              />
            </Section>

            {/* §12 */}
            <Section num="12" title="Disclaimer of Warranties">
              <p>
                The Services and website content are provided &quot;as is&quot; and &quot;as available.&quot;
                Kshatra Labs makes no warranties regarding:
              </p>
              <BulletList
                items={[
                  'completeness or accuracy of website content',
                  'uninterrupted operation',
                  'compatibility with user systems',
                ]}
              />
              <p className="mt-3">
                Product warranties, when applicable to offline purchases, are governed by
                separate agreements.
              </p>
            </Section>

            {/* §13 */}
            <Section num="13" title="Limitation of Liability">
              <p>
                To the maximum extent permitted by law, Kshatra Labs shall not be liable for:
              </p>
              <BulletList
                items={[
                  'loss of profits or business interruption',
                  'loss of data',
                  'engineering redesign costs',
                  'reliance on website technical information',
                  'indirect or consequential damages',
                ]}
              />
              <p className="mt-3">
                arising from website use. Nothing in these Terms excludes liability where
                exclusion is prohibited by law.
              </p>
            </Section>
            {/* §13 */}
            <Section num="13" title="Limitation of Liability">
              <p>
                To the maximum extent permitted by law, Kshatra Labs shall not be liable for:
              </p>
              <BulletList
                items={[
                  'loss of profits or business interruption',
                  'loss of data',
                  'engineering redesign costs',
                  'reliance on website technical information',
                  'indirect or consequential damages',
                ]}
              />
              <p className="mt-3">
                arising from website use. Nothing in these Terms excludes liability where
                exclusion is prohibited by law.
              </p>
            </Section>

            {/* §14 */}
            <Section num="14" title="Export Control">
              <p>
                Information and products presented on this website may be subject to export
                control laws and international trade restrictions. Users agree not to use or
                transfer information in violation of such laws.
              </p>
            </Section>
            {/* §14 */}
            <Section num="14" title="Export Control">
              <p>
                Information and products presented on this website may be subject to export
                control laws and international trade restrictions. Users agree not to use or
                transfer information in violation of such laws.
              </p>
            </Section>

            {/* §15 */}
            <Section num="15" title="Security Monitoring">
              <p>
                Kshatra Labs may monitor website activity to detect misuse or security threats.
                We reserve the right to:
              </p>
              <BulletList
                items={[
                  'suspend access without prior notice',
                  'investigate suspicious activity',
                  'cooperate with law enforcement authorities',
                ]}
              />
            </Section>

            {/* §16 */}
            <Section num="16" title="Privacy">
              <p>
                Use of the Services is subject to the Kshatra Labs Privacy Policy, which
                governs collection and processing of personal data.
              </p>
            </Section>
            {/* §15 */}
            <Section num="15" title="Security Monitoring">
              <p>
                Kshatra Labs may monitor website activity to detect misuse or security threats.
                We reserve the right to:
              </p>
              <BulletList
                items={[
                  'suspend access without prior notice',
                  'investigate suspicious activity',
                  'cooperate with law enforcement authorities',
                ]}
              />
            </Section>

            {/* §16 */}
            <Section num="16" title="Privacy">
              <p>
                Use of the Services is subject to the Kshatra Labs Privacy Policy, which
                governs collection and processing of personal data.
              </p>
            </Section>

            {/* §17 */}
            <Section num="17" title="Governing Law">
              <p>
                These Terms are governed by the laws of India. Any disputes shall be subject to
                the exclusive jurisdiction of courts in Bangalore, Karnataka, unless applicable
                consumer laws require otherwise.
              </p>
            </Section>
            {/* §17 */}
            <Section num="17" title="Governing Law">
              <p>
                These Terms are governed by the laws of India. Any disputes shall be subject to
                the exclusive jurisdiction of courts in Bangalore, Karnataka, unless applicable
                consumer laws require otherwise.
              </p>
            </Section>

            {/* §18 */}
            <Section num="18" title="Changes to Terms">
              <p>
                Kshatra Labs may update these Terms at any time. The updated version will be
                published on the website with a revised effective date. Continued use of the
                Services constitutes acceptance of the updated Terms.
              </p>
            </Section>
            {/* §18 */}
            <Section num="18" title="Changes to Terms">
              <p>
                Kshatra Labs may update these Terms at any time. The updated version will be
                published on the website with a revised effective date. Continued use of the
                Services constitutes acceptance of the updated Terms.
              </p>
            </Section>

            {/* §19 */}
            <Section num="19" title="Severability">
              <p>
                If any provision of these Terms is deemed invalid or unenforceable, the
                remaining provisions shall remain in full force.
              </p>
            </Section>

            {/* §20 */}
            <Section num="20" title="Contact">
              <InfoCard label="For Legal Enquiries">
                <p className="text-white font-semibold">KSHATRA LABS</p>
                <p className="text-neutral-500">
                  Autonomous Systems Facility &nbsp;·&nbsp; Bangalore, India
                </p>
                <p className="text-neutral-400 mt-2">+91 97304 58528</p>
                <p className="mt-1">
                  <a
                    href="mailto:contact@kshatralabs.in"
                    className="text-amber-400 hover:text-amber-300 transition-colors duration-200"
                  >
                    contact@kshatralabs.in
                  </a>
                </p>
              </InfoCard>
            </Section>

          </div>

          {/* ── Document footer ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 pt-8 border-t border-neutral-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          >
            <p className="font-mono text-[11px] text-neutral-700 tracking-widest uppercase">
              © {new Date().getFullYear()} Kshatra Labs. All Rights Reserved.
            </p>
            <p className="font-mono text-[11px] text-amber-500/30 tracking-widest uppercase">
              KL-LEGAL-TOS-001 &nbsp;·&nbsp; Rev 1.0
            </p>
          </motion.div>

        </div>
      </main>
            {/* §19 */}
            <Section num="19" title="Severability">
              <p>
                If any provision of these Terms is deemed invalid or unenforceable, the
                remaining provisions shall remain in full force.
              </p>
            </Section>

            {/* §20 */}
            <Section num="20" title="Contact">
              <InfoCard label="For Legal Enquiries">
                <p className="text-white font-semibold">KSHATRA LABS</p>
                <p className="text-neutral-500">
                  Autonomous Systems Facility &nbsp;·&nbsp; Bangalore, India
                </p>
                <p className="text-neutral-400 mt-2">+91 97304 58528</p>
                <p className="mt-1">
                  <a
                    href="mailto:contact@kshatralabs.in"
                    className="text-amber-400 hover:text-amber-300 transition-colors duration-200"
                  >
                    contact@kshatralabs.in
                  </a>
                </p>
              </InfoCard>
            </Section>

          </div>

          {/* ── Document footer ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 pt-8 border-t border-neutral-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          >
            <p className="font-mono text-[11px] text-neutral-700 tracking-widest uppercase">
              © {new Date().getFullYear()} Kshatra Labs. All Rights Reserved.
            </p>
            <p className="font-mono text-[11px] text-amber-500/30 tracking-widest uppercase">
              KL-LEGAL-TOS-001 &nbsp;·&nbsp; Rev 1.0
            </p>
          </motion.div>

        </div>
      </main>

      <FooterSection />
    </div>
  )
      <FooterSection />
    </div>
  )
}