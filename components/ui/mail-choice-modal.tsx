'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Globe, ArrowUpRight } from 'lucide-react'

interface MailChoiceModalProps {
     isOpen: boolean
     onClose: () => void
     email: string
}

export function MailChoiceModal({ isOpen, onClose, email }: MailChoiceModalProps) {
     const mailOptions = [
          {
               name: 'Default Mail App',
               icon: Mail,
               url: `mailto:${email}`,
               color: 'bg-white text-black hover:bg-neutral-200',
          },
          {
               name: 'Gmail',
               icon: Globe,
               url: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
               color: 'bg-[#EA4335] text-white hover:bg-[#D93025]',
          },
          {
               name: 'Outlook',
               icon: Globe,
               url: `https://outlook.live.com/mail/0/deeplink/compose?to=${email}`,
               color: 'bg-[#0078D4] text-white hover:bg-[#0064B1]',
          },
          {
               name: 'Yahoo Mail',
               icon: Globe,
               url: `https://compose.mail.yahoo.com/?to=${email}`,
               color: 'bg-[#6001D2] text-white hover:bg-[#5000B0]',
          },
          {
               name: 'Proton Mail',
               icon: Globe,
               url: `https://mail.proton.me/u/0/compose?to=${email}`,
               color: 'bg-[#6D4AFF] text-white hover:bg-[#5A3CD9]',
          },
          {
               name: 'Zoho Mail',
               icon: Globe,
               url: `https://mail.zoho.com/zm/#compose/to=${email}`,
               color: 'bg-[#00A3FE] text-white hover:bg-[#0088D4]',
          },
          {
               name: 'iCloud Mail',
               icon: Globe,
               url: 'https://www.icloud.com/mail/',
               color: 'bg-[#3699F5] text-white hover:bg-[#2B7FCD]',
          },
     ]

     const handleOptionClick = (url: string) => {
          window.open(url, '_blank')
          onClose()
     }

     return (
          <AnimatePresence>
               {isOpen && (
                    <>
                         {/* Backdrop */}
                         <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              onClick={onClose}
                              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                         />

                         {/* Modal */}
                         <motion.div
                              initial={{ opacity: 0, scale: 0.95, y: 20 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.95, y: 20 }}
                              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-neutral-900 border border-white/10 p-6 rounded-2xl shadow-2xl z-[101]"
                         >
                              <div className="flex items-center justify-between mb-6">
                                   <h3 className="text-xl font-mono font-bold text-white">Choose Email Service</h3>
                                   <button
                                        onClick={onClose}
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
                                   >
                                        <X className="w-5 h-5" />
                                   </button>
                              </div>

                              <div className="space-y-3">
                                   {mailOptions.map((option) => (
                                        <button
                                             key={option.name}
                                             onClick={() => handleOptionClick(option.url)}
                                             className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-200 group ${option.color}`}
                                        >
                                             <div className="flex items-center gap-3">
                                                  <option.icon className="w-5 h-5" />
                                                  <span className="font-medium">{option.name}</span>
                                             </div>
                                             <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                                        </button>
                                   ))}
                              </div>

                              <div className="mt-6 text-center">
                                   <p className="text-xs text-neutral-500 font-mono">
                                        Connecting to secure channel...
                                   </p>
                              </div>
                         </motion.div>
                    </>
               )}
          </AnimatePresence>
     )
}
