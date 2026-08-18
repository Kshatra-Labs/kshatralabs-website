'use client';

import { useState, useEffect } from 'react';
import { LoadingScreen } from '@/components/ui/loading-screen';

export function InitialLoader() {
     const [isLoading, setIsLoading] = useState(true);
     const [progress, setProgress] = useState(0);

     useEffect(() => {
          // Lock scroll
          if (isLoading) {
               document.body.style.overflow = 'hidden';
               document.body.style.touchAction = 'none';
          } else {
               document.body.style.overflow = 'unset';
               document.body.style.touchAction = 'unset';
          }

          return () => {
               document.body.style.overflow = 'unset';
               document.body.style.touchAction = 'unset';
          };
     }, [isLoading]);

     useEffect(() => {
          const hasLoaded = sessionStorage.getItem('kshatra-loaded');

          // Skip loader on repeat visits within the same session.
          // sessionStorage isn't available during SSR, so this can only be
          // determined after mount — an effect is required here, not a lint violation.
          if (hasLoaded) {
               // eslint-disable-next-line react-hooks/set-state-in-effect
               setProgress(100);
               setIsLoading(false);
               return;
          }

          const TOTAL_DURATION = 1800; // ms — fast enough to not feel sluggish
          const TICK = 50; // ms per interval tick
          const startTime = Date.now();

          const interval = setInterval(() => {
               const elapsed = Date.now() - startTime;
               const ratio = Math.min(elapsed / TOTAL_DURATION, 1);

               // Ease-out curve: fast start, slow finish
               const eased = 1 - Math.pow(1 - ratio, 3);
               const progress = Math.min(eased * 100, 100);
               setProgress(progress);

               if (ratio >= 1) {
                    clearInterval(interval);
                    setProgress(100);
                    setTimeout(() => {
                         setIsLoading(false);
                         sessionStorage.setItem('kshatra-loaded', 'true');
                    }, 400);
               }
          }, TICK);

          return () => clearInterval(interval);
     }, []);

     return <LoadingScreen isLoading={isLoading} progress={progress} />;
}
