import "styles/main.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import TopBarProgress from "react-topbar-progress-indicator";
import { useRouter } from "next/router";

TopBarProgress.config({
  barColors: {
    "0": "#7a7ee3",
    "1.0": "#676bdf",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState(false);
  const router = useRouter();

  const scrollPositions = useRef<{ [url: string]: number }>({});
  const isBack = useRef(false);

  useEffect(() => {
    router.beforePopState(() => {
      isBack.current = true;
      return true;
    });

    const onRouteChangeStart = () => {
      setProgress(true);
      const url = router.pathname;
      scrollPositions.current[url] = window.scrollY;
    };

    const onRouteChangeComplete = (url: any) => {
      setProgress(false);
      if (isBack.current && scrollPositions.current[url]) {
        window.scroll({
          top: scrollPositions.current[url],
          behavior: "auto",
        });
      }

      isBack.current = false;
    };

    router.events.on("routeChangeStart", onRouteChangeStart);
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", onRouteChangeStart);
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router]);

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
      {progress && <TopBarProgress />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
