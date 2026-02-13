'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  Eye,
  Activity,
  Lock,
  Radio,
  Database,
  Layout,
  HardDrive,
  ArrowRight
} from 'lucide-react'

const data = {
  defense: [
    { icon: Shield, title: 'Counter-Drone Defense', code: 'C-UAS', featured: true },
    { icon: Eye, title: 'Border Security', code: 'BSEC' },
    { icon: Activity, title: 'Rapid Base Response', code: 'BDRR' },
    { icon: Lock, title: 'Asset Protection', code: 'HVAP' },
  ],
  industrial: [
    { icon: Radio, title: 'Monitoring', code: 'PMON' },
    { icon: Database, title: 'Infrastructure', code: 'CINF' },
    { icon: Layout, title: 'Inspection', code: 'IINS' },
    { icon: HardDrive, title: 'Autonomy', code: 'RAUT' },
  ]
}

export function Capabilities() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,.15),transparent_45%)]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="mb-20">
          <p className="text-blue-400 text-xs tracking-widest uppercase">Capabilities</p>

          <h1 className="mt-4 text-5xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
            Mission Critical Solutions
          </h1>

          <p className="mt-4 text-neutral-400 max-w-xl">
            Defense and industrial systems built to never fail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          <Column title="Defense" items={data.defense} />
          <Column title="Industrial" items={data.industrial} />

        </div>

      </div>
    </section>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Column({ title, items }: any) {
  return (
    <div>
      <h3 className="text-white mb-6 tracking-wider">{title}</h3>

      <div className="space-y-4">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {items.map((item: any, i: number) => (
          <Card key={i} {...item} delay={i * .08} />
        ))}
      </div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Card({ icon: Icon, title, code, featured, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: .5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="group relative rounded-2xl p-6
      bg-white/5 backdrop-blur-xl border border-white/10
      hover:border-blue-500/40 hover:shadow-[0_30px_60px_-20px_rgba(59,130,246,.5)]
      transition-all duration-500"
    >

      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500/30 blur-3xl rounded-full" />
      </div>

      <div className="relative flex justify-between items-center">

        <div className="flex items-center gap-4">

          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 5 }}
            className="p-3 rounded-xl bg-white/10 border border-white/20"
          >
            <Icon className="w-5 h-5 text-blue-400" />
          </motion.div>

          <div>
            <p className="text-white">{title}</p>
            <p className="text-xs text-neutral-500">{code}</p>
          </div>

        </div>

        {featured && (
          <motion.div
            className="flex items-center gap-2 text-blue-400"
            whileHover={{ x: 4 }}
          >
            <span className="text-xs">View</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        )}

      </div>

    </motion.div>
  )
}
