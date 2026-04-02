# Brewtendo Website - Simple Guide

## What's What (Simple Version)

Think of this like a house with rooms. Each folder is a room with a specific job.

```
new-site/frontend/
├── src/                      ← THE KITCHEN (where we cook the website)
│   ├── app/                  ← The front door + main frame
│   │   ├── layout.tsx        ← The walls around everything
│   │   ├── page.tsx          ← What shows first when you enter
│   │   └── globals.css       ← Paint colors for everything
│   │
│   ├── components/           ← THE ROOMS (each page of the site)
│   │   ├── HomePage.tsx      ← Living room (first thing you see)
│   │   ├── GuidePage.tsx     ← Guide room
│   │   ├── GuideStep1Page.tsx ← Step 1 of guide
│   │   ├── GuideStep2Page.tsx ← Step 2 of guide
│   │   ├── BadgeArcadePage.tsx ← Badge Arcade info
│   │   ├── OtherPage.tsx     ← Staff list room
│   │   ├── ProgressPage.tsx  ← Progress tracker room
│   │   ├── Footer.tsx        ← The floor (always at bottom)
│   │   └── PageRenderer.tsx  ← The door picker (chooses which room)
│   │
│   ├── contexts/             ← THE PHONE LINE (shares info between rooms)
│   │   └── ContentContext.tsx ← "Hey, switch to Guide room!"
│   │
│   └── data/                 ← THE NOTEBOOK (static info)
│       └── staff.ts          ← List of staff members
│
├── public/                   ← THE GARAGE (stuff that goes to visitor as-is)
│   ├── images/               ← Photos and icons
│   ├── css/                  ← Style sheets (old way)
│   ├── .well-known/          ← Security info for nerds
│   └── .nojekyll             ← Tells GitHub "don't mess with this"
│
├── next.config.js            ← INSTRUCTION MANUAL for Next.js
└── package.json              ← SHOPPING LIST (what we need installed)
```

## How It Actually Works (No BS)

1. **You open the site** → `layout.tsx` builds the frame, `PageRenderer` picks the first room
2. **You click "Install Guide"** → `ContentContext` sends message: "show Guide room"
3. **Room changes** → React swaps the component, no page reload
4. **CSS changes too** → `swapStyleSheet()` loads different styles

## The 3 Files That Matter

| File | What It Does | Think Of It Like... |
|------|--------------|---------------------|
| `src/contexts/ContentContext.tsx` | Keeps track of which page we're on | A notepad that says "we're on Home" |
| `src/components/PageRenderer.tsx` | Decides which component to show | A security guard checking the notepad |
| `src/app/layout.tsx` | Wraps everything, adds headers | The building itself |

## Quick Build Guide

```bash
# 1. Go to the folder
cd new-site/frontend

# 2. Install stuff (one time only)
npm install

# 3. Build the site
npm run build

# 4. The site appears in `out/` folder
#    Upload that to GitHub Pages
```

## File Flow (How Data Moves)

```
User clicks "Guide" button
    ↓
HomePage.tsx calls changeContent('guide')
    ↓
ContentContext.tsx updates currentPage to 'guide'
    ↓
PageRenderer.tsx sees currentPage changed
    ↓
PageRenderer returns <GuidePage /> instead of <HomePage />
    ↓
User sees Guide page (no refresh!)
```

## Where Things Live

| If you want to change... | Go to... |
|---------------------------|----------|
| What the home page shows | `src/components/HomePage.tsx` |
| The guide steps | `src/components/GuidePage.tsx`, `GuideStep1Page.tsx`, `GuideStep2Page.tsx` |
| Staff list | `src/data/staff.ts` |
| The bottom footer | `src/components/Footer.tsx` |
| Switching between pages | `src/contexts/ContentContext.tsx` |
| Main colors/styles | `src/app/globals.css` |

## What Was Changed From Old Site

| Old Way (HTML/JS) | New Way (React) |
|-------------------|-----------------|
| `content_01.js` with HTML strings | `HomePage.tsx` with JSX |
| `playAudio('decide')` on every click | Removed (no sound anymore) |
| `changeContent('guide')` + `load_2()` function | `changeContent('guide')` + React component swap |
| Separate HTML files for each page | Single file, components swap |

## Important: No Backend!

This is 100% frontend. No server, no database, no API calls. Everything happens in the user's browser.

---

Built by itsglowny. Questions? Discord.
