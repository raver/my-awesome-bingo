# 🎉 Soc Ops — Social Bingo

> **Break the ice. Make connections. Get BINGO!**

A fun, mobile-friendly Social Bingo game built for in-person mixers, team events, and icebreaker sessions. Players mingle to find colleagues who match the prompts on their board — first to get 5 in a row wins!

---

## ✨ Features

- 🃏 **Randomised boards** — every player gets a unique 5×5 grid
- 🆓 **Free Space** — centre square is always free to kickstart the fun
- 🏆 **Win detection** — rows, columns, and diagonals all count
- 📱 **Mobile-first** — optimised for phones at live events
- ⚡ **Instant setup** — no accounts, no login, just open and play

---

## 🚀 Getting Started

### Prerequisites

- [Node.js 22](https://nodejs.org/) or higher

### Run locally

```bash
npm install
npm run dev
```

### Build for production

```bash
npm run build
```

> Deploys automatically to **GitHub Pages** on every push to `main`.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Build | [Vite](https://vite.dev/) |
| Tests | [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) |

---

## 🎨 Customise

Want to tailor the game for your event? Edit the prompts in [`src/data/questions.ts`](src/data/questions.ts) — each string is a square on the bingo board.

<!-- You can remove this message when updating the readme as part of the workshop -->
👉 **[Follow the Lab Guide](.lab/GUIDE.md)** for step-by-step instructions on how to set up and customise the game.

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before opening a pull request.

---

## 📄 License

[MIT](LICENSE) © Harald Kirschner
