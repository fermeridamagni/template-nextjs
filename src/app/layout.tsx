import type { Metadata } from "next";

import Providers from "@/app/providers";
import Header from "@/components/partials/header";
import Footer from "@/components/partials/footer";

import { fontText } from "@/assets/fonts/config";
import "@/assets/styles/globals.css";

// Check the environment variables
import "@/config/env";

export const metadata: Metadata = {
  title: "",
  description: "",
  keywords: "",
  creator: "",
  authors: [],
  manifest: "/manifest.json",
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className="w-full h-full scroll-smooth">
      <body className={`${fontText.variable} font-text w-full h-full`}>
        <Providers>
          <Header />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
