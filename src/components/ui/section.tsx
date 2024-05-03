import { cn } from "@/utils/utils";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function Section({ children, id, className }: SectionProps) {
  return (
    <section id={id} className={cn("w-full h-auto flex", className)}>
      {children}
    </section>
  );
}
