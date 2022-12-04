import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

import { useWindowSize } from "rooks";
// TBD change with window scroll position
import { useWindowScroll } from "react-use";

import Main from "./sections/Main";
import Cite from "./sections/Cite";
import Pics from "./sections/Pics";
import CTA from "./sections/CTA";
import List from "./sections/List";
import Menu from "./sections/Menu";

function ResponsiveHome() {
  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
  const { y } = useWindowScroll();

  return (
    <>
      <Menu y={y} />

      <Main y={y} />

      <a id="about" />
      <Cite />

      <a id="gallery" />
      <Pics y={y} />

      <a id="protocol" />
      <List />

      <CTA />
    </>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lasciva Lust</title>
        <meta name="description" content="High Protocol Dominatrix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveHome />
    </div>
  );
}
