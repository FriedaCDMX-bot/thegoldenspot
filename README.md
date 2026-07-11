# The Golden Spot

A personal lifestyle blog centered on nutrition, health, and wellness for young
girls and women — feel your absolute best, no diet culture required.

This is a plain static website (just HTML and CSS, no build step), designed to
be hosted for free on [Netlify](https://netlify.com).

## How the site is organized

```
index.html            → homepage
about/                → about page
blog/                 → "All Posts" page + one folder per post
food/                 → Food section page
movement/             → Movement section page
routines/             → Routines section page
deep-dive/            → The Deep Dive (long-form column) section page
assets/styles.css     → all the design (colors, fonts, layout)
assets/images/        → put your photos here
```

## Publishing a new post

1. Copy an existing post folder inside `blog/` (e.g. `blog/what-i-eat-in-a-day/`)
   and rename it to your new post's URL slug, e.g. `blog/my-morning-routine/`.
2. Edit the `index.html` inside it: title, date, category label, and body text.
3. Add a card for the post on `blog/index.html` (All Posts), on the matching
   section page (e.g. `routines/index.html`), and — if it's your newest post —
   update the hero and Recent Posts on the homepage `index.html`.
4. Commit and push (or edit directly on GitHub). Netlify republishes
   automatically within a minute or two.

### Adding photos

Save photos into `assets/images/`, then replace a placeholder block:

```html
<div class="img-placeholder">add a photo</div>
```

with a real image:

```html
<img src="/assets/images/your-photo.jpg" alt="describe the photo" />
```

Tip: resize photos to ~1600px wide before uploading so pages load fast.

## Changing the blog's name later (it's easy)

The name appears only as text — nothing structural depends on it:

- **Site text:** find-and-replace "The Golden Spot" across the HTML files
  (a few minutes, and Claude can do it on request).
- **Netlify URL:** free to change anytime — Site configuration → Site details →
  Change site name.
- **GitHub repo name:** free to rename — Settings → General → Rename.
  GitHub redirects the old name automatically.
- **Custom domain:** the only thing that costs money (~$10–20/yr per domain).
  Buying can be deferred until the name feels settled.

## House rules (editorial guardrails)

- No calorie counts, weight-loss framing, or before/after content.
- Deep Dive posts cite real sources.
- Every post keeps the standing disclaimer: personal experience + student
  research, not medical advice.
- Keep last names, school names, and exact locations off the site.

See `BRAND_STRATEGY.md` for the full voice, audience, and content strategy.
