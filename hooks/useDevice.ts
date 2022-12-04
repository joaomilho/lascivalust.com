import { useWindowSize } from "rooks";

export type Device = "desktop" | "tablet" | "mobile" | "unknown";

export function useDevice(): Device {
  const { innerWidth } = useWindowSize();

  if (!innerWidth) return "unknown";

  switch (true) {
    // Macbook 14
    case innerWidth >= 1440:
      return "desktop";
    // iPad mini
    case innerWidth >= 1080:
      return "tablet";
    default:
      return "mobile";
  }
}
