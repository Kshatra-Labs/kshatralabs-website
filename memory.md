# Project Memory & Context Log (`memory.md`) — Kshatra Labs Website

This document serves as the persistent memory storage for critical architectural decisions, user preferences, operational parameters, and historical changes across sessions. All AI assistants working on `kshatralabs-website` must read this file upon starting and update it whenever significant decisions are made.

---

## 1. Core Organizational & Contact Information
* **Entity**: Kshatra Labs (`KSHATRA LABS | MISSION CRITICAL SOLUTIONS`)
* **Mission**: "Engineering the Unmanned Future" / General-purpose physical intelligence across Air, Land, Sea, and Space.
* **Location**: Bengaluru, India
* **Primary Contact Email**: `contact@kshatralabs.in`
* **Primary Contact Phone**: `+91 9730458528`
* **Official HAWK Brochure Asset**: `/Kshatra_Labs_hawk_brochure.pdf` (stored in `public/`)

---

## 2. Key Architectural & User Preference Decisions

### 2.1 3D Scene Choice (`SplineScene` vs. `ThreeRobot`)
* **Decision Date / Context**: Reverted to `SplineScene` per explicit user request (`app/page.tsx:12-16`).
* **Details**: While `ThreeRobot.tsx` and `SmartScene.tsx` exist as lightweight Three.js alternatives/fallbacks, the user requested maintaining `SplineScene` while retaining performance optimizations (dynamic loading with `ssr: false` and explicit loading states).

### 2.2 Mobile vs. Desktop Contact Modal Routing
* **Decision Context**: Enhancing mobile UX to avoid clunky modal popups on phones.
* **Details**: Utilized `useIsMobile()` custom hook (`hooks/use-is-mobile.ts`). When triggered:
  * If `isMobile == true`: Directly opens `mailto:contact@kshatralabs.in` via `window.location.href`.
  * If `isMobile == false`: Opens the interactive `MailChoiceModal` (`components/ui/mail-choice-modal.tsx`).

### 2.3 Section Visibility & Clean-Up (`app/page.tsx`)
* **Decision Context**: Streamlining landing page structure per user request.
* **Hidden / Commented Out Sections**:
  * `ThreatAnalysis` (`components/blocks/threat-analysis`)
  * `PhilosophyCard` (`components/blocks/philosophy-card`) — hidden per user request (`app/page.tsx:74-75`)
  * `VideoSection` (`components/blocks/video-section`)
  * `EnvironmentSection` (`components/blocks/environment-section`)
  * `Capabilities` (`components/blocks/capabilities`)
  * `FPSMeter` (hidden in production by default unless debugging)
* **Active Sections**:
  * `Header`, `HeroSection` (with `BackgroundPaths`), `InterceptorSection`, `Partners`, CTA Section ("Ready for the Autonomous Era?"), and `Footer4Col` (`components/blocks/footer-section`).

### 2.4 Typography & Font Standardizations
* Removed `Geist` font from `app/layout.tsx` to streamline font variables.
* Standardized exclusively on:
  * `Space Grotesk` (`--font-space-grotesk`) for headings (`--font-display` / `--font-heading`).
  * `Rajdhani` (`--font-rajdhani`) for monospace / tactical HUD elements (`--font-mono`).
  * `Inter` (`--font-inter`) for clean body typography (`--font-sans`).

---

## 3. Active Technical Notes for AI Agents
* **Tailwind v4 Configuration**: Remember that Tailwind v4 (`@tailwindcss/postcss`) is configured via `app/globals.css` (`@import "tailwindcss"; @import "tw-animate-css"; @import "shadcn/tailwind.css"; @theme inline { ... }`). Do not look for or create a legacy `tailwind.config.js` file unless adding custom PostCSS/Tailwind plugins requires it.
* **Global Revalidation**: `export const revalidate = 0;` in `app/layout.tsx` disables static caching globally to ensure fresh asset delivery.
* **Updating Memory**: Always append new architectural decisions, feature additions, or user feedback entries to this document before completing major tasks.
