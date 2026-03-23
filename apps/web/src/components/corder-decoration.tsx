import { cn } from "@mytho/ui/lib/utils";

type CornerDecorationProps = {
  className?: string;
};

export const CornerDecoration = ({ className }: CornerDecorationProps) => {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" className={cn("text-border/50", className)}>
      <path d="M0 0 L30 0 L30 5 L5 5 L5 30 L0 30 Z" fill="currentColor" />
      <path d="M10 10 L25 10 L25 12 L12 12 L12 25 L10 25 Z" fill="currentColor" opacity="0.5" />
    </svg>
  );
};

export const CornerDecorations = () => {
  return (
    <>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <p className="text-muted-foreground/60 text-center text-xs tracking-widest sm:text-sm md:text-base">
          Un duel de mensonges et de vérités...
        </p>
      </div>

      <CornerDecoration className="absolute top-4 left-4" />
      <CornerDecoration className="absolute top-4 right-4 -scale-x-100" />
      <CornerDecoration className="absolute bottom-4 left-4 -scale-y-100" />
      <CornerDecoration className="absolute right-4 bottom-4 -scale-100" />
    </>
  );
};
