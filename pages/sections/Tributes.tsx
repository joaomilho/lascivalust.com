import { Header, Video } from "../components";
import CTA from "./CTA";
import styles from "./About.module.css";
import Preferences from "./Preferences";
import { mailto } from "../config";

export default function Sessions() {
  return (
    <>
      <div className={styles.about}>
        <Header text="Tributes" />
        <div className={styles.sessions}>
          <p style={{ marginTop: 120 }}>
            To request a session, send Me an email to{" "}
            <a className={styles.emailLink} href={mailto}>
              sessions@lascivalust.com
            </a>{" "}
            with:
          </p>
          <ul>
            <li>
              A list of your kinks and hard limits
              <small>(see Mine below)</small>
            </li>
            <li>Dates and times you prefer to play</li>
          </ul>
          <table>
            <tr>
              <td>
                <p>
                  <b className={styles.inPersonTribute}>€300</b>/h
                  <br />
                  <small style={{ color: `#999` }}>In Person Sessions</small>
                </p>
              </td>
              <td>
                <p>
                  <b className={styles.virtualTribute}>€180</b>/30 min
                  <br />
                  <small style={{ color: `#999` }}>Virtual Play-Space</small>
                </p>
              </td>
            </tr>
          </table>

          <p>
            You should receive a response to your application in 1-3 days if I
            decide we are a good fit. Everything is Safe, Sane, and Consensual.
            Aftercare is included in all Sessions as a standard practice.
          </p>
        </div>
      </div>
      <Preferences />
      <CTA />

      <Video video={`smoke-cartoon`}></Video>
    </>
  );
}
