# Deployment

## Production

- Platform: Vercel
- Project: `ikun-website`
- Production URL: https://ikun-website.vercel.app
- Framework preset: Next.js
- Build command: `npm run build`

The checked-in source must not contain `.vercel/` metadata or real environment values. Start from `.env.example` for public site configuration.

## Release checks

```bash
npm ci
npm run test
npm run lint
npm run build
```

After the checks pass, deploy the current commit with the linked Vercel project and verify the production URL returns HTTP 200.
