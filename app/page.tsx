'use client';

import dynamic from 'next/dynamic'
import { useState } from 'react'
// import { SplineCache } from "@/lib/spline-cache";
import { useIsMobile } from "@/hooks/use-is-mobile"
import { MailChoiceModal } from "@/components/ui/mail-choice-modal"
import { Header } from '@/components/blocks/header'

const HeroSection = dynamic(() => import("@/components/blocks/hero-section").then(mod => mod.HeroSection))
// Reverted to SplineScene per user request (retaining optimizations)
// const SplineScene = dynamic(() => import("@/components/blocks/spline-scene").then(mod => mod.SplineScene), {
//   ssr: false,
//   loading: () => <div className="w-full h-full min-h-[500px] flex items-center justify-center text-white/20">Loading 3D Scene...</div>
// })
// const SmartScene = dynamic(() => import("@/components/SmartScene").then(mod => mod.default), { ssr: false })
// const FPSMeter = dynamic(() => import("@/components/FPSMeter"), { ssr: false })

// const Entropy = dynamic(() => import("@/components/ui/entropy").then(mod => mod.Entropy))
// const Card = dynamic(() => import("@/components/ui/card").then(mod => mod.Card))
// const Spotlight = dynamic(() => import("@/components/ui/spotlight").then(mod => mod.Spotlight))
const Footer4Col = dynamic(() => import("@/components/blocks/footer-section")) // Default export
// const Capabilities = dynamic(() => import('@/components/blocks/capabilities').then(mod => mod.Capabilities))

// const PhilosophyCard = dynamic(() => import('@/components/blocks/philosophy-card').then(mod => mod.PhilosophyCard))
// const VideoSection = dynamic(() => import("@/components/blocks/video-section").then(mod => mod.VideoSection))
// const EnvironmentSection = dynamic(() => import("@/components/blocks/environment-section").then(mod => mod.EnvironmentSection))
// const ThreatAnalysis = dynamic(() => import("@/components/blocks/threat-analysis").then(mod => mod.ThreatAnalysis))
const InterceptorSection = dynamic(() => import("@/components/blocks/interceptor-section").then(mod => mod.InterceptorSection))
const TacticalGlobeSection = dynamic(() => import("@/components/blocks/wireframe/tactical-globe-section").then(mod => mod.TacticalGlobeSection), { ssr: false })
const Partners = dynamic(() => import("@/components/blocks/partners"))

// demoFrames data removed/commented out as unused

export default function Home() {
  const isMobile = useIsMobile()
  const [isMailModalOpen, setIsMailModalOpen] = useState(false)

  const handleContactClick = () => {
    if (isMobile) {
      window.location.href = 'mailto:contact@kshatralabs.in'
    } else {
      setIsMailModalOpen(true)
    }
  }

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white/20">
      <Header />

      {/* Background Paths typically have their own container, we'll put them fixed behind */}
      <div className="fixed inset-0 z-0 opacity-40">
         
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <HeroSection />

        {/* THREAT ANALYSIS SECTION */}
        {/* Updated for contact info visibility */}
        {/* <ThreatAnalysis /> */}
        {/* <FPSMeter /> */}

        {/* INTERCEPTOR SECTION */}
        <InterceptorSection />

        {/* PARTNERS SECTION */}
        <Partners />

        {/* MISSION CRITICAL SOLUTIONS */}
        {/* <Capabilities /> */}

        {/* PHILOSOPHY CARD - HIDDEN PER USER REQUEST */}
        {/* <PhilosophyCard /> */}

        {/* HERO VIDEO SECTION - HIDDEN */}
        {/* <VideoSection /> */}

        {/* ENVIRONMENT SECTION - HIDDEN */}
        {/* <EnvironmentSection /> */}

        {/* TACTICAL GLOBE & CALL TO ACTION SECTION (SIDE-BY-SIDE) */}
        <TacticalGlobeSection onContactClick={handleContactClick} />

        <Footer4Col />
        <MailChoiceModal
          isOpen={isMailModalOpen}
          onClose={() => setIsMailModalOpen(false)}
          email="contact@kshatralabs.in"
        />
      </div>
    </div>
  );
}
