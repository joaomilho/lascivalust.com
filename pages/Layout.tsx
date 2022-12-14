import Head from "next/head";
import { NextSeo } from "next-seo";

import styles from "../styles/Home.module.css";
import { preferences } from "./sections/Preferences";
import React, { ReactComponentElement, ReactNode } from "react";

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

export function Layout({ children }: { children: ReactNode }) {
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
      </Head>
      {children}
    </div>
  );
}
