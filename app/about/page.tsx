'use client'

import React from 'react'
import { Header } from '@/components/blocks/header'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { motion } from 'motion/react'
import { TeamGrid, TeamMember } from '@/components/ui/team-grid'
import { CompanyCard } from '@/components/ui/company-card'
import FooterSection from '@/components/blocks/footer-section'

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

export default function AboutPage() {
     return (
          <div className="relative min-h-screen bg-black text-white selection:bg-white/20 overflow-hidden">
               {/* Fixed Background */}
               <div className="fixed inset-0 z-0 opacity-40">
                    <BackgroundPaths title="" />
               </div>

               <Header />

               <main className="relative z-10 pt-32 pb-24 px-6 md:px-12 text-white">
                    <div className="max-w-7xl mx-auto space-y-32">

                         {/* Hero Section */}
                         <div className="space-y-8">

                              <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
                                   <div className="max-w-4xl space-y-8">
                                        <motion.div
                                             initial={{ opacity: 0, x: -20 }}
                                             animate={{ opacity: 1, x: 0 }}
                                             transition={{ duration: 0.8 }}
                                             className="flex items-center gap-2 mb-4"
                                        >
                                             <div className="w-8 h-[1px] bg-white/20"></div>
                                             <span className="text-xs font-mono uppercase tracking-[0.4em] text-white/40">At Kshatra Labs</span>
                                        </motion.div>

                                        <motion.h1
                                             initial={{ opacity: 0, y: 30 }}
                                             animate={{ opacity: 1, y: 0 }}
                                             transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                                             className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9]"
                                             style={{ fontFamily: 'var(--font-space-grotesk)' }}
                                        >
                                             Defending <br />
                                             <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20 [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">What Matters</span>
                                        </motion.h1>

                                        <motion.p
                                             initial={{ opacity: 0, y: 20 }}
                                             animate={{ opacity: 1, y: 0 }}
                                             transition={{ duration: 0.8, delay: 0.3 }}
                                             className="text-lg text-white font-light max-w-2xl leading-relaxed drop-shadow-md"
                                        >
                                             Kshatra Labs builds next-generation robotic systems for national security. We design, manufacture, and deploy autonomous platforms across air, land, and sea to protect borders and strengthen sovereignty.
                                        </motion.p>
                                   </div>

                                   <div className="hidden lg:block pt-4">
                                        <CompanyCard />
                                   </div>
                                   <div className="lg:hidden w-full flex justify-center">
                                        <CompanyCard />
                                   </div>
                              </div>

                              {/* HUD Meta Footer */}
                              <motion.div
                                   initial={{ opacity: 0 }}
                                   animate={{ opacity: 1 }}
                                   transition={{ duration: 1, delay: 0.5 }}
                                   className="pt-8 border-t border-white/5 flex flex-wrap items-center gap-x-8 gap-y-4 text-[10px] font-bold font-mono uppercase tracking-[0.3em] text-white"
                              >
                                   <div className="flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-defense-accent opacity-100"></div>
                                        <span>Established 2024</span>
                                   </div>
                                   <div className="flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-defense-accent opacity-100"></div>
                                        <span>Location: Bangalore, India</span>
                                   </div>
                              </motion.div>
                         </div>

                         {/* Core Mission Text */}
                         <div className="space-y-6 max-w-3xl">
                              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                   Core <span className="text-blue-400 text-glow-blue">Focus</span>
                              </h2>
                              <p className="text-lg text-white leading-relaxed font-light">
                                   We build intelligent autonomous platforms that extend human capability and enhance mission precision. By merging defense-grade engineering with advanced AI, we develop systems that are reliable, adaptive, and mission-ready.
                              </p>
                         </div>

                         {/* Operational Excellence Card */}
                         <motion.div
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 1 }}
                              className="group relative py-24 px-8 md:px-16 bg-black border border-white/10 overflow-hidden rounded-[2.5rem]"
                         >
                              {/* Neural Grid Background */}
                              <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
                                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                                   <motion.div
                                        animate={{ y: ["0%", "100%", "0%"] }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent z-10"
                                   />
                              </div>



                              <div className="relative z-10 max-w-4xl space-y-12">
                                   <div className="space-y-6">
                                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                             Operational <br />
                                             <span className="text-emerald-500 text-glow-green">Excellence</span>
                                        </h2>
                                        <div className="h-[2px] w-24 bg-emerald-500/50 group-hover:w-48 transition-all duration-700"></div>
                                   </div>

                                   <div className="grid md:grid-cols-2 gap-12">
                                        <p className="text-xl text-white leading-relaxed font-light">
                                             We operate with agility and deep technical expertise to create solutions that improve operational efficiency and ensure mission success.
                                        </p>
                                        <p className="text-xl text-white leading-relaxed font-light border-l-2 border-white/10 pl-8">
                                             &quot;The future of conflict is autonomous. We are engineering the physical intelligence layer to amplify human potential.&quot;
                                        </p>
                                   </div>

                                   <div className="flex flex-wrap gap-6 pt-8">
                                        {[
                                             { label: 'Air', icon: 'M12 2l9 20-9-4-9 4z' },
                                             { label: 'Land', icon: 'M2 17h20v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4zM2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8z' },
                                             { label: 'Sea', icon: 'M12 4L3 16h6v4h6v-4h6L12 4z' }
                                        ].map((domain) => (
                                             <motion.div
                                                  key={domain.label}
                                                  whileHover={{ scale: 1.05 }}
                                                  className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl flex items-center gap-4 group/item hover:bg-white/10 transition-colors"
                                             >
                                                  <svg className="w-5 h-5 text-white group-hover/item:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                                       <path d={domain.icon} />
                                                  </svg>
                                                  <span className="font-mono text-sm font-bold uppercase tracking-widest text-white group-hover/item:text-white">
                                                       {domain.label}
                                                  </span>
                                             </motion.div>
                                        ))}
                                   </div>
                              </div>

                              {/* Corner Accents */}
                              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/10 rounded-tl-[2.5rem]"></div>
                              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/10 rounded-br-[2.5rem]"></div>
                         </motion.div>

                         {/* Team Section */}
                         <div className="space-y-12">
                              <div className="max-w-3xl mx-auto text-center space-y-4">
                                   <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white" style={{ fontFamily: 'var(--font-space-grotesk)' }}>Our Team</h2>
                              </div>

                              <TeamGrid members={TEAM_MEMBERS} />
                         </div>

                    </div>
               </main>

               {/* Grid Overlay */}
               <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
               <FooterSection />
          </div>
     )
}
