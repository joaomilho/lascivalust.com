import styles from "./Menu.module.css";
import type { Device } from "../../hooks/useDevice";
import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

enum Screen {
  about = "about",
  gallery = "gallery",
  preferences = "preferences",
  submit = "submit",
}

Submenu.defaultProps = {
  show: true,
};

export default function Submenu({
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
    };
  }

  return (
    <nav>
      <ul>
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
