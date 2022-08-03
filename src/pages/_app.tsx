import "normalize.css";
import "styles/index.css";
import type { AppProps } from "next/app";
import type {} from "styled-components/cssprop";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
