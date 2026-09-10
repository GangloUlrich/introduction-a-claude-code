# D.Nova — Personal Portfolio

Single-page personal portfolio built with **Nuxt 4** and **Tailwind CSS**, integrating the
["Personal Portfolio Website Design"](https://dribbble.com/shots/24978876-Personal-Portfolio-Website-Design)
shot from Dribbble section by section.

- **Live site**: https://gangloulrich.github.io/introduction-a-claude-code/
- **Build report (Notion)**: https://app.notion.com/p/3d77e5a51249816fb893ed2faa9d0d0d?pvs=204
- **Build report (illustrated)**: https://claude.ai/code/artifact/1561e219-df5d-4a5c-94e9-7814d7552335
- **Design source**: https://dribbble.com/shots/24978876-Personal-Portfolio-Website-Design
- **Image credits**: see [CREDITS.md](./CREDITS.md)

## Setup

```bash
npm install --legacy-peer-deps
```

## Development

```bash
npm run dev
```

Starts the dev server on `http://localhost:3000`.

## Production build

```bash
npm run generate
```

Generates the static site into `.output/public`.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which runs `nuxt generate` and
publishes `.output/public` to GitHub Pages via `actions/deploy-pages`. The base path is
auto-detected from the repository name (`/` for a `<user>.github.io` repo, `/<repo-name>/`
otherwise).
