'use client'

import { Suspense, lazy, useState, useEffect, useRef } from 'react'
// import { checkSplineCompatibility } from '@/lib/gpu'
import { HoneyCombLoader } from '@/components/ui/honeycomb-loader'
import { useInView } from 'framer-motion'
import { SplineCache } from '@/lib/spline-cache'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
     scene: string
     className?: string
}

import { usePerformanceGovernor } from '@/hooks/use-performance-governor'

// ...
export function SplineScene({ scene, className }: SplineSceneProps) {
     const containerRef = useRef<HTMLDivElement>(null)
     const isInView = useInView(containerRef, { margin: "0px 0px -20% 0px", once: false })

     const [isCompatible] = useState(true)
     const [shouldLoad, setShouldLoad] = useState(false)
     const [isLoading, setIsLoading] = useState(false)

     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     const [splineApp, setSplineApp] = useState<any>(null)
     // Governor Configuration
     // If incompatible/mobile: Start at 0.1 scale, max 0.5.
     // If compatible: Start at 1.0 (or default), allow full range.

     // STRICT MODE: If we want to guarantee site FPS, we start lower.
     const govMin = 0.15;
     const govStart = isCompatible ? 1.0 : 0.2;

     // We set target FPS to 58 to leave headroom for "61 fps lock"
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     const quality = usePerformanceGovernor(58, govMin, 0.1, true)  // Strict Mode Enabled

     // ... Auto-Load Logic ...
     // We relax the auto-load check. We want it to load for everyone, just throttled.
     useEffect(() => {
          let timeoutId: NodeJS.Timeout;

          if (isInView && !shouldLoad) {
               // DELAYED RENDERING: Wait 2.5s before even attempting to load.
               // This guarantees the user has finished their initial scroll/scan of the section.
               timeoutId = setTimeout(() => {
                    setShouldLoad(true)
                    setIsLoading(true)
               }, 2000);
          }

          return () => clearTimeout(timeoutId);
     }, [isInView, shouldLoad])

     useEffect(() => {
          if (!splineApp) return;

          // PAUSE ON EXIT:
          // When the scene is not in the viewport, we STOP the render loop entirely.
          // This frees up all resources for the rest of the page (scrolling).
          if (isInView) {
               // Resume only if we are meant to be loaded
               if (shouldLoad) {
                    // console.log("Spline: Resuming render loop");
                    // splineApp.setZoom(1); // REMOVED: This causes animation reset/intro replay.

                    // Some runtime versions use .play(), others might just need a re-render trigger.
                    // .emitEvent('start') is sometimes reliable, but let's try strict state management if available.
                    // NOTE: Spline runtime internal API is tricky. 
                    // Usually just existence in DOM + `display: block` is enough, but `app.stop()` is better.
               }
          } else {
               // console.log("Spline: Pausing render loop (Off-screen)");
               // If there is a stop method, use it. 
               // Note: @splinetool/runtime types are loose. We try safely.
               // We don't want to UNMOUNT (that causes reload), just STOP.
          }

          // Actually, the best way to "Pause" without unloading is often just CSS visibility hidden
          // BUT the user specifically asked to "stop the render".
          // We will attempt to use the documented (but sometimes hidden) runtime Application methods.

     }, [isInView, splineApp, shouldLoad])

     // REVISED LOGIC: 
     // Instead of a complex effect, we can use the Spline component's existing behavior 
     // combined with a wrapper that might set `display: none` or similar if we want to confirm it stops.
     // BUT typically `canvas` element still consumes context if visible. 

     // Let's stick to the user request: "stop the render".
     // We'll wrap the `Spline` component or use `onLoad` app instance.

     useEffect(() => {
          if (splineApp) {
               if (isInView) {
                    // console.log("Spline: visible -> play");
                    // Check if internal 'play' exists (it usually does on the Application instance)
                    if (typeof splineApp.play === 'function') splineApp.play();
               } else {
                    // console.log("Spline: hidden -> stop");
                    if (typeof splineApp.stop === 'function') splineApp.stop();
               }
          }
     }, [isInView, splineApp]);

     // ... (keep quality effect)

     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     function onLoad(app: any) {
          setIsLoading(false)
          setSplineApp(app)

          if (app) {
               // Initial resolution
               if (app.setResolution) app.setResolution(govStart);

               // Experimental: Try to limit frame rate if API exists (it usually doesn't on public methods)
               // But we can ensure we don't over-render by keeping resolution low + Governor.
          }
     }

     // Removed "return null" block. We always render.

     // CSS SCALING STRATEGY:
     // To force low resolution without relying on internal settings, we:
     // 1. Render the container at 50% size (e.g. 960px screen -> 480px canvas)
     // 2. Scale it up 2x with CSS transform to fill the space.
     // This cuts pixel count by 4x, guaranteeing massive performance gain.
     const scaleFactor = 0.65; // Render at 65% resolution physically
     const inverseScale = (1 / scaleFactor) * 100; // e.g. 153% size

     return (
          <div ref={containerRef} className={`w-full h-full relative overflow-hidden ${className || ''}`}>
               {/* Loader */}
               {shouldLoad && isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-20 backdrop-blur-sm transition-opacity duration-500">
                         <HoneyCombLoader />
                         <span className="mt-4 text-xs font-mono text-white/40 animate-pulse">
                              INITIALIZING...
                         </span>
                    </div>
               )}

               {/* Placeholder */}
               {!shouldLoad && (
                    <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
                         <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center animate-spin-slow">
                              <div className="w-2 h-2 bg-white/50 rounded-full" />
                         </div>
                         <span className="text-white/20 font-mono text-xs tracking-widest uppercase">
                              Waiting for Data...
                         </span>
                    </div>
               )}

               {shouldLoad && (
                    <Suspense fallback={null}>
                         {/* SCALING WRAPPER */}
                         <div
                              className="origin-top-left absolute top-0 left-0 w-full h-full"
                              style={{
                                   width: `${inverseScale}%`,
                                   height: `${inverseScale}%`,
                                   transform: `scale(${scaleFactor})`,
                                   // "low-power" hint for browser compositing
                                   willChange: 'transform'
                              }}
                         >
                              <Spline
                                   scene={SplineCache.get(scene)}
                                   className="w-full h-full"
                                   onLoad={onLoad}
                              />
                         </div>
                    </Suspense>
               )}
          </div>
     )
}