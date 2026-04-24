'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
     { name: 'NVIDIA' },
     { name: 'IIT HYDERABAD' },
     { name: 'ITIC' },
     { name: 'GUSEC' },
]

export default function Partners() {
     return (
          <section className="py-20 relative bg-black border-y border-white/[0.05]">
               <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                         {/* Header Section */}
                         <div className="lg:col-span-4 space-y-4">
                              <h2 className="text-2xl md:text-3xl font-bold font-mono uppercase tracking-tight text-white leading-tight">
                                   Partners and <br />
                                   <span className="text-neutral-500">Supporters</span>
                              </h2>
                         </div>

                         {/* Logo Grid */}
                         <div className="lg:col-span-8">
                              <div className="grid grid-cols-2 md:grid-cols-4 border border-white/10">
                                   {partners.map((partner) => (
                                        <div
                                             key={partner.name}
                                             className="group relative flex flex-col items-center justify-center p-8 border-r border-b border-white/10 last:border-r-0 md:[&:nth-child(4)]:border-r-0 md:[&:nth-child(n+5)]:border-b-0 bg-white/[0.02] transition-colors h-24"
                                        >
                                             {/* Background Glow */}
                                             <div className="absolute inset-0 bg-blue-500/[0.01]"></div>
                                             
                                             <div className="relative z-10 flex flex-col items-center justify-center text-center">
                                                  <span className="text-lg md:text-xl font-black font-mono tracking-tighter text-white">
                                                       {partner.name}
                                                  </span>
                                             </div>

                                             {/* Tactical Corners */}
                                             <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500/50"></div>
                                             <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500/50"></div>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>

                    {/* HUD Footer Line */}
                    <div className="mt-20 flex items-center opacity-20">
                         <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
                    </div>
               </div>
          </section>
     )
}
