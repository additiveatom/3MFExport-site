# 3MF Export Plugin — Support Site

Source for the support/documentation site for the HueForge 3MF Export
Plugin, intended to be served at `support.3mfexport.com` (or similar).

Built with [Astro Starlight](https://starlight.astro.build/).

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Production build

```bash
npm run build
npm run preview
```

Built output lands in `dist/`. Any static host works — Cloudflare
Pages, Netlify, S3 + CloudFront, plain Nginx.

## Content

All documentation pages live under `src/content/docs/` as `.md` /
`.mdx`. Sidebar order is defined in `astro.config.mjs`.

| Section | What lives there |
|---|---|
| `index.mdx` | Landing page — what the plugin does + entry links |
| `getting-started/` | First install + first export walkthrough |
| `troubleshooting/` | Symptom → fix lookup |
| `faq.mdx` | Expanded FAQ (mirrors + extends marketing page) |
| `contact.mdx` | Email + bug-report template |
