import { createFileRoute, Link } from "@tanstack/react-router";

import { buttonVariants } from "@/components/button";
import { CornerDecorations } from "@/components/corder-decoration";
import { PlayingCard, StackedCards } from "@/components/playing-card";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="font-display text-7xl font-bold tracking-wider uppercase md:text-8xl">Mytho</h1>
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
        <Link to="/room" className={buttonVariants({ size: "lg" })}>
          Jouer
        </Link>
        <Link to="/room" search={{ join: true }} className={buttonVariants({ variant: "outline", size: "lg" })}>
          Rejoindre
        </Link>
      </div>

      <CornerDecorations />
    </section>
  );
}
