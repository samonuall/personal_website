# Ticket 01: Rebuild Home Hero Structure

Summary
- Restructure `app/page.tsx` hero into split layout (copy/CTAs left, visual area right) per `immersive-hero-plan.md`. Integrate `TypedHeadline` placeholder, keep existing CTA buttons and links functional.

Tasks
- Update hero markup/layout in `app/page.tsx` to two-column responsive structure (stack on mobile) while preserving CTA destinations.
- Mount `TypedHeadline` component (stub acceptable initially) in hero headline area; keep current heading text as fallback.
- Reserve container for `HeroVisualizer` on the right; ensure layout degrades gracefully with static gradient background if visualizer is absent.
- Verify theme classes and spacing align with existing global styles; avoid breaking nav/slider sections that follow.

Acceptance criteria
- Hero renders split layout on desktop and stacks on mobile; CTAs still navigate to `/experience` and `/projects`.
- Headline cycles or is ready to cycle via `TypedHeadline`; fallback text visible if JS disabled.
- Visual area present with non-empty fallback (e.g., gradient) and does not overlap nav/CTA content.
- No regressions to sections below hero (sliders/tech grid still reachable and styled).

Dependencies/Notes
- See `AGENT_WORKSPACE/AGENT_PLANS/immersive-hero-plan.md` for overall context.
