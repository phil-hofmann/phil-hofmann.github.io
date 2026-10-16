// components/ui/section.tsx

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("block w-full", {
  variants: {
    variant: {
      background: "bg-background",
      gray: "bg-gray-100",
    },
  },
  defaultVariants: {
    variant: "background",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {
  id?: string;
}

function Section({
  id,
  variant = "background",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <>
      <div
        id={id}
        className={cn(sectionVariants({ variant, className }))}
        {...props}
      >
        {children}
      </div>
    </>
  );
}

export { Section };
