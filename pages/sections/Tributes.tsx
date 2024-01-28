import { Header, Video } from "../components";
import styles from "./About.module.css";

export default function Tributes() {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.sessions}>
          <Header text="Tributes" />

          <p>
            For tributes, use My{" "}
            <a href="https://paypal.me/MLcreativeart">PayPal</a> or send Me a
            gift from My{" "}
            <a href="https://www.luxylist.it/lascivalust">Luxylist</a>.
            {/* TBD Add Lux */}
          </p>
        </div>
      </div>
    </>
  );
}
