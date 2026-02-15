'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react'

interface MobileMenuProps {
     isOpen: boolean
     onClose: () => void
     menuItems: { name: string; href: string }[]
     onEmailClick?: (e?: React.MouseEvent) => void
}

const menuVariants = {
     closed: {
          opacity: 0,
          y: '-100%',
          transition: {
               duration: 0.5,
               ease: [0.22, 1, 0.36, 1],
               staggerChildren: 0.05,
               staggerDirection: -1
          }
     },
     open: {
          opacity: 1,
          y: 0,
          transition: {
               duration: 0.5,
               ease: [0.12, 0, 0.39, 0],
               staggerChildren: 0.07,
               delayChildren: 0.2
          }
     }
} as const

const itemVariants = {
     closed: { opacity: 0, y: 20 },
     open: { opacity: 1, y: 0 }
}

const contactVariants = {
     closed: { opacity: 0 },
     open: { opacity: 1, transition: { delay: 0.5 } }
}

export function MobileMenu({ isOpen, onClose, menuItems, onEmailClick }: MobileMenuProps) {
     // Lock body scroll when menu is open
     useEffect(() => {
          if (isOpen) {
               document.body.style.overflow = 'hidden'
          } else {
               document.body.style.overflow = ''
          }
          return () => {
               document.body.style.overflow = ''
          }
     }, [isOpen])

     return (
          <AnimatePresence>
               {isOpen && (
                    <motion.div
                         initial="closed"
                         animate="open"
                         exit="closed"
                         variants={menuVariants}
                         className="fixed inset-0 z-[60] flex flex-col bg-black/90 backdrop-blur-xl lg:hidden pt-24"
                    >
                         <div className="flex-1 flex flex-col justify-center px-8 pb-12 overflow-y-auto">
                              {/* Navigation Links */}
                              <nav className="flex flex-col gap-6 mb-12">
                                   {menuItems.map((item, index) => (
                                        <motion.div key={index} variants={itemVariants}>
                                             <Link
                                                  href={item.href}
                                                  onClick={onClose}
                                                  className="group flex items-center justify-between text-4xl font-bold font-space-grotesk text-white/80 hover:text-white transition-colors"
                                             >
                                                  <span className="relative overflow-hidden">
                                                       {item.name}
                                                       <span className="absolute left-0 bottom-0 w-full h-0.5 bg-defense-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                                  </span>
                                                  <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-defense-accent" />
                                             </Link>
                                        </motion.div>
                                   ))}
                              </nav>

                              {/* Contact Info */}
                              <motion.div variants={contactVariants} className="space-y-6 border-t border-white/10 pt-8 mt-auto">
                                   <div className="grid gap-4">
                                        <a href="tel:+919730458528" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group p-3 rounded-lg hover:bg-white/5">
                                             <div className="p-3 bg-white/5 rounded-full group-hover:bg-defense-accent/20 transition-colors">
                                                  <Phone className="w-5 h-5 text-defense-accent" />
                                             </div>
                                             <span className="font-mono text-lg">+91 9730458528</span>
                                        </a>

                                        <button onClick={(e) => { onClose(); onEmailClick?.(e); }} className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group p-3 rounded-lg hover:bg-white/5 w-full text-left">
                                             <div className="p-3 bg-white/5 rounded-full group-hover:bg-defense-accent/20 transition-colors">
                                                  <Mail className="w-5 h-5 text-defense-accent" />
                                             </div>
                                             <span className="font-mono text-lg">contact@kshatralabs.in</span>
                                        </button>

                                        <div className="flex items-center gap-4 text-white/60 p-3">
                                             <div className="p-3 bg-white/5 rounded-full">
                                                  <MapPin className="w-5 h-5 text-defense-accent" />
                                             </div>
                                             <span className="font-mono text-sm leading-relaxed">
                                                  Bangalore, India <br />
                                                  <span className="text-white/40 text-xs text-nowrap">DEFENSE INNOVATION HUB</span>
                                             </span>
                                        </div>
                                   </div>
                              </motion.div>

                              {/* Decoration */}
                              <motion.div variants={contactVariants} className="absolute bottom-6 right-6 opacity-20 pointer-events-none">
                                   <div className="text-[120px] font-bold font-outline-2 text-transparent stroke-white" style={{ WebkitTextStroke: '2px white' }}>
                                        KL
                                   </div>
                              </motion.div>
                         </div>
                    </motion.div>
               )}
          </AnimatePresence>
     )
}
