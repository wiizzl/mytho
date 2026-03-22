import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentPropsWithoutRef } from "react";

const buttonVariants = cva(
  "group font-display relative inline-flex items-center justify-center overflow-hidden rounded-sm font-medium tracking-widest uppercase transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2",
        outline:
          "border-border bg-card/50 text-foreground hover:border-accent hover:bg-accent/10 hover:text-accent border",
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
