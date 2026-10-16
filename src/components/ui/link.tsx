// components/ui/link.tsx

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Components
import NextLink from "next/link";

const linkVariants = cva(
  "inline-block w-auto py-1.5 my-1 text-left text-lg decoration-[1px] underline-offset-4 transition-all duration-150",
  {
    variants: {
      variant: {
        default: "text-foreground hover:underline",
        background: "text-background hover:underline",
        underline: "text-foreground underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
}

function Link({
  variant,
  href,
  target,
  rel,
  className,
  children,
  ...props
}: LinkProps) {
  return (
    <NextLink
      className={cn(linkVariants({ variant }), className)}
      href={href}
      target={target}
      rel={target === "_blank" ? `${rel || ""} noopener noreferrer`.trim() : rel}
      {...props}
    >
      {children}
    </NextLink>
  );
}

export { Link, linkVariants };
