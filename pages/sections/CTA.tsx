import styles from "../../styles/Home.module.css";
import { text } from "../../fonts";
export default function CTA() {
  return (
    <section className={[styles.cta, text.className].join(" ")}>
      Ready to start your training?{" "}
      <a
        href="https://x9i9iqnp2m1.typeform.com/to/GwlQTW03?typeform-source=lascivalust.com"
        className={styles.applyButton}
      >
        Submit to Me
      </a>
    </section>
  );
}
