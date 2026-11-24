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

Connect the GoDaddy Node.js Hosting app to this GitHub repository and select the `main` branch. GoDaddy installs production dependencies, runs `npm run build` to create the Nitro SSR bundle, and runs `npm start` to launch `server.cjs`. The app requests Node.js 24 and Nitro listens on the port GoDaddy assigns through `PORT`.

For ZIP upload, include the repository source with `package.json` and `package-lock.json` at the root. Exclude `node_modules`, generated output, and local environment files.

Open the GoDaddy preview and check the home page, `/audio-book`, a blog article, an invalid article URL that should return 404, and that CSS loads. Publish and connect your domain after the preview passes.
