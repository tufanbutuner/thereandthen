import RedirectToHome from "@/components/Redirect";
import Script from "next/script";

export default function Testimonials() {
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
          <p>Testimonials</p>
          <RedirectToHome />
        </div>
      </div>
    </>
  );
}
