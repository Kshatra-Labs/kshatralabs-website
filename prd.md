# Product Requirements Document (PRD) — Kshatra Labs Website

## 1. Executive Summary & Vision
**Kshatra Labs** ("Engineering the Unmanned Future") represents the pinnacle of autonomous systems engineering. Based in Bengaluru, India, Kshatra Labs develops intelligent, field-ready platforms and mission-critical solutions operating across **Air, Land, Sea, and Space**. 

The purpose of the Kshatra Labs digital platform (`kshatralabs-website`) is to provide an ultra-modern, high-performance, and visually immersive web portal that showcases defense-grade robotic systems, tactical interceptors, sensing systems, and command infrastructure to defense partners, government agencies, and strategic stakeholders.

---

## 2. Core Target Audience
* **National Defense Agencies & Border Security Forces**: Seeking reliable, sovereign counter-UAS (Unmanned Aerial Systems) and airspace monitoring platforms.
* **Tactical Military Operators & Field Engineers**: Requiring rugged, field-serviceable systems engineered for contested and GPS-denied environments.
* **Strategic Partners & Defense Contractors**: Evaluating sovereign stack capabilities, sensor fusion technology, and multi-interceptor mesh coordination.
* **Prospective Talent**: Top-tier robotics, AI, aerospace, and embedded systems engineers seeking to work on general-purpose physical intelligence.

---

## 3. Product Portfolio & System Offerings

### 3.1 HAWK MK-1 (High-Speed Interceptor Platform)
* **Description**: A high-speed kinetic interception drone engineered for contested low-altitude airspace security and counter-UAS missions.
* **Key Performance Metrics**:
  * **Maximum Velocity**: `250+ kmph`
  * **Mission Endurance**: `30+ min`
  * **Operational Range**: `15+ km`
  * **Origin**: Bengaluru, IN
* **Core Capabilities**:
  * High-speed kinetic interception
  * Optical and inertial guidance (GPS-denied capable)
  * Electronic Warfare (EW) resilient control link
  * Field-serviceable modular airframe

### 3.2 HAWKEYE (Electro-Optical Tracking System)
* **Description**: Persistent EO/IR sensing platform for low-altitude airspace surveillance, automated target handoff, and protected-site perimeter monitoring.
* **Status**: Field Validation

### 3.3 APEX (Mission Command Node)
* **Description**: Compact edge compute and communications unit for sensor fusion, rapid interceptor tasking, and operator-supervised engagements.
* **Status**: Systems Integration

### 3.4 NETWORK LAYER (Coordinated Defence Network)
* **Description**: A secure mesh communication and coordination layer enabling multi-interceptor network behavior, target deconfliction, and resilient field networks.
* **Status**: Development Program

---

## 4. Key Value Propositions
1. **Sovereign Stack**: Designed and assembled in India (`Bengaluru`) with strict supply-chain control, local supportability, and rapid field turnaround.
2. **Contested Environment Resilience**: Built around optical navigation, inertial sensing, and hardened RF/mesh communications specifically for GPS-denied and high-EW threat environments.
3. **Rapid Response Architecture**: Product family shaped for short launch windows, repeatable maintenance, and operator confidence under extreme pressure.

---

## 5. Website Functional Requirements

### 5.1 Interactive 3D & Visualization
* High-performance 3D canvas rendering (`@react-three/fiber`, `@splinetool/react-spline`) displaying the robot airframes, mission control dashboards, and interactive models.
* Dynamic shader effects, grid backgrounds (`BackgroundPaths`), and tactical HUD elements.

### 5.2 Responsive & Adaptive UX
* Seamless operation across desktop, tablet, and mobile breakpoints.
* **Mobile Contact Workflow**: On mobile devices, clicking contact/request buttons directly initiates `mailto:contact@kshatralabs.in` via native mail client.
* **Desktop Contact Workflow**: On desktop, clicking opens `MailChoiceModal` offering customized email routing or direct clipboard/client options.

### 5.3 Performance & Optimization
* Zero static caching bottlenecks (`revalidate = 0`) where dynamic precision is needed.
* Client-side rendering isolation (`'use client'`, `next/dynamic` with `ssr: false`) for WebGL and 3D scenes to maintain high frame rates and prevent hydration errors.
* Smooth inertia scrolling (`Lenis`) across all viewports.

### 5.4 Lead Generation & Asset Access
* Prominent call-to-actions (`REQUEST A BRIEFING →`, `Brochure`).
* Direct PDF specification downloads (`/Kshatra_Labs_hawk_brochure.pdf`).
* Direct contact details (`tel:+919730458528`, `contact@kshatralabs.in`).

---

## 6. Success Metrics & KPIs
* **Visual Wow Factor**: Immediate engagement with 3D elements and tactical glassmorphism without lag (`60 FPS` canvas rendering target).
* **Load Performance**: Fast initial page load (`InitialLoader`) and minimal layout shift (`CLS < 0.1`).
* **Conversion & Engagement**: High rate of brochure downloads and briefing inquiries from qualified defense and institutional visitors.
