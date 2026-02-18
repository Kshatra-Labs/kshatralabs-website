'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function PhilosophyCard() {
     return (
          <section className="relative py-24 bg-black overflow-hidden">
               {/* Grid Background */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

               <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

                    {/* Main Card */}
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8 }}
                         viewport={{ once: true }}
                         className="relative bg-gradient-to-br from-black to-neutral-950 border border-white/[0.08] p-6 sm:p-10 md:p-16"
                    >
                         {/* Top accent line */}
                         <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

                         <div className="grid lg:grid-cols-2 gap-12 items-center">

                              {/* Left: Bold Statement */}
                              <div>
                                   <div className="mb-8">
                                        <span className="text-blue-400/80 font-mono text-[9px] tracking-[0.3em] uppercase font-medium">
                                             {"/// Core Philosophy"}
                                        </span>
                                   </div>

                                   <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-2">
                                        <span className="text-white">WE BUILD</span>
                                        <br />
                                        <span className="text-neutral-500">WHAT OTHERS</span>
                                        <br />
                                        <span className="text-red-600">CANNOT.</span>
                                   </h2>
                              </div>

                              {/* Right: Description & Stats */}
                              <div className="space-y-8">
                                   <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                                        Modern warfare demands systems that are not just automated, but truly <span className="text-white font-medium">autonomous</span>. We engineer intelligent machines capable of operating in highly contested, GPS-denied environments without human intervention.
                                   </p>

                                   {/* Stats Grid */}
                                   <div className="grid grid-cols-2 gap-4 sm:gap-6">
                                        {/* Stat 1 */}
                                        <div className="border-l-2 border-blue-500/30 pl-4">
                                             <div className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-1">Rapid Response</div>
                                             <div className="text-[9px] sm:text-[10px] md:text-xs font-bold text-blue-500 tracking-wider uppercase">
                                                  Interception
                                             </div>
                                        </div>

                                        {/* Stat 2 */}
                                        <div className="border-l-2 border-blue-500/30 pl-4">
                                             <div className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-1">100%</div>
                                             <div className="text-[9px] sm:text-[10px] md:text-xs font-bold text-blue-500 tracking-wider uppercase">
                                                  Edge Compute (onboard)
                                             </div>
                                        </div>
                                   </div>
                              </div>

                         </div>

                         {/* Bottom corner accent */}
                         <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-white/[0.04]"></div>
                    </motion.div>

               </div>
          </section>
     )
}
