# Ticket 03: Add Typed Headline

Summary
- Implement `TypedHeadline` component that cycles through specialties/technologies using existing content (no new data). Integrate into hero left column.

Tasks
- Build `components/TypedHeadline.tsx` with type/rotate animation; honor `prefers-reduced-motion` by shortening or disabling animation.
- Source keywords from existing tech/experience lists (hardcode a curated subset; no schema changes).
- Provide graceful fallback text if JS disabled or animation skipped.
- Wire component into hero markup (`app/page.tsx`) replacing or augmenting existing heading copy; keep CTA subtext intact.

Acceptance criteria
- Headline cycles smoothly through keywords on desktop/mobile; no stutter.
- Reduced-motion users see static text or minimal transitions.
- Keywords drawn from existing skills/tech; no new content added.
- Hero layout remains stable; CTAs unaffected.

Dependencies/Notes
- Follows layout from `ticket-01-hero-structure.md`; will display alongside `HeroVisualizer`.
- See `AGENT_WORKSPACE/AGENT_PLANS/immersive-hero-plan.md` for context.
