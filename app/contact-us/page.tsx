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
                                   For inquiries regarding defense procurement, media relations, or partnerships, please contact us through the channels below.
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
                                        <a
                                             href="mailto:contact@kshatralabs.in"
                                             onClick={handleMailClick}
                                             className="p-8 border border-white/10 bg-neutral-900/40 backdrop-blur-xl rounded-3xl space-y-6 group relative overflow-hidden transition-all hover:bg-neutral-900/60 hover:border-white/20"
                                        >
                                             <div className="absolute top-0 right-0 w-48 h-48 bg-defense-accent/5 rounded-full blur-[50px] pointer-events-none -translate-y-1/2 translate-x-1/2 group-hover:bg-defense-accent/10 transition-colors duration-700"></div>
                                             <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black group-hover:border-defense-accent/50 transition-colors">
                                                  <Mail className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                                             </div>
                                             <div className="space-y-3">
                                                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">Official Correspondence</h3>
                                                  <p className="text-xl font-medium text-white transition-colors">
                                                       contact@kshatralabs.in
                                                  </p>
                                             </div>
                                        </a>

                                        <a href="tel:+919730458528" className="p-8 border border-white/10 bg-neutral-900/40 backdrop-blur-xl rounded-3xl space-y-6 group relative overflow-hidden transition-all hover:bg-neutral-900/60 hover:border-white/20">
                                             <div className="absolute top-0 right-0 w-48 h-48 bg-defense-accent/5 rounded-full blur-[50px] pointer-events-none -translate-y-1/2 translate-x-1/2 group-hover:bg-defense-accent/10 transition-colors duration-700"></div>
                                             <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black group-hover:border-defense-accent/50 transition-colors">
                                                  <Phone className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                                             </div>
                                             <div className="space-y-3">
                                                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">Direct Operator</h3>
                                                  <p className="text-xl font-medium text-white transition-colors">
                                                       +91 97304 58528
                                                  </p>
                                             </div>
                                        </a>

                                        <div className="p-8 border border-white/10 bg-neutral-900/40 backdrop-blur-xl rounded-3xl space-y-6 group relative overflow-hidden transition-all hover:bg-neutral-900/60 hover:border-white/20 cursor-default">
                                             <div className="absolute top-0 right-0 w-48 h-48 bg-defense-accent/5 rounded-full blur-[50px] pointer-events-none -translate-y-1/2 translate-x-1/2 group-hover:bg-defense-accent/10 transition-colors duration-700"></div>
                                             <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black group-hover:border-white/20 transition-colors">
                                                  <MapPin className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                                             </div>
                                             <div className="space-y-3">
                                                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">Global Headquarters</h3>
                                                  <p className="text-lg font-medium text-white leading-relaxed">
                                                       Bangalore, India<br /><span className="text-sm text-neutral-400 font-light mt-1 block">Autonomous Systems Facility</span>
                                                  </p>
                                             </div>
                                        </div>

                                        <a href="https://www.linkedin.com/company/kshatralabs/" target="_blank" rel="noopener noreferrer" className="p-8 border border-white/10 bg-neutral-900/40 backdrop-blur-xl rounded-3xl space-y-6 group relative overflow-hidden transition-all hover:bg-neutral-900/60 hover:border-white/20">
                                             <div className="absolute top-0 right-0 w-48 h-48 bg-defense-accent/5 rounded-full blur-[50px] pointer-events-none -translate-y-1/2 translate-x-1/2 group-hover:bg-defense-accent/10 transition-colors duration-700"></div>
                                             <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black group-hover:border-defense-accent/50 transition-colors">
                                                  <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                                             </div>
                                             <div className="space-y-3">
                                                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">Professional Network</h3>
                                                  <p className="text-xl font-medium text-white transition-colors">
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
