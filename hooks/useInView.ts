import { useEffect } from "react";
import { useInViewRef } from "rooks";

export default function useInView(screen: string) {
  const [ref, inView] = useInViewRef();

  useEffect(() => {
    if (!inView) return;
    console.log("GA In view", screen);
    window.gtag("event", `Scrolled to ${screen}`, {
      page_name: screen,
      title: screen,
      screen_name: screen,
    });
  }, [inView]);

  return ref;
}
