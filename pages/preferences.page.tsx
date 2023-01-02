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

      <h1 className={text.className} style={{ padding: `80px 40px 40px 40px` }}>
        Preferences
      </h1>
      <Preferences />

      <Footer />
    </Layout>
  );
}
