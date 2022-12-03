import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import GA from "./components/GA";
import Script from "next/script";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <GA id="G-PPJTMRM5NX" />
      <Script src="//embed.typeform.com/next/embed.js" />
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}
