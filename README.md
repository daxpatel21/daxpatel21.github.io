# Dax Patel — Portfolio

Personal portfolio site for Dax Patel, Embedded Software Engineer.

Built with React + Vite + Tailwind CSS v4, framer-motion for scroll and boot
animations, and lucide-react for icons. Dark theme only.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # serve the production build on http://localhost:4173
```

`vite.config.js` sets `base: './'` so the build works both at a domain root and
under a subpath (e.g. a GitHub Pages project site).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages.

## Structure

```
src/
  components/   Navbar, Footer, ScrollProgress, TerminalWindow,
                SectionHeading, AnimatedSection, ProjectCard,
                CircuitTraces, BrandIcons
  sections/     Hero, About, Experience, Projects, Skills,
                Education, Certifications, Contact
  lib/motion.js Shared framer-motion variants
public/         resume.pdf, og-image.png, favicon.svg
```

## Notes

- `og:image` and `og:url` in `index.html` use root-relative paths. Once the
  final domain is known, set them to absolute URLs — most social scrapers
  (LinkedIn in particular) will not resolve relative Open Graph paths.
- Replace `public/resume.pdf` to update the resume download.
