# Antigravity IDE — Global Rules

## 1. Verification (no false "done" claims)
- Never say "completed", "fixed", "verified", or "working" unless you have actually run the code/build/tests in this session and seen the output. Paste the actual output as proof.
- If you did not run it, say "untested" explicitly.
- If a build/test command exists in the repo, run it before claiming success. Do not assume success from reading code.
- If you are not 100% sure a fix addresses the root cause, say so and state your confidence level.

## 2. Scope discipline (no silent breakage)
- Only touch files/functions directly required by the task. Do not "clean up" or refactor unrelated code.
- Before editing a file, list every function/section you will change. Do not change anything outside that list.
- If a change requires touching a shared/adjacent function, stop and flag it explicitly — do not do it silently.
- Never delete or rewrite comments, logging, or error handling that isn't part of the task.
- Preserve existing variable names, formatting style, and file structure unless asked to change them.

## 3. No invented APIs / libraries
- Do not use a library method, Flutter widget, Kotlin API, or ESP32/Arduino function unless you are certain it exists in the version being used. If unsure, say so instead of guessing.
- When using a package, state the exact version assumption.
- Do not invent config keys, env vars, or file paths that weren't shown to you.

## 4. Diffs over rewrites
- Prefer minimal diffs (str_replace-style) over regenerating whole files.
- If a full file rewrite is truly necessary, say why before doing it.
- Show a summary of changed lines after every edit.

## 5. Stack-specific
- Flutter/Dart: null-safety strict, no `!` unless justified in a comment. State-management pattern must match what's already in the project — don't introduce a new one uninvited.
- Kotlin/Android: respect existing architecture (e.g. WindowManager overlay vs Activity patterns already in use). Don't switch approaches without flagging it.
- ESP32/C++: never touch GPIO pin assignments, ADC logic, or power-management code without restating the exact pins/registers being changed. Flag any change that could affect boot behavior.
- Next.js: server/client component boundaries must be preserved exactly as-is unless the task is about that boundary.

## 6. Communication style
- No filler, no "Great question!", no restating the task back before answering.
- Lead with the answer/code. Explanation (if any) goes after, in 3 lines max, only if non-obvious.
- If something is ambiguous, ask one specific question instead of guessing and proceeding.

---

# UI / Frontend Design Rules (kill the "generic AI app" look)

## Typography
- Never use default system font stacks (`-apple-system`, `Roboto` fallback stack, `Arial`, `sans-serif` alone) as the *only* font. Pick one intentional typeface pairing and declare it explicitly (e.g. a display font for headings + a distinct body font).
- No default browser/Material font sizes. Set an explicit type scale (e.g. 12/14/16/20/28/36) and use it consistently.
- Avoid the default Flutter Material `TextTheme` untouched — override at minimum: headline, title, body, and label styles.

## Color
- Never ship the default Material 3 purple/indigo seed color unchanged.
- No default Tailwind `blue-500` / `indigo-600` as the primary action color unless deliberately chosen.
- Define an explicit palette (primary, secondary, surface, error, success) — don't let the framework pick it.

## Layout / components
- Don't use default `ElevatedButton`, default `Card` elevation/radius, or default shadcn component styles unedited. Adjust radius, padding, or elevation to something intentional.
- No centered-text-on-white-card-with-drop-shadow as the default layout for every screen — vary structure to fit content.
- Icons: don't default to Material filled icons everywhere; mix weights/styles intentionally or state why filled was chosen.

## General smell test
- Before finalizing any UI output, check: "Does this look like the first Google result for '[framework] starter template'?" If yes, change at least typography + color + one structural element before presenting it.

## 7. BANNED AI & SAAS DESIGN CLICHÉS (STRICT ENFORCEMENT)
Never generate any of the following patterns under any circumstances:
- **Rounded Capsule Pill Badges with `//` or Faux-Military Codes**: Do NOT create `rounded-full` capsule badges above headings with icons and `01 //` or `VERIFIED` text inside gradient borders (e.g., `rounded-full bg-white/5 border px-3 py-1 font-mono text-xs`). This is the universal tell of AI boilerplate design.
- **Generic Rounded Bento Boxes (`rounded-2xl` / `rounded-3xl` gray boxes)**: Do NOT wrap every section, spec, or feature in a generic rounded dark gray card (`rounded-2xl bg-white/[0.02] border border-white/10`). Use sharp, edge-to-edge architectural geometry, `rounded-none`, stark hairline rulers (`1px border-neutral-800`), corner brackets (`┌ ┐ └ ┘`), and clean structured grids.
- **Repetitive `[VERIFIED]` / `//` / `CLASSIFIED` Tag Cliché**: Do NOT splatter fake tactical tags (`[VERIFIED]`, `// SUBSYSTEM`, `ACTIVE DOMAIN`) across every card or number block. Real aerospace/defense engineering (Anduril, Palantir, Skunk Works) uses clean, high-density, structured engineering data tables and stark typography without theatrical pseudo-military clutter.
- **Low-Contrast Stacked Cards**: Avoid stacking endless rows of gray boxes with blue icons in little pill frames (`p-3 rounded-xl bg-white/5`). Prioritize high-contrast photography, interactive 3D/video stages, technical diagrams, and bold typographic hierarchy.