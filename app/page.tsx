'use client'

import { useState } from 'react'
import { useIsMobile } from '@/hooks/use-is-mobile'
import { MailChoiceModal } from '@/components/ui/mail-choice-modal'

import { HeroSection } from "@/components/blocks/hero-section";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { DynamicFrameLayout } from "@/components/blocks/dynamic-frame-layout";
import { SplineScene } from "@/components/blocks/spline-scene";
import { Entropy } from "@/components/ui/entropy";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import Footer4Col from "@/components/blocks/footer-section";
import { Capabilities } from '@/components/blocks/capabilities'
import { PlatformsGrid } from '@/components/blocks/platforms-grid'
import { PlatformGallery } from '@/components/blocks/platform-gallery'
import { PhilosophyCard } from '@/components/blocks/philosophy-card'
import { VideoSection } from "@/components/blocks/video-section";
import { EnvironmentSection } from "@/components/blocks/environment-section";

import { ThreatAnalysis } from "@/components/blocks/threat-analysis";

const demoFrames = [
  {
    id: 1,
    image: "/styles/1.jpg",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    corner: "/corner-decor.svg",
    edgeHorizontal: "/edge-h.svg",
    edgeVertical: "/edge-v.svg",
    mediaSize: 1,
    borderThickness: 2,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 2,
    image: "/styles/2.png",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 2,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 3,
    image: "/styles/3.png",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 2,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 4,
    image: "/styles/4.png",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 2,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 5,
    image: "/styles/1.jpg",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 2,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 6,
    image: "/styles/2.png",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 2,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 7,
    image: "/styles/3.png",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 2,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 8,
    image: "/styles/4.png",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 2,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 9,
    image: "/styles/1.jpg",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 2,
    borderSize: 90,
    isHovered: false,
  },
]

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

        {/* VISION SECTION (Spline) */}
        <section id="vision" className="py-24 px-6 md:px-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-mono">
                Our Vision
              </h2>
              <p className="mt-4 text-neutral-300 max-w-2xl text-lg">
                Kshatra Labs is building intelligent autonomous systems that operate across air, land, sea, and space. Our vision is to create general-purpose physical intelligence that extends human capability while keeping people out of harm’s way.
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
        <Capabilities />

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
              Deploy systems that adapt, learn, and overcome in the world's most challenging environments.
            </p>
            <div className="flex flex-col items-center gap-6">
              <button
                onClick={handleContactClick}
                className="px-8 py-3 bg-white text-black font-mono font-semibold hover:bg-neutral-200 transition-colors inline-block cursor-pointer"
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
