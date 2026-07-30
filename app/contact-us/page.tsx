'use client'

import React, { useState } from 'react'
import { Header } from '@/components/blocks/header'
import FooterSection from '@/components/blocks/footer-section'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-is-mobile'
import { MailChoiceModal } from '@/components/ui/mail-choice-modal'

export default function ContactUsPage() {
     const [isMailModalOpen, setIsMailModalOpen] = useState(false)
     const isMobile = useIsMobile()

     const handleMailClick = (e: React.MouseEvent) => {
          if (!isMobile) {
               e.preventDefault()
               setIsMailModalOpen(true)
          }
     }

     return (
          <div className="relative min-h-screen bg-black text-white selection:bg-white/20 overflow-hidden font-sans">
               {/* Fixed Background */}
               <div className="fixed inset-0 z-0 opacity-40">
                    <BackgroundPaths title="" />
               </div>

               <Header />

               <main className="relative z-10 pt-32 md:pt-40 pb-24 px-6 md:px-12 text-white">
                    <div className="max-w-7xl mx-auto space-y-16">

                         <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
                              <motion.div
                                   initial={{ opacity: 0, scale: 0.9 }}
                                   animate={{ opacity: 1, scale: 1 }}
                                   transition={{ duration: 0.8 }}
                                   className="flex justify-center -mb-8"
                              >
                                   <div
                                        className="w-64 h-64 md:w-80 md:h-80 bg-white"
                                        style={{
                                             WebkitMaskImage: 'url(/logo.svg)',
                                             WebkitMaskSize: 'contain',
                                             WebkitMaskRepeat: 'no-repeat',
                                             WebkitMaskPosition: 'center',
                                             maskImage: 'url(/logo.svg)',
                                             maskSize: 'contain',
                                             maskRepeat: 'no-repeat',
                                             maskPosition: 'center'
                                        }}
                                   />
                              </motion.div>

                              <motion.h1
                                   initial={{ opacity: 0, y: 30 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 1, delay: 0.1 }}
                                   className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6"
                                   style={{ fontFamily: 'var(--font-space-grotesk)' }}
                              >
                                   Contact Us
                              </motion.h1>
                              <motion.p
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8, delay: 0.2 }}
                                   className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto"
                              >
                                   For inquiries regarding defence procurement, media relations, or partnerships, please contact us through the channels below.
                              </motion.p>
                         </div>

                         <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start relative pb-16">
                              {/* Direct Contact Methods */}
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8, delay: 0.3 }}
                                   className="col-span-1 lg:col-span-5 w-full max-w-7xl mx-auto"
                              >
                                   <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {/* 01: Official Correspondence */}
                                        <a
                                             href="mailto:contact@kshatralabs.in"
                                             onClick={handleMailClick}
                                             className="p-6 bg-white text-black border border-white rounded-none space-y-4 group relative transition-all duration-200 hover:bg-neutral-100 flex flex-col justify-between min-h-[160px]"
                                        >
                                             <div className="flex items-start justify-between gap-4">
                                                  <Mail className="w-6 h-6 text-black transition-transform duration-200 group-hover:scale-110" />
                                             </div>

                                             <div className="space-y-1.5 pt-2">
                                                  <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-500">
                                                       Email
                                                  </h3>
                                                  <p className="text-lg font-bold font-mono text-black tracking-tight break-all">
                                                       contact@kshatralabs.in
                                                  </p>
                                             </div>
                                        </a>

                                        {/* 02: Direct Operator */}
                                        <a
                                             href="tel:+919730458528"
                                             className="p-6 bg-white text-black border border-white rounded-none space-y-4 group relative transition-all duration-200 hover:bg-neutral-100 flex flex-col justify-between min-h-[160px]"
                                        >
                                             <div className="flex items-start justify-between gap-4">
                                                  <Phone className="w-6 h-6 text-black transition-transform duration-200 group-hover:scale-110" />
                                             </div>

                                             <div className="space-y-1.5 pt-2">
                                                  <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-500">
                                                       Phone no
                                                  </h3>
                                                  <p className="text-lg font-bold font-mono text-black tracking-tight">
                                                       +91 97304 58528
                                                  </p>
                                             </div>
                                        </a>

                                        {/* 03: Global Headquarters */}
                                        <div className="p-6 bg-white text-black border border-white rounded-none space-y-4 group relative transition-all duration-200 hover:bg-neutral-100 flex flex-col justify-between min-h-[160px] cursor-default">
                                             <div className="flex items-start justify-between gap-4">
                                                  <MapPin className="w-6 h-6 text-black transition-transform duration-200 group-hover:scale-110" />
                                             </div>

                                             <div className="space-y-1.5 pt-2">
                                                  <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-500">
                                                       Located At
                                                  </h3>
                                                  <p className="text-base font-bold font-mono text-black leading-tight">
                                                       Bangalore, India
                                                  </p>
                                                  <span className="text-[11px] font-mono uppercase text-neutral-600 block">
                                                       Autonomous Systems Facility
                                                  </span>
                                             </div>
                                        </div>

                                        {/* 04: Professional Network */}
                                        <a
                                             href="https://in.linkedin.com/company/kshatra-labs"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="p-6 bg-white text-black border border-white rounded-none space-y-4 group relative transition-all duration-200 hover:bg-neutral-100 flex flex-col justify-between min-h-[160px]"
                                        >
                                             <div className="flex items-start justify-between gap-4">
                                                  <Linkedin className="w-6 h-6 text-black transition-transform duration-200 group-hover:scale-110" />
                                             </div>

                                             <div className="space-y-1.5 pt-2">
                                                  <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-500">
                                                       Linkedin
                                                  </h3>
                                                  <p className="text-lg font-bold font-mono text-black tracking-tight">
                                                       Kshatra Labs
                                                  </p>
                                             </div>
                                        </a>
                                   </div>
                              </motion.div>


                         </div>
                    </div>
               </main>

               {/* Grid Overlay */}
               <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
               <FooterSection />
               <MailChoiceModal
                    isOpen={isMailModalOpen}
                    onClose={() => setIsMailModalOpen(false)}
                    email="contact@kshatralabs.in"
               />
          </div>
     )
}
