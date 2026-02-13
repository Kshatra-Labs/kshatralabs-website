'use client';

import { useState, useEffect } from 'react';
import { LoadingScreen } from '@/components/ui/loading-screen';

export function InitialLoader() {
     const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
          // Check if we've already shown the loader in this session
          const hasLoaded = sessionStorage.getItem('kshatra-loaded');

          if (hasLoaded) {
               // Defer state update to avoid synchronous set state in effect warning
               setTimeout(() => setIsLoading(false), 0);
          } else {
               // Show loader for initial visit
               // Adjust timing to match animation cycles (approx 2-3s)
               const timer = setTimeout(() => {
                    setIsLoading(false);
                    sessionStorage.setItem('kshatra-loaded', 'true');
               }, 2500);

               return () => clearTimeout(timer);
          }
     }, []);

     return <LoadingScreen isLoading={isLoading} />;
}
