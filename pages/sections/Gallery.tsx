import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Device } from "../../hooks/useDevice";
import useInView from "../../hooks/useInView";
import styles from "../../styles/Home.module.css";
import { Header, Image } from "../components";

const pad: Record<Device, number> = {
  tablet: 10,
  desktop: 20,
  mobile: 2,
  unknown: 20,
};

export default function Gallery({ y, device }: { y: number; device: Device }) {
  const ref = useInView("gallery");

  return (
    <section ref={ref}>
      <Header text="Gallery" />

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 2, 900: 3 }}
        style={{ padding: `80px 0` }}
      >
        <Masonry gutter={"2px"}>
          <Image image={`4`} className={styles.pic} />
          <Image image={`9`} className={styles.pic} />
          <Image image={`12`} className={styles.pic} />
          <Image image={`7`} className={styles.pic} />
          <Image image={`10`} className={styles.pic} />
          <Image image={`11`} className={styles.pic} />
          <Image image={`13`} className={styles.pic} />
          <div />
          <Image image={`6`} className={styles.pic} />
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
}
