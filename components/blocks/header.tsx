'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Search, Menu, X, ArrowRight } from 'lucide-react'

interface MegaMenuColumn {
     title: string;
     items: { name: string; href: string; desc?: string; comingSoon?: boolean }[];
}

interface NavItem {
     name: string
     href: string
     megaMenuColumns?: MegaMenuColumn[]
}

const menuItems: NavItem[] = [
     { name: 'Home', href: '/' },
     {
          name: 'About',
          href: '/about/company',
          megaMenuColumns: [
               {
                    title: 'COMPANY',
                    items: [
                         { name: 'Company', href: '/about/company', desc: 'Mission, vision, and core focus' }
                    ]
               },
               {
                    title: 'TEAM',
                    items: [
                         { name: 'Team', href: '/about/team', desc: 'Leadership and engineering talent' }
                    ]
               },
               {
                    title: 'GALLERY',
                    items: [
                         { name: 'Gallery', href: '/about/gallery', desc: 'Visual overview of our platforms' }
                    ]
               },
               {
                    title: 'NEWS',
                    items: [
                         { name: 'News', href: '/about/news', desc: 'Latest updates and announcements' }
                    ]
               }
          ]
     },
     {
          name: 'Products',
          href: '/products',
          megaMenuColumns: [
               {
                    title: 'INTERCEPTORS',
                    items: [
                         { name: 'HAWK', href: '/products/hawk', desc: 'Next-gen autonomous interceptor' }
                    ]
               },
               {
                    title: 'TRACKING SYSTEMS',
                    items: [
                         { name: 'HAWKEYE', href: '/products', desc: 'High-precision optical tracking' }
                    ]
               },
               {
                    title: 'TACTICAL AUTONOMY',
                    items: [
                         { name: 'APEX', href: '/products', desc: 'Advanced tactical autonomy' }
                    ]
               },
               {
                    title: 'COORDINATED DEFENCE',
                    items: [
                         { name: 'SWARM', href: '/products', desc: 'Coordinated multi-agent defence' }
                    ]
               }
          ]
     },
     { name: 'Careers', href: '/careers' },
     { name: 'Contact Us', href: '/contact-us' },
]

export function Header() {
     const pathname = usePathname()
     const [menuState, setMenuState] = useState(false)
     const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
     const [scrolled, setScrolled] = useState(false)

     useEffect(() => {
          const handleScroll = () => {
               setScrolled(window.scrollY > 20)
          }
          window.addEventListener('scroll', handleScroll)
          return () => window.removeEventListener('scroll', handleScroll)
     }, [])

     return (
          <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || menuState || activeDropdown ? 'bg-[#050505] shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}>
               <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-6">
                    <div className="flex items-center justify-between relative">
                         
                         {/* Logo */}
                         <Link href="/" className="relative z-50 flex-shrink-0 group">
                              <div
                                   className="h-6 md:h-8 w-[180px] md:w-[220px] bg-white group-hover:bg-[#2563EB] transition-colors duration-300"
                                   style={{
                                        maskImage: 'url(/logo.svg)',
                                        maskSize: 'contain',
                                        maskRepeat: 'no-repeat',
                                        maskPosition: 'left center',
                                        WebkitMaskImage: 'url(/logo.svg)',
                                        WebkitMaskSize: 'contain',
                                        WebkitMaskRepeat: 'no-repeat',
                                        WebkitMaskPosition: 'left center',
                                   }}
                              />
                         </Link>

                         {/* Mobile Hamburger */}
                         <button
                              onClick={() => setMenuState(!menuState)}
                              className="lg:hidden p-2 text-white hover:text-[#2563EB] transition-colors z-50"
                              aria-label={menuState ? 'Close menu' : 'Open menu'}
                         >
                              {menuState ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                         </button>

                         {/* Desktop Nav */}
                         <div className="hidden lg:flex items-center gap-8">
                              {menuItems.map((item) => {
                                   const isActive = pathname === item.href || (item.megaMenuColumns && item.megaMenuColumns.some(col => col.items.some(sub => pathname === sub.href)))
                                   const hasDropdown = !!item.megaMenuColumns
                                   const isDropdownOpen = activeDropdown === item.name

                                   return (
                                        <div 
                                             key={item.name} 
                                             className="relative group"
                                             onMouseEnter={() => hasDropdown && setActiveDropdown(item.name)}
                                        >
                                             <Link 
                                                  href={item.href}
                                                  className={`flex items-center gap-2 text-[13px] font-semibold uppercase tracking-widest transition-colors duration-300 ${isDropdownOpen || isActive ? 'text-[#2563EB]' : 'text-white hover:text-[#2563EB]'}`}
                                             >
                                                  {hasDropdown && (
                                                       <motion.div 
                                                            animate={{ rotate: isDropdownOpen ? 45 : 0 }}
                                                            className="relative w-3 h-3 flex items-center justify-center"
                                                       >
                                                            <div className="absolute w-full h-[1.5px] bg-current" />
                                                            <div className="absolute h-full w-[1.5px] bg-current" />
                                                       </motion.div>
                                                  )}
                                                  {item.name}
                                             </Link>
                                        </div>
                                   )
                              })}


                         </div>
                    </div>
               </div>

               {/* Full Width Desktop Mega Menu */}
               <AnimatePresence>
                    {activeDropdown && (
                         <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              onMouseEnter={() => setActiveDropdown(activeDropdown)}
                              onMouseLeave={() => setActiveDropdown(null)}
                              className="hidden lg:block absolute top-full left-0 w-full bg-[#050505] overflow-hidden"
                         >
                              <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-12">
                                   {menuItems.map((item) => {
                                        if (item.name !== activeDropdown || !item.megaMenuColumns) return null;
                                        
                                        return (
                                             <div key={item.name} className="flex flex-wrap gap-x-16 gap-y-12">
                                                  {item.megaMenuColumns.map((col, idx) => (
                                                       <div key={idx} className="flex flex-col gap-6 min-w-[200px] flex-1">
                                                            <div className="border-t border-white/20 pt-4 flex items-center gap-3">
                                                                 <div className="w-2.5 h-2.5 bg-[#2563EB]" />
                                                                 <Link
                                                                      href={col.items[0]?.href ?? '#'}
                                                                      onClick={() => setActiveDropdown(null)}
                                                                      className="text-[13px] font-semibold uppercase tracking-widest text-white hover:text-[#2563EB] transition-colors"
                                                                 >
                                                                      {col.title}
                                                                 </Link>
                                                            </div>
                                                            {/* Show sub-items for all menus except About */}
                                                            {item.name !== 'About' && (
                                                                 <div className="flex flex-col gap-4">
                                                                      {col.items.map((sub) => (
                                                                           <Link 
                                                                                key={sub.name}
                                                                                href={sub.href}
                                                                                onClick={() => setActiveDropdown(null)}
                                                                                className="text-[14px] font-medium text-white/70 hover:text-white transition-colors flex items-center gap-3 group/link"
                                                                           >
                                                                                <span>{sub.name}</span>
                                                                                {sub.comingSoon && (
                                                                                     <span className="text-[11px] text-white/30 uppercase tracking-wider group-hover/link:text-white/50 transition-colors">
                                                                                          [Coming Soon]
                                                                                     </span>
                                                                                )}
                                                                           </Link>
                                                                      ))}
                                                                 </div>
                                                            )}
                                                       </div>
                                                  ))}
                                             </div>
                                        )
                                   })}
                              </div>
                         </motion.div>
                    )}
               </AnimatePresence>

               {/* Mobile Menu */}
               <AnimatePresence>
                    {menuState && (
                         <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: '100vh' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="lg:hidden absolute top-0 left-0 w-full bg-[#050505] pt-24 px-6 overflow-y-auto"
                         >
                              <div className="flex flex-col gap-8 pb-20">
                                   {menuItems.map((item) => {
                                        const hasDropdown = !!item.megaMenuColumns
                                        const isDropdownOpen = activeDropdown === item.name

                                        return (
                                             <div key={item.name} className="flex flex-col gap-4">
                                                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                                       <Link
                                                            href={item.href}
                                                            onClick={() => !hasDropdown && setMenuState(false)}
                                                            className={`text-xl font-semibold uppercase tracking-widest ${pathname === item.href ? 'text-[#2563EB]' : 'text-white'}`}
                                                       >
                                                            {item.name}
                                                       </Link>
                                                       {hasDropdown && (
                                                            <button
                                                                 onClick={() => setActiveDropdown(isDropdownOpen ? null : item.name)}
                                                                 className={`p-2 transition-colors ${isDropdownOpen ? 'text-[#2563EB]' : 'text-white'}`}
                                                            >
                                                                 <motion.div 
                                                                      animate={{ rotate: isDropdownOpen ? 45 : 0 }}
                                                                      className="relative w-4 h-4 flex items-center justify-center"
                                                                 >
                                                                      <div className="absolute w-full h-[2px] bg-current" />
                                                                      <div className="absolute h-full w-[2px] bg-current" />
                                                                 </motion.div>
                                                            </button>
                                                       )}
                                                  </div>
                                                  {hasDropdown && isDropdownOpen && (
                                                       <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="flex flex-col gap-6 pl-4"
                                                       >
                                                            {item.megaMenuColumns!.map((col, idx) => (
                                                                 <div key={idx} className="flex flex-col gap-3">
                                                                      <div className="flex items-center gap-2">
                                                                           <div className="w-2 h-2 bg-[#2563EB]" />
                                                                           <span className="text-xs font-bold text-white/50 uppercase tracking-widest">{col.title}</span>
                                                                      </div>
                                                                      <div className="flex flex-col gap-3 pl-4">
                                                                           {col.items.map((sub) => (
                                                                                <Link
                                                                                     key={sub.name}
                                                                                     href={sub.href}
                                                                                     onClick={() => setMenuState(false)}
                                                                                     className="text-white/70 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider"
                                                                                >
                                                                                     {sub.name}
                                                                                </Link>
                                                                           ))}
                                                                      </div>
                                                                 </div>
                                                            ))}
                                                       </motion.div>
                                                  )}
                                             </div>
                                        )
                                   })}
                              </div>
                         </motion.div>
                    )}
               </AnimatePresence>
          </header>
     )
}