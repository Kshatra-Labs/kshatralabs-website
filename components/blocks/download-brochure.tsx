'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function DownloadBrochure() {
     return (
          <section className="py-24 border-t border-b border-neutral-800 bg-[#000000] text-white">
               <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
                    <div className="space-y-4 max-w-2xl">
                         <div className="font-mono text-[13px] uppercase tracking-[0.25em] text-[#cc1414] font-semibold">
                              Technical Documentation
                         </div>
                         <h2 
                              className="text-[32px] sm:text-[38px] lg:text-[51px] font-extrabold uppercase tracking-tight text-white"
                              style={{ fontFamily: 'var(--font-space-grotesk)' }}
                         >
                              HAWK Platform Data Sheet
                         </h2>
                         <p className="text-[17px] text-neutral-400 font-light leading-relaxed">
                              Download the complete HAWK interceptor technical dossier, including detailed mechanical drawings, subsystem integration guides, and operational deployment envelopes.
                         </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                         <a 
                              href="/Kshatra_Labs_hawk_brochure.pdf" 
                              download="Kshatra_Labs_hawk_brochure.pdf"
                              className="group px-8 py-5 bg-white text-black font-mono text-[13px] font-bold tracking-[0.2em] uppercase hover:bg-[#cc1414] hover:text-white transition-colors duration-200 flex items-center gap-4"
                         >
                              <span>Download PDF Dossier</span>
                              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                         </a>
                         <div className="font-mono text-[13px] text-neutral-500 uppercase tracking-widest">
                              Format: PDF <br /> Size: 5.8 MB
                         </div>
                    </div>
               </div>
          </section>
     )
}
