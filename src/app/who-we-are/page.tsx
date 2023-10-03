"use client";

import RedirectToHome from "@/components/Redirect";
import { theme } from "@/utils/themes";
import Image from "next/image";
import { useEffect } from "react";
import hello from "../../../public/hello.svg";

export default function WhoWeAre() {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");

    fadeInElements.forEach((element) => {
      element.classList.add("active");
    });
  }, []);

  return (
    <div className="page-container">
      <div className="page-header">
        <p style={{ color: theme.colors.pastel.red }}>Who we are</p>
        <RedirectToHome />
      </div>
      <div className="who-we-are-container fade-in">
        <div className="who-we-are-text fade-in">
          <p>Who says size matters? Good things can come in small packages.</p>
          <p>
            We’re a small London based start up focusing on providing web and
            marketing solutions for small businesses, to help you bring your
            ideas to life.
          </p>
          <p>
            At There and Then we aim to make your journey as simple and
            comfortable as possible so whilst we’re off working away on your
            needs you can kick back and relax knowing we’ve got you covered.
          </p>
          <p>
            Interested in what we can do for you? Have a look at the services we
            can provide for you and get in touch.
          </p>
        </div>
        <Image priority={true} src={hello} alt="Hello picture" width={400} />
      </div>
    </div>
  );
}
