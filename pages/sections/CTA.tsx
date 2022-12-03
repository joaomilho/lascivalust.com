import FormButton from "./FormButton";
import styles from "../../styles/Home.module.css";
import { text } from "../../fonts";
export default function CTA() {
  return (
    <section className={[styles.cta, text.className].join(" ")}>
      Ready to start your training? <FormButton />
    </section>
  );
}
