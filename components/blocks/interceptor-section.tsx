'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Shield, Target, Zap, WifiOff, Network } from 'lucide-react'

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

                                        <div className="space-y-4 text-lg text-neutral-300 font-light leading-relaxed">
                                             <p>
                                                  <span className="text-white font-medium">Drones are rapidly becoming a major security threat</span> to critical infrastructure, military assets, and civilian environments. Existing counter-drone systems are expensive, slow to deploy, and struggle to neutralize fast-moving or swarm-based threats.
                                             </p>

                                             <div className="py-2 border-l-2 border-blue-500/50 pl-4 bg-blue-500/5">
                                                  <p className="text-xl text-white font-medium uppercase tracking-wide">
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
                                                       className="object-contain opacity-40"
                                                  />
                                             </div>
                                        </motion.div>

                                        {/* Fixed Technical Overlay */}
                                        <div className="absolute top-6 left-6 space-y-1 pointer-events-none z-10 drop-shadow-md">
                                             <div className="font-mono text-lg font-bold text-white uppercase tracking-wider">
                                             </div>
                                             <div className="font-mono text-[10px] text-blue-400 uppercase tracking-widest">
                                             </div>
                                        </div>
                                        <div className="absolute bottom-6 right-6 font-bold text-[9px] text-white/40 uppercase tracking-widest pointer-events-none z-10">
                                             Hawk Interceptor
                                        </div>
                                   </motion.div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Features Section - Moved below the Introducing Hawk Grid */}
               <div className="py-24 px-6 md:px-12 relative overflow-hidden bg-black/50 border-b border-white/5">
                    <div className="max-w-7xl mx-auto space-y-12 relative z-10 w-full">
                         <div className="flex items-center justify-center gap-4 max-w-2xl mx-auto">
                              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-blue-500/30"></div>
                              <div className="text-blue-500 font-mono text-xl uppercase tracking-widest font-bold">Features</div>
                              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-blue-500/30"></div>
                         </div>

                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                              <div className="p-6 border border-white/10 bg-white/[0.02] space-y-4 rounded-xl hover:bg-white/[0.04] hover:border-blue-500/50 transition-all duration-300 group">
                                   <div className="p-3 bg-blue-500/10 rounded-lg w-fit group-hover:bg-blue-500/20 transition-colors">
                                        <Zap className="w-6 h-6 text-blue-400" />
                                   </div>
                                   <div className="text-white font-mono text-sm uppercase tracking-wider font-bold">
                                        High-Speed Interception
                                   </div>
                                   <div className="text-neutral-400 font-light leading-relaxed">Engage hostile drones at speeds exceeding 300 km/h, allowing rapid response before threats reach protected zones.</div>
                              </div>

                              <div className="p-6 border border-white/10 bg-white/[0.02] space-y-4 rounded-xl hover:bg-white/[0.04] hover:border-blue-500/50 transition-all duration-300 group">
                                   <div className="p-3 bg-blue-500/10 rounded-lg w-fit group-hover:bg-blue-500/20 transition-colors">
                                        <Target className="w-6 h-6 text-blue-400" />
                                   </div>
                                   <div className="text-white font-mono text-sm uppercase tracking-wider font-bold">
                                        Autonomous Target Lock
                                   </div>
                                   <div className="text-neutral-400 font-light leading-relaxed">Advanced onboard AI performs real-time detection, tracking, and interception with minimal human input.</div>
                              </div>

                              <div className="p-6 border border-white/10 bg-white/[0.02] space-y-4 rounded-xl hover:bg-white/[0.04] hover:border-blue-500/50 transition-all duration-300 group">
                                   <div className="p-3 bg-blue-500/10 rounded-lg w-fit group-hover:bg-blue-500/20 transition-colors">
                                        <Shield className="w-6 h-6 text-blue-400" />
                                   </div>
                                   <div className="text-white font-mono text-sm uppercase tracking-wider font-bold">
                                        Fully Onboard Edge AI
                                   </div>
                                   <div className="text-neutral-400 font-light leading-relaxed">All perception and decision-making runs directly on the UAV, ensuring low latency and zero cloud dependency.</div>
                              </div>

                              <div className="p-6 border border-white/10 bg-white/[0.02] space-y-4 rounded-xl hover:bg-white/[0.04] hover:border-blue-500/50 transition-all duration-300 group">
                                   <div className="p-3 bg-blue-500/10 rounded-lg w-fit group-hover:bg-blue-500/20 transition-colors">
                                        <WifiOff className="w-6 h-6 text-blue-400" />
                                   </div>
                                   <div className="text-white font-mono text-sm uppercase tracking-wider font-bold">
                                        GPS-Denied Navigation
                                   </div>
                                   <div className="text-neutral-400 font-light leading-relaxed">Vision-based navigation fused with inertial sensing enables reliable operation even when GPS signals are jammed or unavailable.</div>
                              </div>

                              <div className="p-6 border border-white/10 bg-white/[0.02] space-y-4 rounded-xl hover:bg-white/[0.04] hover:border-blue-500/50 transition-all duration-300 group">
                                   <div className="p-3 bg-blue-500/10 rounded-lg w-fit group-hover:bg-blue-500/20 transition-colors">
                                        <Network className="w-6 h-6 text-blue-400" />
                                   </div>
                                   <div className="text-white font-mono text-sm uppercase tracking-wider font-bold">
                                        Swarm Defense Ready
                                   </div>
                                   <div className="text-neutral-400 font-light leading-relaxed">Multiple Hawk units can coordinate to intercept multiple targets and drone swarms simultaneously.</div>
                              </div>

                              <div className="p-6 border border-white/10 bg-white/[0.02] space-y-4 rounded-xl hover:bg-white/[0.04] hover:border-blue-500/50 transition-all duration-300 group">
                                   <div className="p-3 bg-blue-500/10 rounded-lg w-fit group-hover:bg-blue-500/20 transition-colors">
                                        <ArrowRight className="w-6 h-6 text-blue-400" />
                                   </div>
                                   <div className="text-white font-mono text-sm uppercase tracking-wider font-bold">
                                        Low-Cost Scalable Defense
                                   </div>
                                   <div className="text-neutral-400 font-light leading-relaxed">Traditional interceptor systems cost 100× more. Hawk enables scalable deployment for wide-area protection.</div>
                              </div>

                         </div>
                    </div>
               </div>


          </section >

     )
}
