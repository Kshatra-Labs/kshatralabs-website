'use client'

import React from 'react'
import { Header } from '@/components/blocks/header'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { motion } from 'framer-motion'
import FooterSection from '@/components/blocks/footer-section'
import { ArrowRight } from 'lucide-react'

// Add newest posts to the TOP of this array
const newsPosts = [
     {
          id: 'instagram-may-21',
          date: 'May 21, 2026',
          title: 'Featured by iTIC Incubator @ IITH',
          description: 'Kshatra Labs was recently highlighted in a post by iTIC Incubator, the Technology Business Incubator at IIT Hyderabad. iTIC is dedicated to creating a supportive and nourishing environment for entrepreneurs.',
          url: 'https://www.instagram.com/p/DYoX9TLmB4i/',
          instagramId: 'DYoX9TLmB4i',
          linkText: 'View on Instagram'
     },
     {
          id: 'youtube-update-latest',
          date: 'April 2026',
          title: 'CEO Rishav Mishra on Metaverse Entangled',
          description: 'Our CEO, Rishav Mishra, recently sat down with the Metaverse Entangled podcast to discuss the Future of Warfare and the strategic vision of Kshatra Labs.',
          url: 'https://www.youtube.com/watch?v=_nyVrkTdDEc',
          youtubeId: '_nyVrkTdDEc',
          linkText: 'Watch on YouTube'
     },
     {
          id: 'upstart-finale',
          date: 'January 28, 2026',
          title: '1st Runner Up at UPSTART Finale, IIT Kanpur',
          description: 'From bold ideas to breakthrough execution — Kshatra Labs proudly secured the 1st Runner Up position at the UPSTART Finale organized by E-Cell IIT Kanpur.',
          url: 'https://www.instagram.com/p/DUDgw1nDKNO/',
          imageUrl: '/insta1.png',
          linkText: 'View on Instagram'
     },
     {
          id: 'campus-fund-event',
          date: 'December 10, 2025',
          title: 'AWS IDFC FIRST Campus Fund Grand Challenge 2025 - Finale',
          description: 'To be selected among the top 13 student-led startups out of nearly 1,500 applications across India and abroad is a huge privilege. The Grand Finale was held in Mumbai on December 10, 2025. Deeply humbled to be included in such a talented group. This milestone was also featured in a press release by Business Wire India via New Delhi Times.',
          youtubeId: 'iUGGd9Oqh8Y',
          links: [
               { url: 'https://www.linkedin.com/posts/kshatra-labs_aws-idfc-first-campus-fund-grand-challenge-activity-7421378877232680961-hYb6?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy', text: 'Read on LinkedIn' },
               { url: 'https://www.newdelhitimes.com/business-wire-india/?for=N&Value=2vJH%2FRVR1WX51jjDS6%2B27ghz6QByAyRrrwhFNaSCQWGRgwhg6jKnWuZoJgI%3D', text: 'Read Press Release' }
          ]
     }
]

export default function NewsPage() {
     return (
          <div className="relative min-h-screen bg-black text-white selection:bg-white/20 overflow-hidden font-sans">
               {/* Fixed Background */}
               <div className="fixed inset-0 z-0 opacity-40">
                    <BackgroundPaths title="" />
               </div>

               <Header />

               <main className="relative z-10 pt-32 md:pt-40 pb-24 px-6 md:px-12 text-white">
                    <div className="max-w-7xl mx-auto space-y-32">

                         {/* HERO SECTION */}
                         <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 border-b border-white/10 mb-16">
                              <div className="relative max-w-4xl space-y-6">
                                   <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="flex items-center gap-3"
                                   >
                                        <div className="w-12 h-[1px] bg-[#2563EB]"></div>
                                        <span className="text-sm font-mono uppercase tracking-[0.2em] text-[#2563EB] font-semibold">Press & Media</span>
                                   </motion.div>

                                   <motion.h1
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                                        className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-tight"
                                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                                   >
                                        Latest News & <br className="hidden md:block" />
                                        <span className="text-neutral-500">Updates</span>
                                   </motion.h1>

                                   <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                        className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl leading-relaxed pt-4"
                                   >
                                        Stay informed with the latest developments, milestones, and strategic announcements from Kshatra Labs. Explore our press releases, media coverage, and corporate updates.
                                   </motion.p>
                              </div>
                         </div>

                         {/* NEWS GRID CONTENT */}
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pb-32">
                              {newsPosts.map((post, idx) => {
                                   return (
                                        <motion.div
                                             key={post.id}
                                             initial={{ opacity: 0, y: 20 }}
                                             whileInView={{ opacity: 1, y: 0 }}
                                             viewport={{ once: true, margin: "-50px" }}
                                             transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                                             className="flex flex-col group bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-md"
                                        >
                                             {/* Media Container (Top) */}
                                             {(post.youtubeId || post.instagramId || post.imageUrl) && (
                                                  <div className="w-full bg-neutral-950 border-b border-white/10 relative">
                                                       {post.youtubeId && (
                                                            <div className="relative w-full aspect-video">
                                                                 <iframe 
                                                                      src={`https://www.youtube.com/embed/${post.youtubeId}?rel=0`} 
                                                                      title="YouTube video player" 
                                                                      frameBorder="0" 
                                                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                                      allowFullScreen
                                                                      className="absolute inset-0 w-full h-full"
                                                                 ></iframe>
                                                            </div>
                                                       )}
                                                       {post.instagramId && (
                                                            <div className="relative w-full bg-white">
                                                                 <iframe 
                                                                      src={`https://www.instagram.com/p/${post.instagramId}/embed`} 
                                                                      height="450" 
                                                                      frameBorder="0" 
                                                                      scrolling="no" 
                                                                      allowTransparency
                                                                      className="w-full"
                                                                 ></iframe>
                                                            </div>
                                                       )}
                                                       {post.imageUrl && (
                                                            <div className="relative w-full aspect-[4/5] bg-black">
                                                                 <img 
                                                                      src={post.imageUrl} 
                                                                      alt={post.title}
                                                                      className="w-full h-full object-cover"
                                                                 />
                                                            </div>
                                                       )}
                                                  </div>
                                             )}

                                             {/* Meta & Title */}
                                             <div className="flex flex-col p-6 md:p-8 flex-1">
                                                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-xs font-mono uppercase tracking-widest mb-5 w-fit">
                                                       <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse"></span>
                                                       {post.date || 'Latest'}
                                                  </div>
                                                  <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-4 leading-snug group-hover:text-[#2563EB] transition-colors" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                                       {post.url ? (
                                                            <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
                                                       ) : (
                                                            post.title
                                                       )}
                                                  </h3>
                                                  
                                                  {/* Description */}
                                                  {post.description && (
                                                       <p className="text-neutral-400 font-light leading-relaxed mb-8 text-sm md:text-base flex-1">
                                                            {post.description}
                                                       </p>
                                                  )}

                                                  {/* Links */}
                                                  {(post.url || post.links) && (
                                                       <div className="mt-auto pt-4 border-t border-white/10 flex flex-col gap-3">
                                                            {post.links ? (
                                                                 post.links.map((link, i) => (
                                                                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#2563EB] transition-colors uppercase tracking-widest w-fit">
                                                                           {link.text} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                                      </a>
                                                                 ))
                                                            ) : (
                                                                 <a href={post.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#2563EB] transition-colors uppercase tracking-widest w-fit">
                                                                      {post.linkText || 'Read More'} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                                 </a>
                                                            )}
                                                       </div>
                                                  )}
                                             </div>
                                        </motion.div>
                                   )
                              })}
                         </div>

                    </div>
               </main>

               {/* Grid Overlay */}
               <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
               <FooterSection />
          </div>
     )
}
