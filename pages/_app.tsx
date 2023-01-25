import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { AppProps } from "next/app";
import "../styles/global.css";
import { appWithTranslation } from "next-i18next";
import { GoogleAnalytics } from "nextjs-google-analytics";

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GoogleAnalytics trackPageViews />
    <Component {...pageProps} />
  </>
);

export default appWithTranslation(MyApp);
