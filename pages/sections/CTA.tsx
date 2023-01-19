import styles from "../../styles/Home.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      Ready to start your training? <br />
      <a href="mailto:lascivalady@gmail.com" className={styles.applyButton}>
        Submit to Me
      </a>
    </section>
  );
}
