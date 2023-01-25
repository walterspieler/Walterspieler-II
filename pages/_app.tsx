import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { AppProps } from "next/app";
import "../styles/global.css";
import { appWithTranslation } from "next-i18next";

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default appWithTranslation(MyApp);
