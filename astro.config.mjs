// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://support.3mfexport.com',
  integrations: [
    starlight({
      title: '3MF Export Plugin',
      description:
        'Support and documentation for the HueForge 3MF Export Plugin — turning HueForge models into ready-to-print 3MFs for ten slicers.',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: false,
      },
      customCss: ['./src/styles/custom.css'],
      lastUpdated: true,
      head: [
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://support.3mfexport.com/og-image.svg' } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: 'https://support.3mfexport.com/og-image.svg' } },
      ],
      sidebar: [
        {
          label: 'Getting started',
          items: [
            { label: 'What it is', slug: 'getting-started/overview' },
            { label: 'Install the plugin', slug: 'getting-started/install' },
            { label: 'Your first export', slug: 'getting-started/first-export' },
            { label: 'Importing a printer profile', slug: 'getting-started/import-profile' },
          ],
        },
        {
          label: 'FAQ',
          slug: 'faq',
        },
        {
          label: 'Troubleshooting',
          items: [
            { label: 'Common issues', slug: 'troubleshooting/common' },
            { label: 'Layer numbers differ from Describe.txt', slug: 'troubleshooting/describe-txt-layer-shift' },
            { label: 'Profile values look wrong', slug: 'troubleshooting/profile-fidelity' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'HugeForge tile mode', slug: 'reference/tile-mode' },
            { label: 'FlatForge / ColorDrop / Split-by-Color', slug: 'reference/flatforge' },
          ],
        },
        {
          label: 'Contact & support',
          slug: 'contact',
        },
      ],
    }),
  ],
});
