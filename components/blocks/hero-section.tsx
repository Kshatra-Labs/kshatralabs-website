'use client'
import React from 'react'
import { ArrowRight } from 'lucide-react'
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

                                   <div className="relative">
                                        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-medium tracking-tight text-white uppercase leading-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                             Autonomous Systems <br />
                                             <span className="font-normal text-white/55">for National Security</span>
                                        </h1>
                                   </div>
                                   <div className="grid md:grid-cols-2 gap-12 items-start border-t border-white/10 pt-10">
                                        <div className="space-y-8">
                                             <p className="text-lg text-gray-200 leading-relaxed font-light max-w-[460px] drop-shadow-md">
                                                  <strong className="text-white font-medium">Kshatra Labs</strong> builds AI-native autonomous systems that sense, decide, and act in real time across air, land, and sea — starting with aerial interception.
                                             </p>

                                             <button
                                                  onClick={() => handleContactClick()}
                                                  className="px-8 py-4 bg-white text-black font-mono font-bold tracking-widest hover:bg-neutral-200 transition-colors inline-flex items-center justify-center gap-3 cursor-pointer"
                                             >
                                                  REQUEST A BRIEFING
                                                  <ArrowRight className="h-4 w-4" />
                                             </button>

                                             <div className="flex flex-wrap items-center gap-x-12 gap-y-4 mt-12 text-xs font-mono text-white/90 uppercase tracking-[0.2em] font-bold drop-shadow-sm">
                                                  <div className="flex items-center gap-3">
                                                       <div className="w-1.5 h-1.5 bg-defense-accent rounded-full shadow-[0_0_8px_rgba(47,124,255,0.4)]"></div>
                                                       <span>Built in Bharat</span>
                                                  </div>
                                                  <div className="flex items-center gap-3">
                                                       <div className="w-1.5 h-1.5 bg-defense-accent rounded-full shadow-[0_0_8px_rgba(47,124,255,0.4)]"></div>
                                                       <span>Contested Environments</span>
                                                  </div>
                                                  <div className="flex items-center gap-3">
                                                       <div className="w-1.5 h-1.5 bg-defense-accent rounded-full shadow-[0_0_8px_rgba(47,124,255,0.4)]"></div>
                                                       <span>Machine Speed</span>
                                                  </div>
                                             </div>
                                        </div>


                                   </div>
                              </div>
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
               <source src="/video/main-video.mp4" type="video/webm" />
               <source src="/video/main-video.mp4" type="video/mp4" />
          </video>
     )
}