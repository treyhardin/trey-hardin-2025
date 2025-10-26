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
      // studioBasePath removed - studio hosted separately
    }),
    react()
  ],
  adapter: cloudflare({
    imageService: 'cloudflare',
  }),
  output: 'static',
  vite: {
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: import.meta.env.PROD && {
        "react-dom/server": "react-dom/server.edge",
      },
    },
    ssr: {
      external: ['node:buffer', 'node:util', 'node:worker_threads']
    },
  },
});