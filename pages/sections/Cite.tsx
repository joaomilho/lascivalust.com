import styles from "../../styles/Home.module.css";
import { useBoundingclientrectRef } from "rooks";
import { useRef } from "react";
import { text } from "../../fonts";

export default function Cite() {
  return (
    <section>
      <cite className={[styles.cite, text.className].join(" ")}>
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
          If you are a hardworking sub/slave willing to put serious effort to
          enjoy and endure our time together, I will train and polish you into
          perfect servitude. Are you ready to evolve?
        </p>
      </cite>
    </section>
  );
}
