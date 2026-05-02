import Navbar from "@/components/Navbar";
import "./global.scss";

import { caveat, dmMono, fraunces, inter } from "@/utils/fonts";
import { Analytics } from "@vercel/analytics/react";

type LayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: "There and Then",
  description: "Web and marketing solutions for small businesses",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} ${dmMono.variable} ${caveat.variable}`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
