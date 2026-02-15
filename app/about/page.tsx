'use client'

import React from 'react'
import { Header } from '@/components/blocks/header'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { motion } from 'motion/react'
import { Shield, Target, Cpu } from 'lucide-react'
import { TeamGrid, TeamMember } from '@/components/ui/team-grid'
import { CompanyCard } from '@/components/ui/company-card'

const TEAM_MEMBERS: TeamMember[] = [
     {
          name: "Rishav Dev Mishra",
          role: "Co-Founder",
          description: "Leading the vision for AI-native robotics and national security systems. Focused on building strategic sovereignty through indigenous technology.",
          profileImage: "https://media.licdn.com/dms/image/v2/D5603AQHj9NCbXF4FEA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723396055264?e=2147483647&v=beta&t=CLUuuhy9H9BYIvi0QPCj4fVwM8JoZyJhESWpkYqi1T4",
          linkedin: "https://www.linkedin.com/in/rishav-dev-mishra-8607b7225"
     },
     {
          name: "Daggupati Harshill",
          role: "Co-Founder",
          description: "Architecting autonomous systems and physical intelligence layers. Dedicated to eliminating decision latency in multi-domain kinetic scenarios.",
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
                              <div className="flex flex-col gap-4">
                                   <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit"
                                   >
                                        <div className="w-1.5 h-1.5 rounded-full bg-defense-accent"></div>
                                        <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-white/50">
                                             Established 2024 • Bangalore, India
                                        </span>
                                   </motion.div>
                              </div>

                              <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
                                   <div className="max-w-4xl space-y-8">
                                        <motion.h1
                                             initial={{ opacity: 0, y: 20 }}
                                             animate={{ opacity: 1, y: 0 }}
                                             transition={{ duration: 0.8, delay: 0.1 }}
                                             className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase italic"
                                        >
                                             Defending <br />
                                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20">The Future</span>
                                        </motion.h1>

                                        <motion.p
                                             initial={{ opacity: 0, y: 20 }}
                                             animate={{ opacity: 1, y: 0 }}
                                             transition={{ duration: 0.8, delay: 0.2 }}
                                             className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl leading-relaxed"
                                        >
                                             Kshatra Labs is a next-generation robotics and AI company headquartered in Bangalore, Karnataka, focused on redefining the future of defense technology. Founded in 2025, the company operates with a bold mission: to design, manufacture, and deploy autonomous robotic systems across air, land, sea, and space to strengthen national security and safeguard borders.
                                        </motion.p>
                                   </div>

                                   <div className="hidden lg:block pt-4">
                                        <CompanyCard />
                                   </div>
                                   <div className="lg:hidden w-full flex justify-center">
                                        <CompanyCard />
                                   </div>
                              </div>
                         </div>

                         {/* Core Mission Text */}
                         <div className="space-y-6 max-w-3xl">
                              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white italic">Innovation Meets Purpose</h2>
                              <p className="text-lg text-neutral-300 leading-relaxed font-light">
                                   At Kshatra Labs, innovation meets purpose. The team builds intelligent autonomous platforms that extend human capability, enhance mission precision, and operate effectively in high-risk and complex environments. By integrating advanced robotics, artificial intelligence, and defense-grade engineering, the company develops systems that are reliable, adaptive, and mission-ready.
                              </p>
                         </div>


                         {/* Core Values / Mission */}
                         <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
                              <ValueCard
                                   icon={Shield}
                                   title="Strategic Sovereignty"
                                   description="Building indigenous technologies that ensure national security through independent autonomous capabilities."
                                   delay={0.3}
                              />
                              <ValueCard
                                   icon={Target}
                                   title="Precision Intelligence"
                                   description="Developing systems that reason and act with unmatched accuracy in highly contested environments."
                                   delay={0.4}
                              />
                              <ValueCard
                                   icon={Cpu}
                                   title="Machine Speed"
                                   description="Eliminating latency in decision-making to protect personnel and assets in real-time kinetic scenarios."
                                   delay={0.5}
                              />
                         </div>

                         {/* Vision Section */}
                         <div className="relative py-24 px-8 md:px-16 bg-white/5 border border-white/10 backdrop-blur-2xl overflow-hidden rounded-3xl">
                              <div className="relative z-10 max-w-3xl space-y-8">
                                   <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">Operational Excellence</h2>
                                   <p className="text-lg text-neutral-300 leading-relaxed font-light">
                                        Operating as a privately held company with a focused team of engineers and researchers, Kshatra Labs emphasizes agility, deep technical expertise, and rapid innovation. Their work is centered on creating autonomous solutions that improve operational efficiency, ensure mission success, and support strategic defense objectives.
                                   </p>
                                   <p className="text-lg text-neutral-300 leading-relaxed font-light">
                                        The future of conflict is autonomous. We are engineering a unified physical intelligence layer that operates seamlessly across air, land, sea, and space. With a strong foundation in Robotics and AI, Kshatra Labs is committed to shaping the future of intelligent defense systems — where technology amplifies human potential and strengthens national resilience.
                                   </p>
                                   <div className="flex flex-wrap gap-4 pt-4 text-white">
                                        {['Air', 'Land', 'Sea', 'Space'].map((domain) => (
                                             <div key={domain} className="px-6 py-2 bg-black border border-white/20 font-mono text-xs font-bold uppercase tracking-widest text-white">
                                                  {domain}
                                             </div>
                                        ))}
                                   </div>
                              </div>
                              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                                   <div className="w-full h-full bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)]"></div>
                              </div>
                         </div>

                         {/* Team Section */}
                         <div className="space-y-12">
                              <div className="max-w-3xl mx-auto text-center space-y-4">
                                   <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight italic text-white">Our Team</h2>
                                   <p className="text-lg text-neutral-400 font-light leading-relaxed">
                                        A collective of visionary engineers and strategists dedicated to pushing the boundaries of autonomous defense.
                                   </p>
                              </div>

                              <TeamGrid members={TEAM_MEMBERS} />
                         </div>
                    </div>
               </main>

               {/* Grid Overlay */}
               <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
     )
}

function ValueCard({ icon: Icon, title, description, delay }: { icon: React.ElementType<{ className?: string }>, title: string, description: string, delay: number }) {
     return (
          <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay }}
               className="space-y-6 group"
          >
               <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-defense-accent/10 group-hover:border-defense-accent/50 transition-all duration-300">
                    <Icon className="w-6 h-6 text-white group-hover:text-defense-accent transition-colors duration-300" />
               </div>
               <div className="space-y-3">
                    <h3 className="text-xl font-bold uppercase tracking-tight text-white">{title}</h3>
                    <p className="text-neutral-400 leading-relaxed font-light">{description}</p>
               </div>
          </motion.div>
     )
}
