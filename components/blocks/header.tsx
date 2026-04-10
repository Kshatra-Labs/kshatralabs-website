'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Mail, ChevronDown } from 'lucide-react'

// Define our navigation structure with support for dropdowns
interface NavItem {
     name: string
     href: string
     subItems?: { name: string; href: string; desc: string }[]
}

const menuItems: NavItem[] = [
     { name: 'Home', href: '/' },
     {
          name: 'About',
          href: '/about/company',
          subItems: [
               { name: 'Company', href: '/about/company', desc: 'Mission, vision, and core focus' },
               { name: 'Team', href: '/about/team', desc: 'Leadership and engineering talent' },
               { name: 'Gallery', href: '/about/gallery', desc: 'Visual overview of our platforms' }
          ]
     },
     {
          name: 'Products',
          href: '/products',
          subItems: [
               { name: 'HAWK', href: '/products/hawk', desc: 'Next-gen autonomous interceptor' },
               { name: 'HAWKEYE', href: '/products', desc: 'High-precision optical tracking' },
               { name: 'APEX', href: '/products', desc: 'Advanced tactical autonomy' },
               { name: 'SWARM', href: '/products', desc: 'Coordinated multi-agent defence' }
          ]
     },
     { name: 'Careers', href: '/careers' },
]

export function Header() {
     const pathname = usePathname()
     const [menuState, setMenuState] = useState(false)
     const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
     const [scrolled, setScrolled] = useState(false)



     // Handle scroll state for dynamic header styling
     useEffect(() => {
          const handleScroll = () => {
               setScrolled(window.scrollY > 20)
          }
          window.addEventListener('scroll', handleScroll)
          return () => window.removeEventListener('scroll', handleScroll)
     }, [])

     return (
          <header>
               <nav
                    data-state={menuState && 'active'}
                    className={`fixed z-50 w-full transition-all duration-500 ${scrolled || menuState
                         ? 'bg-black/90 backdrop-blur-3xl border-b border-blue-500/20 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
                         : 'bg-transparent border-b border-transparent py-4'
                         }`}
               >
                    <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-12">
                         <div className="relative flex flex-wrap items-center justify-between gap-4 py-2">

                              {/* Logo */}
                              <div className="flex w-full items-center justify-between lg:w-auto relative z-50">
                                   <Link href="/" className="group flex-shrink-0">
                                        <div
                                             className="h-8 md:h-10 w-[200px] md:w-[240px] bg-white group-hover:bg-defense-accent transition-colors duration-500"
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

                                   {/* Mobile Hamburger */}
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
                                   <ul className="flex items-center gap-8 text-sm md:text-base font-bold font-mono uppercase tracking-wide text-white">
                                        {menuItems.map((item) => {
                                             const isActive = pathname === item.href || (item.subItems && item.subItems.some(sub => pathname === sub.href))
                                             const hasDropdown = !!item.subItems

                                             return (
                                                  <li
                                                       key={item.name}
                                                       className="relative group/nav py-4"
                                                       onMouseEnter={() => hasDropdown && setActiveDropdown(item.name)}
                                                       onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                                                  >
                                                       <Link
                                                            href={item.href}
                                                            className={`flex items-center gap-2 transition-colors duration-300 ${isActive ? 'text-blue-500' : 'hover:text-blue-400 text-white'}`}
                                                       >
                                                            {item.name}
                                                            {hasDropdown && (
                                                                 <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180 text-blue-400' : ''}`} />
                                                            )}
                                                       </Link>

                                                       {/* Active Indicator Line */}
                                                       {isActive && (
                                                            <motion.div
                                                                 layoutId="activeNav"
                                                                 className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                                                                 initial={{ opacity: 0 }}
                                                                 animate={{ opacity: 1 }}
                                                                 transition={{ duration: 0.3 }}
                                                            />
                                                       )}

                                                       {/* Desktop Dropdown via AnimatePresence */}
                                                       {hasDropdown && (
                                                            <AnimatePresence>
                                                                 {activeDropdown === item.name && (
                                                                      <motion.div
                                                                           initial={{ opacity: 0, y: 15, rotateX: -10 }}
                                                                           animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                                                           exit={{ opacity: 0, y: 10, rotateX: -5 }}
                                                                           transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                                                                           className="absolute top-full left-0 mt-2 w-80 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden p-2 z-50 perspective-1000"
                                                                      >
                                                                           {/* Top accent line */}
                                                                           <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

                                                                           <div className="flex flex-col gap-1 relative z-10">
                                                                                {item.subItems!.map((sub, idx) => (
                                                                                     <motion.div
                                                                                          key={sub.name}
                                                                                          initial={{ opacity: 0, x: -10 }}
                                                                                          animate={{ opacity: 1, x: 0 }}
                                                                                          transition={{ delay: idx * 0.05 + 0.1 }}
                                                                                     >
                                                                                          <Link
                                                                                               href={sub.href}
                                                                                               className="group/sub flex flex-col gap-1 p-3 rounded-lg hover:bg-white/[0.03] transition-all duration-300 relative overflow-hidden"
                                                                                          >
                                                                                               {/* Item Hover Glow */}
                                                                                               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover/sub:opacity-100 transition-opacity duration-500"></div>

                                                                                               <div className="flex items-center justify-between relative z-10">
                                                                                                    <span className={`font-bold font-mono uppercase text-sm tracking-widest ${pathname === sub.href ? 'text-blue-500' : 'text-white group-hover/sub:text-blue-400'} transition-colors`}>
                                                                                                         {sub.name}
                                                                                                    </span>
                                                                                                    <ChevronDown className="w-3 h-3 -rotate-90 opacity-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-1 transition-all text-blue-500" />
                                                                                               </div>
                                                                                               <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider relative z-10 group-hover/sub:text-neutral-300 transition-colors">
                                                                                                    {sub.desc}
                                                                                               </p>
                                                                                          </Link>
                                                                                     </motion.div>
                                                                                ))}
                                                                           </div>

                                                                           {/* Bottom decorative element */}
                                                                           <div className="mt-2 pt-2 border-t border-white/5 px-3 pb-1">
                                                                                <div className="flex items-center justify-between text-[8px] font-mono text-white/20 uppercase tracking-[0.2em]">
                                                                                     <span>Kshatra Labs</span>
                                                                                     <span>Advanced Autonomy</span>
                                                                                </div>
                                                                           </div>
                                                                      </motion.div>
                                                                 )}
                                                            </AnimatePresence>
                                                       )}
                                                  </li>
                                             )
                                        })}
                                   </ul>
                              </div>

                              {/* Desktop Contact */}
                              <div className="hidden lg:flex items-center gap-6 text-xs md:text-sm font-bold font-mono tracking-widest text-white">


                                   <Link
                                        href="/contact-us"
                                        className="flex items-center gap-2 hover:text-defense-accent transition-colors"
                                   >
                                        <Mail className="w-4 h-4" />
                                        Contact Us
                                   </Link>
                              </div>

                              {/* Mobile Menu via AnimatePresence */}
                              <AnimatePresence>
                                   {menuState && (
                                        <motion.div
                                             initial={{ opacity: 0, height: 0 }}
                                             animate={{ opacity: 1, height: 'auto' }}
                                             exit={{ opacity: 0, height: 0 }}
                                             transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                             className="lg:hidden w-full overflow-hidden absolute top-full left-0 mt-2 px-4 z-50"
                                        >
                                             <div className="rounded-xl border border-white/10 bg-black/95 backdrop-blur-3xl shadow-2xl p-6 space-y-8 relative overflow-hidden">
                                                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                                                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                                                  <ul className="space-y-1 text-base font-bold font-mono text-white relative z-10 w-full">
                                                       {menuItems.map((item, idx) => {
                                                            const isActive = pathname === item.href || (item.subItems && item.subItems.some(sub => pathname === sub.href))
                                                            const hasDropdown = !!item.subItems
                                                            const isDropdownActive = activeDropdown === item.name

                                                            return (
                                                                 <motion.li
                                                                      key={item.name}
                                                                      className="flex flex-col w-full"
                                                                      initial={{ opacity: 0, x: -10 }}
                                                                      animate={{ opacity: 1, x: 0 }}
                                                                      transition={{ delay: idx * 0.05 + 0.1 }}
                                                                 >
                                                                      <div className={`flex items-center justify-between w-full py-4 px-2 rounded-lg transition-colors ${isActive ? 'bg-blue-500/5' : ''}`}>
                                                                           <Link
                                                                                onClick={() => !hasDropdown && setMenuState(false)}
                                                                                href={item.href}
                                                                                className={`flex-1 transition-colors tracking-widest ${isActive ? 'text-blue-500' : 'text-white'}`}
                                                                           >
                                                                                {item.name}
                                                                           </Link>

                                                                           {hasDropdown && (
                                                                                <button
                                                                                     onClick={() => setActiveDropdown(isDropdownActive ? null : item.name)}
                                                                                     className="p-2 border border-white/10 rounded-lg bg-white/5"
                                                                                >
                                                                                     <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isDropdownActive ? 'rotate-180 text-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]' : 'text-neutral-400'}`} />
                                                                                </button>
                                                                           )}
                                                                      </div>

                                                                      {/* Mobile Submenu */}
                                                                      <AnimatePresence>
                                                                           {hasDropdown && isDropdownActive && (
                                                                                <motion.div
                                                                                     initial={{ height: 0, opacity: 0 }}
                                                                                     animate={{ height: 'auto', opacity: 1 }}
                                                                                     exit={{ height: 0, opacity: 0 }}
                                                                                     className="overflow-hidden w-full bg-blue-500/5 rounded-lg border-l border-blue-500/20"
                                                                                >
                                                                                     <div className="py-2 pl-4 flex flex-col gap-3">
                                                                                          {item.subItems!.map((sub, sIdx) => (
                                                                                               <motion.div
                                                                                                    key={sub.name}
                                                                                                    initial={{ opacity: 0, x: -5 }}
                                                                                                    animate={{ opacity: 1, x: 0 }}
                                                                                                    transition={{ delay: sIdx * 0.05 }}
                                                                                               >
                                                                                                    <Link
                                                                                                         href={sub.href}
                                                                                                         onClick={() => setMenuState(false)}
                                                                                                         className={`flex flex-col gap-0.5 py-2 transition-colors ${pathname === sub.href ? 'text-white' : 'text-neutral-400 hover:text-white'}`}
                                                                                                    >
                                                                                                         <span className="font-mono uppercase text-sm tracking-widest">{sub.name}</span>
                                                                                                         <span className="text-[10px] text-neutral-400 uppercase tracking-tighter">{sub.desc}</span>
                                                                                                    </Link>
                                                                                               </motion.div>
                                                                                          ))}
                                                                                     </div>
                                                                                </motion.div>
                                                                           )}
                                                                      </AnimatePresence>
                                                                 </motion.li>
                                                            )
                                                       })}
                                                  </ul>

                                                  <div className="flex flex-col gap-6 text-sm font-bold font-mono tracking-widest text-neutral-300 pt-6 border-t border-white/10 relative z-10">


                                                       <Link
                                                            href="/contact-us"
                                                            onClick={() => setMenuState(false)}
                                                            className="flex items-center gap-3 text-left hover:text-white transition-colors"
                                                       >
                                                            <div className="p-2 bg-white/10 rounded-full"><Mail className="w-4 h-4" /></div>
                                                            Contact Us
                                                       </Link>
                                                  </div>
                                             </div>
                                        </motion.div>
                                   )}
                              </AnimatePresence>
                         </div>
                    </div>
               </nav>
          </header>

     )
}