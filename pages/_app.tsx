import "../styles/globals.scss";
import "../components/layout/layout.scss";
import "../components/dashboard/dashboard.scss";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Loader from "../components/Loader";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleComplete = () => {
    setIsLoading(false);
  };
  const handleStart = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    if (isMounted) {
      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);
    }

    return () => {
      setIsMounted(false);
    };
  }, [router]);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icon.svg" />
      </Head>
      {isLoading ? <Loader /> : <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
