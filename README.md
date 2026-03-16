# Next.js 16 API Route Hang Reproduction

Minimal reproduction for [vercel/next.js#91431](https://github.com/vercel/next.js/issues/91431).

## The Bug

All App Router API routes hang indefinitely on Vercel when deployed from a **pnpm monorepo with Root Directory set to a subdirectory** (`apps/web`).

- **Pages work:** `GET /` returns 200 immediately
- **API routes hang:** `GET /api/ping` never returns (status `-` in Vercel logs, eventually 504)

The `/api/ping` route has zero imports and just returns a JSON response.

## Structure

```
nextjs16-api-hang-repro/
├── apps/
│   └── web/              ← Vercel Root Directory
│       └── src/app/
│           ├── page.tsx          ← works (200)
│           └── api/ping/route.ts ← hangs (504)
├── packages/
│   └── shared/           ← simple shared package
├── pnpm-workspace.yaml
├── turbo.json
└── package.json
```

## Vercel Deploy Settings

- **Framework Preset:** Next.js
- **Root Directory:** `apps/web`
- **Build Command:** `turbo run build` (auto-detected)
- **Node.js:** 20.x

## To reproduce

1. Fork this repo
2. Create a new Vercel project connected to the fork
3. Set **Root Directory** to `apps/web`
4. Deploy
5. Visit `{deployment-url}/` → works (200)
6. Visit `{deployment-url}/api/ping` → hangs indefinitely

## What we've tested

All of these still result in hanging API routes:

- Deleted proxy.ts / middleware entirely
- Zero-import API route (no Clerk, no Sanity, no anything)
- Node.js 20.x and 24.x
- Turbopack and webpack (`--webpack`)
- With and without `pnpm.onlyBuiltDependencies`
- With and without Vercel Deployment Protection
