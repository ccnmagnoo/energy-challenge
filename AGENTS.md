# AGENTS.md

Static Astro 5 site (Spanish, `es-CL`) for the #EnergyChallenge school energy-saving contest. No backend, no tests, no CI: all logic runs at build time.

## Commands

- `npm run dev` — dev server at `localhost:4321`
- `npm run build` — static build to `dist/`; this is the only verification step (there is no test, lint, or typecheck script)
- `npm run preview` — serve the built `dist/`
- `npm run deploy` — `firebase deploy --only hosting:energychallenge` (Firebase project `myappt51`, requires an authenticated `firebase` CLI)
- `npx prettier --write <file>` — Prettier is configured (tabs, single quotes, no semicolons, width 100) but has no npm script; format only the files you touch

Use npm: `node_modules` was installed with npm and `package-lock.json` is the current lockfile. `bun.lock` is a stale duplicate — don't update it.

## Routing and page structure

- `src/pages/` maps 1:1 to URLs: `/`, `/fullcolor/`, `/plan/`, `/records/`, `/rules/2026/`.
- Rules pages are year-named (`src/pages/rules/2026.astro`). A new season needs a new page plus updating the hardcoded `/rules/2026` links in `src/components/Subtitle.astro` and `src/components/WelcomeColor.astro`.
- `src/components/ContentPage.astro` is the wrapper for inner pages (adds `HeroLogo` and the `.rules` prose styles on top of `LayoutColor`). Pass `hasPlayer={false}` to drop the fixed audio player.
- Both layouts mount `ClientRouter`; the matching `transition:name` values (`heroLogo`, `heroYear`, `heroButton`) drive the cross-page hero animation. Keep them paired when moving components.

## Content, dates, and sponsors

- `src/models/ChallengeContext.ts` is the single source for the challenge year, milestones, and sponsors. The exported `ctx` uses `new Challenge(new Date(2026, 5, 5, 10), 8)` — JS months are 0-indexed, so `5` is June.
- Known inconsistencies in that file: the constructor's `challengeMonth` argument is ignored (`setChallengePeriod(launch, 8)` hardcodes August), and `awardsDates` is still `new Date(2025, 11, 15, 12, 0)`. Fix these when rolling over a season.
- The year is also hardcoded in copy, not derived from `ctx.year`: `#ec26` in `Player.astro`, "Noviembre 2026" in `SubscribeButton.astro`, `#ec25` in both layouts' meta descriptions, and "Registro 2022-2025" in `records/index.astro`. Grep the old year when updating.
- The records table renders `src/assets/records.json` directly; edit the JSON, not the page markup.

## Assets

- Import assets in frontmatter (`import x from '../assets/...'`) and use `x.src`; only `public/` files are served from the site root (e.g. `/ec-ico.svg`).
- `src/assets/` contains large committed media (mp4 ~15–20 MB, PNG ~8 MB, mp3). `Flare.astro` imports the background video and `Player.astro` the audio, so builds and clones are heavy; don't move or delete these without checking imports.
- `dist copy/` is a committed snapshot of the 2025 launch build. Nothing regenerates it — never edit it. Real build output is `dist/` (gitignored).

## Styling

- Styles live in scoped `<style>` blocks inside components (Astro supports CSS nesting). `src/styles/global.css` is unused and not imported anywhere.
- Rules content uses a custom `<bold>` element styled in `ContentPage.astro` for accent-colored highlights; `<b>`/`<strong>` won't get that styling.
- `README.md` is still the Astro starter boilerplate and describes a different file tree — trust `package.json` and `src/` over it.
