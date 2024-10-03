import React from "react";

import { cn } from "@/utils/cn";

interface MainProps extends React.HTMLProps<HTMLDivElement> { }

export default function Main({ children, className, ...props }: MainProps) {
  return (
    <main className={cn("w-full h-full flex flex-1 z-0", className)} {...props}>
      {children}
    </main>
  );
}
