import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Device } from "../../hooks/useDevice";
import useInView from "../../hooks/useInView";
import styles from "../../styles/Home.module.css";

const pad: Record<Device, number> = {
  tablet: 10,
  desktop: 20,
  mobile: 2,
  unknown: 20,
};

export default function Gallery({ y, device }: { y: number; device: Device }) {
  const ref = useInView("gallery");

  return (
    <section ref={ref} className={styles.gallery}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        style={{ padding: 20 }}
      >
        <Masonry gutter={"20px"}>
          <img
            alt="Lasciva Lust"
            src={`./imgs/bg-dec-10-grain.jpg`}
            className={styles.pic}
          />

          <img alt="Lasciva Lust" src={`./imgs/6.jpg`} className={styles.pic} />
          <img alt="Lasciva Lust" src={`./imgs/4.jpg`} className={styles.pic} />
          <img alt="Lasciva Lust" src={`./imgs/3.jpg`} className={styles.pic} />
          <img alt="Lasciva Lust" src={`./imgs/1.jpg`} className={styles.pic} />
          <img alt="Lasciva Lust" src={`./imgs/2.jpg`} className={styles.pic} />
          <img alt="Lasciva Lust" src={`./imgs/0.jpg`} className={styles.pic} />
          <img alt="Lasciva Lust" src={`./imgs/5.jpg`} className={styles.pic} />
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
}
