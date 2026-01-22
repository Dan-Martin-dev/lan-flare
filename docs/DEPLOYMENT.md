# Cloudflare Pages Deployment Guide

## Overview

This Astro application is optimized for deployment on Cloudflare Pages with best practices and performance optimizations.

## Features

✅ **Cloudflare Pages Integration**

- Static site generation with optimal caching
- Edge network distribution
- Automatic HTTPS

✅ **Performance Optimizations**

- View Transitions API for seamless navigation
- Image optimization with WebP/AVIF formats
- CSS minification with Lightning CSS
- Automatic prefetching for improved loading
- Compressed assets (HTML, CSS, JS)

✅ **Security Headers**

- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

✅ **Astro Best Practices**

- TypeScript configuration with strict types
- Organized project structure with constants
- Proper type definitions for all components
- Environment variable type safety

## Prerequisites

- Node.js 18.17.1+ or 20.3.0+ or 21.0.0+
- npm or pnpm
- Cloudflare account (free tier works)
- Wrangler CLI (optional, for local testing)

## Local Development

### Standard Development

```bash
npm run dev
```

This starts the Astro development server at http://localhost:4321

### Cloudflare Pages Local Development

```bash
# Build the site
npm run build

# Preview with Cloudflare Pages runtime
npm run preview:cloudflare
```

## Deployment Options

### Option 1: Direct Cloudflare Pages (Recommended)

1. **Connect Repository to Cloudflare Pages**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Go to Pages → Create a project
   - Connect your Git repository (GitHub/GitLab)

2. **Configure Build Settings**

   ```
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   ```

3. **Environment Variables** (if needed)
   Add any environment variables in the Cloudflare Pages settings:
   - `PUBLIC_SITE_URL`: Your site URL
   - `PUBLIC_GA_ID`: Google Analytics ID (optional)

4. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare will automatically build and deploy your site
   - Get your site URL: `https://your-project.pages.dev`

### Option 2: Wrangler CLI

```bash
# Install Wrangler globally (if not installed)
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build and deploy
npm run deploy
```

### Option 3: Manual Deployment

```bash
# Build the site
npm run build

# Deploy the dist folder
wrangler pages deploy dist --project-name=your-project-name
```

## Configuration Files

### `astro.config.ts`

- Configured for static output (optimal for Cloudflare Pages)
- Image optimization enabled
- View Transitions enabled
- Prefetching enabled with viewport strategy
- Lightning CSS for faster builds

### `wrangler.toml`

- Cloudflare Pages configuration
- Build settings
- Environment variables structure

### `public/_headers`

- Security headers for all routes
- Cache-Control headers for assets
- Optimized for performance and security

### `public/_redirects`

- Custom redirects (add as needed)
- SPA fallback support (commented out by default)

## Performance Tips

1. **Images**: Use the `<Image>` component from Astro for automatic optimization
2. **Fonts**: Self-host fonts for better performance (already configured with @fontsource-variable/inter)
3. **Scripts**: Use View Transitions instead of full page reloads
4. **CSS**: Tailwind CSS is configured with JIT mode for minimal bundle size

## Environment Variables

Create a `.env` file for local development:

```env
PUBLIC_SITE_URL=http://localhost:4321
PUBLIC_GA_ID=your-ga-id
```

For production, set these in Cloudflare Pages dashboard under Settings → Environment variables.

## Custom Domains

1. Go to Cloudflare Pages → Your Project → Custom domains
2. Add your domain
3. Update DNS records as instructed
4. SSL certificate is automatically provisioned

## Monitoring and Analytics

- **Cloudflare Web Analytics**: Free, privacy-friendly analytics
- **Google Analytics**: Configured via `PUBLIC_GA_ID` environment variable
- **Cloudflare Insights**: Available in the Cloudflare dashboard

## Build Optimization

The build is optimized with:

- `astro-compress` for HTML/CSS/JS compression
- Sharp for image optimization
- Sitemap generation
- RSS feed generation
- MDX support for blog content

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules dist .astro
npm install
npm run build
```

### Images Not Loading

- Ensure images are in `src/assets/` or `public/`
- Check image paths in components
- Verify `domains` in `astro.config.ts` for external images

### Environment Variables Not Working

- Prefix public variables with `PUBLIC_`
- Restart dev server after adding variables
- Check Cloudflare Pages environment settings for production

## Useful Scripts

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build locally
npm run preview:cloudflare  # Preview with Cloudflare runtime

# Code Quality
npm run check            # Run all checks (Astro, ESLint, Prettier)
npm run fix              # Auto-fix ESLint and Prettier issues

# Cloudflare
npm run deploy           # Build and deploy to Cloudflare Pages
npm run cf-typegen       # Generate TypeScript types for Cloudflare
```

## Best Practices Implemented

1. **Component Organization**: Components are organized by type (widgets, ui, common, blog)
2. **Type Safety**: Full TypeScript support with proper type definitions
3. **Constants**: Shared constants in `src/constants.ts`
4. **View Transitions**: Smooth navigation without full page reloads
5. **Lazy Loading**: Images are lazy loaded by default
6. **Responsive Images**: Multiple sizes generated automatically
7. **SEO**: Meta tags, OpenGraph, Twitter cards configured
8. **Security**: Security headers and CSP configured
9. **Performance**: Prefetching, compression, and caching optimized

## Additional Resources

- [Astro Documentation](https://docs.astro.build)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler)
- [AstroWind Template](https://github.com/arthelokyo/astrowind)

## Support

For issues specific to this template, check the [GitHub repository](https://github.com/arthelokyo/astrowind).

For Cloudflare Pages issues, refer to the [Cloudflare Community](https://community.cloudflare.com).
