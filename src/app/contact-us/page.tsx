"use client";

import RedirectToHome from "@/components/Redirect";
import images from "@/utils/images";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";
import { BiLogoInstagram } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    username: "therenthenco",
    icon: <BiLogoInstagram size={40} />,
    link: "https://www.instagram.com/therenthenco/",
  },
  {
    username: "therenthenco",
    icon: <FaXTwitter size={36} />,
    link: "https://twitter.com/therenthenco",
  },
];

export default function Contact() {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");

    fadeInElements.forEach((element) => {
      element.classList.add("active");
    });
  }, []);

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-W2099BHSNL" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-W2099BHSNL');
        `}
      </Script>
      <div className="page-container">
        <div className="page-header">
          <p>Contact Us</p>
          <RedirectToHome />
        </div>
        <div className="contact-container fade-in">
          <div className="contact-text fade-in">
            <h3>Here&apos;s where you can find us</h3>
            {socials.map((social, index) => (
              <Link href={social.link} target="_blank" key={index}>
                <div className="contact-icons-container fade-in">
                  {social.icon}
                  <p>{social.username}</p>
                </div>
              </Link>
            ))}
          </div>
          <Image
            priority={true}
            src={images.contact}
            alt="Clients picture"
            width={400}
          />
        </div>
      </div>
    </>
  );
}
