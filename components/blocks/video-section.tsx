'use client';

import React from 'react';
import {
     VideoPlayer,
     VideoPlayerContent,
     VideoPlayerControlBar,
     VideoPlayerPlayButton,
     VideoPlayerTimeRange,
     VideoPlayerMuteButton,
} from "@/components/v1/skiper67";

export function VideoSection() {
     return (
          <section className="w-full py-24 px-4 md:px-8 bg-black flex justify-center">
               <div className="relative w-full max-w-7xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
                    <VideoPlayer style={{ width: "100%", height: "100%" }}>
                         <VideoPlayerContent
                              src="/video/intercept.mp4"
                              autoPlay
                              loop
                              muted
                              playsInline
                              slot="media"
                              className="w-full h-full object-cover"
                         />
                         
                         {/* Control overlay */}
                         <VideoPlayerControlBar className="absolute bottom-0 left-1/2 flex w-full max-w-7xl -translate-x-1/2 items-center justify-between px-6 py-4 bg-gradient-to-t from-black/80 to-transparent">
                              <div className="flex items-center gap-2">
                                   <VideoPlayerPlayButton className="h-4 w-4 bg-transparent text-white border-0 hover:text-[#cc1414] transition-colors" />
                                   <span className="font-mono text-[11px] text-white/60">HAWK FLIGHT DEMO</span>
                              </div>
                              <VideoPlayerTimeRange className="flex-1 mx-6 bg-transparent" />
                              <VideoPlayerMuteButton className="size-4 bg-transparent text-white border-0 hover:text-[#cc1414] transition-colors" />
                         </VideoPlayerControlBar>
                    </VideoPlayer>
               </div>
          </section>
     );
}
