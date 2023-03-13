import "../styles/globals.scss";
import "../components/layout/layout.scss";
import "../components/dashboard/dashboard.scss";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
