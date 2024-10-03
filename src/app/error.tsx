"use client";

import Main from "@/components/ui/main";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <Main className="justify-center items-center">
      <h1>Error</h1>
    </Main>
  );
}
