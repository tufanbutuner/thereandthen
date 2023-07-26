import styles from "@/styles/Home.module.css";
import { DM_Sans, Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Logo from "../assets/logo.svg";

const inter = Inter({ subsets: ["latin"], weight: ["100", "300", "500"] });
const dmsans = DM_Sans({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>There and Then</title>
        <meta
          name="description"
          content="Development Studio brought to you by Tufan"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={`${styles.main} ${dmsans.className}`}>
        <div>
          <Image src={Logo} alt="Logo" width={200} />
          <p>Web solutions for small businesses.</p>
        </div>
        <div className={`${styles.footer}`}>
          <div>
            <span>tel: </span>
            <p>coming soon</p>
          </div>
          <div>
            <span>e: </span>
            <p>tufanbutuner@gmail.com</p>
          </div>
          <div>
            <span>based: </span>
            <p>London Town, United Kingdom</p>
          </div>
        </div>
      </main>
    </>
  );
}
