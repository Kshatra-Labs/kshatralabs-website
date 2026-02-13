'use client'

import React from 'react'
import { Header } from '@/components/blocks/header'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { motion } from 'motion/react'

export default function ProductsPage() {
     return (
          <div className="relative min-h-screen bg-black text-white selection:bg-white/20 overflow-hidden">
               {/* Fixed Background */}
               <div className="fixed inset-0 z-0 opacity-40">
                    <BackgroundPaths title="" />
               </div>

               <Header />

               <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
                    <div className="max-w-4xl text-center space-y-8">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full"
                         >
                              <div className="w-2 h-2 rounded-full bg-defense-accent animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.6)]"></div>
                              <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-white/70">
                                   Product Pipeline Active
                              </span>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                              className="relative"
                         >
                              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase italic leading-none">
                                   Advanced <br />
                                   <span className="text-transparent bg-clip-text bg-gradient-to-tr from-white via-white to-white/20">
                                        Products
                                   </span>
                              </h1>
                              <div className="absolute -top-6 -right-6 hidden md:block opacity-20">
                                   <div className="text-[100px] font-bold select-none leading-none">01</div>
                              </div>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                              className="pt-12"
                         >
                              <div className="inline-block relative group">
                                   <div className="absolute -inset-1 bg-gradient-to-r from-defense-accent/50 to-defense-accent/50 blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                   <div className="relative px-12 py-6 bg-black border border-white/20 backdrop-blur-3xl">
                                        <p className="text-2xl md:text-3xl font-bold font-mono uppercase tracking-widest text-white">
                                             Coming Soon
                                        </p>
                                   </div>
                              </div>

                              <p className="mt-12 max-w-xl mx-auto text-neutral-400 text-lg leading-relaxed font-light">
                                   We are engineering the next generation of autonomous physical intelligence. Our systems are currently in classified development and field testing.
                              </p>
                         </motion.div>

                         {/* Decorative HUD Elements */}
                         <div className="pt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
                              <div className="space-y-2">
                                   <div className="h-px w-full bg-white/20"></div>
                                   <div className="text-[10px] font-mono uppercase tracking-widest">Air Domain</div>
                              </div>
                              <div className="space-y-2">
                                   <div className="h-px w-full bg-white/20"></div>
                                   <div className="text-[10px] font-mono uppercase tracking-widest">Land Systems</div>
                              </div>
                              <div className="space-y-2">
                                   <div className="h-px w-full bg-white/20"></div>
                                   <div className="text-[10px] font-mono uppercase tracking-widest">Maritime Ops</div>
                              </div>
                              <div className="space-y-2">
                                   <div className="h-px w-full bg-white/20"></div>
                                   <div className="text-[10px] font-mono uppercase tracking-widest">Edge Compute</div>
                              </div>
                         </div>
                    </div>
               </main>

               {/* Grid Overlay */}
               <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
     )
}
