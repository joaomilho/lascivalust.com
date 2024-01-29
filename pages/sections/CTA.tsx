import styles from "../../styles/Home.module.css";
import { mailto } from "../config";
import Social from "./Social";

export default function CTA() {
  return (
    <section>
      <div className={styles.cta}>
        Ready to start your training? <br />
        <a href={mailto} className={styles.applyButton}>
          Submit to Me
        </a>
      </div>
      <Social />
    </section>
  );
}
