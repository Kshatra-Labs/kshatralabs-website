'use client'

import React from 'react'
import Image from 'next/image'

const partners = [
     { name: 'NVIDIA', logo: '/partners/nvidia-og-image-white-bg-1200x630.jpg' },
     { name: 'IIT HYDERABAD', logo: '/partners/IIT_Hyderabad_Insignia.svg.png' },
     { name: 'GUSEC', logo: '/partners/GUSEC-Board-Meeting-20th-SEP-2025.png' },
     { name: 'iTIC Incubator — IIT Hyderabad', logo: '/partners/images.png' },
]

export default function Partners() {
     return (
          <section className="py-14 relative bg-black border-y border-white/[0.06] overflow-hidden">

               {/* Header */}
               <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                    <h2 className="text-xl md:text-2xl font-bold font-mono uppercase tracking-widest text-white/80">
                         Partners & Supporters
                    </h2>
               </div>

               {/* Rolling Band */}
               <div className="relative overflow-hidden">
                    {/* Fade edges */}
                    <div className="absolute left-0 inset-y-0 w-32 md:w-48 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
                    <div className="absolute right-0 inset-y-0 w-32 md:w-48 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

                    {/* Outer wrapper — pauses on hover */}
                    <div className="partners-track-wrapper">
                         {/*
                              Render 4 sets: sets 1+2 fill the visible band,
                              sets 3+4 sit just off-screen and are preloaded.
                              Animation runs 0 → -50% (= 2 sets), then snaps back invisibly.
                         */}
                         <div className="partners-track">
                              {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                                   <div
                                        key={index}
                                        className="group flex flex-col items-center justify-center shrink-0 px-10 gap-3"
                                        style={{ width: 240 }}
                                   >
                                        {/* Logo Badge */}
                                        <div className="w-[140px] h-[56px] flex items-center justify-center bg-white rounded-sm px-3 py-2 shadow-md transition-all duration-300 group-hover:shadow-white/20 group-hover:shadow-lg group-hover:scale-105">
                                             <Image
                                                  src={partner.logo}
                                                  alt={partner.name}
                                                  width={130}
                                                  height={48}
                                                  className="max-h-full w-auto object-contain"
                                                  draggable={false}
                                                  priority
                                                  loading="eager"
                                             />
                                        </div>

                                        {/* Name */}
                                        <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-[0.25em] group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                                             {partner.name}
                                        </span>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>

               <style>{`
                    .partners-track {
                         display: flex;
                         align-items: center;
                         width: max-content;
                         animation: ticker 22s linear infinite;
                    }
                    .partners-track-wrapper:hover .partners-track {
                         animation-play-state: paused;
                    }
                    @keyframes ticker {
                         from { transform: translateX(0); }
                         to   { transform: translateX(-50%); }
                    }
               `}</style>
          </section>
     )
}
