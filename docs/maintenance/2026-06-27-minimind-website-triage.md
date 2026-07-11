# MiniMind Website Triage - 2026-06-27

## Repository

- GitHub: `ikun-llm/ikun-llm.github.io`
- Category: Next.js website under the MiniMind workspace
- Production: `https://ikun.rxcloud.group`
- Vercel fallback: `https://ikun-website.vercel.app`
- Vercel project: `ikun-website`

## Actions Taken

- Added `.env.example` for public site URL placeholder.
- Added `test` and `type-check` scripts using TypeScript no-emit checks.
- Documented the existing Vercel production target and release checks.

## Validation

- Passed: `npm run test`
- Passed with five Next image optimization warnings: `npm run lint`
- Passed: `npm run build`

## Follow-Up

- Replace repeated raw `<img>` tags with `next/image` where it improves LCP and image handling.
