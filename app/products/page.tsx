'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Header } from '@/components/blocks/header'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { motion } from 'motion/react'
import { Volume2, VolumeX } from 'lucide-react'
import { ShinyButton } from '@/components/ui/shiny-button'

export default function ProductsPage() {
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
          <div className="relative min-h-screen bg-black text-white selection:bg-white/20 overflow-hidden">
               {/* Fixed Background */}
               <div className="fixed inset-0 z-0 opacity-40">
                    <BackgroundPaths title="" />
               </div>

               <Header />

               <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-32">
                    <div className="max-w-4xl text-center space-y-8">
                         {/* Product Pipeline Active - Hidden */}
                         {/* <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full"
                         >
                              <div className="w-2 h-2 rounded-full bg-defense-accent animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.6)]"></div>
                              <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-white/70">
                                   Product Pipeline Active
                              </span>
                         </motion.div> */}

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                              className="relative"
                         >
                              <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl group/video">
                                   <video
                                        ref={videoRef}
                                        autoPlay
                                        muted={isMuted}
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover"
                                        preload="auto"
                                   >
                                        <source src="/video/intercept.webm" type="video/webm" />
                                   </video>
                                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

                                   {/* Audio Toggle Button */}
                                   <button
                                        onClick={() => setIsMuted(!isMuted)}
                                        className="absolute bottom-4 right-4 z-20 p-2.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md hover:bg-black/60 hover:border-defense-accent/50 transition-all duration-300 group/audio"
                                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                                   >
                                        {isMuted ? (
                                             <VolumeX className="w-5 h-5 text-white/70 group-hover/audio:text-defense-accent transition-colors" />
                                        ) : (
                                             <Volume2 className="w-5 h-5 text-defense-accent transition-colors" />
                                        )}
                                   </button>
                              </div>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                              className="pt-12 flex flex-col items-center"
                         >
                              <ShinyButton className="--shiny-cta-highlight: #ffffff; --shiny-cta-highlight-subtle: #a1a1a1;">
                                   COMING SOON !
                              </ShinyButton>

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
