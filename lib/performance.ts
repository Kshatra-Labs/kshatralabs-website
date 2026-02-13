'use client';

export type Quality = 'low' | 'medium' | 'high';

let quality: Quality = 'high';

export function startFPSMonitor(onChange: (q: Quality) => void) {
     let last = performance.now();
     let frames = 0;
     let active = true;

     function loop(now: number) {
          if (!active) return;
          frames++;

          if (now - last >= 1000) {
               const fps = frames;
               frames = 0;
               last = now;

               let next: Quality = quality;

               if (fps < 35) next = 'low';
               else if (fps < 50) next = 'medium';
               else next = 'high';

               // Only invoke callback if quality actually changes
               // We can also check if the state matches active state outside
               // But for now, simple callback triggers
               onChange(next);
               quality = next;
          }

          requestAnimationFrame(loop);
     }

     requestAnimationFrame(loop);

     return () => { active = false };
}