// import styles from "../../styles/Home.module.css";

export default function Image({
  image,
  className,
}: {
  image: string;
  className: string;
}) {
  return (
    <div
      style={{
        width: 420,
        height: 420,
        background: `url(./imgs/${image}.webp)`,
      }}
    >
      {/* <img src={``} className={className} /> */}
    </div>
  );
}
