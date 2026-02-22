'use client'

import React from 'react'
import { motion } from 'framer-motion'
// import { Target, Crosshair, Wifi, AlertTriangle } from 'lucide-react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { type ClassValue } from 'clsx'

export function ThreatAnalysis() {
     const [activeTagIndex, setActiveTagIndex] = React.useState(0)

     React.useEffect(() => {
          const interval = setInterval(() => {
               setActiveTagIndex((prev) => (prev + 1) % 4)
          }, 2000)
          return () => clearInterval(interval)
     }, [])

     return (
          <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-black text-white">
               {/* Background Image */}
               <div
                    className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
                    style={{ backgroundImage: "url('/bg/page2bg.png')" }}
               ></div>

               {/* Black Overlays: Vignette and Gradients to ensure full black corners */}
               <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_30%,black_100%)]"></div>
               <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
               <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black"></div>

               <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                         {/* Left Column: Text Content */}
                         <div className="space-y-12">

                              {/* Header */}
                              <div className="border-l-4 border-red-600 pl-6 space-y-4">
                                   <div className="text-red-500 text-xs font-mono tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
                                        <span>{"/// THREAT VECTOR ANALYSIS"}</span>
                                   </div>
                                   <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none">
                                        NOT JUST A <span className="text-white/50">DRONE.</span> AN INTERCEPTOR.
                                   </h2>

                                   {/* Capability Cards */}
                                   <div className="flex flex-wrap gap-3 pt-2">
                                        {['INTERCEPTOR', 'DETECT', 'CHASE', 'DEFENSE-FIRST'].map((tag, i) => (
                                             <span key={i} className={`px-3 py-1 border text-[10px] font-mono tracking-widest transition-all duration-500 ${i === activeTagIndex
                                                  ? 'bg-red-500/20 border-red-500/50 text-red-400 font-bold shadow-[0_0_10px_rgba(239,68,68,0.3)] scale-105'
                                                  : 'bg-white/5 border-white/10 text-blue-300 opacity-60'
                                                  }`}>
                                                  {tag}
                                             </span>
                                        ))}
                                   </div>

                                   <p className="text-neutral-400 max-w-lg leading-relaxed border-t border-white/10 pt-4 mt-4">
                                        Built to detect. Built to chase. Built to stop airborne threats.
                                   </p>
                              </div>

                              {/* Analysis Points */}
                              <div className="space-y-6">
                                   {/* Item 1 */}
                                   <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="group border border-white/10 bg-black/40 backdrop-blur-sm p-6 hover:border-red-500/50 transition-colors duration-300 relative overflow-hidden"
                                   >
                                        <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-50 transition-opacity">
                                             <div className="w-2 h-2 border-t border-r border-white"></div>
                                        </div>
                                        <h3 className="text-blue-400 font-mono text-sm tracking-widest mb-2 flex items-center gap-2">
                                             <span className="text-white/30">01 //</span> HIGH-SPEED AUTONOMOUS FLIGHT
                                        </h3>
                                        <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                                             Engineered for rapid response and high-velocity interception of hostile objects in mid-air.
                                        </p>
                                   </motion.div>

                                   {/* Item 2 */}
                                   <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="group border border-white/10 bg-black/40 backdrop-blur-sm p-6 hover:border-red-500/50 transition-colors duration-300 relative overflow-hidden"
                                   >
                                        <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-50 transition-opacity">
                                             <div className="w-2 h-2 border-t border-r border-white"></div>
                                        </div>
                                        <h3 className="text-blue-400 font-mono text-sm tracking-widest mb-2 flex items-center gap-2">
                                             <span className="text-white/30">02 //</span> REAL-TIME TARGET TRACKING
                                        </h3>
                                        <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                                             Advanced sensor integration for precise detection and persistent chasing of airborne threats.
                                        </p>
                                   </motion.div>

                                   {/* Item 3 */}
                                   <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="group border border-white/10 bg-black/40 backdrop-blur-sm p-6 hover:border-red-500/50 transition-colors duration-300 relative overflow-hidden"
                                   >
                                        <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-50 transition-opacity">
                                             <div className="w-2 h-2 border-t border-r border-white"></div>
                                        </div>
                                        <h3 className="text-blue-400 font-mono text-sm tracking-widest mb-2 flex items-center gap-2">
                                             <span className="text-white/30">03 //</span> SWARM CAPABLE
                                        </h3>
                                        <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                                             This system is engineered specifically to intercept and neutralize hostile objects.
                                             <span className="text-blue-200/60 block mt-4 text-xs">
                                                  Made for rapid response. Designed for protection.
                                             </span>
                                        </p>
                                   </motion.div>
                              </div>

                         </div>

                         {/* Right Column: HUD Video */}
                         <div className="relative">
                              {/* Background Glow */}
                              <motion.div
                                   animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
                                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                   className="absolute -inset-10 bg-blue-500/20 blur-3xl rounded-full z-0 pointer-events-none"
                              />

                              <div className="relative z-10 w-full aspect-video bg-black/80 rounded-sm border border-white/10 overflow-hidden group">

                                   {/* Video Element */}
                                   <LazyVideo />

                                   {/* HUD Overlay */}
                                   <div className="absolute inset-0 pointer-events-none p-4 md:p-8 flex flex-col justify-between">
                                        {/* Top Bar */}
                                        <div className="flex justify-between items-start text-[10px] font-mono tracking-widest text-red-500">
                                             <div className="flex items-center gap-2">
                                                  <span className="animate-pulse">■</span> LIVE FEED
                                             </div>
                                             <div className="text-right space-y-1 text-blue-400">
                                                  <div>TGT LOCK: <span className="text-white">ACTIVE</span></div>
                                                  <div>ALT: <span className="text-white">4500 FT</span></div>
                                             </div>
                                        </div>

                                        {/* Center Crosshair */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                             <div className="w-[30%] h-[30%] border border-blue-500/50 rounded-full flex items-center justify-center relative">
                                                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-blue-500/30"></div>
                                                  <div className="absolute top-0 left-1/2 h-full w-[1px] bg-blue-500/30"></div>
                                             </div>
                                        </div>

                                        {/* Corners */}
                                        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-blue-500/50"></div>
                                        <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-blue-500/50"></div>
                                        <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-blue-500/50"></div>
                                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-blue-500/50"></div>

                                        {/* Bottom Bar */}
                                        <div className="flex justify-between items-end text-[10px] font-mono tracking-widest text-white/30">
                                             <div className="space-y-1">
                                                  <div>LAT 34°03&apos;N</div>
                                                  <div>LON 118°14&apos;W</div>
                                             </div>
                                        </div>
                                   </div>

                                   {/* Scanline Effect */}
                                   <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>

                              </div>

                              {/* Decorative Background Decals */}
                              <div className="absolute -top-10 -right-10 text-white/5 font-black text-9xl pointer-events-none select-none z-0">
                                   {"//"}
                              </div>
                              <div className="absolute -bottom-10 -left-10 text-white/5 font-black text-9xl pointer-events-none select-none z-0">
                                   +
                              </div>
                         </div>

                    </div>
               </div>
          </section>
     )
}

function LazyVideo() {
     const containerRef = React.useRef<HTMLDivElement>(null)
     const videoRef = React.useRef<HTMLVideoElement>(null)
     const [hasLoaded, setHasLoaded] = React.useState(false)

     React.useEffect(() => {
          const container = containerRef.current
          if (!container) return

          const observer = new IntersectionObserver(
               ([entry]) => {
                    if (entry.isIntersecting) {
                         setHasLoaded(true)
                         // Small timeout to allow the video element to mount if it wasn't already
                         setTimeout(() => {
                              videoRef.current?.play().catch(() => { })
                         }, 0)
                    } else {
                         videoRef.current?.pause()
                    }
               },
               { threshold: 0.1 }
          )

          observer.observe(container)

          return () => observer.disconnect()
     }, [])

     return (
          <div ref={containerRef} className="w-full h-full absolute inset-0">
               {hasLoaded && (
                    <video
                         ref={videoRef}
                         muted
                         loop
                         playsInline
                         className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen"
                    >
                         <source src="/video/demo.mp4" type="video/webm" />
                         <source src="/video/demo.mp4" type="video/mp4" />
                    </video>
               )}
          </div>
     )
}