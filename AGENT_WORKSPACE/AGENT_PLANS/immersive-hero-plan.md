# Immersive Home Hero & Narrative Scroller Plan

## Plan summary
- Rebuild home hero into split layout with reactive visual (canvas/shader/particles) and rotating headline keywords; keep CTAs intact (contact + projects).
- Add scroll-driven narrative sections after hero: pinned/staggered panels that spotlight skills/projects with parallax and code snippet reveals using existing data.
- House new visuals in dedicated components for isolation and lazy loading; preserve routing/dialog behaviors and theme toggle.
- Provide reduced-motion/static fallbacks; keep theme contrast intact.
- Validate CTAs, deep links, and performance on desktop/mobile.

## Goal & boundary
- Change: immersive hero with reactive visual and cycling specialties; scroll-driven story spine replacing/augmenting sliders.
- Unchanged: routes (`/`, `/projects`), CTA targets, dialogs/hash behavior on other pages, `data/*.ts`, theme toggle logic.
- Boundary: home page UI/UX only; no new content or backend.

## Approach (high level)
- `app/page.tsx`: restructure hero; insert narrative scroller.
- New components: `HeroVisualizer` (lazy-loaded canvas/shader/particles), `TypedHeadline` (rotating keywords), `StoryScroller` (pinned/parallax sections with code/skill snippets derived from existing data).
- Styling/motion via `app/globals.css` or scoped styles; reuse theme tokens; honor `prefers-reduced-motion`.
- Data reuse only; no schema changes.

## Alternatives (rejected)
- Add hero animation only, keep rest untouched: not sufficiently narrative/impactful.
- Replace home with single long-form case study: too disruptive to navigation/CTAs.

## Risks & mitigations
- Performance from canvas/shader → lazy-load, cap complexity, static gradient fallback.
- Motion discomfort → respect `prefers-reduced-motion`, provide disable toggle.
- Layout/CTA regression → preserve anchors/spacings; test breakpoints.
- Theme contrast → rely on existing CSS vars; test light/dark.

## Test & validation
- Manual: home load, CTA clicks, scroll narrative flow (desktop/mobile), reduced-motion, theme toggle.
- Automated: run `npm test` if DOM changes affect tested components.
- Visual sanity: FPS/perf check on hero visual; ensure no hash behavior regressions elsewhere.

## Implementation outline
- Sketch new hero structure in `app/page.tsx` (split layout, CTAs preserved).
- Add `HeroVisualizer` with lazy loading + fallback.
- Add `TypedHeadline` cycling specialties/technologies.
- Build `StoryScroller` with 3–5 pinned panels using existing project/experience content and code snippet reveals; integrate after hero.
- Wire reduced-motion checks and theme-aware styles; adjust CSS.
- QA manual flows and run tests as needed.
