'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRight, Menu, Mail, Phone, X } from 'lucide-react'
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
               <HeroHeader onEmailClick={handleContactClick} />
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
                                                  <strong className="text-white font-medium">Kshatra Labs</strong> engineers AI-native robotic systems that sense, reason, and act in real time across air, land, sea, and space — starting with autonomous aerial defense.
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
                    </section>
               </main>

               <MailChoiceModal
                    isOpen={isMailModalOpen}
                    onClose={() => setIsMailModalOpen(false)}
                    email="contact@kshatralabs.in"
               />
          </>
     )
}

const menuItems = [
     { name: 'Home', href: '/' },
     { name: 'Products', href: '/products' },
     { name: 'About', href: '/about' },
]

const HeroHeader = ({ onEmailClick }: { onEmailClick: (e?: React.MouseEvent) => void }) => {
     const [menuState, setMenuState] = React.useState(false)

     return (
          <header>
               <nav
                    data-state={menuState && 'active'}
                    className="fixed z-50 w-full border-b border-white/10 bg-black/85 backdrop-blur-2xl transition-all duration-300"
               >
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                         <div className="relative flex flex-wrap items-center justify-between gap-6 py-4 md:py-6">
                              <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                                   <Link
                                        href="/"
                                        aria-label="home"
                                        className="group block"
                                   >
                                        <div
                                             className="h-10 md:h-12 w-[240px] md:w-[280px] bg-white group-hover:bg-defense-accent transition-colors duration-300"
                                             style={{
                                                  maskImage: 'url(/logo.svg)',
                                                  maskSize: 'contain',
                                                  maskRepeat: 'no-repeat',
                                                  maskPosition: 'center left',
                                                  WebkitMaskImage: 'url(/logo.svg)',
                                                  WebkitMaskSize: 'contain',
                                                  WebkitMaskRepeat: 'no-repeat',
                                                  WebkitMaskPosition: 'center left'
                                             }}
                                        />
                                   </Link>

                                   <button
                                        onClick={() => setMenuState(!menuState)}
                                        aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                        className="relative z-50 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                                   >
                                        <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                        <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                                   </button>

                                   <div className="hidden lg:block">
                                        <ul className="flex gap-8 text-sm font-bold font-mono tracking-wide uppercase">
                                             {menuItems.map((item, index) => (
                                                  <li key={index}>
                                                       <Link
                                                            href={item.href}
                                                            className="text-white/70 hover:text-white duration-150"
                                                       >
                                                            <span>{item.name}</span>
                                                       </Link>
                                                  </li>
                                             ))}
                                        </ul>
                                   </div>
                              </div>

                              <div className="hidden lg:flex items-center gap-8 text-sm font-bold font-mono tracking-widest text-white">
                                   <a href="tel:+919730458528" className="flex items-center gap-2 hover:text-defense-accent transition-colors">
                                        <Phone className="w-4 h-4" />
                                        +91 9730458528
                                   </a>

                                   <button
                                        onClick={onEmailClick}
                                        className="flex items-center gap-2 hover:text-defense-accent transition-colors cursor-pointer"
                                   >
                                        <Mail className="w-4 h-4" />
                                        contact@kshatralabs.in
                                   </button>
                              </div>

                              {/* Mobile Menu */}
                              <div className="bg-black/95 group-data-[state=active]:block hidden w-full mt-4 rounded-3xl border border-white/10 p-6 shadow-2xl lg:hidden">
                                   <ul className="space-y-6 text-base font-bold font-mono text-white">
                                        {menuItems.map((item, index) => (
                                             <li key={index}>
                                                  <Link
                                                       href={item.href}
                                                       className="hover:text-defense-accent block duration-150"
                                                       onClick={() => setMenuState(false)}
                                                  >
                                                       <span>{item.name}</span>
                                                  </Link>
                                             </li>
                                        ))}
                                   </ul>
                                   <div className="flex flex-col space-y-4 pt-8 mt-8 border-t border-white/10 text-sm font-bold font-mono text-white">
                                        <a href="tel:+919730458528" className="flex items-center gap-2">
                                             <Phone className="w-4 h-4" />
                                             +91 9730458528
                                        </a>

                                        <button
                                             onClick={onEmailClick}
                                             className="flex items-center gap-2 text-left cursor-pointer"
                                        >
                                             <Mail className="w-4 h-4" />
                                             contact@kshatralabs.in
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </nav>
          </header>
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