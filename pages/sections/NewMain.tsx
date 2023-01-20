import { useDevice } from "../../hooks/useDevice";
import { Video } from "../components";

export default function NewMain() {
  const device = useDevice();
  const video = device === "desktop" ? `noir` : `noir-portrait`;

  return <Video video={video} />;
}
