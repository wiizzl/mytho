import { cn } from "@/lib/utils";

type AppShrowdProps = {
  children: React.ReactNode;
  className?: string;
};

export const AppShrowd = ({ children, className }: AppShrowdProps) => (
  <main className={cn("min-h-screen font-serif antialiased", className)}>{children}</main>
);
