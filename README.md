# English Zero To Hero — Spoken English Learning Platform

React + Vite EdTech platform for Hindi/Kannada medium students: 70-day grammar
roadmap, grammar explorer, vocabulary, interview prep, and speaking practice.

## What's real vs sample data

| Section | Source |
|---|---|
| Roadmap (Day 1-70) | Real — derived from zero_to_hero_grammar.json |
| Grammar Explorer (115 rules) | Real — merged from both uploaded JSON files |
| Vocabulary | Sample placeholder — no vocabulary data was provided |
| Interview Prep | Sample placeholder — no interview data was provided |
| Self-Intro Templates / Speaking Topics | Sample placeholder |

Sample sections are visibly badged "Sample Preview" in the UI. Send real
transcript data in the same JSON shape (see src/data/vocabulary.json,
interview.json, extras.json) to replace them.

## Project structure

```
src/
  components/   Navbar, Footer
  pages/        Dashboard, Roadmap, DayDetail, Grammar, Vocabulary,
                 Interview, Speaking, SearchResults, NotFound
  data/         grammar.json, days.json (real) + vocabulary.json,
                 interview.json, extras.json (sample)
  utils/        search.js (global search), storage.js (progress/theme)
```

## Local development

```bash
npm install
npm run dev
```

## Deploy to Vercel

```bash
git init
git add .
git commit -m "Initial commit: English Zero To Hero platform"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

Then on vercel.com:
1. Import the GitHub repo
2. Framework preset: Vite (auto-detected)
3. Build command: npm run build, Output directory: dist
4. Deploy

vercel.json is already included for SPA client-side routing.

## Next build (future-ready)

- Auth + per-user progress sync (currently localStorage only)
- Quiz system + flashcards per grammar topic
- Real vocabulary/interview JSON once source data is provided
- Leaderboard for streaks
