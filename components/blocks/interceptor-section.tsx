'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Shield, Target, Zap, WifiOff, Network, Volume2, VolumeX } from 'lucide-react'

export function InterceptorSection() {
     const videoRef = useRef<HTMLVideoElement>(null);
     const [isMuted, setIsMuted] = useState(true);



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

               {/* NOT JUST A DRONE SECTION */}
               <div className="relative py-24 px-6 md:px-12 bg-black border-b border-white/5 overflow-hidden">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                         {/* LEFT: Heading & Intro */}
                         <div className="space-y-6">
                              <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 font-mono text-[10px] uppercase tracking-widest text-blue-500 mb-4">
                                   Interceptor
                              </div>
                              <h2 className="text-4xl md:text-5xl font-black font-mono uppercase tracking-tighter leading-[1.1]">

                              </h2>
                              <div className="space-y-4 text-neutral-400">
                                   <p className="text-lg">
                                        <strong className="text-white">DETECT. CHASE. NEUTRALIZE.</strong>
                                   </p>
                                   <p className="leading-relaxed">
                                        Built to stop airborne threats.
                                   </p>
                              </div>

                              {/* REINSERTED VIDEO */}
                              <div className="mt-8 relative aspect-video border border-white/10 bg-neutral-900 group">
                                   <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover transition-all duration-700"
                                   >
                                        <source src="/video/demo.mp4" type="video/webm" />
                                   </video>
                                   <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-blue-500/50 transition-all"></div>

                              </div>
                         </div>

                         {/* RIGHT: Features List */}
                         <div className="space-y-12">
                              {/* 01 */}
                              <div className="relative pl-8 border-l border-white/10 group hover:border-blue-500/50 transition-colors">
                                   <div className="absolute top-0 left-[-1px] w-[2px] h-0 bg-blue-500 transition-all duration-300 group-hover:h-full"></div>
                                   <div className="font-mono text-sm text-blue-500 mb-2">01 //</div>
                                   <h4 className="text-xl font-bold font-mono uppercase text-white mb-2">High-Speed Autonomous Flight</h4>
                                   <p className="text-sm text-neutral-400 leading-relaxed">
                                        Engineered for rapid response and high-velocity interception of hostile objects in mid-air.
                                   </p>
                              </div>

                              {/* 02 */}
                              <div className="relative pl-8 border-l border-white/10 group hover:border-blue-500/50 transition-colors">
                                   <div className="absolute top-0 left-[-1px] w-[2px] h-0 bg-blue-500 transition-all duration-300 group-hover:h-full"></div>
                                   <div className="font-mono text-sm text-blue-500 mb-2">02 //</div>
                                   <h4 className="text-xl font-bold font-mono uppercase text-white mb-2">Real-Time Target Tracking</h4>
                                   <p className="text-sm text-neutral-400 leading-relaxed">
                                        Advanced sensor integration for precise detection and persistent chasing of airborne threats.
                                   </p>
                              </div>

                              {/* 03 */}
                              <div className="relative pl-8 border-l border-white/10 group hover:border-blue-500/50 transition-colors">
                                   <div className="absolute top-0 left-[-1px] w-[2px] h-0 bg-blue-500 transition-all duration-300 group-hover:h-full"></div>
                                   <div className="font-mono text-sm text-blue-500 mb-2">03 //</div>
                                   <h4 className="text-xl font-bold font-mono uppercase text-white mb-2">SWARM CAPABLE</h4>
                                   <p className="text-sm text-neutral-400 leading-relaxed">
                                        This system is engineered specifically to intercept and neutralize hostile objects.<br />
                                        Made for rapid response. Designed for protection.
                                   </p>
                              </div>
                         </div>

                    </div>
               </div>

               {/* VIDEO SECTION */}
               <div className="relative py-24 px-6 md:px-12 bg-black border-b border-white/5 overflow-hidden">
                    <div className="max-w-4xl mx-auto">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className="relative"
                         >
                              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl group/video">
                                   <video
                                        ref={videoRef}
                                        autoPlay
                                        muted={isMuted}
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover"
                                        preload="auto"
                                   >
                                        <source src="/video/main-video.webm" type="video/webm" />
                                   </video>
                                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

                                   {/* Audio Toggle Button */}
                                   <button
                                        onClick={() => setIsMuted(!isMuted)}
                                        className="absolute bottom-4 right-4 z-20 p-2.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md hover:bg-black/60 hover:border-blue-500/50 transition-all duration-300 group/audio"
                                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                                   >
                                        {isMuted ? (
                                             <VolumeX className="w-5 h-5 text-white/70 group-hover/audio:text-blue-500 transition-colors" />
                                        ) : (
                                             <Volume2 className="w-5 h-5 text-blue-500 transition-colors" />
                                        )}
                                   </button>
                              </div>
                         </motion.div>
                    </div>
               </div>

               {/* TECH FOCUS SECTION */}
               <div className="py-24 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto">
                         <div className="mb-16 space-y-4">
                              <h2 className="text-3xl md:text-5xl font-bold font-mono uppercase">Tech Focus</h2>
                              <div className="h-1 w-24 bg-blue-500"></div>
                         </div>

                         <div className="grid md:grid-cols-3 gap-8">
                              {/* HAWKEYE */}
                              <div className="group space-y-6 p-8 border border-white/10 bg-neutral-900/30 hover:bg-neutral-900/50 transition-all">
                                   <h4 className="text-2xl font-bold font-mono uppercase">Hawkeye</h4>
                                   <p className="text-neutral-400 text-sm">
                                        World&apos;s fastest optical object tracker. Real-time vision-based tracking for high-speed interception.
                                   </p>
                              </div>

                              {/* APEX */}
                              <div className="group space-y-6 p-8 border border-white/10 bg-neutral-900/30 hover:bg-neutral-900/50 transition-all">
                                   <h4 className="text-2xl font-bold font-mono uppercase">Apex</h4>
                                   <p className="text-neutral-400 text-sm">
                                        Autonomous Terminal guidance for the world&apos;s fastest interception. Locking on and neutralizing threats at machine speed.
                                   </p>
                              </div>

                              {/* SWARM */}
                              <div className="group space-y-6 p-8 border border-white/10 bg-neutral-900/30 hover:bg-neutral-900/50 transition-all">
                                   <h4 className="text-2xl font-bold font-mono uppercase">Swarm</h4>
                                   <p className="text-neutral-400 text-sm">
                                        Multi-agent coordination for large-scale drone neutralization. Scalable autonomous defense networks capable of suppressing massive aerial swarms through unified intelligence.
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>

               {/* MANIFESTO / FINAL WORD */}
               <div className="relative py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5">
                    <div className="max-w-4xl mx-auto text-center space-y-8 flex flex-col items-center">
                         <h3 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-white">
                              Modern warfare demands systems that are not just automated — but truly autonomous.
                         </h3>
                         <p className="text-lg md:text-2xl text-blue-200/60 font-medium leading-relaxed max-w-3xl mx-auto pt-4">
                              We engineer intelligence that enables machines to sense, decide, and act in real time at the edge.
                         </p>
                    </div>
               </div>
          </section >

     )
}
