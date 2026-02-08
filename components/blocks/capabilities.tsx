'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
     Shield,
     Eye,
     Activity,
     Lock,
     Radio,
     Database,
     Layout,
     HardDrive,
     ArrowRight
} from 'lucide-react'

const capabilities = {
     defense: [
          { icon: Shield, title: 'Counter-Drone Defense', code: 'C-UAS' },
          { icon: Eye, title: 'Border Security', code: 'BSEC' },
          { icon: Activity, title: 'Base Defense & Rapid Reaction', code: 'BDRR' },
          { icon: Lock, title: 'High-Value Asset Protection', code: 'HVAP' },
     ],
     industrial: [
          { icon: Radio, title: 'Persistent Monitoring', code: 'PMON' },
          { icon: Database, title: 'Critical Infrastructure', code: 'CINF' },
          { icon: Layout, title: 'Industrial Inspection', code: 'IINS' },
          { icon: HardDrive, title: 'Rugged Autonomy', code: 'RAUT' },
     ]
}

export function Capabilities() {
     return (
          <section className="relative py-32 bg-black overflow-hidden border-y border-white/[0.03]">
               {/* Subtle Grid Background */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

               {/* Gradient Accents */}
               <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
               <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

               <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                    {/* Header */}
                    <div className="mb-24 max-w-4xl">
                         <div className="flex items-center gap-4 mb-6">
                              <div className="h-px w-16 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                              <span className="text-blue-400/80 font-mono text-[10px] tracking-[0.25em] uppercase font-medium">
                                   Capabilities
                              </span>
                         </div>

                         <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                              Mission-Critical Solutions
                         </h2>

                         <p className="text-neutral-400 text-base leading-relaxed max-w-2xl">
                              Deployed across defense and industrial sectors where failure is not an option.
                         </p>
                    </div>

                    {/* Grid Container */}
                    <div className="grid lg:grid-cols-2 gap-20">

                         {/* Defense Column */}
                         <div className="space-y-6">
                              <div className="flex items-baseline gap-4 mb-10">
                                   <h3 className="text-sm font-mono font-semibold tracking-wider text-white/90 uppercase">
                                        Defense
                                   </h3>
                                   <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
                              </div>

                              <div className="space-y-3">
                                   {capabilities.defense.map((item, idx) => (
                                        <CapabilityItem key={idx} {...item} delay={idx * 0.05} />
                                   ))}
                              </div>
                         </div>

                         {/* Industrial Column */}
                         <div className="space-y-6">
                              <div className="flex items-baseline gap-4 mb-10">
                                   <h3 className="text-sm font-mono font-semibold tracking-wider text-white/90 uppercase">
                                        Dual-Use / Industrial
                                   </h3>
                                   <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
                              </div>

                              <div className="space-y-3">
                                   {capabilities.industrial.map((item, idx) => (
                                        <CapabilityItem key={idx} {...item} delay={idx * 0.05} />
                                   ))}
                              </div>
                         </div>

                    </div>
               </div>
          </section>
     )
}

function CapabilityItem({
     icon: Icon,
     title,
     code,
     featured,
     delay = 0
}: {
     icon: any
     title: string
     code: string
     featured?: boolean
     delay?: number
}) {
     return (
          <motion.div
               initial={{ opacity: 0, x: -10 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay, duration: 0.4 }}
               viewport={{ once: true }}
               className={`group relative flex items-center justify-between px-6 py-5 bg-white/[0.01] border border-white/[0.06] hover:border-blue-500/30 hover:bg-white/[0.02] transition-all duration-500 ${featured ? 'border-blue-500/20 bg-blue-500/[0.02]' : ''}`}
          >
               {/* Left accent line */}
               <div className={`absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all duration-500 ${featured ? 'via-blue-500/30' : ''}`}></div>

               <div className="flex items-center gap-5">
                    <div className="relative">
                         <div className="p-2.5 bg-white/[0.03] border border-white/[0.08] group-hover:border-blue-500/40 group-hover:bg-blue-500/[0.05] transition-all duration-500">
                              <Icon className="w-4 h-4 text-blue-400/70 group-hover:text-blue-400 transition-colors duration-500" strokeWidth={1.5} />
                         </div>
                    </div>

                    <div className="flex flex-col gap-1">
                         <span className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors duration-300 tracking-wide">
                              {title}
                         </span>
                         <span className="text-[10px] font-mono text-neutral-600 tracking-wider">
                              {code}
                         </span>
                    </div>
               </div>

               {featured && (
                    <div className="flex items-center gap-2 text-blue-400/80 group-hover:text-blue-400 transition-colors">
                         <span className="text-[9px] font-mono font-semibold tracking-widest">VIEW</span>
                         <ArrowRight className="w-3 h-3" strokeWidth={2} />
                    </div>
               )}
          </motion.div>
     )
}
