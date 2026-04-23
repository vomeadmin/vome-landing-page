# Vome Landing Page — Design Export

This folder is a **self-contained snapshot** of the current Vome landing page (the route at `/`), packaged for use as input to Claude Design (or any other design tool).

It is **not part of the build** — nothing in `src/` references it. You can zip it, upload it, edit it, or delete it at will without affecting the React app.

## What's in here

| File | Purpose |
|---|---|
| `README.md` | This file — orientation + how to use with Claude Design |
| `BRAND.md` | Brand colors, fonts, and logo info extracted from the live theme |
| `PAGE_STRUCTURE.md` | Section-by-section map of the current `/` page in render order |
| `source/` | Direct copies of the React component files for each section |

## Goal of the rebuild

- **Target stack:** Next.js + Tailwind CSS (current stack is React 16 + CRA + Material-UI v4, which we are moving away from for the marketing site)
- **Scope:** marketing landing page only (`/`). The authenticated app stays on the current stack for now.
- **Brand:** keep the orange-forward Vome identity but modernize the visual language.

## How to use this with Claude Design

1. **Zip this folder** and upload it as project context, OR copy/paste the three markdown files directly into your Claude Design brief.
2. Point Claude Design at the **live current site** for visual reference: <https://vomevolunteer.co>.
3. Use `PAGE_STRUCTURE.md` as the section outline — Claude Design can reorder, merge, or rebuild any section.
4. Use `BRAND.md` to seed your Tailwind config (`tailwind.config.js` → `theme.extend.colors`).
5. The files in `source/` are **reference-only** — they're tangled in MUI v4, react-i18next, and Redux, so don't expect Claude Design to port them line-for-line. They exist to show the *structure and current copy*.

## Important caveats about `source/`

The component files have unresolved dependencies that won't work outside this repo:
- **Translation keys** (`t('key_name')`) — the actual English/French strings live in `src/translations/postlogin.js`. If you need real copy, ask and we can resolve the keys.
- **Image imports** (`../../../assets/images/...`) — assets are not copied into this folder. Image filenames in the imports give you a hint at intent.
- **MUI `makeStyles`** — heavy `useStyles` blocks describe the *current* responsive breakpoints. Useful as a sizing reference, ignore the API specifics.
- **Redux + history** — login plumbing on the landing page is incidental; the design tool can ignore it.
