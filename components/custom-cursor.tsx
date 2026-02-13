'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {

     const cursorX = useMotionValue(-100)
     const cursorY = useMotionValue(-100)

     const springConfig = { damping: 25, stiffness: 700, mass: 0.5 }
     const cursorXSpring = useSpring(cursorX, springConfig)
     const cursorYSpring = useSpring(cursorY, springConfig)

     const [isVisible, setIsVisible] = useState(false)
     const [isPointer, setIsPointer] = useState(false)
     const [isDisabled, setIsDisabled] = useState(false)

     useEffect(() => {

          // 1. Check for Touch/Mobile/Low-Spec to disable completely
          const isTouch = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
          const isLowPower = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

          // If touch or low power preference, we disable the custom cursor logic entirely
          // and rely on native behavior (CSS below will need to be conditional)
          if (isTouch || isLowPower) {
               // Defer state update to avoid synchronous render warning
               setTimeout(() => setIsDisabled(true), 0);
               return;
          }


          let rafId: number;
          let latestEvent: MouseEvent | null = null;

          // 2. Throttled Mouse Move Handler
          const moveHandler = (e: MouseEvent) => {
               latestEvent = e;

               if (!rafId) {
                    rafId = requestAnimationFrame(() => {
                         if (latestEvent) {
                              cursorX.set(latestEvent.clientX - 16)
                              cursorY.set(latestEvent.clientY - 16)

                              const target = latestEvent.target as HTMLElement;
                              if (target) {
                                   setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
                              }

                              latestEvent = null;
                         }
                         rafId = 0;
                    });
               }
          }


          const enterHandler = () => setIsVisible(true)
          const leaveHandler = () => setIsVisible(false)

          window.addEventListener('mousemove', moveHandler, { passive: true })
          document.addEventListener('mouseenter', enterHandler)
          document.addEventListener('mouseleave', leaveHandler)


          setTimeout(() => setIsVisible(true), 0)

          return () => {

               window.removeEventListener('mousemove', moveHandler)
               document.removeEventListener('mouseenter', enterHandler)
               document.removeEventListener('mouseleave', leaveHandler)
               if (rafId) cancelAnimationFrame(rafId);
          }

     }, [cursorX, cursorY])

     if (isDisabled) return null;

     return (
          <>


               <motion.div
                    className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center rounded-full bg-white"
                    style={{
                         x: cursorXSpring,
                         y: cursorYSpring,
                         opacity: isVisible ? 1 : 0,
                    }}
                    animate={{
                         scale: isPointer ? 2.5 : 1,
                    }}
                    transition={{
                         type: "spring",
                         stiffness: 500,
                         damping: 28
                    }}
               >

               </motion.div>


               {/* Hide default cursor globally */}
               <style jsx global>{`
        
                    * {
                         cursor: none !important;
                    }
               `}</style>
          </>
     )
}    