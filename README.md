# Paboya Group website

The site is built with Next.js App Router and TypeScript.

## Run locally

Use Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site. Build and serve the production version with `npm run build` and `npm run start`.

## Pages

- `/` — Home
- `/about` — Group overview, mission, values and growth story
- `/founder-message` — Message from the Founder and Managing Director
- `/companies` — Seven group companies
- `/industries` — Operating industries and wider strategic sectors
- `/paboya-foundation` — Paboya Foundation
- `/news-insights` — News and updates
- `/careers` — Career information and application form
- `/contact` — Contact details and enquiry form

The original `.html` page URLs redirect to their matching Next.js routes. Contact and career forms prepare a message in the visitor's default email app; they do not submit data to a server.
