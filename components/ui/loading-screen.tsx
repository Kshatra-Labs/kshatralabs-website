'use client';

import React from 'react';
import { HoneyCombLoader } from './honeycomb-loader';
import { AnimatePresence, motion } from 'framer-motion';

interface LoadingScreenProps {
     isLoading: boolean;
     progress: number;
}

export const LoadingScreen = ({ isLoading, progress }: LoadingScreenProps) => {
     return (
          <AnimatePresence>
               {isLoading && (
                    <motion.div
                         initial={{ opacity: 1 }}
                         exit={{ opacity: 0 }}
                         transition={{ duration: 0.8, ease: "easeInOut" }}
                         className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
                    >
                         {/* Centered Honeycomb */}
                         <div className="scale-125">
                              <HoneyCombLoader />
                         </div>

                         {/* Bottom Progress Bar */}
                         <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center px-8">
                              <div className="w-full max-w-sm space-y-4">
                                   <div className="flex justify-between items-end font-mono text-[10px] tracking-[0.2em] text-blue-500/50 uppercase">
                                        <span>Loading...</span>
                                        <span>{Math.round(progress)}%</span>
                                   </div>

                                   <div className="h-[2px] w-full bg-white/5 overflow-hidden relative">
                                        <motion.div
                                             className="absolute top-0 left-0 h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                                             initial={{ width: 0 }}
                                             animate={{ width: `${progress}%` }}
                                             transition={{ duration: 0.5, ease: "easeOut" }}
                                        />
                                   </div>

                                   <motion.div
                                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                                        className="text-[10px] font-mono text-white/20 text-center tracking-[0.3em] uppercase pt-2"
                                   >
                                        Loading... 
                                   </motion.div>
                              </div>
                         </div>
                    </motion.div>
               )}
          </AnimatePresence>
     );
};