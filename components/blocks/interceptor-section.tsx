'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Shield, Target, Zap, Waves, WifiOff, Network, Volume2, VolumeX } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-is-mobile'

export function InterceptorSection() {
     const isMobile = useIsMobile()

     const videoRef = useRef<HTMLVideoElement>(null);
     const [isMuted, setIsMuted] = useState(true);

     const mediaItems = [
          { type: 'image', src: '/warnings/img.avif' },
          { type: 'video', src: '/video/threatdrone.mp4' },
          { type: 'image', src: '/warnings/img.jpg' },
          { type: 'image', src: '/warnings/new.jpg' }
     ]

     const [currentIndex, setCurrentIndex] = useState(0)

     useEffect(() => {
          const timer = setInterval(() => {
               setCurrentIndex((prev) => (prev + 1) % mediaItems.length)
          }, 5000)
          return () => clearInterval(timer)
     }, [])

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
               {/* PROBLEM INTRO SECTION */}
               <div className="relative min-h-[80vh] flex items-center pt-24 pb-12 px-6 md:px-12">
                    <div className="absolute inset-0 z-0">
                         <img
                              src="/bg/page2bg.png"
                              alt="Background"
                              className="w-full h-full object-cover opacity-40 mix-blend-luminosity transition-opacity duration-1000"
                         />
                         {/* Overlays to match Threat Analysis style */}
                         <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]"></div>
                         <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                         <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black"></div>
                    </div>


                    <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
                         <div className="space-y-8 border-l-4 border-red-600 pl-8 bg-black/20 backdrop-blur-sm p-6">
                              <h2 className="text-4xl md:text-6xl font-black font-mono tracking-tighter uppercase leading-none">
                                   Drones are becoming <br />
                                   <span className="text-red-500 drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">A Massive Threat</span>
                              </h2>
                              <p className="text-xl text-neutral-400 max-w-xl leading-relaxed">
                                   Defenses are failing. Current drone defense systems lack reliable, passive hardkill capabilities. The gap between detection and neutralization is widening, leaving critical infrastructure and personnel exposed.
                              </p>
                         </div>
                         <div className="flex items-center justify-center">
                              <motion.div
                                   animate={{ y: [0, -10, 0] }}
                                   transition={{ duration: 5, repeat: Infinity }}
                                   className="relative w-full aspect-video md:max-w-xl lg:max-w-2xl rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl
                                   shadow-[0_30px_80px_-30px_rgba(239,68,68,.6)]"
                              >

                                   {/* Soft frame */}
                                   <div className="absolute inset-0 z-10 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-red-500/20 opacity-40 pointer-events-none" />
                                   <div className="absolute inset-0 z-10 rounded-3xl border border-white/5 pointer-events-none" />

                                   <AnimatePresence mode="wait">
                                        <motion.div
                                             key={currentIndex}
                                             initial={{ opacity: 0 }}
                                             animate={{ opacity: 1 }}
                                             exit={{ opacity: 0 }}
                                             transition={{ duration: 0.8, ease: "easeInOut" }}
                                             className="absolute inset-0 z-0"
                                        >
                                             {mediaItems[currentIndex].type === 'video' ? (
                                                  <div className="w-full h-full relative">
                                                       <video
                                                            autoPlay
                                                            muted
                                                            loop
                                                            playsInline
                                                            className="w-full h-full object-cover"
                                                       >
                                                            <source src={mediaItems[currentIndex].src} type="video/mp4" />
                                                       </video>
                                                       <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay pointer-events-none" />
                                                  </div>
                                             ) : (
                                                  <Image
                                                       src={mediaItems[currentIndex].src}
                                                       alt="Threat Warning"
                                                       fill
                                                       className="object-cover"
                                                  />
                                             )}
                                        </motion.div>
                                   </AnimatePresence>

                                   {/* Crosshair - Only show for images */}
                                   <AnimatePresence>
                                        {mediaItems[currentIndex].type === 'image' && (
                                             <motion.div
                                                  initial={{ opacity: 0, scale: 0.8 }}
                                                  animate={{ opacity: 0.8, scale: 1 }}
                                                  exit={{ opacity: 0, scale: 0.8 }}
                                                  transition={{ duration: 0.5 }}
                                                  className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
                                             >
                                                  <div className="relative w-[60%] h-[60%]">
                                                       <Image
                                                            src="/realcross.png"
                                                            alt="Target Lock"
                                                            fill
                                                            className="object-contain"
                                                       />
                                                  </div>
                                             </motion.div>
                                        )}
                                   </AnimatePresence>
                              </motion.div>
                         </div>
                    </div>
               </div>

               {/* PRODUCT INTRO - HAWK */}
               <div className="border-y border-white/5 py-24 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                         <img
                              src="/styles/hawkmeet.jpg"
                              alt="Background"
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
                                   <div className="space-y-4">
                                        <div className="text-blue-400 font-mono text-sm uppercase tracking-widest">Autonomous Interceptor UAV</div>
                                        <p className="text-lg text-neutral-300 leading-relaxed font-light">
                                             High-speed autonomous interceptor designed to neutralize hostile drones and swarms.
                                        </p>
                                        <p className="text-lg text-neutral-300 leading-relaxed font-light">
                                             Powered by fully onboard Edge AI, Hawk operates in GPS-denied environments with real-time target acquisition.
                                        </p>
                                        <div className="pt-2">
                                             <p className="inline-block text-sm font-mono text-blue-400/90 border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 rounded-sm">
                                                  Drone cost &lt; $1,000 while traditional intercept systems cost 100x more.
                                             </p>
                                        </div>
                                   </div>

                                   {/* Performance Metrics */}
                                   <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm md:text-base font-mono text-neutral-300">
                                        <div className="flex items-center gap-3">
                                             <Zap className="w-5 h-5 text-blue-500" /> 300+ km/h
                                        </div>
                                        <div className="flex items-center gap-3">
                                             <Target className="w-5 h-5 text-blue-500" /> Autonomous Target Lock
                                        </div>
                                        <div className="flex items-center gap-3">
                                             <WifiOff className="w-5 h-5 text-blue-500" /> Zero Cloud Dependency
                                        </div>
                                        <div className="flex items-center gap-3">
                                             <Network className="w-5 h-5 text-blue-500" /> Swarm Capable
                                        </div>
                                   </div>

                                   {/* Upgraded Feature Cards */}
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                        <div className="p-5 border border-white/10 bg-white/5 space-y-3 rounded-lg">
                                             <div className="text-blue-500 font-mono text-xs uppercase tracking-widest font-bold">GPS-Denied Navigation</div>
                                             <div className="text-sm text-neutral-400 font-light leading-relaxed">Vision + inertial fusion enables operation without satellite signals.</div>
                                        </div>
                                        <div className="p-5 border border-white/10 bg-white/5 space-y-3 rounded-lg">
                                             <div className="text-blue-500 font-mono text-xs uppercase tracking-widest font-bold">Fully Onboard Edge AI</div>
                                             <div className="text-sm text-neutral-400 font-light leading-relaxed">Real-time detection, tracking, and interception.</div>
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
                                        <source src="/video/intercept.mp4" type="video/mp4" />
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
          </section>

     )
}
