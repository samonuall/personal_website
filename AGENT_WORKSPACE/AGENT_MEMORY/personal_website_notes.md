# Personal website – working notes

## Repo shape
- Next.js 14 app router. Routes: `app/page.tsx` (home), `app/projects/page.tsx`. `app/layout.tsx` wires fonts + metadata.
- Content lives in `data/*.ts` (`projects`, `experiences`, `publications`, `education`, `skills`). **Edit data, not markup** — every section maps over a data file.
- Shared primitives in `components/ui/`: `section.tsx` (`Section`, `SectionHeader`), `tag.tsx` (`Tag`, `TagList`), `entry-card.tsx` (`EntryCard`), plus shadcn `button`/`card`/`dialog`.
- Section components: `hero`, `experience-timeline`, `featured-projects`, `skills-section`, `research-section`, `nav`, `site-footer`, `background-pattern`.

## Theming (rewritten Aug 2026)
- Palette is **light-first**: warm paper background, muted evergreen `--primary`, warm clay `--highlight`. `:root` = light, `.dark` = dark. Tailwind `darkMode: ["class"]` matches `.dark`, so `dark:` variants work.
- `--highlight` is a **custom token beyond shadcn's set** (mapped to `highlight` in tailwind config). Keep `--accent` a quiet surface — shadcn's `button` uses `hover:bg-accent` for outline/ghost, so putting a saturated color there makes every outline button flash bright on hover.
- `components/theme-script.tsx` applies the stored theme pre-paint via an inline script in `<head>`; `components/theme-toggle.tsx` only mirrors/updates it. Both share the `theme` localStorage key — change them together.
- Fonts come from `next/font/google` and expose `--font-sans` / `--font-heading` consumed by `tailwind.config.js`. **Gotcha:** Next 14 warns `Failed to find font override values for font X` for fonts missing from its metrics DB (Newsreader hit this; Lora is fine). Non-fatal, but pick a font Next knows.
- There used to be **both** `tailwind.config.js` and `tailwind.config.ts`; Tailwind resolves `.js` first, so the `.ts` was dead and misleading. Deleted — keep one config.

## Layout conventions
- Every section: `<Section divided>` + `<SectionHeader eyebrow title description action />`. Consistent rhythm comes from `Section`, not per-page padding.
- Cards are one shape: `rounded-2xl border border-border bg-card shadow-card`. `shadow-card`/`shadow-lift` are custom, deliberately soft — avoid `shadow-2xl`.
- `.eyebrow` utility in `globals.css` is the small-caps label above headings.

## Things that bit me
- **Don't gate content behind IntersectionObserver reveals.** The old `ScrollAnimation` wrapper started at `opacity-0`; jumping straight to an anchor (or a Playwright `scrollTo(0, scrollHeight)`) skips the intersection entirely and the section stays invisible. Removed it. If reveal animation is ever wanted again, make the *visible* state the default and animate as an enhancement.
- Expand/collapse: `project-row.module.css` uses the `grid-template-rows: 0fr → 1fr` trick instead of a hand-tuned `max-height`, so tall rows can't get clipped. Collapsed state uses `visibility: hidden`, which correctly removes inner links from the tab order — no `inert` needed (and `inert` isn't supported by React 18 anyway).
- Avoid `id`-based special cases in components. The old `ProjectRow` hardcoded `project.id === "7"` for a video and `=== "2"` for a report link. Now `Project` carries `media` (`image | video`) and `links[]` (`github | paper | site | demo`), so the component is generic.
- Nav overflowed at 320px. Links carry an `alwaysVisible` flag; secondary ones hide below `sm`, and social icons hide below `sm` (they're in the footer too).

## Commands
- `npm run dev` (localhost:3000), `npm run build` to typecheck + prerender.
- `npm run lint` currently fails with `Invalid Options: useEslintrc, extensions` — a pre-existing eslint 9 vs `eslint-config-next` 16 mismatch. It does **not** block `next build`.
- `npm test` is stale: `jest.config.mjs` points at `testing/**/*.test.tsx`, which no longer exists. Per CLAUDE.md, tests aren't expected here — verify visually instead.

## Visual verification (works well, reuse this)
Chromium is preinstalled at `/opt/pw-browsers/chromium`. Start dev, then drive Playwright:
```js
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
```
Screenshot desktop + 390px + 320px, and assert no horizontal overflow:
```js
await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth) // expect 0
```
To find *what* overflows, filter all elements by `getBoundingClientRect().right > clientWidth`. This caught the nav overflow immediately.
Expect `ERR_CONNECTION_RESET` console errors locally — that's `@vercel/analytics` failing to phone home in the sandbox, not a site bug.

## PDFs in this sandbox
`pdftotext`/`poppler-utils` isn't installable (404 on the apt mirror), and `pypdf` initially fails with `ModuleNotFoundError: _cffi_backend` from `cryptography`. Fix: `pip install --force-reinstall cffi`, then `pypdf.PdfReader(...).pages[i].extract_text()`.

## Deployment
- Pushing to `main` auto-deploys to **samonuall.vercel.app** (this is the live URL used in `metadataBase`, not the older `samonuallain` one in the resume).
