// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: '4wsnsase',
      dataset: 'production',
      useCdn: false, // See note on using the CDN
      studioBasePath: '/admin',
    }), 
    react()
  ],
  adapter: cloudflare()
});