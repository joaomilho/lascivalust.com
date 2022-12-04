import FormButton from "./FormButton";
import styles from "../../styles/Home.module.css";
import { text } from "../../fonts";
import type { Device } from "../../hooks/useDevice";

const breakpoint: Record<Device, number> = {
  tablet: 1200,
  desktop: 1200,
  mobile: 240,
  unknown: 240,
};

export default function Menu({ y, device }: { y: number; device: Device }) {
  return (
    <nav
      className={styles.nav}
      style={y > breakpoint[device] ? { top: 0 } : {}}
    >
      <span className={styles.logo}>Lasciva Lust</span>
      <ul className={styles.menu}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#protocol">Protocol</a>
        </li>
        <li>
          <a
            href="https://x9i9iqnp2m1.typeform.com/to/GwlQTW03?typeform-source=lascivalust.com"
            className={styles.applyButtonMenu}
          >
            Submit
          </a>
        </li>
      </ul>
    </nav>
  );
}
