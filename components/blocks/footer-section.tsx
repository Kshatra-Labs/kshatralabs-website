'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MailChoiceModal } from '@/components/ui/mail-choice-modal';
import { useIsMobile } from '@/hooks/use-is-mobile';

export default function Footer4Col() {
     const [isMailModalOpen, setIsMailModalOpen] = useState(false);
     const isMobile = useIsMobile();

     const handleContactClick = (e: React.MouseEvent) => {
          if (!isMobile) {
               e.preventDefault();
               setIsMailModalOpen(true);
          }
     };

     return (
          <footer className="relative z-20 w-full border-t border-[#333] bg-black text-[#eef7f4]">
               <MailChoiceModal
                    isOpen={isMailModalOpen}
                    onClose={() => setIsMailModalOpen(false)}
                    email="contact@kshatralabs.in"
               />

               <div className="h-16 w-full md:h-24" />

               <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                    <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-8">
                         <div className="lg:col-span-5">
                              <h2 className="font-sans text-[28px] font-medium leading-[1.02] tracking-normal text-[#f4fbf9] sm:text-[38px] lg:text-[44px]">
                                   Engineering Autonomous <br className="hidden md:block" />
                                   Defence <strong className="font-medium text-[#2563EB]">Platforms.</strong>
                              </h2>
                         </div>

                         <div className="lg:col-span-7 lg:col-start-6">
                              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                                   <div className="sm:col-start-3 shrink-0">
                                        <button
                                             onClick={handleContactClick}
                                             className="flex h-[52px] w-full items-center justify-center bg-[#eef7f4] px-4 font-sans text-[14px] font-bold uppercase tracking-wide text-[#06110f] transition-colors hover:bg-white"
                                             style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)' }}
                                        >
                                             Reach out to us
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="mb-8 mt-6 w-full">
                         <div className="h-px w-full bg-[#333]" />
                    </div>

                    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
                         <div className="flex flex-col lg:col-span-4">
                              <div className="text-[#eef7f4]">
                                   <Link href="/" className="inline-block w-full max-w-[203px] text-white group">
                                        <div
                                             className="h-8 w-full md:h-10 bg-white group-hover:bg-[#2563EB] transition-colors duration-300"
                                             style={{
                                                  maskImage: 'url(/logo.svg)',
                                                  maskSize: 'contain',
                                                  maskRepeat: 'no-repeat',
                                                  maskPosition: 'left center',
                                                  WebkitMaskImage: 'url(/logo.svg)',
                                                  WebkitMaskSize: 'contain',
                                                  WebkitMaskRepeat: 'no-repeat',
                                                  WebkitMaskPosition: 'left center',
                                             }}
                                        />
                                   </Link>
                                   <div className="h-8 w-full md:h-10" />
                                   <div className="flex flex-col gap-4 text-[#eef7f4]">
                                        <div className="flex flex-col gap-4">
                                             <div className="max-w-[30ch] font-sans text-[14px] leading-[1.35]">
                                                  <p>Autonomous Systems Facility<br />Bangalore, India</p>
                                             </div>
                                             <div className="max-w-[30ch] font-sans text-[14px] leading-[1.35]">
                                                  <p>
                                                       Monday to Friday <br />
                                                       9:00AM to 5:30PM IST
                                                  </p>
                                             </div>
                                             <div className="flex items-center gap-2 hidden">
                                                  <div className="max-w-[27ch] font-sans text-[14px] leading-[1.35]">
                                                       <p>
                                                            <a href="#" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                                                                 Get Directions
                                                            </a>
                                                       </p>
                                                  </div>
                                                  <div className="h-4 w-4 shrink-0">
                                                       <svg width="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="block text-current">
                                                            <path d="M3.33398 8H12.6673M8.66732 4L12.6673 8L8.66732 12" stroke="currentColor" strokeWidth="1.33" strokeLinecap="square" strokeLinejoin="bevel"></path>
                                                       </svg>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                             <div className="h-4 w-4 shrink-0">
                                                  <svg width="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="block text-current">
                                                       <path fillRule="evenodd" clipRule="evenodd" d="M12.6664 1.33594V3.33594H14.6664V6.0026H12.6664V8.0026H9.99969V6.0026H7.99969V3.33594H9.99969V1.33594H12.6664ZM7.60635 10.1493L6.64502 11.7599C5.69683 11.105 4.87531 10.2835 4.22035 9.33527L5.83102 8.37394L4.57835 3.9906L0.679688 4.45727L0.713688 5.08194C0.804684 6.74305 1.27883 8.36057 2.09902 9.80794C2.57967 10.6542 3.17235 11.4316 3.86102 12.1193C4.5487 12.8077 5.32616 13.4002 6.17235 13.8806C7.61972 14.7008 9.23724 15.1749 10.8984 15.2659L11.5224 15.3006L11.9897 11.4019L7.60635 10.1486V10.1493Z" fill="currentColor"></path>
                                                  </svg>
                                             </div>
                                             <div className="font-sans text-[14px] leading-[1.35]">
                                                  <p>
                                                       <a href="tel:+919730458528" className="transition-colors hover:text-white">
                                                            +91 97304 58528
                                                       </a>
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                             <div className="h-4 w-4 shrink-0">
                                                  <svg width="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="block text-current">
                                                       <path fillRule="evenodd" clipRule="evenodd" d="M15.3327 2.33594H0.666016V3.95594L7.99935 8.73927L15.3327 3.95594V2.33594ZM15.3327 5.14994L8.27268 9.7546L7.99935 9.9326L7.72602 9.7546L0.666016 5.14994V13.6693H15.3327V5.14994Z" fill="currentColor"></path>
                                                  </svg>
                                             </div>
                                             <div className="font-sans text-[14px] leading-[1.35]">
                                                  <p>
                                                       <a href="mailto:contact@kshatralabs.in" onClick={handleContactClick} className="transition-colors hover:text-white">
                                                            contact@kshatralabs.in
                                                       </a>
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="lg:col-span-7 lg:col-start-6">
                              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                                   <div className="flex flex-col gap-4">
                                        <div className="font-sans text-[13px] font-semibold uppercase leading-none tracking-[0.05em] text-[#7aa096]">Products</div>
                                        <ul className="flex flex-col gap-4">
                                             <li>
                                                  <Link href="/products/hawk" className="block font-sans text-[14px] font-medium uppercase leading-[1.2] text-[#eef7f4] transition-colors hover:text-white">
                                                       Hawk Interceptor
                                                  </Link>
                                             </li>
                                             <li>
                                                  <Link href="/products" className="block font-sans text-[14px] font-medium uppercase leading-[1.2] text-[#eef7f4] transition-colors hover:text-white">
                                                       Hawkeye Tracking
                                                  </Link>
                                             </li>
                                             <li>
                                                  <Link href="/products" className="block font-sans text-[14px] font-medium uppercase leading-[1.2] text-[#eef7f4] transition-colors hover:text-white">
                                                       APEX Autonomy
                                                  </Link>
                                             </li>
                                             <li>
                                                  <Link href="/products" className="block font-sans text-[14px] font-medium uppercase leading-[1.2] text-[#eef7f4] transition-colors hover:text-white">
                                                       Swarm Systems
                                                  </Link>
                                             </li>
                                        </ul>
                                   </div>
                                   <div className="flex flex-col gap-4">
                                        <div className="font-sans text-[13px] font-semibold uppercase leading-none tracking-[0.05em] text-[#7aa096]">Company</div>
                                        <ul className="flex flex-col gap-4">
                                             <li>
                                                  <Link href="/about/company" className="block font-sans text-[14px] font-medium uppercase leading-[1.2] text-[#eef7f4] transition-colors hover:text-white">
                                                       About Us
                                                  </Link>
                                             </li>
                                             <li>
                                                  <Link href="/about/team" className="block font-sans text-[14px] font-medium uppercase leading-[1.2] text-[#eef7f4] transition-colors hover:text-white">
                                                       Team
                                                  </Link>
                                             </li>
                                             <li>
                                                  <Link href="/contact-us" onClick={handleContactClick} className="block font-sans text-[14px] font-medium uppercase leading-[1.2] text-[#eef7f4] transition-colors hover:text-white">
                                                       Contact Us
                                                  </Link>
                                             </li>
                                        </ul>
                                   </div>
                                   <div className="flex flex-col gap-4">
                                        <div className="font-sans text-[13px] font-semibold uppercase leading-none tracking-[0.05em] text-[#7aa096]">Resources</div>
                                        <ul className="flex flex-col gap-4">
                                             <li>
                                                  <Link href="/careers" className="block font-sans text-[14px] font-medium uppercase leading-[1.2] text-[#eef7f4] transition-colors hover:text-white">
                                                       Careers
                                                  </Link>
                                             </li>
                                             <li>
                                                  <Link href="/terms-of-service" className="block font-sans text-[14px] font-medium uppercase leading-[1.2] text-[#eef7f4] transition-colors hover:text-white">
                                                       Terms of Service
                                                  </Link>
                                             </li>
                                             <li>
                                                  <Link href="/privacy-policy" className="block font-sans text-[14px] font-medium uppercase leading-[1.2] text-[#eef7f4] transition-colors hover:text-white">
                                                       Privacy Policy
                                                  </Link>
                                             </li>
                                        </ul>
                                   </div>
                              </div>

                              <div className="h-8 w-full md:h-12" />

                              <div className="flex items-center gap-6 text-[#7aa096]">
                                   <a href="https://www.youtube.com/@KshatraLabs" target="_blank" rel="noopener noreferrer" className="h-5 w-5 transition-colors hover:text-white">
                                        <svg width="100%" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
                                             <path d="M20.5577 6.94127C20.3386 6.12223 19.6929 5.47652 18.874 5.25747C17.3882 4.85938 11.432 4.85938 11.432 4.85938C11.432 4.85938 5.47583 4.85938 3.99011 5.25747C3.17106 5.47652 2.52535 6.12223 2.30629 6.94127C1.9082 8.42699 1.9082 12.4784 1.9082 12.4784C1.9082 12.4784 1.9082 16.5298 2.30629 18.0155C2.52535 18.8346 3.17106 19.4803 3.99011 19.6994C5.47583 20.0975 11.432 20.0975 11.432 20.0975C11.432 20.0975 17.3882 20.0975 18.874 19.6994C19.694 19.4803 20.3386 18.8346 20.5577 18.0155C20.9558 16.5298 20.9558 12.4784 20.9558 12.4784C20.9558 12.4784 20.9558 8.42699 20.5577 6.94127ZM9.52725 15.7775V9.17938L15.2415 12.4784L9.52725 15.7775Z" fill="currentColor"></path>
                                        </svg>
                                   </a>
                                   <a href="https://www.instagram.com/kshatralabs" target="_blank" rel="noopener noreferrer" className="h-5 w-5 transition-colors hover:text-white">
                                        <svg width="100%" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
                                             <path d="M7.61933 3.90625C4.9898 3.90625 2.85742 6.03863 2.85742 8.66816V16.2872C2.85742 18.9167 4.9898 21.0491 7.61933 21.0491H15.2383C17.8679 21.0491 20.0003 18.9167 20.0003 16.2872V8.66816C20.0003 6.03863 17.8679 3.90625 15.2383 3.90625H7.61933ZM17.1431 5.81102C17.6688 5.81102 18.0955 6.23768 18.0955 6.76339C18.0955 7.28911 17.6688 7.71577 17.1431 7.71577C16.6174 7.71577 16.1908 7.28911 16.1908 6.76339C16.1908 6.23768 16.6174 5.81102 17.1431 5.81102ZM11.4289 7.71577C14.0583 7.71577 16.1908 9.84816 16.1908 12.4777C16.1908 15.1072 14.0583 17.2395 11.4289 17.2395C8.79933 17.2395 6.66694 15.1072 6.66694 12.4777C6.66694 9.84816 8.79933 7.71577 11.4289 7.71577ZM11.4289 9.62054C10.6711 9.62054 9.94436 9.92155 9.40854 10.4574C8.87272 10.9932 8.57171 11.7199 8.57171 12.4777C8.57171 13.2354 8.87272 13.9622 9.40854 14.4979C9.94436 15.0338 10.6711 15.3349 11.4289 15.3349C12.1866 15.3349 12.9133 15.0338 13.4492 14.4979C13.985 13.9622 14.286 13.2354 14.286 12.4777C14.286 11.7199 13.985 10.9932 13.4492 10.4574C12.9133 9.92155 12.1866 9.62054 11.4289 9.62054Z" fill="currentColor"></path>
                                        </svg>
                                   </a>
                                   <a href="https://www.facebook.com/kshatralabs" target="_blank" rel="noopener noreferrer" className="h-5 w-5 transition-colors hover:text-white">
                                        <svg width="100%" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
                                             <path d="M18.0935 3.90625H4.76023C3.70785 3.90625 2.85547 4.75863 2.85547 5.81102V19.1443C2.85547 20.1967 3.70785 21.0491 4.76023 21.0491H12.0183V14.4195H9.7869V11.8243H12.0183V9.91482C12.0183 7.70149 13.3717 6.49482 15.3469 6.49482C16.0126 6.49291 16.6774 6.5272 17.3392 6.59482V8.90911H15.9792C14.9031 8.90911 14.6935 9.41768 14.6935 10.1682V11.8206H17.265L16.9307 14.4158H14.6783V21.0491H18.0935C19.146 21.0491 19.9983 20.1967 19.9983 19.1443V5.81102C19.9983 4.75863 19.146 3.90625 18.0935 3.90625Z" fill="currentColor"></path>
                                        </svg>
                                   </a>
                                   <a href="https://x.com/kshatralabs" target="_blank" rel="noopener noreferrer" className="h-5 w-5 transition-colors hover:text-white">
                                        <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
                                             <path d="M5.87672 3.90625C4.52595 3.90625 3.42773 5.00447 3.42773 6.35523V18.6001C3.42773 19.9509 4.52595 21.0491 5.87672 21.0491H18.1216C19.4724 21.0491 20.5706 19.9509 20.5706 18.6001V6.35523C20.5706 5.00447 19.4724 3.90625 18.1216 3.90625H5.87672ZM17.2453 7.12054L13.2734 11.6589L17.9456 17.8349H14.2874L11.4252 14.0887L8.14585 17.8349H6.32825L10.5757 12.979L6.09483 7.12054H9.84482L12.4354 10.5453L15.4277 7.12054H17.2453ZM15.7989 16.7481L9.29763 8.14987H8.21473L14.7886 16.7481H15.795H15.7989Z" fill="currentColor"></path>
                                        </svg>
                                   </a>
                                   <a href="https://www.linkedin.com/company/kshatralabs/" target="_blank" rel="noopener noreferrer" className="h-5 w-5 transition-colors hover:text-white">
                                        <svg width="100%" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
                                             <path d="M18.0955 3.90625H4.76219C3.7098 3.90625 2.85742 4.75863 2.85742 5.81102V19.1443C2.85742 20.1967 3.7098 21.0491 4.76219 21.0491H18.0955C19.1479 21.0491 20.0003 20.1967 20.0003 19.1443V5.81102C20.0003 4.75863 19.1479 3.90625 18.0955 3.90625ZM8.57171 17.2395H6.16885V10.5729H8.57171V17.2395ZM7.3279 9.35102C6.59362 9.35102 6.10314 8.86148 6.10314 8.20816C6.10314 7.55482 6.59266 7.0653 7.40885 7.0653C8.14314 7.0653 8.63362 7.55482 8.63362 8.20816C8.63362 8.86148 8.14408 9.35102 7.3279 9.35102ZM17.1431 17.2395H14.8174V13.5958C14.8174 12.5881 14.1974 12.3558 13.9651 12.3558C13.7326 12.3558 12.9574 12.511 12.9574 13.5958C12.9574 13.751 12.9574 17.2395 12.9574 17.2395H10.5546V10.5729H12.9574V11.5034C13.2669 10.9605 13.8869 10.5729 15.0498 10.5729C16.2126 10.5729 17.1431 11.5034 17.1431 13.5958V17.2395Z" fill="currentColor"></path>
                                        </svg>
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="h-24 w-full md:h-32" />
          </footer>
     );
}
