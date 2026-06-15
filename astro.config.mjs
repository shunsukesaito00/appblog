// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Cloudflare Pages の本番 URL（canonical / sitemap / OGP の基準）
  site: 'https://appblog-a4k.pages.dev',

  output: 'static',
  integrations: [mdx(), sitemap()],
  adapter: cloudflare(),
});