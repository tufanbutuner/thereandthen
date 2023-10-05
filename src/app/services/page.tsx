"use client";

import RedirectToHome from "@/components/Redirect";
import images from "@/utils/images";
import { theme } from "@/utils/themes";
import Image from "next/image";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");

    fadeInElements.forEach((element) => {
      element.classList.add("active");
    });
  }, []);

  return (
    <div className="page-container">
      <div className="page-header">
        <p style={{ color: theme.colors.pastel.hotred }}>Services</p>
        <RedirectToHome />
      </div>
      <div className="who-we-are-container fade-in">
        <div className="services-text fade-in">
          <h3>Web development that wows</h3>
          <p>
            We’ve got you covered on all your website needs, from a website
            revamp to maintenance, to building a website from the ground up,
            we’re excited to show you our creativity and what we can do for your
            business.
          </p>
          <div className="services-list fade-in">
            <p>
              We aren’t just about creating generic websites but we create
              experiences unique to each client and their needs:
            </p>
            <ul>
              <li>Hosting and Domain Setup</li>
              <li>Front End and Back End Development</li>
              <li>WordPress & Shopify</li>
              <li>Custom CMS Integration</li>
              <li>E-Commerce Websites</li>
              <li>Blog / Portfolio / Single Page Websites</li>
            </ul>
          </div>
        </div>
        <Image
          priority={true}
          src={images.clients}
          alt="Clients picture"
          width={400}
        />
      </div>
      <div className="divider fade-in">
        <Image src={images.wavyline} alt="" />
      </div>
      <div className="who-we-are-container fade-in">
        <Image
          priority={true}
          src={images.money}
          alt="Clients picture"
          width={400}
        />
        <div className="services-text fade-in">
          <h3>Crush the search results</h3>
          <p>
            Want to climb the Google ranks? Is your Google Ads account stuck in
            the mud? We’ll help you climb the search ladder and make your
            website shine bright in the search results. By optimising your web
            content and tweaking your keywords, we’ll make sure to keep up with
            the ever changing world of search and SEO so you don’t need to.
          </p>
        </div>
      </div>
    </div>
  );
}
