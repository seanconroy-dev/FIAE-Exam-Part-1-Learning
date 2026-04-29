# How to Recreate a Content-Driven Web App from Scratch

General notes for rebuilding any project that follows this pattern:
- structured content stored as Markdown files
- a frontend that fetches and renders that content
- a backend API that serves the content as JSON
- free static hosting with CI/CD

These notes use this FIAE learning app as the running example, but every
step applies to any similar project (docs site, recipe app, quiz tool, blog, etc.).

---

## 1. Understand the Architecture Before Touching Any Code

Draw this out mentally before starting:

```
Content (Markdown files)
        ↓ reads at startup
Backend API (e.g. Quarkus, Spring Boot, Express)
        ↓ GET /api/content
Frontend (e.g. Astro, Next.js, Vue)
        ↓ built as static files
Static Host (e.g. GitHub Pages, Netlify, Vercel)
```

Example from this project:
- Content: `ap1-*.md` files with YAML frontmatter
- Backend: Quarkus on Railway → `GET /api/cards/markdown`
- Frontend: Astro → fetches cards, renders pages
- Host: GitHub Pages via GitHub Actions

The same shape works for: a recipe site (recipes as Markdown), a docs site
(articles as Markdown), a flashcard app for any subject.

---

## 2. Start with the Content Schema

Design your frontmatter before writing a single piece of content.
Changing it later is painful once content exists.

Minimal schema that works for most content apps:

```yaml
id: ""          # stable, never changes (use a prefix + zero-padded number)
slug: ""        # human-readable URL segment, lowercase, hyphen-separated
title: ""       # display name
category: ""    # which group/module this belongs to
tags: []        # for filtering
status: draft   # draft | published | deprecated
created: ""
updated: ""
```

Then add domain-specific fields on top. Example for a flashcard:

```yaml
card:
  question: ""
  answer: ""
  type: basic   # basic | multi | steps
```

Example for a recipe:

```yaml
recipe:
  prep_time_minutes: 10
  servings: 4
  ingredients: []
```

**Rule:** add optional fields early — it costs nothing. Removing a field
used by existing content is a breaking change.

---

## 3. File Naming Convention

Pick a convention and stick to it permanently.

Recommended pattern:

```
<category-folder>/<prefix>-<zero-padded-id>-<slug>.md
```

Examples:
- `cards/ap1-0071-usv-aufgaben.md`
- `recipes/rec-0012-pasta-carbonara.md`
- `docs/doc-0003-getting-started.md`

Why zero-padded IDs:
- Files sort correctly in any file browser
- Easy to grep: `find . -name 'rec-*.md'`
- ID in filename matches ID in frontmatter → orphaned files are obvious

**Rule:** the ID in the filename must always match the `id` field in frontmatter.

---

## 4. Set Up the Backend API

The backend has one job: read the Markdown files, parse frontmatter, and
return JSON. No database needed for read-heavy content that changes rarely.

Minimal endpoint to expose:

```
GET /api/content          → returns all items as JSON array
GET /api/content/{slug}   → returns one item
```

This project exposes: `GET /api/cards/markdown`

Each response item should include every frontmatter field plus the raw or
pre-rendered Markdown body.

**Java/Quarkus example:**

```java
@Path("/api/cards")
@Produces(MediaType.APPLICATION_JSON)
public class CardResource {

    @Inject CardService service;

    @GET
    @Path("/markdown")
    public List<Card> getAll() {
        return service.getAllCards();
    }
}
```

Load and cache files at startup:

```java
@ApplicationScoped
public class CardService {
    private List<Card> cache;

    @PostConstruct
    void init() {
        cache = loadMarkdownFiles(); // walk classpath or a configured directory
    }
}
```

**Node/Express example:**

```js
app.get('/api/cards', (req, res) => {
  res.json(cardService.getAll());
});
```

---

## 5. CORS — Always Needed When Frontend and Backend Are on Different Domains

If your frontend is hosted separately (GitHub Pages) and calls a backend
API (Railway, Fly.io, Render), CORS must be explicitly configured.

**Quarkus:**
```properties
# application.properties
quarkus.http.cors=true
quarkus.http.cors.origins=https://your-frontend.github.io
```

For local dev, also allow:
```properties
quarkus.http.cors.origins=https://your-frontend.github.io,http://localhost:4321
```

**Express (Node):**
```js
const cors = require('cors');
app.use(cors({ origin: 'https://your-frontend.github.io' }));
```

Forgetting CORS is one of the most common causes of a working local dev
build failing in production.

---

## 6. Set Up the Frontend

This project uses Astro. The same approach works in Next.js, Nuxt, SvelteKit.

Astro new project:

```bash
npm create astro@latest my-site
cd my-site
npx astro add tailwind
npm install gray-matter marked
```

Point the fetcher at your API via an env var:

```
# .env
PUBLIC_API_BASE=https://your-backend.example.com
```

Fetch helper pattern (works in any framework):

```ts
const API_BASE = import.meta.env.PUBLIC_API_BASE;

export async function getAllCards() {
  const res = await fetch(`${API_BASE}/api/cards/markdown`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
```

For Next.js replace `import.meta.env.PUBLIC_API_BASE` with
`process.env.NEXT_PUBLIC_API_BASE`.

---

## 7. Dynamic Routes by Slug

Every content-driven app needs a dynamic route like `/cards/my-slug`.

**Astro** (`src/pages/cards/[slug].astro`):

```js
export async function getStaticPaths() {
  const cards = await getAllCards();
  return cards.map(card => ({ params: { slug: card.slug } }));
}
```

**Next.js** (`pages/cards/[slug].js`):

```js
export async function getStaticPaths() {
  const cards = await getAllCards();
  return {
    paths: cards.map(c => ({ params: { slug: c.slug } })),
    fallback: false,
  };
}
```

**SvelteKit** (`src/routes/cards/[slug]/+page.js`):

```js
export async function load({ params }) {
  const card = await getCardBySlug(params.slug);
  return { card };
}
```

---

## 8. Slug Normalization for Non-ASCII Characters

If your category names or titles contain special characters (German umlauts,
accented letters, spaces), normalize them before using as URL slugs.

Algorithm:
1. Lowercase
2. Replace common special chars: ä→ae, ö→oe, ü→ue, ß→ss, é→e, etc.
3. Remove anything that is not `a-z 0-9 - _`
4. Collapse spaces to `-`
5. Trim

**Java:**
```java
public static String toSlug(String input) {
    return input.toLowerCase()
        .replace("ä","ae").replace("ö","oe")
        .replace("ü","ue").replace("ß","ss")
        .replaceAll("[^a-z0-9\\s_-]","")
        .trim()
        .replaceAll("\\s+","-")
        .replaceAll("-+","-");
}
```

**TypeScript:**
```ts
export function toSlug(input: string): string {
  return input.toLowerCase()
    .replace(/ä/g,'ae').replace(/ö/g,'oe')
    .replace(/ü/g,'ue').replace(/ß/g,'ss')
    .replace(/[^a-z0-9\s_-]/g,'')
    .trim()
    .replace(/\s+/g,'-')
    .replace(/-+/g,'-');
}
```

**Critical:** frontend and backend must use the exact same algorithm or
slug-based routes will silently 404.

---

## 9. GitHub Pages Deployment

Minimum workflow file (`.github/workflows/deploy.yml`):

```yaml
name: Deploy Site

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: site/package-lock.json
      - run: npm ci
        working-directory: site
      - run: npm run build
        working-directory: site
      - uses: actions/upload-pages-artifact@v3
        with:
          path: site/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
```

Required GitHub repo settings:
- Settings → Pages → Source → **GitHub Actions**
- No branch selection needed when using this workflow

If your repo is `github.com/username/my-repo`, the base URL is
`https://username.github.io/my-repo`. Set this in the framework config:

**Astro (`astro.config.mjs`):**
```js
export default defineConfig({
  site: 'https://username.github.io',
  base: '/my-repo',
});
```

**Next.js (`next.config.js`):**
```js
module.exports = {
  basePath: '/my-repo',
  assetPrefix: '/my-repo/',
};
```

---

## 10. Environment Variables — Local vs Production

Never hardcode URLs. Always use env vars and swap them per environment.

Create a `.env` file locally (add to `.gitignore`):

```env
PUBLIC_API_BASE=http://localhost:8080
```

In CI/CD, set the production value as a GitHub Actions secret or repo variable:

```yaml
- run: npm run build
  env:
    PUBLIC_API_BASE: ${{ secrets.API_BASE_URL }}
  working-directory: site
```

---

## 11. Checklist: Verify a Rebuild Works

- [ ] Backend starts and `GET /api/content` returns JSON
- [ ] CORS headers present when called from frontend origin
- [ ] Frontend `npm ci && npm run build` completes without errors
- [ ] Home page renders with content loaded from API
- [ ] Dynamic slug routes resolve correctly
- [ ] No 404s on images or assets
- [ ] GitHub Actions build job passes
- [ ] GitHub Actions deploy job passes
- [ ] Live URL (`https://username.github.io/repo`) loads correctly
- [ ] Environment variable for API base points to production backend

---

## 12. Common Mistakes to Avoid

| Mistake | Fix |
|---------|-----|
| Hardcoded API URL in code | Always use an env var |
| No CORS config on backend | Add CORS with correct origin |
| Frontend and backend use different slug algorithms | Share or port the same function |
| Changing frontmatter schema on published content | Only add optional fields; never rename or remove |
| Forgetting to update `base` in Astro/Next config after rename | Change config to match new repo name |
| Committing `.env` to git | Add `.env` to `.gitignore` |
| Missing `id-token: write` permission in Pages workflow | Required for `actions/deploy-pages` to work |
