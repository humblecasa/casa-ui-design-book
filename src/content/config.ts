import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

// Required so Starlight can resolve docs entry slugs referenced in the sidebar.
export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
};
