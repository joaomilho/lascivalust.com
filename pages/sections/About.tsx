import styles from "../../styles/Home.module.css";
import { text } from "../../fonts";
import useInView from "../../hooks/useInView";

export default function About() {
  const ref = useInView("about");

  return (
    <section ref={ref}>
      <cite
        className={[styles.cite, text.className].join(" ")}
        style={{ paddingBottom: 80 }}
      >
        <p>
          Mistress Lasciva has been a BDSM practitioner for the last 15 years.
          She’s the Author of The Lascivious Cookbook, where Her pleasure for
          creating sweet and delicious recipes is wisely combined with a few of
          Her own personal and most lustful stories.
        </p>
        <p>
          Recently graduated from Mistress Malissia’s Dominatrix Academy,
          Mistress Lasciva found Her true passion in perfecting the Art of
          Domination through Seduction.
        </p>
        <p>
          She took the path of becoming a Seductrix - ProDomme officially in
          Berlin.
        </p>
        <p>
          As a Mistress, She loves to enforce High Protocol in Her practices.
          Discipline is imperial, therefore highly appreciated as She rejoices
          in being Served and Worshiped properly.
        </p>
        <p>
          As a sub, you will be trained to be the best version of yourself,
          optimize your talents and aptitudes and apply them into servitude. The
          more effort you put into following Her commands, the more you grow
          into fulfillment and the more efficiently you will be able to
          contribute to your Mistress’s life and well-being.
        </p>
        <p>
          All you will wish for is to be Hers, to surrender, and let Her take
          full control of your body and soul.
        </p>
      </cite>
    </section>
  );
}
