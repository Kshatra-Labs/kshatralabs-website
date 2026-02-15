"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export function CompanyCard() {
     return (
          <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="group relative flex flex-col items-center text-center p-8 rounded-[20px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-[30px] shadow-[0_30px_90px_rgba(0,0,0,0.8)] hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(0,0,0,0.9)] transition-all duration-300 ease-out overflow-hidden w-full max-w-[360px]"
          >
               {/* Glow */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

               {/* Logo */}
               <div className="relative w-32 h-32 mb-8 rounded-full overflow-hidden border border-white/10 group-hover:border-defense-accent/50 transition-colors duration-300 bg-white flex items-center justify-center">
                    <Image
                         src="/logo2.png"
                         alt="Kshatra Labs"
                         width={128}
                         height={128}
                         className="object-cover w-full h-full scale-125 transition-transform duration-300 group-hover:scale-[1.35]"
                    />
               </div>

               {/* Content */}
               <div className="flex-1 flex flex-col items-center gap-2 mb-8 w-full">
                    <h3 className="text-2xl font-bold text-white tracking-tight uppercase" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                         Kshatra Labs
                    </h3>

                    {/* Bold Line */}
                    <div className="w-12 h-1 bg-defense-accent rounded-full my-3 group-hover:w-24 transition-all duration-500" />

                    <p className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase font-mono">
                         Defense Technology
                    </p>
               </div>

               {/* Actions */}
               <div className="flex items-center gap-2 w-full mt-auto">
                    <a
                         href="https://www.linkedin.com/company/kshatra-labs/"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex-1 flex items-center justify-center gap-3 h-12 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 group/btn"
                    >
                         <Linkedin className="w-5 h-5 text-white/60 group-hover/btn:text-white transition-colors" />
                         <span className="text-sm font-bold text-white/60 group-hover/btn:text-white transition-colors uppercase tracking-wider">
                              LinkedIn
                         </span>
                    </a>
               </div>
          </motion.div>
     );
}
