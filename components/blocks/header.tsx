'use client'

import React from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { useScroll } from 'motion/react'
import { MailChoiceModal } from '@/components/ui/mail-choice-modal'
import { useIsMobile } from '@/hooks/use-is-mobile'

const menuItems = [
     { name: 'Platforms', href: '#platforms' },
     { name: 'Technology', href: '#technology' },
     { name: 'Vision', href: '#vision' },
     // { name: 'About', href: '#about' },
]

export function Header() {
     const [menuState, setMenuState] = React.useState(false)
     const { scrollYProgress } = useScroll()
     const isMobile = useIsMobile()
     const [isMailModalOpen, setIsMailModalOpen] = React.useState(false)

     return (
          <header>
               <nav
                    data-state={menuState && 'active'}
                    className="fixed z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl"
               >
                    <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-12">
                         <div className="relative flex flex-wrap items-center justify-between gap-4 py-4 md:py-6">

                              {/* Logo */}
                              <div className="flex w-full items-center justify-between lg:w-auto">

                                   <Link href="/" className="group">
                                        <div
                                             className="h-8 md:h-10 w-[200px] md:w-[240px] bg-white group-hover:bg-defense-accent transition-colors"
                                             style={{
                                                  maskImage: 'url(/logo.svg)',
                                                  maskSize: 'contain',
                                                  maskRepeat: 'no-repeat',
                                                  WebkitMaskImage: 'url(/logo.svg)',
                                                  WebkitMaskSize: 'contain',
                                                  WebkitMaskRepeat: 'no-repeat',
                                             }}
                                        />
                                   </Link>

                                   {/* Hamburger */}
                                   <button
                                        onClick={() => setMenuState(!menuState)}
                                        className="lg:hidden p-2"
                                   >
                                        {!menuState ? <Menu className="text-white w-8 h-8" /> : <X className="text-white w-8 h-8" />}
                                   </button>
                              </div>

                              {/* Desktop Nav */}
                              <div className="hidden lg:block">
                                   <ul className="flex gap-10 text-base md:text-lg font-mono uppercase tracking-wide text-neutral-300">
                                        {menuItems.map((item) => (
                                             <li key={item.name}>
                                                  <Link href={item.href} className="hover:text-white transition">
                                                       {item.name}
                                                  </Link>
                                             </li>
                                        ))}
                                   </ul>
                              </div>

                              {/* Mobile Menu */}
                              {menuState && (
                                   <div className="lg:hidden w-full mt-4 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl p-6 space-y-8">

                                        <ul className="space-y-5 text-lg font-mono text-white">
                                             {menuItems.map((item) => (
                                                  <li key={item.name}>
                                                       <Link onClick={() => setMenuState(false)} href={item.href}>
                                                            {item.name}
                                                       </Link>
                                                  </li>
                                             ))}
                                        </ul>

                                        <div className="flex flex-col gap-4 text-xs font-mono tracking-widest text-white/70">
                                             <a href="tel:+919730458528" className="flex items-center gap-2">
                                                  <Phone className="w-4 h-4" />
                                                  +91 9730458528
                                             </a>

                                             <button
                                                  onClick={() =>
                                                       !isMobile
                                                            ? setIsMailModalOpen(true)
                                                            : (window.location.href = 'mailto:contact@kshatralabs.in')
                                                  }
                                                  className="flex items-center gap-2"
                                             >
                                                  <Mail className="w-4 h-4" />
                                                  contact@kshatralabs.in
                                             </button>
                                        </div>
                                   </div>
                              )}

                              {/* Desktop Contact */}
                              <div className="hidden lg:flex items-center gap-6 text-xs font-mono tracking-widest text-white/70">
                                   <a href="tel:+919730458528" className="flex items-center gap-2 hover:text-defense-accent">
                                        <Phone className="w-3 h-3" />
                                        +91 9730458528
                                   </a>

                                   <button
                                        onClick={() => setIsMailModalOpen(true)}
                                        className="flex items-center gap-2 hover:text-defense-accent"
                                   >
                                        <Mail className="w-3 h-3" />
                                        contact@kshatralabs.in
                                   </button>
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
