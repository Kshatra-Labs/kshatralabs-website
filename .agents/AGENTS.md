# Project-Scoped Rules & Core Knowledge Base (`AGENTS.md`)

## Mandatory AI Agent Initialization Instruction
**CRITICAL**: Every AI assistant (Antigravity, Cursor, Cline, Roo Code, Aider, Windsurf, etc.) working on this repository MUST automatically load, review, and strictly abide by the following core documentation files located in the project root directory before executing any task or writing any code:

1. **[prd.md](file:///prd.md)** — Product Requirements Document (Target audience, product portfolio, specifications, features, KPIs).
2. **[architecture.md](file:///architecture.md)** & **[architechture.md](file:///architechture.md)** — System Architecture, Next.js 16 / React 19 structure, directory layout, 3D/Spline integration, and rendering patterns.
3. **[rules.md](file:///rules.md)** — Strict coding standards, TypeScript conventions, `'use client'` boundaries, tool preferences, and pre-verification checklists.
4. **[phases.md](file:///phases.md)** — Project roadmap, milestones, completed phases, and active development objectives.
5. **[design.md](file:///design.md)** — Design system, UI tokens, high-tech glassmorphism aesthetics, color palettes, and typography hierarchy (`Space Grotesk`, `Rajdhani`, `Inter`).
6. **[memory.md](file:///memory.md)** — Historical context, architectural decisions (`SplineScene` vs. `ThreeRobot`, `useIsMobile`), and active operational notes.

---

## Operational & Behavioral Summary
* **Always maintain the tactical, military-grade dark mode aesthetic** (`#000000`/`#050505` base, `#cc1414` red accents, technical monospace elements).
* **Always preserve existing docstrings and comments** unless specifically asked to remove them.
* **Always update `memory.md` and `phases.md`** when introducing significant architectural changes, new product specifications, or completing major milestones.

---

# Global AI Development Rules

These rules define how AI must behave across all projects, workspaces, and code generations.

They are mandatory and always active.

---

# 1. Core Engineering Principles

- Prioritize simplicity over complexity
- Prefer maintainability over cleverness
- Avoid unnecessary abstractions or over-engineering
- Reuse existing patterns before introducing new ones
- Always assume production-level quality requirements
- Never break existing functionality unless explicitly requested

---

# 2. Code Quality Standards

- Write clean, readable, and predictable code
- Use meaningful and descriptive names for variables and functions
- Keep functions small and focused on a single responsibility
- Avoid duplication (DRY principle), but do not over-abstract
- Prefer explicit logic over hidden magic behavior
- Remove dead or unused code when identified
- Code must be self-explanatory without needing external explanation

---

# 3. UI / Frontend Rules

- Always follow existing UI design systems in the project
- Do not introduce new colors, fonts, or styling patterns
- Reuse existing UI components whenever possible
- Maintain consistent spacing, layout, and alignment
- Follow existing UX interaction patterns
- Ensure responsive design by default (mobile-first)
- Maintain accessibility (ARIA labels, keyboard navigation)

---

# 4. Backend Rules

- Follow existing architecture patterns in the project
- Separate concerns clearly (controllers, services, data access)
- Keep business logic out of route handlers
- Validate all incoming data on server side
- Ensure consistent API response structures
- Handle errors gracefully and predictably

---

# 5. Security Rules

- Never trust user input (always validate and sanitize)
- Protect against injection attacks (SQL, NoSQL, etc.)
- Never expose sensitive data in API responses or logs
- Use environment variables for all secrets and credentials
- Enforce authentication and authorization where required
- Apply principle of least privilege by default

---

# 6. Performance Rules

- Avoid unnecessary computations and re-renders
- Optimize database queries and prevent N+1 problems
- Use pagination for large datasets
- Prefer lazy loading for heavy or non-critical resources
- Minimize bundle size and unnecessary dependencies
- Avoid blocking operations in critical paths

---

# 7. State & Data Management

- Keep state minimal and localized whenever possible
- Avoid global state unless clearly justified
- Do not duplicate server state on the client unnecessarily
- Normalize complex data structures when needed
- Ensure predictable data flow

---

# 8. Error Handling & Reliability

- Always handle errors explicitly
- Never allow unhandled exceptions in production code
- Provide clear and actionable error messages
- Log errors without exposing sensitive information
- Ensure system fails gracefully, not catastrophically

---

# 9. Documentation Standards (PRO LEVEL)

- Every non-trivial module, feature, or system must be documented
- Code must be understandable without external explanation

## 9.1 Code Comments Rules

- Use comments only to explain **why**, not **what**
- Avoid redundant comments that repeat the code
- Document complex business logic clearly
- Explain edge cases and non-obvious decisions

---

## 9.2 Function Documentation Rules

- Every important function must clearly define:
  - Purpose
  - Inputs
  - Outputs
  - Side effects (if any)

---

## 9.3 API Documentation Rules

- All APIs must define:
  - Endpoint purpose
  - Request body structure
  - Response structure
  - Error responses
  - Authentication requirements
- Keep API responses consistent across the system

---

## 9.4 Architecture Documentation Rules

For system-level features:

- Explain high-level architecture
- Describe data flow clearly
- Identify core components
- Document trade-offs when relevant

---

## 9.5 Project Documentation (README Standards)

Every project must include:

- Setup instructions
- Environment variables list
- Tech stack overview
- Folder structure explanation
- Build and run instructions
- Known limitations (if any)

---

# 10. AI Behavior Rules (STRICT)

- Always follow existing project conventions first
- Do not introduce new architecture without explicit instruction
- If multiple solutions exist, choose the simplest reliable one
- Never assume missing requirements—ask or choose safest default
- Match existing code style exactly
- Do not refactor unrelated code during feature implementation
- Preserve existing logic unless change is explicitly requested

---

# 11. STRICT LIMITATIONS

- AI must NOT perform any Git operations
- AI must NOT suggest commits, pushes, merges, or branch management
- AI must NOT modify version control state in any way
- All version control actions are handled manually by the developer only

---

# 12. FINAL RULE

If there is uncertainty:
→ choose the safest, most standard, and most maintainable solution
→ never optimize for cleverness over clarity
