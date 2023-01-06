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
  {
    source: "Substack",
    destination: "https://lasciva.substack.com",
  },
];

const networks: { url: string; desc: string; bannerURL: string }[] = [
  {
    url: "https://www.domina.ws",
    desc: "Link to DOMINA.WS - dominatrix guide for Germany, Austria and Switzerland",
    bannerURL: "https://www.domina.ws/_main/gfx/banner01.gif",
  },
  {
    url: "https://sinsearch.com",
    desc: "SinSearch Mistress Directory",
    bannerURL: "./imgs/networks/sinsearch.jpeg",
  },
  {
    url: "https://www.mistress-guide.com",
    bannerURL:
      "https://www.mistress-guide.com/images/ourpics/mistress_guide_468x60_2.gif",
    desc: "verified Mistress Guide",
  },
  {
    url: "https://www.dickievirgin.com",
    bannerURL: "https://www.dickievirgin.com/banner/dickie-main-standard.gif",
    desc: "dickie virgin FemDom guide",
  },
  {
    url: "https://herrinkontakte.net",
    bannerURL: "https://herrinkontakte.net/herrinkontaktebanner02.jpg",
    desc: "Herrin Kontakte Domina Anzeigen",
  },
  {
    url: "https://openadultdirectory.com/bdsm/",
    bannerURL: "https://img.openadultdirectory.com/banner-img/bdsm-lg.jpg",
    desc: "OpenAdultDirectory.com BDSM/Fetish ",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        {links.map((link, i) => {
          return (
            <li key={i}>
              <SocialIcon url={link.destination} />
              <br />
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

      <hr />
      <div style={{ opacity: 0.7 }}>
        {networks.map((net) => {
          return (
            <div key={net.url} style={{ padding: 5 }}>
              <a href={net.url} target="_blank" title={net.desc}>
                <img
                  src={net.bannerURL}
                  alt={net.desc}
                  style={{ maxWidth: 300 }}
                />
              </a>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
