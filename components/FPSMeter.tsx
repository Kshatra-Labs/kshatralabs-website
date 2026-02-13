'use client'

import { useEffect, useRef } from 'react'
import Stats from 'stats.js'

export default function FPSMeter() {
     const mountRef = useRef<HTMLDivElement>(null)

     useEffect(() => {
          const stats = new Stats()
          stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom

          // Position the meter
          const dom = stats.dom
          dom.style.position = 'fixed'
          dom.style.left = 'auto'
          dom.style.right = '10px'
          dom.style.top = '10px'
          dom.style.zIndex = '9999'

          if (mountRef.current) {
               mountRef.current.appendChild(dom)
          } else {
               document.body.appendChild(dom)
          }

          const animate = () => {
               stats.begin()
               // monitored code goes here
               stats.end()
               requestAnimationFrame(animate)
          }

          const animationId = requestAnimationFrame(animate)

          return () => {
               cancelAnimationFrame(animationId)
               dom.remove()
          }
     }, [])

     return <div ref={mountRef} />
}