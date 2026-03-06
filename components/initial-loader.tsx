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

          // Preload critical assets for the "Drones are becoming A Massive Threat" section
          const CRITICAL_IMAGES = [
               '/warnings/img.avif',
               '/warnings/img.jpg',
               '/warnings/new.jpg',
               '/bg/page2bg.png',
               '/realcross.png'
          ];
          const CRITICAL_VIDEOS = [
               '/video/threatdrone.mp4'
          ];

          let imagesPreloaded = false;
          let videosPreloaded = false;

          if (hasLoaded) {
               imagesPreloaded = true;
               videosPreloaded = true;
          } else {
               let loadedImages = 0;
               CRITICAL_IMAGES.forEach(src => {
                    const img = new Image();
                    img.src = src;
                    img.onload = () => {
                         loadedImages++;
                         if (loadedImages === CRITICAL_IMAGES.length) imagesPreloaded = true;
                    };
                    img.onerror = () => {
                         loadedImages++; // skip errors
                         if (loadedImages === CRITICAL_IMAGES.length) imagesPreloaded = true;
                    };
               });

               let loadedVideos = 0;
               CRITICAL_VIDEOS.forEach(src => {
                    const vid = document.createElement('video');
                    vid.src = src;
                    vid.preload = 'auto';
                    vid.oncanplaythrough = () => {
                         loadedVideos++;
                         if (loadedVideos === CRITICAL_VIDEOS.length) videosPreloaded = true;
                    };
                    vid.onerror = () => {
                         loadedVideos++;
                         if (loadedVideos === CRITICAL_VIDEOS.length) videosPreloaded = true;
                    };
                    vid.load();
               });
          }

          let currentProgress = 0;
          const interval = setInterval(() => {
               const elapsed = Date.now() - startTime;

               // Check if all videos are ready
               const videos = Array.from(document.querySelectorAll('video'));
               const allVideosReady = videos.every(v => v.readyState >= 3); // HAVE_FUTURE_DATA or enough

               const isEverythingReady = document.readyState === 'complete' && allVideosReady && imagesPreloaded && videosPreloaded;

               // Progress simulation
               const targetProgress = isEverythingReady ? 100 : 98;
               const increment = (targetProgress - currentProgress) / 10;
               currentProgress = Math.min(currentProgress + increment, targetProgress);
               setProgress(currentProgress);

               if (
                    isEverythingReady ||
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
