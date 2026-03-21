import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentPropsWithoutRef } from "react";

const buttonVariants = cva(
  "group relative font-medium uppercase inline-flex items-center justify-center overflow-hidden rounded-sm font-display tracking-widest transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground",
        outline:
          "border border-border bg-card/50 text-foreground hover:border-accent hover:bg-accent/10 hover:text-accent",
      },
      size: {
        sm: "px-6 py-2 text-base",
        md: "px-10 py-3 text-lg",
        lg: "px-12 py-4 text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

type ButtonProps = ComponentPropsWithoutRef<"button"> & VariantProps<typeof buttonVariants>;

function Button({ className, variant, size, children, ...props }: ButtonProps) {
  return (
    <button
      data-slot="button"
      className={[buttonVariants({ variant, size }), className].filter(Boolean).join(" ")}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}

export { Button, buttonVariants };
