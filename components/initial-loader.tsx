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
          const startTime = Date.now();
          const MAX_WAIT = 10000; // 10s max wait for videos

          let currentProgress = 0;
          const interval = setInterval(() => {
               const elapsed = Date.now() - startTime;

               // Check if all videos are ready
               const videos = Array.from(document.querySelectorAll('video'));
               const allVideosReady = videos.every(v => v.readyState >= 3); // HAVE_FUTURE_DATA or enough

               // Progress simulation
               const targetProgress = (document.readyState === 'complete' && allVideosReady) ? 100 : 98;
               const increment = (targetProgress - currentProgress) / 10;
               currentProgress = Math.min(currentProgress + increment, targetProgress);
               setProgress(currentProgress);

               if (
                    (document.readyState === 'complete' && allVideosReady) ||
                    elapsed > MAX_WAIT ||
                    hasLoaded
               ) {
                    clearInterval(interval);
                    setProgress(100);
                    setTimeout(() => {
                         setIsLoading(false);
                         sessionStorage.setItem('kshatra-loaded', 'true');
                    }, 500);
               }
          }, 100);

          return () => clearInterval(interval);
     }, []);

     return <LoadingScreen isLoading={isLoading} progress={progress} />;
}
