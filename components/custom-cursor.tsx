'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
     const cursorRef = useRef<HTMLDivElement>(null)
     const [showCustomCursor, setShowCustomCursor] = useState(false)

     useEffect(() => {
          // Check if device has a fine pointer (mouse/trackpad)
          const mediaQuery = window.matchMedia('(pointer: fine)')

          const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
               setShowCustomCursor(e.matches)
          }

          // Initial check
          handleMediaChange(mediaQuery)

          // Listen for changes
          mediaQuery.addEventListener('change', handleMediaChange)

          return () => {
               mediaQuery.removeEventListener('change', handleMediaChange)
          }
     }, [])

     useEffect(() => {
          if (!showCustomCursor) return

          // Disable right-click context menu
          const handleContextMenu = (e: MouseEvent) => {
               e.preventDefault()
               return false
          }

          // Track mouse position with smooth animation
          const handleMouseMove = (e: MouseEvent) => {
               if (cursorRef.current) {
                    // Use transform for better performance
                    cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
               }
          }

          document.addEventListener('contextmenu', handleContextMenu)
          document.addEventListener('mousemove', handleMouseMove)

          return () => {
               document.removeEventListener('contextmenu', handleContextMenu)
               document.removeEventListener('mousemove', handleMouseMove)
          }
     }, [showCustomCursor])

     if (!showCustomCursor) return null

     return (
          <>
               {/* Custom cursor dot */}
               <div
                    ref={cursorRef}
                    className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
                    style={{
                         transition: 'transform 0.05s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                         willChange: 'transform',
                    }}
               >
                    <div className="w-4 h-4 bg-white rounded-full" />
               </div>

               {/* Hide default cursor only when custom cursor is active */}
               <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
          </>
     )
}
