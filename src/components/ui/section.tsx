import React from "react";

import { cn } from "@/utils/cn";

interface SectionProps extends React.HTMLProps<HTMLDivElement> { }

export default function Section({ children, className, ...props }: SectionProps) {
  return (
    <section className={cn("w-full h-full flex z-0", className)} {...props}>
      {children}
    </section>
  );
}
