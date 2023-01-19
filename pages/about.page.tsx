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
import { text } from "../fonts";

export default function Index() {
  const device = useDevice();

  const { scrollY: y } = useWindowScrollPosition();
  return (
    <Layout>
      <PopUp />
      <Menu device={device} y={y} show />

      {/* <div style={{ padding: 80 }}></div> */}
      {/* <h1 className={text.className} style={{ padding: `80px 40px 40px 40px` }}>
        About
      </h1> */}
      <About />

      <Footer />
    </Layout>
  );
}
