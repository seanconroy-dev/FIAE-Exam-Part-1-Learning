import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://seanconroy-dev.github.io',
  base: '/Ap1-Learning',
});
