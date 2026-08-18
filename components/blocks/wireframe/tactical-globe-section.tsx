'use client'

import React, { useState } from 'react'
import { TacticalGlobeCanvas } from './tactical-globe-canvas'

interface TacticalGlobeSectionProps {
  onContactClick?: () => void
}

export function TacticalGlobeSection({ onContactClick }: TacticalGlobeSectionProps) {
  const [coords, setCoords] = useState<{ lat: number; lng: number; isBangaloreVisible: boolean }>({
    lat: 12.9716,
    lng: 77.5946,
    isBangaloreVisible: true,
  })

  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-[#050505] text-white overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Outer Premium Gradient Shell (1px padding, subtle zinc-to-black transition) */}
        <div className="relative w-full p-[1px] bg-gradient-to-br from-zinc-600/40 via-zinc-800/10 to-zinc-800/60">
          
          {/* Inner Surface (#080808 / #050505 foundation with 1px hairline border) */}
          <div className="relative w-full bg-[#080808] border border-[#1B1B1D] p-6 md:p-10 lg:p-12">
            
            {/* Absolute Tactical Brackets (L-shaped corners, 4px stroke length, pinned to corners) */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-zinc-500 pointer-events-none z-20" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-zinc-500 pointer-events-none z-20" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-zinc-500 pointer-events-none z-20" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-zinc-500 pointer-events-none z-20" />

            {/* Tactical Metadata & Telemetry HUD Bar (Top) */}
            <div className="flex justify-end border-b border-white/5 pb-6 mb-8 font-mono">
              {/* Bangalore HQ Locator Badge */}
              <div
                className={`px-6 py-2.5 border transition-all duration-300 flex items-center gap-3 text-[15px] md:text-[17px] tracking-[0.25em] ${
                  coords.isBangaloreVisible
                    ? 'border-[#FF0000]/80 bg-[#FF0000]/15 text-[#FF0000] shadow-[0_0_20px_rgba(255,0,0,0.35)] font-bold'
                    : 'border-white/10 bg-white/[0.02] text-neutral-400 font-medium'
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-none ${coords.isBangaloreVisible ? 'bg-[#FF0000] animate-ping' : 'bg-neutral-500'}`} />
                BANGALORE
              </div>
            </div>

            {/* Side-by-Side Layout: Left CTA Column + Right Scaled Globe Column */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-6">
              
              {/* Left Column: Ready for the Autonomous Era? */}
              <div className="lg:col-span-5 space-y-8 text-left">
                <h2 className="text-[38px] md:text-[51px] font-bold font-mono uppercase tracking-tight text-white leading-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  Ready for the <span className="text-[#FF0000]">Autonomous Era?</span>
                </h2>

                <p className="text-neutral-300 text-[19px] md:text-[21px] font-light leading-relaxed font-sans">
                  Deploy systems that adapt, learn, and overcome in the world&apos;s most challenging environments.
                </p>

                <div className="pt-2 space-y-6">
                  <button
                    onClick={onContactClick}
                    style={{ clipPath: 'polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)' }}
                    className="w-full sm:w-auto px-8 py-4 bg-white text-black font-mono font-bold tracking-widest hover:bg-neutral-200 transition-colors inline-flex items-center justify-center gap-3 cursor-pointer rounded-none uppercase text-[15px] shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                  >
                    REQUEST A BRIEFING →
                  </button>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-neutral-300 font-mono text-[13px] md:text-[15px] pt-2 border-t border-white/10">
                    <a href="tel:+919730458528" className="hover:text-white transition-colors flex items-center gap-2 text-white font-bold">
                      +91 9730458528
                    </a>
                    <span className="hidden sm:inline text-neutral-600">•</span>
                    <button
                      onClick={onContactClick}
                      className="hover:text-white transition-colors cursor-pointer text-neutral-400 hover:text-white underline-offset-4 hover:underline text-left"
                    >
                      contact@kshatralabs.in
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Scaled Down Globe Stage */}
              <div className="lg:col-span-7 relative w-full h-[380px] md:h-[440px] lg:h-[460px] flex items-center justify-center border border-white/5 bg-black/40 p-4 overflow-hidden">
                <TacticalGlobeCanvas onCoordsChange={setCoords} />
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
