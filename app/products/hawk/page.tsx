'use client'

import React, { useState } from 'react'
import { Header } from '@/components/blocks/header'
import FooterSection from '@/components/blocks/footer-section'
import dynamic from 'next/dynamic'

// Modular Anduril-Grade Hawk Components
import { HawkHero } from '@/components/blocks/hawk/hawk-hero'
import { HawkMissionSimulation } from '@/components/blocks/hawk/hawk-mission-simulation'
// import { HawkHardwareArchitecture } from '@/components/blocks/hawk/hawk-hardware-architecture'
// import { HawkSpecs } from '@/components/blocks/hawk/hawk-specs'
import { HawkAdvisorModal } from '@/components/blocks/hawk/hawk-advisor-modal'

const DownloadBrochure = dynamic(() => import('@/components/blocks/download-brochure'), {
     loading: () => (
          <div className="h-40 flex items-center justify-center text-neutral-500 font-mono text-xs uppercase tracking-widest">
               LOADING TECHNICAL DOCUMENTATION CANAL...
          </div>
     ),
     ssr: false
})

export default function HawkProductPage() {
     const [isBriefingOpen, setIsBriefingOpen] = useState(false)

     return (
          <div className="relative min-h-screen bg-[#030303] text-white selection:bg-[#2563EB]/30 font-sans overflow-x-hidden">
               {/* Apple-Style Navigation Header */}
               <Header />

               {/* Main Page Assembly */}
               <main className="relative z-10">
                    {/* 1. Cinematic HUD & Telemetry Hero */}
                    <HawkHero onRequestBriefing={() => setIsBriefingOpen(true)} />

                    {/* 2. Interactive Kill-Chain & Mission Simulation */}
                    <HawkMissionSimulation />

                    {/* 3. Exploded Hardware & Silicon Architecture Deep-Dive (Hidden to protect sensitive engineering details & vulnerabilities) */}
                    {/* <HawkHardwareArchitecture /> */}

                    {/* 4. Technical HUD Specifications & Data Matrix (Removed per user request) */}
                    {/* <HawkSpecs /> */}

                    {/* 7. Download Brochure Section */}
                    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
                         <DownloadBrochure />
                    </div>
               </main>

               {/* Tactical Footer */}
               <FooterSection />

               {/* High-Security Mission Consultation Modal */}
               <HawkAdvisorModal 
                    isOpen={isBriefingOpen} 
                    onClose={() => setIsBriefingOpen(false)} 
               />
          </div>
     )
}
