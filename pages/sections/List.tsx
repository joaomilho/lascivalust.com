import FormButton from "./FormButton";
import styles from "../../styles/Home.module.css";
import { text } from "../../fonts";
export default function CTA() {
  return (
    <section className={[styles.cta, text.className].join(" ")}>
      <hr />
      <b>I rejoice over:</b>
      <br />
      <br />
      <ul className={styles.list}>
        <li>High Protocol </li>
        <li>Goddess Worship </li>
        <li>Chastity/Key holding </li>
        <li>Latex</li>
        <li>Feminization (sissy/slut training)</li>
        <li>Bondage and restrains</li>
        <li>Mummification</li>
        <li>Golden Showers</li>
        <li>Flogging</li>
        <li>Impact Play (spanking, paddle, flogger, strap, cane)</li>
        <li>Tattoo Art</li>
        <li>Breath Play</li>
        <li>Pet Play</li>
        <li>Objectification (human furniture)</li>
        <li>Slave training</li>
        <li>Cuckolding</li>
        <li>Tease & Denial</li>
        <li>FinDom</li>
        <li>Electro-Play</li>
      </ul>
      <hr />
      <br />
      <b>My Hard limits:</b>
      <br />
      <br />
      <ul className={styles.listNope}>
        <li>Brown Showers </li>
        <li>Blood Play</li>
        <li>Cultural/Religious humiliation </li>
        <li>Emotional Labor </li>
        <li>little/ABDL</li>
        <li>Heavy Medical Play</li>
        <li>Male gratification</li>
        <li>Degradation</li>
      </ul>
    </section>
  );
}
