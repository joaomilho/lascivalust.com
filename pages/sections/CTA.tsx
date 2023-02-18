import styles from "../../styles/Home.module.css";
import { mailto } from "../config";

export default function CTA() {
  return (
    <section className={styles.cta}>
      Ready to start your training? <br />
      <a href={mailto} className={styles.applyButton}>
        Submit to Me
      </a>
    </section>
  );
}
