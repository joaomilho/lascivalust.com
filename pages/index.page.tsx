import styles from "../styles/Home.module.css";
import { useDevice } from "../hooks/useDevice";
import { useWindowScrollPosition } from "rooks";
import { Menu, About, Gallery, CTA, Footer, Sessions } from "./sections";
import PopUp from "./components/PopUp";
import { Layout } from "./Layout";
import Vids from "./sections/Vids";
import NewMain from "./sections/NewMain";
// import Submenu from "./sections/Submenu";

export default function Index() {
  const device = useDevice();

  const { scrollY: y } = useWindowScrollPosition();
  return (
    <Layout>
      <PopUp />
      <Menu device={device} y={y} />
      <NewMain />
      {/* <Main y={y} /> */}
      <a id="about" className={styles.anchor} />
      <About />

      <a id="sessions" className={styles.anchor} />
      <Sessions />

      <a id="gallery" className={styles.anchor} />
      <Gallery y={y} device={device} />

      <CTA />
      <a id="footer" className={styles.anchor} />
      <Footer />
    </Layout>
  );
}
