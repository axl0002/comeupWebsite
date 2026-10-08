# getcomeup.com

One-screen landing (a rotating quote, one line, the store button), plus privacy,
terms and support pages for Comeup, the squad accountability app.

Next.js 15 (app router) + Tailwind v4. The look is the app's light neumorphism: one
base grey, surfaces read as raised or pressed-in through a pair of shadows, one soft
blue accent. Colours and depth presets live in `app/globals.css` and mirror
`lib/utils/palette.dart` / `lib/utils/theme.dart` in the app repo.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

Deployed on Vercel from the `main` branch. Quotes are read from the app's
Supabase `quotes` table (`SUPABASE_URL`, `SUPABASE_ANON_KEY`); store links from
`NEXT_PUBLIC_APP_STORE_URL` / `NEXT_PUBLIC_PLAY_STORE_URL` (see `.env.example`).
