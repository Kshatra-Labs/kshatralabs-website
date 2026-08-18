'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { ArrowRight, ChevronUp, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

interface Hotspot {
     id: string;
     x: number;
     y: number;
     title: string;
     category: string;
     desc: string;
     specs: { label: string; value: string }[];
}

const HAWK_HOTSPOTS: Hotspot[] = [
     {
          id: 'seeker',
          x: 48,
          y: 22,
          title: 'Optical & Thermal Tracking',
          category: 'Sensor Suite',
          desc: 'A daylight camera fused with a thermal imager for day/night target tracking. The ground radar track is projected into the camera frame to cue acquisition, then onboard vision refines the lock through the terminal approach.',
          specs: [
               { label: 'Sensor Suite', value: 'Electro-Optical / Infrared (EO/IR)' },
               { label: 'Tracking Mode', value: 'Multi-Spectral, Day/Night' },
               { label: 'Cueing', value: 'Radar-Cued Acq + Onboard Vision' }
          ]
     },
     {
          id: 'compute',
          x: 52,
          y: 44,
          title: 'Onboard Autonomy Computer',
          category: 'Guidance Computer',
          desc: 'A high-performance onboard autonomy computer runs perception, tracking, and mission decision-making locally, paired with a mission-proven flight control system. Autonomy runs entirely at the edge, so the mission continues without a live GCS connection.',
          specs: [
               { label: 'Autonomy Compute', value: 'Onboard Edge-AI Module' },
               { label: 'Flight Control', value: 'Integrated Autonomy Stack' }
          ]
     },
     {
          id: 'airframe',
          x: 42,
          y: 62,
          title: 'Composite Airframe & Modular Payload Bay',
          category: 'Airframe & Variants',
          desc: 'A lightweight composite airframe built to withstand high-speed maneuvering, with a modular payload bay supporting configurable kinetic or explosive payloads. HAWK is the first single airframe engineered to fly all three roles — the anti-interceptor role is a first for a platform in its class, tuned for speeds of up to 500 km/h to run down enemy interceptors.',
          specs: [
               { label: 'Payload Bay', value: 'Modular; Kinetic or Explosive Config' },
               { label: 'Payload Capacity', value: 'Up to 700 g' },
               { label: 'Roles Supported', value: 'Interceptor / Kamikaze / Anti-Interceptor' },
               { label: 'Anti-Interceptor Speed', value: 'Up to 500 km/h' }
          ]
     },
     {
          id: 'propulsion',
          x: 55,
          y: 82,
          title: 'Quad Brushless Electric Propulsion',
          category: 'Electric Propulsion',
          desc: 'Four high-torque brushless motors, ground-launched and sized for rapid sprint acceleration to intercept fast, maneuvering aerial threats.',
          specs: [
               { label: 'Top Speed', value: '300 km/h (Reached in Under 3s)' },
               { label: 'Operational Range', value: 'Up to 7 km' },
               { label: 'Motors', value: '4x High-Torque Brushless' },
               { label: 'Operating Temperature', value: '-20°C to +60°C' }
          ]
     }
]

interface HawkHeroProps {
     onRequestBriefing: () => void;
}

export function HawkHero({ onRequestBriefing }: HawkHeroProps) {
     const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(HAWK_HOTSPOTS[0])
     const [isManualOverride, setIsManualOverride] = useState(false)
     const boxRef = useRef<HTMLDivElement>(null)

     const { scrollYProgress } = useScroll({
          target: boxRef,
          offset: ["start 75%", "end 25%"]
     })

     useMotionValueEvent(scrollYProgress, "change", (latest) => {
          if (isManualOverride) return;

          if (latest < 0.28) {
               setActiveHotspot(HAWK_HOTSPOTS[0])
          } else if (latest < 0.52) {
               setActiveHotspot(HAWK_HOTSPOTS[1])
          } else if (latest < 0.76) {
               setActiveHotspot(HAWK_HOTSPOTS[2])
          } else {
               setActiveHotspot(HAWK_HOTSPOTS[3])
          }
     })

     const handleHotspotClick = (spot: Hotspot) => {
          setIsManualOverride(true)
          if (activeHotspot?.id === spot.id) {
               setActiveHotspot(null)
          } else {
               setActiveHotspot(spot)
          }
     }

     return (
          <section className="relative pt-32 md:pt-40 pb-24 bg-[#000000] border-b border-neutral-900 text-white overflow-hidden">
               <div className="max-w-7xl mx-auto px-6 md:px-12">
                    
                    {/* Hero Top Grid: Title/Copy on Left, Tilted Flying Drone Photo on Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                         
                         {/* Left Column: Title & Action */}
                         <div className="lg:col-span-7 space-y-6">
                              <div className="flex items-center gap-3">
                                   <span className="w-2 h-2 bg-[#cc1414]" />
                                   <span className="font-mono text-[13px] uppercase tracking-[0.25em] text-neutral-400 font-semibold">
                                        World&apos;s First 3-in-1 Autonomous Aerial Interceptor
                                   </span>
                              </div>

                              <h1
                                   className="text-[64px] sm:text-[77px] lg:text-[102px] font-extrabold tracking-tight text-white uppercase leading-[0.9]"
                                   style={{ fontFamily: 'var(--font-space-grotesk)' }}
                              >
                                   HAWK
                              </h1>

                              <p className="text-[21px] sm:text-[26px] font-light text-neutral-300 max-w-2xl leading-relaxed">
                                   One airframe, three roles: Interceptor, Kamikaze, and Anti-Interceptor. Cued by ground radar and closed out by onboard optical and thermal tracking, HAWK finds, follows, and neutralizes hostile drones, engineered to keep flying through GPS jamming and denial.
                              </p>

                              <div className="pt-4 flex flex-wrap items-center gap-6">
                                   <button
                                        onClick={onRequestBriefing}
                                        style={{ clipPath: 'polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)' }}
                                        className="group px-8 py-4 bg-white text-black font-mono text-[13px] font-bold tracking-[0.2em] uppercase hover:bg-[#cc1414] hover:text-white transition-colors duration-200 flex items-center gap-3 rounded-none"
                                   >
                                        <span>Request Technical Briefing</span>
                                        <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                                   </button>

                                   <a
                                        href="#how-it-works"
                                        className="px-8 py-4 bg-transparent border border-neutral-800 text-white font-mono text-[13px] font-bold tracking-[0.2em] uppercase hover:border-neutral-500 transition-colors duration-200"
                                   >
                                        How It Works
                                   </a>
                              </div>
                         </div>

                         {/* Right Column: Tilted Drone Photo Look Like Flying */}
                         <div className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0">
                              <div className="relative w-[360px] sm:w-[440px] lg:w-[500px] h-[360px] sm:h-[440px] lg:h-[500px] flex items-center justify-center">
                                   {/* Subtle Red/Blue Speed Glow behind the flying drone */}
                                   <div className="absolute inset-0 bg-gradient-to-tr from-[#cc1414]/15 via-transparent to-[#FF0000]/15 rounded-full blur-[90px] pointer-events-none" />
                                   
                                   {/* Drone photo tilted vertically left to look like high-speed flight */}
                                   <div className="relative w-full h-full transform -rotate-[45deg] scale-110 hover:scale-115 hover:-rotate-[48deg] transition-all duration-700 ease-out flex items-center justify-center pointer-events-none sm:pointer-events-auto">
                                        <Image
                                             src="/products/hawkproduct.png"
                                             alt="HAWK Interceptor In Flight"
                                             fill
                                             sizes="(min-width: 1024px) 500px, (min-width: 640px) 440px, 360px"
                                             className="object-contain drop-shadow-[0_25px_60px_rgba(204,20,20,0.3)]"
                                             priority
                                        />
                                   </div>
                              </div>
                         </div>

                    </div>
                     {/* Clean Key Performance Indicators */}
                    <div className="mt-20 pt-12 border-t border-neutral-900 grid grid-cols-2 lg:grid-cols-4 gap-8">
                         <div>
                              <div className="text-[38px] sm:text-[51px] font-extrabold text-white tracking-tight font-mono">
                                   300 km/h
                              </div>
                              <div className="font-mono text-[17px] uppercase tracking-widest text-neutral-400 mt-2 font-semibold">
                                   Top Speed
                              </div>
                         </div>
                          <div>
                               <div className="text-[38px] sm:text-[51px] font-extrabold text-white tracking-tight font-mono">
                                    3-in-1
                               </div>
                               <div className="font-mono text-[17px] uppercase tracking-widest text-neutral-400 mt-2 font-semibold">
                                    Interceptor / Kamikaze / Anti-Interceptor
                               </div>
                          </div>
                          <div>
                               <div className="text-[38px] sm:text-[51px] font-extrabold text-white tracking-tight font-mono">
                                    1/10th
                               </div>
                               <div className="font-mono text-[17px] uppercase tracking-widest text-neutral-400 mt-2 font-semibold">
                                    Cost of Missile Defense
                               </div>
                          </div>
                         <div>
                              <div className="text-[38px] sm:text-[51px] font-extrabold text-white tracking-tight font-mono">
                                   100%
                              </div>
                              <div className="font-mono text-[17px] uppercase tracking-widest text-neutral-400 mt-2 font-semibold">
                                   Built in India
                              </div>
                         </div>
                    </div>
                    {/* Hardware Architecture Breakdown (Smooth Scroll-Driven Flow, Zero Traps) */}
                    <div className="mt-24 border-t border-neutral-900 pt-16">
                         <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                              <div>
                                   <span className="font-mono text-[13px] uppercase tracking-[0.25em] text-[#cc1414] font-semibold block mb-2">
                                        Hardware Breakdown
                                   </span>
                                   <h2 
                                        className="text-[32px] sm:text-[38px] lg:text-[51px] font-bold uppercase tracking-tight text-white"
                                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                                   >
                                        How HAWK is Built
                                   </h2>
                              </div>
                              <p className="font-mono text-[17px] text-neutral-400 uppercase tracking-widest">
                                   Inspect HAWK&apos;s main subsystems and design parameters below
                              </p>
                         </div>

                         {/* Stable outer container with fixed min-height ensures zero layout shifts or jitter */}
                         <div ref={boxRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border border-neutral-900 bg-[#050505] p-6 md:p-12 min-h-[580px] shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
                              {/* Left Inspection Diagram (100% Clean Image Panel, Zero Overlays) */}
                              <div className="lg:col-span-6 relative h-[480px] sm:h-[560px] w-full bg-black border border-neutral-900 flex items-center justify-center overflow-hidden">
                                   {/* Blueprint-style grid background lines */}
                                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
                                   
                                   <Image
                                        src="/products/hawkproduct.png"
                                        alt="HAWK Hardware System"
                                        fill
                                        sizes="(min-width: 1024px) 700px, 100vw"
                                        className="object-contain select-none pointer-events-none p-8 opacity-75"
                                        priority
                                   />
                              </div>

                              {/* Right Details Accordion */}
                              <div className="lg:col-span-6 flex flex-col justify-start space-y-4">
                                   <div className="font-mono text-[13px] uppercase tracking-widest text-[#cc1414] font-bold mb-4 pb-2 border-b border-neutral-900 flex items-center justify-between">
                                        <span>System Assemblies</span>
                                        <span className="text-[11px] text-neutral-500 font-bold tracking-normal">Scroll or click to inspect</span>
                                   </div>

                                   <div className="space-y-2">
                                        {HAWK_HOTSPOTS.map((spot, index) => {
                                             const isOpen = activeHotspot?.id === spot.id;

                                             return (
                                                  <div 
                                                       key={spot.id}
                                                       className={`border-b border-neutral-900 pb-4 transition-all duration-200 ${
                                                            isOpen ? 'text-white border-neutral-800' : 'text-neutral-500 hover:text-neutral-300'
                                                       }`}
                                                  >
                                                       <button
                                                            onClick={() => handleHotspotClick(spot)}
                                                            className="w-full flex items-center justify-between py-3 text-left font-mono group cursor-pointer"
                                                       >
                                                            <span className={`text-[15px] font-bold uppercase tracking-wider transition-colors duration-200 ${
                                                                 isOpen ? 'text-white' : 'text-neutral-400 group-hover:text-white'
                                                            }`}>
                                                                 0{index + 1}. {spot.category}
                                                            </span>
                                                            <div className={`w-8 h-8 flex items-center justify-center border transition-all duration-200 ${
                                                                 isOpen 
                                                                      ? 'bg-[#cc1414] border-[#cc1414] text-white shadow-[0_0_15px_rgba(204,20,20,0.4)]' 
                                                                      : 'bg-neutral-900/80 border-neutral-800 text-neutral-400 group-hover:border-neutral-600 group-hover:text-white'
                                                            }`}>
                                                                 {isOpen ? (
                                                                      <ChevronUp className="w-5 h-5 stroke-[2.5]" />
                                                                 ) : (
                                                                      <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                                                                 )}
                                                            </div>
                                                       </button>

                                                       <AnimatePresence initial={false}>
                                                            {isOpen && (
                                                                 <motion.div
                                                                      key="content"
                                                                      initial={{ height: 0, opacity: 0 }}
                                                                      animate={{ height: 'auto', opacity: 1 }}
                                                                      exit={{ height: 0, opacity: 0 }}
                                                                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                                                      className="overflow-hidden"
                                                                 >
                                                                      <div className="pt-3 pb-2 space-y-4">
                                                                           <h4 
                                                                                className="text-[21px] font-bold uppercase tracking-tight text-white"
                                                                                style={{ fontFamily: 'var(--font-space-grotesk)' }}
                                                                           >
                                                                                {spot.title}
                                                                           </h4>
                                                                           <p className="text-[19px] text-neutral-300 leading-relaxed font-light">
                                                                                {spot.desc}
                                                                           </p>

                                                                           {spot.specs && spot.specs.length > 0 && (
                                                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-4 border-t border-neutral-900 font-mono">
                                                                                     {spot.specs.map((spec, idx) => (
                                                                                          <div key={idx}>
                                                                                               <div className="text-neutral-500 uppercase text-[12px] tracking-wider font-bold mb-1">{spec.label}</div>
                                                                                               <div className="font-bold text-white text-[17px] leading-snug">{spec.value}</div>
                                                                                          </div>
                                                                                     ))}
                                                                                </div>
                                                                           )}
                                                                      </div>
                                                                 </motion.div>
                                                            )}
                                                       </AnimatePresence>
                                                  </div>
                                             )
                                        })}
                                   </div>
                              </div>
                         </div>
                    </div>

               </div>
          </section>
     )
}
