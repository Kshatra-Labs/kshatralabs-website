'use client'

import React from 'react'

interface Advantage {
     number: string;
     category: string;
     title: string;
     metric: string;
     metricLabel: string;
     desc: string;
}

const ADVANTAGES: Advantage[] = [
     {
          number: '01',
          category: 'Strategic Autonomy',
          title: '100% Built in India',
          metric: '100%',
          metricLabel: 'Indian Technology',
          desc: 'Designed, engineered, and manufactured completely within Indian laboratories and factories. We own all of our software, mechanical blueprints, and AI models—with zero reliance on foreign suppliers.'
     },
     {
          number: '02',
          category: 'Cost Efficiency',
          title: 'Lower Cost Per Intercept',
          metric: '1/10th',
          metricLabel: 'Cost of Missile Defense',
          desc: 'Traditional air defense missiles cost hundreds of thousands of dollars each—making them too expensive to waste on cheap enemy drones. HAWK is engineered at a fraction of the cost to affordably defeat large incoming drone networks.'
     },
     {
          number: '03',
          category: 'Supply Security',
          title: 'Fast & Reliable Supply Chain',
          metric: '30 Days',
          metricLabel: 'Factory Replacement',
          desc: 'Because we source our raw materials and electronics from trusted Indian manufacturing partners, we can produce and deliver replacement canisters immediately without waiting for international export approvals.'
     },
     {
          number: '04',
          category: 'Digital Control',
          title: 'Full Software & AI Ownership',
          metric: 'Full Access',
          metricLabel: 'Source Code Ownership',
          desc: 'Our neural guidance algorithms and flight software can be customized and updated continuously to defeat new enemy drone tactics without external licensing or vendor restrictions.'
     }
]

export function HawkMakeInIndia() {
     return (
          <section id="make-in-india" className="py-24 md:py-32 bg-[#000000] border-b border-neutral-900 text-white">
               <div className="max-w-7xl mx-auto px-6 md:px-12">
                    
                    {/* Top Section Header */}
                    <div className="max-w-3xl mb-20">
                         <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#cc1414] font-bold block mb-3">
                              Strategic Autonomy
                         </span>
                         <h2 
                              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6"
                              style={{ fontFamily: 'var(--font-space-grotesk)' }}
                         >
                              Sovereign Defense IP
                         </h2>
                         <p className="text-lg sm:text-lg text-neutral-300 font-light leading-relaxed">
                              Designed, built, and controlled entirely within India to ensure complete supply chain independence and absolute system ownership.
                         </p>
                    </div>

                    {/* Full-Width Horizontal Architectural Rows */}
                    <div className="border-t border-neutral-900 divide-y divide-neutral-900">
                         {ADVANTAGES.map((item) => (
                              <div 
                                   key={item.number} 
                                   className="py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-neutral-950/40 transition-colors duration-200"
                              >
                                   {/* Column 1: Pillar Number & Metric (3 Cols) */}
                                   <div className="md:col-span-3 space-y-2">
                                        <div className="font-mono text-xs text-neutral-500 font-bold tracking-widest">
                                             PILLAR {item.number}
                                        </div>
                                        <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
                                             {item.metric}
                                        </div>
                                        <div className="text-[11px] uppercase tracking-widest text-neutral-400 font-bold font-mono">
                                             {item.metricLabel}
                                        </div>
                                   </div>

                                   {/* Column 2: Category & Title (4 Cols) */}
                                   <div className="md:col-span-4 space-y-2 pt-1">
                                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#cc1414] font-bold block">
                                             {item.category}
                                        </span>
                                        <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white">
                                             {item.title}
                                        </h3>
                                   </div>

                                   {/* Column 3: Description Paragraph (5 Cols) */}
                                   <div className="md:col-span-5 pt-1">
                                        <p className="text-lg sm:text-lg text-neutral-300 leading-relaxed font-normal">
                                             {item.desc}
                                        </p>
                                   </div>
                              </div>
                         ))}
                    </div>

               </div>
          </section>
     )
}
