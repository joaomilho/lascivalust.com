import { useDevice } from "../../hooks/useDevice";
import { Video } from "../components";

export default function NewMain() {
  const device = useDevice();
  const video = device === "desktop" ? `main-2024` : `main-mobile-2024`;

  return <Video video={video} />;
}
