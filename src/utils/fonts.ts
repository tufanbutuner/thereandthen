import { Bricolage_Grotesque } from "next/font/google";
import TAN_NIMBUS from "next/font/local";

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export const tanNimbus = TAN_NIMBUS({ src: "../assets/fonts/TAN-NIMBUS.ttf" });
