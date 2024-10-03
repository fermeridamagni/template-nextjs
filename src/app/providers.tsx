"use client";

import React from "react";

export interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return <>{children}</>;
}
