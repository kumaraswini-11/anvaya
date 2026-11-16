import type { MetadataRoute } from 'next';

// This file programmatically generates a sitemap to help search engines index your site efficiently.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://anvaya.example.com';

  // In a real app, you would fetch dynamic routes from your database here.
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
