import styles from "../../styles/Home.module.css";
import { SocialIcon } from "react-social-icons";

const links = [
  { source: "Twitter", destination: "https://twitter.com/lascivalust" },
  {
    source: "Instagram",
    destination: "https://www.instagram.com/mistress_lasciva",
  },
];

export default function Social() {
  return (
    <div className={styles.social}>
      <ul>
        {links.map((link, i) => {
          return (
            <li key={i}>
              <a href={link.destination}>
                <SocialIcon
                  bgColor={"transparent"}
                  fgColor={"black"}
                  url={link.destination}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
