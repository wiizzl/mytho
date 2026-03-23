import { createFileRoute, Link } from "@tanstack/react-router";

import { CornerDecorations } from "@/components/corder-decoration";
import { PlayingCard, StackedCards } from "@/components/playing-card";
import { Button } from "@mytho/ui/components/button";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="font-heading text-7xl font-bold tracking-wider uppercase md:text-8xl">Mytho</h1>
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
        <Button size="lg" render={<Link to="/room" />} nativeButton={false}>
          Jouer
        </Button>
        <Button variant="outline" render={<Link to="/room" search={{ join: true }} />} nativeButton={false}>
          Rejoindre
        </Button>
      </div>

      <CornerDecorations />
    </section>
  );
}
