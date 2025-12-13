# Repository map (portfolio site)
- Purpose: Next.js 14 app showcasing Sam O'Nuallain portfolio with landing page, projects grid, theme toggle, and modal dialogs; experiences are still data-backed but no longer have their own page.
- Key dirs: `app` (route entry points `page.tsx`, `projects/page.tsx`; global styles/layout/fonts), `components` (UI building blocks including sliders, cards, nav, theme toggle, scroll animation), `data` (static sources for experiences/projects/technologies), `lib/utils.ts` (Tailwind class merger), `public` (images/icons referenced in data).
- Entry points: `app/page.tsx` (home), `app/projects/page.tsx` (projects grid with dialogs); `app/layout.tsx` wires global metadata/styles and wraps pages.
- Running: `npm run dev` for local server; `npm test` uses Jest + ts-jest + Testing Library targeting `testing/**/*.test.tsx`; env flag `NEXT_PUBLIC_PRIVATE_MODE` would alter experience card interactivity if reused.

# Execution & data flow
- Home (`app/page.tsx`): renders `BackgroundPattern`, `Nav`, hero with CTA buttons for contacting via email and viewing projects, then `StoryScroller` (mixes select experiences + projects with metrics), `SkillsSection`, and footer with `SocialLinks`. Uses `ScrollAnimation` wrappers and `Analytics` client component.
- Projects page (`app/projects/page.tsx`): hash/scroll logic with refs and click dispatch; renders grid of `ProjectCard`s from `projects` data; CTA button links to GitHub profile.
- `ExperienceCard` (`components/experience-card.tsx`): unused now that the experience page is gone, but still opens a Radix `Dialog` showing full description unless `NEXT_PUBLIC_PRIVATE_MODE==='true'`; `ref` forwarded to card container.
- `ProjectCard` (`components/project-card.tsx`): card opens dialog showing image, description, tech chips, optional GitHub/link buttons, and special report button for project id `2`; uses local `isOpen` state.
- `ScrollAnimation`: IntersectionObserver toggles `visible` class + transforms when element enters viewport; delays configurable.
- Theme handling: `components/theme-toggle.tsx` toggles `light` class on `document.documentElement`, persisting to `localStorage`; defaults to dark (no `light`).
- Data structures: `data/experiences.ts` defines `Experience{id,title,company,contractType,location,dateRange,description[]}`; `data/projects.ts` defines `Project{id,title,description,image,technologies[],github?,link?}`; `data/technologies.ts` defines `Technology{name,icon,category}` plus `categories` labels.

# Change surface index
- `data/experiences.ts` / `data/projects.ts` / `data/technologies.ts`: primary content sources; edits change displayed cards/grids and slider content.
- `app/page.tsx`: orchestrates home layout, CTA links, and embeds scroller/skills sections; adjust structure/hero/sections here.
- `components/experience-slider.tsx` & `components/project-slider.tsx`: control horizontal preview lists and scroll behavior; experience slider is currently unused and no longer navigates anywhere.
- `app/projects/page.tsx`: manages hash scroll-to-card and click dispatch that opens dialogs; sensitive to ref wiring and ids matching data; behavior tied to `ProjectCard` dialogs.
- `components/experience-card.tsx` & `components/project-card.tsx`: dialog content and interactivity; depend on Radix dialog primitives, environment flag (`NEXT_PUBLIC_PRIVATE_MODE`), and data shapes; widely reused if reintroduced.
- `components/theme-toggle.tsx` and `app/globals.css`: govern theme class handling and CSS variables; altering affects entire site styling.
- Testing: `testing/unit_tests/project-card.test.tsx` covers `ProjectCard` rendering/dialog/links; changes to structure or labels may require test updates; Jest config (`jest.config.mjs`, `jest.setup.js`) mocks `next/image`.

# Open questions
- Should `ExperienceCard` and `experience-slider` be repurposed or removed now that the dedicated experience route is gone?
- Expected behavior for `NEXT_PUBLIC_PRIVATE_MODE` on project cards or other sections—currently only experience dialogs would lock down details if used.
- Any required preloading or hosting constraints for images/files referenced in `public` (e.g., `/poker_bot_report.pdf`, `/profile.jpg`, icons)?
- Are hash-triggered auto-clicks meant to always open dialogs on navigation, or just scroll without opening?
