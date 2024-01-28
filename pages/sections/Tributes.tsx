import { Header, Video } from "../components";
import styles from "./About.module.css";

export default function Tributes() {
  return (
    <div className={styles.about}>
      <div className={styles.sessions}>
        <Header text="Tributes" />

        <p>
          For tributes, use My{" "}
          <a href="https://paypal.me/MLcreativeart">PayPal</a>.
          <br />
          Send me a gift on{" "}
          <a href="https://www.luxylist.it/lascivalust">LuxyList</a> or{" "}
          <a href="https://www.wishtender.com/lascivalust">Wishtender</a>.
        </p>
      </div>
    </div>
  );
}
