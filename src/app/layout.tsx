import Footer from "@/components/Footer";
import "./global.scss";

import TAN_NIMBUS from "next/font/local";
const myFont = TAN_NIMBUS({ src: "../assets/fonts/TAN-NIMBUS.ttf" });

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
      <body className={`${myFont.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
