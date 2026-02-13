'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
     const cursorRef = useRef<HTMLDivElement>(null);
     const [isDisabled, setIsDisabled] = useState(false);

     useEffect(() => {
          // 1. Feature Detection: Disable on touch or low-power mode
          const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
          const isLowPower = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

          if (isTouch || isLowPower) {
               setTimeout(() => setIsDisabled(true), 0);
               return;
          }

          const cursor = cursorRef.current;
          if (!cursor) return;

          let isVisible = false;
          let isClicking = false;
          let isHovering = false;

          // Use requestAnimationFrame for smooth visual updates if we added physics,
          // but for "max responsiveness" we want 1:1 updates in the event handler 
          // to minimize input latency. 
          // However, rAF is roughly synchronized with repaint, which prevents tearing.
          // Let's try direct updates first for raw speed.

          const onMouseMove = (e: MouseEvent) => {
               // Direct DOM update ensures the cursor moves INSTANTLY with the mouse frame,
               // creating the illusion of 60fps even if the React tree is stuck re-rendering.
               if (!isVisible) {
                    cursor.style.opacity = '1';
                    isVisible = true;
               }

               // Hardware accelerated transform
               // Centering the 16px cursor: -8px offset
               const x = e.clientX - 8;
               const y = e.clientY - 8;
               cursor.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${isClicking ? 0.9 : (isHovering ? 1.5 : 1)})`;

               // Check for hover state periodically or on move?
               // checking computed style on every move can be expensive (layout thrashing).
               // Optimization: Only check tag names or specific classes if possible, 
               // OR just accept the cost if it's not too high.
               // Let's rely on standard event delegation for hover state to avoid layout thrashing in move.
          };

          const onMouseDown = () => {
               isClicking = true;
               // Re-apply transform with new scale
               // We read specific values from current transform or just rely on the next move?
               // Better to just set a class or variable that the move handler uses, 
               // BUT for instant feedback we should trigger a style update.
               cursor.style.transition = 'transform 0.1s ease-out'; // add slight transition for scale only?
               // Actually, let's keep it raw for position, maybe animate scale.

               // We can use a CSS variable for scale to separate it from position transform!
               cursor.style.setProperty('--cursor-scale', '0.8');
          };

          const onMouseUp = () => {
               isClicking = false;
               cursor.style.setProperty('--cursor-scale', isHovering ? '1.5' : '1');
          };

          const onMouseEnter = () => {
               cursor.style.opacity = '1';
               isVisible = true;
          };

          const onMouseLeave = () => {
               cursor.style.opacity = '0';
               isVisible = false;
          };

          // Optimization: Use separate listeners for hover detection
          // This is much cheaper than getComputedStyle() in mousemove
          const onMouseOver = (e: MouseEvent) => {
               const target = e.target as HTMLElement;
               if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('a') || target.closest('button') || window.getComputedStyle(target).cursor === 'pointer') {
                    isHovering = true;
                    cursor.style.setProperty('--cursor-scale', '1.5');
                    cursor.classList.add('mix-blend-difference');
               } else {
                    isHovering = false;
                    cursor.style.setProperty('--cursor-scale', '1');
               }
          };

          window.addEventListener('mousemove', onMouseMove, { passive: true });
          window.addEventListener('mousedown', onMouseDown, { passive: true });
          window.addEventListener('mouseup', onMouseUp, { passive: true });
          window.addEventListener('mouseover', onMouseOver, { passive: true });
          document.documentElement.addEventListener('mouseenter', onMouseEnter);
          document.documentElement.addEventListener('mouseleave', onMouseLeave);

          return () => {
               window.removeEventListener('mousemove', onMouseMove);
               window.removeEventListener('mousedown', onMouseDown);
               window.removeEventListener('mouseup', onMouseUp);
               window.removeEventListener('mouseover', onMouseOver);
               document.documentElement.removeEventListener('mouseenter', onMouseEnter);
               document.documentElement.removeEventListener('mouseleave', onMouseLeave);
          };
     }, []);

     if (isDisabled) return null;

     return (
          <>
               <div
                    ref={cursorRef}
                    className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference will-change-transform"
                    style={{
                         opacity: 0,
                         // Initialize scale var
                         // We apply translation in JS, scale via CSS var to avoid overwriting each other if we can,
                         // BUT translate is also a transform. 
                         // So in JS we must simply write the whole string: translate(...) scale(var(--scale))
                         // For simplicity in the raw-performance version, we might just write it all in the move handler.
                         // Let's stick to writing `transform` in JS for position, and we can include scale there.
                         transition: 'opacity 0.2s',
                    }}
               />
               <style jsx global>{`
        * {
          cursor: none !important;
        }
        /* Mobile override */
        @media (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
          </>
     );
}