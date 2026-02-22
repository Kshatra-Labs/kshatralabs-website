'use client'

import React from 'react'
import { Header } from '@/components/blocks/header'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { motion } from 'motion/react'
import { ShinyButton } from '@/components/ui/shiny-button'
import FooterSection from '@/components/blocks/footer-section'

export default function ProductsPage() {
     return (
          <div className="relative min-h-screen bg-black text-white selection:bg-white/20 overflow-hidden">
               {/* Fixed Background */}
               <div className="fixed inset-0 z-0 opacity-40">
                    <BackgroundPaths title="" />
               </div>

               <Header />

               <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-32">
                    <div className="max-w-4xl text-center space-y-8">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                              className="flex flex-col items-center gap-12"
                         >
                              <p className="max-w-2xl mx-auto text-white text-2xl leading-relaxed font-light">
                                   We are engineering the next generation of autonomous physical intelligence. Our systems are currently in classified development and field testing.
                              </p>

                              <div style={{ transform: 'scale(1.8)', transformOrigin: 'center', display: 'inline-block' }}>
                                   <ShinyButton className="--shiny-cta-highlight: #ffffff; --shiny-cta-highlight-subtle: #a1a1a1;">
                                        COMING SOON !
                                   </ShinyButton>
                              </div>
                         </motion.div>
                    </div>
               </main>

               {/* Grid Overlay */}
               <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
               <div className="relative z-10 mt-16">
                    <FooterSection />
               </div>
          </div>
     )
}
