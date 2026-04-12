import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const buttonVariants = cva(
  "group/button font-display focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-lg font-semibold tracking-widest whitespace-nowrap uppercase transition-all duration-300 outline-none select-none focus-visible:ring-3 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary/10 border-primary text-primary hover:text-primary-foreground [a]:hover:bg-primary hover:shadow-primary/50 border-2 hover:shadow-[0_0_30px]",
        outline:
          "border-border hover:border-accent bg-card/50 hover:bg-accent/10 hover:text-accent aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 gap-2 px-10 py-3 has-data-[icon=inline-end]:pr-7 has-data-[icon=inline-start]:pl-7",
        xs: "h-10 gap-1.5 rounded-[min(var(--radius-md),14px)] px-7 py-2 text-sm in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5 [&_svg:not([class*='size-'])]:size-4",
        sm: "h-11 gap-1.5 rounded-[min(var(--radius-md),16px)] px-9 py-2.5 text-base in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5 [&_svg:not([class*='size-'])]:size-4.5",
        lg: "h-14 gap-2 px-12 py-4 has-data-[icon=inline-end]:pr-9 has-data-[icon=inline-start]:pl-9",
        icon: "size-10",
        "icon-xs":
          "size-10 rounded-[min(var(--radius-md),14px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-4",
        "icon-sm": "size-11 rounded-[min(var(--radius-md),16px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export const Button = ({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) => {
  return <ButtonPrimitive data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
};
