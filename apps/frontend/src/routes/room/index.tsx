import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/card";
import { CornerDecorations } from "@/components/corder-decoration";

export const Route = createFileRoute("/room/")({
  component: RouteComponent,
  validateSearch: z.object({
    join: z.boolean().optional(),
  }),
});

function RouteComponent() {
  const { join } = Route.useSearch();

  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>{join ? "Rejoindre une partie" : "Créer une partie"}</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex-col gap-2">hey</CardFooter>
      </Card>

      <CornerDecorations />
    </section>
  );
}
