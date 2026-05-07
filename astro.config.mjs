// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  build: {
    // Inline small CSS bundles into <style> tags so first paint doesn't wait
    // on a separate stylesheet round-trip. Astro picks the threshold; bundles
    // above it still ship as <link rel="stylesheet">.
    inlineStylesheets: 'auto',
  },

  integrations: [sitemap()]
});