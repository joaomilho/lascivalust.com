// import { Spotify } from "../components/Spotify";
import Video from "../components/Video";
// import styles from "../../styles/Home.module.css";
// import { SectionMarquee } from "../components/SectionMarquee";
import Blend from "../components/Blend";

const color = `rgba(255,0,0,1)`;

export default function ComposedBlends() {
  return (
    //  style={{ width: 200 }}
    <div>
      <div
        style={{
          display: "table",
          // flexDirection: "row",
        }}
      >
        {/* <div style={{ display: "flex" }}>
          <Video width="50%" video={`smoke-retro`}></Video>
          <Video width="50%" video={`smoke-cartoon`}></Video>
        </div> */}

        {/* <Blend mode="color-dodge" background={color}> */}
        <Blend mode="multiply" background={color}>
          <Video width="100%" video={`noir`} />
        </Blend>
        {/* </Blend> */}
        {/* <Blend mode="color-dodge" background={color}> */}
        <Blend mode="multiply" background={color}>
          <Video width="100%" video={`smoke`} />
        </Blend>
        {/* </Blend> */}
      </div>
    </div>
  );
}
