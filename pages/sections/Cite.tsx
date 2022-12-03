import styles from "../../styles/Home.module.css";
import { useBoundingclientrectRef } from "rooks";
import { useRef } from "react";
import { EB_Garamond } from "@next/font/google";
const g = EB_Garamond();

export default function Cite() {
  return (
    <section>
      <cite className={[styles.cite, g.className].join(" ")}>
        <p>I am Mistress Lasciva. That’s how you shall refer to Me.</p>
        <p>I’m a High Protocol Dominatrix.</p>
        <p>
          Recently graduated at The Dominatrix Academy under mentoring of the
          Great Mistress Malissia, I specialized in Domination through Seduction
          and structural training. To apply into submission and servitude, and
          enter My very exclusive world and be worthy of My time and attention,
          you must elevate yourself to My standards of elegance and
          sophistication.
        </p>
        <p>
          I rejoice specially over: Goddess Worship, Chastity devices,
          Feminization (sissy/slut training), Bondage (Mummification), Golden
          Showers, Flogging (Spanking, whipping), Breath Play, Pet Play,
          objectification and more.
        </p>
        <p>
          If you prove that you’re a hardworking sub/slave willing to put
          serious effort to enjoy and endure our time together, I will train and
          polish you into perfect servitude. Are you ready to evolve?
        </p>
        <p className={styles.flourish}>ef</p>
      </cite>
    </section>
  );
}
