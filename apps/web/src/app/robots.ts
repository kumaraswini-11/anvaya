import type { MetadataRoute } from 'next';

// This is a special Route Handler that generates /robots.txt for search engine crawlers.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/dashboard/', '/_next/'],
    },
    sitemap: 'https://anvaya.example.com/sitemap.xml',
  };
}
