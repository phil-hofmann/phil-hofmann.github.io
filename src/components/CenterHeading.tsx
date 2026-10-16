import React from "react";
import { cn } from "@/lib/utils";

function CenterHeading({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <h1
      className={cn(
        "block w-full my-3 text-center after:block after:h-2 after:w-8 after:border-solid after:border-b-2 after:border-primary after:mx-auto",
        className
      )}
      style={{ fontFamily: "Avenir Next" }}
      {...props}
    >
      {children}
    </h1>
  );
}

export { CenterHeading };
