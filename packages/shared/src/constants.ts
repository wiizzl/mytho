export const GAME_RULES = {
  RANKS: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"] as const,
  SUITS: [
    { name: "hearts", symbol: "♥" },
    { name: "diamonds", symbol: "♦" },
    { name: "spades", symbol: "♠" },
    { name: "clubs", symbol: "♣" },
  ] as const,
  MIN_PLAYERS: 2,
  MAX_PLAYERS: 6,
};
