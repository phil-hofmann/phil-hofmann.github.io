// components/FlexContainer.tsx

import React from "react";
import { cn } from "@/lib/utils";

function FlexContainer({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center gap-4 md:flex-row md:justify-normal",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { FlexContainer };
