# Repository map (portfolio site)
- Purpose: Next.js 14 portfolio for Sam O'Nuallain — light "warm paper" design, a home page and a projects page. Deploys to samonuall.vercel.app on push to `main`.
- Key dirs: `app` (routes, global styles, layout), `components` (section components + `components/ui` primitives), `data` (all content), `lib/utils.ts` (Tailwind class merger), `public` (images, PDFs, `public/diagrams/*.svg`).
- Entry points: `app/page.tsx` (home, server component), `app/projects/page.tsx` (client component — owns hash routing), `app/layout.tsx` (fonts, metadata, pre-paint theme script).

# Execution & data flow
- Home (`app/page.tsx`): `BackgroundPattern` → `Nav` → `Hero` → experience `Section` + `ExperienceTimeline` → `FeaturedProjects` → `SkillsSection` → `ResearchSection` → `SiteFooter`. Fully static; the only client components are `ProjectRow` and `ThemeToggle`.
- Projects (`app/projects/page.tsx`): renders every `Project` as a controlled `ProjectRow`. `expandedId` state + `rowRefs` drive hash deep-linking (`/projects#autoindex` expands and scrolls); `history.replaceState` keeps the hash in sync and clears it on collapse. Home's `FeaturedProjects` uses the same component uncontrolled, with `featured-` prefixed ids so the two pages' anchors don't collide.
- Theme: `components/theme-script.tsx` sets `.dark` on `<html>` before paint from `localStorage.theme`, falling back to `prefers-color-scheme`. `ThemeToggle` reads that class on mount and toggles it. Light is the default.
- Data shapes:
  - `Project{id,title,tagline,description,highlights?,year,technologies[],media?,links?}` — `media` is `{type:'image'|'video',src,poster?,caption?}`; `links[]` is `{kind:'github'|'paper'|'site'|'demo',href,label?}` and `ProjectRow` maps `kind` to an icon/label/button variant. `featuredProjectIds` selects what the home page shows.
  - `Experience{...,technologies?}`, `Publication{title,authors,venue,year,href?}`, `Education{school,degree,dateRange,note?}`, `SkillGroup{label,skills[{name,icon?}]}`.

# Change surface index
- Adding a project/role/paper/skill: edit the matching file in `data/` only. To feature a project on the home page, add its id to `featuredProjectIds` in `data/projects.ts`.
- Restyling globally: `app/globals.css` (HSL tokens for light + `.dark`) and `tailwind.config.js` (color mapping, `shadow-card`/`shadow-lift`, font vars). These two files govern the whole site's look.
- Section spacing/headings: `components/ui/section.tsx`. Card shape: `components/ui/entry-card.tsx`. Pills: `components/ui/tag.tsx`.
- Expand/collapse behavior + media/link rendering: `components/project-row.tsx` and its CSS module.
- Assets: project figures are hand-authored SVGs in `public/diagrams/` (paper-toned so they read in both themes); PDFs sit at the root of `public/` and are linked via a `links[]` entry of kind `paper`.

# Notes / open questions
- `data/experiences.ts` lists the CIIR researcher role as ending June 2025 (matching `AGENT_WORKSPACE/resume.md`). If that research is ongoing, change the `dateRange` back to "Present".
- `npm run lint` and `npm test` are both broken from pre-existing dependency/config drift (eslint 9 vs eslint-config-next 16; jest pointing at a deleted `testing/` dir). `npm run build` is the working check.
- `NEXT_PUBLIC_PRIVATE_MODE` is referenced in `.env.example` but no longer read by any component — the experience dialogs it gated were removed.
