'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TechButton } from '@/components/ui/tech-button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight, ArrowRight, Phone, Mail } from 'lucide-react'
import { useScroll, motion } from 'motion/react'
import { MailChoiceModal } from '@/components/ui/mail-choice-modal'
import { useIsMobile } from '@/hooks/use-is-mobile'

export function HeroSection() {
     const isMobile = useIsMobile()
     const [isMailModalOpen, setIsMailModalOpen] = React.useState(false)

     const handleContactClick = () => {
          if (isMobile) {
               window.location.href = 'mailto:contact@kshatralabs.in'
          } else {
               setIsMailModalOpen(true)
          }
     }

     return (
          <>
               <HeroHeader />
               <main className="overflow-x-hidden relative">
                    <section className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-defense-dark">
                         <div className="absolute inset-0 z-0 pointer-events-none">
                              <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-80">
                                   <source src="/video/main-video.mp4" type="video/mp4" />
                              </video>
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
                                                  onClick={handleContactClick}
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

                                             <MailChoiceModal
                                                  isOpen={isMailModalOpen}
                                                  onClose={() => setIsMailModalOpen(false)}
                                                  email="contact@kshatralabs.in"
                                             />

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
                                                       <span>Engineered for Kinetic Agility</span>
                                                  </div>
                                             </div>
                                        </div>

                                        {/* <div className="hidden md:block">
                                             <div className="grid grid-cols-2 gap-8">
                                                  <div>
                                                       <div className="text-3xl font-heading font-bold text-white mb-1 drop-shadow-md">3</div>
                                                       <div className="text-[10px] font-mono text-white/60 uppercase tracking-widest drop-shadow-sm">DOMAINS OPERATIONAL<br />(AIR / LAND / SEA)</div>
                                                  </div>
                                                  <div>
                                                       <div className="text-3xl font-heading font-bold text-white mb-1 drop-shadow-md">&lt;15ms</div>
                                                       <div className="text-[10px] font-mono text-white/60 uppercase tracking-widest drop-shadow-sm">DECISION LATENCY<br />(EDGE COMPUTE)</div>
                                                  </div>
                                             </div>
                                        </div> */}
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
          </>
     )
}

const menuItems = [
     { name: 'Platforms', href: '#platforms' },
     { name: 'Technology', href: '#technology' },
     { name: 'Vision', href: '#vision' },
]

const HeroHeader = () => {
     const [menuState, setMenuState] = React.useState(false)
     const [scrolled, setScrolled] = React.useState(false)
     const { scrollYProgress } = useScroll()
     const isMobile = useIsMobile()
     const [isMailModalOpen, setIsMailModalOpen] = React.useState(false)

     React.useEffect(() => {
          const unsubscribe = scrollYProgress.on('change', (latest) => {
               setScrolled(latest > 0.05)
          })
          return () => unsubscribe()
     }, [scrollYProgress])

     return (
          <header>
               <nav
                    data-state={menuState && 'active'}
                    className="fixed z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-md transition-all duration-300"
               >
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                         <div className="relative flex flex-wrap items-center justify-between gap-6 py-4">
                              <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                                   <Link
                                        href="/"
                                        aria-label="home"
                                        className="group block"
                                   >
                                        <div
                                             className="h-6 w-[177px] bg-white group-hover:bg-defense-accent transition-colors duration-300"
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
                                        <ul className="flex gap-8 text-sm font-mono tracking-wide uppercase">
                                             {menuItems.map((item, index) => (
                                                  <li key={index}>
                                                       <Link
                                                            href={item.href}
                                                            className="text-muted-foreground hover:text-white duration-150"
                                                       >
                                                            <span>{item.name}</span>
                                                       </Link>
                                                  </li>
                                             ))}
                                        </ul>
                                   </div>
                              </div>

                              <div className="bg-black/90 group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/10 p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                                   <div className="lg:hidden">
                                        <ul className="space-y-6 text-base font-mono">
                                             {menuItems.map((item, index) => (
                                                  <li key={index}>
                                                       <Link
                                                            href={item.href}
                                                            className="text-muted-foreground hover:text-white block duration-150"
                                                       >
                                                            <span>{item.name}</span>
                                                       </Link>
                                                  </li>
                                             ))}
                                        </ul>
                                   </div>
                                   <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-6 sm:space-y-0 md:w-fit items-center">
                                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-[11px] font-mono tracking-widest text-white/70">
                                             <a href="tel:+919730458528" className="hover:text-defense-accent transition-colors flex items-center gap-2">
                                                  <Phone className="w-3 h-3" />
                                                  <span>+91 9730458528</span>
                                             </a>
                                             <div className="h-3 w-px bg-white/10 hidden sm:block"></div>
                                             <button
                                                  onClick={() => !isMobile ? setIsMailModalOpen(true) : window.location.href = 'mailto:contact@kshatralabs.in'}
                                                  className="hover:text-defense-accent transition-colors flex items-center gap-2 cursor-pointer"
                                             >
                                                  <Mail className="w-3 h-3" />
                                                  <span>contact@kshatralabs.in</span>
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </nav>
               <MailChoiceModal
                    isOpen={isMailModalOpen}
                    onClose={() => setIsMailModalOpen(false)}
                    email="contact@kshatralabs.in"
               />
          </header>
     )
}
