import styles from "../../styles/Home.module.css";

import useInView from "../../hooks/useInView";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const preferences = [
  "High Protocol",
  "Goddess Worship",
  "Chastity/Key holding",
  "Latex",
  "Feminization",
  "Bondage and restrains",
  "Mummification",
  "Golden Showers",
  "Flogging",
  "Impact Play",
  "Tattoo Art",
  "Breath Play",
  "Pet Play",
  "Objectification",
  "Slave training",
  "Cuckolding",
  "Tease & Denial",
  "FinDom",
  "BB & CBT",

  "Electro-Play",
];

export const detail: Record<string, string> = {
  Feminization: "sissy/slut training",
  "Impact Play": "spanking, paddle, flogger, strap, cane",
  Objectification: "human furniture",
};

export default function Preferences() {
  const ref = useInView("preferences");

  return (
    <section ref={ref} className={[styles.protocol].join(" ")}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 0: 1, 1200: 2 }}
        style={{ padding: 20 }}
      >
        <Masonry gutter={"0px"} style={{ padding: 0 }}>
          <p>
            <b>Preferences</b>
            <br />
            <br />
            <ul className={styles.list}>
              {preferences.map((pref) => {
                return (
                  <li key={pref}>
                    {pref}
                    {detail[pref] ? (
                      <>
                        <small style={{ color: "#666" }}>
                          {" "}
                          ({detail[pref]})
                        </small>
                      </>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </p>

          <p>
            <b>Hard limits</b>
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
          </p>
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
}
