import { getCollection } from 'astro:content';

// Sitemap dinámico: se regenera en cada build con todas las entradas.
export async function GET() {
  const site = import.meta.env.SITE;
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  const home = new URL(base, site).href;

  const entries = await getCollection('asombros');
  const locs = [home, ...entries.map((e) => new URL(`asombro/${e.slug}`, home).href)];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locs.map((l) => `  <url><loc>${l}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
