# NITKKR v/s NITJ Free Fire Championship — Season 1
### Official Tournament Website

This repository contains the official, production-ready website for the **NITKKR v/s NITJ Free Fire Championship — Season 1**, an inter-institute collegiate esports competition between students of:
- **National Institute of Technology Kurukshetra (NIT Kurukshetra / NITKKR)**
- **Dr. B. R. Ambedkar National Institute of Technology Jalandhar (NIT Jalandhar / NITJ)**

---

## Tech Stack

- **React 18** with **TypeScript**
- **Vite 6** (Blazing fast HMR and optimized production bundling)
- **Tailwind CSS** (Custom dark esports theme, chamfered clip-paths, glowing accents, cyber grid)
- **React Router v6** (Client-side routing across all 9 tournament pages)
- **Lucide Icons** & custom SVG collegiate crests

---

## 1. How to Run the Project Locally

### Prerequisites
- Node.js (v18 or newer recommended)
- npm (v9 or newer)

### Installation & Development
```bash
# 1. Clone or navigate to the project directory
cd FF_tournment

# 2. Install dependencies
npm install

# 3. Start the local development server
npm run dev
```

The application will be available at `http://localhost:5173/`.

### Production Build
```bash
# Compile TypeScript and generate production bundle in /dist
npm run build

# Preview the production build locally
npm run preview
```

---

## 2. Central Configuration File (`src/config/tournamentConfig.ts`)

The website is engineered with a **zero-code configuration layer** located at:
📁 [`src/config/tournamentConfig.ts`](file:///Users/mohitchhirang/Desktop/Projects/FF_tournment/src/config/tournamentConfig.ts)

Student organisers do **not** need to touch React components or CSS when updating tournament information, dates, status, or links.

---

## 3. How to Add the Official Google Form URL

Open [`src/config/tournamentConfig.ts`](file:///Users/mohitchhirang/Desktop/Projects/FF_tournment/src/config/tournamentConfig.ts).

At the top of the file, replace:
```ts
export const REGISTRATION_FORM_URL = "[GOOGLE FORM URL TO BE ADDED]";
```
with your actual Google Form URL:
```ts
export const REGISTRATION_FORM_URL = "https://forms.gle/your-official-form-link";
```

Once updated, all "REGISTER NOW" and "REGISTER VIA GOOGLE FORM" buttons across the website will instantly point directly to your Google Form.

### Updating Registration Status
To open or close registrations, update `registrationStatus` in `tournamentConfig`:
```ts
registrationStatus: 'open', // Options: 'open' | 'closed' | 'live' | 'completed'
```
The status pill in the navbar and hero section will update automatically.

---

## 4. How to Add Official College Logos

1. Place your college logo image files in the `public/colleges/` directory:
   - `public/colleges/nitkkr.png` (NIT Kurukshetra logo)
   - `public/colleges/nitj.png` (NIT Jalandhar logo)

2. Open [`src/config/tournamentConfig.ts`](file:///Users/mohitchhirang/Desktop/Projects/FF_tournment/src/config/tournamentConfig.ts) and set the `logoUrl` path:
```ts
colleges: {
  nitkkr: {
    // ...
    logoUrl: '/colleges/nitkkr.png',
  },
  nitj: {
    // ...
    logoUrl: '/colleges/nitj.png',
  }
}
```
*Note: If no image file is provided, the website automatically falls back to custom high-energy collegiate esports crests.*

---

## 5. How to Add Sponsors & Partners

Open [`src/config/tournamentConfig.ts`](file:///Users/mohitchhirang/Desktop/Projects/FF_tournment/src/config/tournamentConfig.ts) and find `sponsorsData`:

Add your confirmed sponsors:
```ts
export const sponsorsData: Sponsor[] = [
  {
    id: "sp-01",
    name: "Brand Name",
    tier: "Title", // 'Title' | 'Powered By' | 'Associate' | 'Community'
    logoUrl: "/sponsors/brand-logo.png",
    websiteUrl: "https://brandwebsite.com"
  }
];
```

If `sponsorsData` is left empty (`[]`), the website displays the partnership callout ("Interested in partnering with the championship? Become a Sponsor") pointing to the Contact page.

---

## 6. How to Update Leaderboard Data

Open [`src/config/tournamentConfig.ts`](file:///Users/mohitchhirang/Desktop/Projects/FF_tournment/src/config/tournamentConfig.ts) and locate `leaderboardData`:

When match results conclude, add the row entries:
```ts
export const leaderboardData: LeaderboardRow[] = [
  {
    rank: 1,
    teamName: "KKR NightHawks",
    college: "NIT Kurukshetra",
    collegeId: "NITKKR",
    matches: 3,
    kills: 24,
    placementPoints: 36,
    killPoints: 24,
    totalPoints: 60
  },
  {
    rank: 2,
    teamName: "Jalandhar Apex",
    college: "NIT Jalandhar",
    collegeId: "NITJ",
    matches: 3,
    kills: 19,
    placementPoints: 30,
    killPoints: 19,
    totalPoints: 49
  }
];
```

*Note: While `leaderboardData` is empty, the website shows the authentic empty state: **"Leaderboard will appear once tournament matches begin."** Organisers can test the table layout anytime using the **Preview Live Table Layout** toggle on `/leaderboard`.*

---

## 7. How to Update Participating Teams & Schedule

### Teams (`teamsData`)
In [`src/config/tournamentConfig.ts`](file:///Users/mohitchhirang/Desktop/Projects/FF_tournment/src/config/tournamentConfig.ts):
```ts
export const teamsData: Team[] = [
  {
    id: "team-01",
    name: "Kurukshetra Vipers",
    college: "NIT Kurukshetra",
    collegeId: "NITKKR",
    status: "Confirmed", // 'Registered' | 'Confirmed' | 'Qualified' | 'Eliminated'
  }
];
```
> **PRIVACY MANDATE:** Never add personal phone numbers, student roll numbers, or personal emails to `teamsData`.

### Match Schedule (`scheduleData`)
In [`src/config/tournamentConfig.ts`](file:///Users/mohitchhirang/Desktop/Projects/FF_tournment/src/config/tournamentConfig.ts):
```ts
export const scheduleData: Match[] = [
  {
    id: "match-01",
    matchNumber: 1,
    title: "Qualifier Group A - Match 1",
    date: "12 Oct 2026",
    time: "6:00 PM IST",
    map: "Bermuda",
    lobbyStatus: "Scheduled",
    status: "Upcoming",
    participatingTeamsCount: "12 Squads",
    roomDetailsNotice: "Room credentials shared via captain group 15 mins prior"
  }
];
```
> **SECURITY MANDATE:** Never publish custom room IDs or passwords publicly on the website.

---

## 8. How to Deploy the Website

### Option A: Vercel (Recommended)
1. Push this repository to GitHub or GitLab.
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. Vercel automatically detects Vite.
4. Framework Preset: `Vite`
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

For single-page application (SPA) routing on Vercel, a `vercel.json` file can be added:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Option B: Netlify
1. Connect repository on [netlify.com](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add a `public/_redirects` file with: `/* /index.html 200`
5. Click **Deploy**.

### Option C: GitHub Pages
1. In `vite.config.ts`, ensure `base: '/'` (or your repository subpath).
2. Run `npm run build` and deploy the `dist/` directory via GitHub Actions.

---

## 9. Website Structure & Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | **Home** | Championship hero, NITKKR vs NITJ rivalry, key stats, 3-step registration flow, CTA banner, sponsors callout |
| `/register` | **Team Registration** | Captain registration instructions, required checklist, Google Form launcher |
| `/tournament` | **Tournament Info** | Inter-NIT overview, format specifications (TBA), team structure, visual 7-step tournament flow |
| `/rules` | **Rules** | 12 structured rule categories, fair-play guidelines, and direct link to Terms |
| `/terms` | **Terms & Conditions** | Formal 10 clauses, cancellation/refund policy, and Garena non-affiliation disclaimer |
| `/leaderboard` | **Leaderboard** | Live standings table, points formula, highlights, authentic empty state + organizer preview |
| `/teams` | **Teams** | Participating squads directory, college filters (NITKKR / NITJ), privacy compliance |
| `/schedule` | **Schedule** | Upcoming matches, map rotations, lobby timings, room credential privacy notices |
| `/contact` | **Contact** | Joint student organizing committee, official contact channels, inquiry transmission form |

---

## 10. Legal & Disclaimer Notice

This tournament is an independent collegiate student-organised competition between students of National Institute of Technology Kurukshetra and Dr. B. R. Ambedkar National Institute of Technology Jalandhar.

This tournament is **not an official Garena-sponsored tournament** unless explicitly stated otherwise. Free Fire and Free Fire MAX are registered trademarks of Garena International.
