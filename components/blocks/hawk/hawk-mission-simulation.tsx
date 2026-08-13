'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
     VideoPlayer,
     VideoPlayerContent,
     VideoPlayerControlBar,
     VideoPlayerPlayButton,
     VideoPlayerTimeRange,
     VideoPlayerMuteButton,
} from "@/components/v1/skiper67"

interface MissionPhase {
     id: string;
     stepNumber: string;
     title: string;
     subtitle: string;
     desc: string;
     bulletPoints: string[];
     videoUrl: string;
     telemetryData: { label: string; val: string }[];
}

const MISSION_PHASES: MissionPhase[] = [
     {
          id: 'detection',
          stepNumber: '01',
          title: 'Target Detection & Tracking',
          subtitle: 'Radar & Camera Integration',
          desc: 'Before launch, HAWK connects directly to perimeter radars and sentry cameras. As soon as an enemy drone or incoming network enters the area, the command system tracks its exact speed and direction in real time.',
          bulletPoints: [
               'Works with existing radars, thermal cameras, and radio sensors',
               'Automatically identifies and separates incoming drone threats',
               'Target location is instantly sent to the launch container before firing'
          ],
          videoUrl: '/video/demo.mp4',
          telemetryData: [
               { label: 'Detection Range', val: '15 km Perimeter' },
               { label: 'Tracking Accuracy', val: '99.8% Multi-Sensor Lock' },
               { label: 'Optional Payload', val: '300-700 gm Capacity' }
          ]
     },
     {
          id: 'launch',
          stepNumber: '02',
          title: 'High-Acceleration Takeoff',
          subtitle: 'Fast Electric Launch',
          desc: 'HAWK launches straight up from its weather-sealed container. Custom high-torque electric motors instantly vector the interceptor toward the target, reaching 300+ kmph in under two seconds.',
          bulletPoints: [
               'Container pods can be set up on the ground, on rooftops, or on vehicles',
               'Electric motor thrust vectors immediately in any direction after takeoff',
               'Launches reliably in high winds, extreme cold, or desert heat'
          ],
          videoUrl: '/video/main-video.mp4',
          telemetryData: [
               { label: 'Launch Time', val: '< 0.5 seconds from command' },
               { label: 'Acceleration', val: '300 kmph in 1.8 seconds' },
               { label: 'Top Speed', val: '300+ kmph (Electric Drive)' }
          ]
     },
     {
          id: 'impact',
          stepNumber: '03',
          title: 'Kinetic & Proximity Interception',
          subtitle: 'Two Operational Neutralization Variants',
          desc: 'HAWK is available in two distinct configurations: Kinetic Hit-to-Kill (which collides directly at high speed to snap enemy structural wings and rotors without explosives) and Proximity Explosives.',
          bulletPoints: [
               'Kinetic Variant: Direct high-speed body-to-body collision with zero explosive shrapnel below',
               'Proximity Variant: Modular proximity fuzing and payload deployment for evading drone networks',
               'Far lower cost per intercept compared to traditional air defense missiles'
          ],
          videoUrl: '/video/intercept.mp4',
          telemetryData: [
               { label: 'Available Variants', val: 'Kinetic & Proximity Configurations' },
               { label: 'Collision Accuracy', val: '< 10 cm Direct Hit (Kinetic Mode)' },
               { label: 'Neutralization Method', val: 'Direct Kinetic Hit or Proximity Fuse' }
          ]
     }
]

export function HawkMissionSimulation() {
     const [activePhase, setActivePhase] = useState<MissionPhase>(MISSION_PHASES[0])

     return (
          <section id="how-it-works" className="py-24 md:py-32 bg-[#050505] border-b border-neutral-900 text-white">
               <div className="max-w-7xl mx-auto px-6 md:px-12">
                    {/* Section Header (Clean, Simple English) */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 pb-8 border-b border-neutral-800">
                         <div>
                              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#cc1414] font-semibold block mb-2">
                                   How HAWK Works
                              </span>
                              <h2 
                                   className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white"
                                   style={{ fontFamily: 'var(--font-space-grotesk)' }}
                              >
                                   The 3 Steps to Intercept
                              </h2>
                         </div>
                         <p className="max-w-md text-lg text-neutral-300 font-light leading-relaxed">
                              From the first radar alert to direct high-speed collision, HAWK completes the mission automatically in under two seconds.
                         </p>
                    </div>

                    {/* Step Navigation Bar */}
                    <div className="grid grid-cols-1 md:grid-cols-3 border border-neutral-800 divide-y md:divide-y-0 md:divide-x divide-neutral-800 bg-[#000000] mb-12">
                         {MISSION_PHASES.map((phase) => {
                              const isSelected = activePhase.id === phase.id;

                              return (
                                   <button
                                        key={phase.id}
                                        onClick={() => setActivePhase(phase)}
                                        className={`p-6 text-left transition-colors duration-200 flex flex-col justify-between min-h-[140px] relative ${
                                             isSelected ? 'bg-neutral-900/80 text-white' : 'hover:bg-neutral-950 text-neutral-400'
                                        }`}
                                   >
                                        <div className="flex items-center justify-between font-mono text-xs pb-4 border-b border-neutral-800">
                                             <span className={`font-bold ${isSelected ? 'text-white' : 'text-neutral-500'}`}>
                                                  STEP {phase.stepNumber}
                                             </span>
                                             {isSelected && (
                                                  <span className="font-mono text-xs text-[#cc1414] uppercase tracking-widest font-bold">
                                                       Active
                                                  </span>
                                             )}
                                        </div>

                                        <div className="pt-4">
                                             <h3 
                                                  className={`text-xl font-bold uppercase tracking-tight ${isSelected ? 'text-white' : 'text-neutral-300'}`}
                                                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                                             >
                                                  {phase.title}
                                             </h3>
                                             <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest mt-1 block">
                                                  {phase.subtitle}
                                             </span>
                                        </div>

                                        {isSelected && (
                                             <motion.div 
                                                  layoutId="active-step-bar"
                                                  className="absolute bottom-0 inset-x-0 h-1 bg-[#cc1414]"
                                             />
                                        )}
                                   </button>
                              )
                         })}
                    </div>

                    {/* Main Video & Details Panel */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 border border-neutral-800 bg-[#000000]">
                         {/* Left Video Area (Custom Video Player) */}
                         <div className="lg:col-span-8 relative aspect-video border-b lg:border-b-0 lg:border-r border-neutral-800 overflow-hidden flex items-center justify-center bg-black">
                              <VideoPlayer style={{ width: "100%", height: "100%" }}>
                                   <VideoPlayerContent
                                        key={activePhase.id}
                                        src={activePhase.videoUrl}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        slot="media"
                                        className="w-full h-full object-cover"
                                   />
                                   
                                   {/* Bottom Control Bar */}
                                   <VideoPlayerControlBar className="absolute bottom-0 left-1/2 flex w-full max-w-7xl -translate-x-1/2 items-center justify-between px-6 py-4 bg-gradient-to-t from-black/80 to-transparent">
                                        <div className="flex items-center gap-2">
                                             <VideoPlayerPlayButton className="h-4 w-4 bg-transparent text-white border-0 hover:text-[#cc1414] transition-colors" />
                                             <span className="font-mono text-[10px] text-white/60">LIVE // STEP {activePhase.stepNumber}</span>
                                        </div>
                                        <VideoPlayerTimeRange className="flex-1 mx-6 bg-transparent" />
                                        <VideoPlayerMuteButton className="size-4 bg-transparent text-white border-0 hover:text-[#cc1414] transition-colors" />
                                   </VideoPlayerControlBar>
                              </VideoPlayer>

                              {/* Corner Brackets */}
                              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/40 pointer-events-none z-10" />
                              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/40 pointer-events-none z-10" />
                              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/40 pointer-events-none z-10" />
                              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/40 pointer-events-none z-10" />

                              {/* Top Feed Tag */}
                              <div className="absolute top-4 inset-x-4 flex items-center justify-between font-mono text-[10px] text-white/80 pointer-events-none z-10">
                                   <div className="px-3 py-1 bg-black/85 border border-neutral-800 uppercase tracking-widest">
                                        Camera Feed: Step {activePhase.stepNumber}
                                   </div>
                                   <div className="px-3 py-1 bg-black/85 border border-neutral-800 text-[#cc1414] font-bold">
                                        240 FPS LIVE
                                   </div>
                              </div>
                         </div>

                         {/* Right Details Copy Area (Clean, Simple Words) */}
                         <div className="lg:col-span-4 p-8 flex flex-col justify-between space-y-6 bg-[#050505]">
                              <div>
                                   <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 pb-4 border-b border-neutral-800 mb-6 flex justify-between">
                                        <span>Step {activePhase.stepNumber} Details</span>
                                        <span className="text-white font-bold">Active</span>
                                   </div>

                                   <h3 
                                        className="text-2xl font-bold uppercase tracking-tight text-white mb-2"
                                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                                   >
                                        {activePhase.title}
                                   </h3>
                                   <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-6 font-medium">
                                        {activePhase.subtitle}
                                   </div>

                                   <p className="text-lg text-neutral-300 leading-relaxed mb-6 font-normal">
                                        {activePhase.desc}
                                   </p>

                                   <div className="space-y-3 pt-4 border-t border-neutral-800">
                                        {activePhase.bulletPoints.map((point, idx) => (
                                             <div key={idx} className="flex items-start gap-3 text-base sm:text-lg text-white/90 font-normal">
                                                  <span className="font-mono text-xs font-bold text-[#cc1414] mt-0.5">•</span>
                                                  <span>{point}</span>
                                             </div>
                                        ))}
                                   </div>
                              </div>

                              {/* Technical Performance Specs */}
                              <div className="pt-6 border-t border-neutral-800 space-y-3 font-mono">
                                   {activePhase.telemetryData.map((data, idx) => (
                                        <div key={idx} className="flex items-center justify-between py-2 border-b border-neutral-900 text-sm">
                                             <span className="text-neutral-400 uppercase tracking-wider">{data.label}</span>
                                             <span className="font-bold text-white">{data.val}</span>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>

               </div>
          </section>
     )
}
