import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Six quick questions about your project — we'll reply with sketches, questions, and an honest yes, no, or maybe.",
};

export default function GetAQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
