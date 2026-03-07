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
               { name: 'HAWK', href: '/products', desc: 'Next-gen autonomous interceptor' },
               { name: 'HAWKEYE', href: '/products', desc: 'High-precision optical tracking' },
               { name: 'APEX', href: '/products', desc: 'Advanced tactical autonomy' },
               { name: 'SWARM', href: '/products', desc: 'Coordinated multi-agent defense' }
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
                         ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10 py-2'
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
                                                                 className="absolute bottom-2 left-0 right-0 h-0.5 bg-blue-500"
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
                                                                           initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                                           animate={{ opacity: 1, y: 0, scale: 1 }}
                                                                           exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                                           transition={{ duration: 0.2, ease: "easeOut" }}
                                                                           className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-neutral-900/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-2 z-50 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none"
                                                                      >
                                                                           <div className="flex flex-col gap-1 relative z-10">
                                                                                {item.subItems!.map((sub) => (
                                                                                     <Link
                                                                                          key={sub.name}
                                                                                          href={sub.href}
                                                                                          className="group/sub flex flex-col gap-1 p-3 rounded-xl hover:bg-white/10 transition-colors"
                                                                                     >
                                                                                          <span className={`font-bold font-mono uppercase text-sm tracking-wide ${pathname === sub.href ? 'text-blue-500' : 'text-white group-hover/sub:text-blue-400'} transition-colors`}>
                                                                                               {sub.name}
                                                                                          </span>
                                                                                          <span className="text-xs text-neutral-400 font-sans normal-case tracking-normal">
                                                                                               {sub.desc}
                                                                                          </span>
                                                                                     </Link>
                                                                                ))}
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

                              {/* Mobile Menu */}
                              <div
                                   className="lg:hidden w-full overflow-hidden transition-all duration-500 ease-[0.16,1,0.3,1] absolute top-full left-0 mt-4 px-4"
                                   style={{
                                        maxHeight: menuState ? '1000px' : '0px',
                                        opacity: menuState ? '1' : '0',
                                        pointerEvents: menuState ? 'auto' : 'none',
                                   }}
                              >
                                   <div className="rounded-2xl border border-white/10 bg-neutral-950/95 backdrop-blur-3xl shadow-2xl p-6 space-y-8 relative overflow-hidden">
                                        {/* Mobile Menu Background Accent */}
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                                        <ul className="space-y-2 text-lg font-bold font-mono text-white relative z-10 w-full">
                                             {menuItems.map((item) => {
                                                  const isActive = pathname === item.href || (item.subItems && item.subItems.some(sub => pathname === sub.href))
                                                  const hasDropdown = !!item.subItems
                                                  const isDropdownActive = activeDropdown === item.name || (activeDropdown === null && isActive && hasDropdown)

                                                  return (
                                                       <li key={item.name} className="flex flex-col w-full border-b border-white/5 last:border-none">
                                                            <div className="flex items-center justify-between w-full py-4">
                                                                 <Link
                                                                      onClick={() => !hasDropdown && setMenuState(false)}
                                                                      href={item.href}
                                                                      className={`flex-1 transition-colors ${isActive ? 'text-blue-500' : 'hover:text-blue-400 text-white'}`}
                                                                 >
                                                                      {item.name}
                                                                 </Link>

                                                                 {hasDropdown && (
                                                                      <button
                                                                           onClick={() => setActiveDropdown(isDropdownActive ? null : item.name)}
                                                                           className="p-2 border border-white/10 rounded-full bg-white/5"
                                                                      >
                                                                           <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownActive ? 'rotate-180 text-blue-400' : 'text-neutral-400'}`} />
                                                                      </button>
                                                                 )}

                                                                 {!hasDropdown && isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />}
                                                            </div>

                                                            {/* Mobile Submenu accordion */}
                                                            {hasDropdown && (
                                                                 <div
                                                                      className="overflow-hidden transition-all duration-300 ease-in-out w-full"
                                                                      style={{ maxHeight: isDropdownActive ? '400px' : '0' }}
                                                                 >
                                                                      <div className="pb-4 pl-4 pt-2 flex flex-col gap-4 border-l-2 border-white/10 ml-2">
                                                                           {item.subItems!.map((sub) => (
                                                                                <Link
                                                                                     key={sub.name}
                                                                                     href={sub.href}
                                                                                     onClick={() => setMenuState(false)}
                                                                                     className={`flex items-center gap-3 font-mono uppercase text-sm tracking-wide ${pathname === sub.href ? 'text-white' : 'text-neutral-400'}`}
                                                                                >
                                                                                     <span className="w-2 h-[1px] bg-white/20"></span>
                                                                                     {sub.name}
                                                                                </Link>
                                                                           ))}
                                                                      </div>
                                                                 </div>
                                                            )}
                                                       </li>
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
                              </div>
                         </div>
                    </div>
               </nav>
          </header>

     )
}