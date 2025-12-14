## Projects Page Refactor Plan

### Goal & Boundary
- Replace the projects grid/modal with a vertical list of summary rows that expand inline into full-width detail panels on both desktop and mobile.
- Match the modern, minimal, progressive-disclosure vibe of `app/page.tsx`; keep existing theme tokens and project data unchanged.
- Limit scope to the projects route UI/components; home page and other sections remain as-is.

### Approach (High Level)
- Update `app/projects/page.tsx` to render a vertical “index-card” style list with inline expandable panels, carrying over typography/spacing tone from `app/page.tsx`.
- Add or refactor a reusable component (`project-row` or a repurposed `project-card`) to handle collapsed summary, expand toggle, inline detail with an image/animation placeholder, tech chips, and CTAs.
- Remove modal/Radix Dialog usage on the projects page; preserve or simplify hash/scroll behavior with stable ids/refs.
- Style via globals or a scoped module to achieve a minimal, systems-like feel (thin dividers, restrained accents, ample whitespace).

### Alternatives
- Keep Radix Dialog but fake inline display: rejected because dialog semantics conflict with inline progressive disclosure.
- Rebuild the page with a brand-new theme: rejected as unnecessary churn; better to align with the existing `app/page.tsx` styling.

### Risks & Mitigations
- Hash navigation breaks if refs change → keep stable ids/refs and auto-expand when matching the hash.
- Accessibility regression without dialog focus trap → use a button for expand/collapse with `aria-expanded` and clear focus states.
- Mobile overflow from inline detail/media → cap media widths, allow text wrapping, and verify on small viewports.
- UI mismatch with home page → reuse spacing/typography tokens and divider patterns from `app/page.tsx`.
- Test breakage from markup changes → update/add tests for the new row behavior.

### Test & Validation
- Run `npm test -- testing/unit_tests/project-card.test.tsx` (or successor) after refactor.
- Manual on `/projects`: expand/collapse works, placeholder media shows, tech chips/links function, hash navigation (if kept), responsive at various breakpoints, keyboard toggle works.

### Implementation Outline (No Code)
1) Define `ProjectRow` API (reuse `Project` type): collapsed summary line (title, tags/meta), expand toggle, inline detail with placeholder media area, tech list, and CTAs.
2) Modify `app/projects/page.tsx` to render the vertical list using the new component; mirror `app/page.tsx` spacing/typography; wire ids/refs for hash auto-expand.
3) Add/refine styles (global or scoped) for minimal, modern, systems feel with dividers and whitespace; ensure responsiveness.
4) Update/add tests covering collapsed/expanded rendering, placeholder presence, and link visibility.
5) Manually verify `/projects` across desktop/mobile for progressive disclosure, accessibility, and hash behavior.

### Open Questions / Assumptions
- Assume hash auto-expand behavior should stay.
- Assume removing Radix Dialog on the projects page is acceptable.
- Assume we should reuse existing color/typography accents from `app/page.tsx` without introducing new theme primitives.
