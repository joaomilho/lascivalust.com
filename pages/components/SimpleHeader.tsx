import styles from "./SimpleHeader.module.css";

export default function SimpleHeader({ text }: { text: string }) {
  return <h1 className={styles.simpleHeader}>{text}</h1>;
}
