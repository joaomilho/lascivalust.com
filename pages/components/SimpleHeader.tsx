import styles from "./SimpleHeader.module.css";

import { useDevice, Device } from "../../hooks/useDevice";

export default function SimpleHeader({ text }: { text: string }) {
  const device = useDevice();

  return <h1 className={styles.simpleHeader}>{text}</h1>;
}
