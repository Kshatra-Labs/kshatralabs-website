# Project Roadmap & Implementation Phases (`phases.md`) — Kshatra Labs Website

This document tracks the phased development lifecycle, current progress, and strategic milestones for the `kshatralabs-website` platform.

---

## 🟢 Phase 1: Foundation, Core Branding & Initial 3D Integration (COMPLETED)
* **Status**: Completed (`v0.1.0`)
* **Key Achievements**:
  * Established Next.js 16 (`App Router`) project shell with TypeScript 5 and strict compiler settings.
  * Configured Tailwind CSS v4 pipeline (`@tailwindcss/postcss`, `app/globals.css`) with custom dark mode design system (`#000000`/`#050505` base, tactical glassmorphism, and red accents).
  * Integrated google font variables: `Space Grotesk` (Display), `Rajdhani` (Tactical/Mono), and `Inter` (Sans).
  * Built primary landing page (`app/page.tsx`) incorporating:
    * `Header` & `FooterSection` (`Footer4Col`)
    * `HeroSection` with animated `BackgroundPaths`
    * `InterceptorSection` & `Partners` showcase
    * High-tech `InitialLoader` and `custom-cursor.tsx`
  * Deployed `Lenis` smooth scroll integration (`smooth-scroll.tsx`).
  * Created product portfolio overview page (`app/products/page.tsx`) featuring **HAWK MK-1**, **HAWKEYE**, **APEX**, and **NETWORK LAYER**.
  * Created detailed product sub-route (`app/products/hawk`).

---

## 🟡 Phase 2: Performance Tuning, Mobile Optimization & Code Refactoring (ACTIVE / CURRENT)
* **Status**: Active (`In Progress`)
* **Objectives**:
  * **3D & WebGL Optimization**:
    * Optimize Spline and Three.js canvas loading (`SplineScene`, `ThreeRobot`, `SmartScene`) to ensure rapid Time-to-Interactive (TTI) and consistent `60 FPS` rendering.
    * Provide lightweight fallback states on low-end GPUs or unstable network conditions.
  * **Mobile & Touch UX Improvements**:
    * Refine `useIsMobile()` responsive contact routing (`mailto:contact@kshatralabs.in` direct trigger on mobile vs. interactive `MailChoiceModal` on desktop).
    * Disable custom cursor (`custom-cursor.tsx`) automatically on touch devices to prevent UI interference.
  * **Code Clean-Up & Modularity**:
    * Audit commented-out legacy blocks (`ThreatAnalysis`, `PhilosophyCard`, `VideoSection`, `EnvironmentSection`) across pages and clean up technical debt.
    * Ensure strict ESLint and TypeScript checks pass across all routes (`npm run lint`, `npm run typecheck`).

---

## 🔵 Phase 3: Expanded Product Line & Interactive Specification Suites (PLANNED)
* **Status**: Planned
* **Key Deliverables**:
  * **Dedicated Product Sub-Pages**:
    * Build comprehensive, highly immersive technical specification pages for `/products/hawkeye`, `/products/apex`, and `/products/network-layer`.
    * Include interactive 3D model viewers and rotating telemetry blueprints for each product.
  * **Interactive Configuration Simulator**:
    * Develop an interactive HAWK MK-1 and Network Layer mission config tool where visitors can toggle payload configurations, optical sensors, and range parameters.
  * **Dynamic Career Portal (`app/careers`)**:
    * Interactive job listing filter for physical intelligence, embedded hardware, and AI roles at Kshatra Labs (`Bengaluru`).
  * **Briefing & Demo Scheduling Portal (`app/contact-us`)**:
    * Integrated interactive booking flow for defense agencies and strategic partners.

---

## 🟣 Phase 4: Mission Control Dashboard & Secure Partner Portal (FUTURE)
* **Status**: Future Roadmap
* **Key Deliverables**:
  * **Live Telemetry & Radar Demo**:
    * A real-time simulated mission control dashboard (`SmartScene` / custom WebGL shaders) demonstrating sensor handoff, radar sweeps, and multi-drone deconfliction in browser.
  * **Secure Defense Partner Gateway**:
    * Authenticated portal (`/login` / `/portal`) for verified defense partners to access classified brochures, CAD envelopes, and hardware interface definitions.
