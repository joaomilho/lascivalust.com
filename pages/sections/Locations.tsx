import { Header, Video } from "../components";
import CTA from "./CTA";
import styles from "./About.module.css";
import Preferences from "./Preferences";
import { mailto } from "../config";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Locations() {
  return (
    <>
      <div className={styles.about}>
        <Header text="Locations" />

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 0: 2 }}
          style={{ padding: `80px 0` }}
        >
          <Masonry gutter={"2px"}>
            <p>
              <h4>In Berlin</h4>I work at the best studios in Berlin:{" "}
              <a href="https://studioluxberlin.de/team/profil/lasciva-lust.html">
                Studio Lux
              </a>{" "}
              and other exclusive locations.
            </p>

            <p>
              <h4>Tour 2024</h4>

              <b>Hamburg</b>
              <span style={{ color: "#333" }}> // </span>
              <i>April 26 - 29</i>
              <br />
              <b>Munich</b>
              <span style={{ color: "#333" }}> // </span>
              <i>May 24 - 27</i>
              <br />
              <b>London</b>
              <span style={{ color: "#333" }}> // </span>
              <i>June 7 - 10</i>
              <br />
              <b>Amsterdam</b>
              <span style={{ color: "#333" }}> // </span>
              <i>June 21 - 24</i>
              <br />
              <b>Paris</b>
              <span style={{ color: "#333" }}> // </span>
              <i>July 12 - 15</i>
              <br />
              <b>New York</b>
              <span style={{ color: "#333" }}> // </span>
              <i>August 9 - 15</i>
              <br />
              <b>Montreal</b>
              <span style={{ color: "#333" }}> // </span>
              <i>August 16 - 21</i>
            </p>
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}
