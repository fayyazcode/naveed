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
