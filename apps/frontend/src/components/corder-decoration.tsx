type CornerDecorationProps = {
  className?: string;
};

export const CornerDecoration = ({ className }: CornerDecorationProps) => {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" className={`text-border/50 ${className}`}>
      <path d="M0 0 L30 0 L30 5 L5 5 L5 30 L0 30 Z" fill="currentColor" />
      <path d="M10 10 L25 10 L25 12 L12 12 L12 25 L10 25 Z" fill="currentColor" opacity="0.5" />
    </svg>
  );
};
