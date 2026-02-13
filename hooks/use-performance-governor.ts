import { useState, useEffect, useRef } from 'react';

/**
 * usePerformanceGovernor
 * 
 * Monitors the main thread FPS. Returns a quality multiplier (0.1 to 1.0).
 * If FPS drops below `measureFps` (default 55), quality decreases.
 * If FPS stays above `recoverFps` (default 58), quality increases.
 * 
 * @returns {number} quality - A value between 0.1 and 1.0
 */
export function usePerformanceGovernor(
     targetFps = 60,
     minQuality = 0.2,
     reactionSpeed = 0.1,
     strict = false
) {
     const [quality, setQuality] = useState(1.0);
     const frameCount = useRef(0);
     const lastTime = useRef(0);
     const requestRef = useRef<number | undefined>(undefined);

     useEffect(() => {
          lastTime.current = performance.now();
          const animate = (time: number) => {
               frameCount.current++;

               const delta = time - lastTime.current;

               // Check every 500ms
               if (delta >= 500) {
                    const fps = (frameCount.current / delta) * 1000;

                    setQuality(prevQuality => {
                         let newQuality = prevQuality;

                         // Dropping frames? 
                         if (fps < targetFps - 5) {
                              // STRICT: If we are lagging, cut quality in HALF immediately or Drop to min
                              if (strict) {
                                   newQuality = Math.max(minQuality, prevQuality * 0.5);
                              } else {
                                   newQuality = Math.max(minQuality, prevQuality - reactionSpeed * 2);
                              }
                         }
                         // Smooth? Slowly recover
                         else if (fps >= targetFps - 2) {
                              newQuality = Math.min(1.0, prevQuality + (reactionSpeed / 2));
                         }

                         // Optimization: Don't trigger re-renders for tiny changes or stable states
                         if (Math.abs(newQuality - prevQuality) < 0.05) return prevQuality;

                         return newQuality;
                    });

                    frameCount.current = 0;
                    lastTime.current = time;
               }

               requestRef.current = requestAnimationFrame(animate);
          };

          requestRef.current = requestAnimationFrame(animate);

          return () => {
               if (requestRef.current) cancelAnimationFrame(requestRef.current);
          };
     }, [targetFps, minQuality, reactionSpeed, strict]);

     return quality;
}