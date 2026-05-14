# Lolliop Employee Hub

Anonymous employee workplace and wellbeing support portal built from the Lollipop Employee Portal specification.

## Core routes

- `/` home hub
- `/workplace` workplace scenarios
- `/[scenario]` guided scenario pages
- `/[scenario]/article` article pages
- `/wellbeing` wellbeing hub
- `/check-in` mindfulness check-in
- `/cbt` CBT resource browser
- `/chat` streaming chat UI
- `/api/draft-message` draft variants endpoint
- `/api/chat` plaintext streaming endpoint

## Privacy posture

- No accounts
- No analytics
- No localStorage/sessionStorage for typed content
- Typed content stays in React state and POST bodies only
- API routes do not log request bodies

## Environment

Create `.env.local` when ready:

```bash
ANTHROPIC_API_KEY=sk-ant-...
```

The app has safe fallback behavior if the key is missing.

## Run

```bash
npm install
npm run dev
npm run build
```
