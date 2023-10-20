import Navbar from "@/components/Navbar";
import "./global.scss";

import { bricolage, tanNimbus } from "@/utils/fonts";
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
        className={`${tanNimbus.className} ${tanNimbus.variable} ${bricolage.variable}`}
      >
        <Navbar />
        {children}
        {/* <Footer /> */}
        <Analytics />
      </body>
    </html>
  );
}
