// components/ui/navButton.tsx

import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface NavButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const NavButton = React.forwardRef<HTMLButtonElement, NavButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "text-[16pt] text-background hover:text-primary font-avenir",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
NavButton.displayName = "NavButton";

export { NavButton };
