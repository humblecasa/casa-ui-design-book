# UI Token Guidebook (Astro + Starlight)

This folder is a Starlight docs site scaffold.

- GitHub user: `humblecasa`
- Repo: `casa-ui-design-book`
- Target URL: https://humblecasa.github.io/casa-ui-design-book/

## Prereqs
Install Node.js (LTS) on your machine.

## Run locally
```bash
cd astro-starlight
npm install
npm run dev
```

## Deploy to GitHub Pages (free)
This repo includes `.github/workflows/deploy.yml` which builds and deploys to GitHub Pages on every push to `main`.

1) Push this folder contents to `https://github.com/humblecasa/casa-ui-design-book`
2) In GitHub repo settings:
   - Settings → Pages → Source: **GitHub Actions**
3) Wait for the Actions run to finish.

If you change the repo name, you must update `astro.config.mjs` (`site` + `base`).
