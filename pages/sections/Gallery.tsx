import Image from "next/image";
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
    <section ref={ref}>
      {/* <div className={styles.gallery}> */}
      {/* <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
        style={{ padding: 20 }}
      > */}
      {/* <Masonry gutter={"20px"}> */}

      <table cellSpacing="0" cellPadding="0" style={{ border: "none" }}>
        <tbody>
          <tr>
            <td colSpan={3}>
              <img
                alt="Lasciva Lust"
                src={`./imgs/bg-dec-10-grain.jpg`}
                className={styles.pic}
              />
            </td>
          </tr>
          <tr>
            <td style={{ paddingRight: pad[device] }}>
              <img
                alt="Lasciva Lust"
                src={`./imgs/0.jpg`}
                className={styles.pic}
              />
            </td>
            <td style={{ padding: pad[device] }}>
              <img
                alt="Lasciva Lust"
                src={`./imgs/1.jpg`}
                className={styles.pic}
              />
            </td>
            <td style={{ paddingLeft: pad[device] }}>
              <img
                alt="Lasciva Lust"
                src={`./imgs/2.jpg`}
                className={styles.pic}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
