# Project Guidelines

## Mandatory Development Checklist
- [ ] Run `npm run lint`
- [ ] Run `npm run build`
- [ ] Run `npm run test`

## Build and Test
- Install: `npm install`
- Dev server: `npm run dev` (Vite on port `5173`)
- Build + typecheck: `npm run build` (`tsc -b && vite build`)
- Lint: `npm run lint`
- Tests: `npm run test` (Vitest)

## Architecture
- App entry: `src/main.tsx` renders `src/App.tsx`.
- UI flow is screen-based: `StartScreen` -> `GameScreen` -> `BingoModal`.
- Game state lives in `src/hooks/useBingoGame.ts`.
- Core bingo logic is in `src/utils/bingoLogic.ts`; keep this logic pure and tested.
- Shared domain types live in `src/types/index.ts`.

## Conventions
- Use TypeScript with functional React components and explicit prop interfaces.
- Keep side effects (storage, modal timing, transitions) in hooks/components, not in utility logic.
- Add or update tests when changing rules in `src/utils/bingoLogic.ts` or game flow in `src/hooks/useBingoGame.ts`.
- Tailwind uses v4 CSS-first setup via `@import "tailwindcss"` and `@theme` in `src/index.css` (no `tailwind.config.js`).

## Pitfalls
- Preserve Vite base-path behavior for Pages deploys in `vite.config.ts` (`VITE_REPO_NAME`).
- Keep localStorage schema compatibility in `useBingoGame` (`STORAGE_VERSION`, validation guards).
- `.lab/` is ignored by Copilot context (`.copilotignore`); do not rely on it for runtime behavior.

## Linked Docs
- Project overview and run basics: `README.md`
- Contribution and workflow expectations: `CONTRIBUTING.md`
- Tailwind v4 specifics: `.github/instructions/tailwind-4.instructions.md`
- Workshop flow and exercises: `.lab/GUIDE.md`
## Design Guide

**Theme:** Cozy Coffee Shop — warm, inviting, café-menu aesthetic.

### Color Palette (`src/index.css` `@theme`)
| Token | Hex | Usage |
|---|---|---|
| `espresso` | `#2c1810` | Primary body text, dark headings |
| `coffee` | `#5c3317` | Buttons, section headings, accents |
| `caramel` | `#a0522d` | Hover/active states, secondary accents |
| `latte` | `#c4956a` | Secondary text, borders, muted UI |
| `cream` | `#fdf6e3` | Main page background |
| `foam` | `#fff8f0` | Cards, panels, header bar |
| `marked` | `#f5ddb3` | Checked bingo square fill (parchment) |
| `marked-border` | `#c4956a` | Checked bingo square border |
| `bingo` | `#d4a017` | Winning line highlight (warm gold) |

### Typography
- **Headings:** `font-heading` → Playfair Display (600/700), loaded via Google Fonts in `index.html`
- **Body:** `font-body` → Lato (400/600), loaded via Google Fonts in `index.html`
- Use `font-heading` on titles, card section headers, and the BingoModal "BINGO!" label.
- Use `tracking-widest uppercase text-xs` for subtitles/labels (café-menu style).

### Component Patterns
- Cards/panels: `bg-foam rounded-2xl border border-latte/30 shadow-[0_4px_24px_rgba(92,51,23,0.08)]`
- Primary buttons: `bg-coffee text-cream rounded-xl shadow-[0_4px_16px_rgba(92,51,23,0.25)] active:bg-caramel`
- Board container: `bg-foam/60 rounded-2xl border border-latte/20 shadow-[0_4px_32px_rgba(92,51,23,0.12)]`
- Free space square: inverted dark — `bg-coffee text-cream font-heading`
- Page background: `bg-cream` or radial gradient `bg-[radial-gradient(ellipse_at_top,_#fff8f0_0%,_#fdf6e3_100%)]`
