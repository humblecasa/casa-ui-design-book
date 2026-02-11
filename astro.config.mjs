import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// GitHub Pages config for:
// - user: humblecasa
// - repo: casa-ui-design-book
// Final URL:
//   https://humblecasa.github.io/casa-ui-design-book/

export default defineConfig({
  // NOTE: We intentionally omit `site` to avoid sitemap generation issues in CI.
  // GitHub Pages works fine with `base` alone.
  base: '/casa-ui-design-book',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    starlight({
      title: 'UI Token Guidebook',
      description:
        'A developer-first, token-based system for spacing, type, color, and component sizing — plus a pre-coding workflow that eliminates guesswork.',
      defaultLocale: 'en',
      social: {
        github: 'https://github.com/humblecasa/casa-ui-design-book',
      },
      customCss: ['./src/styles/tailwind.css', './src/styles/custom.css'],
      sidebar: [
        { label: 'Start here', items: [{ label: 'Overview', link: '/' }] },
        {
          label: 'System',
          items: [
            { label: 'Spacing tokens', slug: 'spacing' },
            { label: 'Typography tokens', slug: 'typography' },
            { label: 'Color tokens', slug: 'color' },
            { label: 'Component sizing defaults', slug: 'components' },
          ],
        },
        {
          label: 'Workflow',
          items: [
            { label: 'Pre-coding workflow', slug: 'workflow' },
            { label: 'Checklist', slug: 'checklist' },
          ],
        },
        {
          label: 'Benchmarks',
          items: [
            { label: 'How top tech teams do design', slug: 'design-benchmarks' },
            { label: 'Before/after UI examples', slug: 'ui-examples' },
            { label: 'AI chat UI use cases', slug: 'ai-chat-ui' },
          ],
        },
        {
          label: 'Case studies',
          items: [
            { label: 'AI support assistant', slug: 'case-study-ai-support' },
            { label: 'AI coding copilot panel', slug: 'case-study-ai-coding' },
            { label: 'AI sales research workspace', slug: 'case-study-ai-sales' },
          ],
        },
        {
          label: 'Framework setup',
          items: [
            { label: 'Tailwind + shadcn quickstart', slug: 'tailwind-shadcn-setup' },
            { label: 'AI chat component gallery', slug: 'ai-chat-component-gallery' },
          ],
        },
        { label: 'Product ideas', items: [{ label: 'Tool directions', slug: 'product' }] },
      ],
    }),
  ],
});
