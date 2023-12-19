import { FC, ReactNode } from "react";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Button from "./button";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  return (
    <div>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <header>
        <div className="flex w-full">
          <Button text={t("GLOBAL.MENU.PROFILE")} link="/" />
          <Button text={t("GLOBAL.MENU.WORKS")} link="/works" />
          <div className="m-2 border-t font-bold md:m-5">
            <motion.button
              initial={{ scale: 1, y: 0 }}
              whileHover={{ scale: 1.01, y: 5 }}
              onClick={() =>
                router.push({ pathname, query }, asPath, {
                  locale: locale === "en" ? "fr" : "en",
                })
              }
              title="EN/FR"
              whileTap={{ scale: 0.99, y: 5 }}
              className="flex items-center justify-between p-3"
            >
              <div className="hidden md:block">
                <span
                  className={locale === "en" ? "text-black" : "text-gray-400"}
                >
                  en
                </span>
                /
                <span
                  className={locale === "fr" ? "text-black" : "text-gray-400"}
                >
                  fr
                </span>
              </div>
              <motion.div className="md:ml-5">
                <FontAwesomeIcon icon={faGlobe} className="text-matt-green" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </header>
      <main className="m-auto max-w-xl md:max-w-5xl">{children}</main>
    </div>
  );
};

export default Layout;
