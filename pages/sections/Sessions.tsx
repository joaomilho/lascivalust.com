import { Header, Video } from "../components";
import CTA from "./CTA";
import styles from "./About.module.css";
import Preferences from "./Preferences";
import { mailto } from "../config";

export default function Sessions() {
  return (
    <>
      <div className={styles.about}>
        <Header text="Sessions" />
        <div className={styles.sessions}>
          <p>
            To request a session, send Me an email to{" "}
            <a className={styles.emailLink} href={mailto}>
              sessions@lascivalust.com
            </a>{" "}
            with:
          </p>
          <ul>
            <li>
              A list of your kinks and hard limits
              <small> (see Mine below)</small>
            </li>
            <li>Dates and times you prefer to play</li>
          </ul>

          <table>
            <tr>
              <td>
                <p>
                  <small style={{ color: `#999` }}>In Person Sessions</small>
                </p>
              </td>
              <td>
                <p>
                  <b className={styles.inPersonTribute}>€300</b>/h
                </p>
              </td>
            </tr>
          </table>

          <p>
            You should receive a response to your application in 1-3 days if I
            decide we are a good fit. Everything is Safe, Sane, and Consensual.
            Aftercare is included in all Sessions as a standard practice.
          </p>

          <p>
            <h4>In Berlin</h4>I work at the best studios in Berlin:{" "}
            <a href="https://studioluxberlin.de/team/profil/lasciva-lust.html">
              Studio Lux
            </a>{" "}
            and other exclusive locations.
          </p>

          <p>
            <h4>On Tour</h4>

            <b>Hamburg</b>
            <span style={{ color: "#333" }}> // </span>
            <i>April 20 - 23</i>
            <br />
            <b>Tel Aviv</b>
            <span style={{ color: "#333" }}> // </span>
            <i>May 3 - 6</i>
            <br />
            <b>Munich</b>
            <span style={{ color: "#333" }}> // </span>
            <i>May 25 - 28</i>
            <br />
            <b>London</b>
            <span style={{ color: "#333" }}> // </span>
            <i>June 8 - 11</i>
            <br />
            <b>Paris</b>
            <span style={{ color: "#333" }}> // </span>
            <i>September 7 - 10</i>
            <br />
            <b>Venice</b>
            <span style={{ color: "#333" }}> // </span>
            <i>September 28 - October 1</i>
          </p>
        </div>
      </div>
      <Preferences />
      <CTA />

      <div className={styles.about}>
        <div className={styles.sessions}>
          <p>
            <h4>Tributes</h4>
            For tributes, use My{" "}
            <a href="https://paypal.me/MLcreativeart">PayPal</a> or send Me a
            gift from My{" "}
            <a href="https://www.luxylist.it/lascivalust">Luxylist</a>.
            {/* TBD Add Lux */}
          </p>
        </div>
      </div>

      <Video video={`smoke-cartoon`}></Video>
    </>
  );
}
