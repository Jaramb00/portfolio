# Josip Arambašić — Portfolio

One-page personal portfolio in English (`/`) and Croatian (`/hr/`).
Built with [Astro](https://astro.build): static HTML, no framework runtime, almost no JavaScript.

## Run locally

Requires **Node.js 22.12+**.

```bash
npm install
npm run dev        # http://localhost:4321  (Croatian: /hr/)
```

| Command           | What it does                                                 |
| ----------------- | ------------------------------------------------------------ |
| `npm run dev`     | Development server with hot reload                           |
| `npm run build`   | Type-check (`astro check`) + production build into `dist/`   |
| `npm run preview` | Serve the production build locally                           |
| `npm run lint`    | Prettier formatting check + type-check                       |
| `npm run format`  | Auto-format all files                                        |
| `npm run og`      | Regenerate the social-sharing image and favicons (see below) |

## Where things live

```
src/
  data/                  ← ALL CONTENT. Edit these, not the components.
    profile.ts           name, email, links, CV paths, bio, "currently learning", goals
    projects.ts          projects (featured + client demos)
    skills.ts            skill groups ("used in projects" / "familiar")
    approach.ts          "My approach" items
    experience.ts        work, education, spoken languages
  i18n/ui.ts             interface text (menu, buttons, headings) in EN + HR
  assets/photo/          portrait.jpg (hero), thesis-defense-group.jpg (About)
  assets/projects/       project screenshots
  components/            one component per section + reusable pieces
  styles/global.css      design tokens (colours, fonts, spacing) + buttons/tags
public/
  cv/                    CV PDFs (EN + HR)
  og-image.png           image shown when the link is shared (LinkedIn, Slack…)
github-fixes/            ready-to-apply GitHub profile/README fixes (not deployed)
```

Every text field has an `en` and an `hr` value. If you add a field and forget one
language, `npm run build` fails with a type error — that's intentional.

## Common updates

**Add a project**

1. Optional: save a screenshot (16:10, ~1600px wide, JPG) to `src/assets/projects/my-project.jpg`.
2. In `src/data/projects.ts`, import it at the top and copy one existing object in the
   `projects` array. Fill in the fields.
   - `featured: true` → large card with problem / solution / what I learned.
   - `featured: false` → small card in "Client demos in progress"
     (rename that heading in `src/i18n/ui.ts`, keys `projects.more*`, if you use it for other work).
   - No screenshot? Leave out `image` and add `architecture: ['Layer 1', 'Layer 2', …]`
     — the card draws a simple diagram instead.
3. Array order = order on the page.

**Change skills** — edit `src/data/skills.ts`. Move an item from `familiar` to `used`
once you have shipped something with it.

**Update the CV** — replace `public/cv/Josip_Arambasic_CV_EN.pdf` and `..._HR.pdf`
(keep the file names, or change the paths in `profile.ts`).

**Change the photo** — replace `src/assets/photo/portrait.jpg` (portrait, 4:5) and/or
`thesis-defense-group.jpg`, then run `npm run og` so the sharing image uses the new photo.

**Add a section** (e.g. an AI-focused section later) — create
`src/components/MySection.astro` (copy `Approach.astro` as a template), put its content in
`src/data/`, add it to `src/components/Portfolio.astro`, and add a nav link in
`src/components/Header.astro`.

**Testimonials** — none are shown. Only add real ones, with the person's permission.

**Colours / fonts** — the tokens at the top of `src/styles/global.css`.

## Deploy (Vercel)

Live at **https://josip-arambasic.from.hr**, hosted on Vercel from
[github.com/Jaramb00/portfolio](https://github.com/Jaramb00/portfolio).
Every push to `main` redeploys automatically; there is nothing else to run.

- The custom domain is set in Vercel → Project → **Settings → Domains**, and its DNS record
  is managed in the CARNET domain portal (the `.from.hr` registrar).
- If the domain ever changes, update `SITE_URL` in `astro.config.mjs` and the `Sitemap:` line
  in `public/robots.txt`. Canonical URLs, hreflang tags, the sitemap and sharing metadata all
  follow from `SITE_URL`.

## Quality checks done

- `astro check`: 0 errors, 0 warnings. Prettier: clean.
- axe-core (WCAG 2.1 A/AA + best practices): 0 violations on EN and HR, light and dark.
- No horizontal scroll at 375px, 768px and 1280px.
- All links verified automatically, except LinkedIn, which blocks automated checks — open it once yourself to confirm.
