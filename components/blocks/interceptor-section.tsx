'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

export function InterceptorSection() {
     const videoRef = useRef<HTMLVideoElement>(null);
     const [isMuted] = useState(true);



     useEffect(() => {
          const video = videoRef.current;
          if (!video) return;

          // Set looping property explicitly
          video.loop = true;

          const handlePlay = () => {
               if (video.paused) {
                    video.play().catch(error => {
                         console.log("Video auto-resume failed:", error);
                    });
               }
          };

          // Initial play
          handlePlay();

          // Continuous check for looping reliability
          video.addEventListener('ended', handlePlay);
          video.addEventListener('pause', handlePlay);

          return () => {
               video.removeEventListener('ended', handlePlay);
               video.removeEventListener('pause', handlePlay);
          };
     }, []);

     useEffect(() => {
          if (videoRef.current) {
               videoRef.current.muted = isMuted;
          }
     }, [isMuted]);

     return (
          <section className="relative bg-black text-white font-sans overflow-hidden">


               {/* PRODUCT INTRO - HAWK */}
               <div className="border-y border-white/5 py-24 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                         <Image
                              src="/styles/hawkmeet.jpg"
                              alt="Background"
                              fill
                              className="w-full h-full object-cover opacity-60 mix-blend-luminosity transition-opacity duration-1000"
                         />
                         <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80"></div>
                         <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                         <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black"></div>
                    </div>
                    {/* Background Decorative Element */}
                    <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-blue-500/5 to-transparent pointer-events-none z-0"></div>

                    <div className="max-w-7xl mx-auto space-y-16 relative z-10">
                         <div className="grid md:grid-cols-2 gap-12 items-center">
                              <div className="order-2 md:order-1 space-y-8 relative z-20">
                                   <h3 className="text-3xl md:text-5xl font-bold font-mono uppercase tracking-tight">
                                        INTRODUCING  <span className="text-blue-500">HAWK</span>
                                   </h3>
                                   <div className="space-y-6">
                                        <div className="text-blue-400 font-mono text-sm uppercase tracking-widest">Autonomous Interceptor UAV</div>

                                        <div className="space-y-4 text-xl text-neutral-300 font-light leading-relaxed">
                                             <p>
                                                  <span className="text-white font-medium">Drones are rapidly becoming a major security threat</span> to critical infrastructure, military assets, and civilian environments. Existing counter-drone systems are expensive, slow to deploy, and struggle to neutralize fast-moving or network-based threats.
                                             </p>

                                             <div className="py-2 border-l-2 border-blue-500/50 pl-4 bg-blue-500/5">
                                                  <p className="text-2xl text-white font-medium uppercase tracking-wide">
                                                       Hawk is built to close the gap between detection and neutralization.
                                                  </p>
                                             </div>

                                             <p>
                                                  Developed by <span className="text-blue-400 font-medium">Kshatra Labs</span>, Hawk is a high-speed autonomous interceptor UAV designed to <span className="text-white">detect, pursue, and neutralize</span> hostile drones in real time, even in contested or GPS-denied environments.
                                             </p>

                                             <p>
                                                  Powered by fully onboard <span className="text-blue-400 font-mono text-sm">EDGE AI</span>, Hawk operates independently without cloud connectivity, enabling ultra-fast response and reliable operation in electronic warfare conditions.
                                             </p>
                                        </div>

                                        {/* CTA Button */}
                                        <Link
                                             href="/products/hawk"
                                             className="inline-flex items-center gap-3 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-mono text-sm font-bold uppercase tracking-widest transition-all duration-200 group/btn"
                                        >
                                             View HAWK
                                             <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                                        </Link>
                                   </div>
                              </div>
                              <div className="order-1 md:order-2 flex items-center justify-center">
                                   <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 group
                                        shadow-[0_40px_100px_-30px_rgba(59,130,246,.5)]"
                                   >
                                        <Image
                                             src="/drone.png"
                                             alt="Hawk Interceptor"
                                             fill
                                             sizes="(min-width: 768px) 450px, 288px"
                                             className="object-contain p-2 transition-transform duration-700"
                                        />

                                        {/* Crosshair Overlay */}
                                        <motion.div
                                             animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                                             transition={{ duration: 6, repeat: Infinity }}
                                             className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                        >
                                             <div className="relative w-40 h-40 md:w-72 md:h-72">
                                                  <Image
                                                       src="/realcross.png"
                                                       alt="Target Lock"
                                                       fill
                                                       sizes="(min-width: 768px) 288px, 160px"
                                                       className="object-contain opacity-40"
                                                  />
                                             </div>
                                        </motion.div>

                                        {/* Fixed Technical Overlay */}
                                        <div className="absolute top-6 left-6 space-y-1 pointer-events-none z-10 drop-shadow-md">
                                             <div className="font-mono text-lg font-bold text-white uppercase tracking-wider">
                                             </div>
                                             <div className="font-mono text-[11px] text-blue-400 uppercase tracking-widest">
                                             </div>
                                        </div>
                                        <div className="absolute bottom-6 right-6 font-bold text-[10px] text-white/40 uppercase tracking-widest pointer-events-none z-10">
                                             Hawk Interceptor
                                        </div>
                                   </motion.div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Features Section - Tactical 2D Grid */}
               <div className="py-24 px-6 md:px-12 relative overflow-hidden bg-black border-y border-white/20 font-sans">
                    {/* Tactical 2D Background Grid Lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

                    <div className="max-w-7xl mx-auto space-y-16 relative z-10 w-full">
                         {/* High-Contrast 2D Section Header */}
                         <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-white/20 pb-6">
                              <div>
                                   <h2 className="text-3xl md:text-5xl font-bold font-mono uppercase tracking-tight text-white">
                                        Features
                                   </h2>
                              </div>
                              <div className="font-mono text-xs uppercase text-neutral-400 border border-white/20 bg-neutral-950 px-3 py-1.5 rounded-none flex items-center gap-2">
                                   <span>Hawk Interceptor</span>
                              </div>
                         </div>

                         {/* High-Contrast 2D Feature Grid - Sharp Corners (rounded-none), Zero 3D */}
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {/* 01: High-Speed Interception */}
                              <div className="relative p-7 border border-white/20 bg-black/90 space-y-6 rounded-none hover:border-blue-500 hover:bg-neutral-950 transition-all duration-200 group">
                                   {/* Corner Crosshair Accents */}
                                   <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   {/* Sharp Top Hover Line */}
                                   <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 pointer-events-none" />

                                   <div className="flex items-start justify-between gap-4">
                                        <Icon icon="solar:bolt-bold-duotone" className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                                        <span className="font-mono text-xs font-bold text-neutral-500 group-hover:text-blue-400 transition-colors">
                                             [01]
                                        </span>
                                   </div>

                                   <div className="space-y-3">
                                        <div className="text-white font-mono text-base uppercase tracking-wider font-bold">
                                             High-Speed Interception
                                        </div>
                                        <p className="text-neutral-200 text-sm font-normal leading-relaxed">
                                             Engage hostile drones at speeds exceeding 300 km/h, allowing rapid response before threats reach protected zones.
                                        </p>
                                   </div>
                              </div>

                              {/* 02: Autonomous Target Lock */}
                              <div className="relative p-7 border border-white/20 bg-black/90 space-y-6 rounded-none hover:border-blue-500 hover:bg-neutral-950 transition-all duration-200 group">
                                   <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 pointer-events-none" />

                                   <div className="flex items-start justify-between gap-4">
                                        <Icon icon="solar:target-bold-duotone" className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                                        <span className="font-mono text-xs font-bold text-neutral-500 group-hover:text-blue-400 transition-colors">
                                             [02]
                                        </span>
                                   </div>

                                   <div className="space-y-3">
                                        <div className="text-white font-mono text-base uppercase tracking-wider font-bold">
                                             Autonomous Target Lock
                                        </div>
                                        <p className="text-neutral-200 text-sm font-normal leading-relaxed">
                                             Advanced onboard AI performs real-time detection, tracking, and interception with minimal human input.
                                        </p>
                                   </div>
                              </div>

                              {/* 03: Fully Onboard Edge AI */}
                              <div className="relative p-7 border border-white/20 bg-black/90 space-y-6 rounded-none hover:border-blue-500 hover:bg-neutral-950 transition-all duration-200 group">
                                   <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 pointer-events-none" />

                                   <div className="flex items-start justify-between gap-4">
                                        <Icon icon="solar:cpu-bolt-bold-duotone" className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                                        <span className="font-mono text-xs font-bold text-neutral-500 group-hover:text-blue-400 transition-colors">
                                             [03]
                                        </span>
                                   </div>

                                   <div className="space-y-3">
                                        <div className="text-white font-mono text-base uppercase tracking-wider font-bold">
                                             Fully Onboard Edge AI
                                        </div>
                                        <p className="text-neutral-200 text-sm font-normal leading-relaxed">
                                             All perception and decision-making runs directly on the UAV, ensuring low latency and zero cloud dependency.
                                        </p>
                                   </div>
                              </div>

                              {/* 04: GPS-Denied Navigation */}
                              <div className="relative p-7 border border-white/20 bg-black/90 space-y-6 rounded-none hover:border-blue-500 hover:bg-neutral-950 transition-all duration-200 group">
                                   <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 pointer-events-none" />

                                   <div className="flex items-start justify-between gap-4">
                                        <Icon icon="solar:satellite-bold-duotone" className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                                        <span className="font-mono text-xs font-bold text-neutral-500 group-hover:text-blue-400 transition-colors">
                                             [04]
                                        </span>
                                   </div>

                                   <div className="space-y-3">
                                        <div className="text-white font-mono text-base uppercase tracking-wider font-bold">
                                             GPS-Denied Navigation
                                        </div>
                                        <p className="text-neutral-200 text-sm font-normal leading-relaxed">
                                             Vision-based navigation fused with inertial sensing enables reliable operation even when GPS signals are jammed or unavailable.
                                        </p>
                                   </div>
                              </div>

                              {/* 05: Network Defence Ready */}
                              <div className="relative p-7 border border-white/20 bg-black/90 space-y-6 rounded-none hover:border-blue-500 hover:bg-neutral-950 transition-all duration-200 group">
                                   <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 pointer-events-none" />

                                   <div className="flex items-start justify-between gap-4">
                                        <Icon icon="solar:shield-check-bold-duotone" className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                                        <span className="font-mono text-xs font-bold text-neutral-500 group-hover:text-blue-400 transition-colors">
                                             [05]
                                        </span>
                                   </div>

                                   <div className="space-y-3">
                                        <div className="text-white font-mono text-base uppercase tracking-wider font-bold">
                                             Network Defence Ready
                                        </div>
                                        <p className="text-neutral-200 text-sm font-normal leading-relaxed">
                                             Multiple Hawk units can coordinate to intercept multiple targets and drone networks simultaneously.
                                        </p>
                                   </div>
                              </div>

                              {/* 06: Low-Cost Scalable Defence */}
                              <div className="relative p-7 border border-white/20 bg-black/90 space-y-6 rounded-none hover:border-blue-500 hover:bg-neutral-950 transition-all duration-200 group">
                                   <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/40 group-hover:border-blue-500 transition-colors pointer-events-none" />
                                   <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 pointer-events-none" />

                                   <div className="flex items-start justify-between gap-4">
                                        <Icon icon="solar:tag-price-bold-duotone" className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                                        <span className="font-mono text-xs font-bold text-neutral-500 group-hover:text-blue-400 transition-colors">
                                             [06]
                                        </span>
                                   </div>

                                   <div className="space-y-3">
                                        <div className="text-white font-mono text-base uppercase tracking-wider font-bold">
                                             Low-Cost Scalable Defence
                                        </div>
                                        <p className="text-neutral-200 text-sm font-normal leading-relaxed">
                                             Traditional interceptor systems cost 100× more. Hawk enables scalable deployment for wide-area protection.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>


          </section >

     )
}
