'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Phone, Mail, Github } from 'lucide-react'
import { MailChoiceModal } from '@/components/ui/mail-choice-modal'
import { useIsMobile } from '@/hooks/use-is-mobile'

const menuItems = [
     { name: 'Home', href: '/' },
     { name: 'About', href: '/about' },
]

export function Header() {
     const pathname = usePathname()
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
                                        className="lg:hidden p-2 flex flex-col justify-center items-center w-10 h-10 gap-0 relative"
                                        aria-label={menuState ? 'Close menu' : 'Open menu'}
                                   >
                                        <span
                                             className="block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ease-in-out origin-center"
                                             style={{
                                                  transform: menuState ? 'translateY(6px) rotate(45deg)' : 'translateY(0) rotate(0)',
                                             }}
                                        />
                                        <span
                                             className="block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ease-in-out my-[4px]"
                                             style={{
                                                  opacity: menuState ? 0 : 1,
                                                  transform: menuState ? 'scaleX(0)' : 'scaleX(1)',
                                             }}
                                        />
                                        <span
                                             className="block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ease-in-out origin-center"
                                             style={{
                                                  transform: menuState ? 'translateY(-6px) rotate(-45deg)' : 'translateY(0) rotate(0)',
                                             }}
                                        />
                                   </button>
                              </div>

                              {/* Desktop Nav */}
                              <div className="hidden lg:block">
                                   <ul className="flex gap-10 text-base md:text-lg font-bold font-mono uppercase tracking-wide text-white">
                                        {menuItems.map((item) => {
                                             const isActive = pathname === item.href
                                             return (
                                                  <li key={item.name} className="relative group/nav">
                                                       <Link
                                                            href={item.href}
                                                            className={`transition-colors duration-300 ${isActive ? 'text-blue-500' : 'hover:text-blue-400 text-white'}`}
                                                       >
                                                            {item.name}
                                                       </Link>
                                                       {isActive && (
                                                            <motion.div
                                                                 layoutId="activeNav"
                                                                 className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                                                                 initial={{ opacity: 0 }}
                                                                 animate={{ opacity: 1 }}
                                                                 transition={{ duration: 0.3 }}
                                                            />
                                                       )}
                                                  </li>
                                             )
                                        })}
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
                              <div
                                   className="lg:hidden w-full overflow-hidden transition-all duration-350 ease-in-out"
                                   style={{
                                        maxHeight: menuState ? '500px' : '0px',
                                        opacity: menuState ? 1 : 0,
                                        transform: menuState ? 'translateY(0)' : 'translateY(-8px)',
                                        transitionDuration: '350ms',
                                        pointerEvents: menuState ? 'auto' : 'none',
                                   }}
                              >
                                   <div className="mt-4 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl p-6 space-y-8">
                                        <ul className="space-y-5 text-lg font-bold font-mono text-white">
                                             {menuItems.map((item) => {
                                                  const isActive = pathname === item.href
                                                  return (
                                                       <li key={item.name} className="flex items-center gap-3">
                                                            <Link
                                                                 onClick={() => setMenuState(false)}
                                                                 href={item.href}
                                                                 className={`transition-colors ${isActive ? 'text-blue-500' : 'hover:text-blue-400 text-white'}`}
                                                            >
                                                                 {item.name}
                                                            </Link>
                                                            {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />}
                                                       </li>
                                                  )
                                             })}
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