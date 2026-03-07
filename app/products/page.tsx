'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/blocks/header'
import FooterSection from '@/components/blocks/footer-section'
import { BackgroundPaths } from "@/components/ui/background-paths"
import { ShinyButton } from '@/components/ui/shiny-button'

export default function ProductsPage() {
     return (
          <div className="relative min-h-screen bg-black text-white selection:bg-white/20 font-sans overflow-hidden">
               <Header />

               {/* Background Paths */}
               <div className="fixed inset-0 z-0 opacity-40">
                    <BackgroundPaths title="" />
               </div>

               <main className="relative z-10 pt-48 pb-24 min-h-screen flex flex-col justify-between">
                    <section className="px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className="inline-block px-3 py-1 bg-white/5 border border-white/10 font-mono text-[10px] uppercase tracking-widest text-defense-accent mb-8"
                         >
                              Status: Classified Development
                         </motion.div>

                         <motion.h1
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                              className="text-5xl md:text-7xl lg:text-8xl font-black font-heading uppercase tracking-tighter leading-[0.9] mb-8"
                              style={{ fontFamily: 'var(--font-space-grotesk)' }}
                         >
                              Products <br />
                              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20 [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">Coming Soon</span>
                         </motion.h1>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                              className="max-w-3xl mx-auto space-y-12"
                         >
                              <p className="text-xl md:text-2xl text-neutral-300 font-medium leading-relaxed">
                                   We are engineering the next generation of autonomous physical intelligence.
                              </p>

                              <div className="flex flex-col items-center gap-8">
                                   <div className="h-[1px] w-24 bg-defense-accent"></div>

                                   <div style={{ transform: 'scale(1.2)', transformOrigin: 'center', display: 'inline-block' }}>
                                        <ShinyButton className="--shiny-cta-highlight: #ffffff; --shiny-cta-highlight-subtle: #a1a1a1;">
                                             COMING SOON
                                        </ShinyButton>
                                   </div>

                                   <p className="text-lg text-neutral-400 leading-relaxed font-light font-mono uppercase tracking-widest px-4">
                                        Our systems are currently in classified development and field testing.
                                   </p>
                              </div>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 1.5, delay: 1 }}
                              className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40"
                         >
                              {['HAWK', 'HAWKEYE', 'APEX', 'SWARM'].map((platform) => (
                                   <div key={platform} className="flex flex-col items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-defense-accent rounded-full animate-pulse"></div>
                                        <span className="font-mono text-[10px] tracking-[0.3em] font-bold">{platform}</span>
                                   </div>
                              ))}
                         </motion.div>
                    </section>

                    <div className="mt-16">
                         <FooterSection />
                    </div>
               </main>

               {/* Grid Overlay */}
               <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
     )
}
