import styles from "../styles/Home.module.css";
import { useDevice } from "../hooks/useDevice";
import { useWindowScrollPosition } from "rooks";
import {
  Menu,
  Main,
  About,
  Gallery,
  CTA,
  Footer,
  Preferences,
} from "./sections";
import PopUp from "./components/PopUp";
import { Layout } from "./Layout";
import Vids from "./sections/Vids";

export default function Index() {
  const device = useDevice();

  const { scrollY: y } = useWindowScrollPosition();
  return (
    <Layout>
      <PopUp />
      <Menu device={device} y={y} />

      <Main y={y} />

      <a id="about" className={styles.anchor} />
      <About />

      <a id="gallery" className={styles.anchor} />
      <Gallery y={y} device={device} />

      <a id="preferences" className={styles.anchor} />
      <Preferences />

      <Vids />

      <CTA />

      <a id="footer" className={styles.anchor} />
      <Footer />
    </Layout>
  );
}
