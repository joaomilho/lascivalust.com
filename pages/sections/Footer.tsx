import styles from "../../styles/Home.module.css";

import { SocialIcon } from "react-social-icons";
import { SectionMarquee } from "../components/SectionMarquee";
import ComposedBlends from "../components/ComposedBlends";
import Image from "next/image";

const links = [
  { source: "Twitter", destination: "https://twitter.com/lascivalust" },
  {
    source: "Instagram",
    destination: "https://www.instagram.com/mistress_lasciva",
  },
];

const networks: { url: string; desc: string; bannerURL: string }[] = [
  {
    url: "https://www.ubergirls.me/city/Berlin",
    desc: "LoveHub",
    bannerURL: "lovehub.webp",
  },
  {
    url: "https://www.mistressadvisor.com",
    desc: "Mistress Advisor",
    bannerURL: "mistress-advisor.webp",
  },
  {
    url: "https://www.domina.ws",
    desc: "Link to DOMINA.WS - dominatrix guide for Germany, Austria and Switzerland",
    bannerURL: "domina.gif",
  },
  {
    url: "https://sinsearch.com",
    desc: "SinSearch Mistress Directory",
    bannerURL: "sinsearch.webp",
  },
  {
    url: "https://www.mistress-guide.com",
    bannerURL: "mistress_guide.webp",
    desc: "verified Mistress Guide",
  },
  {
    url: "https://www.dickievirgin.com",
    bannerURL: "dickie.gif",
    desc: "dickie virgin FemDom guide",
  },
  {
    url: "https://herrinkontakte.net",
    bannerURL: "herrinkontakte.webp",
    desc: "Herrin Kontakte Domina Anzeigen",
  },
  {
    url: "https://openadultdirectory.com/bdsm/",
    bannerURL: "openadultdirectory.webp",
    desc: "OpenAdultDirectory.com BDSM/Fetish ",
  },
  {
    url: "https://www.galeriedesade.com",
    bannerURL: "sade.webp",
    desc: "BDSM-Bizarr Galerie",
  },
];

export default function Footer() {
  return (
    <>
      <div className={styles.social}>
        <ul>
          {links.map((link, i) => {
            return (
              <li key={i}>
                <a href={link.destination}>
                  <SocialIcon
                    bgColor={"transparent"}
                    fgColor={"white"}
                    url={link.destination}
                  />
                  {/* <br />
                {link.source} */}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* <ComposedBlends /> */}
      <SectionMarquee />
      <footer className={styles.footer}>
        {/* <img
          alt="Lasciva Lust"
          src={`./imgs/signature-inverse.png`}
          style={{ width: 250 }}
        /> */}
        <div style={{ fontFamily: "FreightDispProMedium" }}>
          © 2022 - 2023 lacscivalust.com - All Rights Reserved.
        </div>

        <hr />
        <div
          style={{
            filter: `grayscale(1) contrast(5) brightness(0.6)  `,
          }}
        >
          {networks.map((net) => {
            return (
              <div key={net.url} style={{ padding: 5 }}>
                <a href={net.url} target="_blank" title={net.desc}>
                  <img
                    src={`./imgs/networks/${net.bannerURL}`}
                    loading="lazy"
                    alt={net.desc}
                    style={{ maxWidth: 120 }}
                    // @ts-ignore
                    fetchPriority={"low"}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </footer>
    </>
  );
}
