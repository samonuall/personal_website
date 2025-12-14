# Ticket 01 – Expandable ProjectRow component

## Goal
Create a reusable `ProjectRow` component that replaces the modal-driven project card. It should render a collapsed summary row that expands inline to show project details, using existing project data types and respecting the minimal, progressive-disclosure tone.

## Deliverables
- New component (or refactor of the current project card) that supports collapsed and expanded states inline.
- Props typed against the existing `Project` shape; no data shape changes.
- Expand/collapse toggle implemented with a semantic button and `aria-expanded`.
- Inline detail area includes title, description, tech chips, CTA links, and a placeholder slot for media/animation.

## Tasks
- Define `ProjectRow` API and props, reusing the `Project` type.
- Implement collapsed summary (title + key meta/tags) with an inline expand toggle.
- Implement expanded detail surface with media placeholder, description, tech list, and CTAs.
- Add basic keyboard/focus handling for the toggle; expose callbacks/ids needed for page-level hash behavior.

## Acceptance Criteria
- Component renders correctly in collapsed and expanded modes without layout shift errors.
- Toggle is a button with `aria-expanded`; focus states are visible.
- No Radix Dialog or modal dependencies remain in the component.
- Uses existing theme tokens/typography utilities; no new data fields introduced.

## Dependencies
- None; this ticket should land before page-level wiring and styling polish.
