'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Suspense, useEffect, useState, useRef } from 'react';
import RobotModel from './RobotModel';
import { getGPUBudget } from '@/lib/gpu';
import { startFPSMonitor, Quality } from '@/lib/performance';
import { useInView } from 'framer-motion';
import { FPSLimiter } from '@/components/utils/fps-limiter';

export default function SmartScene() {
     const [quality, setQuality] = useState<Quality>('medium');
     const containerRef = useRef<HTMLDivElement>(null);
     // Use framer-motion's useInView for efficiency, or react-intersection-observer
     const isInView = useInView(containerRef, { once: false, amount: 0.1 });

     useEffect(() => {
          setTimeout(() => setQuality(getGPUBudget()), 0);

          // Auto-throttle FPS
          const stop = startFPSMonitor((q) => setQuality(q));
          return () => stop();
     }, []);

     const dpr =
          quality === 'high' ? 1.5 :
               quality === 'medium' ? 1 :
                    0.8;

     return (
          <div ref={containerRef} className="w-full h-full relative">
               {isInView && (
                    <Canvas
                         dpr={dpr}
                         gl={{
                              antialias: quality !== 'low',
                              powerPreference: 'high-performance',
                              alpha: true
                         }}
                         camera={{ position: [0, 1.5, 4], fov: 45 }}
                         frameloop="demand"
                    >
                         <FPSLimiter limit={31} />
                         <ambientLight intensity={quality === 'low' ? 0.5 : 0.9} />
                         <directionalLight position={[2, 3, 2]} intensity={1} />

                         {quality !== 'low' && <Environment preset="studio" />}

                         {/* Controls for debug/interaction, maybe disable zoom for production */}
                         <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />

                         <Suspense fallback={null}>
                              <RobotModel />
                         </Suspense>
                    </Canvas>
               )}

               {/* Optional Debug Info */}
               <div className="absolute bottom-4 right-4 text-[10px] font-mono text-white/30 pointer-events-none">
                    Config: {quality.toUpperCase()} | DPR: {dpr}
               </div>
          </div>
     );
}