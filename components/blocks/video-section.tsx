'use client';

import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

export function VideoSection() {
     const videoRef = useRef<HTMLVideoElement>(null);
     const containerRef = useRef<HTMLDivElement>(null);
     const isInView = useInView(containerRef, { margin: "0px 0px -20% 0px" });

     useEffect(() => {
          if (isInView && videoRef.current) {
               videoRef.current.play().catch((error) => {
                    console.log("Autoplay prevented:", error);
                    // Usually muted videos autoplay fine. If not, we might need user interaction.
               });
          } else if (videoRef.current) {
               videoRef.current.pause();
          }
     }, [isInView]);

     return (
          <section ref={containerRef} className="w-full py-24 px-4 md:px-8 bg-black flex justify-center">
               <div className="relative w-full max-w-7xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
                    <video
                         ref={videoRef}
                         className="w-full h-full object-cover"
                         src="/video/main-video.mp4"
                         muted
                         loop
                         playsInline
                    />

                    {/* Optional overlay or controls if needed */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
               </div>
          </section>
     );
}
