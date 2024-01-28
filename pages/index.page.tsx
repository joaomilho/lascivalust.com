import styles from "../styles/Home.module.css";
import { useDevice } from "../hooks/useDevice";
import { useWindowScrollPosition } from "rooks";
import {
  Menu,
  About,
  Gallery,
  CTA,
  Footer,
  Sessions,
  Social,
  Locations,
  Tributes,
} from "./sections";
import PopUp from "./components/PopUp";
import { Layout } from "./Layout";
import NewMain from "./sections/NewMain";

export default function Index() {
  const device = useDevice();

  const { scrollY: y } = useWindowScrollPosition();
  return (
    <Layout>
      <PopUp />
      <Menu device={device} y={y} />
      <NewMain />

      <a id="about" className={styles.anchor} />
      <About />

      <CTA />

      <a id="sessions" className={styles.anchor} />
      <Sessions />

      <a id="locations" className={styles.anchor} />
      <Locations />

      <a id="gallery" className={styles.anchor} />
      <Gallery />

      <a id="tributes" className={styles.anchor} />
      <Tributes />

      <CTA />
      <a id="footer" className={styles.anchor} />
      <Footer />
    </Layout>
  );
}
