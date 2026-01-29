# CONTEXT.md — AI Agent Rules & Project Context

> **Purpose:** This file provides context and rules for AI coding assistants working with this Astro boilerplate. Follow these guidelines to maintain consistency, avoid common pitfalls, and produce production-ready code.

---

## 🎯 Project Identity

| Property | Value |
|----------|-------|
| **Framework** | Astro 5.x (Static Output) |
| **Styling** | Tailwind CSS 3.x |
| **Language** | TypeScript (Strict) |
| **Animations** | GSAP + ScrollTrigger |
| **Smooth Scroll** | Lenis |
| **Deployment** | Cloudflare Pages |
| **Package Manager** | npm |

---

## 📁 Key File Locations

```
src/
├── assets/
│   ├── fonts/          # Custom fonts (.otf, .woff2) — register in tailwind.css
│   ├── images/         # Optimized images (use Astro <Image>)
│   └── styles/
│       └── tailwind.css  # @font-face, @layer utilities/components
├── components/
│   ├── CustomStyles.astro  # CSS variables (--aw-font-*, --aw-color-*)
│   ├── common/         # Reusable utilities (LenisScroll, Metadata, etc.)
│   ├── ui/             # Generic UI (Button, Form, Headline)
│   └── widgets/        # Page sections (Header, Hero, Footer, FAQs)
├── layouts/
│   ├── Layout.astro    # Base HTML shell
│   └── PageLayout.astro # Standard page with Header + Footer
├── pages/              # File-based routing
└── navigation.ts       # Header/Footer link definitions
```

---

## 🎨 Styling Rules

### Adding a New Color
1. **Define in `tailwind.config.js`:**
   ```js
   colors: {
     orange: '#F4793A',
     // Add new colors here
   }
   ```
2. Use via Tailwind classes: `bg-orange`, `text-orange`, `border-orange`

### Adding a New Font
1. **Place font file** in `src/assets/fonts/`
2. **Register `@font-face`** in `src/assets/styles/tailwind.css`:
   ```css
   @font-face {
     font-family: 'MyFont';
     src: url('/src/assets/fonts/MyFont.woff2') format('woff2');
     font-weight: 400;
     font-style: normal;
     font-display: swap;
   }
   ```
3. **Update CSS variables** in `src/components/CustomStyles.astro`:
   ```css
   :root {
     --aw-font-sans: 'MyFont', 'Inter Variable';
     --aw-font-heading: 'MyFont', 'Inter Variable';
   }
   ```
4. Use via Tailwind: `font-sans`, `font-heading`, or add custom family in `tailwind.config.js`

### CSS Variable System
| Variable | Purpose | Tailwind Class |
|----------|---------|----------------|
| `--aw-font-sans` | Body text | `font-sans` |
| `--aw-font-heading` | Headings | `font-heading` |
| `--aw-color-primary` | Primary brand | `bg-primary`, `text-primary` |
| `--aw-color-accent` | Accent/highlight | `text-accent` |
| `--aw-color-bg-page` | Page background | `bg-page` |

---

## ⚡ Animation Guidelines (GSAP + Lenis)

### Smooth Scroll (Lenis)
- Already integrated via `src/components/common/LenisScroll.astro`
- Access globally: `window.lenis.scrollTo('#section')`
- Included in `Layout.astro` — no additional setup needed

### GSAP Animations
```typescript
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Always init after page load for Astro view transitions
document.addEventListener('astro:page-load', () => {
  // Your animations here
});
```

### Common Patterns
- **Staggered text reveal:** Use `.hero-text` class + `gsap.to()` with `stagger`
- **Section pinning:** Use `ScrollTrigger.create({ pin: true, scrub: 1 })`
- **Z-index stacking:** Use `sticky` positioning with incremental `top` values

---

## ☁️ Cloudflare Pages Deployment

### Configuration Files
- `wrangler.toml` — Cloudflare Workers/Pages config
- `astro.config.ts` — Set `output: 'static'` (already configured)

### Deploy Commands
```bash
npm run build           # Build to dist/
npm run deploy          # Build + deploy to Cloudflare Pages
```

### Environment Variables
- Set in Cloudflare Pages dashboard (Settings → Environment Variables)
- Access in Astro via `import.meta.env.VARIABLE_NAME`
- Prefix public vars with `PUBLIC_`

### Headers & Redirects
- `public/_headers` — Custom HTTP headers
- `public/_redirects` — URL redirects

### Best Practices
1. **Keep builds fast** — Avoid large dependencies
2. **Use static output** — No SSR unless absolutely necessary
3. **Optimize images** — Use Astro's `<Image>` component
4. **Cache aggressively** — Set appropriate cache headers in `_headers`

---

## 🧩 Component Conventions

### Creating a New Widget
```astro
---
// src/components/widgets/MyWidget.astro
import WidgetWrapper from '~/components/ui/WidgetWrapper.astro';
import Headline from '~/components/ui/Headline.astro';

export interface Props {
  title?: string;
  subtitle?: string;
  id?: string;
}

const { title, subtitle, id } = Astro.props;
---

<WidgetWrapper id={id}>
  <Headline title={title} subtitle={subtitle} />
  <div class="max-w-7xl mx-auto px-4">
    <!-- Content here -->
  </div>
</WidgetWrapper>
```

### Import Aliases
Always use `~/` for src imports:
```typescript
import Hero from '~/components/widgets/Hero.astro';
import { SITE } from '~/utils/config';
import type { MetaData } from '~/types';
```

### Config Access
```typescript
import { SITE, I18N, METADATA } from 'astrowind:config';
```

---

## 🚫 Common Mistakes to Avoid

| ❌ Don't | ✅ Do |
|----------|-------|
| Hardcode hex colors everywhere | Add to `tailwind.config.js` and use classes |
| Import fonts via `<link>` tags | Use `@font-face` in `tailwind.css` |
| Use `!important` in CSS | Use proper specificity or Tailwind layers |
| Create new CSS files | Add to existing `tailwind.css` using `@layer` |
| Skip TypeScript types | Always define `Props` interface |
| Use `document.querySelector` on load | Use `astro:page-load` event |
| Commit without running checks | Run `npm run check` before every commit |

---

## 🔧 Quick Commands

```bash
# Development
npm run dev              # Start dev server (localhost:4321)

# Quality Checks (run before committing!)
npm run check            # All checks (Astro + ESLint + Prettier)
npm run fix              # Auto-fix all issues

# Build & Deploy
npm run build            # Production build
npm run deploy           # Deploy to Cloudflare Pages
```

---

## 📝 For Vibe Coders

### Keep It Simple
- This boilerplate is designed for **landing pages and marketing sites**
- Don't over-engineer — most pages are static
- Use existing widgets; customize props before creating new components

### Iterate Fast
1. Start dev server: `npm run dev`
2. Edit in `src/pages/` or `src/components/widgets/`
3. See changes instantly (HMR enabled)
4. Run `npm run check` before pushing

### When Adding Features
1. Check if a similar widget exists in `src/components/widgets/`
2. Look at `docs/` folder for guidance
3. Use Tailwind utilities over custom CSS
4. Keep animations smooth — GSAP handles the heavy lifting

### Self-Hosting Checklist
- [ ] Update `src/config.yaml` with your site details
- [ ] Replace images in `src/assets/images/`
- [ ] Update `navigation.ts` with your links
- [ ] Configure Cloudflare Pages project
- [ ] Set environment variables in Cloudflare dashboard
- [ ] Run `npm run deploy`

---

## 🔗 Related Documentation

- [AGENTS.md](./AGENTS.md) — Detailed coding standards
- [docs/GETTING_STARTED.md](./docs/GETTING_STARTED.md) — Setup guide
- [docs/REUSABLE_COMPONENTS.md](./docs/REUSABLE_COMPONENTS.md) — Component library
- [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) — Deployment options

---

*Last updated: January 2026*