'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
     X, 
     ShieldAlert, 
     Lock, 
     CheckCircle2, 
     Send, 
     User,
     Mail,
     Building,
     Phone
} from 'lucide-react'

interface HawkAdvisorModalProps {
     isOpen: boolean;
     onClose: () => void;
}

export function HawkAdvisorModal({ isOpen, onClose }: HawkAdvisorModalProps) {
     const [step, setStep] = useState<'form' | 'submitted'>('form')
     const [formData, setFormData] = useState({
          fullName: '',
          organization: '',
          officialEmail: '',
          phone: '',
          roleType: 'Armed Forces & Tactical Command',
          deploymentInterest: 'Border & FOB Protection',
          unitsRequired: 'Single Evaluation Pod (4 Canisters)',
          message: ''
     })
     const [isSubmitting, setIsSubmitting] = useState(false)

     const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault()
          setIsSubmitting(true)
          setTimeout(() => {
               setIsSubmitting(false)
               setStep('submitted')
          }, 1200)
     }

     return (
          <AnimatePresence>
               {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                         {/* Backdrop */}
                         <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              onClick={onClose}
                              className="fixed inset-0 bg-black/85 backdrop-blur-2xl"
                         />

                         {/* Modal Container */}
                         <motion.div
                              initial={{ opacity: 0, scale: 0.95, y: 20 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.95, y: 20 }}
                              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              className="relative z-10 w-full max-w-3xl rounded-[2rem] bg-[#080808] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden my-auto text-white"
                         >
                              {/* Top Security Banner */}
                              <div className="flex items-center justify-between px-6 sm:px-8 py-4 bg-white/[0.04] border-b border-white/10 font-mono text-xs">
                                   <div className="flex items-center gap-2 text-[#cc1414] font-bold uppercase tracking-widest">
                                        <ShieldAlert className="w-4 h-4" />
                                        <span>CONFIDENTIAL BRIEFING REQUEST</span>
                                   </div>
                                   <div className="flex items-center gap-4">
                                        <span className="hidden sm:inline-block text-white/40">SECURE CHANNEL</span>
                                        <button
                                             onClick={onClose}
                                             className="p-1.5 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                                             aria-label="Close briefing modal"
                                        >
                                             <X className="w-5 h-5" />
                                        </button>
                                   </div>
                              </div>

                              {step === 'form' ? (
                                   <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
                                        <div className="space-y-2">
                                             <h3 
                                                  className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white"
                                                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                                             >
                                                  Request Technical Briefing
                                             </h3>
                                             <p className="text-sm sm:text-base text-neutral-400 font-light">
                                                  Speak directly with our engineering team for full performance specifications, live demonstration dates, and deployment timelines.
                                             </p>
                                        </div>

                                        {/* Form Grid */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                                             <div className="space-y-1.5">
                                                  <label className="font-mono text-xs uppercase tracking-wider text-white/70 block">Full Name *</label>
                                                  <div className="relative">
                                                       <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                                       <input
                                                            type="text"
                                                            required
                                                            placeholder="Col. Vikram Singh / Dr. A. Sharma"
                                                            value={formData.fullName}
                                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/60 border border-white/15 focus:border-[#cc1414] focus:outline-none text-sm text-white placeholder:text-white/25 transition-colors font-mono"
                                                       />
                                                  </div>
                                             </div>

                                             <div className="space-y-1.5">
                                                  <label className="font-mono text-xs uppercase tracking-wider text-white/70 block">Organization / Agency *</label>
                                                  <div className="relative">
                                                       <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                                       <input
                                                            type="text"
                                                            required
                                                            placeholder="Indian Army / DRDO / Ministry"
                                                            value={formData.organization}
                                                            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                                                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/60 border border-white/15 focus:border-[#cc1414] focus:outline-none text-sm text-white placeholder:text-white/25 transition-colors font-mono"
                                                       />
                                                  </div>
                                             </div>

                                             <div className="space-y-1.5">
                                                  <label className="font-mono text-xs uppercase tracking-wider text-white/70 block">Official Email Address *</label>
                                                  <div className="relative">
                                                       <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                                       <input
                                                            type="email"
                                                            required
                                                            placeholder="v.singh@gov.in or official email"
                                                            value={formData.officialEmail}
                                                            onChange={(e) => setFormData({ ...formData, officialEmail: e.target.value })}
                                                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/60 border border-white/15 focus:border-[#cc1414] focus:outline-none text-sm text-white placeholder:text-white/25 transition-colors font-mono"
                                                       />
                                                  </div>
                                             </div>

                                             <div className="space-y-1.5">
                                                  <label className="font-mono text-xs uppercase tracking-wider text-white/70 block">Contact Phone</label>
                                                  <div className="relative">
                                                       <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                                       <input
                                                            type="tel"
                                                            placeholder="+91 / Official Contact"
                                                            value={formData.phone}
                                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/60 border border-white/15 focus:border-[#cc1414] focus:outline-none text-sm text-white placeholder:text-white/25 transition-colors font-mono"
                                                       />
                                                  </div>
                                             </div>

                                             <div className="space-y-1.5">
                                                  <label className="font-mono text-xs uppercase tracking-wider text-white/70 block">Primary Role</label>
                                                  <select
                                                       value={formData.roleType}
                                                       onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                                                       className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 focus:border-[#cc1414] focus:outline-none text-sm text-white transition-colors font-mono"
                                                  >
                                                       <option value="Armed Forces & Tactical Command">Armed Forces / Command</option>
                                                       <option value="Government Procurement">Government Procurement</option>
                                                       <option value="System Integrator">Defense System Integrator</option>
                                                       <option value="Strategic Research">Research & Development</option>
                                                       <option value="Other Authorized Entity">Other Authorized Partner</option>
                                                  </select>
                                             </div>

                                             <div className="space-y-1.5">
                                                  <label className="font-mono text-xs uppercase tracking-wider text-white/70 block">Estimated Quantity</label>
                                                  <select
                                                       value={formData.unitsRequired}
                                                       onChange={(e) => setFormData({ ...formData, unitsRequired: e.target.value })}
                                                       className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 focus:border-[#cc1414] focus:outline-none text-sm text-white transition-colors font-mono"
                                                  >
                                                       <option value="Single Evaluation Pod (4 Canisters)">Single Evaluation Pod (4 Canisters)</option>
                                                       <option value="10 - 50 Canisters (Base Protection)">10 - 50 Canisters (Base Protection)</option>
                                                       <option value="100+ Canisters (Theater Defense)">100+ Canisters (Theater Defense)</option>
                                                       <option value="Custom Integration">Custom Integration</option>
                                                  </select>
                                             </div>
                                        </div>

                                        <div className="space-y-1.5">
                                             <label className="font-mono text-xs uppercase tracking-wider text-white/70 block">Questions or Deployment Notes</label>
                                             <textarea
                                                  rows={3}
                                                  placeholder="Tell us about your operational requirements, target types, or preferred evaluation timeframe..."
                                                  value={formData.message}
                                                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                  className="w-full p-4 rounded-xl bg-black/60 border border-white/15 focus:border-[#cc1414] focus:outline-none text-sm text-white placeholder:text-white/25 transition-colors font-mono resize-none"
                                             />
                                        </div>

                                        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                                             <div className="flex items-center gap-2 font-mono text-xs text-white/60">
                                                  <Lock className="w-4 h-4 text-emerald-400" />
                                                  <span>CONFIDENTIAL & ENCRYPTED SUBMISSION</span>
                                             </div>

                                             <button
                                                  type="submit"
                                                  disabled={isSubmitting}
                                                  style={{ clipPath: 'polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)' }}
                                                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-none bg-white text-black font-mono text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#cc1414] hover:text-white disabled:opacity-50 disabled:pointer-events-none"
                                             >
                                                  {isSubmitting ? (
                                                       <span>SENDING...</span>
                                                  ) : (
                                                       <>
                                                            <span>SEND BRIEFING REQUEST</span>
                                                            <Send className="w-4 h-4" />
                                                       </>
                                                  )}
                                             </button>
                                        </div>
                                   </form>
                              ) : (
                                   <div className="p-8 sm:p-14 text-center space-y-6">
                                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                                             <CheckCircle2 className="w-8 h-8" />
                                        </div>
                                        
                                        <div className="space-y-2">
                                             <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
                                                  REQUEST RECEIVED
                                             </span>
                                             <h3 className="text-3xl font-black uppercase tracking-tight text-white" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                                  Thank You for Your Request
                                             </h3>
                                             <p className="text-base text-neutral-300 font-light max-w-lg mx-auto">
                                                  Our engineering team has received your briefing request. An authorized technical coordinator will verify your credentials and reach out within 4 hours.
                                             </p>
                                        </div>

                                        <div className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl max-w-md mx-auto font-mono text-xs text-left space-y-2 text-white/80">
                                             <div className="flex justify-between">
                                                  <span className="text-white/40">NAME:</span>
                                                  <span>{formData.fullName}</span>
                                             </div>
                                             <div className="flex justify-between">
                                                  <span className="text-white/40">ORGANIZATION:</span>
                                                  <span>{formData.organization}</span>
                                             </div>
                                             <div className="flex justify-between">
                                                  <span className="text-white/40">STATUS:</span>
                                                  <span className="text-emerald-400 font-bold">VERIFIED</span>
                                             </div>
                                        </div>

                                        <div className="pt-4">
                                             <button
                                                  onClick={() => {
                                                       setStep('form')
                                                       onClose()
                                                  }}
                                                  className="px-8 py-3.5 rounded-full bg-white/[0.1] hover:bg-white/[0.15] border border-white/20 text-white font-mono text-xs font-bold tracking-widest uppercase transition-all"
                                             >
                                                  CLOSE WINDOW
                                             </button>
                                        </div>
                                   </div>
                              )}
                         </motion.div>
                    </div>
               )}
          </AnimatePresence>
     )
}
