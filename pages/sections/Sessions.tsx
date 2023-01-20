import { Header, Video } from "../components";
import CTA from "./CTA";
import styles from "./Sessions.module.css";
import Preferences from "./Preferences";
import ComposedBlends from "../components/ComposedBlends";

export default function Sessions() {
  return (
    <>
      <div className={styles.sessions}>
        <Header text="Sessions" />

        <p>
          In Person Sessions: <b>€300/h</b>
          <small>
            {" "}
            (€100 required deposit if your application is accepted).
          </small>
        </p>
        <p>
          Virtual Play-Space: <b>€180/30 min.</b>
        </p>
        <p>
          You should receive a response to your application in 1-5 days if I
          decide we are a good fit. Everything is Safe, Sane, and Consensual.
          Aftercare is included in all Sessions as a standard practice.
        </p>
      </div>
      <CTA />

      <Video video={`smoke-cartoon`}></Video>

      {/* <Preferences /> */}
    </>
  );
}
