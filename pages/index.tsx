import Head from "next/head";
import Script from "next/script";

import styles from "../styles/Home.module.css";
import { useDevice } from "../hooks/useDevice";

import { useWindowSize, useWindowScrollPosition } from "rooks";

import Main from "./sections/Main";
import About from "./sections/About";
import Gallery from "./sections/Gallery";
import CTA from "./sections/CTA";
import Preferences from "./sections/Preferences";
import Menu from "./sections/Menu";

import PopUp from "./components/PopUp";

function App() {
  const device = useDevice();

  const { scrollY: y } = useWindowScrollPosition();
  return (
    <>
      <PopUp />
      <Menu device={device} y={y} />

      <Main device={device} y={y} />

      <a id="about" className={styles.anchor} />
      <About />

      <a id="gallery" className={styles.anchor} />
      <Gallery y={y} device={device} />

      <a id="preferences" className={styles.anchor} />
      <Preferences />

      <CTA />

      {/* <img src="./imgs/full-bw.jpg" style={{ width: "100%" }} /> */}
    </>
  );
}

import { preferences } from "./sections/Preferences";
import { NextSeo } from "next-seo";

const title = "Lasciva Lust";
const description = "Seductrix ProDomme";
const keywords = [
  "bdsm",
  "dominatrix",
  "lasciva",
  "lust",
  "slut",
  "berlin",
  "mistress",
  "lady",
  "domination",
  "bondage",
  ...preferences,
];

export default function Home() {
  return (
    <div className={styles.container}>
      <NextSeo
        title={title}
        description={description}
        canonical="https://lascivalust.com"
        openGraph={{
          url: "https://lascivalust.com",
          title,
          description,
          images: [
            {
              url: "https://lascivalust.com/imgs/main.jpg",
              width: 2320,
              height: 3088,
              alt: "Lasciva Lust",
              type: "image/jpeg",
            },
          ],
          siteName: "LascivaLust.com",
        }}
        twitter={{
          handle: "@LascivaLust",
          site: "@LascivaLust",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        <link rel="icon" href="/favicon.ico" />
        <Script id="mcjs">
          {`
    !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/51f10df1955a211120bfeab13/8884199433175b354e2bb626d.js");
    `}
        </Script>
      </Head>
      <App />
    </div>
  );
}
