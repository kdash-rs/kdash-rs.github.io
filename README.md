# kdash.cli.rs

Marketing site for [KDash](https://github.com/kdash-rs/kdash), built with
[Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) and
themed with [Catppuccin Macchiato](https://catppuccin.com/palette) (KDash's
default in-app theme).

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static build into dist/
npm run preview  # preview the production build
```

## Deploy

Pushing to `main` builds and publishes to GitHub Pages via
`.github/workflows/deploy.yml`. The repo's Pages source must be set to
"GitHub Actions". The custom domain lives in `public/CNAME`.

## Content

- Copy and section data live in `src/data/` (`features.ts`, `faq.ts`,
  `version.ts`) and the section components in `src/components/`.
- Screenshots and the asciinema cast (`ui.cast`) live in `public/`; refresh
  them from the main repo's `screenshots/` directory.
- Bump `src/data/version.ts` on each KDash release.
