# Izzy's Busy

Izzy's Busy — a personal lifestyle blog centered on nutrition, health, and
wellness for young girls and women. Feel your best.

Hosted free on [Netlify](https://netlify.com), built with
[Eleventy](https://www.11ty.dev), and edited without code through
[Pages CMS](https://app.pagescms.org).

## ✍️ How Izzy publishes (no code!)

1. Go to **app.pagescms.org** and sign in with GitHub.
2. Pick this repository. The sections appear as friendly editing screens:
   Food (Recipe Book), Movement, Thoughts, The Deep Dive, Favorites, and the
   About page.
3. Click **Add entry**, write in the editor, upload photos with the image
   button, and hit **Save**. The site republishes itself within a minute or
   two.

New posts automatically appear on the homepage, their section page, and the
filters — no other steps.

## How the site is organized

```
src/recipes/          → Food section entries (mealType drives the filters)
src/movement/         → Movement entries (area: Mind-Body/Strength,
                        kind: Studio Review/Routine)
src/thoughts/         → Thoughts (short-form posts)
src/deep-dives/       → The Deep Dive (long-form, sourced articles)
src/favorites/        → Favorites cards (link out to products; no page)
src/about/index.md    → About page text
src/pages/            → Contact, Privacy, Terms, Disclaimer
src/_includes/        → page layouts (design)
src/_data/            → site name, tagline, section lists
src/assets/           → styles, badge/logo, favicon, images
.pages.yml            → configures the Pages CMS editing screens
```

## Design notes

- The header photo band uses `src/assets/images/header.jpg` if it exists
  (add one for the Lovebirdie-style photo backdrop); otherwise it shows the
  pinstripe pattern.
- The Movement tiles look for `src/assets/images/movement-mind-body.jpg`
  and `movement-strength.jpg`.
- The logo is `src/assets/badge.svg` — replace it with your own design
  anytime (a transparent-background PNG named `badge.png` works too, just
  update the two references in `src/_includes/base.njk` and `src/index.njk`).
- Everyday design changes are self-serve: the **🎨 Theme & Design** screen
  in Pages CMS controls the tagline, accent color, stripe color, and title
  font from dropdowns (stored in `src/_data/theme.json`). No code needed.
- Deeper design changes (layout, spacing, new colors beyond the presets,
  new fonts) live in `src/assets/styles.css` — ask Claude for these.

## Running it locally (optional)

```
npm install
npm start        # live-reloading preview at localhost:8080
```

Netlify builds automatically from `netlify.toml` (`npm run build` → `_site`).

## House rules (editorial guardrails)

- No calorie counts, weight-loss framing, or before/after content.
- Deep Dive posts cite real sources.
- Personal experience disclaimers stay on posts (they're built into the
  layouts).
- Keep last names, school names, and exact locations off the site.

See `BRAND_STRATEGY.md` for the full voice, audience, and content strategy.
