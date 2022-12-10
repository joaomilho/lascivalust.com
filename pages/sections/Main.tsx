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
          <h1 className={styles.title}>Lasciva Lust</h1>
        </Parallax>
      </div>
    </main>
  );

  // return (
  //   <main className={styles.main}>
  //     <div className={styles.bg} />
  //     <div className={styles.text}>
  //       <Parallax speed={-15}>
  //         <h2 className={styles.job}>High Protocol Dominatrix</h2>
  //       </Parallax>

  //       <Parallax speed={-35.1} scale={[1.235, 1.235]}>
  //         <h1 className={styles.title}>Lasciva Lust</h1>
  //       </Parallax>
  //     </div>
  //   </main>
  // );
}
