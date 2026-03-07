'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Cpu, Eye, Plane, Network, ChevronDown, CheckCircle2 } from 'lucide-react'
import { Header } from '@/components/blocks/header'
import FooterSection from '@/components/blocks/footer-section'
import { MailChoiceModal } from '@/components/ui/mail-choice-modal'
import { useIsMobile } from '@/hooks/use-is-mobile'

interface JobDescription {
     title: string
     responsibilities: string[]
}

const JOB_DESCRIPTIONS: Record<string, JobDescription> = {
     "1": {
          "title": "Robotics Engineer",
          "responsibilities": [
               "Working with ROS2. Work with various different Autonomy stacks.",
               "Writing low-level vehicle controllers.",
               "Gain in-depth implementation-level knowledge of C++ and Python.",
               "Work with various control systems, SLAM, path planning and terminal guidance.",
               "Work on reinforcement learning and RL based Sim2Real.",
               "Work with multiple high-fidelity simulators, including Gazebo and ISAAC Sim."
          ]
     },
     "2": {
          "title": "AI Engineer",
          "responsibilities": [
               "Develop and optimize real-time 3D object detection, segmentation, tracking algorithms.",
               "Work on camera calibration, stereo vision, and depth estimation.",
               "Work on model training, deployment and acceleration using CUDA/TensorRT",
               "Work with PyTorch for model training and deployment.",
               "Optimize models for edge deployment on NVIDIA Jetson and other embedded platforms.",
               "Collaborate on sensor fusion algorithms combining camera and radar data."
          ]
     },
     "3": {
          "title": "Embedded Systems Engineer",
          "responsibilities": [
               "Design and develop firmware for flight controllers and autopilot systems.",
               "Work with ARM microcontrollers and RTOS (FreeRTOS, Zephyr).",
               "Implement communication protocols: MAVLink, UART, SPI, I2C, CAN.",
               "Develop drivers for IMU, GPS, magnetometer, barometer sensors.",
               "Optimize low-level code for real-time performance and power efficiency.",
               "Design PCBs and develop hardware interfaces for embedded systems."
          ]
     },
     "4": {
          "title": "Mechanical Engineer",
          "responsibilities": [
               "Design the UAV airframe from scratch based on high-level mission and size requirements.",
               "Develop the external geometry with a focus on minimizing aerodynamic drag.",
               "Perform CFD analysis to estimate drag coefficient (Cd) and understand flow behavior.",
               "Iterate the design to reduce drag while maintaining aerodynamic stability and performance.",
               "Perform FEA to validate structural strength, stiffness, and load paths of the airframe.",
               "Balance aerodynamic efficiency with weight, manufacturability, and structural constraints."
          ]
     },
     "5": {
          "title": "Full Stack Software Engineer",
          "responsibilities": [
               "Develop ground control station (GCS) software for drone operations.",
               "Build web-based mission planning and monitoring interfaces.",
               "Work with React, TypeScript, Node.js, and modern web frameworks.",
               "Implement real-time data visualization using WebGL and mapping libraries.",
               "Develop REST APIs and WebSocket servers for telemetry streaming.",
               "Integrate with MAVLink protocol for drone communication."
          ]
     },
     "6": {
          "title": "Business Development",
          "responsibilities": [
               "Identify and engage potential clients in defense, security, and commercial drone sectors.",
               "Build strategic partnerships with government agencies, private enterprises, and research institutions.",
               "Conduct market research to identify emerging opportunities in autonomous systems and counter-UAS markets.",
               "Prepare proposals, presentations, and technical documentation for client engagements.",
               "Support fundraising efforts by engaging with investors, VCs, and defense innovation programs."
          ]
     }
}

function RoleCard({
     id,
     title,
     responsibilities,
}: {
     id: string
     title: string
     responsibilities: string[]
}) {
     const [isOpen, setIsOpen] = useState(false)

     return (
          <motion.div
               layout
               className="border border-white/10 bg-black/40 backdrop-blur-sm hover:border-blue-500/30 transition-colors group"
          >
               {/* Header Row */}
               <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 gap-4 text-left cursor-pointer"
                    aria-expanded={isOpen}
               >
                    <div className="space-y-2">
                         <div className="flex items-center gap-3">
                              <span className="font-mono text-[10px] uppercase tracking-widest text-defense-accent">
                                   {String(id).padStart(2, '0')} //
                              </span>
                         </div>
                         <h3 className="text-xl md:text-2xl font-bold font-mono uppercase group-hover:text-white transition-colors">
                              {title}
                         </h3>
                         <div className="flex gap-4 font-mono text-[10px] uppercase tracking-widest text-white">
                              <span>Bangalore</span>
                              <span>•</span>
                              <span>Full-time</span>
                         </div>
                    </div>

                    <div className="flex items-center gap-4 flex-shrink-0">
                         <span className="hidden md:inline font-mono text-xs uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">
                              {isOpen ? 'Close' : 'View Role'}
                         </span>
                         <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.25 }}
                              className="w-8 h-8 border border-white/20 flex items-center justify-center flex-shrink-0"
                         >
                              <ChevronDown className="w-4 h-4 text-white/60" />
                         </motion.div>
                    </div>
               </button>

               {/* Expanded Responsibilities */}
               <AnimatePresence initial={false}>
                    {isOpen && (
                         <motion.div
                              key="content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                         >
                              <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-white/10">
                                   <div className="pt-6 space-y-3 mb-8">
                                        <h4 className="font-mono text-xs uppercase tracking-widest text-defense-accent mb-4">
                                             What You&apos;ll Work On
                                        </h4>
                                        <ul className="space-y-3">
                                             {responsibilities.map((item, idx) => (
                                                  <li key={idx} className="flex items-start gap-3 text-neutral-300 text-sm leading-relaxed">
                                                       <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                                       {item}
                                                  </li>
                                             ))}
                                        </ul>
                                   </div>

                                   <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLScosNgKSIR6HypQcaWA6JGXlxTKaBT1-VaysAabRRitcOdVuA/viewform"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-sm font-bold uppercase tracking-widest cursor-pointer"
                                   >
                                        Apply Now <ArrowRight className="w-4 h-4" />
                                   </a>
                              </div>
                         </motion.div>
                    )}
               </AnimatePresence>
          </motion.div>
     )
}

export default function CareersPage() {
     const isMobile = useIsMobile()
     const [isMailModalOpen, setIsMailModalOpen] = useState(false)

     const handleApplyClick = (e: React.MouseEvent) => {
          e.preventDefault()
          if (isMobile) {
               window.location.href = 'mailto:careers@kshatralabs.in'
          } else {
               setIsMailModalOpen(true)
          }
     }

     return (
          <div className="relative min-h-screen bg-black text-white selection:bg-white/20 font-sans">
               <Header />

               {/* Background Grid Pattern */}
               <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

               <div className="relative z-10 pt-32 pb-24">

                    {/* 1. HERO SECTION */}
                    <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
                         <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 font-mono text-[10px] uppercase tracking-widest text-defense-accent mb-6">
                              Founding Team
                         </div>
                         <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading uppercase tracking-tighter leading-[0.9] mb-8" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                              Build the future of <br />
                              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20 [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">Autonomous Defense</span>
                         </h1>

                         <div className="grid md:grid-cols-2 gap-12 mt-12 border-t border-white/10 pt-10">
                              <p className="text-xl md:text-2xl text-neutral-300 font-medium leading-relaxed">
                                   Join a team engineering AI-native autonomous systems designed to operate in contested environments across air, land, and sea.
                              </p>
                              <div className="space-y-8">
                                   <p className="text-lg text-neutral-400 leading-relaxed font-light">
                                        We are building machines that sense, decide, and act at machine speed. We are an early-stage startup building the founding engineering team.
                                   </p>
                                   <a href="#open-roles" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-mono font-bold tracking-widest hover:bg-neutral-200 transition-colors uppercase cursor-pointer">
                                        VIEW OPEN ROLES <ArrowRight className="w-4 h-4" />
                                   </a>
                              </div>
                         </div>
                    </section>

                    {/* 2. WHY JOIN US */}
                    <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
                         <div className="mb-16 space-y-6 max-w-3xl">
                              <div className="space-y-4">
                                   <h2 className="text-3xl md:text-5xl font-bold font-mono uppercase tracking-tight">Why Work With Us</h2>
                                   <div className="h-1 w-24 bg-defense-accent"></div>
                              </div>
                              <p className="text-xl text-neutral-300 font-light leading-relaxed">
                                   We are building autonomous defense systems from the ground up — and assembling a small team of engineers capable of solving some of the hardest problems in robotics and AI.
                              </p>
                         </div>

                         <div className="grid md:grid-cols-2 gap-6">
                              <div className="p-8 border border-white/10 bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors group">
                                   <div className="text-defense-accent font-mono text-sm mb-4">01 //</div>
                                   <h3 className="text-2xl font-bold font-mono uppercase mb-3">Mission Impact</h3>
                                   <p className="text-neutral-400 leading-relaxed">Work on real-world autonomous systems designed to protect critical infrastructure and national security.</p>
                              </div>
                              <div className="p-8 border border-white/10 bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors group">
                                   <div className="text-defense-accent font-mono text-sm mb-4">02 //</div>
                                   <h3 className="text-2xl font-bold font-mono uppercase mb-3">Frontier Engineering</h3>
                                   <p className="text-neutral-400 leading-relaxed">Solve frontier engineering problems at the intersection of robotics, AI, autonomy, and aerospace.</p>
                              </div>
                              <div className="p-8 border border-white/10 bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors group">
                                   <div className="text-defense-accent font-mono text-sm mb-4">03 //</div>
                                   <h3 className="text-2xl font-bold font-mono uppercase mb-3">Build From First Principles</h3>
                                   <p className="text-neutral-400 leading-relaxed">We build systems from first principles — tightly integrating hardware, software, and onboard intelligence.</p>
                              </div>
                              <div className="p-8 border border-white/10 bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors group">
                                   <div className="text-defense-accent font-mono text-sm mb-4">04 //</div>
                                   <h3 className="text-2xl font-bold font-mono uppercase mb-3">Small Team, Massive Impact</h3>
                                   <p className="text-neutral-400 leading-relaxed">Early engineers shape the architecture, capabilities, and direction of next-generation defense platforms.</p>
                              </div>
                         </div>
                    </section>

                    {/* 3. WHAT WE WORK ON */}
                    <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
                         <div className="mb-16 space-y-4">
                              <h2 className="text-3xl md:text-5xl font-bold font-mono uppercase tracking-tight">Engineering Autonomous Defense</h2>
                              <div className="h-1 w-24 bg-red-600"></div>
                         </div>

                         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                              <div className="relative p-8 border border-white/5 bg-black overflow-hidden group">
                                   <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                   <Plane className="w-8 h-8 text-red-500 mb-6" />
                                   <h3 className="text-xl font-bold font-mono uppercase mb-3">Autonomous UAV Interceptors</h3>
                                   <p className="text-sm text-neutral-400 leading-relaxed">High-speed aerial systems designed to detect and neutralize hostile drones.</p>
                              </div>
                              <div className="relative p-8 border border-white/5 bg-black overflow-hidden group">
                                   <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                   <Cpu className="w-8 h-8 text-red-500 mb-6" />
                                   <h3 className="text-xl font-bold font-mono uppercase mb-3">Edge AI Systems</h3>
                                   <p className="text-sm text-neutral-400 leading-relaxed">Real-time perception and decision-making executed directly onboard the platform.</p>
                              </div>
                              <div className="relative p-8 border border-white/5 bg-black overflow-hidden group">
                                   <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                   <Network className="w-8 h-8 text-red-500 mb-6" />
                                   <h3 className="text-xl font-bold font-mono uppercase mb-3">Swarm Intelligence</h3>
                                   <p className="text-sm text-neutral-400 leading-relaxed">Multi-agent coordination enabling large-scale drone defense.</p>
                              </div>
                              <div className="relative p-8 border border-white/5 bg-black overflow-hidden group">
                                   <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                   <Eye className="w-8 h-8 text-red-500 mb-6" />
                                   <h3 className="text-xl font-bold font-mono uppercase mb-3">Computer Vision for Robotics</h3>
                                   <p className="text-sm text-neutral-400 leading-relaxed">High-speed vision models enabling real-time object detection and tracking.</p>
                              </div>
                         </div>
                    </section>

                    {/* 4. OPEN ROLES */}
                    <section id="open-roles" className="px-6 md:px-12 max-w-7xl mx-auto mb-32 relative">
                         {/* Underglow */}
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/5 blur-[120px] pointer-events-none"></div>

                         <div className="mb-16 space-y-4 relative z-10">
                              <h2 className="text-3xl md:text-5xl font-bold font-mono uppercase tracking-tight">Open Positions</h2>
                              <div className="h-1 w-24 bg-defense-accent"></div>
                              <p className="text-white font-mono text-sm uppercase tracking-widest">
                                   {Object.keys(JOB_DESCRIPTIONS).length} roles open · Bangalore, India · Full-time
                              </p>
                         </div>

                         <div className="space-y-4 relative z-10">
                              {Object.entries(JOB_DESCRIPTIONS).map(([id, job]) => (
                                   <RoleCard
                                        key={id}
                                        id={id}
                                        title={job.title}
                                        responsibilities={job.responsibilities}
                                   />
                              ))}
                         </div>

                         {/* Skill Set Requirements */}
                         <div className="mt-12 p-8 border border-defense-accent/20 bg-defense-accent/5 rounded-2xl relative z-10 backdrop-blur-sm">
                              <h3 className="text-xl font-bold font-mono uppercase mb-4 text-defense-accent">Who We Are Looking For</h3>
                              <p className="text-neutral-300 leading-relaxed font-light mb-4">
                                   We are looking for people with an <strong className="text-white">intermediate skill-set</strong>. Having some projects or experience under the following will help:
                              </p>
                              <div className="flex flex-wrap gap-2 font-mono text-xs text-neutral-400">
                                   {['Python', 'C++', 'ROS/ROS2', 'Gazebo', 'SolidWorks/CATIA', 'FEA (ANSYS)', 'GD&T', 'PX4/ArduPilot', 'Flight Controllers', 'Sensors & Actuators', 'Microcontrollers', 'PCBs & Schematics', 'RF Simulation Tools', 'SDR', 'Antennas', 'Link Budgets', 'Debugging', 'Control Systems', 'Data Pipelines', 'PyTorch/TensorFlow', 'APIs', 'Model Deployment', 'Benchmarking', 'Prototyping'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">{skill}</span>
                                   ))}
                              </div>
                         </div>
                    </section>

                    {/* 5. ENGINEERING CULTURE */}
                    <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
                         <div className="grid md:grid-cols-2 gap-16 border-t border-white/10 pt-16">
                              <div>
                                   <h2 className="text-3xl md:text-5xl font-bold font-mono uppercase tracking-tight mb-8">Our Engineering Culture</h2>
                                   <div className="space-y-6 text-lg text-neutral-300 leading-relaxed font-light">
                                        <p>
                                             We believe the future of defense will be autonomous, software-defined, and AI-native.
                                        </p>
                                        <p>
                                             Our team operates with a strong bias toward engineering rigor, rapid experimentation, and real-world deployment.
                                        </p>
                                   </div>
                              </div>
                              <div className="bg-neutral-900/20 p-8 border-l border-white/10">
                                   <h3 className="text-sm font-mono text-defense-accent tracking-[0.2em] uppercase mb-8">Core Principles</h3>
                                   <ul className="space-y-6 font-mono text-white text-sm md:text-base uppercase">
                                        <li className="flex items-start gap-4">
                                             <span className="text-blue-500 mt-0.5">■</span> Ship working systems, not prototypes
                                        </li>
                                        <li className="flex items-start gap-4">
                                             <span className="text-blue-500 mt-0.5">■</span> Iterate at the speed of software
                                        </li>
                                        <li className="flex items-start gap-4">
                                             <span className="text-blue-500 mt-0.5">■</span> Engineer for contested environments
                                        </li>
                                        <li className="flex items-start gap-4">
                                             <span className="text-blue-500 mt-0.5">■</span> Focus on real-world performance
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </section>

                    {/* 6. HIRING PROCESS */}
                    <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
                         <div className="mb-16 space-y-4">
                              <h2 className="text-3xl md:text-5xl font-bold font-mono uppercase tracking-tight">Hiring Process</h2>
                              <div className="h-1 w-24 bg-defense-accent"></div>
                         </div>

                         <div className="grid md:grid-cols-4 gap-6 relative">
                              {/* Connector line for desktop */}
                              <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0"></div>

                              {[
                                   { step: "1", title: "Initial Conversation", desc: "A short call to understand your experience and interests." },
                                   { step: "2", title: "Technical Evaluation", desc: "A deep dive into engineering problems relevant to the role." },
                                   { step: "3", title: "Founder Discussion", desc: "Discussion about mission alignment and long-term vision." },
                                   { step: "4", title: "Offer", desc: "Join the team building the next generation of autonomous defense systems." }
                              ].map((item) => (
                                   <div key={item.step} className="relative z-10 bg-black pt-4 md:pt-0">
                                        <div className="w-14 h-14 bg-black border border-white/20 flex items-center justify-center font-mono text-xl font-bold text-defense-accent mb-6">
                                             {item.step}
                                        </div>
                                        <h3 className="text-lg font-bold font-mono uppercase mb-3">{item.title}</h3>
                                        <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                                   </div>
                              ))}
                         </div>
                    </section>

                    {/* 7. FINAL CALL TO ACTION */}
                    <section className="px-6 md:px-12 max-w-4xl mx-auto text-center border-t border-white/10 pt-24">
                         <h2 className="text-4xl md:text-6xl font-black font-mono tracking-tighter uppercase mb-6 drop-shadow-lg">
                              Join <span className="text-blue-500">The Team</span>
                         </h2>
                         <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                              If you want to work on some of the hardest engineering problems in robotics, AI, and autonomous defense — we want to hear from you.
                         </p>

                         <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                              <button onClick={handleApplyClick} className="px-10 py-4 bg-white text-black font-mono font-bold tracking-widest hover:bg-neutral-200 transition-colors uppercase w-full sm:w-auto text-center cursor-pointer">
                                   Apply Now
                              </button>
                              <div className="flex flex-col items-center sm:items-start text-sm font-mono text-neutral-400">
                                   <button onClick={handleApplyClick} className="hover:text-white transition-colors cursor-pointer">careers@kshatralabs.in</button>
                                   <span>Bangalore, India</span>
                              </div>
                         </div>
                    </section>

               </div>

               {/* Mail Choice Modal */}
               <MailChoiceModal
                    isOpen={isMailModalOpen}
                    onClose={() => setIsMailModalOpen(false)}
                    email="careers@kshatralabs.in"
               />

               {/* Standard Footer */}
               <FooterSection />
          </div>
     )
}
