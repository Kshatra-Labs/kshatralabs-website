'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
     { src: '/styles/2.png', alt: 'Kshatra Labs Platform' },
     { src: '/styles/3.png', alt: 'Land Domain - Ground Systems' },
     { src: '/styles/4.png', alt: 'Multi-Domain Operations' },
]

export function PlatformGallery() {
     const [activeIndex, setActiveIndex] = useState(0)
     const [isAutoPlaying, setIsAutoPlaying] = useState(true)

     // Auto-rotate every 5 seconds
     useEffect(() => {
          if (!isAutoPlaying) return

          const interval = setInterval(() => {
               setActiveIndex((prev) => (prev + 1) % galleryImages.length)
          }, 5000)

          return () => clearInterval(interval)
     }, [isAutoPlaying])

     const handlePrevious = () => {
          setIsAutoPlaying(false)
          setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
     }

     const handleNext = () => {
          setIsAutoPlaying(false)
          setActiveIndex((prev) => (prev + 1) % galleryImages.length)
     }

     const handleThumbnailClick = (index: number) => {
          setIsAutoPlaying(false)
          setActiveIndex(index)
     }

     return (
          <section className="relative py-32 bg-black overflow-hidden border-y border-white/[0.03]">
               {/* Grid Background */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

               <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                    {/* Header */}
                    <div className="mb-16 max-w-4xl">
                         <div className="flex items-center gap-4 mb-6">
                              <div className="h-px w-16 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                              <span className="text-blue-400/80 font-mono text-[10px] tracking-[0.25em] uppercase font-medium">
                                   Platform Gallery
                              </span>
                         </div>

                         <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                              Autonomous Interceptor Platform
                         </h2>

                         <p className="text-neutral-400 text-base leading-relaxed max-w-2xl">
                              The same intelligence scaled across air, land, and future unmanned systems.
                         </p>
                    </div>

                    {/* Main Gallery Display */}
                    <div className="relative mb-8">
                         {/* Main Image Container */}
                         <div className="relative h-[600px] bg-gradient-to-br from-white/[0.02] to-black border border-white/[0.08] overflow-hidden">
                              {/* Top accent */}
                              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-10"></div>

                              {/* Image Display */}
                              <AnimatePresence mode="wait">
                                   <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                                        className="relative w-full h-full"
                                   >
                                        {/* Blurred Backdrop for Pillarboxing */}
                                        <div className="absolute inset-0 overflow-hidden">
                                             <Image
                                                  src={galleryImages[activeIndex].src}
                                                  alt=""
                                                  fill
                                                  className="object-cover blur-3xl opacity-30 scale-110"
                                                  aria-hidden="true"
                                             />
                                        </div>

                                        <Image
                                             src={galleryImages[activeIndex].src}
                                             alt={galleryImages[activeIndex].alt}
                                             fill
                                             sizes="(max-width: 1280px) 100vw, 1280px"
                                             className="object-contain relative z-10"
                                             priority
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20"></div>
                                   </motion.div>
                              </AnimatePresence>

                              {/* Navigation Arrows */}
                              <button
                                   onClick={handlePrevious}
                                   className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 border border-white/10 hover:border-blue-500/50 hover:bg-black/70 transition-all duration-300 backdrop-blur-sm"
                                   aria-label="Previous image"
                              >
                                   <ChevronLeft className="w-6 h-6 text-white" strokeWidth={1.5} />
                              </button>

                              <button
                                   onClick={handleNext}
                                   className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 border border-white/10 hover:border-blue-500/50 hover:bg-black/70 transition-all duration-300 backdrop-blur-sm"
                                   aria-label="Next image"
                              >
                                   <ChevronRight className="w-6 h-6 text-white" strokeWidth={1.5} />
                              </button>

                              {/* Image Counter */}
                              <div className="absolute bottom-6 left-6 z-20 px-4 py-2 bg-black/70 border border-white/10 backdrop-blur-sm">
                                   <span className="text-xs font-mono text-white tracking-wider">
                                        {String(activeIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
                                   </span>
                              </div>

                              {/* Auto-play Indicator */}
                              {isAutoPlaying && (
                                   <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-4 py-2 bg-black/70 border border-blue-500/30 backdrop-blur-sm">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                                        <span className="text-xs font-mono text-blue-400 tracking-wider">AUTO</span>
                                   </div>
                              )}
                         </div>
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="grid grid-cols-4 gap-4">
                         {galleryImages.map((image, index) => (
                              <button
                                   key={index}
                                   onClick={() => handleThumbnailClick(index)}
                                   className={`relative h-32 overflow-hidden border transition-all duration-500 ${index === activeIndex
                                        ? 'border-blue-500/50 ring-1 ring-blue-500/30'
                                        : 'border-white/[0.06] hover:border-white/20'
                                        }`}
                              >
                                   <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 1280px) 25vw, 320px"
                                        className="object-cover transition-transform duration-500 hover:scale-110"
                                   />
                                   {/* Overlay */}
                                   <div className={`absolute inset-0 transition-all duration-500 ${index === activeIndex
                                        ? 'bg-blue-500/10'
                                        : 'bg-black/40 hover:bg-black/20'
                                        }`}></div>

                                   {/* Active Indicator */}
                                   {index === activeIndex && (
                                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500"></div>
                                   )}
                              </button>
                         ))}
                    </div>
               </div>
          </section>
     )
}
