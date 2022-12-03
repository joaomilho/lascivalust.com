import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Parallax } from "react-scroll-parallax";
import styles from "../../styles/Home.module.css";
// import { useBoundingclientrectRef } from "rooks";

// @ts-ignore
const images = [...Array(12).keys()];

export default function Pics({ y }: { y: number }) {
  // const [ref, client] = useBoundingclientrectRef();

  return (
    <section>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
        style={{ padding: 20 }}
      >
        <Masonry gutter={"20px"}>
          {images.map((i) => {
            return (
              <img key={i} src={`./imgs/${i}.jpg`} className={styles.pic} />
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
}
