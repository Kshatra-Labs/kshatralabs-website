'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { useEffect, useState, useRef } from 'react'; // Added useRef
import { startFPSMonitor, Quality } from '@/lib/performance';
import { getGPUBudget } from '@/lib/gpu';
import { useInView } from 'framer-motion';
import { FPSLimiter } from '@/components/utils/fps-limiter';

// Separate component for the 3D content to keep Canvas clean
function Scene({ quality }: { quality: Quality }) {
     return (
          <>
               <ambientLight intensity={quality === 'low' ? 0.4 : 0.8} />
               <directionalLight position={[5, 10, 5]} intensity={1} />

               <mesh rotation={[0.5, 0.5, 0]}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial
                         color="#3b82f6"
                         roughness={0.2}
                         metalness={0.8}
                    />
               </mesh>

               {quality !== 'low' && <Environment preset="city" />}
               {quality === 'high' && <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />}
          </>
     )
}

export function ThreeRobot() {
     const [quality, setQuality] = useState<Quality>('high');
     const containerRef = useRef<HTMLDivElement>(null);
     const isInView = useInView(containerRef, { once: false, amount: 0.1 });

     useEffect(() => {
          // Initial budget guess
          const initialBudget = getGPUBudget();
          // Defer state update
          setTimeout(() => setQuality(initialBudget), 0);

          // Dynamic FPS monitoring
          const stopMonitor = startFPSMonitor((newQuality) => {
               setQuality(newQuality);
          });

          return () => stopMonitor();
     }, []);

     const dpr =
          quality === 'high' ? 1.5 :
               quality === 'medium' ? 1 :
                    0.75;

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
                         camera={{ position: [0, 0, 6], fov: 45 }}
                         frameloop="demand"
                    >
                         <FPSLimiter limit={31} />
                         <Scene quality={quality} />
                    </Canvas>
               )}

               {/* Debug Info (Optional - remove in prod) */}
               <div className="absolute bottom-4 right-4 text-[10px] font-mono text-white/30 pointer-events-none">
                    Config: {quality.toUpperCase()} | DPR: {dpr}
               </div>
          </div>
     );
}