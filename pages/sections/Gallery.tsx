import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "../../styles/Home.module.css";

// @ts-ignore
const images = [...Array(12).keys()];

export default function Gallery({ y }: { y: number }) {
  return (
    <section className={styles.gallery}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
        style={{ padding: 20 }}
      >
        <Masonry gutter={"20px"}>
          {images.map((i) => {
            return (
              <Image
                alt="Lasciva Lust"
                key={i}
                src={`./imgs/${i}.jpg`}
                className={styles.pic}
              />
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
}
