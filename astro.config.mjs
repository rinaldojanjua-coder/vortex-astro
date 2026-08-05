import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.attureviews.com',
  output: 'static',
  integrations: [
    react(),
    sitemap({
      // Keep error/utility routes out of the sitemap.
      filter: (page) => !page.includes('/404'),
      // Tier priority by real page importance instead of the flat default.
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (path === '/') {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }
        if (path === '/pricing/' || path === '/contact/') {
          return { ...item, priority: 0.9, changefreq: 'monthly' };
        }
        if (path === '/blog/') {
          return { ...item, priority: 0.8, changefreq: 'monthly' };
        }
        if (path.startsWith('/blog/') || path === '/freewebsite/') {
          return { ...item, priority: 0.7, changefreq: 'monthly' };
        }
        // privacy-policy, terms-conditions, anything else utility-grade
        return { ...item, priority: 0.6, changefreq: 'yearly' };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
