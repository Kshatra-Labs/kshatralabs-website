'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function EnvironmentSection() {
     return (
          <section className="relative w-full min-h-[800px] bg-black flex flex-col items-center justify-center overflow-hidden py-24">
               {/* Background Grid/Noise */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />

               <div className="relative z-10 w-full max-w-7xl px-6">
                    <motion.h2
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         className="text-white text-5xl md:text-7xl font-mono mb-20 tracking-tighter max-w-xl"
                    >
                         Built for Every<br />
                         <span className="text-zinc-500">Environment</span>
                    </motion.h2>

                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">
                         {/* Central Drone Image */}
                         <motion.div
                              initial={{ scale: 0.8, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.8 }}
                              className="relative z-20 w-[150px] md:w-[350px]"
                         >
                              <motion.img
                                   src="/styles/2.png" // Using 2.png as requested, styled like the schematic
                                   alt="Kshatra Drone Schematic"
                                   className="w-full h-full object-contain"
                                   initial={{ rotate: -65 }} // Increased tilt to -65 degrees
                                   animate={{ y: [-15, 15, -15], rotate: [-65, -63, -65] }}
                                   transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                              />
                         </motion.div>

                         {/* Labels and Lines */}
                         <LabelBox label="SEA" x="15%" y="30%" align="right" delay={0.2} />
                         <LabelBox label="LAND" x="85%" y="25%" align="left" delay={0.4} />
                         <LabelBox label="AIR" x="20%" y="75%" align="right" delay={0.6} />
                         <LabelBox label="SPACE" x="80%" y="80%" align="left" delay={0.8} />

                         {/* Connecting Lines (SVG Overlay) */}
                         <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                              {/* Sea (Left Top) -> Nose Area */}
                              <LinePath startX="15%" startY="35%" endX="30%" endY="40%" delay={1} />
                              {/* Land (Right Top) -> Top Wing */}
                              <LinePath startX="85%" startY="30%" endX="55%" endY="35%" delay={1.2} />
                              {/* Air (Left Bottom) -> Bottom Wing */}
                              <LinePath startX="20%" startY="70%" endX="42%" endY="60%" delay={1.4} />
                              {/* Space (Right Bottom) -> Tail */}
                              <LinePath startX="80%" startY="75%" endX="68%" endY="65%" delay={1.6} />
                         </svg>
                    </div>
               </div>
          </section>
     );
}

function LabelBox({ label, x, y, align, delay }: { label: string, x: string, y: string, align: 'left' | 'right', delay: number }) {
     return (
          <motion.div
               initial={{ opacity: 0, x: align === 'left' ? 20 : -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay, duration: 0.5 }}
               className="absolute z-30"
               style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
          >
               <div className="relative group cursor-pointer">
                    {/* Bracket Box */}
                    <div className="relative px-6 py-2 border border-zinc-800 bg-black/50 backdrop-blur-sm">
                         {/* Corners */}
                         <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white" />
                         <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white" />
                         <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white" />
                         <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white" />

                         <span className="text-white font-mono text-sm tracking-[0.2em]">{label}</span>
                    </div>
               </div>
          </motion.div>
     )
}

function LinePath({ startX, startY, endX, endY, delay }: { startX: string, startY: string, endX: string, endY: string, delay: number }) {
     return (
          <motion.g
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay, duration: 1 }}
          >
               <motion.path
                    d={`M ${startX} ${startY} L ${endX} ${endY}`}
                    stroke="white"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ delay, duration: 1, ease: "easeInOut" }}
               />
               {/* Start Dot */}
               <motion.circle
                    cx={startX}
                    cy={startY}
                    r="2"
                    fill="white"
                    fillOpacity="0.5"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: delay + 0.5, duration: 0.3 }}
               />
               {/* End Dot */}
               <motion.circle
                    cx={endX}
                    cy={endY}
                    r="2"
                    fill="white"
                    fillOpacity="0.8"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: delay + 0.8, duration: 0.3 }}
               />
          </motion.g>
     )
}
