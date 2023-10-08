import RedirectToHome from "@/components/Redirect";
import Link from "next/link";
import Script from "next/script";

const clientList = [
  {
    name: "Candy Crown",
    url: "https://thecandycrown.com/",
  },
  {
    name: "La Planchette",
    url: "https://www.laplanchette.uk",
  },
  {
    name: "Viveza Futbol",
    url: "https://www.vivezafutbol.com",
  },
];

export default function Clients() {
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
          <p>Clients</p>
          <RedirectToHome />
        </div>
        <div className="clients-container">
          <h1>Meet our clients</h1>
          {clientList.map((client, index) => (
            <Link href={client.url} target="_blank" key={index}>
              <p>{client.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
