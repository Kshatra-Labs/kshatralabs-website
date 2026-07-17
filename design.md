# Antigravity Rules — Kshatra Labs Website

You are working as a senior frontend engineer on a defense-tech company's public website. The bar is "agency-built, premium, shipped" — not "AI-generated demo." Every rule below exists to kill a specific failure mode. Follow them without exception.

---

## 0. Identity check before writing any UI
Before generating a component, answer internally: *"Would a senior designer at a top studio (Vercel, Linear, Framer-quality) ship this as-is?"* If the honest answer is no, don't output it — iterate first. Never present first-draft Tailwind defaults as final.

---

## 1. Design System — Hard Constraints (from `design.md`)
These are not suggestions. Violating them is a bug.

**Color**
- Backgrounds: `#000000` / `#050505` / `#080808` only. Never `bg-black` generic — use the exact token for the context (hero/CTA = `#000000`, product pages = `#050505`, cards/panels = `#080808`).
- Never introduce a new accent color. Only: white `#FFFFFF`, defense red `#cc1414`/`#f90000`, tactical blue `blue-500` (headline emphasis only).
- No default Tailwind palette colors (`slate`, `zinc`, `indigo-600`, etc.) anywhere. If you need a gray, use the white-opacity scale: `white/[0.04]`, `white/10`, `white/15`, `white/42`, `white/55`, `white/68`.

**Typography**
- Three fonts only, each with a fixed job — never mix their roles:
  - `--font-space-grotesk` → headlines/titles only (`font-semibold`/`font-bold`, `leading-[0.96]`)
  - `--font-rajdhani` (mono) → buttons, badges, telemetry, labels — always `uppercase tracking-widest` or `tracking-[0.16em]`
  - `--font-inter` → body copy only (`text-white/68`, `leading-7`)
- Never fall back to system font stacks or leave a component with un-set font-family.

**Shape & surface**
- `rounded-none` by default. Any rounded corner needs a specific reason stated in a comment.
- Glass panels: `border border-white/10`, `bg-white/[0.04]` or `bg-[#080808]`, `backdrop-blur-md` where translucent. Panel headers get a `border-b border-white/10 bg-black/50` strip with mono uppercase label, per the pattern in `design.md` §4.2.
- Background texture: 64px grid overlay at `opacity-[0.035]`, per `design.md` §4.3 — use for depth, never louder than that.

**Motion**
- `framer-motion` for all interactive transitions. Micro-animations should feel like HUD/telemetry response, not bouncy consumer-app easing. No default `ease-in-out` 300ms fades — be deliberate about easing curves and duration.

If any new component doesn't obviously map to an existing token/pattern above, stop and ask which bucket it belongs to rather than inventing a new one.

---

## 2. Ban list — instant "AI slop" tells
Never do any of the following. If you catch yourself about to, stop and redo:
- Purple/indigo gradient blobs, generic glassmorphism with no grid texture, or a hero with a giant centered gradient headline + subtext + two pill buttons (the universal "AI landing page" template).
- Default `shadcn/ui` component styling left unedited (default radius, default shadow, default color).
- Material icons or Lucide icons used generically without matching the tactical/technical visual language — icons should read as HUD iconography, not consumer app icons.
- Emoji in UI copy or code comments.
- Centered-card-with-drop-shadow as the default layout for every section.
- Placeholder Lorem Ipsum or generic stock phrasing ("Empowering the future of...", "Revolutionizing..."). Copy should sound like a defense engineering firm, terse and technical.
- Uniform vertical rhythm where every section is identical spacing/structure — vary layout per section like a real designed site would.
- **CRITICAL BAN: Rounded Capsule Pill Badges (`rounded-full inline-flex border px-3 py-1 text-xs font-mono`)**: Never use gradient or rounded capsule pill tags above section headers with icons and `01 //` or `VERIFIED` labels. This looks like AI-generated SaaS boilerplate.
- **CRITICAL BAN: Generic Rounded Bento Cards (`rounded-2xl` / `rounded-3xl` dark gray boxes)**: Never wrap specs, features, or advantages in basic `rounded-2xl bg-white/[0.02] border border-white/10` cards with an icon inside a rounded box. Use `rounded-none` sharp tactical geometry, edge-to-edge architectural lines, precision crosshairs (`+`), and stark, high-density engineering data matrices.
- **CRITICAL BAN: Fake Military Tag Clichés (`[VERIFIED]`, `// SUBSYSTEM`, `CLASSIFIED` on every element)**: Do not theatricalize technical specs with repetitive pseudo-military text tags. Present data with razor-sharp engineering clarity, precise units, and clean alignment.

---

## 3. Use real component/animation libraries — don't hand-roll from scratch every time
For interaction-heavy elements (text reveals, cursor effects, marquees, spotlight/glow hovers, animated grids, particle/radar backgrounds), pull patterns from established open-source libraries rather than reinventing worse versions. Check and adapt from, as relevant:
- **reactbits.dev** — text animations, backgrounds, buttons, general React+Tailwind+Framer Motion components
- **Aceternity UI** — spotlight effects, glowing borders, 3D card hovers, background beams
- **Magic UI** — marquees, animated grids, shimmer buttons
- **Motion Primitives** — framer-motion building blocks
- **Radix UI** (via shadcn) — for accessible primitives (dialogs, dropdowns, tooltips) as the underlying behavior layer, always restyled to match the tactical system in §1, never left in default shadcn skin

When adapting a library component: copy the interaction/animation logic, but strip its default styling entirely and re-skin with the Kshatra Labs tokens. Never ship a reactbits/Aceternity component with its own default color scheme or fonts intact.

---

## 4. Senior-developer code discipline
- Component structure: one responsibility per component, props typed explicitly (TypeScript strict), no `any`.
- Extract repeated tactical patterns (badge, glass panel, HUD label, grid background) into shared components/utilities immediately — don't copy-paste the same className block across five files.
- Use CSS variables / Tailwind theme tokens (per `design.md` §2.1) instead of hardcoded hex values inline. If a hex value appears more than once, it belongs in the theme config.
- Responsive by default: check `sm:` / `lg:` breakpoints on every new component, don't ship desktop-only and call it done.
- Accessibility: sufficient contrast even on `white/42` text-on-black (check it actually meets legibility, not just aesthetic), keyboard-navigable interactive elements, semantic HTML under the hood even when visually unconventional.

---

## 5. Verification rules (carry over from global rules)
- Don't claim a component is "done" without actually running `next dev`/build and confirming no errors.
- List which files/components you're touching before editing. Don't silently modify unrelated sections, the DPDP privacy policy page, or shared layout/nav components while working on a product page.
- Minimal diffs over full-file rewrites unless a rewrite is genuinely required — state why if so.

---

## 6. Before presenting any new page/section, self-check:
1. Does it use only the approved 3 backgrounds, white/red/blue palette, and 3 fonts in their fixed roles?
2. Is every corner `rounded-none` unless justified?
3. Would this be mistaken for a generic SaaS/AI landing page if the logo were removed? (Should be "no.")
4. Did I pull any interactive element from a real library and re-skin it, rather than hand-rolling a worse version or leaving it in stock styling?