import styles from "./SimpleHeader.module.css";
import { Parallax } from "react-scroll-parallax";
import { useDevice, Device } from "../../hooks/useDevice";

export default function SimpleHeader({ text }: { text: string }) {
  const device = useDevice();

  return (
    <Parallax
      easing={"easeInOut"}
      speed={device === "desktop" ? -10 : -4}
      className={styles.simpleHeader}
    >
      <h1>
        {text}
        <span className={styles.satan}>𖤐</span>
      </h1>
    </Parallax>
  );
}
