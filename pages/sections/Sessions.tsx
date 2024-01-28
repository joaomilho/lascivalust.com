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
        <div>
          <p>
            To request a session, send Me an email to{" "}
            <a href={mailto}>sessions@lascivalust.com</a> with a list of your
            kinks and hard limits
            <small> (see Mine below)</small> and dates and times you prefer to
            play. You should receive a response to your application in 1-3 days
            if I decide we are a good fit.
          </p>
          <p>
            {" "}
            Everything is Safe, Sane, and Consensual. Aftercare is included in
            all Sessions as a standard practice.
          </p>
        </div>
      </div>
      <Preferences />

      {/* <Video video={`smoke-cartoon`}></Video> */}
    </>
  );
}
