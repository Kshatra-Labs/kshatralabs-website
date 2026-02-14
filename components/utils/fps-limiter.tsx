'use client';

import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

interface FPSLimiterProps {
     limit?: number;
}

export function FPSLimiter({ limit = 30 }: FPSLimiterProps) {
     const { invalidate } = useThree();
     const lastFrameTime = useRef(0);

     // We use useFrame to hook into the loop, but since we set frameloop="demand"
     // on the Canvas, this will only run when we invalidate.
     // Actually, for "demand" loop, we need to manually trigger invalidate based on time.

     useEffect(() => {
          let animationFrameId: number;

          const tick = (time: number) => {
               const delta = time - lastFrameTime.current;
               const interval = 1000 / limit;

               if (delta >= interval) {
                    lastFrameTime.current = time - (delta % interval);
                    invalidate();
               }

               animationFrameId = requestAnimationFrame(tick);
          };

          animationFrameId = requestAnimationFrame(tick);

          return () => {
               cancelAnimationFrame(animationFrameId);
          };
     }, [limit, invalidate]);

     return null;
}