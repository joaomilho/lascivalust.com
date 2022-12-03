import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Parallax } from "react-scroll-parallax";
import styles from "../../styles/Home.module.css";
// import { useBoundingclientrectRef } from "rooks";

// @ts-ignore
const images = [...Array(9).keys()];

export default function Pics({ y }: { y: number }) {
  // const [ref, client] = useBoundingclientrectRef();

  return (
    <section>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        style={{ padding: 20 }}
      >
        <Masonry gutter={"20px"}>
          {images.map((i) => {
            return (
              <Parallax className={styles.picWrapper} speed={i * 5}>
                <img
                  key={i}
                  src={`./imgs/${i}.jpg`}
                  className={styles.pic}
                  style={
                    {
                      // opacity: client?.top > 0 ? 200 / client?.top : 1,
                    }
                  }
                />
              </Parallax>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
}
