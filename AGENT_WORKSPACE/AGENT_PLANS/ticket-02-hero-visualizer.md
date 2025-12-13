# Ticket 02: Implement Hero Visualizer

Summary
- Build a lazy-loaded `HeroVisualizer` component (canvas/shader/particles or similar) that fills the hero right column, reacting subtly to pointer movement. Provide reduced-motion and static gradient fallbacks.

Tasks
- Create `components/HeroVisualizer.tsx` with lazy import in `app/page.tsx`; ensure no SSR breakage.
- Implement lightweight visual (e.g., WebGL or canvas particles) with capped complexity to protect performance; add pointer/hover reactivity.
- Add fallback rendering for `prefers-reduced-motion` and when canvas/WebGL is unavailable (static gradient or SVG).
- Ensure component respects theme variables and does not shift layout on load.

Acceptance criteria
- Visualizer loads only on client; no hydration warnings or SSR errors.
- Pointer interaction works on desktop; mobile degrades gracefully.
- Reduced-motion users see static/fade-only visual; page remains performant (no obvious jank).
- Visual area matches hero container dimensions and preserves CTA readability (contrast OK in light/dark).

Dependencies/Notes
- Integrates with layout from `ticket-01-hero-structure.md`.
- See `AGENT_WORKSPACE/AGENT_PLANS/immersive-hero-plan.md` for goals and constraints.
