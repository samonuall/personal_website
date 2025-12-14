# Ticket 03 – Styling alignment with home page

## Goal
Apply a minimal, systems-like visual treatment to the new projects list that aligns with the tone of `app/page.tsx`: thin dividers, restrained accents, whitespace-forward spacing, and consistent typography.

## Deliverables
- Scoped styles (module or dedicated stylesheet) or shared utilities that style the `ProjectRow` list and detail surfaces.
- Consistent spacing/typography that mirrors `app/page.tsx` patterns and theme tokens.
- Media/placeholder area sized to avoid overflow on small viewports; text wraps gracefully.
- Clear hover/focus affordances for the expand toggle and CTAs.

## Tasks
- Add or update style module(s) for the projects page and/or `ProjectRow`, reusing existing CSS variables.
- Implement divider and spacing rhythm for the vertical list; ensure expanded panels feel full-width and airy.
- Style tech chips and CTAs to match home-page accents; keep placeholder media constrained with sensible aspect handling.
- Verify dark/light theme compatibility without introducing new theme primitives.

## Acceptance Criteria
- Projects list visually aligns with the home page: matching font weights, spacing scale, and divider usage.
- Expanded panels remain readable on mobile (no horizontal scroll); media/placeholder stays within bounds.
- Focus and hover states are visible in both themes.
- No new global theme tokens introduced; uses existing CSS variables/utilities.

## Dependencies
- Depends on Ticket 02 layout being in place for styling targets.
