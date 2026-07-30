# servercloset.dev

Personal blog (homelab, self-hosting, infrastructure) at https://servercloset.dev/. Built on [AstroPaper](https://github.com/satnaing/astro-paper) v5.5.1 — Astro 5, Tailwind 4, TypeScript, Pagefind search.

## Commands

- `pnpm run dev` — dev server (localhost:4321)
- `pnpm run build` — `astro check` + build + pagefind index
- `pnpm run lint` / `pnpm run format:check` — CI runs both plus build on every PR

Use **pnpm** (lockfile is `pnpm-lock.yaml`; ignore stale `package-lock.json`).

## Content

- Blog posts: markdown in `src/data/blog/` (filename → slug unless `slug:` set in frontmatter)
- Frontmatter schema: `src/content.config.ts` — required: `title`, `description`, `pubDatetime` (Date); optional: `slug`, `tags`, `featured`, `draft`, `ogImage`, `author` (defaults "Sean")
- Site config: `src/config.ts` (SITE object), socials/share: `src/constants.ts`
- Static assets: `public/`; processed images: `src/assets/`
- Dynamic OG images generated per-post (satori/resvg) unless `ogImage` given

## Deploy

Cloudflare Pages builds from `main`. PRs run CI (`.github/workflows/ci.yml`): lint, format check, build. Never push to main directly — feature branch + PR.

## Agent skills

### Issue tracker

Issues tracked in GitHub Issues (seanfeeney/servercloset.dev) via `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default vocabulary: needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `CONTEXT.md` + `docs/adr/` at repo root (created lazily). See `docs/agents/domain.md`.
