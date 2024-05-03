import Providers from "@/app/providers";

import { fontText } from "@/resources/fonts/fonts.config";
import "@/resources/styles/globals.css";

export const metadata = {
  title: "",
  description: "",
  keywords: "",
  auhor: "",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${fontText.variable} font-text w-full h-full bg-white text-black`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
