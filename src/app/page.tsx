import Card from "@/components/Card";
import { theme } from "@/utils/themes";

import Link from "next/link";
import Script from "next/script";
import images from "../utils/images";

export default function Page() {
  return (
    <div className="container main">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-W2099BHSNL" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-W2099BHSNL');
        `}
      </Script>

      <div className="section-1">
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
            backgroundColor={theme.colors.pastel.red}
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
