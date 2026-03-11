'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Header } from '@/components/blocks/header'
import FooterSection from '@/components/blocks/footer-section'
import { motion, AnimatePresence } from 'framer-motion'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { X } from 'lucide-react'

const GALLERY_IMAGES = [
     {
          id: 1,
          src: '/gallery/pic1.jpg',
          alt: 'Our Co-Founders Rishav and Harshill',
          description: 'Our Co-Founders Rishav and Harshill during their presentations to Indian Airforce and Indian Army.'
     },
     {
          id: 2,
          src: '/gallery/pic2.jpg',
          alt: 'Rishav during presentation',
          description: 'Rishav presenting to the Indian Airforce and Indian Army.'
     }
]

export default function GalleryPage() {
     const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null)

     return (
          <div className="relative min-h-screen bg-black text-white selection:bg-white/20 overflow-hidden font-sans">
               {/* Fixed Background */}
               <div className="fixed inset-0 z-0 opacity-40">
                    <BackgroundPaths title="" />
               </div>

               <Header />

               <main className="relative z-10 pt-32 pb-24">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 space-y-6 text-center">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                              className="inline-flex items-center gap-2 mb-4"
                         >
                         </motion.div>

                         <motion.h1
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 1, delay: 0.1 }}
                              className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6"
                              style={{ fontFamily: 'var(--font-space-grotesk)' }}
                         >
                              Gallery
                         </motion.h1>
                    </div>

                    {/* Simple Photo Viewer Grid */}
                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                         <div className="grid md:grid-cols-2 gap-8">
                              {GALLERY_IMAGES.map((img, idx) => (
                                   <motion.div
                                        key={img.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                                        className="group cursor-pointer flex flex-col gap-4"
                                        onClick={() => setSelectedImage(img)}
                                   >
                                        <div className="relative w-full h-[400px] overflow-hidden rounded-xl border border-white/10 bg-black flex items-center justify-center p-2">
                                             <Image
                                                  src={img.src}
                                                  alt={img.alt}
                                                  fill
                                                  className="object-contain transition-transform duration-700 ease-in-out group-hover:scale-105"
                                                  sizes="(max-width: 768px) 100vw, 50vw"
                                             />
                                             {/* Hover overlay hint */}
                                             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                                  <span className="font-mono text-xs uppercase tracking-widest border border-white/30 px-6 py-2 rounded-full bg-black/50">
                                                       View Full Screen
                                                  </span>
                                             </div>
                                        </div>
                                        <div className="space-y-2 px-2">
                                             <h3 className="text-lg font-bold font-mono text-white/90 uppercase tracking-wide">
                                                  {idx === 0 ? 'Co-Founders' : 'Presentation'}
                                             </h3>
                                             <p className="text-sm text-neutral-400 leading-relaxed max-w-lg">
                                                  {img.description}
                                             </p>
                                        </div>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </main>

               {/* Lightbox Modal */}
               <AnimatePresence>
                    {selectedImage && (
                         <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
                              onClick={() => setSelectedImage(null)}
                         >
                              <button
                                   onClick={() => setSelectedImage(null)}
                                   className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50 text-white"
                              >
                                   <X className="w-6 h-6" />
                              </button>

                              <div className="relative w-full max-w-6xl aspect-[4/3] max-h-[80vh] flex flex-col items-center justify-center cursor-default" onClick={e => e.stopPropagation()}>
                                   <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                        <Image
                                             src={selectedImage.src}
                                             alt={selectedImage.alt}
                                             fill
                                             className="object-contain"
                                             quality={100}
                                        />
                                   </div>
                                   <div className="mt-6 text-center">
                                        <p className="text-lg text-neutral-300 font-light max-w-2xl">
                                             {selectedImage.description}
                                        </p>
                                   </div>
                              </div>
                         </motion.div>
                    )}
               </AnimatePresence>

               {/* Grid Overlay */}
               <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
               <FooterSection />
          </div>
     )
}
