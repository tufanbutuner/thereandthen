import Card from "@/components/Card";
import { theme } from "@/utils/themes";

import Link from "next/link";
import Script from "next/script";

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

      <Link href="services" className="bento-services">
        <Card
          text="Services"
          backgroundColor={theme.colors.pastel.paleblue}
          textColour={theme.colors.pastel.hotred}
          height="100%"
        />
      </Link>
      <Link href={"who-we-are"} className="bento-who">
        <Card
          text="Who we are"
          backgroundColor={theme.colors.pastel.babyblue}
          textColour={theme.colors.pastel.red}
          height="100%"
        />
      </Link>
      <Link href={"testimonials"} className="bento-testimonials">
        <Card
          text="Testimonials"
          backgroundColor={theme.colors.pastel.lightorange}
          textColour={theme.colors.pastel.beige}
          height="100%"
        />
      </Link>
      <Link href={"clients"} className="bento-clients">
        <Card
          text="Clients"
          backgroundColor={theme.colors.pastel.red}
          textColour={theme.colors.pastel.peach}
          height="100%"
        />
      </Link>
      <Link href={"contact-us"} className="bento-contact">
        <Card
          text="Contact Us"
          backgroundColor={theme.colors.pastel.hotpink}
          textColour={theme.colors.pastel.peach}
          height="100%"
        />
      </Link>
    </div>
  );
}
