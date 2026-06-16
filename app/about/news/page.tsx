'use client'

import React from 'react'
import Image from 'next/image'
import { Header } from '@/components/blocks/header'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { motion } from 'framer-motion'
import FooterSection from '@/components/blocks/footer-section'
import { ArrowRight } from 'lucide-react'

const cardStyles = `
  .uiverse-card {
    width: 100%;
    border-radius: 20px;
    background: #0a0a0a;
    padding: 5px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 7px 20px 0px;
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 1px solid rgba(255,255,255,0.05);
  }

  .uiverse-card:hover {
    transform: scale(1.02);
  }

  .uiverse-card .top-section {
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    background: #0a0a0a;
    position: relative;
    overflow: hidden;
  }

  .uiverse-card .bottom-section {
    margin-top: 15px;
    padding: 10px 15px 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .uiverse-btn {
    background-color: white;
    color: black;
    border-radius: 10em;
    font-size: 13px;
    font-weight: 600;
    padding: 0.8em 1.5em;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: 1px solid black;
    box-shadow: 0 0 0 0 black;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    width: fit-content;
  }

  .uiverse-btn:hover {
    transform: translateY(-4px) translateX(-2px);
    box-shadow: 2px 5px 0 0 black;
    color: black;
  }

  .uiverse-btn:active {
    transform: translateY(2px) translateX(1px);
    box-shadow: 0 0 0 0 black;
  }

  .date-tag {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: none;
    color: #0f1923;
    cursor: default;
    position: relative;
    padding: 6px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
    transition: all .15s ease;
    display: inline-block;
  }

  .date-tag::before,
  .date-tag::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    height: calc(50% - 5px);
    border: 1px solid #7D8082;
    transition: all .15s ease;
  }

  .date-tag::before {
    top: 0;
    border-bottom-width: 0;
  }

  .date-tag::after {
    bottom: 0;
    border-top-width: 0;
  }

  .date-tag-lg {
    position: relative;
    display: block;
    padding: 6px 14px;
    color: #fff;
    background-color: #0f1923;
    overflow: hidden;
    box-shadow: inset 0px 0px 0px 1px transparent;
  }

  .date-tag-lg::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    background-color: #0f1923;
  }

  .date-tag-lg::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 4px;
    height: 4px;
    background-color: #0f1923;
    transition: all .2s ease;
  }

  .date-tag-sl {
    display: block;
    position: absolute;
    top: 0;
    bottom: -1px;
    left: -8px;
    width: 0;
    background-color: #ff4655;
    transform: skew(-15deg);
    transition: all .2s ease;
  }

  .date-tag-text {
    position: relative;
    letter-spacing: 0.1em;
  }

  .date-tag:hover {
    color: #0f1923;
  }

  .date-tag:hover .date-tag-sl {
    width: calc(100% + 15px);
  }

  .date-tag:hover .date-tag-lg::after {
    background-color: #fff;
  }
`;

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
               <style>{cardStyles}</style>
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
                                             className="uiverse-card group"
                                        >
                                             {/* Top Section */}
                                             <div className="top-section">
                                                  <div className="w-full relative z-0 flex-1 min-h-[200px]">
                                                       {post.youtubeId ? (
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
                                                       ) : post.instagramId ? (
                                                            <div className="relative w-full h-[450px] bg-white flex items-center overflow-hidden">
                                                                 <iframe 
                                                                      src={`https://www.instagram.com/p/${post.instagramId}/embed`} 
                                                                      height="450" 
                                                                      frameBorder="0" 
                                                                      scrolling="no" 
                                                                      allowTransparency
                                                                      className="w-full absolute inset-0 h-full"
                                                                 ></iframe>
                                                            </div>
                                                       ) : post.imageUrl ? (
                                                            <div className="relative w-full bg-[#0a0a0a] flex items-center justify-center">
                                                                 <Image 
                                                                      src={post.imageUrl} 
                                                                      alt={post.title}
                                                                      width={800}
                                                                      height={800}
                                                                      className="w-full h-auto object-cover"
                                                                 />
                                                            </div>
                                                       ) : (
                                                            <div className="absolute inset-0 w-full h-full"></div>
                                                       )}
                                                  </div>
                                             </div>

                                             {/* Bottom Section */}
                                             <div className="bottom-section">
                                                  <h3 className="text-xl font-bold text-white tracking-wide mb-3 leading-snug group-hover:text-[#50f6ff] transition-colors" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                                       {post.url ? (
                                                            <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
                                                       ) : (
                                                            post.title
                                                       )}
                                                  </h3>
                                                  
                                                  {post.description && (
                                                       <p className="text-[#aadef3] opacity-80 font-light leading-relaxed mb-4 text-sm flex-1">
                                                            {post.description}
                                                       </p>
                                                  )}

                                                  <div className={`flex items-center mb-6 ${!post.description ? 'flex-1 items-start' : ''}`}>
                                                       <div className="date-tag">
                                                            <span className="date-tag-lg">
                                                                 <span className="date-tag-sl" />
                                                                 <span className="date-tag-text">{post.date || 'Latest'}</span>
                                                            </span>
                                                       </div>
                                                  </div>

                                                  {(post.url || post.links) && (
                                                       <div className="mt-auto pt-4 border-t border-white/10 flex flex-col gap-3">
                                                            {post.links ? (
                                                                 post.links.map((link, i) => (
                                                                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="uiverse-btn">
                                                                           {link.text} <ArrowRight className="w-3.5 h-3.5" />
                                                                      </a>
                                                                 ))
                                                            ) : (
                                                                 <a href={post.url} target="_blank" rel="noopener noreferrer" className="uiverse-btn">
                                                                      {post.linkText || 'Read More'} <ArrowRight className="w-3.5 h-3.5" />
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
