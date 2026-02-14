'use client'

import React from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, Github } from 'lucide-react'
import { MailChoiceModal } from '@/components/ui/mail-choice-modal'
import { useIsMobile } from '@/hooks/use-is-mobile'

const menuItems = [
     { name: 'Home', href: '/' },
     { name: 'Products', href: '/products' },
     { name: 'About', href: '/about' },
]

export function Header() {
     const [menuState, setMenuState] = React.useState(false)
     const isMobile = useIsMobile()
     const [isMailModalOpen, setIsMailModalOpen] = React.useState(false)

     return (
          <header>
               <nav
                    data-state={menuState && 'active'}
                    className="fixed z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-2xl"
               >
                    <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-12">
                         <div className="relative flex flex-wrap items-center justify-between gap-4 py-4 md:py-6">

                              {/* Logo */}
                              <div className="flex w-full items-center justify-between lg:w-auto">
                                   <Link href="/" className="group">
                                        <div
                                             className="h-10 md:h-12 w-[240px] md:w-[280px] bg-white group-hover:bg-defense-accent transition-colors"
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
                                   <ul className="flex gap-10 text-base md:text-lg font-bold font-mono uppercase tracking-wide text-white">
                                        {menuItems.map((item) => (
                                             <li key={item.name}>
                                                  <Link href={item.href} className="hover:text-defense-accent transition-colors">
                                                       {item.name}
                                                  </Link>
                                             </li>
                                        ))}
                                   </ul>
                              </div>

                              {/* Desktop Contact */}
                              <div className="hidden lg:flex items-center gap-6 text-sm font-bold font-mono tracking-widest text-white">
                                   <a href="tel:+919730458528" className="flex items-center gap-2 hover:text-defense-accent transition-colors">
                                        <Phone className="w-4 h-4" />
                                        +91 9730458528
                                   </a>

                                   <button
                                        onClick={() => setIsMailModalOpen(true)}
                                        className="flex items-center gap-2 hover:text-defense-accent transition-colors"
                                   >
                                        <Mail className="w-4 h-4" />
                                        contact@kshatralabs.in
                                   </button>

                                   <Link href="https://github.com/Kshatra-Labs" target="_blank" className="flex items-center gap-2 hover:text-defense-accent transition-colors">
                                        <Github className="w-4 h-4" />
                                        GitHub
                                   </Link>
                              </div>

                              {/* Mobile Menu */}
                              {menuState && (
                                   <div className="lg:hidden w-full mt-4 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl p-6 space-y-8">
                                        <ul className="space-y-5 text-lg font-bold font-mono text-white">
                                             {menuItems.map((item) => (
                                                  <li key={item.name}>
                                                       <Link onClick={() => setMenuState(false)} href={item.href} className="hover:text-defense-accent transition-colors">
                                                            {item.name}
                                                       </Link>
                                                  </li>
                                             ))}
                                        </ul>

                                        <div className="flex flex-col gap-6 text-sm font-bold font-mono tracking-widest text-white pt-6 border-t border-white/10">
                                             <a href="tel:+919730458528" className="flex items-center gap-2 hover:text-defense-accent transition-colors">
                                                  <Phone className="w-4 h-4" />
                                                  +91 9730458528
                                             </a>

                                             <button
                                                  onClick={() =>
                                                       !isMobile
                                                            ? setIsMailModalOpen(true)
                                                            : (window.location.href = 'mailto:contact@kshatralabs.in')
                                                  }
                                                  className="flex items-center gap-2 hover:text-defense-accent transition-colors"
                                             >
                                                  <Mail className="w-4 h-4" />
                                                  contact@kshatralabs.in
                                             </button>

                                             <Link href="https://github.com/Kshatra-Labs" target="_blank" className="flex items-center gap-2 hover:text-defense-accent transition-colors">
                                                  <Github className="w-4 h-4" />
                                                  GitHub
                                             </Link>
                                        </div>
                                   </div>
                              )}
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