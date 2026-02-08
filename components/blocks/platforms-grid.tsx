'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const advantages = [
     {
          number: '01',
          title: 'AI-Native',
          description: 'Not retrofitted. Built from the ground up with neural networks at the core.',
     },
     {
          number: '02',
          title: 'Edge Intelligence',
          description: 'Full autonomy onboard. No reliance on cloud connectivity or GPS.',
     },
     {
          number: '03',
          title: 'Swarm-First',
          description: 'Designed for multi-agent coordination and distributed decision making.',
     },
     {
          number: '04',
          title: 'Cost Effective',
          description: 'Asymmetric cost exchange. Neutralize threats at a fraction of the cost.',
     },
     {
          number: '05',
          title: 'Contested Ready',
          description: 'Resilient to jamming, spoofing, and electronic warfare countermeasures.',
     },
]

export function PlatformsGrid() {
     return (
          <section className="relative py-32 bg-black overflow-hidden border-y border-white/[0.03]">
               {/* Grid Background */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

               <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

                    {/* Two Column Layout */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                         {/* Left: Text Content */}
                         <div>
                              {/* Header */}
                              <div className="mb-12">
                                   <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                                        Why Kshatra Labs?
                                   </h2>

                                   <p className="text-lg text-neutral-400 leading-relaxed">
                                        We don't build toys. We build <span className="text-white font-medium">weapons-grade autonomy</span> for the modern battlefield.
                                   </p>
                              </div>

                              {/* Advantages List */}
                              <div className="space-y-8">
                                   {advantages.map((item, idx) => (
                                        <motion.div
                                             key={idx}
                                             initial={{ opacity: 0, x: -20 }}
                                             whileInView={{ opacity: 1, x: 0 }}
                                             transition={{ delay: idx * 0.1, duration: 0.5 }}
                                             viewport={{ once: true }}
                                             className="group"
                                        >
                                             <div className="flex gap-6">
                                                  {/* Number */}
                                                  <div className="flex-shrink-0">
                                                       <span className="text-4xl font-bold text-white/10 group-hover:text-blue-500/30 transition-colors duration-500">
                                                            {item.number}
                                                       </span>
                                                  </div>

                                                  {/* Content */}
                                                  <div className="flex-1 pt-1">
                                                       <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                                                            {item.title}
                                                       </h3>
                                                       <p className="text-sm text-neutral-400 leading-relaxed">
                                                            {item.description}
                                                       </p>
                                                  </div>
                                             </div>
                                        </motion.div>
                                   ))}
                              </div>
                         </div>

                         {/* Right: Floating Drone Image */}
                         <div className="relative h-[600px] flex items-center justify-center">
                              {/* Corner Brackets */}
                              <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/20"></div>
                              <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/20"></div>
                              <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/20"></div>
                              <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/20"></div>

                              {/* Labels */}
                              <div className="absolute top-12 left-12 px-3 py-1 bg-black/80 border border-white/20 backdrop-blur-sm">
                                   <span className="text-[10px] font-mono text-white tracking-wider">SEA</span>
                              </div>
                              <div className="absolute top-12 right-12 px-3 py-1 bg-black/80 border border-white/20 backdrop-blur-sm">
                                   <span className="text-[10px] font-mono text-white tracking-wider">LAND</span>
                              </div>

                              {/* Floating Drone */}
                              <motion.div
                                   animate={{
                                        y: [0, -15, 0],
                                        rotateY: [0, 5, 0, -5, 0],
                                   }}
                                   transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                   }}
                                   className="relative w-96 h-96"
                              >
                                   <Image
                                        src="/hawk.png"
                                        alt="Autonomous Drone"
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                   />
                              </motion.div>

                              {/* Crosshair overlay */}
                              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                   <div className="relative w-64 h-64">
                                        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>
                                   </div>
                              </div>
                         </div>

                    </div>
               </div>
          </section>
     )
}
