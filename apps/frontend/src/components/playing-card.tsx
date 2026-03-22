import { GAME_RULES } from "@mytho/shared";
import { Children, type ReactElement } from "react";

type PlayingCardProps =
  | {
      rank: (typeof GAME_RULES.RANKS)[number];
      suit: (typeof GAME_RULES.SUITS)[number]["name"];
      hidden?: boolean;
      random?: false;
    }
  | {
      random: true;
      rank?: never;
      suit?: never;
      hidden?: boolean;
    };

const suitSymbols = Object.fromEntries(GAME_RULES.SUITS.map(({ name, symbol }) => [name, symbol])) as Record<
  (typeof GAME_RULES.SUITS)[number]["name"],
  string
>;

const suitColors: Record<(typeof GAME_RULES.SUITS)[number]["name"], string> = {
  hearts: "text-destructive",
  spades: "text-foreground",
  diamonds: "text-destructive",
  clubs: "text-foreground",
};

export const PlayingCard = ({ rank, suit, hidden = false, random = false }: PlayingCardProps) => {
  const displayRank = random ? GAME_RULES.RANKS[Math.floor(Math.random() * GAME_RULES.RANKS.length)] : rank!;
  const displaySuit = random ? GAME_RULES.SUITS[Math.floor(Math.random() * GAME_RULES.SUITS.length)].name : suit!;

  const symbol = hidden ? "M" : suitSymbols[displaySuit];
  const colorClass = hidden ? "text-foreground" : suitColors[displaySuit];
  const symbolClasses = hidden ? ["text-3xl"] : ["text-sm", "text-3xl", "text-sm rotate-180"];

  return (
    <div
      className={`bg-card flex h-48 w-30 flex-col items-center justify-center rounded-lg border-2 select-none ${colorClass}`}
    >
      {!hidden && <span className="text-2xl font-semibold">{displayRank}</span>}

      <div className="font-display flex flex-col items-center space-y-4">
        {symbolClasses.map((cls) => (
          <span key={cls} className={`${cls} ${hidden ? "font-bold" : "font-normal"}`}>
            {symbol}
          </span>
        ))}
      </div>

      {!hidden && <span className="rotate-180 text-2xl font-semibold">{displayRank}</span>}
    </div>
  );
};

type PlayingCardElement = ReactElement<PlayingCardProps, typeof PlayingCard>;
type StackedCardsProps = {
  children: PlayingCardElement | PlayingCardElement[];
  spacing?: number;
  verticalSpacing?: number;
};

export const StackedCards = ({ children, spacing = 14, verticalSpacing = 2 }: StackedCardsProps) => {
  const cards = Children.toArray(children) as PlayingCardElement[];

  if (cards.length === 0) {
    return null;
  }

  const cardWidth = 120;
  const containerWidth = cardWidth + Math.max(0, cards.length - 1) * spacing;

  return (
    <div className="relative h-56" style={{ width: `${containerWidth}px` }}>
      {cards.map((card, index) => {
        const offsetX = index * spacing;
        const offsetY = (cards.length - index - 1) * verticalSpacing;
        const rotation = -14 + index * 7;

        return (
          <div
            key={card.key ?? `card-${index}`}
            className="absolute top-0 left-0 origin-bottom-left opacity-96"
            style={{
              zIndex: index + 1,
              transform: `translate(${offsetX}px, ${offsetY}px) rotate(${rotation}deg)`,
            }}
          >
            {card}
          </div>
        );
      })}
    </div>
  );
};
