// components/Container.tsx

import React from "react";
import { cn } from "@/lib/utils";

function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(`w-full h-full max-w-5xl mx-auto py-5 px-2`, className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Container };
