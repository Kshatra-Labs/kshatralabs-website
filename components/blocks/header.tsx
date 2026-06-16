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
     generalInfo?: { title: string; desc: string }
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
                         { name: 'Company', href: '/about/company', desc: 'Discover our founding mission, vision for the future, and core focus on defense innovation.' }
                    ]
               },
               {
                    title: 'TEAM',
                    items: [
                         { name: 'Team', href: '/about/team', desc: 'Meet the leadership team and world-class engineers behind our autonomous systems.' }
                    ]
               },
               {
                    title: 'GALLERY',
                    items: [
                         { name: 'Gallery', href: '/about/gallery', desc: 'Explore our products and platforms in action through our visual gallery.' }
                    ]
               },
               {
                    title: 'NEWS',
                    items: [
                         { name: 'News', href: '/about/news', desc: 'Stay informed with the latest updates, press releases, and company announcements.' }
                    ]
               }
          ]
     },
     {
          name: 'Products',
          href: '/products/hawk',
          generalInfo: {
               title: 'LAND DOMAIN',
               desc: 'A family of autonomous systems, powered by advanced tactical AI, that provide integrated, persistent awareness and security for land regions, borders, and critical infrastructure.'
          },
          megaMenuColumns: [
               {
                    title: 'INTERCEPTORS',
                    items: [
                         { name: 'HAWK', href: '/products/hawk', desc: 'Our flagship high-speed kinetic interceptor designed to neutralize aerial threats with precision and scale.' }
                    ]
               },
               {
                    title: 'TRACKING SYSTEMS',
                    items: [
                         { name: 'HAWKEYE', href: '/products', desc: 'Advanced electro-optical/infrared tracking system for persistent threat detection and target acquisition.', comingSoon: true }
                    ]
               },
               {
                    title: 'TACTICAL AUTONOMY',
                    items: [
                         { name: 'APEX', href: '/products', desc: 'Intelligent edge-compute node that processes sensor data in real-time to enable autonomous decision making.', comingSoon: true }
                    ]
               },
               {
                    title: 'COORDINATED DEFENCE',
                    items: [
                         { name: 'SWARM', href: '/products', desc: 'Distributed software architecture enabling collaborative engagement across multiple autonomous nodes.', comingSoon: true }
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
     const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
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
                              className="hidden lg:block absolute top-full left-0 w-full bg-black border-t border-white/10 overflow-hidden shadow-2xl"
                         >
                              <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-12">
                                   {menuItems.map((item) => {
                                        if (item.name !== activeDropdown || !item.megaMenuColumns) return null;
                                        
                                        if (item.name === 'Products') {
                                             const defaultInfo = item.generalInfo || { title: '', desc: '' };
                                             const currentHoveredItem = item.megaMenuColumns.flatMap(c => c.items).find(i => i.name === hoveredProduct);
                                             const displayTitle = currentHoveredItem ? currentHoveredItem.name : defaultInfo.title;
                                             const displayDesc = currentHoveredItem ? currentHoveredItem.desc : defaultInfo.desc;

                                             return (
                                                  <div key={item.name} className="flex flex-col lg:flex-row w-full max-w-[1200px] mx-auto gap-8 lg:gap-0">
                                                       {/* Left Info Panel */}
                                                       <div className="w-full lg:w-[35%] flex flex-col justify-start pr-12 lg:pr-16 lg:border-r border-white/10 mb-8 lg:mb-0 h-full min-h-[150px] lg:min-h-[180px]">
                                                            <h3 className="text-[13px] font-semibold text-white mb-4 uppercase tracking-widest transition-opacity duration-300">{displayTitle}</h3>
                                                            <p className="text-[15px] text-white/70 leading-relaxed font-normal transition-opacity duration-300" style={{ fontFamily: 'var(--font-space-grotesk)' }}>{displayDesc}</p>
                                                       </div>
                                                       {/* Right Options Panel */}
                                                       <div className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:pl-12 lg:divide-x divide-white/10 gap-y-8">
                                                            {item.megaMenuColumns.map((col, idx) => (
                                                                 <div key={idx} className="flex flex-col h-full bg-black rounded-none transition-all duration-300 lg:px-6 first:lg:pl-0 last:lg:pr-0">
                                                                      <div className="pb-3 mb-2 flex items-start group/title h-12">
                                                                           <Link
                                                                                href={col.items[0]?.href ?? '#'}
                                                                                onClick={() => setActiveDropdown(null)}
                                                                                className="text-[13px] font-bold uppercase tracking-[0.2em] text-white hover:text-white/80 transition-colors leading-snug"
                                                                           >
                                                                                {col.title}
                                                                           </Link>
                                                                      </div>
                                                                      <div className="flex flex-col gap-2 -mx-4">
                                                                           {col.items.map((sub) => (
                                                                                <Link 
                                                                                     key={sub.name}
                                                                                     href={sub.href}
                                                                                     onClick={() => setActiveDropdown(null)}
                                                                                     onMouseEnter={() => setHoveredProduct(sub.name)}
                                                                                     onMouseLeave={() => setHoveredProduct(null)}
                                                                                     className="text-[15px] font-bold text-white hover:text-black hover:bg-white py-3 px-4 rounded-none transition-all duration-300 flex items-center justify-between group/link"
                                                                                >
                                                                                     <div className="flex items-center gap-3">
                                                                                          <span className="text-[14px] text-white/50 font-normal group-hover/link:text-black/50 transition-colors">+</span>
                                                                                          <span>{sub.name}</span>
                                                                                     </div>
                                                                                </Link>
                                                                           ))}
                                                                      </div>
                                                                 </div>
                                                            ))}
                                                       </div>
                                                  </div>
                                             )
                                        }

                                        return (
                                             <div key={item.name} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:divide-x divide-white/10 w-full max-w-[1200px] mx-auto">
                                                  {item.megaMenuColumns.map((col, idx) => (
                                                       <div key={idx} className="flex flex-col h-full lg:px-6 first:lg:pl-0 last:lg:pr-0">
                                                            <Link
                                                                 href={col.items[0]?.href ?? '#'}
                                                                 onClick={() => setActiveDropdown(null)}
                                                                 className="group/card flex flex-col p-4 md:p-5 hover:bg-white rounded-none transition-colors duration-200 h-full"
                                                            >
                                                                 <h3 className="text-[17px] font-medium text-white/90 mb-1 tracking-tight group-hover/card:text-black transition-colors" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                                                      {col.items[0]?.name}
                                                                 </h3>
                                                                 <p className="text-[13px] text-white/50 leading-relaxed font-normal group-hover/card:text-black/70 transition-colors">
                                                                      {col.items[0]?.desc}
                                                                 </p>
                                                            </Link>
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
                                                                                     className="text-white/70 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider flex items-center gap-2"
                                                                                >
                                                                                     <span>{sub.name}</span>
                                                                                     {sub.comingSoon && (
                                                                                          <span className="text-[10px] text-white/30 tracking-widest">
                                                                                               [COMING SOON]
                                                                                          </span>
                                                                                     )}
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