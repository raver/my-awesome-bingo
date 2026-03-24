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