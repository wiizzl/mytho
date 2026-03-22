import { cn } from "@mytho/ui/lib/utils";

type AppShrowdProps = {
  children: React.ReactNode;
  className?: string;
};

export const AppShrowd = ({ children, className }: AppShrowdProps) => (
  <main className={cn("min-h-screen antialiased", className)}>{children}</main>
);
