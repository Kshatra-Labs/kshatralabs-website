'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
     {
          src: '/styles/2.png',
          alt: 'Kshatra Labs Platform',
          label: 'AIR INTERCEPTOR UNIT',
          title: 'High-Speed Autonomous Interception',
          description: 'Edge AI powered system with onboard tracking and threat engagement.',
          features: ['Edge AI', 'Target Lock', 'Swarm Ready', 'EW Resistant']
     },
     {
          src: '/styles/3.png',
          alt: 'Land Domain - Ground Systems',
          label: 'GROUND DEFENSE UNIT',
          title: 'Autonomous Perimeter Defense',
          description: 'All-terrain ground interceptor for securing contested zones without human latency.',
          features: ['All-Terrain', '360° Vision', 'Mesh Networking', 'High Endurance']
     },
     {
          src: '/styles/4.png',
          alt: 'Multi-Domain Operations',
          label: 'MULTI-DOMAIN COMMAND',
          title: 'Cross-Domain Coordination',
          description: 'Synchronized operation across aerial and ground assets for unified defense.',
          features: ['Unified UI', 'Shared Intent', 'Real-time Analytics', 'Satellite Sync']
     },
]

export function PlatformGallery() {
     const [activeIndex, setActiveIndex] = useState(0)
     const [isAutoPlaying, setIsAutoPlaying] = useState(true)
     const scrollRef = useRef<HTMLDivElement>(null)

     // Auto-rotate every 6 seconds
     useEffect(() => {
          if (!isAutoPlaying) return

          const interval = setInterval(() => {
               setActiveIndex((prev) => (prev + 1) % galleryImages.length)
          }, 6000)

          return () => clearInterval(interval)
     }, [isAutoPlaying])

     const handleThumbnailClick = (index: number) => {
          setIsAutoPlaying(false)
          setActiveIndex(index)
     }

     // Ensure scroll starts at 0 and doesn't auto-adjust
     useEffect(() => {
          if (scrollRef.current) {
               scrollRef.current.scrollLeft = 0
          }
     }, [])

     const scrollThumbnails = (direction: 'left' | 'right') => {
          if (scrollRef.current) {
               const { scrollLeft } = scrollRef.current
               const scrollTo = direction === 'left' ? scrollLeft - 200 : scrollLeft + 200
               scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
          }
     }

     const currentItem = galleryImages[activeIndex]

     return (
          <section className="relative py-20 px-[6vw] bg-[#050608] overflow-hidden text-white font-sans">
               {/* Header */}
               <div className="mb-10 text-left">
                    <small className="text-[#2f7cff] tracking-[2px] text-[11px] font-bold uppercase block mb-2 text-center">
                         PLATFORM GALLERY
                    </small>

               </div>

               {/* Main Card */}
               <div className="mt-10 bg-gradient-to-b from-[#0b0f14] to-[#050608] rounded-[28px] p-6 md:p-8 shadow-[0_0_60px_rgba(47,124,255,0.15)] border border-white/5">

                    {/* Image Area */}
                    <div className="relative rounded-[20px] overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-black group">
                         {/* Image Display */}
                         <AnimatePresence mode="wait">
                              <motion.div
                                   key={activeIndex}
                                   initial={{ opacity: 0 }}
                                   animate={{ opacity: 1 }}
                                   exit={{ opacity: 0 }}
                                   transition={{ duration: 0.5 }}
                                   className="absolute inset-0"
                              >
                                   {/* Blurred Backdrop for Portrait Support */}
                                   <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                                        <Image
                                             src={currentItem.src}
                                             alt=""
                                             fill
                                             className="object-cover blur-3xl opacity-20 scale-110"
                                        />
                                   </div>

                                   <Image
                                        src={currentItem.src}
                                        alt={currentItem.alt}
                                        fill
                                        sizes="(max-width: 1280px) 100vw, 1280px"
                                        className="object-contain relative z-10"
                                        priority
                                   />

                                   {/* Overlay Gradient */}
                                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,black_90%)] z-20 pointer-events-none"></div>

                                   {/* Label */}
                                   <div className="absolute top-5 left-5 z-40 px-3 py-1.5 border border-white/20 rounded-[20px] text-[10px] md:text-xs tracking-wider backdrop-blur-md bg-black/30 font-mono">
                                        {currentItem.label}
                                   </div>
                              </motion.div>
                         </AnimatePresence>

                         {/* Navigation Controls */}
                         <button
                              onClick={(e) => {
                                   e.stopPropagation()
                                   setIsAutoPlaying(false)
                                   setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
                              }}
                              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/40 border border-white/10 opacity-0 group-hover:opacity-100 hover:bg-black/60 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
                              aria-label="Previous image"
                         >
                              <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2} />
                         </button>

                         <button
                              onClick={(e) => {
                                   e.stopPropagation()
                                   setIsAutoPlaying(false)
                                   setActiveIndex((prev) => (prev + 1) % galleryImages.length)
                              }}
                              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/40 border border-white/10 opacity-0 group-hover:opacity-100 hover:bg-black/60 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
                              aria-label="Next image"
                         >
                              <ChevronRight className="w-5 h-5 text-white" strokeWidth={2} />
                         </button>
                    </div>

                    {/* Description Area */}
                    <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                         <div className="space-y-4 flex-grow">
                              <AnimatePresence mode="wait">
                                   <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                   >
                                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                                             {currentItem.title}
                                        </h3>
                                        <p className="text-white/60 mt-2 text-sm md:text-base max-w-2xl leading-relaxed">
                                             {currentItem.description}
                                        </p>
                                   </motion.div>
                              </AnimatePresence>

                              {/* Feature Chips */}
                              <div className="flex flex-wrap gap-3 mt-5">
                                   {currentItem.features.map((feature, i) => (
                                        <motion.div
                                             key={i}
                                             whileHover={{ scale: 1.05, filter: "brightness(1.2)", borderColor: "rgba(47,124,255,0.8)" }}
                                             className="px-3 py-1.5 md:px-4 md:py-2 rounded-[16px] bg-[#0e1320] text-[10px] md:text-sm border border-[#2f7cff]/40 text-blue-200 uppercase tracking-wider font-medium cursor-default transition-colors duration-300"
                                        >
                                             {feature}
                                        </motion.div>
                                   ))}
                              </div>
                         </div>

                         {/* Thumbnails Navigation */}
                         <div className="relative flex flex-col gap-2 min-w-[300px] md:max-w-[400px]">
                              <div className="flex items-center justify-between px-1 mb-1">
                                   <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase">Select Platform</span>
                                   <div className="flex gap-2">
                                        <button
                                             onClick={() => scrollThumbnails('left')}
                                             className="p-1 rounded bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                        >
                                             <ChevronLeft className="w-4 h-4 text-white/60" />
                                        </button>
                                        <button
                                             onClick={() => scrollThumbnails('right')}
                                             className="p-1 rounded bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                        >
                                             <ChevronRight className="w-4 h-4 text-white/60" />
                                        </button>
                                   </div>
                              </div>

                              {/* Thumbnail Scroll Area */}
                              <div className="relative overflow-visible">
                                   <div
                                        ref={scrollRef}
                                        className="flex gap-6 overflow-x-auto p-4 px-10 snap-x scroll-px-10 scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                                   >
                                        {galleryImages.map((image, index) => (
                                             <button
                                                  key={index}
                                                  onClick={() => handleThumbnailClick(index)}
                                                  className={`relative flex-shrink-0 w-[120px] md:w-[140px] h-[70px] md:h-[80px] rounded-[14px] transition-all duration-500 snap-start ${index === activeIndex
                                                       ? 'ring-2 ring-[#2f7cff] shadow-[0_0_30px_rgba(47,124,255,0.5)] z-10 scale-[1.05]'
                                                       : 'opacity-40 hover:opacity-100 grayscale-[0.5] hover:grayscale-0 hover:scale-[1.02]'
                                                       }`}
                                             >
                                                  <div className="absolute inset-0 rounded-[14px] overflow-hidden">
                                                       <Image
                                                            src={image.src}
                                                            alt={image.alt}
                                                            fill
                                                            sizes="140px"
                                                            className="object-cover"
                                                       />
                                                       {index === activeIndex && (
                                                            <div className="absolute inset-0 bg-blue-500/10 pointer-events-none" />
                                                       )}
                                                  </div>
                                             </button>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* Progress Bar (System Bar) */}
                    <div className="mt-8 h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                         <motion.div
                              key={activeIndex}
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 6, ease: "linear" }}
                              className="h-full bg-[#2f7cff] shadow-[0_0_15px_rgba(47,124,255,0.8)]"
                         />
                    </div>
               </div>
          </section>
     )
}
