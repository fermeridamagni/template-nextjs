import { cn } from "@/utils/utils";

interface MainProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function Main({ children, id, className }: MainProps) {
  return (
    <main id={id} className={cn("w-full h-full animate-fade flex", className)}>
      {children}
    </main>
  );
}
