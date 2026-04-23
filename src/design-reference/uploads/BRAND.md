# Vome Brand Reference

Extracted from `src/theme/theme.js` and observed usage across the landing page sections.

## Colors

### Primary palette (from MUI theme)

| Role | Hex | Notes |
|---|---|---|
| Primary main | `#ED8E34` | Vome orange — the dominant brand color |
| Primary light | `#FFFFFF` | White |
| Primary dark | `#FFC06A` | Lighter orange (used for highlights/hover) |
| Primary contrast text | `#E9593F` | Red-orange accent |
| Secondary main | `#CCCCCC` | Light grey |
| Secondary contrast text | `#707070` | Mid grey for body text |
| Black | `#000000` | Headings |

### Section background colors observed in source

| Color | Where |
|---|---|
| `#FFFFFF` | Hero / SectionOne |
| `#F0EFF4` | SectionTwo (features tabs) |
| `#FAFAFA` | MobileAppScreen, SecuritySupport, Testimonials, SectionThree |
| `#FA935B` | Accent borders (e.g. video play CTA in SectionTwo) |

### Suggested Tailwind config seed

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        vome: {
          orange:      '#ED8E34', // primary
          'orange-lt': '#FFC06A',
          'orange-dk': '#FA935B',
          red:         '#E9593F', // accent
          ink:         '#000000',
          body:        '#707070',
          surface:     '#FAFAFA',
          'surface-2': '#F0EFF4',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Open Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
}
```

## Typography

- **Primary font:** Montserrat (weight 600 used heavily for headers)
- **Fallback stack:** `Open Sans, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **Heading sizes observed (desktop):** ~38–40px for section H1s, smaller (21–28px) on mobile
- **Heading weight:** 600

## Logo

- File: `src/assets/images/logos/vome-orange.png`
- Used in: top header (`MainHeaderLP`) and footer (`SectionBottomNav`)
- Note: there are also white/dark variants in `src/assets/images/logos/` if needed for dark backgrounds.

## Iconography

Current site uses **react-icons** mixed across families: `react-icons/ri`, `bs`, `io`, `md`, `fa`, `gi`. For the rebuild, suggest standardizing on a single family (e.g. Lucide via `lucide-react`, which pairs well with Tailwind/shadcn).

## Imagery style

- Real photography of volunteers (people-focused)
- Customer logo wall (greyscale-on-white)
- Mobile app screenshots in iPhone frames
- Compliance/security illustrations (icon-led)

## Languages

The site is bilingual **English / French** (react-i18next). Footer has a language switcher (`LanguageSwitcherBN`). The route `/fr` renders the same landing with French as default.
