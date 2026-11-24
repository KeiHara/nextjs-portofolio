# Keisuke Hara’s portfolio

A TanStack Start portfolio with prerendered About, Websites and Mobile apps pages. The interactive voxel dog loads separately; the portfolio content works without JavaScript.

Hover over the voxel dog or globe and scroll the mouse wheel or pinch the trackpad to zoom. Drag to rotate; scrolling outside a model moves the page.

## Local development

Use Node 26.x and npm. Run `npm ci`, then `npm run dev` and open http://localhost:3000. Run `npm run lint`, `npm run typecheck` and `npm run build` before pushing. To serve the production build locally, run `npm run preview -- --port 3000`.

## Editing the site

- Update CV copy in `src/data/profile.ts` and project details in `src/data/works.ts`.
- Edit globe pins and tooltip notes in `src/data/residences.ts`. The original terrain model uses [Natural Earth](https://www.naturalearthdata.com/downloads/110m-physical-vectors/110m-land/) coastlines. Rebuild `public/maps/residences.glb` with `uv run scripts/generate-globe.py`; normal site builds need only the generated file.
- Keep image originals in `assets/images/`. Run `npm run images` and commit the generated WebP files, social preview image and typed image manifest.
- Components are presentational; keep stateful behaviour in `src/hooks/`. Use the shadcn CLI for `src/components/ui/`.
- Define portfolio spacing in the Tailwind theme in `src/styles.css`. Use `tight` for closely related text, `inline` for controls and badges, `stack` within a section, `group` between entries, and `section` between sections (for example `gap-inline` or `mt-section`). Shell sizing and breakpoint adjustments live alongside these tokens, not in individual components.
- Deploy with the TanStack Start Vercel preset. Nitro selects the Vercel output format at build time. For a custom domain, update `src/lib/site.ts` and `public/robots.txt`.
