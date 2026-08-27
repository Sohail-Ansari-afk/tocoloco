import { defineConfig } from 'astro/config';

// https://astro.build/config
// Optimized for Cloudflare Pages Global Edge Hosting
export default defineConfig({
  site: 'https://taco-loco-berlin.de',
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory',
    assets: '_astro'
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  }
});
