import Head from "next/head";

import styles from "../styles/Home.module.css";
import { useDevice } from "../hooks/useDevice";

import { useWindowSize, useWindowScrollPosition } from "rooks";

import Main from "./sections/Main";
import Cite from "./sections/Cite";
import Pics from "./sections/Pics";
import CTA from "./sections/CTA";
import Preferences from "./sections/Preferences";
import Menu from "./sections/Menu";

function App() {
  const device = useDevice();

  const { scrollY: y } = useWindowScrollPosition();
  return (
    <>
      <Menu device={device} y={y} />

      <Main device={device} y={y} />

      <a id="about" className={styles.anchor} />
      <Cite />

      <a id="gallery" className={styles.anchor} />
      <Pics y={y} />

      <a id="preferences" className={styles.anchor} />
      <Preferences />

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
      <App />;
    </div>
  );
}
