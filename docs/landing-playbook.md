# Module landing-page playbook

How to build a per-module marketing page (e.g. `/volunteer-application-forms`) on the Astro landing site. Pilot page: [`src/pages/volunteer-application-forms.astro`](../src/pages/volunteer-application-forms.astro). Read that file alongside this doc — it's the canonical example.

The goal: each new module page is a thin shell composing the same section sequence with module-specific data. We do **not** rebuild the UI 8 times. New components are added only when a new mockup or section concept is genuinely needed.

---

## 1. Page section sequence

Every module page renders these sections, in this order:

| # | Section | Component | Notes |
|---|---|---|---|
| 1 | Hero | [`ModuleHero`](../src/components/module/ModuleHero.astro) | Eyebrow + 3-part H1 + sub + dual CTAs + 3 meta pills. Named `<slot name="mockup">` for the hero mockup. |
| 2 | Trusted-by marquee | [`Partners`](../src/components/sections/Partners.astro) | Reused as-is. No props needed beyond `locale`. |
| 3 | Benefit grid | [`BenefitGrid`](../src/components/module/BenefitGrid.astro) | **6 cards** (3+3 / 2+2+2 / 1-up). Icon + title + 1–2 sentence desc per card. |
| 4 | Spotlight 1 | [`FeatureSpotlight`](../src/components/module/FeatureSpotlight.astro) `side="right"` | Mockup right, copy left. Custom mockup via `<slot name="mockup">`. |
| 5 | Spotlight 2 | `FeatureSpotlight` `side="left"` | Mockup left, copy right. **Different** mockup from spotlight 1. |
| 6 | Spotlight 3 | `FeatureSpotlight` `side="right"` | Mockup right. **Different** mockup again. Three unique mockups per page. |
| 7 | How it works | [`HowItWorks`](../src/components/module/HowItWorks.astro) | **4 numbered steps**, auto-fit grid (`01`–`04`). |
| 8 | Differentiators | [`Differentiators`](../src/components/module/Differentiators.astro) | **3 cards** in a peach panel. Icon + title + desc. "Why Vome vs. generic alternatives". |
| 9 | Module FAQs | [`Faq`](../src/components/sections/Faq.astro) | Pass `items` + `heading` + `sub` + `ctaText` + `ctaLink` props. **5–6 module-specific Q/As**. |
| 10 | Feature matrix | [`FeatureMatrix`](../src/components/sections/FeatureMatrix.astro) | `onlySection="<key>"`, `showAllToggle`, `heading={<override>}`. Table filtered to this module's rows; expand button reveals the rest. |
| 11 | Closing CTA | [`ClosingCta`](../src/components/sections/ClosingCta.astro) | Reused as-is. |

Section backgrounds alternate (surface-1 ↔ white) to give the page rhythm without manual theming. The CSS does this via `:nth-of-type(even)` on `.mp-spotlight`; the rest are explicit per-section.

---

## 2. Reusable components

### `ModuleHero`
Props (all required unless noted):
```
locale?: Locale
eyebrow: string                  // pre-resolved via t()
h1Part1: string                  // black plain text before the accent
h1Accent: string                 // orange-accented middle phrase
h1Part2?: string                 // black plain text after the accent
sub: string                      // HTML (set:html); inline <em>/<strong> allowed
ctaPrimaryHref: string
ctaPrimaryLabel: string
ctaSecondaryHref: string
ctaSecondaryLabel: string
meta: { text: string }[]         // exactly 3 items
```
Slot: `<slot name="mockup">` — pass a mockup component instance.

### `BenefitGrid`
```
locale?: Locale
h2: string
sub?: string
items: { iconSvg: string; title: string; desc: string }[]   // 6 items recommended
```
`iconSvg` is the inner SVG path string (24x24 viewBox, stroke-based, `currentColor`, 1.75 stroke, round caps/joins). The `<svg>` wrapper is provided by the component.

### `FeatureSpotlight`
```
locale?: Locale
kicker: string                   // SHORT UPPERCASE (e.g. "BUILD")
title: string
body: string                     // HTML (set:html)
bullets?: string[]               // 4 recommended
side?: "left" | "right"          // default "right" (mockup right)
```
Slot: `<slot name="mockup">`.

### `HowItWorks`
```
locale?: Locale
h2: string
sub?: string
steps: { title: string; desc: string }[]    // 4 items recommended; numbers auto-prepend (01–04)
```

### `Differentiators`
```
locale?: Locale
h2: string
sub?: string
items: { iconSvg: string; title: string; desc: string }[]   // 3 items
```

### `Faq` (refactored to accept items)
```
locale?: Locale
items?: FaqInputItem[]           // omit to render homepage default list
heading?: { en, fr }
sub?: { en, fr }
ctaText?: { en, fr }
ctaLink?: { en, fr }

FaqInputItem = { q: { en, fr }; a: { en, fr }; open?: boolean }
```
Pass `i18n.module_<key>.faqN_q` / `faqN_a` shapes directly — the component runs `t()` internally.

### `FeatureMatrix` (refactored to accept filter + toggle)
```
locale?: Locale
onlySection?: SectionKey                       // see SectionKey union in the file
heading?: { en, fr }                           // override of plans.comp_h2
showAllToggle?: boolean                        // when true + onlySection set, append "Show all features by plan" expand button
```
The footnote (`comp_footnote`, asterisk explainer for customer-success rows) auto-hides when the success section isn't on screen and inherits the toggle's expanded state.

---

## 3. i18n convention

All copy lives in [`src/i18n/strings.ts`](../src/i18n/strings.ts), one namespace per module:

```ts
module_<key>: {
  page_title: { en, fr },
  page_description: { en, fr },

  // Hero
  hero_eyebrow, hero_h1_part1, hero_h1_accent, hero_h1_part2,
  hero_sub,                                    // HTML; inline <em>/<strong>
  hero_meta_<a>, hero_meta_<b>, hero_meta_<c>,

  // Mockup labels — one sub-namespace per mockup component
  <mockname>_mock: { ...labels for that mockup },

  // Benefits
  benefits_h2, benefits_sub,
  ben1_title, ben1_desc, ... ben6_title, ben6_desc,

  // Spotlights
  spot1_kicker, spot1_title, spot1_body, spot1_b1..b4,
  spot2_kicker, ... spot2_b1..b4,
  spot3_kicker, ... spot3_b1..b4,

  // How it works
  how_h2, how_sub,
  step1_title, step1_desc, ... step4_title, step4_desc,

  // Differentiators
  diff_h2, diff_sub,
  diff1_title, diff1_desc, diff2_title, diff2_desc, diff3_title, diff3_desc,

  // FAQ
  faq_h2, faq_sub, faq_cta_text, faq_cta_link,
  faq1_q, faq1_a, ... faq6_q, faq6_a,

  // Matrix heading override
  matrix_h2,
}
```

**Parity rule**: every leaf has both `en` and `fr`. No mixed leaves, no en-only, no machine translation without review. French should match the Quebec idiom present in existing strings (e.g. `bénévoles` not `volontaires`, `quart` not `shift`).

The keys I named above are the convention pilot page 1 uses — keep the same key names so future template iteration is mechanical.

---

## 4. Imagery / mockup convention

**Hand-built HTML/CSS only.** No `<img src="screenshot.png">`. No images outside the existing `/customers/`, `/logos/`, etc. directories. Mockups are written as Astro components in [`src/components/module/`](../src/components/module/).

### Mockup component naming
- Hero mockup: `<Concept>Mock.astro` (e.g. `FormBuilderMock`, `SchedulerMock`, `KioskMock`)
- Spotlight mockups: same naming, one per spotlight (e.g. `FormSectionsMock`, `WorkflowMock`, `AutomationMock`)

### Shared visual frame
All spotlight mockups use the `.sp-mock` class system (defined in [`src/styles/landing.css`](../src/styles/landing.css)):
```
.sp-mock           outer card with rounded border + soft shadow
.sp-mock__head     top bar: chip + title + optional right-aligned status pill
.sp-mock__chip     small uppercase orange peach pill
.sp-mock__title    bold display-font title
.sp-mock__body     content area
```
Then add a `--<variant>` class on the outer to add module-specific styling: `.sp-mock--build`, `.sp-mock--route`, `.sp-mock--automate`, etc. Component-specific inner classes use a 2–3 letter prefix tied to the variant: `.sp-build__*`, `.sp-route__*`, `.sp-auto__*`.

The hero mockup uses its own `.fb-mock` class system rather than `.sp-mock` — slightly larger frame (browser chrome simulated). Reuse `.fb-mock` for hero mockups across all module pages.

### Icon convention (used in BenefitGrid + Differentiators + mockups)
Inline SVG path string passed via `iconSvg` prop:
- viewBox: `0 0 24 24`
- fill: `none`
- stroke: `currentColor` (component supplies the orange via CSS)
- stroke-width: `1.75`
- stroke-linecap / linejoin: `round`

---

## 5. Routing

Two thin shell pages per module:

```
src/pages/<en-slug>.astro          // default locale (en)
src/pages/fr/<en-slug>.astro       // French shell — imports the EN page and passes locale="fr"
```

The FR shell is 5 lines:
```astro
---
import EnPage from "../<en-slug>.astro";
---

<EnPage locale="fr" />
```

Slugs match the React app's marketing routes (mirrored in `web-app/vome-react/src/routers/AppRouter.js`) so we don't break inbound traffic. New pages without a React equivalent (Recognition, Integrations) get a sensible new slug.

---

## 6. Tokens & Tailwind worth calling out

Brand source of truth: [`src/styles/vome-tokens.css`](../src/styles/vome-tokens.css) (treat `BRAND.md` in design-reference as stale).

- Primary orange: `#fa935b` (`--vome-orange`)
- Peach tint: `--vome-peach-50`
- Hover/press: `--vome-orange-700`
- Surface background: `--surface-1` (#f9f9fb) — used for alternating section bg
- Display font: `--font-display` (Montserrat); body: `--font-body` (also Montserrat)
- Spacing tokens `--space-*` and radii `--radius-*` available; not strictly enforced
- We do **not** use Tailwind utility classes for marketing-page chrome. We hand-roll CSS appended to [`src/styles/landing.css`](../src/styles/landing.css), prefixed by section (`.fp-*` for /features, `.mp-*` for module pages, `.sp-*` for spotlight mockups).

---

## 7. Copy conventions

These are non-negotiable:

- **No em dashes (`—`, U+2014)** in any user-visible string. Replace with periods, parentheses, colons, or commas. Middle-dot (`·`) is OK as a visual separator inside mockup chrome (e.g. "Volunteer application · Spring 2026").
- **No "form templates" language** — the product feature today is "duplicate opportunities" (copies the entire opportunity including its form, workflow, settings).
- Use real product vocabulary: `automations`, `sequences`, `screening questions`, `eligibility`, `recruitment workflow`, `kiosk`, `hour claim`, `chatroom`, `tag`, `custom field`. Vocabulary verified against `web-app/vome-react/src/views/...` filenames and popups.
- Hero sub uses inline emphasis for the "punch": each "your" gets `<em>`, anchor words like "Flexible"/"Simple" get `<strong>`. Pattern lifted from `/features` page.
- Bullets are concrete. *"Make opportunities visible only to volunteers who match (by tag, role, or location)"* beats *"Eligibility rules per opportunity"*.
- Every module page must reference the **form dashboard / multi-site permissions / cross-site visibility** angle if the module has admin-side data management (most do).

---

## 8. Gotchas resolved on page 1

These are baked into the components/CSS now, but worth knowing in case they recur:

1. **Faq.astro was hardcoded** to homepage strings. Now accepts `items` prop and falls back to homepage list when omitted. Don't re-hardcode.
2. **FeatureMatrix CSS used to live in PlansBody** (component-scoped), so the table rendered unstyled when used elsewhere. Styles + the tooltip-positioning script are now inside `FeatureMatrix.astro`'s own `<style>`/`<script>` blocks.
3. **`auto-fit` benefit grid produced an ugly 4+1 row** with 5 cards. Fixed columns (3 / 2 / 1) at breakpoints split 6 cards cleanly. Don't go back to auto-fit.
4. **Absolute-positioned mockup labels (e.g. WHEN/IF/THEN)** stick out of card padding. Use flex-row layouts with fixed-width left chip + flex value column.
5. **AutomationMock dashed connector line** turned out fragile — dropped it. Mockups should rely on layout, not decorative lines that break with content changes.
6. **Spotlight section alternation** uses `.mp-spotlight:nth-of-type(even) { background: surface-1 }`. Don't add explicit per-section bg classes on the page — they'll fight the selector.
7. **Step titles wrap to two lines** if too long. Keep step titles ≤ 25 chars. ("Automations take over" works; "Let automations take over" wrapped.)
8. **Matrix footnote ("\* Onboarding sessions...") is meaningless** when customer-success rows aren't shown. The component now hides it automatically, but new sections that introduce footnotes need similar visibility rules.
9. **Mockup form display strings** (titles, URLs) — use middle-dot `·` not em-dash.
10. **The `.fb-mock` style classes** were used for the hero mockup on page 1. Reuse them for hero mockups on other pages so all hero mockups feel like a family. `.sp-mock` is for spotlight mockups.

---

## 9. Definition of Done (subagent must self-verify)

Before reporting back, the subagent must confirm:

### Build & types
- [ ] `npm run build` exits 0 with no errors (warnings about `astro:sitemap` are fine)
- [ ] No TypeScript diagnostics on the new files
- [ ] Both `/<en-slug>` and `/fr/<en-slug>` build successfully

### Structure
- [ ] Page composes the 11-section sequence in order (see §1)
- [ ] Hero has a custom hand-built mockup (named slot)
- [ ] All 3 spotlights have **distinct** mockup components (no reuse between spotlights)
- [ ] Mockups use the `.sp-mock` shared frame (`.fb-mock` for hero)
- [ ] Spotlights alternate `side`: right / left / right
- [ ] BenefitGrid has exactly 6 cards
- [ ] HowItWorks has exactly 4 steps
- [ ] Differentiators has exactly 3 items
- [ ] FAQ has 5–6 items
- [ ] FeatureMatrix uses correct `onlySection` and has `showAllToggle`

### i18n
- [ ] New namespace `module_<key>` in `src/i18n/strings.ts`
- [ ] Every leaf has both `en` and `fr` (no en-only)
- [ ] FR translations follow Quebec idiom (match existing strings)

### Copy
- [ ] **Zero em dashes** in the namespace (`grep -nE "—"` returns nothing inside the new namespace block)
- [ ] No "form templates" language
- [ ] Bullets are concrete (point to real product mechanism, not generic features)
- [ ] Hero sub uses `<em>` and `<strong>` emphasis, rendered via `set:html`
- [ ] FAQ answers match the spotlight/bullet vocabulary used elsewhere on the page

### Visual
- [ ] All mockup labels stay inside their card padding (no absolute positioning that overflows)
- [ ] Step titles fit on one line at desktop width
- [ ] No CSS rules touch other modules' selectors (use module-scoped class prefix)
- [ ] CSS appended to `src/styles/landing.css`, not in the page's `<style>` block (inline only when truly page-specific)

### Reporting
- [ ] Subagent returns: list of files created/modified, build pass/fail, screenshot or curl-rendered HTML snippet showing each section is on the page, and a self-graded DoD checklist.

---

## 10. How to brief a subagent (supervisor reference)

When you spawn an Agent with `isolation: "worktree"` to ship a module page, the agent's working directory is the worktree, **not** the main repo. Treat that as load-bearing in the prompt.

### Path conventions in the prompt

- **Use relative paths for files the agent will create or modify** — e.g. `src/i18n/strings.ts`, `src/pages/<slug>.astro`. The agent's cwd is the worktree; relative paths land in the worktree as intended.
- **Use absolute paths only for read-only references outside the worktree** — e.g. the React project at `c:/Users/sfage/Projects/Vome/web-app/vome-react/...`. That repo isn't worktree-cloned.
- **Don't paste absolute paths to the main landing-page directory.** This was the pilot-page failure mode: the agent followed absolute paths and wrote to main, leaving the worktree empty and breaking the merge step.

Make this explicit in every prompt:
> "Your working directory is the worktree at `pwd`. All file paths in this brief that begin with `src/`, `docs/`, or `public/` are relative to that worktree. Verify with `git branch --show-current` before writing — you should be on a `worktree-agent-*` branch, not `main`. If you're on `main`, stop and report back."

### Self-contained brief checklist

Every subagent prompt must include all of:
1. **Playbook reference** — point at this file by relative path: `docs/landing-playbook.md`. Tell the agent to read it before writing.
2. **Canonical example** — point at one shipped module page (e.g. `src/pages/volunteer-application-forms.astro`) plus its mockup components.
3. **Page-specific brief** — module name, slug, copy sources (paths in vome-react), imagery sources (paths in vome-react product UI), per-page deviations from the template if any.
4. **Exact file paths to create/modify** — relative to worktree root.
5. **DoD checklist** — quote §9 verbatim or point at it.
6. **Reporting format** — files+line counts, build result, ✓/✗ DoD self-grade, deviations called out, concerns flagged.

### Reviewing returns

Don't trust self-reports. After each agent returns:
1. Read 2–3 representative bullets from the new i18n namespace. Specific to a real Vome capability, or generic? If generic, send back.
2. Verify item counts (`benefits` = 6, `steps` = 4, `differentiators` = 3, `faq` = 5–6) directly from the page file.
3. `grep "—"` on the new namespace block. Any hit = bounce.
4. Compare the three spotlight mockups by their root container classes — they should use distinct `.sp-mock--<variant>` modifiers and different inner class systems. If two have the same shape, send back.
5. Run `npm run build` yourself.

If a check fails: don't patch the page. Patch the playbook section that should have prevented it, then reissue affected pages.

---

## 11. Lessons from the fan-out batch

Captured live during the 6-page fan-out (Scheduling / Hours / Recognition / Communications / Data / Integrations). Each lesson became an actionable rule.

### Commit the baseline before spawning worktree-isolated agents

When `isolation: "worktree"` creates a new worktree, it forks from `main`'s **current commit**, not from `main`'s working tree. If the prior pilot work (pages, components, playbook) is uncommitted on main, the worktree won't have it — so the agent's `import ModuleHero` etc. will fail and the agent will be forced to manually copy main's working tree into the worktree before they can build.

That's exactly what happened on the first 6-agent batch: every single agent flagged it. Result: each worktree branch ended up containing a copy of main's uncommitted state PLUS the agent's new module files, which broke the simple `git merge worktree → main` strategy.

**Rule**: before any worktree fan-out, supervisor must `git add . && git commit -m 'baseline for fan-out'` and ideally `git push`. Confirm with `git status` shows clean before issuing the Agent calls.

### Merge strategy: file-by-file extraction beats `git merge`

Even when worktrees fork from a clean baseline, the safest merge is targeted extraction (copy the new files, append the new namespace block, append the new CSS). Reason: each worktree's branch may have diverged from main in subtle ways (settings.local.json, etc.) and `git merge` will pick those up.

The fan-out batch used a small Node helper that, per worktree:
1. Copies new mockup `.astro` files from `<worktree>/src/components/module/` to main
2. Copies the new EN page + FR shell
3. Extracts the `module_<key>:` namespace block from worktree's `strings.ts` (walks the brace depth) and inserts it into main's `strings.ts` before the `mobile_app:` anchor
4. Computes `worktree.css − HEAD-baseline.css` (using `git show HEAD:...`) and appends the diff to main's CSS

The HEAD-baseline check is critical: comparing against current main fails after the first merge appends another module's CSS.

**Rule**: never use `git merge` to bring in worktrees. Use targeted extraction. Use `git show HEAD:<path>` as the baseline, not the working tree.

### FR step titles legitimately run longer than 25 chars

The 25-char step-title cap in §9 was set from EN testing. French equivalents naturally run 5–10 chars longer (e.g. "Volunteers move through" → "Les bénévoles avancent dans le parcours"). The cap should be **35 chars for FR**, **25 chars for EN**, or just "fits one line at desktop, eyeball both locales".

**Rule**: relax the FR step-title cap. The EN cap stays at 25.

### Nav.astro is a separate orchestration step

None of the agents updated `src/components/Nav.astro` to link their new module page from the features dropdown. Each agent's brief was scoped to "ship the page", which doesn't include site-IA wiring. After all module pages are shipped, fire one targeted Agent (or do it as a single edit) to populate the dropdown with the full module set.

**Rule**: nav linking is a post-fan-out step, not part of any module-page brief. Plan it explicitly.

### Watch for hex colors creeping in outside the token set

Scheduling agent introduced `#6e5ac8` (purple) as a per-state visual cue without adding it to `vome-tokens.css`. Easy to miss because the build doesn't enforce token discipline. Either codify the new color as `--vome-<name>` or replace with an existing token.

**Rule**: review the agent's CSS append for `#[0-9a-f]{3,6}` literals. Anything not already in tokens needs a decision: either codify or revert.
