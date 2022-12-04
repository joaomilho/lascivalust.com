import styles from "../../styles/Home.module.css";
import { text } from "../../fonts";

export const preferences = [
  "High Protocol",
  "Goddess Worship",
  "Chastity/Key holding",
  "Latex",
  "Feminization (sissy/slut training)",
  "Bondage and restrains",
  "Mummification",
  "Golden Showers",
  "Flogging",
  "Impact Play (spanking, paddle, flogger, strap, cane)",
  "Tattoo Art",
  "Breath Play",
  "Pet Play",
  "Objectification (human furniture)",
  "Slave training",
  "Cuckolding",
  "Tease & Denial",
  "FinDom",
  "Electro-Play",
];

export default function Preferences() {
  return (
    <section className={[styles.protocol, text.className].join(" ")}>
      <hr />
      <b>I rejoice over:</b>
      <br />
      <br />
      <ul className={styles.list}>
        {preferences.map((pref) => {
          return <li key={pref}>{pref} </li>;
        })}
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
