// Site configuration constants
export const SITE_NAME = 'AstroWind' as const;
export const SITE_DESCRIPTION =
  'Suitable for Startups, Small Business, SaaS Websites, Professional Portfolios, Marketing Websites, Landing Pages & Blogs.' as const;

// Build configuration
export const IS_PRODUCTION = import.meta.env.PROD;
export const IS_DEVELOPMENT = import.meta.env.DEV;

// Cache configuration
export const CACHE_MAX_AGE = {
  STATIC_ASSETS: 31536000, // 1 year
  HTML: 3600, // 1 hour
  API: 300, // 5 minutes
} as const;

// Image configuration
export const IMAGE_DOMAINS = ['cdn.pixabay.com', 'images.unsplash.com'] as const;
export const IMAGE_FORMATS = ['webp', 'avif'] as const;

// Blog configuration
export const POSTS_PER_PAGE = 6 as const;
export const RELATED_POSTS_COUNT = 4 as const;

// Social media
export const SOCIAL_HANDLES = {
  TWITTER: '@arthelokyo',
} as const;

// SEO defaults
export const DEFAULT_OG_IMAGE = {
  WIDTH: 1200,
  HEIGHT: 628,
} as const;
