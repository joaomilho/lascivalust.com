import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import GA from "./components/GA";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/fop7hsj.css" />
      </Head>
      <ParallaxProvider>
        <GA id="G-PPJTMRM5NX" />
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
}
