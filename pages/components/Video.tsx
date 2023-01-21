import styles from "../../styles/Home.module.css";

Video.defaultProps = {
  width: "100%",
};

export default function Video({
  video,
  width,
}: {
  video: string;
  width: string;
}) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      data-wf-ignore="true"
      data-object-fit="cover"
      className={styles.video}
      style={{ width }}
      poster={`/vids/${video}.webp`}
    >
      <source
        src={`./vids/${video}.webm`}
        type="video/webm"
        data-wf-ignore="true"
      ></source>
      <source
        src={`./vids/${video}.mov`}
        type="video/quicktime"
        data-wf-ignore="true"
      ></source>
      <img
        src={`/vids/${video}.png`}
        title="Your browser does not support the <video> tag"
      />
    </video>
  );
}
