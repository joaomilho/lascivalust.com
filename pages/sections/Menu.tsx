import styles from "../../styles/Home.module.css";
import { text } from "../../fonts";
import type { Device } from "../../hooks/useDevice";

const breakpoint: Record<Device, number> = {
  tablet: 800,
  desktop: 800,
  mobile: 240,
  unknown: 240,
};

enum Screen {
  about = "about",
  gallery = "gallery",
  preferences = "preferences",
  submit = "submit",
}

Menu.defaultProps = {
  show: false,
};

export default function Menu({
  y,
  device,
  show,
}: {
  y: number;
  device: Device;
  show: boolean;
}) {
  function click(screen: Screen) {
    return () => {
      window.gtag("event", `Click ${screen} menu`, {
        page_name: screen,
        title: screen,
        screen_name: screen,
      });
    };
  }

  return (
    <nav
      className={styles.nav}
      style={show || y > breakpoint[device] ? { top: 0 } : {}}
    >
      <span className={styles.logo}>Lasciva Lust</span>
      <ul className={styles.menu}>
        <li>
          <a href="/#about" onClick={click(Screen.about)}>
            About
          </a>
        </li>
        <li>
          <a href="/#gallery" onClick={click(Screen.gallery)}>
            Gallery
          </a>
        </li>
        <li>
          <a href="/#preferences" onClick={click(Screen.preferences)}>
            Preferences
          </a>
        </li>
        <li>
          <a
            href="https://h6o5rhe132.execute-api.eu-central-1.amazonaws.com/applications"
            onClick={click(Screen.submit)}
            className={styles.applyButtonMenu}
          >
            Submit
          </a>
        </li>
      </ul>
    </nav>
  );
}
