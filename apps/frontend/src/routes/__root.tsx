import { createRootRoute, Outlet } from "@tanstack/react-router";

const RootLayout = () => (
  <main className="font-serif antialiased">
    <Outlet />
  </main>
);

export const Route = createRootRoute({ component: RootLayout });
