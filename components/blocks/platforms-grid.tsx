'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const advantages = [
  { number: '01', title: 'AI-Native', description: 'Built from neural networks at the core.' },
  { number: '02', title: 'Edge Intelligence', description: 'Runs fully onboard. No cloud.' },
  { number: '03', title: 'Swarm-First', description: 'Multi-agent coordination.' },
  { number: '04', title: 'Cost Effective', description: 'Neutralize threats cheaply.' },
  { number: '05', title: 'Contested Ready', description: 'Resistant to EW & jamming.' },
]

export function PlatformsGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % advantages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-black overflow-hidden">

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('/noise1.png')] pointer-events-none" />

      {/* Ambient light */}
      <div
        className="absolute left-1/2 top-24 -translate-x-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.08) 25%, transparent 60%)',
          maskImage:
            'radial-gradient(circle, black 40%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(circle, black 40%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* LEFT */}
          <div>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
              Why Kshatra Labs?
            </h2>

            <p className="mt-4 md:mt-6 text-neutral-400 max-w-xl">
              Weapons-grade autonomy for the modern battlefield.
            </p>

            <div className="mt-8 md:mt-12 space-y-3 md:space-y-4">

              {advantages.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * .08 }}
                  viewport={{ once: true }}
                  className={`relative rounded-xl md:rounded-2xl p-4 md:p-6 transition-all duration-700 border ${activeIndex === i
                    ? 'bg-white/10 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                    : 'bg-white/5 border-white/10 grayscale-[0.5] opacity-60'
                    } backdrop-blur-xl group hover:opacity-100 hover:grayscale-0`}
                >
                  <div className="flex gap-4 md:gap-6 items-center">
                    <span className={`text-3xl md:text-5xl font-black transition-colors duration-700 ${activeIndex === i ? 'text-blue-500' : 'text-white/20'
                      }`}>
                      {item.number}
                    </span>

                    <div>
                      <h3 className={`text-base md:text-xl font-bold transition-colors duration-700 ${activeIndex === i ? 'text-white' : 'text-white/80'
                        }`}>
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-neutral-400 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress bar for active state */}
                  {activeIndex === i && (
                    <motion.div
                      layoutId="active-marker"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-2xl"
                    />
                  )}
                </motion.div>
              ))}

            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            style={{ y: parallaxY }}
            className="relative h-[360px] md:h-[520px] flex items-center justify-center"
          >
            <Drone />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ================= DRONE ================= */

function Drone() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="relative w-64 h-64 md:w-96 md:h-96 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl
      shadow-[0_30px_80px_-30px_rgba(59,130,246,.6)]"
    >

      {/* Soft frame */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-blue-500/20 opacity-40" />
      <div className="absolute inset-0 rounded-3xl border border-white/5" />

      <Image
        src="/hawkimg.png"
        alt="Drone"
        fill
        className="object-contain p-4 md:p-6-2xl"
      />

      {/* Crosshair */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-40 h-40 md:w-72 md:h-72 opacity-80">
          <Image
            src="/realcross.png"
            alt="Target Lock"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

    </motion.div>
  )
}
