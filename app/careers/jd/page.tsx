import React from 'react'
import { Header } from '@/components/blocks/header'
import FooterSection from '@/components/blocks/footer-section'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function JobDescriptionsPage() {
     return (
          <div className="relative min-h-screen bg-black text-white selection:bg-white/20 font-sans">
               <Header />

               {/* Background Grid Pattern */}
               <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

               <div className="relative z-10 pt-32 md:pt-40 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
                    
                    <div className="mb-16">
                         <Link href="/careers" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors font-mono text-sm uppercase tracking-widest mb-8">
                              <ArrowLeft className="w-4 h-4" /> Back to Careers
                         </Link>
                         <h1 className="text-4xl md:text-6xl font-black font-heading uppercase tracking-tighter mb-6">
                              Full Job <span className="text-defense-accent">Descriptions</span>
                         </h1>
                         <div className="space-y-4 text-xl text-neutral-300 font-light leading-relaxed">
                              <p>
                                   <strong className="text-white font-bold">Kshatra Labs</strong> is building the next generation of autonomous robotic systems across air, land, sea, and space. Starting with our flagship product: an AI-powered autonomous aerial interceptor designed for modern counter-UAS threats. Your role directly contributes to our mission of building intelligent machines that can sense, reason, and act autonomously in dynamic, high stakes environments.
                              </p>
                         </div>
                    </div>

                    <div className="space-y-24">
                         
                         {/* ======================= TECHNICAL CATEGORY ======================= */}
                         <section>
                              <div className="flex items-center mb-12">
                                   <div className="bg-defense-accent px-6 py-2">
                                        <h2 className="text-2xl font-bold font-mono uppercase tracking-widest text-black">TECHNICAL</h2>
                                   </div>
                                   <div className="h-px bg-white/20 flex-grow ml-6"></div>
                              </div>

                              <div className="space-y-12">
                                   {/* ROBOTICS ENGINEER */}
                                   <div className="border border-white/10 bg-white/5 p-8 relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors"></div>
                                        <div className="text-xs font-mono uppercase tracking-widest text-defense-accent mb-2">Robotic Engineering</div>
                                        <h3 className="text-2xl font-bold font-mono text-white mb-6 uppercase">ROBOTICS Engineer</h3>
                                        <p className="text-sm font-mono text-neutral-400 mb-4 uppercase">This position may require, Working on:</p>
                                        <ul className="list-square list-inside space-y-3 text-neutral-300 ml-2 font-light leading-relaxed">
                                             <li>Working with ROS2. Work with various different Autonomy stacks.</li>
                                             <li>Writing low-level vehicle controllers.</li>
                                             <li>Gain in-depth implementation-level knowledge of C++ and Python.</li>
                                             <li>Work with various control system concepts. Work on SLAM, path planning, behavioural trees.</li>
                                             <li>Work on reinforcement learning and RL based Sim2Real.</li>
                                             <li>Work with multiple high-fidelity simulators, including Gazebo and ISAAC Sim.</li>
                                        </ul>
                                        <div className="mt-8 pt-6 border-t border-white/10">
                                             <a href="https://docs.google.com/forms/d/e/1FAIpQLScosNgKSIR6HypQcaWA6JGXlxTKaBT1-VaysAabRRitcOdVuA/viewform" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-sm font-bold uppercase tracking-widest">
                                                  Apply Now <ArrowRight className="w-4 h-4" />
                                             </a>
                                        </div>
                                   </div>

                                   {/* MECHANICAL ENGINEER */}
                                   <div className="border border-white/10 bg-white/5 p-8 relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors"></div>
                                        <div className="text-xs font-mono uppercase tracking-widest text-defense-accent mb-2">Mechanical Engineer</div>
                                        <h3 className="text-2xl font-bold font-mono text-white mb-6 uppercase">Mechanical Engineer</h3>
                                        <p className="text-sm font-mono text-neutral-400 mb-4 uppercase">This position may require, Working on:</p>
                                        <ul className="list-square list-inside space-y-3 text-neutral-300 ml-2 font-light leading-relaxed">
                                             <li>Design the UAV airframe from scratch based on high-level mission and size requirements.</li>
                                             <li>Develop the external geometry with a focus on minimizing aerodynamic drag.</li>
                                             <li>Perform CFD analysis to estimate drag coefficient (Cd) and understand flow behavior.</li>
                                             <li>Iterate the design to reduce drag while maintaining aerodynamic stability and performance.</li>
                                             <li>Perform FEA to validate structural strength, stiffness, and load paths of the airframe.</li>
                                             <li>Balance aerodynamic efficiency with weight, manufacturability, and structural constraints.</li>
                                        </ul>
                                        <div className="mt-8 pt-6 border-t border-white/10">
                                             <a href="https://docs.google.com/forms/d/e/1FAIpQLScosNgKSIR6HypQcaWA6JGXlxTKaBT1-VaysAabRRitcOdVuA/viewform" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-sm font-bold uppercase tracking-widest">
                                                  Apply Now <ArrowRight className="w-4 h-4" />
                                             </a>
                                        </div>
                                   </div>

                                   {/* DRONE ENGINEER */}
                                   <div className="border border-white/10 bg-white/5 p-8 relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors"></div>
                                        <div className="text-xs font-mono uppercase tracking-widest text-defense-accent mb-2">Drone Engineer</div>
                                        <h3 className="text-2xl font-bold font-mono text-white mb-6 uppercase">Drone Engineer</h3>
                                        <p className="text-sm font-mono text-neutral-400 mb-4 uppercase">This position may require, Working on:</p>
                                        <ul className="list-square list-inside space-y-3 text-neutral-300 ml-2 font-light leading-relaxed">
                                             <li>Design, assemble, and integrate multirotor and fixed-wing UAV platforms, including airframe, propulsion, avionics, and payloads.</li>
                                             <li>Conduct hands-on R&D on physical drone systems, testing new configurations, materials, and components to improve performance, endurance, and reliability.</li>
                                             <li>Perform ground tests and flight tests; diagnose failures, iterate designs, and implement rapid hardware fixes.</li>
                                             <li>Work with sensors, flight controllers, power systems, and communication modules; ensure clean wiring, weight balance, and robustness.</li>
                                             <li>Support prototype manufacturing, repairs, and field deployments, ensuring repeatability and build quality.</li>
                                             <li>Document builds, test results, and design changes to support continuous improvement and scale-up.</li>
                                        </ul>
                                        <div className="mt-8 pt-6 border-t border-white/10">
                                             <a href="https://docs.google.com/forms/d/e/1FAIpQLScosNgKSIR6HypQcaWA6JGXlxTKaBT1-VaysAabRRitcOdVuA/viewform" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-sm font-bold uppercase tracking-widest">
                                                  Apply Now <ArrowRight className="w-4 h-4" />
                                             </a>
                                        </div>
                                   </div>

                                   {/* SOFTWARE ENGINEER */}
                                   <div className="border border-white/10 bg-white/5 p-8 relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors"></div>
                                        <div className="text-xs font-mono uppercase tracking-widest text-defense-accent mb-2">Software Engineer</div>
                                        <h3 className="text-2xl font-bold font-mono text-white mb-6 uppercase">SOFTWARE Engineer</h3>
                                        <p className="text-sm font-mono text-neutral-400 mb-4 uppercase">This position may require, Working on:</p>
                                        
                                        <div className="mb-8">
                                             <h4 className="text-white font-bold font-mono mb-3">Core Responsibilities:</h4>
                                             <ul className="list-square list-inside space-y-3 text-neutral-300 ml-2 font-light leading-relaxed">
                                                  <li><strong className="text-white font-medium">Platform Architecture:</strong> Architect and develop a scalable, Linux-based Command and Control (C2) platform to supervise and command autonomous swarm systems.</li>
                                                  <li><strong className="text-white font-medium">Swarm Command:</strong> Design the overarching swarm command interfaces and state machines, translating high-level operator commands into distributed tasks for edge autonomy nodes.</li>
                                                  <li><strong className="text-white font-medium">Networking & Telemetry:</strong> Develop high-performance, low-latency networking architectures. Handle distributed messaging and telemetry over degraded or low-bandwidth networks.</li>
                                                  <li><strong className="text-white font-medium">Data Ingestion:</strong> Build resilient pipelines to ingest, time-sync, and process MAVLink telemetry and external sensor data (Radar, Vision) into a unified Common Operating Picture (COP).</li>
                                                  <li><strong className="text-white font-medium">Native GUI Development:</strong> Design and build the real-time, native Linux operator interface (using Qt/QML or similar) to visualize high-throughput geospatial and mission data.</li>
                                             </ul>
                                        </div>

                                        <div className="mb-8">
                                             <h4 className="text-white font-bold font-mono mb-3">Required Technical Stack to List:</h4>
                                             <ul className="list-square list-inside space-y-3 text-neutral-300 ml-2 font-light leading-relaxed">
                                                  <li><strong className="text-white">Languages:</strong> Modern C++ and Python.</li>
                                                  <li><strong className="text-white">OS:</strong> Deep Linux systems programming experience.</li>
                                                  <li><strong className="text-white">Networking:</strong> Middleware and messaging protocols (ROS2).</li>
                                                  <li><strong className="text-white">Data:</strong> Data pipelines</li>
                                             </ul>
                                        </div>

                                        <div className="mt-8 pt-8 border-t border-white/10">
                                             <h4 className="text-defense-accent font-bold font-mono tracking-widest uppercase mb-6 text-sm">Notes & Specifics</h4>
                                             <div className="space-y-6">
                                                  <div>
                                                       <h5 className="text-white font-bold mb-2">Architecture</h5>
                                                       <p className="text-neutral-400 font-light text-sm leading-relaxed">Architect and develop a scalable, Linux-based Command and Control (C2) platform to supervise and command autonomous swarm systems. Experience building Common Operating Picture (COP) software or modern defense tech platforms (e.g., Lattice-style sensor fusion and asset management) is highly desirable.</p>
                                                  </div>
                                                  <div>
                                                       <h5 className="text-white font-bold mb-2">Swarm operation</h5>
                                                       <p className="text-neutral-400 font-light text-sm leading-relaxed">Design the overarching swarm command interfaces and state machines. You will build the backend logic that translates high-level operator commands (e.g., 'form a perimeter', 'search this sector') into distributed tasks for the edge autonomy stacks to execute.</p>
                                                  </div>
                                                  <div>
                                                       <h5 className="text-white font-bold mb-2">Networks</h5>
                                                       <p className="text-neutral-400 font-light text-sm leading-relaxed">Develop high-performance, low-latency networking architectures in modern C++ and Python on Linux. Must have deep expertise in distributed messaging systems (ROS2) and handling telemetry over degraded or low-bandwidth networks.</p>
                                                  </div>
                                                  <div>
                                                       <h5 className="text-white font-bold mb-2">Sensor fusion</h5>
                                                       <p className="text-neutral-400 font-light text-sm leading-relaxed">Build resilient data pipelines to ingest, time-sync, and process external sensor data (Radar, Vision) and MAVLink telemetry from the edge nodes into a unified system state.</p>
                                                  </div>
                                                  <div>
                                                       <h5 className="text-white font-bold mb-2">Operator UI</h5>
                                                       <p className="text-neutral-400 font-light text-sm leading-relaxed">Design and build the real-time operator interface for swarm supervision. Must have experience visualizing high-throughput geospatial and telemetry data without performance degradation. Familiarity with modern frontend frameworks (e.g., React, Vue) and geospatial/3D rendering tools (e.g., CesiumJS, Mapbox, or WebGL) is highly preferred.</p>
                                                  </div>
                                                  <div>
                                                       <h5 className="text-white font-bold mb-2">Specifics</h5>
                                                       <p className="text-neutral-400 font-light text-sm leading-relaxed">Design and develop a high-performance, native Linux desktop application for real-time swarm supervision. Extensive experience with C++ GUI frameworks (e.g., Qt/QML) or similar native toolkits is required to smoothly render low-latency geospatial data, radar tracks, and continuous swarm telemetry.</p>
                                                  </div>
                                             </div>
                                        </div>
                                        
                                        <div className="mt-8 pt-6 border-t border-white/10">
                                             <a href="https://docs.google.com/forms/d/e/1FAIpQLScosNgKSIR6HypQcaWA6JGXlxTKaBT1-VaysAabRRitcOdVuA/viewform" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-sm font-bold uppercase tracking-widest">
                                                  Apply Now <ArrowRight className="w-4 h-4" />
                                             </a>
                                        </div>
                                   </div>

                                   {/* ELECTRONICS ENGINEER */}
                                   <div className="border border-white/10 bg-white/5 p-8 relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors"></div>
                                        <div className="text-xs font-mono uppercase tracking-widest text-defense-accent mb-2">Electronics engineer</div>
                                        <h3 className="text-2xl font-bold font-mono text-white mb-6 uppercase">ELECTRONICS Engineer</h3>
                                        <p className="text-sm font-mono text-neutral-400 mb-4 uppercase">This position may require, Working on:</p>
                                        <ul className="list-square list-inside space-y-3 text-neutral-300 ml-2 font-light leading-relaxed">
                                             <li>Schematic capture, PCB layout and DFM for flight controllers, power distribution boards, sensor interface boards and RF coexistence layouts.</li>
                                             <li>Work through high-speed design constraints, impedance control, EMI/EMC mitigation and thermal considerations for small airframes.</li>
                                             <li>Component selection, bill-of-materials optimisation and supplier engagement for prototype runs.</li>
                                             <li>PCB bring-up, power sequencing tests, PMIC integration and bench validation for motor controllers and sensor subsystems.</li>
                                             <li>Firmware interfacing support for microcontroller/FPGA boards (bootstrapping, UART/SPI/I2C bring-up).</li>
                                             <li>Produce assembly files, test jigs, and post-production validation scripts.</li>
                                             <li>Coordinate with mechanical and systems engineers to ensure electrical fit, mass budget and vibration survivability.</li>
                                        </ul>
                                        <div className="mt-8 pt-6 border-t border-white/10">
                                             <a href="https://docs.google.com/forms/d/e/1FAIpQLScosNgKSIR6HypQcaWA6JGXlxTKaBT1-VaysAabRRitcOdVuA/viewform" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-sm font-bold uppercase tracking-widest">
                                                  Apply Now <ArrowRight className="w-4 h-4" />
                                             </a>
                                        </div>
                                   </div>

                                   {/* AI ENGINEER */}
                                   <div className="border border-white/10 bg-white/5 p-8 relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors"></div>
                                        <div className="text-xs font-mono uppercase tracking-widest text-defense-accent mb-2">AI Engineer</div>
                                        <h3 className="text-2xl font-bold font-mono text-white mb-6 uppercase">2. AI Engineer - Computer Vision & Perception</h3>
                                        <ul className="list-square list-inside space-y-3 text-neutral-300 ml-2 font-light leading-relaxed mb-8">
                                             <li><strong className="text-white font-medium">Computer Vision:</strong> Develop and optimize real-time 3D object detection, segmentation, and tracking algorithms.</li>
                                             <li><strong className="text-white font-medium">Spatial Perception:</strong> Implement camera calibration, stereo vision, and high-accuracy depth estimation pipelines.</li>
                                             <li><strong className="text-white font-medium">Model Acceleration:</strong> Oversee model training and deployment with hardware acceleration using CUDA and TensorRT.</li>
                                             <li><strong className="text-white font-medium">Frameworks:</strong> Utilize PyTorch for large-scale model training and streamlined production deployment.</li>
                                             <li><strong className="text-white font-medium">Edge Optimization:</strong> Deploy and optimize vision models for NVIDIA Jetson and specialized embedded platforms.</li>
                                             <li><strong className="text-white font-medium">Sensor Fusion:</strong> Collaborate on multi-modal fusion algorithms combining camera streams and radar data.</li>
                                        </ul>
                                        <div className="mt-8 pt-8 border-t border-white/10">
                                             <h4 className="text-defense-accent font-bold font-mono tracking-widest uppercase mb-6 text-sm">AI Notes</h4>
                                             <ul className="space-y-4 text-neutral-300 font-light leading-relaxed">
                                                  <li className="flex items-start gap-3"><span className="text-defense-accent mt-1">-</span><p>Proper Python skills; has worked with pytorch before.</p></li>
                                                  <li className="flex items-start gap-3"><span className="text-defense-accent mt-1">-</span><p>Decent with building novel/foundational models (theoretical knowledge) rather than just application based AI model building/usage. Most important: should have good architectural knowledge than just to train models.</p></li>
                                                  <li className="flex items-start gap-3"><span className="text-defense-accent mt-1">-</span><p>Build a system which fulfills an end purpose rather than using AI for the sake of using; meaning if something can be built better or similar without the use of AI, then he should not go for AI.</p></li>
                                                  <li className="flex items-start gap-3"><span className="text-defense-accent mt-1">-</span><p>Has proper tooling experience/knowledge.</p></li>
                                                  <li className="flex items-start gap-3"><span className="text-defense-accent mt-1">-</span><p>Having basic computer vision knowledge is a must.</p></li>
                                                  <li className="flex items-start gap-3"><span className="text-defense-accent mt-1">-</span><p>Should be comfortable with deployment, basic low-level and hardware knowledge is a must.</p></li>
                                                  <li className="flex items-start gap-3"><span className="text-defense-accent mt-1">-</span><p>Should be decent with data.</p></li>
                                             </ul>
                                        </div>
                                        <div className="mt-8 pt-6 border-t border-white/10">
                                             <a href="https://docs.google.com/forms/d/e/1FAIpQLScosNgKSIR6HypQcaWA6JGXlxTKaBT1-VaysAabRRitcOdVuA/viewform" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-sm font-bold uppercase tracking-widest">
                                                  Apply Now <ArrowRight className="w-4 h-4" />
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </section>

                         {/* ======================= MANAGEMENT CATEGORY ======================= */}
                         <section>
                              <div className="flex items-center mb-12">
                                   <div className="bg-green-500 px-6 py-2">
                                        <h2 className="text-2xl font-bold font-mono uppercase tracking-widest text-black">MANAGEMENT</h2>
                                   </div>
                                   <div className="h-px bg-white/20 flex-grow ml-6"></div>
                              </div>

                              <div className="bg-white/5 border border-white/10 p-6 md:p-8 mb-12">
                                   <p className="text-neutral-300 font-light leading-relaxed">
                                        <strong className="text-white font-medium">KshatraLabs</strong> employs a highly selective, flat management model prioritizing rapid, impactful contribution. This structure facilitates agile development on projects that often intersect with critical technological domains, contributing subtly but significantly to the nation's strategic and defensive capabilities. Interns are uniquely positioned within this environment, entrusted with substantive roles that directly influence advanced research outcomes. Their involvement is a testament to their potential, positioning them within an elite group whose innovations not only drive company success but also support broader national technological resilience and progress.
                                   </p>
                              </div>

                              <div className="space-y-12">
                                   {/* MARKETING MANAGER */}
                                   <div className="border border-white/10 bg-white/5 p-8 relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-green-500/50 group-hover:bg-green-400 transition-colors"></div>
                                        <h3 className="text-2xl font-bold font-mono text-white mb-6 uppercase">Marketting Manager</h3>
                                        <p className="text-sm font-mono text-neutral-400 mb-4 uppercase">Responsibilities may include:</p>
                                        <ul className="list-square list-inside space-y-3 text-neutral-300 ml-2 font-light leading-relaxed">
                                             <li>Assist in planning and executing marketing campaigns across digital channels including social media, email, and content platforms.</li>
                                             <li>Conduct market research and competitor analysis to identify trends, user behavior, and growth opportunities.</li>
                                             <li>Support brand positioning, messaging, and content creation in coordination with design and product teams.</li>
                                             <li>Track campaign performance, prepare reports, and derive actionable insights using basic analytics tools.</li>
                                             <li>Help manage partnerships, events, and outreach initiatives to improve brand visibility and lead generation.</li>
                                        </ul>
                                        <div className="mt-8 pt-6 border-t border-white/10">
                                             <a href="https://docs.google.com/forms/d/e/1FAIpQLScosNgKSIR6HypQcaWA6JGXlxTKaBT1-VaysAabRRitcOdVuA/viewform" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-sm font-bold uppercase tracking-widest">
                                                  Apply Now <ArrowRight className="w-4 h-4" />
                                             </a>
                                        </div>
                                   </div>

                                   {/* BUSINESS DEVELOPER */}
                                   <div className="border border-white/10 bg-white/5 p-8 relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-green-500/50 group-hover:bg-green-400 transition-colors"></div>
                                        <h3 className="text-2xl font-bold font-mono text-white mb-6 uppercase">Business Developer</h3>
                                        <p className="text-sm font-mono text-neutral-400 mb-4 uppercase">Responsibilities may include:</p>
                                        <ul className="list-square list-inside space-y-3 text-neutral-300 ml-2 font-light leading-relaxed mb-6">
                                             <li>Identify and pursue new business opportunities, partnerships, and strategic collaborations aligned with company goals.</li>
                                             <li>Build and maintain relationships with potential clients, partners, and key stakeholders through meetings, calls, and follow-ups.</li>
                                             <li>Conduct market research to understand customer needs, industry trends, and competitive landscape.</li>
                                             <li>Support deal structuring, proposal creation, and negotiations in coordination with leadership and internal teams.</li>
                                             <li>Track leads, manage the sales pipeline, and report progress, insights, and growth opportunities.</li>
                                        </ul>
                                        
                                        <div className="space-y-6 pt-6 border-t border-white/10">
                                             <ul className="list-decimal list-inside space-y-3 text-neutral-300 ml-2 font-light leading-relaxed">
                                                  <li>Analyze defense technologies, procurement trends, and emerging threats to support strategic decision-making.</li>
                                                  <li>Conduct in-depth research on military policies, defense budgets, and geopolitical developments.</li>
                                                  <li>Produce reports, briefs, and policy recommendations for internal and external stakeholders.</li>
                                                  <li>Monitor and synthesize open-source intelligence (OSINT) and industry publications.</li>
                                                  <li>Collaborate with cross-functional teams to align defense insights with R&D, strategy, and investment priorities.</li>
                                             </ul>
                                             
                                             <ul className="list-square list-inside space-y-3 text-neutral-300 ml-2 font-light leading-relaxed">
                                                  <li>Identify and evaluate potential partners through market research, strategic fit analysis, and due diligence.</li>
                                                  <li>Support partnership discussions by preparing analyses, proposals, and data-backed recommendations.</li>
                                                  <li>Track performance of existing partnerships using defined KPIs and generate insight reports.</li>
                                                  <li>Coordinate with internal teams to align partnership objectives with business, technical, and operational goals.</li>
                                                  <li>Assist in structuring partnership models, agreements, and go-to-market strategies.</li>
                                             </ul>
                                        </div>
                                        <div className="mt-8 pt-6 border-t border-white/10">
                                             <a href="https://docs.google.com/forms/d/e/1FAIpQLScosNgKSIR6HypQcaWA6JGXlxTKaBT1-VaysAabRRitcOdVuA/viewform" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-sm font-bold uppercase tracking-widest">
                                                  Apply Now <ArrowRight className="w-4 h-4" />
                                             </a>
                                        </div>
                                   </div>

                                   {/* FOUNDER OFFICE ASSOCIATE */}
                                   <div className="border border-white/10 bg-white/5 p-8 relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-green-500/50 group-hover:bg-green-400 transition-colors"></div>
                                        <h3 className="text-2xl font-bold font-mono text-white mb-6 uppercase">Founder Office Associate</h3>
                                        <p className="text-sm font-mono text-neutral-400 mb-4 uppercase">Your responsibilities may include:</p>
                                        <ul className="list-decimal list-inside space-y-3 text-neutral-300 ml-2 font-light leading-relaxed">
                                             <li>Work closely with the founders on strategic initiatives across product, GTM, operations, and documentation.</li>
                                             <li>Conduct ICP mapping, market segmentation, and primary/secondary research across defense and consumer sectors.</li>
                                             <li>Assist with competitive analysis, including data on positioning, cost, products, and solutions.</li>
                                             <li>Contribute to GTM planning, marketing, narrative development, and creation of pitch materials (decks, one-pagers).</li>
                                             <li>Coordinate with external stakeholders (government agencies, vendors, investors, customers) and take ownership of defined projects, operating effectively in ambiguity.</li>
                                        </ul>
                                        <div className="mt-8 pt-6 border-t border-white/10">
                                             <a href="https://docs.google.com/forms/d/e/1FAIpQLScosNgKSIR6HypQcaWA6JGXlxTKaBT1-VaysAabRRitcOdVuA/viewform" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-sm font-bold uppercase tracking-widest">
                                                  Apply Now <ArrowRight className="w-4 h-4" />
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </section>

                         {/* ======================= CREATIVE CATEGORY ======================= */}
                         <section>
                              <div className="flex items-center mb-12">
                                   <div className="bg-purple-500 px-6 py-2">
                                        <h2 className="text-2xl font-bold font-mono uppercase tracking-widest text-black">CREATIVE</h2>
                                   </div>
                                   <div className="h-px bg-white/20 flex-grow ml-6"></div>
                              </div>

                              <div className="grid md:grid-cols-2 gap-8">
                                   {/* UI/UX DESIGNER */}
                                   <div className="border border-white/10 bg-white/5 p-8 relative overflow-hidden group flex flex-col">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors"></div>
                                        <h3 className="text-2xl font-bold font-mono text-white mb-6 uppercase">UI/UX Designer</h3>
                                        <p className="text-sm font-mono text-neutral-400 mb-4 uppercase">Responsibilities may include:</p>
                                        <ul className="list-square list-inside space-y-3 text-neutral-300 ml-2 font-light leading-relaxed flex-grow">
                                             <li>Design intuitive user interfaces and user experiences for web and mobile products.</li>
                                             <li>Create wireframes, user flows, prototypes, and high-fidelity designs.</li>
                                             <li>Conduct user research and usability testing to inform design decisions.</li>
                                             <li>Collaborate with product and engineering teams to ensure design feasibility and consistency.</li>
                                             <li>Maintain and evolve design systems and visual standards.</li>
                                        </ul>
                                        <div className="mt-8 pt-6 border-t border-white/10">
                                             <a href="https://docs.google.com/forms/d/e/1FAIpQLScosNgKSIR6HypQcaWA6JGXlxTKaBT1-VaysAabRRitcOdVuA/viewform" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-sm font-bold uppercase tracking-widest">
                                                  Apply Now <ArrowRight className="w-4 h-4" />
                                             </a>
                                        </div>
                                   </div>

                                   {/* GRAPHIC DESIGNER */}
                                   <div className="border border-white/10 bg-white/5 p-8 relative overflow-hidden group flex flex-col">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors"></div>
                                        <h3 className="text-2xl font-bold font-mono text-white mb-6 uppercase">Graphic Designer</h3>
                                        <p className="text-sm font-mono text-neutral-400 mb-4 uppercase">Responsibilities may include:</p>
                                        <ul className="list-square list-inside space-y-3 text-neutral-300 ml-2 font-light leading-relaxed flex-grow">
                                             <li>Create visual assets for digital and print mediums, including social media creatives, presentations, websites, and marketing materials.</li>
                                             <li>Develop and maintain consistent brand identity across all design outputs.</li>
                                             <li>Collaborate with marketing, product, and content teams to translate ideas into compelling visuals.</li>
                                             <li>Iterate designs based on feedback while meeting timelines and quality standards.</li>
                                             <li>Manage and organize design files, templates, and assets for efficient reuse and scaling.</li>
                                        </ul>
                                        <div className="mt-8 pt-6 border-t border-white/10">
                                             <a href="https://docs.google.com/forms/d/e/1FAIpQLScosNgKSIR6HypQcaWA6JGXlxTKaBT1-VaysAabRRitcOdVuA/viewform" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-sm font-bold uppercase tracking-widest">
                                                  Apply Now <ArrowRight className="w-4 h-4" />
                                             </a>
                                        </div>
                                   </div>

                                   {/* BLENDER/3D ARTIST */}
                                   <div className="border border-white/10 bg-white/5 p-8 relative overflow-hidden group flex flex-col">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors"></div>
                                        <h3 className="text-2xl font-bold font-mono text-white mb-6 uppercase">Blender/3D Artist</h3>
                                        <p className="text-sm font-mono text-neutral-400 mb-4 uppercase">Responsibilities may include:</p>
                                        <ul className="list-square list-inside space-y-3 text-neutral-300 ml-2 font-light leading-relaxed flex-grow">
                                             <li>Create high-quality 3D models, renders, and animations for products, concepts, or marketing use.</li>
                                             <li>Develop assets using Blender for visualization, simulations, and presentations.</li>
                                             <li>Optimize models and textures for performance and realism.</li>
                                             <li>Work closely with design, engineering, and marketing teams to align visuals with requirements.</li>
                                             <li>Iterate on designs based on feedback and project needs.</li>
                                        </ul>
                                        <div className="mt-8 pt-6 border-t border-white/10">
                                             <a href="https://docs.google.com/forms/d/e/1FAIpQLScosNgKSIR6HypQcaWA6JGXlxTKaBT1-VaysAabRRitcOdVuA/viewform" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-sm font-bold uppercase tracking-widest">
                                                  Apply Now <ArrowRight className="w-4 h-4" />
                                             </a>
                                        </div>
                                   </div>

                                   {/* WEB DEVELOPER */}
                                   <div className="border border-white/10 bg-white/5 p-8 relative overflow-hidden group flex flex-col">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors"></div>
                                        <h3 className="text-2xl font-bold font-mono text-white mb-6 uppercase">Web Developer</h3>
                                        <p className="text-sm font-mono text-neutral-400 mb-4 uppercase">Responsibilities may include:</p>
                                        <ul className="list-square list-inside space-y-3 text-neutral-300 ml-2 font-light leading-relaxed flex-grow">
                                             <li>Develop, test, and maintain responsive websites and web applications.</li>
                                             <li>Translate UI/UX designs into functional, high-quality front-end or full-stack implementations.</li>
                                             <li>Ensure performance, security, and cross-browser compatibility.</li>
                                             <li>Integrate APIs, databases, and third-party services as required.</li>
                                             <li>Debug, optimize, and document codebases.</li>
                                        </ul>
                                        <div className="mt-8 pt-6 border-t border-white/10">
                                             <a href="https://docs.google.com/forms/d/e/1FAIpQLScosNgKSIR6HypQcaWA6JGXlxTKaBT1-VaysAabRRitcOdVuA/viewform" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-sm font-bold uppercase tracking-widest">
                                                  Apply Now <ArrowRight className="w-4 h-4" />
                                             </a>
                                        </div>
                                   </div>

                                   {/* CONTENT WRITER */}
                                   <div className="border border-white/10 bg-white/5 p-8 relative overflow-hidden group flex flex-col">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors"></div>
                                        <h3 className="text-2xl font-bold font-mono text-white mb-6 uppercase">Content Writer</h3>
                                        <p className="text-sm font-mono text-neutral-400 mb-4 uppercase">Responsibilities may include:</p>
                                        <ul className="list-square list-inside space-y-3 text-neutral-300 ml-2 font-light leading-relaxed flex-grow">
                                             <li>Create clear, engaging written content for websites, blogs, social media, and marketing materials.</li>
                                             <li>Research industry topics to produce accurate and value-driven content.</li>
                                             <li>Align content with brand voice, messaging, and business goals.</li>
                                             <li>Edit, proofread, and optimize content for readability and SEO.</li>
                                             <li>Collaborate with marketing and design teams on campaigns and narratives.</li>
                                        </ul>
                                        <div className="mt-8 pt-6 border-t border-white/10">
                                             <a href="https://docs.google.com/forms/d/e/1FAIpQLScosNgKSIR6HypQcaWA6JGXlxTKaBT1-VaysAabRRitcOdVuA/viewform" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-sm font-bold uppercase tracking-widest">
                                                  Apply Now <ArrowRight className="w-4 h-4" />
                                             </a>
                                        </div>
                                   </div>

                                   {/* VIDEO EDITOR */}
                                   <div className="border border-white/10 bg-white/5 p-8 relative overflow-hidden group flex flex-col">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors"></div>
                                        <h3 className="text-2xl font-bold font-mono text-white mb-6 uppercase">Video Editor</h3>
                                        <p className="text-sm font-mono text-neutral-400 mb-4 uppercase">Responsibilities may include:</p>
                                        <ul className="list-square list-inside space-y-3 text-neutral-300 ml-2 font-light leading-relaxed flex-grow">
                                             <li>Edit and produce high-quality video content for marketing, social media, and internal use.</li>
                                             <li>Assemble raw footage, graphics, animations, and sound into polished outputs.</li>
                                             <li>Apply color correction, transitions, and visual effects as required.</li>
                                             <li>Manage timelines, formats, and exports across platforms.</li>
                                             <li>Iterate edits based on feedback and performance metrics.</li>
                                        </ul>
                                        <div className="mt-8 pt-6 border-t border-white/10">
                                             <a href="https://docs.google.com/forms/d/e/1FAIpQLScosNgKSIR6HypQcaWA6JGXlxTKaBT1-VaysAabRRitcOdVuA/viewform" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-sm font-bold uppercase tracking-widest">
                                                  Apply Now <ArrowRight className="w-4 h-4" />
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </section>

                         {/* ======================= INTELLIGENCE TEAM ======================= */}
                         <section className="border border-defense-accent/30 bg-defense-accent/10 p-10 md:p-12 text-center">
                              <h2 className="text-3xl font-black font-mono uppercase tracking-widest text-defense-accent mb-6">Intelligence Team</h2>
                              <p className="text-xl text-neutral-300 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
                                   The nature of work will be confidential and challenging. Research and assume your responsibilities for this position and send us what you think it is and tell us why you are best fit for the same. 
                              </p>
                              <p className="text-lg text-white font-medium mb-8">
                                   Our team will reach back to you if selected.
                              </p>
                              <a href="mailto:admin@kshatralabs.in" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-mono font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors cursor-pointer">
                                   admin@kshatralabs.in
                              </a>
                         </section>

                    </div>
               </div>

               <FooterSection />
          </div>
     )
}
