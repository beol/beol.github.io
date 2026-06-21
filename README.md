# beol.github.io

Professional portfolio of [Leo Laksmana](https://beol.github.io) — Senior Director of Engineering, Engineering Transformation Leader, and AI Practitioner.

Built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/).

## Stack

- **Jekyll** 4.0 with custom SCSS (no off-the-shelf theme layout)
- **Ruby** 4.0
- **Plugins:** jekyll-sitemap
- **Font:** Inter via system stack

## Development

```bash
bundle install
bundle exec jekyll serve
```

Site runs at `http://localhost:4000`.

## Deployment

Pushes to `main` trigger the GitHub Actions deploy workflow (`.github/workflows/deploy.yml`), which builds the site and publishes it to GitHub Pages via the official `actions/deploy-pages` action.

Requires **Settings → Pages → Source** set to **GitHub Actions** in the repository.

## Content

| File/Directory | Purpose |
|---|---|
| `index.md` | Home page (hero, timeline) |
| `_data/pillars.yml` | Technical pillars section |
| `_data/transformations.yml` | Case studies section |
| `_layouts/home.html` | Home page layout |
| `assets/css/style.scss` | All styles |
| `assets/images/avatar.jpg` | Profile photo |
| `_includes/header.html` | Sidebar (nav, social links, copyright) |

## Copyright & License

Copyright (C) 2025 Leo Laksmana. Released under the MIT License.
