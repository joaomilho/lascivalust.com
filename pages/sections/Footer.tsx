import styles from "../../styles/Home.module.css";
import { TwitterIcon, InstapaperIcon } from "next-share";
import { SocialIcon } from "react-social-icons";

const links = [
  {
    source: "Twitter",
    destination: "https://twitter.com/lascivalust",
  },
  {
    source: "Linktree",
    destination: "https://linktr.ee/lascivalust",
  },
  {
    source: "Instagram",
    destination: "https://www.instagram.com/mistress_lasciva",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        {links.map((link) => {
          return (
            <li>
              <SocialIcon url={link.destination} />
              <a href={link.destination}>{link.source}</a>
            </li>
          );
        })}
      </ul>

      <img
        alt="Lasciva Lust"
        src={`./imgs/signature-inverse.png`}
        style={{ width: 250 }}
      />
      <div>© 2022 - 2023 lacscivalust.com - All Rights Reserved.</div>
    </footer>
  );
}
