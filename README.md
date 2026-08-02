# English Zero To Hero — Spoken English Learning Platform

A React + Vite EdTech platform designed for Hindi/Kannada medium students to improve spoken English through structured learning.

The platform combines a 70-day English roadmap, grammar rules with Hinglish explanations, vocabulary building, interview preparation, and speaking practice in one place.

## Live Demo

🚀 Deployed on Vercel:

[https://your-vercel-url.vercel.app](https://englishzerohero.vercel.app/)

---

## Features

### 📚 70-Day English Roadmap
- Complete beginner-to-advanced learning journey
- Day-wise grammar progression
- Structured topics for consistent practice

### 📖 Grammar Explorer
- 115+ grammar concepts
- English rules with Hinglish explanations
- Examples with Hindi meanings
- Searchable grammar topics

### 🔎 Global Search
- Search across:
  - Grammar rules
  - Learning days
  - Vocabulary
  - Interview preparation content

### 🗣️ Speaking Practice
- Self introduction templates
- Daily speaking topics
- Communication improvement practice

### 💼 Interview Preparation
- Common interview questions
- Introduction templates
- Professional communication practice

### 📈 Learning Progress
- Day completion tracking
- Progress dashboard
- Theme preference storage

---

## What's real vs sample data

| Section | Source |
|---|---|
| Roadmap (Day 1-70) | Real — derived from zero_to_hero_grammar.json |
| Grammar Explorer (115 rules) | Real — merged from available grammar JSON data |
| Vocabulary | Sample placeholder — planned for expansion |
| Interview Prep | Sample placeholder — planned for expansion |
| Speaking Topics | Sample placeholder — planned for expansion |

Sample sections are clearly marked inside the application and can be replaced with real structured JSON data.

---

## Tech Stack

Frontend:
- React
- Vite
- JavaScript
- CSS

Tools:
- React Router
- LocalStorage
- Vercel Deployment
- Git & GitHub

---

## Project Structure

```
src/
  components/
    Navbar
    Footer

  pages/
    Dashboard
    Roadmap
    DayDetail
    Grammar
    Vocabulary
    Interview
    Speaking
    SearchResults
    NotFound

  data/
    grammar.json
    days.json
    vocabulary.json
    interview.json
    extras.json

  utils/
    search.js
    storage.js
```

---

## Local Development

Clone the repository:

```bash
git clone <your-github-repo-url>
```

Move into project:

```bash
cd spoken-english-platform
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Application runs at:

```
http://localhost:5173
```

---

## Deploy to Vercel

1. Push project to GitHub

```bash
git add .
git commit -m "Your commit message"
git push
```

2. Open Vercel

3. Import GitHub repository

4. Framework:
```
Vite
```

5. Build settings:

```
Build Command: npm run build
Output Directory: dist
```

6. Deploy

`vercel.json` is included for SPA client-side routing support.

---

## Future Improvements

- Firebase authentication
- Cloud based progress synchronization
- Grammar quizzes
- Vocabulary flashcards
- Daily English challenges
- AI speaking feedback
- User streak system
- Leaderboard
- Real vocabulary and interview datasets

---

## Learning Goal

This project aims to make English learning more accessible for students who struggle with traditional English resources by providing explanations in a familiar Hinglish style.

---

## Author

Built with ❤️ for students improving their English communication skills.
