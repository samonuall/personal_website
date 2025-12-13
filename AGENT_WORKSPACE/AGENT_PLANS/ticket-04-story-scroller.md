# Ticket 04: Build Story Scroller

Summary
- Create a scroll-driven “story spine” below the hero with pinned/staggered panels that highlight skills/projects using existing data. Add parallax and code-snippet reveals with reduced-motion fallbacks.

Tasks
- Design `components/StoryScroller.tsx` to render 3–5 panels (skills, project highlights, experience beats) sourced from current `data/projects.ts`/`data/experiences.ts` content; no new data fields.
- Implement scroll choreography (pinning/parallax/staggered reveals) with `ScrollAnimation` or a lightweight scroll controller; respect `prefers-reduced-motion`.
- Include code/diagram snippets derived from existing descriptions/tech; use syntax-highlighted blocks or stylized cards without new content.
- Integrate component into `app/page.tsx` beneath hero, ensuring existing sliders/tech grid remain reachable (either move them below or blend into narrative).

Acceptance criteria
- Panels animate in sequence on scroll with smooth parallax; reduced-motion users see static sequential cards.
- Content corresponds to existing projects/experiences; no schema changes.
- Section responsive on mobile (no horizontal scroll required).
- Sliders/tech grid still accessible; navigation via CTAs unaffected.

Dependencies/Notes
- Requires hero layout from `ticket-01-hero-structure.md`.
- Aligns with motion/visual guidelines in `AGENT_WORKSPACE/AGENT_PLANS/immersive-hero-plan.md`.
