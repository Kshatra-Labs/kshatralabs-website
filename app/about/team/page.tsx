'use client'

import React from 'react'
import { Header } from '@/components/blocks/header'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { TeamGrid, TeamMember } from '@/components/ui/team-grid'
import FooterSection from '@/components/blocks/footer-section'
import { motion } from 'framer-motion'

const TEAM_MEMBERS: TeamMember[] = [
     {
          name: "Rishav Dev Mishra",
          role: "Co-Founder",
          description: "Leading the vision for AI-native robotics and national security systems.",
          profileImage: "https://media.licdn.com/dms/image/v2/D5603AQHj9NCbXF4FEA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723396055264?e=2147483647&v=beta&t=CLUuuhy9H9BYIvi0QPCj4fVwM8JoZyJhESWpkYqi1T4",
          linkedin: "https://www.linkedin.com/in/rishav-dev-mishra-8607b7225"
     },
     {
          name: "Daggupati Harshill",
          role: "Co-Founder",
          description: "Architecting autonomous systems and physical intelligence.",
          profileImage: "https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg",
          linkedin: "https://www.linkedin.com/in/harshill-daggupati-416299231/"
     }
];

export default function TeamPage() {
     return (
          <div className="relative min-h-screen bg-black text-white selection:bg-white/20 overflow-hidden font-sans">
               {/* Fixed Background */}
               <div className="fixed inset-0 z-0 opacity-40">
                    <BackgroundPaths title="" />
               </div>

               <Header />

               <main className="relative z-10 pt-32 md:pt-40 pb-24 px-6 md:px-12 text-white">
                    <div className="max-w-7xl mx-auto space-y-24">

                         <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8 }}
                                   className="inline-flex items-center gap-2 mb-4"
                              >
                                   <div className="w-8 h-[1px] bg-white/20"></div>
                                   <span className="text-xs font-mono uppercase tracking-[0.4em] text-defense-accent">Leadership</span>
                                   <div className="w-8 h-[1px] bg-white/20"></div>
                              </motion.div>

                              <motion.h1
                                   initial={{ opacity: 0, y: 30 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 1, delay: 0.1 }}
                                   className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6"
                                   style={{ fontFamily: 'var(--font-space-grotesk)' }}
                              >
                                   Our Team
                              </motion.h1>
                              <motion.p
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8, delay: 0.2 }}
                                   className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto"
                              >
                                   Engineers, researchers, and defense experts building the foundation for next-generation autonomous platforms.
                              </motion.p>
                         </div>

                         <TeamGrid members={TEAM_MEMBERS} />
                    </div>
               </main>

               {/* Grid Overlay */}
               <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
               <FooterSection />
          </div>
     )
}
