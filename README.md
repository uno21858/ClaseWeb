# ClaseWeb

Personal portfolio of Erick Alberto Sánchez.

**Stack:** React 19, Vite 8, vanilla CSS, react-github-calendar, Resend (contact form), Vercel.

All content lives in `src/data.js`; keep it in sync with `public/Erick_Sanchez_Resume.pdf`.

## Dev

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run lint
```

## Deploy

Auto-deploys to Vercel on push to `main`. Contact form uses serverless function at `api/server.js` with the `RESEND_API_KEY` env var.

## Links

- Live: [uno21things.dev](https://uno21things.dev)
- GitHub: [uno21858](https://github.com/uno21858)
