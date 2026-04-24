'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileDown, ChevronRight } from 'lucide-react'
import { TechButton } from '@/components/ui/tech-button'

export default function DownloadBrochure() {
     return (
          <section className="py-24 relative overflow-hidden">
               <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         className="relative p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm overflow-hidden group"
                    >
                         {/* Decorative Background Elements */}
                         <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] -z-10 group-hover:bg-blue-500/10 transition-colors duration-700"></div>
                         <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-[100px] -z-10 group-hover:bg-blue-500/10 transition-colors duration-700"></div>

                         <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                              <div className="space-y-4 text-center md:text-left">
                                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-2">
                                        <FileDown className="w-3 h-3" />
                                        Documentation
                                   </div>
                                   <h2 className="text-3xl md:text-4xl font-bold font-mono uppercase tracking-tight text-white">
                                        Technical Specifications
                                   </h2>
                                   <p className="text-neutral-400 font-light max-w-md leading-relaxed">
                                        Download the complete HAWK interceptor brochure for detailed technical specifications, operational parameters, and deployment guidelines.
                                   </p>
                              </div>

                              <div className="flex flex-col items-center gap-4">
                                   <a 
                                        href="/Kshatra_Labs_hawk_brochure.pdf" 
                                        download="Kshatra_Labs_hawk_brochure.pdf"
                                        className="no-underline"
                                   >
                                        <TechButton className="px-8 py-4 text-base lg:text-lg group/btn">
                                             <span className="flex items-center gap-3">
                                                  DOWNLOAD BROCHURE
                                                  <ChevronRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                                             </span>
                                        </TechButton>
                                   </a>
                                   <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                                        PDF // 5.8 MB
                                   </span>
                              </div>
                         </div>

                         {/* Subtle Grid Overlay */}
                         <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, white 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
                    </motion.div>
               </div>
          </section>
     )
}
