# Landing Page Structure (`/` route)

Render order as defined in [`source/Landing.js`](./source/Landing.js).

The page is a single scrollable column. There is no router-driven sub-navigation — anchor links from the top nav scroll to sections.

```
┌─────────────────────────────────────────┐
│ TopHeaderMP        (in SectionOne)      │  thin top bar (xs+)
│ MainHeaderLP       (in SectionOne)      │  main nav with logo + CTAs
├─────────────────────────────────────────┤
│ 1. SectionOne / Hero                    │  headline, signup/contact tabs
│    + CustomerLogos                      │  customer logo wall
├─────────────────────────────────────────┤
│ 2. SectionTwo / Features Tabs           │  6-tab feature explorer + video
├─────────────────────────────────────────┤
│ 3. MobileAppScreen                      │  iPhone mockups + store badges
├─────────────────────────────────────────┤
│ 4. SecuritySupport                      │  compliance + support story
├─────────────────────────────────────────┤
│ 5. Testimonials                         │  carousel of customer quotes
├─────────────────────────────────────────┤
│ 6. SectionThree                         │  closing CTA / "ready to start"
├─────────────────────────────────────────┤
│ 7. FreqQuestions                        │  FAQ accordion
├─────────────────────────────────────────┤
│ 8. SectionBottomNav                     │  full footer + socials + lang   │
└─────────────────────────────────────────┘
```

## Section-by-section detail

### 1. SectionOne — Hero ([source/sectionOne/SectionOne.js](./source/sectionOne/SectionOne.js))
- **Top header** (`TopHeaderMP`): thin utility bar with login link, language switcher, etc. Hidden on mobile.
- **Main header** (`MainHeaderLP`): logo + product/feature dropdowns + Sign Up / Book Demo CTAs.
- **Hero content** (`SectionOneContent`): headline, subhead, dual-CTA — toggle between **Sign Up** form and **Contact / Book Demo** form via `tabValue`.
- **CustomerLogos**: greyscale customer logo wall ribbon at the bottom of the hero.

### 2. SectionTwo — Features Tabs ([source/SectionTwo.js](./source/SectionTwo.js))
- Background: `#F0EFF4`.
- Top: tab strip with 6 feature areas, each rendered by a sub-component in `featureTabs/` (Recruitment, Onboarding, Scheduling, HourTracking, DataReports, Communications).
- Includes a "Watch demo" play button that opens a `ReactPlayer` modal.
- Per-tab content is a left/right split: copy + screenshot.

### 3. MobileAppScreen ([source/MobileAppScreen.js](./source/MobileAppScreen.js))
- Background: `#FAFAFA`.
- Headline + body about the volunteer mobile app.
- iPhone mockup imagery (`mobileApp_LP-min_1.png`, `iphoneSmall.png`).
- App Store + Google Play badges, EN/FR variants.

### 4. SecuritySupport ([source/SecuritySupport.js](./source/SecuritySupport.js))
- Background: `#FAFAFA`.
- Two-column: left = compliance/security badges + copy; right = "real human support" copy with a portrait photo (`supportPerson.png`).
- Iconography from `react-icons` (settings, ticket, chat, etc.).

### 5. Testimonials ([source/Testimonials.js](./source/Testimonials.js))
- Background: `#FAFAFA`.
- `react-slick` carousel of quote cards with `@mui/material/Rating` star ratings.
- Customer logos repeated underneath (subset of CustomerLogos).
- Featured testimonial: Gia Mannone (`gia_mannone.png`).

### 6. SectionThree — Closing CTA ([source/SectionThree.js](./source/SectionThree.js))
- Background: `#FAFAFA`.
- Centered headline + body + Demo CTA (opens `DemoPopup`).
- Final conversion push before the FAQ.

### 7. FreqQuestions — FAQ ([source/FreqQuestions.js](./source/FreqQuestions.js))
- Accordion of common pre-sale questions; expand/collapse with chevron icons.
- Includes a "Still have questions? Contact us" link that opens a `ContactUs` popup.

### 8. SectionBottomNav — Footer ([source/SectionBottomNav.js](./source/SectionBottomNav.js))
- Multi-column footer.
- Vome logo + tagline.
- Link columns (product, resources, company, legal).
- App Store + Google Play badges.
- Social icons: Facebook, Instagram, X (twitter), LinkedIn.
- Language switcher (EN/FR).

## Modal / dialog elements

These overlay the page rather than being part of the scroll flow:

- **DemoPopup** — booking widget invoked from multiple CTAs.
- **CalendlyDemoPopup** — Calendly embed variant.
- **ContactUs** — contact form popup (used from header and footer).
- **VolunteerAddSignUpData** — dialog shown when SSO returns a user that needs to complete signup (incidental to the marketing page).
- **OpenDialog** — generic dialog host used for SSO error messages.

## Cross-page nav (top header)

Top header links go to other landing routes that are **out of scope** for this rebuild but exist today:
- `/features`, `/plans`, `/about-us`, `/blog`, `/ambassador`
- Per-feature deep dives: `/volunteer-scheduling-software`, `/volunteer-onboarding-software`, `/volunteer-application-forms`, `/volunteer-hour-tracking`, `/volunteer-database`, `/volunteer-communications`, `/app-for-volunteers`
- Compliance: `/terms`, `/privacy`, `/cookie`

Keep these URLs reachable from the new design's nav so internal links don't break.
