import FormButton from "./FormButton";
import styles from "../../styles/Home.module.css";
import { text } from "../../fonts";

export default function Menu({ y }: { y: number }) {
  return (
    <nav className={styles.nav} style={y > 1200 ? { top: 0 } : {}}>
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
          <button
            data-tf-popup="GwlQTW03"
            data-tf-iframe-props="title=Application"
            data-tf-medium="snippet"
            className={styles.applyButtonMenu}
          >
            Submit to Me
          </button>
        </li>
      </ul>
    </nav>
  );
}
