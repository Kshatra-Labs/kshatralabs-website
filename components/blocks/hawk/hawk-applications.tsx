'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'

interface Application {
     id: string;
     number: string;
     title: string;
     subtitle: string;
     desc: string;
     capabilities: string[];
}

const APPLICATIONS: Application[] = [
     {
          id: 'perimeter',
          number: '01',
          title: 'Border & Forward Bases',
          subtitle: 'Military Camp & Airstrip Protection',
          desc: 'Protects forward military camps, ammunition stores, and landing strips from hostile drone networks and incoming loitering weapons.',
          capabilities: [
               'Easy to deploy along mountain borders or remote desert camps',
               'Automatically tracks and prioritizes up to 32 incoming drones at once',
               'Can operate automatically without operator delay during surprise attacks'
          ]
     },
     {
          id: 'naval',
          number: '02',
          title: 'Naval & Ship Protection',
          subtitle: 'Warship & Offshore Deck Defense',
          desc: 'Mounted on ship decks or integrated into launch cells to protect warships, patrol boats, and offshore platforms from low-flying sea drones.',
          capabilities: [
               'Weather-sealed containers built to withstand salt fog and ocean storms',
               'Compensates for wave movement and ship roll during vertical launch',
               'Connects directly to shipboard radars and fire control systems'
          ]
     },
     {
          id: 'infrastructure',
          number: '03',
          title: 'Airports, Refineries & Power Plants',
          subtitle: 'Critical Infrastructure Protection',
          desc: 'Shields high-value national infrastructure such as airports, oil refineries, and power stations from drone sabotage.',
          capabilities: [
               'Collides directly with threats instead of exploding, preventing blast damage over sensitive facilities',
               'Ensures intercepted debris falls safely within designated perimeter zones',
               'Stays on continuous 24/7 standby while running automatic self-checks'
          ]
     },
     {
          id: 'mobile',
          number: '04',
          title: 'Armored Convoy Escort',
          subtitle: 'Vehicle Column Defense',
          desc: 'Compact launch containers mounted on tactical 4x4 trucks or armored vehicles to protect moving troop columns and supply convoys.',
          capabilities: [
               'Launches straight up while the vehicle is driving at high speed',
               'Connects multiple convoy vehicles together so they share radar tracking',
               'Plugs into vehicle radar and radio detection antennas'
          ]
     }
]

export function HawkApplications() {
     return (
          <section id="applications" className="py-24 md:py-32 bg-[#000000] border-b border-neutral-900 text-white">
               <div className="max-w-7xl mx-auto px-6 md:px-12">
                    
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-neutral-800">
                         <div>
                              <span className="font-mono text-[13px] uppercase tracking-[0.25em] text-[#cc1414] font-semibold block mb-2">
                                   Where HAWK Is Deployed
                              </span>
                              <h2 
                                   className="text-[38px] sm:text-[51px] lg:text-[64px] font-extrabold uppercase tracking-tight text-white"
                                   style={{ fontFamily: 'var(--font-space-grotesk)' }}
                              >
                                   Defense Applications
                              </h2>
                         </div>
                         <p className="max-w-md text-[19px] text-neutral-300 font-light leading-relaxed">
                              Whether protecting remote border camps, warship decks, or critical power plants, HAWK provides reliable 24/7 drone defense across every operational environment.
                         </p>
                    </div>

                    {/* 2x2 All-Visible Deployment Grid (No Tabs or Hidden Accordions) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {APPLICATIONS.map((app) => (
                              <div 
                                   key={app.id} 
                                   className="border border-neutral-900 bg-[#050505] p-8 sm:p-10 flex flex-col justify-between space-y-8 hover:border-neutral-800 transition-all duration-200"
                              >
                                   {/* Card Header & Description */}
                                   <div className="space-y-6">
                                        <div className="flex items-center justify-between pb-4 border-b border-neutral-900 font-mono text-[13px]">
                                             <span className="text-[#cc1414] font-bold uppercase tracking-widest">
                                                  Application 0{app.number}
                                             </span>
                                             <span className="text-neutral-400 font-medium uppercase tracking-wider">
                                                  {app.subtitle}
                                             </span>
                                        </div>

                                        <div>
                                             <h3 
                                                  className="text-[26px] sm:text-[32px] font-extrabold uppercase tracking-tight text-white mb-3"
                                                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                                             >
                                                  {app.title}
                                             </h3>
                                             <p className="text-[19px] sm:text-[19px] text-neutral-300 font-light leading-relaxed">
                                                  {app.desc}
                                             </p>
                                        </div>

                                        {/* Key Benefits */}
                                        <div className="space-y-3 pt-2">
                                             <div className="font-mono text-[13px] uppercase tracking-widest text-neutral-500 font-bold mb-2">
                                                  Operational Advantages
                                             </div>
                                             {app.capabilities.map((cap, idx) => (
                                                  <div key={idx} className="flex items-start gap-3">
                                                       <span className="font-mono text-[13px] text-[#cc1414] font-bold mt-0.5">•</span>
                                                       <span className="text-[17px] sm:text-[19px] text-neutral-300 font-light leading-relaxed">
                                                            {cap}
                                                       </span>
                                                  </div>
                                             ))}
                                        </div>
                                   </div>

                                   {/* Card Footer */}
                                   <div className="pt-6 border-t border-neutral-900 flex items-center justify-between font-mono text-[13px]">
                                        <span className="text-neutral-500 uppercase tracking-widest">
                                             Status: <strong className="text-white font-semibold">Active Production</strong>
                                        </span>
                                        <a
                                             href="/contact-us"
                                             className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-white hover:text-[#cc1414] transition-colors"
                                        >
                                             <span>Inquire</span>
                                             <ArrowRight className="w-3.5 h-3.5" />
                                        </a>
                                   </div>
                              </div>
                         ))}
                    </div>

               </div>
          </section>
     )
}
