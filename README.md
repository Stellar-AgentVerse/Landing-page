# AgentVerse — Landing Page

The public entry point for **AgentVerse Market V1**: a curated marketplace for AI
prompts, settled on the Stellar network.

Market V1 is deliberately narrow. It sells **prompts only**, runs on the Stellar
**test** network, and is invitation-only. The copy on this site is scoped to
match — see [Claims policy](#claims-policy).

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and TypeScript.

## Local development

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

## Configuration

Copy `.env.example` to `.env.local` and fill in what you need. Everything is
optional — the site builds and behaves correctly with no configuration at all.

| Variable | Purpose | When unset |
| --- | --- | --- |
| `NEXT_PUBLIC_APP_URL` | The deployed marketplace app. All primary CTAs point here. | CTAs fall back to `/access` and relabel to "Request Beta Access". |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL of this landing page. | `metadataBase`, canonical and OG URLs are omitted. |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Address behind every support link. | A placeholder address is used. |
| `NEXT_PUBLIC_DOCS_URL` | Public documentation. | Falls back to the GitHub organisation. |

Two things worth knowing:

- `NEXT_PUBLIC_*` values are **inlined at build time**. Changing one in your
  hosting provider requires a **redeploy**, not just a restart.
- `NEXT_PUBLIC_APP_URL` must be an absolute `https://` URL (`http://` is
  accepted for localhost only). Anything else is rejected and treated as unset,
  so a typo degrades to the safe fallback instead of sending visitors somewhere
  unexpected.

## How CTAs work

Every call to action resolves through `app/config/site.ts`. There is no
hardcoded destination and no "coming soon" modal anywhere in the codebase.

- **App configured** → CTAs link to `NEXT_PUBLIC_APP_URL` (`/marketplace`,
  `/publish`, `/dashboard`).
- **App not configured** → CTAs link to `/access`, an in-repo page that explains
  the beta and offers a contact route. It always works.

Campaign attribution is preserved across the hop. `app/lib/attribution.ts`
copies an allowlist — `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`,
`utm_content`, `ref` — onto the outbound URL, and nothing else. It only ever
decorates the configured app origin, never accepts a destination from the query
string, and rejects over-long or control-character values, so it cannot become
an open redirect or leak data to a third party.

## Checks

```bash
pnpm lint:ci      # eslint, zero warnings tolerated
pnpm typecheck    # tsc --noEmit
pnpm build        # production build
pnpm check:links  # every internal href resolves to a real route
pnpm check:legal  # reports legal documents still awaiting review
```

CI (`.github/workflows/ci.yml`) runs all of these on every pull request and on
pushes to `main`.

`check:links` is offline and dependency-free: it derives the route table from
`app/**/page.tsx` and fails on any internal link that does not resolve, and on
any placeholder `href="#"`. External links are counted but never fail the build.

## Legal documents

The pages under `app/legal/` are **contributor drafts**. They have not been
reviewed by a lawyer, each renders a visible draft banner, and
`pnpm check:legal` lists them on every CI run.

Review state lives in `app/config/legal.ts`. To mark a document reviewed, a
maintainer sets `reviewStatus: "reviewed"` and records `reviewedBy`,
`reviewDate` and the `jurisdictions` the review covers. Run
`pnpm check:legal --strict` to fail while anything is still a draft — flip CI to
that before inviting external users.

## Deployment

Deployed on **Vercel**, built from `main`.

| | |
| --- | --- |
| Platform | Vercel |
| Production branch | `main` |
| Build command | `pnpm build` |
| Owner | **Unassigned — a maintainer must claim this.** |

> The existing Vercel projects are attached to a personal account and sit behind
> deployment protection, so they are not publicly reachable. Moving the project
> to an organisation account, disabling protection for production, and attaching
> a custom domain are maintainer tasks tracked in the pull request for issue #1.

Once a canonical URL exists, set it as the repository homepage:

```bash
gh repo edit Stellar-AgentVerse/Landing-page --homepage "https://<canonical-url>"
```

## Claims policy

Until Mainnet, the site may only state what Market V1 actually does:

- ✅ Prompts, curated and human-reviewed; Stellar Testnet; wallet sign-in;
  purchase and delivery; creator payouts credited in test XLM.
- ❌ Agents, datasets, models, tools, workflows or hosting as available
  products; instant or guaranteed payouts; any earnings figure, live counter or
  transaction ID that is not real; "decentralized" claims the architecture does
  not support.

If a claim cannot be demonstrated in the product today, it does not belong on
this page.
