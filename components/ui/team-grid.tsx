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
                    <div key={index} className="flex w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] max-w-md">
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
               className="group relative flex flex-col p-8 rounded-[2rem] bg-black border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
          >
               {/* Avatar Section */}
               <div className="relative self-center mb-8">
                    <div className="relative w-32 h-32 rounded-2xl overflow-hidden border border-white/10 bg-white/5 z-10 group-hover:border-emerald-500/30 transition-colors duration-500">
                         {member.profileImage && (
                              <Image
                                   src={member.profileImage}
                                   alt={member.name}
                                   fill
                                   className="object-cover group-hover:scale-105 transition-all duration-700"
                              />
                         )}
                    </div>
               </div>

               {/* Identity Header */}
               <div className="space-y-4 mb-8 text-center w-full">
                    <div className="space-y-1">
                         <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-emerald-50 transition-colors">
                              {member.name}
                         </h3>
                    </div>

                    <div className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono font-bold uppercase tracking-widest text-white/50 group-hover:text-white/80 group-hover:border-white/20 transition-all">
                         {member.role}
                    </div>
               </div>

               {/* Description */}
               <p className="text-base text-white leading-relaxed font-light mb-8 flex-1 text-center">
                    &quot;{member.description}&quot;
               </p>

               {/* Actions */}
               <div className="pt-6 border-t border-white/5 mt-auto">
                    {member.linkedin && (
                         <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between group/link"
                         >
                              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/30 group-hover/link:text-blue-400 transition-colors">Connect via LinkedIn</span>
                              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/link:bg-blue-500 group-hover/link:border-transparent group-hover/link:text-black transition-all duration-300">
                                   <Linkedin className="w-3.5 h-3.5" />
                              </div>
                         </a>
                    )}
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
