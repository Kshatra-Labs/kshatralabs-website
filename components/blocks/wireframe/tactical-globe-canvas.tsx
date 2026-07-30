'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as d3Geo from 'd3-geo'
import * as topojson from 'topojson-client'

interface TacticalGlobeCanvasProps {
  onCoordsChange?: (coords: { lat: number; lng: number; isBangaloreVisible: boolean }) => void
}

export function TacticalGlobeCanvas({ onCoordsChange }: TacticalGlobeCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Rotation state: [yaw (lng), pitch (lat), roll]
  const rotationRef = useRef<[number, number, number]>([0, 15, 0])
  const isDraggingRef = useRef(false)
  const lastMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const velocityRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const resumeAutoRotateTimeRef = useRef<number>(0)
  const landFeaturesRef = useRef<any>(null)
  const sparseDotsRef = useRef<Array<[number, number]>>([])

  const [isLoaded, setIsLoaded] = useState(false)

  // Bangalore HQ exact coordinates [lng, lat]
  const bangaloreCoords: [number, number] = [77.5946, 12.9716]

  // Load world-atlas coastline data and generate sparse sampling vertices
  useEffect(() => {
    let isMounted = true
    fetch('/data/land-110m.json')
      .then((res) => res.json())
      .then((worldData) => {
        if (!isMounted) return
        const features = topojson.feature(worldData, worldData.objects.land as any) as any
        landFeaturesRef.current = features

        // Extract coordinates from polygons/lines for sparse blueprint sampling dots
        const coordsList: Array<[number, number]> = []
        const extractCoords = (geom: any) => {
          if (!geom) return
          if (geom.type === 'Polygon') {
            geom.coordinates.forEach((ring: any) => {
              ring.forEach((pt: any) => coordsList.push([pt[0], pt[1]]))
            })
          } else if (geom.type === 'MultiPolygon') {
            geom.coordinates.forEach((polygon: any) => {
              polygon.forEach((ring: any) => {
                ring.forEach((pt: any) => coordsList.push([pt[0], pt[1]]))
              })
            })
          }
        }

        if (features.type === 'FeatureCollection') {
          features.features.forEach((f: any) => extractCoords(f.geometry))
        } else if (features.type === 'Feature') {
          extractCoords(features.geometry)
        }

        // Sub-sample coordinates (e.g., every 15th point) for blueprint density control
        const sampled: Array<[number, number]> = []
        coordsList.forEach((pt, i) => {
          if (i % 15 === 0) {
            sampled.push(pt)
          }
        })
        sparseDotsRef.current = sampled
        setIsLoaded(true)
      })
      .catch((err) => {
        console.error('Failed to load world coastline data:', err)
      })

    return () => {
      isMounted = false
    }
  }, [])

  // Main Render Loop
  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container || !isLoaded) return

    const context = canvas.getContext('2d')
    if (!context) return

    let animationFrameId: number

    const render = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      if (width === 0 || height === 0) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      // High-DPI screen scaling
      const dpr = window.devicePixelRatio || 1
      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr
        canvas.height = height * dpr
      }
      context.save()
      context.scale(dpr, dpr)
      context.clearRect(0, 0, width, height)

      // Radius scaling via Math.min(width, height) / 2 with padding
      const radius = Math.max(10, Math.min(width, height) / 2 - 24)

      // Auto-rotation or Momentum Physics
      const now = performance.now()
      if (!isDraggingRef.current) {
        if (now < resumeAutoRotateTimeRef.current) {
          // Momentum coasting inside 2-second resume delay window
          velocityRef.current.x *= 0.94
          velocityRef.current.y *= 0.94
          rotationRef.current[0] += velocityRef.current.x
          rotationRef.current[1] = Math.max(-85, Math.min(85, rotationRef.current[1] + velocityRef.current.y))
        } else {
          // Continuous auto-rotation on Y-axis (approx. 0.2 degrees per frame)
          rotationRef.current[0] += 0.2
          // Smoothly normalize pitch toward Bangalore's latitude (12.97 deg) over time
          rotationRef.current[1] += (12.97 - rotationRef.current[1]) * 0.03
        }
      }

      // Configure Orthographic projection
      const projection = d3Geo.geoOrthographic()
        .scale(radius)
        .translate([width / 2, height / 2])
        .rotate(rotationRef.current)
        .clipAngle(90)

      const pathGenerator = d3Geo.geoPath(projection, context)

      // 1. Draw Graticule (Subtle grid lines at 20-degree intervals)
      context.beginPath()
      pathGenerator(d3Geo.geoGraticule().step([20, 20])())
      context.strokeStyle = 'rgba(255, 255, 255, 0.05)'
      context.lineWidth = 1
      context.stroke()

      // 2. Draw Outer Sphere Wireframe Shell
      context.beginPath()
      context.arc(width / 2, height / 2, radius, 0, Math.PI * 2)
      context.strokeStyle = 'rgba(255, 255, 255, 0.12)'
      context.lineWidth = 1
      context.stroke()

      // 3. Draw Land Outlines (Outlines only; no solid fills)
      if (landFeaturesRef.current) {
        context.beginPath()
        if (landFeaturesRef.current.type === 'FeatureCollection') {
          landFeaturesRef.current.features.forEach((f: any) => pathGenerator(f))
        } else {
          pathGenerator(landFeaturesRef.current)
        }
        context.strokeStyle = 'rgba(255, 255, 255, 0.15)'
        context.lineWidth = 1
        context.stroke()
      }

      // 4. Draw Sparse Coordinate Sampling Dots (Subtle blueprint background sampling)
      sparseDotsRef.current.forEach((dot) => {
        const p = projection(dot)
        if (p) {
          context.beginPath()
          context.arc(p[0], p[1], 1, 0, Math.PI * 2)
          context.fillStyle = 'rgba(255, 255, 255, 0.15)'
          context.fill()
        }
      })

      // 5. Draw Primary Bangalore Target Node & Locator (#FF0000 strictly for data node)
      const bPoint = projection(bangaloreCoords)
      const isBangaloreVisible = bPoint !== null

      if (isBangaloreVisible && bPoint) {
        // Pulse ring animation
        const pulseCycle = (now % 2000) / 2000 // 0 to 1
        const pulseRadius = 3 + pulseCycle * 18
        const pulseOpacity = (1 - pulseCycle) * 0.8

        // Outer pulsing ring
        context.beginPath()
        context.arc(bPoint[0], bPoint[1], pulseRadius, 0, Math.PI * 2)
        context.strokeStyle = `rgba(255, 0, 0, ${pulseOpacity})`
        context.lineWidth = 1.5
        context.stroke()

        // Core data node circle (1.5px / 2.5px radius in #FF0000 with shadow effect)
        context.save()
        context.shadowColor = 'rgba(255, 0, 0, 0.6)'
        context.shadowBlur = 10
        context.beginPath()
        context.arc(bPoint[0], bPoint[1], 2.5, 0, Math.PI * 2)
        context.fillStyle = '#FF0000'
        context.fill()
        context.restore()

        // Precision target crosshair lines around Bangalore node
        const crossOffset = 6
        const crossLen = 5
        context.strokeStyle = 'rgba(255, 0, 0, 0.7)'
        context.lineWidth = 1
        context.beginPath()
        // Top tick
        context.moveTo(bPoint[0], bPoint[1] - crossOffset)
        context.lineTo(bPoint[0], bPoint[1] - crossOffset - crossLen)
        // Bottom tick
        context.moveTo(bPoint[0], bPoint[1] + crossOffset)
        context.lineTo(bPoint[0], bPoint[1] + crossOffset + crossLen)
        // Left tick
        context.moveTo(bPoint[0] - crossOffset, bPoint[1])
        context.lineTo(bPoint[0] - crossOffset - crossLen, bPoint[1])
        // Right tick
        context.moveTo(bPoint[0] + crossOffset, bPoint[1])
        context.lineTo(bPoint[0] + crossOffset + crossLen, bPoint[1])
        context.stroke()
      }

      // Notify parent about current center coordinate / Bangalore visibility
      if (onCoordsChange) {
        // Center coordinates correspond to [-rotation[0], -rotation[1]]
        let centerLng = -rotationRef.current[0] % 360
        if (centerLng < -180) centerLng += 360
        if (centerLng > 180) centerLng -= 360
        const centerLat = rotationRef.current[1]
        onCoordsChange({ lat: centerLat, lng: centerLng, isBangaloreVisible })
      }

      context.restore()
      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isLoaded, onCoordsChange])

  // Pointer Event Handlers for Drag-to-Rotate with Momentum
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true
    lastMousePosRef.current = { x: e.clientX, y: e.clientY }
    velocityRef.current = { x: 0, y: 0 }
    if (canvasRef.current) {
      canvasRef.current.setPointerCapture(e.pointerId)
    }
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return
    const deltaX = (e.clientX - lastMousePosRef.current.x) * 0.4
    const deltaY = (e.clientY - lastMousePosRef.current.y) * 0.4

    lastMousePosRef.current = { x: e.clientX, y: e.clientY }
    velocityRef.current = { x: deltaX, y: -deltaY }

    rotationRef.current[0] += deltaX
    rotationRef.current[1] = Math.max(-85, Math.min(85, rotationRef.current[1] - deltaY))
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    if (canvasRef.current) {
      canvasRef.current.releasePointerCapture(e.pointerId)
    }
    // On mouse release, resume auto-rotation after a 2-second delay (2000ms)
    resumeAutoRotateTimeRef.current = performance.now() + 2000
  }

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[420px] flex items-center justify-center overflow-hidden select-none">
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
          [INITIALIZING ORTHOGRAPHIC PROJECTION...]
        </div>
      )}
    </div>
  )
}
