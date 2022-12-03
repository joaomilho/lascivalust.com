import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Parallax } from "react-scroll-parallax";
import styles from "../../styles/Home.module.css";
const images = [...Array(9).keys()];

export function Pics() {
  return (
    <section>
      <Parallax speed={100}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
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
      </Parallax>
    </section>
  );
}
