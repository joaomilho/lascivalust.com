import styles from "../../styles/Home.module.css";
import { Parallax } from "react-scroll-parallax";
import type { Device } from "../../hooks/useDevice";

export default function Main({ y, device }: { y: number; device: Device }) {
  if (device === "mobile")
    return (
      <main className={styles.main}>
        <div className={styles.bg} />

        <div className={styles.text}>
          <h1 className={styles.title}>Lasciva Lust</h1>
        </div>
      </main>
    );

  return (
    <main className={styles.main}>
      <div className={styles.bg} />

      <div className={styles.text}>
        <Parallax speed={-7.5}>
          <h1
            className={styles.title}
            style={{
              color: `rgb(${255 - y / 10},${255 - y / 4},${255 - y / 4})`,
            }}
          >
            Lasciva Lust
          </h1>
        </Parallax>
      </div>
    </main>
  );
}
