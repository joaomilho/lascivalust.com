import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import GA from "./components/GA";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <GA id="G-PPJTMRM5NX" />

      <Component {...pageProps} />
    </ParallaxProvider>
  );
}
