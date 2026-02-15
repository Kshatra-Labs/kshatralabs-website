'use client';

import React, { useState } from 'react';
import { MailChoiceModal } from '@/components/ui/mail-choice-modal';
import {
     Github,
     Mail,
     MapPin,
     Phone,
     Twitter,
} from 'lucide-react';
import Link from 'next/link';

const data = {
     facebookLink: '#',
     instaLink: '#',
     twitterLink: '#',
     githubLink: 'https://github.com/Kshatra-Labs',
     dribbbleLink: '#',
     services: {
          platforms: '#platforms',
          technology: '#technology',
          vision: '#vision',
          defense: '#',
     },
     about: {
          history: '#',
          team: '#',
          handbook: '#',
          careers: '#',
     },
     help: {
          faqs: '#',
          support: '#',
          livechat: '#',
     },
     contact: {
          email: 'contact@kshatralabs.in',
          phone: '+91 9730458528',
          address: 'Bangalore',
     },
     company: {
          name: 'Kshatra Labs',
          description:
               'Engineering AI-native robotic systems for the next era of national security. Built for contested environments.',
          logo: '', // No logo image yet, handles gracefully usually or we remove img tag
     },
};

const socialLinks = [
     { icon: Twitter, label: 'Twitter', href: data.twitterLink },
     { icon: Github, label: 'GitHub', href: data.githubLink },
     { icon: Mail, label: 'Email', href: `mailto:${data.contact.email}` },
];



const productLinks = [
     { name: 'Aerial Interceptors', href: '/products' },
     { name: 'Sensor Fusion', href: '/products' },
     { name: 'Swarm Intelligence', href: '/products' },
     { name: 'Optical Tracker', href: '/products' },
];

const helpfulLinks = [
     { text: 'Contact Support', href: data.help.support },
     { text: 'Request Briefing', href: 'mailto:contact@kshatralabs.in' },
];

const contactInfo = [
     { icon: Mail, text: data.contact.email, isAddress: false, href: `mailto:${data.contact.email}` },
     { icon: Phone, text: data.contact.phone, isAddress: false, href: `tel:${data.contact.phone.replace(/\s/g, '')}` },
     { icon: MapPin, text: data.contact.address, isAddress: true, href: undefined },
];

export default function Footer4Col() {
     const [isMailModalOpen, setIsMailModalOpen] = useState(false)

     const handleLinkClick = (e: React.MouseEvent, href: string) => {
          if (href === 'mailto:contact@kshatralabs.in') {
               e.preventDefault()
               setIsMailModalOpen(true)
          }
     }

     return (
          <footer id="contact" className="bg-black border-t border-white/10 w-full rounded-t-xl z-20 relative">
               <MailChoiceModal
                    isOpen={isMailModalOpen}
                    onClose={() => setIsMailModalOpen(false)}
                    email="contact@kshatralabs.in"
               />
               <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                         <div>
                              <div className="text-white flex justify-center gap-2 sm:justify-start items-center">
                                   {/* <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                 <div className="h-4 w-4 bg-white rounded-full"></div>
              </div> */}
                                   <span className="text-2xl font-bold font-mono tracking-wider">
                                        {data.company.name.toUpperCase()}
                                   </span>
                              </div>

                              <p className="text-white mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left font-mono text-sm">
                                   {data.company.description}
                              </p>

                              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                                   {socialLinks.map(({ icon: Icon, label, href }) => (
                                        <li key={label}>
                                             <Link
                                                  href={href}
                                                  className="text-white/60 hover:text-white transition"
                                             >
                                                  <span className="sr-only">{label}</span>
                                                  <Icon className="size-5" />
                                             </Link>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2 font-mono text-sm">
                              <div className="text-center sm:text-left">
                                   <div className="space-y-6">
                                        <p className="text-lg font-medium text-white">Products</p>
                                        <ul className="mt-8 space-y-4">
                                             {productLinks.map((link) => (
                                                  <li key={link.name}>
                                                       <Link
                                                            href={link.href}
                                                            className="text-white/60 hover:text-white transition"
                                                       >
                                                            {link.name}
                                                       </Link>
                                                  </li>
                                             ))}
                                        </ul>
                                   </div>
                              </div>

                              <div className="text-center sm:text-left">
                                   <p className="text-lg font-medium text-white">Connect</p>
                                   <ul className="mt-8 space-y-4">
                                        {helpfulLinks.map(({ text, href }) => (
                                             <li key={text}>
                                                  <a
                                                       href={href}
                                                       onClick={(e) => handleLinkClick(e, href)}
                                                       className="text-white/60 hover:text-white transition cursor-pointer"
                                                  >
                                                       {text}
                                                  </a>
                                             </li>
                                        ))}
                                   </ul>
                              </div>

                              <div className="text-center sm:text-left">
                                   <p className="text-lg font-medium text-white">Contact</p>
                                   <ul className="mt-8 space-y-4">
                                        {contactInfo.map(({ icon: Icon, text, isAddress, href }) => {
                                             const content = (
                                                  <>
                                                       <Icon className="size-4 shrink-0" />
                                                       {isAddress ? (
                                                            <address className="not-italic">
                                                                 {text}
                                                            </address>
                                                       ) : (
                                                            <span>
                                                                 {text}
                                                            </span>
                                                       )}
                                                  </>
                                             );

                                             return (
                                                  <li key={text}>
                                                       {href ? (
                                                            <a
                                                                 className="flex items-center justify-center gap-2 sm:justify-start text-white/60 hover:text-white transition cursor-pointer"
                                                                 href={href}
                                                                 onClick={(e) => handleLinkClick(e, href)}
                                                            >
                                                                 {content}
                                                            </a>
                                                       ) : (
                                                            <div className="flex items-center justify-center gap-2 sm:justify-start text-white/40">
                                                                 {content}
                                                            </div>
                                                       )}
                                                  </li>
                                             );
                                        })}
                                   </ul>
                              </div>
                         </div>
                    </div>

                    <div className="mt-12 border-t border-white/10 pt-6">
                         <div className="text-center sm:flex sm:justify-between sm:text-left text-white/40 font-mono text-xs">
                              <p>
                                   <span className="block sm:inline">All Systems Nominal.</span>
                              </p>

                              <p className="mt-4 sm:order-first sm:mt-0">
                                   &copy; {new Date().getFullYear()} {data.company.name}
                              </p>
                         </div>
                    </div>
               </div>
          </footer>
     );
}
