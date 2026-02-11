import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
    starlight({
      title: 'UI Token Guidebook',
      description:
        'A developer-first, token-based system for spacing, type, color, and component sizing — plus a pre-coding workflow that eliminates guesswork.',
      defaultLocale: 'en',
      social: {
        github: 'https://github.com/humblecasa/casa-ui-design-book',
      },
      customCss: ['./src/styles/custom.css'],
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
          items: [{ label: 'How top tech teams do design', slug: 'design-benchmarks' }],
        },
        { label: 'Product ideas', items: [{ label: 'Tool directions', slug: 'product' }] },
      ],
    }),
  ],
});
