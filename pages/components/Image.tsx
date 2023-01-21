// import styles from "../../styles/Home.module.css";

export default function Video({
  image,
  className,
}: {
  image: string;
  className: string;
}) {
  return <img src={`./imgs/${image}.webp`} className={className} />;
}
