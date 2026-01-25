# 🔥 Lan-Flare

**Lan-Flare** is a production-ready Astro boilerplate optimized for **Cloudflare Pages**, built with **[Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)**.

Designed for speed, SEO, and developer experience—perfect for landing pages, SaaS sites, portfolios, and blogs.

---

## ✨ Features

- ✅ **Cloudflare Pages Optimized** - Pre-configured for deployment on Cloudflare's global edge network
- ✅ **Production-Ready Scores** - 95+ Lighthouse scores out of the box
- ✅ **Tailwind CSS** - Utility-first CSS with dark mode and RTL support
- ✅ **Image Optimization** - Automatic WebP/AVIF conversion with Sharp
- ✅ **View Transitions** - SPA-like navigation without full page reloads
- ✅ **Built-in Blog** - MDX support, categories, tags, RSS feed
- ✅ **SEO Ready** - Open Graph tags, Twitter cards, sitemap, robots.txt
- ✅ **Security Headers** - X-Frame-Options, CSP, X-XSS-Protection
- ✅ **TypeScript** - Full type safety with strict mode
- ✅ **Analytics Ready** - Google Analytics, Cloudflare Web Analytics

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Dan-Martin-dev/lan-flare.git
cd lan-flare

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:4321
```

---

## 📚 Documentation

Lan-Flare includes comprehensive documentation to help you build your website:

### 📖 Start Here

**[docs/GETTING_STARTED.md](docs/GETTING_STARTED.md)** - Your entry point to all guides

- Documentation overview
- Recommended reading paths
- Quick start checklist
- Essential commands

---

### 📘 Comprehensive Guides

**[docs/BOILERPLATE_GUIDE.md](docs/BOILERPLATE_GUIDE.md)** (31KB)

- Complete transformation guide
- Design customization (colors, fonts, components)
- Creating reusable components
- Page structure and layouts
- Content management
- Optimization best practices
- Deployment workflow
- Solo developer tips

**[docs/QUICK_REFERENCE.md](docs/QUICK_REFERENCE.md)** (14KB)

- Command reference
- Customization cheat sheet
- Component examples
- Styling patterns
- Troubleshooting guide
- Deployment checklist

**[docs/WEBSITE_EXAMPLES.md](docs/WEBSITE_EXAMPLES.md)** (27KB)

- 6 complete website examples
- SaaS landing page
- Portfolio website
- Agency website
- E-commerce store
- Personal blog
- Corporate website

---

### ⚙️ Deployment & Optimization

**[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)** (6.4KB)

- Cloudflare Pages setup (recommended)
- Environment variables
- Custom domain configuration
- Alternative hosting (Vercel, Netlify)
- Troubleshooting

**[docs/OPTIMIZATIONS.md](docs/OPTIMIZATIONS.md)** (6.7KB)

- Performance optimizations applied
- Build configuration
- Security headers
- Caching strategies
- Image optimization details

---

### 🤖 AI Agent Guidelines

**[AGENTS.md](AGENTS.md)** (8.2KB)

- Project structure
- Code style guidelines
- Component patterns
- Commit conventions
- Common tasks

---

### 📋 Documentation Map

**[docs/DOCUMENTATION_MAP.md](docs/DOCUMENTATION_MAP.md)**

- Visual overview of all documentation
- Reading paths (beginner/intermediate/expert)
- When to use each document
- Master checklist

---

## 🛠️ Commands

### Development

```bash
npm run dev              # Start dev server at http://localhost:4321
npm run build            # Build production site to dist/
npm run preview          # Preview production build locally
```

### Code Quality (Run before committing!)

```bash
npm run check            # Run ALL checks (Astro + ESLint + Prettier)
npm run fix              # Auto-fix ESLint and Prettier issues
npm run check:astro      # Type checking and Astro validation
npm run check:eslint     # Lint TypeScript/JavaScript/Astro files
npm run check:prettier   # Check code formatting
```

### Deployment

```bash
npm run deploy           # Build and deploy to Cloudflare Pages
npm run preview:cloudflare  # Preview with Cloudflare runtime
```

---

## 📁 Project Structure

```
/
├── public/              # Static assets (robots.txt, _headers)
├── src/
│   ├── assets/         # Images, fonts, global styles
│   │   ├── images/
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/     # Reusable components
│   │   ├── ui/         # UI primitives (Button, Card, Headline)
│   │   ├── widgets/    # Page sections (Hero, Features, CTA)
│   │   ├── common/     # Shared utilities (Image, Metadata)
│   │   ├── blog/       # Blog-specific components
│   │   └── CustomStyles.astro  # 🎨 Your colors & fonts
│   ├── content/       # Blog posts (.md/.mdx)
│   │   └── config.ts   # Content collections schema
│   ├── layouts/       # Page templates
│   │   ├── Layout.astro          # Base layout
│   │   ├── PageLayout.astro      # Standard pages
│   │   ├── LandingLayout.astro   # Landing pages
│   │   └── MarkdownLayout.astro  # Blog posts
│   ├── pages/         # File-based routing
│   │   ├── index.astro         # Homepage
│   │   ├── [...blog]/          # Blog routes
│   │   ├── landing/            # Landing pages
│   │   └── homes/              # Homepage variants
│   ├── config.yaml     # ⚙️ Site settings
│   ├── constants.ts    # Runtime constants
│   ├── navigation.ts   # 🧭 Menu structure
│   └── types.d.ts      # Type definitions
├── docs/            # 📚 Complete documentation
├── AGENTS.md        # AI coding agent guidelines
├── astro.config.ts  # Astro & integrations config
├── tailwind.config.js # Tailwind customization
└── wrangler.toml     # Cloudflare Pages config
```

---

## 🎨 Quick Customization

### Change Brand Colors

Edit `src/components/CustomStyles.astro`:

```css
:root {
  --aw-color-primary: rgb(59 130 246); /* Main brand */
  --aw-color-secondary: rgb(99 102 241); /* Secondary */
  --aw-color-accent: rgb(236 72 153); /* CTA color */
}
```

### Change Site Name & URL

Edit `src/config.yaml`:

```yaml
site:
  name: 'Your Site Name'
  site: 'https://yourdomain.com'
  base: '/'
  trailingSlash: false

metadata:
  title:
    default: 'Your Site Name'
    template: '%s — Your Site Name'
  description: 'Your site description for SEO'
```

### Update Navigation

Edit `src/navigation.ts`:

```typescript
export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'About', href: getPermalink('/about') },
    { text: 'Blog', href: getPermalink('/blog') },
  ],
  actions: [{ text: 'Get Started', href: getPermalink('/contact') }],
};
```

---

## 🌐 Deployment

### Cloudflare Pages (Recommended)

**Why Cloudflare Pages?**

- ✅ Free tier with generous limits
- ✅ Global CDN for fast worldwide access
- ✅ Automatic HTTPS
- ✅ DDoS protection
- ✅ Unlimited bandwidth
- ✅ Instant rollbacks

**Setup:**

1. Push code to GitHub
2. Connect repository to Cloudflare Pages
3. Build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy!

Full guide: [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)

---

## 🎯 Reading Paths

### 🌱 Beginner (14 days)

```
Day 1-2:    docs/GETTING_STARTED.md → BOILERPLATE_GUIDE.md (Sec 1-2)
Day 3-5:    BOILERPLATE_GUIDE.md (Sec 3-4)
Day 6-7:    BOILERPLATE_GUIDE.md (Sec 5)
Day 8-10:   docs/WEBSITE_EXAMPLES.md (your site type)
Day 11-12:  BOILERPLATE_GUIDE.md (Sec 6) + docs/OPTIMIZATIONS.md
Day 13-14:  docs/DEPLOYMENT.md → Launch!
```

### 💪 Intermediate (3 days)

```
Day 1:   docs/GETTING_STARTED.md → docs/WEBSITE_EXAMPLES.md
Day 2:   Build using examples
Day 3:   docs/DEPLOYMENT.md → Deploy
```

### ⚡ Expert (1 day)

```
Hour 1:   docs/GETTING_STARTED.md → docs/QUICK_REFERENCE.md
Hour 2-6: docs/WEBSITE_EXAMPLES.md → Build
Hour 7:   docs/OPTIMIZATIONS.md → Optimize
Hour 8:   docs/DEPLOYMENT.md → Deploy
```

---

## 🏗️ What Can You Build?

Using patterns in [docs/WEBSITE_EXAMPLES.md](docs/WEBSITE_EXAMPLES.md):

- ✅ SaaS product landing pages
- ✅ Creative portfolios
- ✅ Agency websites
- ✅ E-commerce stores
- ✅ Personal blogs
- ✅ Corporate websites
- ✅ Documentation sites
- ✅ Marketing pages

---

## 📦 Available Widgets

Pre-built components ready to use:

- **Hero** - Main hero section with title, subtitle, actions, image
- **Features** - Feature grid with icons
- **Content** - Content with text and image side-by-side
- **Stats** - Statistics/metrics display
- **Pricing** - Pricing table/cards
- **Testimonials** - Customer testimonials
- **FAQs** - FAQ accordion
- **Steps** - Step-by-step guide
- **CallToAction** - CTA banner
- **Contact** - Contact form
- **Brands** - Logo/partner showcase
- **Blog** - Blog listing and post display

Full reference: [REUSABLE_COMPONENTS.md](REUSABLE_COMPONENTS.md)

---

## 🌙 Dark Mode

Dark mode is built-in and follows system preference:

```yaml
# src/config.yaml
ui:
  theme: 'system' # Options: 'system' | 'light' | 'dark' | 'light:only' | 'dark:only'
```

Use `dark:` prefix in Tailwind classes:

```html
<div class="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100">Light and dark mode content</div>
```

---

## 🔒 Security

Pre-configured security headers in `public/_headers`:

- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy (restricts dangerous APIs)

---

## 📊 Performance Optimizations

Lan-Flare includes these optimizations:

- **View Transitions API** - Smooth navigation without reloads
- **Prefetching** - Intelligent link prefetching
- **Image Optimization** - WebP/AVIF with multiple sizes
- **Lightning CSS** - Faster builds, smaller bundles
- **Compression** - HTML/CSS/JS compressed
- **Caching** - 1-year cache for static assets
- **Lazy Loading** - Images loaded as needed

Details: [docs/OPTIMIZATIONS.md](docs/OPTIMIZATIONS.md)

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Read [AGENTS.md](AGENTS.md) for code conventions
2. Run `npm run check` before committing
3. Follow conventional commit messages:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `style:` - Design changes
   - `refactor:` - Code refactoring
   - `docs:` - Documentation
   - `chore:` - Maintenance

---

## 📄 License

MIT License - see [LICENSE.md](LICENSE.md) for details.

---

## 🙏 Acknowledgments

Based on [AstroWind](https://github.com/arthelokyo/astrowind) by Arthelokyo.

Optimized for Cloudflare Pages with additional performance and security enhancements.

---

## 📞 Support

- **Documentation:** See [docs/](docs/) folder
- **Astro Docs:** https://docs.astro.build
- **Cloudflare Pages:** https://developers.cloudflare.com/pages
- **Astro Discord:** https://astro.build/chat

---

## 🔗 Links

- 📖 [Full Documentation](docs/)
- 🚀 [Live Demo](https://your-site.pages.dev) (update with your URL)
- 🐛 [Issues](https://github.com/yourusername/lan-flare/issues)
- 💬 [Discussions](https://github.com/yourusername/lan-flare/discussions)

---

**Last Updated:** January 22, 2026
**Astro Version:** 5.12.9
**Node Version:** 18.17.1+ | 20.3.0+ | 21.0.0+

**Happy building! 🚀**
