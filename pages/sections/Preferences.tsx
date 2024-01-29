import styles from "../../styles/Home.module.css";

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
  return (
    <section>
      <p>
        <h4>Preferences</h4>

        <p style={{ padding: 0 }}>
          {preferences.map((pref, i) => {
            return (
              <>
                <span key={pref}>
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

      <p>
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
