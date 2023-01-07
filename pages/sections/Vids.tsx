import ReactPlayer from "react-player";
import styles from "../../styles/Home.module.css";
export default function Vids() {
  return (
    <div className={styles.vids}>
      {[1, 2, 3, 4].map((vid) => {
        return (
          <ReactPlayer
            key={vid}
            className={styles.vid}
            url={`./vids/${vid}.mp4`}
            width="350 px"
            height=" 640px"
            muted={true}
            playing={true}
            controls={true}
          />
        );
      })}
    </div>
  );
}
