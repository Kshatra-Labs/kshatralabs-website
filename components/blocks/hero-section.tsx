'use client'
import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { MailChoiceModal } from '@/components/ui/mail-choice-modal'
import { useIsMobile } from '@/hooks/use-is-mobile'

export function HeroSection() {
     const isMobile = useIsMobile()
     const [isMailModalOpen, setIsMailModalOpen] = React.useState(false)

     const handleContactClick = (e?: React.MouseEvent) => {
          if (e) e.preventDefault()
          if (isMobile) {
               window.location.href = 'mailto:contact@kshatralabs.in'
          } else {
               setIsMailModalOpen(true)
          }
     }

     return (
          <>
               <main className="overflow-x-hidden relative">
                    <section className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-defense-dark">
                         <div className="absolute inset-0 z-0">
                              <HeroBackgroundVideo />
                              <div className="absolute inset-0 bg-defense-dark -z-10"></div>
                              <div className="absolute inset-0 bg-gradient-to-b from-defense-dark/60 via-transparent to-defense-dark"></div>
                              <div className="absolute inset-0 bg-gradient-to-r from-defense-dark/40 via-transparent to-defense-dark/40"></div>
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>
                              {/* Bottom Fade Transition */}
                              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent backdrop-blur-[2px]"></div>
                         </div>
                         <div className="mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10 w-full h-full flex flex-col justify-center">
                              <div className="w-full space-y-16">
                                   <div className="flex items-center gap-3" style={{ opacity: 1, transform: 'none' }}>
                                        <div className="flex items-center gap-2 px-3 py-1 bg-black/60 border border-white/20 backdrop-blur-md rounded-sm">
                                             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
                                             <span className="text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-widest leading-none drop-shadow-sm">SYSTEM ONLINE</span>
                                        </div>
                                        <div className="h-px w-12 bg-white/20"></div>
                                   </div>
                                   <div className="relative">
                                        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-medium tracking-tight text-white uppercase leading-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                             Autonomous Systems <br />
                                             <span className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-white to-white/60">for National Security</span>
                                        </h1>
                                   </div>
                                   <div className="grid md:grid-cols-2 gap-12 items-start border-t border-white/10 pt-10">
                                        <div className="space-y-8">
                                             <p className="text-lg text-gray-200 leading-relaxed font-light max-w-xl drop-shadow-md">
                                                  <strong className="text-white font-medium">Kshatra Labs</strong> engineers AI-native robotic systems that sense, reason, and act in real time across air, land, and sea — starting with autonomous aerial defense.
                                             </p>

                                             <button
                                                  onClick={() => handleContactClick()}
                                                  className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-black/40 px-8 py-4 font-mono text-sm tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:bg-defense-accent/10 hover:text-defense-accent border border-white/10 hover:border-defense-accent/50 cursor-pointer"
                                             >
                                                  {/* Crosshair corners */}
                                                  <span className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-white/30 transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:border-defense-accent group-hover:opacity-100"></span>
                                                  <span className="absolute right-0 top-0 h-2 w-2 border-r-2 border-t-2 border-white/30 transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:border-defense-accent group-hover:opacity-100"></span>
                                                  <span className="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-white/30 transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:border-defense-accent group-hover:opacity-100"></span>
                                                  <span className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-white/30 transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:border-defense-accent group-hover:opacity-100"></span>

                                                  <span className="relative z-10 flex items-center gap-2 font-bold">
                                                       REQUEST A BRIEFING
                                                       <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                  </span>
                                             </button>

                                             <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-[11px] font-mono text-white/80 uppercase tracking-widest font-bold drop-shadow-sm">
                                                  <div className="flex items-center gap-2">
                                                       <div className="w-1 h-1 bg-defense-accent rounded-full"></div>
                                                       <span>Built in Bharat</span>
                                                  </div>
                                                  <div className="flex items-center gap-2">
                                                       <div className="w-1 h-1 bg-defense-accent rounded-full"></div>
                                                       <span>Designed for Contested Environments</span>
                                                  </div>
                                                  <div className="flex items-center gap-2">
                                                       <div className="w-1 h-1 bg-defense-accent rounded-full"></div>
                                                       <span>Deployed at machine speed</span>
                                                  </div>
                                             </div>
                                        </div>


                                   </div>
                              </div>
                         </div>
                         {/* Decorative HUD Elements */}
                         <div className="absolute top-32 right-10 flex flex-col items-end gap-1 opacity-50">
                              <div className="h-[2px] bg-white/20" style={{ width: '10px' }}></div>
                              <div className="h-[2px] bg-white/20" style={{ width: '20px' }}></div>
                              <div className="h-[2px] bg-white/20" style={{ width: '30px' }}></div>
                              <div className="h-[2px] bg-white/20" style={{ width: '40px' }}></div>
                              <div className="h-[2px] bg-white/20" style={{ width: '50px' }}></div>
                         </div>
                         <div className="absolute bottom-10 left-10 flex items-center gap-4 opacity-50">
                              <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                                   <div className="w-12 h-12 border-t border-b border-white/40 rounded-full"></div>
                              </div>
                              <div className="text-[10px] font-mono text-white/60 drop-shadow-sm font-medium">Swarm Operations <br /> <span className="hidden">Active Nodes: 128</span></div>
                         </div>
                    </section >
               </main >

               <MailChoiceModal
                    isOpen={isMailModalOpen}
                    onClose={() => setIsMailModalOpen(false)}
                    email="contact@kshatralabs.in"
               />
          </>
     )
}


function HeroBackgroundVideo() {
     const videoRef = React.useRef<HTMLVideoElement>(null)

     React.useEffect(() => {
          const video = videoRef.current
          if (!video) return

          const observer = new IntersectionObserver(
               ([entry]) => {
                    if (entry.isIntersecting) {
                         video.play().catch(() => { })
                    } else {
                         video.pause()
                    }
               },
               { threshold: 0.1 }
          )

          observer.observe(video)

          return () => observer.disconnect()
     }, [])

     return (
          <video
               ref={videoRef}
               autoPlay
               muted
               loop
               playsInline
               className="absolute inset-0 w-full h-full object-cover opacity-80"
          >
               <source src="/video/main-video.webm" type="video/webm" />
               <source src="/video/main-video.mp4" type="video/mp4" />
          </video>
     )
}