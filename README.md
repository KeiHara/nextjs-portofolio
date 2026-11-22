# Keisuke Hara’s portfolio

A TanStack Start portfolio with prerendered About, Websites and Mobile apps pages. The interactive voxel dog loads separately; the portfolio content works without JavaScript.

## Local development

Use Node 26.x and npm. Run `npm ci`, then `npm run dev` and open http://localhost:3000. Run `npm run lint`, `npm run typecheck` and `npm run build` before pushing. To serve the production build locally, run `npm run preview -- --port 3000`.

## Editing the site

- Update CV copy in `src/data/profile.ts` and project details in `src/data/works.ts`.
- Keep image originals in `assets/images/`. Run `npm run images` and commit the generated WebP files, social preview image and typed image manifest.
- Components are presentational; keep stateful behaviour in `src/hooks/`. Use the shadcn CLI for `src/components/ui/`.
- Deploy with the TanStack Start Vercel preset. Nitro selects the Vercel output format at build time. For a custom domain, update `src/lib/site.ts` and `public/robots.txt`.
