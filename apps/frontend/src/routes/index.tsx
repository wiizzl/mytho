import { createFileRoute, Link } from "@tanstack/react-router";

import { buttonVariants } from "@/components/button";
import { CornerDecoration } from "@/components/corder-decoration";
import { PlayingCard, StackedCards } from "@/components/playing-card";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="font-display text-foreground text-7xl font-bold tracking-wider uppercase md:text-8xl">Mytho</h1>
        <p className="text-muted-foreground text-lg tracking-widest uppercase md:text-xl">Le jeu du menteur</p>
      </div>

      <div className="my-16">
        <StackedCards>
          {Array.from({ length: 4 }).map((_, index) => (
            <PlayingCard key={index} random />
          ))}
        </StackedCards>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <Link to="/" className={buttonVariants({ size: "lg" })}>
          Jouer
        </Link>
        <Link to="/" className={buttonVariants({ variant: "outline", size: "lg" })}>
          Rejoindre
        </Link>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <p className="text-muted-foreground/60 tracking-widest">Un duel de mensonges et de vérités</p>
      </div>

      <CornerDecoration className="absolute top-4 left-4" />
      <CornerDecoration className="absolute top-4 right-4 -scale-x-100" />
      <CornerDecoration className="absolute bottom-4 left-4 -scale-y-100" />
      <CornerDecoration className="absolute right-4 bottom-4 -scale-100" />
    </section>
  );
}
