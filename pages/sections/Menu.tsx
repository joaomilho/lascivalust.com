import styles from "./Menu.module.css";
import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { mailto } from "../config";

enum Screen {
  about = "about",
  gallery = "gallery",
  sessions = "sessions",
  submit = "submit",
  locations = "locations",
  tributes = "tributes",
}

Menu.defaultProps = {
  show: false,
};

export default function Menu({ show }: { show: boolean }) {
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
          <a href="/#locations" onClick={click(Screen.locations)}>
            Locations
          </a>
        </li>

        <li>
          <a href="/#gallery" onClick={click(Screen.gallery)}>
            Gallery
          </a>
        </li>

        <li>
          <a href="/#tributes" onClick={click(Screen.tributes)}>
            Tributes
          </a>
        </li>

        <li>
          <a
            href={mailto}
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
