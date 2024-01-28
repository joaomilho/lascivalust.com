import styles from "../../styles/Home.module.css";
import about from "./About.module.css";

import useInView from "../../hooks/useInView";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const preferences = [
  "High Protocol",
  "goddess worship",
  "chastity/key holding",
  "latex",
  "feminization",
  "bondage and restrains",
  "mummification",
  "golden showers",
  "flogging",
  "impact play",
  "tattoo art",
  "breath play",
  "pet play",
  "objectification",
  "slave training",
  "cuckolding",
  "tease & denial",
  "findom",
  "BB & CBT",
  "electro-play",
];

export const detail: Record<string, string> = {
  feminization: "sissy/slut training",
  "impact play": "spanking, paddle, flogger, strap, cane",
  objectification: "human furniture",
};

export default function Preferences() {
  const ref = useInView("preferences");

  return (
    <section ref={ref} className={[about.about].join(" ")}>
      <p>
        <h4>Preferences</h4>

        <p className={styles.about} style={{ padding: 0 }}>
          {preferences.map((pref, i) => {
            return (
              <>
                <span>
                  {pref}
                  {detail[pref] ? (
                    <small style={{ color: "#99a" }}> ({detail[pref]})</small>
                  ) : null}
                </span>
                {i === preferences.length - 2
                  ? " and "
                  : i === preferences.length - 1
                  ? "."
                  : ", "}
              </>
            );
          })}
        </p>
      </p>

      <p className={[styles.about].join(" ")}>
        <h4>Limits</h4>
        <span className={styles.listNope}>
          Brown showers, blood play, cultural/religious humiliation, emotional
          labor, little/ABDL, heavy medical play, male gratification and
          degradation.
        </span>
      </p>
    </section>
  );
}
