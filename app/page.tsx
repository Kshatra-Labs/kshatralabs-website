'use client';

import dynamic from 'next/dynamic'
import { useState } from 'react'
// import { SplineCache } from "@/lib/spline-cache";
import { useIsMobile } from "@/hooks/use-is-mobile"
import { MailChoiceModal } from "@/components/ui/mail-choice-modal"
import { Header } from '@/components/blocks/header'

const HeroSection = dynamic(() => import("@/components/blocks/hero-section").then(mod => mod.HeroSection))
const BackgroundPaths = dynamic(() => import("@/components/ui/background-paths").then(mod => mod.BackgroundPaths), { ssr: false })
// Reverted to SplineScene per user request (retaining optimizations)
const SplineScene = dynamic(() => import("@/components/blocks/spline-scene").then(mod => mod.SplineScene), {
  ssr: false,
  loading: () => <div className="w-full h-full min-h-[500px] flex items-center justify-center text-white/20">Loading 3D Scene...</div>
})
// const SmartScene = dynamic(() => import("@/components/SmartScene").then(mod => mod.default), { ssr: false })
// const FPSMeter = dynamic(() => import("@/components/FPSMeter"), { ssr: false })

// const Entropy = dynamic(() => import("@/components/ui/entropy").then(mod => mod.Entropy))
const Card = dynamic(() => import("@/components/ui/card").then(mod => mod.Card))
const Spotlight = dynamic(() => import("@/components/ui/spotlight").then(mod => mod.Spotlight))
const Footer4Col = dynamic(() => import("@/components/blocks/footer-section")) // Default export
// const Capabilities = dynamic(() => import('@/components/blocks/capabilities').then(mod => mod.Capabilities))
const PlatformsGrid = dynamic(() => import('@/components/blocks/platforms-grid').then(mod => mod.PlatformsGrid))
const PlatformGallery = dynamic(() => import('@/components/blocks/platform-gallery').then(mod => mod.PlatformGallery))
const PhilosophyCard = dynamic(() => import('@/components/blocks/philosophy-card').then(mod => mod.PhilosophyCard))
// const VideoSection = dynamic(() => import("@/components/blocks/video-section").then(mod => mod.VideoSection))
// const EnvironmentSection = dynamic(() => import("@/components/blocks/environment-section").then(mod => mod.EnvironmentSection))
const ThreatAnalysis = dynamic(() => import("@/components/blocks/threat-analysis").then(mod => mod.ThreatAnalysis))

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
        <BackgroundPaths title="" />
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <HeroSection />

        {/* THREAT ANALYSIS SECTION */}
        {/* Updated for contact info visibility */}
        <ThreatAnalysis />
        {/* <FPSMeter /> */}

        {/* VISION SECTION (Spline) */}
        <section id="vision" className="py-24 px-6 md:px-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-mono">
                Our Vision
              </h2>
              <p className="mt-4 text-neutral-300 max-w-2xl text-lg">
                Kshatra Labs is building intelligent autonomous systems that operate across air, land, and sea. Our vision is to create general-purpose physical intelligence that extends human capability while keeping people out of harm’s way.
              </p>
            </div>

            <Card className="w-full h-[600px] bg-black/50 border-white/10 relative overflow-hidden backdrop-blur-sm">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </Card>
          </div>
        </section>

        {/* MISSION CRITICAL SOLUTIONS */}
        {/* <Capabilities /> */}

        {/* PRODUCT SYSTEMS GRID */}
        <PlatformsGrid />

        {/* PLATFORM GALLERY */}
        <PlatformGallery />

        {/* PHILOSOPHY CARD */}
        <PhilosophyCard />

        {/* HERO VIDEO SECTION - HIDDEN */}
        {/* <VideoSection /> */}

        {/* ENVIRONMENT SECTION - HIDDEN */}
        {/* <EnvironmentSection /> */}

        {/* CALL TO ACTION SECTION */}
        <section className="py-24 px-6 md:px-12 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for the <span className="text-blue-500">Autonomous Era?</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto">
              Deploy systems that adapt, learn, and overcome in the world&apos;s most challenging environments.
            </p>
            <div className="flex flex-col items-center gap-6">
              <button
                onClick={handleContactClick}
                className="px-8 py-4 bg-white text-black font-mono font-bold tracking-widest hover:bg-neutral-200 transition-colors inline-block cursor-pointer rounded-none uppercase"
              >
                REQUEST A BRIEFING →
              </button>
              <div className="flex flex-col md:flex-row items-center gap-4 text-neutral-500 font-mono text-sm">
                <a href="tel:+919730458528" className="hover:text-white transition-colors">+91 9730458528</a>
                <span className="hidden md:inline">•</span>
                <button
                  onClick={handleContactClick}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  contact@kshatralabs.in
                </button>
              </div>
            </div>
          </div>
        </section>

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
