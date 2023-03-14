import "../styles/globals.scss";
import "../components/layout/layout.scss";
import "../components/dashboard/dashboard.scss";

import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
