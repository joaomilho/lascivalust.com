import styles from "../../styles/Home.module.css";
import { useParallax, Parallax } from "react-scroll-parallax";
import { title } from "../../fonts";

export function Main() {
  return (
    <main className={styles.main}>
      <Parallax speed={0} className={styles.bg} />
      <Parallax speed={-15} className={styles.text}>
        <h2 className={styles.job}>High Protocol Dominatrix</h2>
      </Parallax>
      <Parallax speed={-30} className={styles.text}>
        <h1 className={styles.title}>Lasciva Lust</h1>
      </Parallax>

      {/* 
<div className={styles.grid}>
  <a href="https://nextjs.org/docs" className={styles.card}>
    <h2>Documentation &rarr;</h2>
    <p>Find in-depth information about Next.js features and API.</p>
  </a>

  <a href="https://nextjs.org/learn" className={styles.card}>
    <h2>Learn &rarr;</h2>
    <p>Learn about Next.js in an interactive course with quizzes!</p>
  </a>

  <a
    href="https://github.com/vercel/next.js/tree/canary/examples"
    className={styles.card}
  >
    <h2>Examples &rarr;</h2>
    <p>Discover and deploy boilerplate example Next.js projects.</p>
  </a>

  <a
    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.card}
  >
    <h2>Deploy &rarr;</h2>
    <p>
      Instantly deploy your Next.js site to a public URL with Vercel.
    </p>
  </a>
</div> */}
    </main>
  );
}
