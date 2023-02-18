import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "./About.module.css";
import { Header, Spotify, Video } from "../components";
import { SocialIcon } from "react-social-icons";
import useInView from "../../hooks/useInView";

export default function About() {
  const ref = useInView("about");

  return (
    <section
      className={styles.about}
      ref={ref}
      style={{ background: "black", color: "white" }}
    >
      <Header text="About" />

      <p>
        A lustful <i>&</i> dark experience that will penetrate your soul. Once
        you step in, you are Mine. Get ready to feel intoxicated with lust and
        with the uncontrollable urge for more.
      </p>

      <p>Surrender to Me and I will train you to elevate to My standards.</p>

      <Video video={`smoke`}></Video>

      <div style={{ background: `white`, color: `black` }}>
        <p>
          As a Professional Seductrix <i>&</i> Dominatrix, I like to implement
          High-Protocol into Play using My natural ability to seduce, creating a
          unique experience where each encounter is shaped for building intimacy
          & trust while challenging your body and mind constantly. Transforming
          you into the toy that I will deliciously use as I see fit.
        </p>

        <p>
          I absolutely love proper Worshipping and receiving gifts and Tributes
          up to My standards, when you put effort into satisfying Me and want to
          be good and obey. When you are genuinely grateful for being shown
          where you belong, feeling the privilege of My presence over you.
        </p>

        <p>Be ready to fall in lust.</p>

        <div className={styles.knowMore}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
            style={{ padding: 0 }}
          >
            <Masonry gutter={"0px"} style={{ padding: 0 }}>
              <p>
                {" "}
                <SocialIcon
                  bgColor={"transparent"}
                  fgColor={"black"}
                  // style={{ width: 200 }}
                  url={"https://www.instagram.com/mistress_lasciva/"}
                />
                <br />
                <b>Instagram</b>
                <br />
                <a href="https://www.instagram.com/mistress_lasciva">
                  mistress_lasciva
                </a>
              </p>

              <p>
                {" "}
                <SocialIcon
                  bgColor={"transparent"}
                  fgColor={"black"}
                  // style={{ width: 200 }}
                  url={"https://lasciva.substack.com/"}
                />
                <br />
                <b>Substack</b>
                <br />
                <a href="https://lasciva.substack.com">lasciva.substack.com</a>
              </p>

              <p>
                <SocialIcon
                  bgColor={"transparent"}
                  fgColor={"black"}
                  url={"https://twitter.com/LascivaLust"}
                />
                <br />
                <b>Twitter</b>
                <br />
                <a href="https://twitter.com/LascivaLust">LascivaLust</a>
              </p>

              <p>
                <SocialIcon
                  bgColor={"transparent"}
                  fgColor={"black"}
                  url={
                    "https://open.spotify.com/playlist/1fuxoMrNUSOeIfYTuhHQgc?si=3c67da85204746ef"
                  }
                />
                <br />
                <b>Spotify</b>
                <br />
                <Spotify playlist="3kL0UMAMzai8AawPcjVrC4" />
              </p>
            </Masonry>
          </ResponsiveMasonry>
        </div>

        <Video video={`smoke-retro`}></Video>
      </div>
    </section>
  );
}
