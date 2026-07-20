'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

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
          title: 'Guidance Camera & AI',
          category: 'Sensor Suite',
          desc: 'High-definition tracking camera connected to onboard neural networks. Processes live video directly on the interceptor to lock onto target silhouettes and track them automatically.',
          specs: [
               { label: 'Target Lock Speed', value: '< 5 milliseconds' },
               { label: 'Field of View', value: '120° Wide Tracking' },
               { label: 'Sensors', value: 'High-Resolution Daylight Camera' }
          ]
     },
     {
          id: 'compute',
          x: 52,
          y: 44,
          title: 'Onboard AI Flight Computer',
          category: 'Guidance Computer',
          desc: 'Runs our neural guidance software locally inside the interceptor. Calculates flight path adjustments 1,000 times per second using visual tracking so it never loses lock, even if GPS or radio signals are jammed.',
          specs: []
     },
     {
          id: 'airframe',
          x: 42,
          y: 62,
          title: 'Carbon Composite Frame & Modular Bay',
          category: 'Airframe & Variants',
          desc: 'Lightweight, ultra-strong carbon fiber body built to withstand sharp turns at high speed. Available in two distinct operational variants: Direct Kinetic Hit-to-Kill and Proximity Airburst.',
          specs: [
               { label: 'Available Variants', value: 'Kinetic Hit-to-Kill & Proximity Airburst' },
               { label: 'Impact / Fuse Type', value: 'Direct Body Collision or Proximity Sensor' },
               { label: 'Total Weight', value: '4.8 kg (Operational)' }
          ]
     },
     {
          id: 'propulsion',
          x: 55,
          y: 82,
          title: 'High-RPM Brushless Motors',
          category: 'Electric Propulsion',
          desc: 'Custom high-RPM brushless electric motors and carbon fiber propellers. Accelerates the interceptor instantly to its top speed to catch fast-moving loitering weapons and enemy drones.',
          specs: [
               { label: 'Top Speed', value: '300+ kmph' },
               { label: 'Acceleration', value: 'Reaches top speed in 1.8 seconds' },
               { label: 'Power Source', value: 'High-Discharge Flight Battery' }
          ]
     }
]

interface HawkHeroProps {
     onRequestBriefing: () => void;
}

export function HawkHero({ onRequestBriefing }: HawkHeroProps) {
     const [activeHotspot, setActiveHotspot] = useState<Hotspot>(HAWK_HOTSPOTS[0])

     return (
          <section className="relative pt-32 md:pt-40 pb-24 bg-[#000000] border-b border-neutral-900 text-white overflow-hidden">
               <div className="max-w-7xl mx-auto px-6 md:px-12">
                    
                    {/* Hero Top Grid: Title/Copy on Left, Tilted Flying Drone Photo on Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                         
                         {/* Left Column: Title & Action */}
                         <div className="lg:col-span-7 space-y-6">
                              <div className="flex items-center gap-3">
                                   <span className="w-2 h-2 bg-[#cc1414]" />
                                   <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold">
                                        High-Speed Drone Interceptor
                                   </span>
                              </div>

                              <h1 
                                   className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white uppercase leading-[0.9]"
                                   style={{ fontFamily: 'var(--font-space-grotesk)' }}
                              >
                                   HAWK
                              </h1>

                              <p className="text-xl sm:text-2xl font-light text-neutral-300 max-w-2xl leading-relaxed">
                                   Fast, reliable protection against hostile drones and incoming swarms. Powered by onboard AI vision that tracks and neutralizes threats without needing GPS.
                              </p>

                              <div className="pt-4 flex flex-wrap items-center gap-6">
                                   <button
                                        onClick={onRequestBriefing}
                                        className="group px-8 py-4 bg-white text-black font-mono text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#cc1414] hover:text-white transition-colors duration-200 flex items-center gap-3"
                                   >
                                        <span>Request Technical Briefing</span>
                                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                                   </button>

                                   <a
                                        href="#specifications"
                                        className="px-8 py-4 bg-transparent border border-neutral-800 text-white font-mono text-xs font-bold tracking-[0.2em] uppercase hover:border-neutral-500 transition-colors duration-200"
                                   >
                                        Specifications
                                   </a>
                              </div>
                         </div>

                         {/* Right Column: Tilted Drone Photo Look Like Flying */}
                         <div className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0">
                              <div className="relative w-[360px] sm:w-[440px] lg:w-[500px] h-[360px] sm:h-[440px] lg:h-[500px] flex items-center justify-center">
                                   {/* Subtle Red/Blue Speed Glow behind the flying drone */}
                                   <div className="absolute inset-0 bg-gradient-to-tr from-[#cc1414]/15 via-transparent to-[#2563EB]/15 rounded-full blur-[90px] pointer-events-none" />
                                   
                                   {/* Drone photo tilted vertically left to look like high-speed flight */}
                                   <div className="relative w-full h-full transform -rotate-[45deg] scale-110 hover:scale-115 hover:-rotate-[48deg] transition-all duration-700 ease-out flex items-center justify-center pointer-events-none sm:pointer-events-auto">
                                        <Image
                                             src="/products/hawkproduct.png"
                                             alt="HAWK Interceptor In Flight"
                                             fill
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
                              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
                                   300+ kmph
                              </div>
                              <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mt-2 font-semibold">
                                   Maximum Flight Speed
                              </div>
                         </div>
                          <div>
                               <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
                                    &lt; 5 ms
                               </div>
                               <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mt-2 font-semibold">
                                    Target Lock Speed
                               </div>
                          </div>
                          <div>
                               <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
                                    1/10th
                               </div>
                               <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mt-2 font-semibold">
                                    Cost of Missile Defense
                               </div>
                          </div>
                         <div>
                              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
                                   100%
                              </div>
                              <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mt-2 font-semibold">
                                   Built in India
                              </div>
                         </div>
                    </div>
                    {/* Hardware Architecture Breakdown (Accordion Style, Zero Overlays) */}
                    <div className="mt-24 border-t border-neutral-900 pt-16">
                         <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                              <div>
                                   <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#cc1414] font-semibold block mb-2">
                                        Hardware Breakdown
                                   </span>
                                   <h2 
                                        className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white"
                                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                                   >
                                        How HAWK is Built
                                   </h2>
                              </div>
                              <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                                   Inspect HAWK&apos;s main subsystems and design parameters below
                              </p>
                         </div>

                         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border border-neutral-900 bg-[#050505] p-6 md:p-12">
                              {/* Left Inspection Diagram (100% Clean Image Panel, Zero Overlays) */}
                              <div className="lg:col-span-7 relative h-[500px] sm:h-[600px] w-full bg-black border border-neutral-900 flex items-center justify-center overflow-hidden">
                                   {/* Blueprint-style grid background lines */}
                                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
                                   
                                   <Image
                                        src="/products/hawkproduct.png"
                                        alt="HAWK Hardware System"
                                        fill
                                        className="object-contain select-none pointer-events-none p-8 opacity-75"
                                   />
                              </div>

                              {/* Right Details Accordion (No floating overlays, pure premium typography) */}
                              <div className="lg:col-span-5 flex flex-col justify-start space-y-4">
                                   <div className="font-mono text-xs uppercase tracking-widest text-[#cc1414] font-bold mb-4 pb-2 border-b border-neutral-900">
                                        System Assemblies
                                   </div>

                                   <div className="space-y-2">
                                        {HAWK_HOTSPOTS.map((spot, index) => {
                                             const isOpen = activeHotspot.id === spot.id;

                                             return (
                                                  <div 
                                                       key={spot.id} 
                                                       className={`border-b border-neutral-900 pb-4 transition-all duration-200 ${
                                                            isOpen ? 'text-white border-neutral-800' : 'text-neutral-500 hover:text-neutral-300'
                                                       }`}
                                                  >
                                                       <button
                                                            onClick={() => setActiveHotspot(spot)}
                                                            className="w-full flex items-center justify-between py-3 text-left font-mono"
                                                       >
                                                            <span className="text-sm font-bold uppercase tracking-wider">
                                                                 0{index + 1}. {spot.category}
                                                            </span>
                                                            <span className={`text-xs transition-transform duration-300 ${isOpen ? 'rotate-45 text-[#cc1414]' : ''}`}>
                                                                 {isOpen ? '—' : '+'}
                                                            </span>
                                                       </button>

                                                       {isOpen && (
                                                            <div className="mt-3 space-y-4">
                                                                 <h4 
                                                                      className="text-xl font-bold uppercase tracking-tight text-white"
                                                                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                                                                 >
                                                                      {spot.title}
                                                                 </h4>
                                                                 <p className="text-sm text-neutral-300 leading-relaxed font-light">
                                                                      {spot.desc}
                                                                 </p>

                                                                 {spot.specs && spot.specs.length > 0 && (
                                                                      <div className="space-y-2.5 pt-4 border-t border-neutral-900 font-mono text-[11px]">
                                                                           {spot.specs.map((spec, idx) => (
                                                                                <div key={idx} className="flex items-center justify-between">
                                                                                     <span className="text-neutral-500 uppercase">{spec.label}</span>
                                                                                     <span className="font-bold text-white">{spec.value}</span>
                                                                                </div>
                                                                           ))}
                                                                      </div>
                                                                 )}
                                                            </div>
                                                       )}
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
