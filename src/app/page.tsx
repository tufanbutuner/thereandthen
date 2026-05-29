import HomeCorkboard from "@/components/HomeCorkboard";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Drag the notes, see what we do — web dev, branding, and marketing for small businesses in London.",
  openGraph: {
    title: `${SITE_NAME} — Web & marketing for small businesses`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
};

export default function Page() {
  return <HomeCorkboard />;
}
