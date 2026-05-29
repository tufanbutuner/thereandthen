import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  CONTACT_EMAIL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import { caveat, dmMono, fraunces, inter } from "@/utils/fonts";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./global.scss";

type LayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} ${dmMono.variable} ${caveat.variable}`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer email={CONTACT_EMAIL} />
        <Analytics />
      </body>
    </html>
  );
}
