import styles from "./Menu.module.css";
import type { Device } from "../../hooks/useDevice";
import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

enum Screen {
  about = "about",
  gallery = "gallery",
  sessions = "sessions",
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
  const [open, setOpen] = useState<boolean>(false);

  function click(screen: Screen) {
    return () => {
      window.gtag("event", `Click ${screen} menu`, {
        page_name: screen,
        title: screen,
        screen_name: screen,
      });
      setOpen(false);
    };
  }

  return (
    <nav className={[styles.nav, open ? styles.open : styles.closed].join(" ")}>
      <div
        className={styles.logo}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Hamburger toggled={open} toggle={setOpen} />
        <div>Lasciva Lust</div>
      </div>
      <ul className={styles.menu}>
        <li>
          <a href="/#about" onClick={click(Screen.about)}>
            About
          </a>
        </li>

        <li>
          <a href="/#sessions" onClick={click(Screen.sessions)}>
            Sessions
          </a>
        </li>

        <li>
          <a href="/#gallery" onClick={click(Screen.gallery)}>
            Gallery
          </a>
        </li>

        <li>
          <a
            href="https://h6o5rhe132.execute-api.eu-central-1.amazonaws.com/applications"
            onClick={click(Screen.submit)}
            className={styles.applyButtonMenu}
          >
            Surrender
          </a>
        </li>
      </ul>
    </nav>
  );
}
