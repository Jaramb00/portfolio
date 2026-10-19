// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Public address of the site. Canonical URLs, hreflang and the sitemap use it.
const SITE_URL = 'https://josip-arambasic.from.hr';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  i18n: {
    locales: ['en', 'hr'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', hr: 'hr' } },
    }),
  ],
});
