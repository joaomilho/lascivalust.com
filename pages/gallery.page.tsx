import styles from "../styles/Home.module.css";
import { useDevice } from "../hooks/useDevice";
import { useWindowScrollPosition } from "rooks";
import { Menu, Gallery, Footer } from "./sections";
import PopUp from "./components/PopUp";
import { Layout } from "./Layout";

export default function Index() {
  const device = useDevice();

  const { scrollY: y } = useWindowScrollPosition();
  return (
    <Layout>
      <PopUp />
      <Menu device={device} y={y} show />

      <h1 style={{ padding: `80px 40px 40px 40px` }}>Gallery</h1>
      <Gallery />

      <Footer />
    </Layout>
  );
}
