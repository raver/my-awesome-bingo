# Soc Ops

Social Bingo game for in-person mixers. Find people who match the questions and get 5 in a row!

<!-- You can remove this message when updating the readme as part of the workshop -->
👉 **[Follow the Lab Guide](.lab/GUIDE.md)** for instructions on how to set up and customize the game.


## Prerequisites

- [Node.js 22](https://nodejs.org/) or higher

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Deploys automatically to GitHub Pages on push to `main`.

## Devcontainer: SSH remote auto-switch

When the devcontainer starts it configures the HTTP(S) proxy and will attempt to switch the repository `origin` remote to the SSH URL so container-based git operations use your forwarded SSH agent. The switch only runs when:

- the workspace is a git repository, and
- an `origin` remote already exists.

If you prefer to keep the HTTPS remote, either remove the `origin` remote inside the container before rebuild, or run the following inside the container to set your preferred remote manually:

```bash
git remote set-url origin git@github.com:raver/my-awesome-bingo.git
```

To apply devcontainer changes: Command Palette → "Dev Containers: Rebuild and Reopen in Container".
