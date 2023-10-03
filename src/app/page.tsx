"use client";

import Card from "@/components/Card";
import { theme } from "@/utils/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";

import images from "../utils/images";

export default function Page() {
  const router = useRouter();

  const handleCardClick = (pageName: string) => {
    router.push(`/${pageName}`);
  };

  return (
    <div className="container main">
      <div className="section-1">
        <Image src={images.logo} alt="Logo" width={200} />
        <p>Web and marketing solutions for small businesses.</p>
        <Card
          text="Services"
          backgroundColor={theme.colors.pastel.paleblue}
          textColour={theme.colors.pastel.hotred}
          imagePath={images.money}
          onClick={() => handleCardClick("services")}
        />
      </div>
      <div className="section-2">
        <Card
          text="Who we are"
          backgroundColor={theme.colors.pastel.babyblue}
          textColour={theme.colors.pastel.red}
          imagePath={images.hello}
          onClick={() => handleCardClick("who-we-are")}
        />
        <Card
          text="Testimonials"
          backgroundColor={theme.colors.pastel.lightorange}
          textColour={theme.colors.pastel.beige}
          imagePath={images.seated}
          onClick={() => handleCardClick("testimonials")}
        />
      </div>
      <div className="section-3">
        <Card
          text="Clients"
          backgroundColor={theme.colors.pastel.palegreen}
          textColour={theme.colors.pastel.peach}
          imagePath={images.clients}
          onClick={() => handleCardClick("clients")}
        />
        <Card
          text="FAQ"
          backgroundColor={theme.colors.pastel.orange}
          textColour={theme.colors.pastel.beige}
          imagePath={images.confused}
          onClick={() => handleCardClick("faq")}
        />
      </div>
      <div className="section-4">
        <Card
          text="Impact"
          backgroundColor={theme.colors.pastel.peach}
          textColour={theme.colors.pastel.babyblue}
          imagePath={images.walking}
          onClick={() => handleCardClick("impact")}
        />
        <Card
          text="Contact Us"
          backgroundColor={theme.colors.pastel.hotpink}
          textColour={theme.colors.pastel.peach}
          imagePath={images.contact}
          onClick={() => handleCardClick("contact-us")}
        />
      </div>
    </div>
  );
}
