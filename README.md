# StoryPrint Agency

An editorial book-services website built with React, TypeScript, TanStack Start, Three.js and GSAP.

## Development

Use Node.js 22.12+ (validated with Node.js 24).

```sh
npm ci --cache /tmp/storyprint-npm-cache
npm run dev -- --host 0.0.0.0 --port 3000
```

```sh
npm run build
npx tsc --noEmit
```

The hero uses an original canvas-textured Three.js book, with a CSS fallback when WebGL is unavailable. Pointer movement controls its rotation. GSAP handles entrance and scroll reveals. Both respect reduced-motion preferences.

Service cards expand, concept covers open in an accessible preview, FAQs use native disclosures, and the mobile navigation closes on selection.

## Contact flow

The inquiry form validates required fields, then prepares a link to the visitor’s email app with a prefilled message to `hello@storyprintagency.com`, the address supplied in the original project. It does not store inquiries or claim they were sent. Verify ownership of this address before production. A backend email/CRM integration is needed for direct website submission.

Concept covers are explicitly labeled as concepts, not client work. No sales figures, testimonials, or client results are asserted. Content is adapted from the uploaded project; access to the requested reference website was blocked by the environment network policy.

## Pages and motion

The shared navigation includes Home, About Us, a Services directory and dropdown, Book Publishing, Book Marketing, Book Editing, Blogs, and Contact. The dropdown includes Audio Book, Children’s Book Marketing, Children’s Book Editing, Book Illustration, Amazon Publishing Services, and Book Writing Services.

Each service has a dedicated URL, original explanatory content, scope, process, FAQs, related services, and contact links. The journal has three full articles and a real 404 for unknown article slugs. Service inquiries preserve the selected service on the Contact page.

Hero artwork is tailored to the page: a Three.js book for publishing; animated outreach for marketing; markup for editing; narration waves for audio; age-specific visual accents for children’s services; brushwork for illustration; a KDP listing for Amazon support; a manuscript for writing; connected crafts for About; an envelope for Contact; and editorial sheets for the journal. GSAP animations include pause controls and respect reduced-motion preferences. The publishing scene loads separately from the other page artwork.

The Contact page includes a required-fields check, service and project-stage selection, project brief, optional timing, and consent. Changes to the brief clear any prepared email link so a stale inquiry is not sent. No physical address, phone number, fabricated staff profiles or guaranteed response times are asserted.

## Deploy to GoDaddy Node.js

Use a GoDaddy plan that can run a persistent Node.js application, with Node.js 24 selected. From the application root on Linux, install the locked dependencies and build the SSR server:

```sh
npm ci --include=dev
npm run build:godaddy
```

In the hosting control panel, set the application root to the directory containing `package.json`, set the startup file to `server.cjs`, and set `NODE_ENV=production`. If your plan uses a start command, use `npm start`. Nitro uses the hosting provider's `PORT` when supplied and defaults to port 3000. On a VPS, run the app under a service manager and point the HTTPS reverse proxy at that port.

If building off-host, deploy `server.cjs` and the entire `.output/` directory together, including `.output/public/`. The build contains the SSR entry and the assets it serves.

Before changing DNS, use a test hostname to check the home page, a direct request to `/audio-book`, an article under `/blogs`, and an invalid article URL that should return 404. Verify that styles load and the contact form opens a prefilled email. Point the production domain to GoDaddy once those checks and HTTPS pass.

## Deploy to Netlify

Connect the GitHub repository and deploy the `main` branch with the repository root as the base directory. The committed `netlify.toml` sets:

- Build command: `npm run build`
- Publish directory: `dist`
- Node.js: `24`

Netlify sets `NETLIFY=true`; the Vite configuration then selects Nitro's Netlify preset. This produces public assets in `dist` and the SSR function in `.netlify/functions-internal/server`. Both are needed: the public directory alone is not a static export of the application. Nitro generates the function routing; do not add an `index.html` SPA redirect.

The repository uses `package-lock.json` and npm for reproducible installation. The obsolete Bun lockfile has been removed so Netlify does not select Bun from a stale lockfile. Existing `bun run build` and `dist/client` UI settings are superseded by `netlify.toml`; update them to match if maintaining those settings manually.

After pulling this change, trigger a new deploy (clear the build cache if the old Bun installation is reused). Test `/`, `/about-us`, `/contact`, `/audio-book` and an article URL directly to verify SSR and deep links. A successful local build does not establish that a hosted deploy has completed.

To reproduce the production output locally:

```sh
NETLIFY=true npm run build
```
