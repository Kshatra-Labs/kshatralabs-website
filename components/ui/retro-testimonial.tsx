"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ImageProps } from "next/image";
import { ArrowLeft, ArrowRight, Quote, X } from "lucide-react";
import { cn } from "@/lib/utils";

// ===== Types and Interfaces =====
export interface iTestimonial {
     name: string;
     designation: string;
     description: string;
     profileImage: string;
}

interface iCarouselProps {
     items: React.ReactElement<{
          testimonial: iTestimonial;
          index: number;
          layout?: boolean;
          onCardClose: () => void;
     }>[];
     initialScroll?: number;
}

// ===== Custom Hooks =====
const useOutsideClick = (
     ref: React.RefObject<HTMLDivElement | null>,
     onOutsideClick: () => void,
) => {
     useEffect(() => {
          const handleClickOutside = (event: MouseEvent | TouchEvent) => {
               if (!ref.current || ref.current.contains(event.target as Node)) {
                    return;
               }
               onOutsideClick();
          };

          document.addEventListener("mousedown", handleClickOutside);
          document.addEventListener("touchstart", handleClickOutside);

          return () => {
               document.removeEventListener("mousedown", handleClickOutside);
               document.removeEventListener("touchstart", handleClickOutside);
          };
     }, [ref, onOutsideClick]);
};

// ===== Components =====
const Carousel = ({ items, initialScroll = 0 }: iCarouselProps) => {
     const carouselRef = React.useRef<HTMLDivElement>(null);
     const [canScrollLeft, setCanScrollLeft] = React.useState(false);
     const [canScrollRight, setCanScrollRight] = React.useState(true);

     const checkScrollability = () => {
          if (carouselRef.current) {
               const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
               setCanScrollLeft(scrollLeft > 0);
               setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
          }
     };

     const handleScrollLeft = () => {
          if (carouselRef.current) {
               carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
          }
     };

     const handleScrollRight = () => {
          if (carouselRef.current) {
               carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
          }
     };

     const handleCardClose = (index: number) => {
          if (carouselRef.current) {
               const cardWidth = isMobile() ? 230 : 384;
               const gap = isMobile() ? 4 : 8;
               const scrollPosition = (cardWidth + gap) * (index + 1);
               carouselRef.current.scrollTo({
                    left: scrollPosition,
                    behavior: "smooth",
               });
          }
     };

     const isMobile = () => {
          return typeof window !== "undefined" && window.innerWidth < 768;
     };

     useEffect(() => {
          if (carouselRef.current) {
               carouselRef.current.scrollLeft = initialScroll;
               checkScrollability();
          }
     }, [initialScroll]);

     return (
          <div className="relative w-full mt-10">
               <div
                    className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] py-5"
                    ref={carouselRef}
                    onScroll={checkScrollability}
               >
                    <div
                         className={cn(
                              "flex flex-row justify-start gap-4 pl-3",
                              "max-w-5xl mx-auto",
                         )}
                    >
                         {items.map((item, index) => {
                              return (
                                   <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                             opacity: 1,
                                             y: 0,
                                             transition: {
                                                  duration: 0.5,
                                                  delay: 0.1 * index,
                                                  ease: "easeOut",
                                             },
                                        }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        key={`card-${index}`}
                                        className="rounded-3xl"
                                   >
                                        {React.cloneElement(item, {
                                             onCardClose: () => {
                                                  return handleCardClose(index);
                                             },
                                        })}
                                   </motion.div>
                              );
                         })}
                    </div>
               </div>
               <div className="flex justify-end gap-2 mt-4 pr-3">
                    <button
                         className="relative z-40 h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center disabled:opacity-50 hover:bg-defense-accent/20 transition-all duration-200"
                         onClick={handleScrollLeft}
                         disabled={!canScrollLeft}
                    >
                         <ArrowLeft className="h-6 w-6 text-white" />
                    </button>
                    <button
                         className="relative z-40 h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center disabled:opacity-50 hover:bg-defense-accent/20 transition-all duration-200"
                         onClick={handleScrollRight}
                         disabled={!canScrollRight}
                    >
                         <ArrowRight className="h-6 w-6 text-white" />
                    </button>
               </div>
          </div>
     );
};

const TestimonialCard = ({
     testimonial,
     index,
     layout = false,
     onCardClose = () => { },
     backgroundImage = "https://images.unsplash.com/photo-1686806372726-388d03ff49c8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}: {
     testimonial: iTestimonial;
     index: number;
     layout?: boolean;
     onCardClose?: () => void;
     backgroundImage?: string;
}) => {
     const [isExpanded, setIsExpanded] = useState(false);
     const containerRef = useRef<HTMLDivElement>(null);

     const handleExpand = () => {
          return setIsExpanded(true);
     };
     const handleCollapse = () => {
          setIsExpanded(false);
          onCardClose();
     };

     useEffect(() => {
          const handleEscapeKey = (event: KeyboardEvent) => {
               if (event.key === "Escape") {
                    handleCollapse();
               }
          };

          if (isExpanded) {
               const scrollY = window.scrollY;
               document.body.style.position = "fixed";
               document.body.style.top = `-${scrollY}px`;
               document.body.style.width = "100%";
               document.body.style.overflow = "hidden";
               document.body.dataset.scrollY = scrollY.toString();
          } else {
               const scrollY = parseInt(document.body.dataset.scrollY || "0", 10);
               document.body.style.position = "";
               document.body.style.top = "";
               document.body.style.width = "";
               document.body.style.overflow = "";
               window.scrollTo({ top: scrollY, behavior: "instant" });
          }

          window.addEventListener("keydown", handleEscapeKey);
          return () => {
               return window.removeEventListener("keydown", handleEscapeKey);
          };
     }, [isExpanded]);

     useOutsideClick(containerRef, handleCollapse);

     return (
          <>
               <AnimatePresence>
                    {isExpanded && (
                         <div className="fixed inset-0 h-screen overflow-hidden z-[100] flex items-center justify-center p-4">
                              <motion.div
                                   initial={{ opacity: 0 }}
                                   animate={{ opacity: 1 }}
                                   exit={{ opacity: 0 }}
                                   className="bg-black/80 backdrop-blur-xl h-full w-full fixed inset-0"
                                   onClick={handleCollapse}
                              />
                              <motion.div
                                   initial={{ opacity: 0, scale: 0.9 }}
                                   animate={{ opacity: 1, scale: 1 }}
                                   exit={{ opacity: 0, scale: 0.9 }}
                                   ref={containerRef}
                                   layoutId={layout ? `card-${testimonial.name}` : undefined}
                                   className="max-w-3xl w-full bg-neutral-900 border border-white/10 z-[110] p-6 md:p-12 rounded-3xl relative overflow-y-auto max-h-[90vh]"
                              >
                                   <button
                                        className="absolute top-6 right-6 h-10 w-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-defense-accent/20 transition-colors"
                                        onClick={handleCollapse}
                                   >
                                        <X className="h-6 w-6 text-white" />
                                   </button>
                                   <div className="space-y-8">
                                        <div className="space-y-4">
                                             <motion.p
                                                  layoutId={layout ? `category-${testimonial.name}` : undefined}
                                                  className="text-defense-accent font-mono text-sm uppercase tracking-widest font-bold"
                                             >
                                                  {testimonial.designation}
                                             </motion.p>
                                             <motion.h3
                                                  layoutId={layout ? `title-${testimonial.name}` : undefined}
                                                  className="text-3xl md:text-5xl font-bold uppercase italic text-white tracking-tighter"
                                             >
                                                  {testimonial.name}
                                             </motion.h3>
                                        </div>

                                        <div className="relative text-neutral-300 text-lg md:text-xl font-light leading-relaxed">
                                             <Quote className="h-8 w-8 text-defense-accent/20 absolute -top-4 -left-6" />
                                             <p className="px-2">
                                                  {testimonial.description}
                                             </p>
                                        </div>
                                   </div>
                              </motion.div>
                         </div>
                    )}
               </AnimatePresence>
               <motion.button
                    layoutId={layout ? `card-${testimonial.name}` : undefined}
                    onClick={handleExpand}
                    className="group relative cursor-pointer outline-none"
                    whileHover={{
                         rotateX: 2,
                         rotateY: 2,
                         rotate: 1,
                         scale: 1.02,
                         transition: { duration: 0.3, ease: "easeOut" },
                    }}
               >
                    <div
                         className="rounded-3xl bg-neutral-900 border border-white/10 group-hover:border-defense-accent/30 transition-all duration-500 h-[450px] md:h-[500px] w-72 md:w-80 overflow-hidden flex flex-col items-center justify-center relative z-10 shadow-2xl p-6"
                    >
                         <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                              <Image
                                   className="block w-full h-full object-center object-cover grayscale"
                                   src={backgroundImage}
                                   alt="Background layer"
                                   fill
                              />
                         </div>

                         {/* Decorative blur */}
                         <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-defense-accent/5 blur-3xl rounded-full group-hover:bg-defense-accent/10 transition-all duration-500"></div>

                         <ProfileImage src={testimonial.profileImage} alt={testimonial.name} />

                         <div className="mt-8 text-center space-y-4 z-20">
                              <motion.h4
                                   layoutId={layout ? `title-${testimonial.name}` : undefined}
                                   className="text-white text-xl md:text-2xl font-bold uppercase italic tracking-tight group-hover:text-defense-accent transition-colors"
                              >
                                   {testimonial.name}
                              </motion.h4>

                              <motion.p
                                   layoutId={layout ? `category-${testimonial.name}` : undefined}
                                   className="text-defense-accent/80 font-mono text-[10px] uppercase tracking-widest font-bold"
                              >
                                   {testimonial.designation}
                              </motion.p>

                              <motion.p
                                   className="text-neutral-400 text-sm font-light leading-relaxed line-clamp-3 px-4"
                              >
                                   {testimonial.description}
                              </motion.p>
                         </div>

                         {/* Connect Label */}
                         <div className="mt-6 flex items-center gap-2 text-white/20 group-hover:text-white transition-colors">
                              <span className="text-[10px] font-bold font-mono uppercase tracking-widest">View Profile</span>
                         </div>
                    </div>
               </motion.button>
          </>
     );
};

const ProfileImage = ({ src, alt, ...rest }: ImageProps) => {
     const [isLoading, setLoading] = useState(true);

     return (
          <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] overflow-hidden rounded-full border-2 border-white/10 group-hover:border-defense-accent/50 transition-all duration-500 aspect-square relative z-20">
               <Image
                    className={cn(
                         "transition duration-300 absolute top-0 inset-0 object-cover",
                         isLoading ? "blur-sm" : "blur-0",
                    )}
                    onLoad={() => {
                         setLoading(false);
                    }}
                    src={src}
                    width={rest.width || 120}
                    height={rest.height || 120}
                    loading="lazy"
                    alt={alt || "Profile image"}
                    {...rest}
               />
          </div>
     );
};

// Export the components
export { Carousel, TestimonialCard, ProfileImage };
