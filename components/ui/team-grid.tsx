"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export interface TeamMember {
     name: string;
     role: string;
     description: string;

     profileImage?: string;
     linkedin?: string;
}

interface TeamGridProps {
     members: TeamMember[];
}

export function TeamGrid({ members }: TeamGridProps) {
     return (
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-7xl mx-auto">
               {members.map((member, index) => (
                    <div key={index} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] max-w-md">
                         <TeamCard member={member} index={index} />
                    </div>
               ))}
               {/* <JoinCard /> */}
          </div>
     );
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
     return (
          <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="group relative flex flex-col items-center text-center p-8 rounded-[14px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-300 ease-out overflow-hidden"
          >
               {/* Focus Glow */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

               {/* Avatar */}
               {/* Avatar */}
               <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden border border-white/10 bg-white/5 group-hover:border-defense-accent/50 transition-colors duration-300">
                    {member.profileImage && (
                         <Image
                              src={member.profileImage}
                              alt={member.name}
                              fill
                              className="object-cover"
                         />
                    )}
               </div>

               {/* Content */}
               <div className="flex-1 flex flex-col items-center gap-2 mb-8">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                         {member.name}
                    </h3>
                    <p className="text-sm font-medium text-[#00e5ff] tracking-wide uppercase">
                         {member.role}
                    </p>
                    <p className="text-sm text-[#9ca3af] leading-relaxed mt-2 max-w-[280px]">
                         {member.description}
                    </p>
               </div>

               {/* Actions */}
               <div className="flex items-center gap-3 w-full mt-auto">
                    {member.linkedin ? (
                         <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg bg-[#0077b5]/10 hover:bg-[#0077b5]/20 border border-[#0077b5]/20 hover:border-[#0077b5]/40 transition-all duration-200 group/btn"
                         >
                              <Linkedin className="w-4 h-4 text-[#0077b5] group-hover/btn:text-white transition-colors" />
                              <span className="text-xs font-semibold text-[#0077b5] group-hover/btn:text-white transition-colors uppercase tracking-wider">
                                   LinkedIn
                              </span>
                         </a>
                    ) : (
                         null
                    )}

                    {/* <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                         <ArrowUpRight className="w-4 h-4 text-white/60 hover:text-white transition-colors" />
                    </button> */}
               </div>
          </motion.div>
     );
}

// function JoinCard() {
//      return (
//           <motion.div
//                initial={{ opacity: 0, y: 20 }}
//                whileInView={{ opacity: 1, y: 0 }}
//                viewport={{ once: true }}
//                transition={{ duration: 0.5, delay: 0.3 }}
//                className="group relative flex flex-col items-center text-center p-8 rounded-[14px] bg-white/[0.02] border border-white/[0.08] border-dashed hover:border-defense-accent/30 backdrop-blur-[20px] transition-all duration-300 hover:-translate-y-2 cursor-pointer"
//           >
//                <div className="flex-1 flex flex-col items-center justify-center gap-6 min-h-[200px]">
//                     <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-defense-accent/10 transition-colors duration-300">
//                          <Plus className="w-8 h-8 text-white/40 group-hover:text-defense-accent transition-colors" />
//                     </div>
//                     <div className="space-y-2">
//                          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-defense-accent transition-colors">
//                               Join the Mission
//                          </h3>
//                          <p className="text-sm text-[#9ca3af] max-w-[200px] mx-auto">
//                               Help us build the future of autonomous defense systems.
//                          </p>
//                     </div>
//                </div>

//                <div className="w-full mt-6">
//                     <span className="flex items-center justify-center gap-2 w-full h-10 rounded-lg bg-white/5 group-hover:bg-defense-accent group-hover:text-black border border-white/10 group-hover:border-transparent transition-all duration-300 text-xs font-bold uppercase tracking-widest">
//                          View Openings
//                     </span>
//                </div>
//           </motion.div>
//      );
// }
