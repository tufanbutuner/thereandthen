import Card from "@/components/Card";
import { theme } from "@/utils/themes";
import Image from "next/image";

import Link from "next/link";
import images from "../utils/images";

export default function Page() {
  return (
    <div className="container main">
      <div className="section-1">
        <Image src={images.logo} alt="Logo" width={200} />
        <p>Web and marketing solutions for small businesses.</p>
        <Link href="services">
          <Card
            text="Services"
            backgroundColor={theme.colors.pastel.paleblue}
            textColour={theme.colors.pastel.hotred}
            imagePath={images.money}
            height="100%"
          />
        </Link>
      </div>
      <div className="section-2">
        <Link href={"who-we-are"}>
          <Card
            text="Who we are"
            backgroundColor={theme.colors.pastel.babyblue}
            textColour={theme.colors.pastel.red}
            imagePath={images.hello}
          />
        </Link>
        <Link href={"testimonials"}>
          <Card
            text="Testimonials"
            backgroundColor={theme.colors.pastel.lightorange}
            textColour={theme.colors.pastel.beige}
            imagePath={images.seated}
          />
        </Link>
      </div>
      <div className="section-3">
        <Link href={"clients"}>
          <Card
            text="Clients"
            backgroundColor={theme.colors.pastel.palegreen}
            textColour={theme.colors.pastel.peach}
            imagePath={images.clients}
          />
        </Link>
        <Link href={"contact-us"}>
          <Card
            text="Contact Us"
            backgroundColor={theme.colors.pastel.hotpink}
            textColour={theme.colors.pastel.peach}
            imagePath={images.contact}
          />
        </Link>
      </div>
    </div>
  );
}
