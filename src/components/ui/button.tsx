// components/ui/button.tsx

import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-block text-center transition duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default:
          "bg-primary border-solid border-1.5 border-primary hover:bg-accent hover:border-accent",
        ghost:
          "bg-transparent border-solid border-1.5 border-primary text-primary hover:border-accent hover:text-accent",
      },
      size: {
        default:
          "px-8 py-3 w-full rounded-full md:w-auto md:px-10 md:py-3 text-lg font-medium lowercase tracking-widest",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
