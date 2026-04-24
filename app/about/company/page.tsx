'use client'

import React from 'react'
import { Header } from '@/components/blocks/header'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { motion } from 'framer-motion'
import FooterSection from '@/components/blocks/footer-section'
import { Plane, Cpu, Eye, Network, Navigation, Target } from 'lucide-react'
import Partners from '@/components/blocks/partners'

export default function CompanyPage() {
     return (
          <div className="relative min-h-screen bg-black text-white selection:bg-white/20 overflow-hidden font-sans">
               {/* Fixed Background */}
               <div className="fixed inset-0 z-0 opacity-40">
                    <BackgroundPaths title="" />
               </div>

               <Header />

               <main className="relative z-10 pt-32 md:pt-40 pb-24 px-6 md:px-12 text-white">
                    <div className="max-w-7xl mx-auto space-y-32">

                         {/* 1. HERO SECTION */}
                         <div className="space-y-8">
                              <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
                                   <div className="max-w-4xl space-y-8">
                                        <motion.div
                                             initial={{ opacity: 0, x: -20 }}
                                             animate={{ opacity: 1, x: 0 }}
                                             transition={{ duration: 0.8 }}
                                             className="flex items-center gap-2 mb-4"
                                        >
                                             <div className="w-8 h-[1px] bg-white/20"></div>
                                             <span className="text-xs font-mono uppercase tracking-[0.4em] text-white/40">About Kshatra Labs</span>
                                        </motion.div>

                                        <motion.h1
                                             initial={{ opacity: 0, y: 30 }}
                                             animate={{ opacity: 1, y: 0 }}
                                             transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                                             className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9]"
                                             style={{ fontFamily: 'var(--font-space-grotesk)' }}
                                        >
                                             Defending <br />
                                             <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20 [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">What Matters</span>
                                        </motion.h1>

                                        <motion.p
                                             initial={{ opacity: 0, y: 20 }}
                                             animate={{ opacity: 1, y: 0 }}
                                             transition={{ duration: 0.8, delay: 0.3 }}
                                             className="text-lg text-neutral-300 font-light max-w-2xl leading-relaxed drop-shadow-md"
                                        >
                                             Kshatra Labs is focused on building the next generation of autonomous aerial defence systems. As drones become faster, cheaper, and more accessible, the threat they pose to critical infrastructure, military operations, and public safety continues to grow. Our goal is to develop intelligent systems capable of detecting, tracking, and neutralizing aerial threats in real time.
                                        </motion.p>
                                   </div>
                              </div>

                              {/* HUD Meta Footer */}
                              <motion.div
                                   initial={{ opacity: 0 }}
                                   animate={{ opacity: 1 }}
                                   transition={{ duration: 1, delay: 0.5 }}
                                   className="pt-32 md:pt-40 border-t border-white/5 flex flex-wrap items-center gap-x-8 gap-y-4 text-[10px] font-bold font-mono uppercase tracking-[0.3em] text-white"
                              >
                                   <div className="flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-defense-accent opacity-100"></div>
                                        <span>Established 2025</span>
                                   </div>
                                   <div className="flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-defense-accent opacity-100"></div>
                                        <span>Location: Bangalore, India</span>
                                   </div>
                              </motion.div>
                         </div>

                         {/* 2. MISSION & APPROACH */}
                         <div className="grid md:grid-cols-2 gap-16">
                              <div className="space-y-6">
                                   <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                        Our <span className="text-blue-400 text-glow-blue">Mission</span>
                                   </h2>
                                   <div className="text-lg text-neutral-300 leading-relaxed font-light space-y-6">
                                        <p>
                                             At Kshatra Labs, we engineer true autonomous defence platforms. Powered by our proprietary APEX autonomy stack, our systems detect, pursue, and neutralize asymmetric aerial threats at machine speed, keeping humans entirely out of the loop and out of harm&apos;s way.
                                        </p>
                                        <p>
                                             By combining edge AI, autonomous navigation, computer vision, and high-speed UAV platforms, we are building scalable and affordable counter-drone technologies designed for modern security challenges.
                                        </p>
                                   </div>
                              </div>

                              <div className="space-y-6">
                                   <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                        Our <span className="text-emerald-500 text-glow-green">Approach</span>
                                   </h2>
                                   <div className="text-lg text-neutral-300 leading-relaxed font-light space-y-6">
                                        <p>
                                             We focus on building systems that are autonomous, scalable, and cost-efficient.
                                        </p>
                                        <p>
                                             By running AI models directly onboard the platform and minimizing reliance on external infrastructure, our systems are designed to operate reliably in real-world and contested environments. Furthermore, we are building a centralized software backbone—akin to systems like Lattice and Hivemind—that connects these edge nodes into a unified, intelligent network, enabling seamless command, control, and multi-agent coordination where low latency and independence are critical.
                                        </p>
                                   </div>
                              </div>
                         </div>

                         {/* 3. TECHNOLOGY FOCUS */}
                         <motion.div
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 1 }}
                              className="group relative py-20 px-8 md:px-16 bg-neutral-900/30 border border-white/10 overflow-hidden rounded-[2.5rem]"
                         >
                              {/* Neural Grid Background */}
                              <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
                                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                              </div>

                              <div className="relative z-10 max-w-5xl space-y-12">
                                   <div className="space-y-4">
                                        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                             Technology Focus
                                        </h2>
                                        <p className="text-xl text-neutral-400 leading-relaxed font-light max-w-3xl">
                                             Kshatra Labs focuses on the development of advanced technologies at the intersection of AI, robotics, and autonomous systems.
                                        </p>
                                        <div className="h-[2px] w-24 bg-blue-500/50 group-hover:w-48 transition-all duration-700 mt-6"></div>
                                   </div>

                                   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-32 md:pt-40">
                                        {[
                                             { label: 'Autonomous UAV systems', Icon: Plane },
                                             { label: 'Edge AI and onboard decision systems', Icon: Cpu },
                                             { label: 'Computer vision & target tracking', Icon: Eye },
                                             { label: 'Reinforcement learning for control', Icon: Network },
                                             { label: 'GPS-denied navigation & sensor fusion', Icon: Navigation },
                                        ].map(({ label, Icon }) => (
                                             <div
                                                  key={label}
                                                  className="p-6 bg-black/50 border border-white/10 backdrop-blur-xl rounded-2xl flex flex-col gap-4 hover:bg-white/5 transition-colors group/item"
                                             >
                                                  <Icon className="w-6 h-6 text-blue-400" />
                                                  <span className="font-mono text-sm leading-relaxed text-neutral-300 group-hover/item:text-white transition-colors">
                                                       {label}
                                                  </span>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </motion.div>

                         {/* 4. WHY IT MATTERS & VISION */}
                         <div className="grid md:grid-cols-2 gap-16 border-t border-white/5 pt-32 md:pt-40">
                              <div className="space-y-6">
                                   <div className="flex items-center gap-4 mb-8">
                                        <Target className="w-8 h-8 text-defense-accent" />
                                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-0" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                             Why It Matters
                                        </h2>
                                   </div>
                                   <div className="text-lg text-neutral-300 leading-relaxed font-light space-y-6">
                                        <p>
                                             The nature of warfare is evolving rapidly, with asymmetric threats challenging traditional defence paradigms. True deterrence now requires systems that are as adaptable and scalable as the threats they counter. Intelligent, cost-effective defence networks will form the backbone of future security.
                                        </p>
                                        <p>
                                             Kshatra Labs is engineering autonomous, scalable swarm technologies that shift the paradigm from reactive defence to proactive deterrence, shaping the future of multi-domain security.
                                        </p>
                                   </div>
                              </div>

                              <div className="space-y-6">
                                   <div className="flex items-center gap-4 mb-8">
                                        <Network className="w-8 h-8 text-emerald-500" />
                                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-0" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                             Future Vision
                                        </h2>
                                   </div>
                                   <div className="text-lg text-neutral-300 leading-relaxed font-light space-y-6">
                                        <p>
                                             While our immediate focus includes autonomous kinetic interception, our longer-term vision extends to a comprehensive ecosystem of intelligent, cost-effective swarm systems. We are building the foundation for mass-manufacturable, collaborative autonomous machines capable of operating reliably in contested environments.
                                        </p>
                                        <p>
                                             By advancing the capabilities of distributed AI and autonomous control, we aim to build highly scalable swarm systems that redefine strategic deterrence and next-generation unmanned operations.
                                        </p>
                                   </div>
                              </div>
                         </div>

                         <Partners />

                    </div>
               </main>

               {/* Grid Overlay */}
               <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
               <FooterSection />
          </div>
     )
}
