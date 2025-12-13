# Repository map (portfolio site)
- Purpose: Next.js 14 app showcasing Sam O'Nuallain portfolio with landing page, project list, experiences, tech grid, theme toggle, and modal dialogs for details.
- Key dirs: `app` (route entry points `page.tsx`, `projects/page.tsx`, `experience/page.tsx`; global styles/layout/fonts), `components` (UI building blocks including sliders, cards, nav, theme toggle, scroll animation), `data` (static sources for experiences/projects/technologies), `lib/utils.ts` (Tailwind class merger), `public` (images/icons referenced in data).
- Entry points: `app/page.tsx` (home), `app/projects/page.tsx` (projects grid with dialogs), `app/experience/page.tsx` (experience cards with dialogs); `app/layout.tsx` wires global metadata/styles and wraps pages.
- Running: `npm run dev` for local server; `npm test` uses Jest + ts-jest + Testing Library targeting `testing/**/*.test.tsx`; env flag `NEXT_PUBLIC_PRIVATE_MODE` alters experience card interactivity.

# Execution & data flow
- Home (`app/page.tsx`): renders `BackgroundPattern`, `Nav`, hero with CTA buttons linking to `/experience` and `/projects`, then `ExperienceSlider` → `router.push('/experience#id')`, `ProjectSlider` → `router.push('/projects#id')`, `TechnologiesGrid`; footer shows `SocialLinks`. Uses `ScrollAnimation` wrappers for reveal-on-scroll and `Analytics` client component.
- Experience page (`app/experience/page.tsx`): client component; builds refs for cards; on mount reads `window.location.hash`, scrolls to matching card div and dispatches click to open dialog. Renders list of `ExperienceCard`s (each inside `ScrollAnimation`). Uses `experiences` data as source of truth.
- Projects page (`app/projects/page.tsx`): similar hash/scroll logic with refs and click dispatch; renders grid of `ProjectCard`s from `projects` data; CTA button links to GitHub profile.
- `ExperienceCard` (`components/experience-card.tsx`): card opens Radix `Dialog` showing full description unless `NEXT_PUBLIC_PRIVATE_MODE==='true'`, in which case click is disabled and card text hints to click otherwise; `ref` forwarded to card container (TODO notes ref pointing to card).
- `ProjectCard` (`components/project-card.tsx`): card opens dialog showing image, description, tech chips, optional GitHub/link buttons, and special report button for project id `2`; uses local `isOpen` state.
- `ScrollAnimation`: IntersectionObserver toggles `visible` class + transforms when element enters viewport; delays configurable.
- Theme handling: `components/theme-toggle.tsx` toggles `light` class on `document.documentElement`, persisting to `localStorage`; defaults to dark (no `light`).
- Data structures: `data/experiences.ts` defines `Experience{id,title,company,contractType,location,dateRange,description[]}`; `data/projects.ts` defines `Project{id,title,description,image,technologies[],github?,link?}`; `data/technologies.ts` defines `Technology{name,icon,category}` plus `categories` labels.

# Change surface index
- `data/experiences.ts` / `data/projects.ts` / `data/technologies.ts`: primary content sources; edits change displayed cards/grids and slider content.
- `app/page.tsx`: orchestrates home layout, CTA links, and embeds sliders/tech grid; adjust structure/hero/sections here.
- `components/experience-slider.tsx` & `components/project-slider.tsx`: control horizontal preview lists, hash routing, scroll behavior; change if navigation between preview and detail pages should differ.
- `app/experience/page.tsx` & `app/projects/page.tsx`: manage hash scroll-to-card and click dispatch that opens dialogs; sensitive to ref wiring and ids matching data; behavior tied to `ExperienceCard`/`ProjectCard` dialogs.
- `components/experience-card.tsx` & `components/project-card.tsx`: dialog content and interactivity; depend on Radix dialog primitives, environment flag (`NEXT_PUBLIC_PRIVATE_MODE`), and data shapes; widely reused, so changes affect multiple pages.
- `components/theme-toggle.tsx` and `app/globals.css`: govern theme class handling and CSS variables; altering affects entire site styling.
- Testing: `testing/unit_tests/project-card.test.tsx` covers `ProjectCard` rendering/dialog/links; changes to structure or labels may require test updates; Jest config (`jest.config.mjs`, `jest.setup.js`) mocks `next/image`.

# Open questions
- Should `ExperienceCard` ref point to the clickable card or outer wrapper (TODO exists) if hash-scrolling reliability matters?
- Expected behavior for `NEXT_PUBLIC_PRIVATE_MODE` on project cards or other sections—currently only experience dialogs lock down details.
- Any required preloading or hosting constraints for images/files referenced in `public` (e.g., `/poker_bot_report.pdf`, `/profile.jpg`, icons)?
- Are hash-triggered auto-clicks meant to always open dialogs on navigation, or just scroll without opening?
