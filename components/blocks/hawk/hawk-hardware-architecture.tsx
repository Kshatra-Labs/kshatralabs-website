'use client'

import React from 'react'

interface HardwareSystem {
     id: string;
     code: string;
     title: string;
     subtitle: string;
     desc: string;
     keyFeatures: string[];
     technicalSpecs: { name: string; val: string }[];
}

const HARDWARE_SYSTEMS: HardwareSystem[] = [
     {
          id: 'seeker',
          code: '01',
          title: 'Guidance Camera & AI',
          subtitle: 'AI-Powered Silhouette Tracking',
          desc: 'The front of the interceptor houses a high-speed tracking camera connected directly to our onboard AI. By analyzing the live video feed instantly, HAWK locks onto and tracks moving drone targets using silhouette recognition.',
          keyFeatures: [
               'High-speed global shutter camera optimized for rapid motion tracking',
               'Neural networks automatically identify and track target silhouettes in mid-air',
               'Completely immune to radio frequency jamming and electronic interference'
          ],
          technicalSpecs: [
               { name: 'Camera View Angle', val: '120° Wide Tracking' },
               { name: 'Optics System', val: 'High-Speed Global Shutter' },
               { name: 'Lock-On Speed', val: '< 5 milliseconds' },
               { name: 'Tracking Mode', val: 'AI Silhouette Lock' }
          ]
     },
     {
          id: 'compute',
          code: '02',
          title: 'Onboard AI Computer',
          subtitle: 'Instant In-Flight Steering',
          desc: 'Instead of relying on fragile radio connections to a ground station, HAWK carries its own AI computer. It calculates speed, direction, and interception angles rapidly per second directly inside the interceptor.',
          keyFeatures: [
               '15.6 TOPS AI processor operating with minimal power and heat',
               'Steers using visual landmarks and motion tracking when GPS is unavailable',
               'Connects with nearby HAWK units so multiple interceptors can target different drones in a network'
          ],
          technicalSpecs: [
               { name: 'Processing Capacity', val: '15.6 TOPS AI Core' },
               { name: 'Primary Guidance', val: 'Vision & Motion Sensors' },
               { name: 'Signal Encryption', val: 'AES-256 Secure Link' }
          ]
     },
     {
          id: 'airframe',
          code: '03',
          title: 'Carbon Composite Frame',
          subtitle: 'Built for High-Speed Impact',
          desc: 'Constructed from lightweight carbon fiber and kevlar, the HAWK body is exceptionally strong. Its rigid quadcopter frame and high-pitch rotors allow it to make sharp maneuvering turns at high speeds to catch evading drones.',
          keyFeatures: [
               'Reinforced frame engineered to snap enemy wings and rotors upon impact',
               'Shaped to reflect very little radar so enemy sensors get little warning',
               'Built entirely in Indian factories using standardized, modular components'
          ],
          technicalSpecs: [
               { name: 'Maneuver Envelope', val: 'High-Agility Vectoring' },
               { name: 'Body Dimensions', val: '1,420 mm x 680 mm' },
               { name: 'Neutralization Type', val: 'Direct Kinetic Impact' }
          ]
     },
     {
          id: 'canister',
          code: '04',
          title: 'All-Weather Canister',
          subtitle: 'Ready to Fire 24/7',
          desc: 'HAWK ships, stores, and launches inside a rugged, weather-sealed container. It can sit unattended at border posts, rooftops, or ship decks for months while automatically charging its internal battery and checking system health.',
          keyFeatures: [
               'Sealed against heavy rain, desert sandstorms (-30°C to +55°C), and ocean salt fog',
               'Launches straight up, allowing the interceptor to immediately vector toward any threat in the sky',
               'Plugs directly into standard command computers or tactical armored vehicles'
          ],
          technicalSpecs: [
               { name: 'Container Size', val: '1.6m x 0.4m x 0.4m' },
               { name: 'Field Standby Time', val: '180 Days Continuous' },
               { name: 'Launch Reaction Time', val: '< 2.0s from alert' },
               { name: 'Storage Shelf Life', val: '10+ Years Factory Sealed' }
          ]
     }
]

export function HawkHardwareArchitecture() {
     return (
          <section className="py-24 md:py-32 bg-[#000000] border-b border-neutral-900 text-white">
               <div className="max-w-7xl mx-auto px-6 md:px-12">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-neutral-800">
                         <div>
                              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#cc1414] font-semibold block mb-2">
                                   Engineering Details
                              </span>
                              <h2 
                                   className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white"
                                   style={{ fontFamily: 'var(--font-space-grotesk)' }}
                              >
                                   Inside the Hardware
                              </h2>
                         </div>
                         <p className="max-w-md text-lg text-neutral-400 font-light leading-relaxed">
                              Every part of HAWK is engineered to handle high-speed flight forces and track targets reliably without external help.
                         </p>
                    </div>

                    {/* 2x2 Hardware Systems Grid - All Visible at Once */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                         {HARDWARE_SYSTEMS.map((system) => (
                              <div 
                                   key={system.id} 
                                   className="border border-neutral-900 bg-[#050505] p-6 md:p-8 flex flex-col justify-between space-y-8 hover:border-neutral-800 transition-colors duration-200"
                              >
                                   {/* Top Section: Title & Description */}
                                   <div className="space-y-4">
                                        <div className="flex items-center justify-between pb-4 border-b border-neutral-900">
                                             <div>
                                                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#cc1414] font-bold block mb-1">
                                                       System Subassembly 0{system.code}
                                                  </span>
                                                  <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white">
                                                       {system.title}
                                                  </h3>
                                             </div>
                                             <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400 font-mono bg-neutral-950 px-3 py-1.5 border border-neutral-800">
                                                  {system.subtitle}
                                             </span>
                                        </div>

                                        <p className="text-lg text-neutral-300 leading-relaxed pt-2 font-normal">
                                             {system.desc}
                                        </p>

                                        {/* Key Features List */}
                                        <div className="space-y-2.5 pt-2">
                                             {system.keyFeatures.map((feat, idx) => (
                                                  <div key={idx} className="flex items-start gap-3">
                                                       <span className="font-mono text-xs text-[#cc1414] font-bold mt-0.5">•</span>
                                                       <span className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">{feat}</span>
                                                  </div>
                                             ))}
                                        </div>
                                   </div>

                                   {/* Bottom Section: Specifications Table */}
                                   <div className="pt-4 border-t border-neutral-900">
                                        <div className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 font-bold mb-3">
                                             Technical Specifications
                                        </div>
                                        <div className="border border-neutral-900 divide-y divide-neutral-900 bg-black font-mono">
                                             {system.technicalSpecs.map((spec, idx) => (
                                                  <div key={idx} className="p-3.5 flex items-center justify-between text-base sm:text-lg">
                                                       <span className="uppercase tracking-wider text-neutral-400 font-medium">{spec.name}</span>
                                                       <span className="font-bold text-white tracking-tight text-right ml-4">{spec.val}</span>
                                                  </div>
                                             ))}
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>

               </div>
          </section>
     )
}
