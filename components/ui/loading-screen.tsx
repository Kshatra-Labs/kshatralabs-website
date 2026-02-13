'use client';

import React from 'react';
import { HoneyCombLoader } from './honeycomb-loader';
import { AnimatePresence, motion } from 'framer-motion';

interface LoadingScreenProps {
     isLoading: boolean;
}

export const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
     return (
          <AnimatePresence>
               {isLoading && (
                    <motion.div
                         initial={{ opacity: 1 }}
                         exit={{ opacity: 0 }}
                         transition={{ duration: 0.5, ease: "easeInOut" }}
                         className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
                    >
                         <div className="scale-150 mb-8">
                              <HoneyCombLoader />
                         </div>
                         <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 }}
                              className="text-white/50 font-mono text-sm tracking-widest uppercase"
                         >
                              Initializing Systems
                         </motion.div>
                    </motion.div>
               )}
          </AnimatePresence>
     );
};