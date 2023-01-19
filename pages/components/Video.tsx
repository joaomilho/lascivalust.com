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
      id="d126ffa8-174e-c823-c64e-5fd338f3d981-video"
      autoPlay
      loop
      muted
      playsInline
      data-wf-ignore="true"
      data-object-fit="cover"
      className={styles.video}
      style={{
        width,
      }}
      poster={`/vids/${video}.jpg`}
    >
      <source src={`./vids/${video}.mov`} data-wf-ignore="true"></source>
      <img
        src={`/vids/${video}.jpg`}
        title="Your browser does not support the <video> tag"
      />
    </video>
  );
}
