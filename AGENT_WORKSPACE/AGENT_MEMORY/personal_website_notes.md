# Personal website – working notes

- Repo shape: Next.js 14 app with app router (`app/page.tsx`, `app/projects/page.tsx`, `app/experience/page.tsx`); UI pieces in `components`, static content in `data/*.ts`, styling via Tailwind CSS tokens in `app/globals.css`; dialogs/theme toggle rely on Radix + local state.
- Navigation behavior: home preview sliders (`components/*-slider.tsx`) push hash URLs (`/projects#id`, `/experience#id`); target pages read `window.location.hash`, scroll into view, and dispatch click to auto-open dialogs.
- Environment flag: `NEXT_PUBLIC_PRIVATE_MODE` disables opening `ExperienceCard` dialogs (renders “Click to learn more” text but blocks setOpen).
- Testing setup: Jest + ts-jest + Testing Library; tests live under `testing/**/*.test.tsx`; `jest.setup.js` mocks `next/image`; run via `npm test`.
- Useful commands: `npm run dev` to view site; `npm test` for unit tests; `sed -n '1,200p' <file>` for quick file reads; `ls <dir>` for structure.
- Styling/theme: CSS variables for light/dark defined in `app/globals.css`; `components/theme-toggle.tsx` toggles `light` class on `document.documentElement` using localStorage; default dark if no stored value.
- Type safety: React ref callbacks default to `HTMLElement | null`; when storing in typed arrays like `useRef<HTMLDivElement[]>`, annotate callbacks (e.g., `ref={(el: HTMLDivElement | null) => panelRefs.current[i] = el}`) to satisfy strict TS.
