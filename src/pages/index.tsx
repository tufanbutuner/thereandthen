import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <p>THERE AND THEN</p>
          <p>BY TUFAN</p>
        </div>
      </main>
    </>
  );
}
