'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Header } from '@/components/blocks/header'
import FooterSection from '@/components/blocks/footer-section'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { Shield, Zap, Target, Cpu, Activity, Navigation, Volume2, VolumeX } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'


export default function HawkProductPage() {
     const videoRef = useRef<HTMLVideoElement>(null);
     const [isMuted, setIsMuted] = useState(true);

     useEffect(() => {
          if (videoRef.current) {
               videoRef.current.muted = isMuted;
          }
     }, [isMuted]);

     return (
          <div className="relative min-h-screen bg-black text-white selection:bg-white/20 font-sans overflow-hidden">
               <Header />

               {/* Background Effects */}
               <div className="fixed inset-0 z-0 opacity-30">
                    <BackgroundPaths title="" />
               </div>

               <main className="relative z-10 pt-32 pb-24">
                    <div className="max-w-7xl mx-auto px-6 md:px-12">
                         {/* Product Hero */}
                         <div className="grid lg:grid-cols-5 gap-16 items-center mb-32">
                              <div className="lg:col-span-3 space-y-8">
                                   <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="flex items-center gap-2"
                                   >
                                        <div className="w-8 h-[1px] bg-blue-500"></div>
                                        <span className="text-xs font-mono uppercase tracking-[0.4em] text-blue-400">Autonomous Interceptor</span>
                                   </motion.div>

                                   <motion.h1
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 0.1 }}
                                        className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9]"
                                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                                   >
                                        HAWK
                                   </motion.h1>

                                   <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="text-xl text-neutral-400 leading-relaxed max-w-xl font-light"
                                   >
                                        The HAWK is a high-speed autonomous interceptor designed to neutralize aerial threats with machine-speed precision. Powered by fully onboard Edge AI, it operates reliably in contested and GPS-denied environments.
                                   </motion.p>

                                   <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                        className="flex flex-wrap gap-4 pt-4"
                                   >
                                        {['Edge AI', 'Target Lock', 'High Speed', 'EW Resistant'].map((tag) => (
                                             <div key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono uppercase tracking-widest">
                                                  {tag}
                                             </div>
                                        ))}
                                   </motion.div>
                              </div>

                              <motion.div
                                   initial={{ opacity: 0, scale: 0.9 }}
                                   animate={{ opacity: 1, scale: 1 }}
                                   transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                   className="lg:col-span-2 relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-white/10 bg-neutral-900 group shadow-2xl"
                              >
                                   <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                                        <Image
                                             src="/products/hawkproduct.png"
                                             alt=""
                                             fill
                                             className="object-cover blur-3xl opacity-20 scale-110"
                                        />
                                   </div>
                                   <Image
                                        src="/products/hawkproduct.png"
                                        alt="HAWK Autonomous Interceptor"
                                        fill
                                        className="object-contain relative z-10 transition-transform duration-700 group-hover:scale-105"
                                        priority
                                   />
                                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 z-20"></div>
                              </motion.div>
                         </div>

                         {/* Technical Specifications */}
                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                              {[
                                   { title: 'Neural Target Lock', desc: 'Sub-millisecond visual identification and tracking using custom silicon.', icon: Target },
                                   { title: 'Edge Autonomy', desc: 'Onboard flight controller capable of 15+ TOPS of AI compute.', icon: Cpu },
                                   { title: 'Kinetic Intercept', desc: 'Optimized airframe for high-G maneuvers and rapid interception.', icon: Zap },
                                   { title: 'Mesh Networking', desc: 'Distributed intelligence sharing across multiple HAWK units.', icon: Activity },
                                   { title: 'Electronic Resilience', desc: 'Hardened communication systems for EW-heavy environments.', icon: Shield },
                                   { title: 'Inertial Navigation', desc: 'Reliable positioning without reliance on global satellite systems.', icon: Navigation },
                              ].map((spec, i) => (
                                   <motion.div
                                        key={spec.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors"
                                   >
                                        <spec.icon className="w-8 h-8 text-blue-500 mb-6" />
                                        <h3 className="text-xl font-bold uppercase tracking-tight mb-2 font-mono">{spec.title}</h3>
                                        <p className="text-neutral-400 font-light leading-relaxed">{spec.desc}</p>
                                   </motion.div>
                              ))}
                         </div>

                         {/* NOT JUST A DRONE SECTION */}
                         <div className="relative py-24 bg-black border-y border-white/5 overflow-hidden rounded-[3rem] mb-32">
                              <div className="grid md:grid-cols-2 gap-16 items-center px-8 md:px-12">

                                   {/* LEFT: Heading & Intro */}
                                   <div className="space-y-6">
                                        <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 font-mono text-[10px] uppercase tracking-widest text-blue-500 mb-4">
                                             Interceptor
                                        </div>
                                        <div className="space-y-4 text-neutral-400">
                                             <p className="text-2xl md:text-3xl font-bold text-white font-mono uppercase tracking-tight">
                                                  DETECT. CHASE. NEUTRALIZE.
                                             </p>
                                             <p className="text-lg leading-relaxed font-light">
                                                  Built to stop airborne threats.
                                             </p>
                                        </div>

                                        {/* REINSERTED VIDEO */}
                                        <div className="mt-8 relative aspect-video border border-white/10 bg-neutral-900 group rounded-xl overflow-hidden">
                                             <video
                                                  ref={videoRef}
                                                  autoPlay
                                                  muted={isMuted}
                                                  loop
                                                  playsInline
                                                  className="w-full h-full object-cover transition-all duration-700"
                                             >
                                                  <source src="/video/demo.mp4" type="video/mp4" />
                                             </video>
                                             <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-blue-500/50 transition-all"></div>

                                             {/* Audio Toggle Button */}
                                             <button
                                                  onClick={() => setIsMuted(!isMuted)}
                                                  className="absolute bottom-4 right-4 z-20 p-2 rounded-full bg-black/40 border border-white/10 backdrop-blur-md hover:bg-black/60 transition-all"
                                             >
                                                  {isMuted ? (
                                                       <VolumeX className="w-4 h-4 text-white/70" />
                                                  ) : (
                                                       <Volume2 className="w-4 h-4 text-blue-500" />
                                                  )}
                                             </button>
                                        </div>
                                   </div>

                                   {/* RIGHT: Features List */}
                                   <div className="space-y-12">
                                        {/* 01 */}
                                        <div className="relative pl-8 border-l border-white/10 group hover:border-blue-500/50 transition-colors">
                                             <div className="absolute top-0 left-[-1px] w-[2px] h-0 bg-blue-500 transition-all duration-300 group-hover:h-full"></div>
                                             <div className="font-mono text-sm text-blue-500 mb-2">01 //</div>
                                             <h4 className="text-xl font-bold font-mono uppercase text-white mb-2">High-Speed Autonomous Flight</h4>
                                             <p className="text-sm text-neutral-400 leading-relaxed font-light">
                                                  Engineered for rapid response and high-velocity interception of hostile objects in mid-air.
                                             </p>
                                        </div>

                                        {/* 02 */}
                                        <div className="relative pl-8 border-l border-white/10 group hover:border-blue-500/50 transition-colors">
                                             <div className="absolute top-0 left-[-1px] w-[2px] h-0 bg-blue-500 transition-all duration-300 group-hover:h-full"></div>
                                             <div className="font-mono text-sm text-blue-500 mb-2">02 //</div>
                                             <h4 className="text-xl font-bold font-mono uppercase text-white mb-2">Real-Time Target Tracking</h4>
                                             <p className="text-sm text-neutral-400 leading-relaxed font-light">
                                                  Advanced sensor integration for precise detection and persistent chasing of airborne threats.
                                             </p>
                                        </div>

                                        {/* 03 */}
                                        <div className="relative pl-8 border-l border-white/10 group hover:border-blue-500/50 transition-colors">
                                             <div className="absolute top-0 left-[-1px] w-[2px] h-0 bg-blue-500 transition-all duration-300 group-hover:h-full"></div>
                                             <div className="font-mono text-sm text-blue-500 mb-2">03 //</div>
                                             <h4 className="text-xl font-bold font-mono uppercase text-white mb-2">SWARM CAPABLE</h4>
                                             <p className="text-sm text-neutral-400 leading-relaxed font-light">
                                                  This system is engineered specifically to intercept and neutralize hostile objects.<br />
                                                  Made for rapid response. Designed for protection.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>

                    </div>
               </main>

               <FooterSection />

               {/* Grid Overlay */}
               <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
     )
}
