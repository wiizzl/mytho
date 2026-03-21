# Mytho

A digital take on Liar’s Deck, a well-known bluffing card game where players must decide when to tell the truth, when to lie, and when to call out opponents.

## Requirements

- [Bun](https://bun.sh) installed

## Installation

```sh
bun install
bun run dev
```

## Environment variables

Create env files from examples:

```sh
cp apps/backend/.env.example apps/backend/.env
cp apps/frontend/.env.example apps/frontend/.env
```

Both apps validate env values with Zod at startup.

## License

[MIT](./LICENSE) 🤟
