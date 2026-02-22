'use client'

import React from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const Spotlight = dynamic(() => import("@/components/ui/spotlight").then(mod => mod.Spotlight))

const advantages = [
  {
    title: 'AI-Native Architecture',
    description: 'Built from the ground up around neural networks. Autonomy is not an add-on — it is the core system design.'
  },
  {
    title: 'Fully Onboard Intelligence',
    description: 'Detection, targeting, and engagement decisions occur directly on the interceptor. No cloud reliance. No remote control latency.'
  },
  {
    title: 'Swarm & Multi-Agent Coordination',
    description: 'Interceptors operate collaboratively using distributed intelligence to defeat complex threats.'
  },
  {
    title: 'Scalable Cost Advantage',
    description: 'Low-cost interceptors designed to counter high-value airborne threats at scale.'
  },
  {
    title: 'Contested Environment Ready',
    description: 'Resilient autonomy designed for electronic warfare and denied environments.',
  },
  {
    title: 'Rapid Deployment Cycle',
    description: 'Hardware and software iterated at the speed of software. Evolving continuously against emerging threats.',
  }
]

export function PlatformsGrid() {
  return (
    <section id="vision" className="relative py-32 bg-black overflow-hidden font-sans">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* Background Topo Map / Noise with vertical fades */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise1.png')] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.05] bg-[url('/bg/page2bg.png')] bg-cover bg-center pointer-events-none mix-blend-screen"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
        }}
      />

      {/* Top and Bottom Black Gradients to fix blending seams */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      {/* Radial Soft Light */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">

        {/* Top Section (Split Layout) */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">

          {/* LEFT: Mission Statement */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 font-mono text-xs uppercase tracking-widest">
              Our Mission
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight"
            >
              Engineering Autonomous Defense
            </motion.h2>
          </div>

          {/* RIGHT: Supporting Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6 pt-2 md:pt-14"
          >
            <p className="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed">
              Autonomous systems designed to operate across air, land, and sea.
            </p>
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light">
              We build real defense platforms — not just drones — powered by fully onboard AI to detect, pursue, and neutralize aerial threats while keeping humans out of harm’s way.
            </p>
          </motion.div>
        </div>

        {/* Spline Vision Scene */}
        {/* <div className="mb-24">
          <Card className="w-full h-[500px] md:h-[600px] bg-black/50 border-white/10 relative overflow-hidden backdrop-blur-sm rounded-[2rem]">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </Card>
        </div> */}

        {/* 2x3 Grid (The 5th item will span or be highlighted appropriately) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 md:p-10 rounded-[2rem] backdrop-blur-2xl transition-all duration-500 overflow-hidden bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.04]"
            >

              {/* Internal Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full space-y-4">
                <h3 className="text-xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed font-light text-neutral-400">
                  {item.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
