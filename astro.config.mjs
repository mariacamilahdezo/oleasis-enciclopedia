import { defineConfig } from 'astro/config';

// Dominio principal: oleasis.co (oleasis.art redirige aquí desde el registrador).
// El sitemap se genera en src/pages/sitemap.xml.ts (se actualiza solo).
export default defineConfig({
  site: 'https://oleasis.co',
  trailingSlash: 'ignore',
});
