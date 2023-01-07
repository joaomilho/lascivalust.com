import styles from "../../styles/Home.module.css";

export default function Main({ y }: { y: number }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Lasciva Lust</h1>
      <img src="./imgs/bg.jpeg" className={styles.mainImage} />
    </main>
  );
}
