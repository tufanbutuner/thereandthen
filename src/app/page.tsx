"use client";

import Card from "@/components/Card";
import { theme } from "@/utils/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Inside your Card component or click handler

import clients from "../assets/images/clients.svg";
import confused from "../assets/images/confused.svg";
import contact from "../assets/images/contact.svg";
import hello from "../assets/images/hello.svg";
import money from "../assets/images/money.svg";
import seated from "../assets/images/seated.svg";
import walking from "../assets/images/walking.svg";

import Logo from "../assets/logo.svg";

export default function Page() {
  const router = useRouter();

  const handleCardClick = (pageName: string) => {
    router.push(`/${pageName}`);
  };

  return (
    <div>
      <div className="container main">
        <div className="section-1">
          <Image src={Logo} alt="Logo" width={200} />
          <p>Web and marketing solutions for small businesses.</p>
          <Card
            text="Services"
            backgroundColor={theme.colors.pastel.paleblue}
            textColour={theme.colors.pastel.hotred}
            imagePath={money}
            onClick={() => handleCardClick("services")}
          />
        </div>
        <div className="section-2">
          <Card
            text="Who we are"
            backgroundColor={theme.colors.pastel.babyblue}
            textColour={theme.colors.pastel.red}
            imagePath={hello}
            onClick={() => handleCardClick("who-we-are")}
          />
          <Card
            text="Testimonials"
            backgroundColor={theme.colors.pastel.lightorange}
            textColour={theme.colors.pastel.beige}
            imagePath={seated}
            onClick={() => handleCardClick("testimonials")}
          />
        </div>
        <div className="section-3">
          <Card
            text="Clients"
            backgroundColor={theme.colors.pastel.palegreen}
            textColour={theme.colors.pastel.peach}
            imagePath={clients}
            onClick={() => handleCardClick("Clients")}
          />
          <Card
            text="FAQ"
            backgroundColor={theme.colors.pastel.orange}
            textColour={theme.colors.pastel.beige}
            imagePath={confused}
            onClick={() => handleCardClick("FAQ")}
          />
        </div>
        <div className="section-4">
          <Card
            text="Impact"
            backgroundColor={theme.colors.pastel.peach}
            textColour={theme.colors.pastel.babyblue}
            imagePath={walking}
            onClick={() => handleCardClick("Impact")}
          />
          <Card
            text="Contact Us"
            backgroundColor={theme.colors.pastel.hotpink}
            textColour={theme.colors.pastel.peach}
            imagePath={contact}
            onClick={() => handleCardClick("Contact Us")}
          />
        </div>
      </div>
    </div>
  );
}

{
  /* <Head>
        <title>There and Then</title>
        <meta
          name="description"
          content="Web solutions and marketing for small businesses"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */
}
