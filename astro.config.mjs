import { defineConfig } from 'astro/config';

// NOTA: al conectar el dominio oleasis.art, cambiar:
//   site -> 'https://oleasis.art'  y  base -> '/'  (o quitar base)
// El sitemap se genera en src/pages/sitemap.xml.ts (se actualiza solo).
export default defineConfig({
  site: 'https://mariacamilahdezo.github.io',
  base: '/oleasis-enciclopedia',
  trailingSlash: 'ignore',
});
