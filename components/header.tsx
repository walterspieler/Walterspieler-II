"use client";

import { FC } from "react";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";

import { useChangeLocale, useCurrentLocale, useI18n } from "lib/locales/client";

import Button from "./button";

const Header: FC = () => {
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  return (
    <header>
      <div className="flex w-full items-center">
        <div className="ml-10">
          <Image
            src={"/images/Walterspieler_logo.png"}
            alt="Matt"
            width={45}
            height={45}
          />
        </div>
        <Button text={t("GLOBAL.MENU.PROFILE")} link="/" />
        <Button text={t("GLOBAL.MENU.WORKS")} link="/works" />
        <div className="m-2 border-t font-bold md:m-5">
          <motion.button
            initial={{ scale: 1, y: 0 }}
            whileHover={{ scale: 1.01, y: 5 }}
            title="EN/FR"
            whileTap={{ scale: 0.99, y: 5 }}
            onClick={() => changeLocale(locale === "en" ? "fr" : "en")}
            className="flex items-center justify-between p-3"
          >
            <span
              className={
                locale === "en"
                  ? "text-black transition-colors"
                  : "text-gray-400 transition-colors"
              }
            >
              en
            </span>
            /
            <span
              className={
                locale === "fr"
                  ? "text-black transition-colors"
                  : "text-gray-400 transition-colors"
              }
            >
              fr
            </span>
            <motion.div className="md:ml-5">
              <FontAwesomeIcon icon={faGlobe} className="text-matt-green" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
