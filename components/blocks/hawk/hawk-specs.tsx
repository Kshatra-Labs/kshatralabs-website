'use client'

import React, { useState } from 'react'

interface SpecGroup {
     id: string;
     title: string;
     specs: { label: string; value: string; unit?: string; note?: string }[];
}

const SPEC_GROUPS: SpecGroup[] = [
     {
          id: 'kinetics',
          title: 'Flight Performance',
          specs: [
               { label: 'Maximum Speed', value: '300+', unit: 'kmph', note: 'High-torque brushless motors and lightweight carbon props' },
               { label: 'Acceleration Rate', value: '1.8', unit: 'Seconds to Top Speed', note: 'Instant throttle response from vertical canister launch' },
               { label: 'Maximum Altitude', value: '4,500', unit: 'Meters Above Sea Level', note: 'Capable of altitude stability in mountain passes and high-altitude warfare' },
               { label: 'Launch Reaction Time', value: '< 0.5', unit: 'Seconds from Command', note: 'Instant vertical takeoff upon automated perimeter radar cueing' },
               { label: 'Swarm Interception', value: '32+', unit: 'Simultaneous Targets', note: 'Network-coordinated multi-interceptor vectoring against dense drone swarms' },
               { label: 'Defense Cost Ratio', value: '1/10th', unit: 'Cost of Missile Defense', note: 'Asymmetric economic advantage against low-cost loitering munitions and FPVs' }
          ]
     },
     {
          id: 'seeker',
          title: 'Sensors & AI Guidance',
          specs: [
               { label: 'Daylight Camera Sensor', value: '4K Ultra-HD', unit: '60 FPS Live Stream', note: 'Wide tracking angle with visual motion tracking' },
               { label: 'Optics System', value: 'Global Shutter', unit: 'High-Speed Tracking', note: 'Optimized for rapid motion tracking and silhouette detection' },
               { label: 'Onboard AI Processor', value: '15.6', unit: 'TOPS AI Core', note: 'Runs all target tracking software locally inside interceptor' },
               { label: 'Target Lock-On Speed', value: '< 5', unit: 'Milliseconds', note: 'Real-time AI recognition trained on millions of flight frames' },
               { label: 'Jamming Protection', value: '100%', unit: 'Immune to Jamming', note: 'Requires zero GPS or radio signals during target approach' },
               { label: 'Steering Update Rate', value: '1,000', unit: 'Updates per Second', note: 'Adjusts motor speeds and steering vectors instantly' }
          ]
     },
     {
          id: 'airframe',
          title: 'Airframe & Configurations',
          specs: [
               { label: 'Available Variants', value: 'Kinetic & Proximity', unit: '2 Mission Variants', note: 'Direct kinetic hit-to-kill or modular proximity neutralization' },
               { label: 'Interceptor Width', value: '1,420', unit: 'Millimeters', note: 'Compact frame size designed for canister pods' },
               { label: 'Wingspan (Deployed)', value: '680', unit: 'Millimeters', note: 'Aerodynamic carbon structure optimized for fast turns' },
               { label: 'Total Launch Weight', value: '4.8', unit: 'Kilograms', note: 'Lightweight carbon composite frame including battery' },
               { label: 'Optional Payload', value: '300-700', unit: 'Grams Capacity', note: 'Modular attachment capacity for tactical packages and sensors' },
               { label: 'Body Material', value: 'Carbon Composite', unit: 'Reinforced Structure', note: 'High strength-to-weight ratio with low radar visibility' },
               { label: 'Radar Cross Section', value: '< 0.01', unit: 'Square Meters', note: 'Low-profile front and side radar reflection' },
               { label: 'Neutralization Method', value: 'Kinetic or Proximity', unit: 'Modular Intercept', note: 'Direct physical collision or proximity-triggered neutralization' }
          ]
     },
     {
          id: 'infrastructure',
          title: 'Launch System',
          specs: [
               { label: 'Container Size', value: '1.6 x 0.4 x 0.4', unit: 'Meters', note: 'Weather-proof, sealed storage and launch tube' },
               { label: 'Field Standby Life', value: '180', unit: 'Days Continuous', note: 'Includes automatic battery charging and daily self-checks' },
               { label: 'Battery Chemistry', value: 'High-Discharge LiPo', unit: 'Solid-State Battery', note: 'Safe, high-energy-density cell architecture' },
               { label: 'Operating Temperature', value: '-30°C to +55°C', unit: 'Military Certified', note: 'Handles extreme desert sandstorms, monsoon rain, and freezing cold' },
               { label: 'Command Network', value: 'Standard Ethernet', unit: 'Open Network Link', note: 'Connects directly to existing radar and command post computers' },
               { label: 'Multi-Launcher Pods', value: 'Up to 64 Units', unit: 'Network Coordinated', note: 'Connects multiple pods together to defeat large drone swarms' }
          ]
     }
]

export function HawkSpecs() {
     const [activeTab, setActiveTab] = useState<string>('kinetics')
     const currentGroup = SPEC_GROUPS.find(g => g.id === activeTab) || SPEC_GROUPS[0]

     return (
          <section id="specifications" className="py-24 md:py-32 bg-[#000000] border-b border-neutral-900 text-white">
               <div className="max-w-7xl mx-auto px-6 md:px-12">
                    
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-neutral-800">
                         <div>
                              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#cc1414] font-semibold block mb-2">
                                   Technical Data Sheet
                              </span>
                              <h2 
                                   className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white"
                                   style={{ fontFamily: 'var(--font-space-grotesk)' }}
                              >
                                   Technical Specifications
                              </h2>
                         </div>
                         <p className="max-w-md text-base text-neutral-300 font-light leading-relaxed">
                              Verified mechanical, aerodynamic, and compute parameters for the HAWK autonomous drone interceptor.
                         </p>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="flex flex-wrap border-b border-neutral-800 mb-12">
                         {SPEC_GROUPS.map((group, index) => {
                              const isSelected = activeTab === group.id;

                              return (
                                   <button
                                        key={group.id}
                                        onClick={() => setActiveTab(group.id)}
                                        className={`px-8 py-5 text-left font-mono text-xs uppercase tracking-widest transition-colors relative ${
                                             isSelected ? 'text-white font-bold bg-neutral-900/60' : 'text-neutral-500 hover:text-white'
                                        }`}
                                   >
                                        <span className="text-neutral-600 mr-2">0{index + 1}.</span>
                                        {group.title}
                                        {isSelected && (
                                             <span className="absolute bottom-0 inset-x-0 h-[2px] bg-[#cc1414]" />
                                        )}
                                   </button>
                              )
                         })}
                    </div>

                    {/* Specifications Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                         {currentGroup.specs.map((spec, idx) => (
                              <div 
                                   key={idx}
                                   className="p-5 border border-neutral-900 bg-[#050505] flex flex-col justify-between hover:border-neutral-800 transition-colors duration-200"
                              >
                                   <div>
                                        <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-bold mb-1">
                                             {spec.label}
                                        </div>
                                        <p className="text-xs text-neutral-300 font-light leading-relaxed mb-4">
                                             {spec.note}
                                        </p>
                                   </div>
                                   <div className="flex items-baseline gap-2 mt-auto pt-3 border-t border-neutral-900/50">
                                        <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-mono">
                                             {spec.value}
                                        </span>
                                        {spec.unit && (
                                             <span className="font-mono text-[9px] uppercase tracking-widest text-[#cc1414] font-bold">
                                                  / {spec.unit}
                                             </span>
                                        )}
                                   </div>
                              </div>
                         ))}
                    </div>

               </div>
          </section>
     )
}
