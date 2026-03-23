import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

import { AppShrowd } from "@/components/app-shrowd";
import { Button } from "@mytho/ui/components/button";

const RootLayout = () => (
  <AppShrowd>
    <Outlet />
  </AppShrowd>
);

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => (
    <AppShrowd className="flex min-h-screen flex-col items-center justify-center space-y-4 text-center">
      <h1 className="font-heading text-7xl font-bold tracking-wider md:text-8xl">404</h1>
      <Button variant="link" className="text-xl" render={<Link to="/" />} nativeButton={false}>
        Retour à l'accueil
      </Button>
    </AppShrowd>
  ),
});
