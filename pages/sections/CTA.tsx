import styles from "../../styles/Home.module.css";
import { text } from "../../fonts";
export default function CTA() {
  return (
    <section className={[styles.cta, text.className].join(" ")}>
      Ready to start your training?{" "}
      <a
        href="https://h6o5rhe132.execute-api.eu-central-1.amazonaws.com/applications"
        className={styles.applyButton}
      >
        Submit to Me
      </a>
    </section>
  );
}
