# System Architecture & Technical Stack — Kshatra Labs Website

## 1. High-Level Architecture Overview
The Kshatra Labs digital platform (`kshatralabs-website`) is a modern frontend application built on top of the **Next.js 16 App Router** architecture using **React 19** and **TypeScript 5**. 

The system utilizes a hybrid rendering approach:
* **Server-Side Rendering (SSR) & Static Shells**: Utilized for root layouts, SEO metadata, and initial HTML delivery to maximize initial load performance.
* **Client-Side Rendering (CSR) & Dynamic Isolation**: Heavy interactive components—specifically 3D WebGL canvases (`SplineScene`, `ThreeRobot`, `SmartScene`), custom mouse cursors, and smooth scroll wrappers (`Lenis`)—are isolated using React `'use client'` boundaries and loaded via `next/dynamic` (`ssr: false`) to guarantee fluid 60 FPS client-side rendering and eliminate server hydration mismatches.

---

## 2. Technology Stack & Dependencies

### 2.1 Core Framework & Runtime
* **Next.js**: `16.2.9` (App Router, Server Actions, API routes capable)
* **React & React DOM**: `19.2.7`
* **TypeScript**: `^5` (`tsconfig.json` configured for strict type checking)
* **Node Environment**: `@types/node ^20`

### 2.2 Styling & Design System Engine
* **Tailwind CSS**: `v4.x` (`@tailwindcss/postcss ^4`, `tailwindcss ^4`)
* **Tailwind Ecosystem**:
  * `clsx` & `tailwind-merge`: For clean, dynamic class name composition (`cn()` helper pattern).
  * `class-variance-authority (cva)`: For type-safe UI component variants (`shadcn/ui` integration).
  * `tailwindcss-animate` / `tw-animate-css`: For utility-based UI animations.
  * `@import "shadcn/tailwind.css"` inside `app/globals.css`.

### 2.3 3D WebGL Pipeline & Visualization
* **Three.js Core**: `three ^0.185.0`, `@types/three ^0.185.0`
* **React Three Fiber (R3F)**: `@react-three/fiber ^9.6.1` (declarative Three.js scene graph for React)
* **React Three Drei**: `@react-three/drei ^10.7.7` (helpers, cameras, lighting, loaders, controls)
* **Spline Interactive 3D**: `@splinetool/react-spline ^4.1.0`, `@splinetool/runtime ^1.12.98` (used for embedded interactive 3D Spline scenes)
* **Performance Monitoring**: `stats.js ^0.17.0` (FPS metering and canvas diagnostics via `FPSMeter.tsx`)

### 2.4 Motion, Animation & Scrolling
* **Framer Motion / Motion**: `framer-motion ^12.42.0`, `motion ^12.42.0` (for complex page transitions, viewport animations, and hover states)
* **Lenis Smooth Scroll**: `lenis ^1.3.25` (provides momentum-based smooth scrolling synced across the DOM)
* **Element Measurement**: `react-use-measure ^2.1.7` (for dynamic UI responsiveness and canvas sizing)
* **Icons**: `lucide-react ^0.577.0`

---

## 3. Directory & File Structure

```
kshatralabs-website/
├── app/                      # Next.js App Router root
│   ├── layout.tsx            # Global root layout (Fonts, InitialLoader, SmoothScroll wrapper)
│   ├── page.tsx              # Landing page (HeroSection, InterceptorSection, Partners, Footer)
│   ├── globals.css           # Tailwind v4 imports, @theme inline definitions, root CSS variables
│   ├── not-found.tsx         # Custom 404 page
│   ├── about/                # About company route
│   ├── careers/              # Careers portal route
│   ├── contact-us/           # Contact / briefing request route
│   ├── products/             # Product portfolio route (`/products`, `/products/hawk`)
│   ├── privacy-policy/       # Legal route
│   └── terms-of-service/     # Legal route
├── components/               # Reusable UI, 3D scenes, and block modules
│   ├── blocks/               # Major section components (HeroSection, InterceptorSection, Header, Footer, etc.)
│   ├── ui/                   # Primitive / base UI components (MailChoiceModal, BackgroundPaths, Card, etc.)
│   ├── ThreeRobot.tsx        # Fallback/alternative Three.js interactive robot canvas
│   ├── RobotModel.tsx        # GLTF/GLB robot 3D mesh loader component
│   ├── SmartScene.tsx        # Smart canvas optimization container
│   ├── FPSMeter.tsx          # Real-time WebGL performance meter
│   ├── custom-cursor.tsx     # Custom interactive tactical cursor
│   ├── initial-loader.tsx    # High-tech initial preloader / splash screen
│   └── smooth-scroll.tsx     # Lenis scroll context provider wrapper
├── hooks/                    # Custom React hooks
│   └── use-is-mobile.ts      # Viewport detection hook (`(max-width: 768px)`)
├── lib/                      # Utilities and helpers
│   └── spline-cache.ts       # Cache utilities for 3D Spline assets
├── public/                   # Static assets (images, logos, textures, PDFs)
│   ├── logo.png / logo2.png  # Kshatra Labs brand iconography
│   ├── products/             # Product renderings (`hawkproduct.png`, `hawkeye.png`, etc.)
│   ├── bg/                   # Background textures (`page2bg.png`)
│   └── Kshatra_Labs_hawk_brochure.pdf # Official HAWK specification brochure
├── package.json              # Dependencies and project scripts (`dev`, `build`, `lint`)
├── tsconfig.json             # TypeScript configuration
└── next.config.ts            # Next.js compiler & bundle configuration
```

---

## 4. Key Architectural & Design Patterns

### 4.1 Client vs. Server Boundaries (`'use client'`)
Because the website heavily relies on browser-only APIs (`window`, `document`, WebGL context, `requestAnimationFrame`), any component handling 3D rendering, animations (`framer-motion`), or viewport measurement explicitly declares `'use client'` at the very top.

### 4.2 Dynamic Importing & SSR Exclusions (`next/dynamic`)
To prevent large bundle sizes from blocking initial page interactive time and to avoid server hydration mismatches with WebGL canvases, heavy 3D components are dynamically imported with `ssr: false`:
```tsx
const SplineScene = dynamic(() => import("@/components/blocks/spline-scene").then(mod => mod.SplineScene), {
  ssr: false,
  loading: () => <div className="...">Loading 3D Scene...</div>
})
```

### 4.3 Responsive Device Detection (`useIsMobile`)
The application uses the `useIsMobile` hook to adapt behavior:
* **Mobile Devices**: Direct, zero-friction interaction (`mailto:` links triggered immediately without popups).
* **Desktop Devices**: Rich interactive modal overlays (`MailChoiceModal`).

### 4.4 Font Loading & Optimization
Fonts are loaded statically via `next/font/google` in `app/layout.tsx` and injected as CSS variables:
* `--font-space-grotesk`: (`Space_Grotesk`) Display / Heading font.
* `--font-rajdhani`: (`Rajdhani`) Tactical / Monospace / HUD equivalent font.
* `--font-inter`: (`Inter`) Body / Sans font.
These variables map directly into Tailwind v4 tokens via `@theme inline` inside `app/globals.css`.

---

## 5. Performance Optimization & Caching Strategy
* **Global Caching Policy**: `export const revalidate = 0;` is set in root layout (`app/layout.tsx`) where real-time accuracy and fresh deployments are prioritized over static cached HTML.
* **Lenis Overscroll Containment**: Custom CSS rules (`app/globals.css:18-20`) enforce `overscroll-behavior: contain` on `.lenis.lenis-smooth [data-lenis-prevent]` to prevent unwanted scroll chaining inside modals and 3D viewports.
