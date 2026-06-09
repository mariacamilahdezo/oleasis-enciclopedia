import { defineCollection, z } from 'astro:content';

// Cada "asombro" = una entrada de la enciclopedia.
// Fórmula: pregunta cotidiana -> respuesta que voltea la cabeza -> abismo real.
const asombros = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),                 // la pregunta cotidiana
    discipline: z.enum([
      'fisica', 'quimica', 'matematicas', 'biologia', 'botanica', 'astronomia',
    ]),
    date: z.coerce.date(),
    summary: z.string(),               // TL;DR citable (para IAs/buscadores)
    sources: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { asombros };
