import {
  faCode,
  faTerminal,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ExternalLink from "../components/externalLink";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>Senior Fullstack Developer | Matthieu Walterspieler</title>
        <meta
          name="title"
          content="Senior Fullstack Developer | Matthieu Walterspieler"
        />
        <meta name="description" content={t("GLOBAL.INTRO") || ""} />
      </Head>
      <div className="mt-5 grid md:mb-20 md:grid-cols-3 md:gap-14">
        <motion.section
          whileHover={{ rotate: 1, y: 5, scale: 1.05 }}
          className="relative mb-5 max-h-[20rem] w-full min-w-[15rem]"
        >
          <div className="absolute top-5 left-5 h-full w-full bg-black"></div>
          <Image
            src={"/images/matt_low.jpg"}
            alt="Matt"
            className="min-h-full min-w-full object-cover object-top"
            fill
          />
        </motion.section>
        <section className="col-span-2 m-5">
          <h1 className="relative mb-5 text-[2rem] leading-none md:text-[3rem] lg:text-[4rem] xl:text-[5rem]">
            <span className="font-bold md:text-5xl">Matthieu</span> <br />
            <span className="z-10 font-black">WALTERSPIELER SALVI</span>
          </h1>
          <p className="font-thin">{t("GLOBAL.INTRO")}</p>
          <p className="mt-1 font-thin">
            <span className="mr-1">{t("GLOBAL.INTRO.P2")}</span>
            <motion.span whileHover={{ scale: 1.01, y: 2 }}>
              <Link
                href={{
                  pathname: "/works",
                }}
                className="font-bold text-matt-orange underline underline-offset-4"
              >
                {t("GLOBAL.INTRO.LINK")}
              </Link>
            </motion.span>
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-start border-t">
            <ExternalLink
              text={"Twitter"}
              link={"https://twitter.com/mwalterspieler"}
            />
            <ExternalLink
              text={"Instagram"}
              link={"https://www.instagram.com/walterspieler__/"}
            />
            <ExternalLink text={"Instagram"} link={""} />
            <ExternalLink
              text={"Github"}
              link={"https://github.com/walterspieler"}
            />
            <ExternalLink
              text={"SO"}
              link={
                "https://stackoverflow.com/users/3918612/matt-walterspieler"
              }
            />
            <ExternalLink
              text={"Linkedin"}
              link={"https://www.linkedin.com/in/mattwalters3/"}
            />
            <ExternalLink
              text={"Medium"}
              link={"https://medium.com/@mwalterspieler_31762"}
            />
            <ExternalLink
              text={"Keybase"}
              link={"https://keybase.io/mwalterspieler"}
            />
            <ExternalLink
              text={"Pluralsight"}
              link={"https://app.pluralsight.com/profile/matt-walterspieler"}
            />
            <ExternalLink
              text={"My resume"}
              link={"https://walterspieler.com/resume"}
            />
          </div>
        </section>
      </div>
      <div className="mx-5 lg:mx-24">
        <div className="grid grid-cols-2">
          <p className="mb-8 text-2xl font-bold">{t("GLOBAL.SKILLS.INTRO")}</p>
        </div>
        <div className="grid lg:grid-cols-3 lg:gap-14">
          <div className="mb-8">
            <div className="mb-5 flex items-center justify-between border-b">
              <h2 className="mb-3 text-xl font-black">UI/UX Design</h2>
              <motion.div
                animate={{ rotate: [-5, 10, -5] }}
                transition={{ repeat: Infinity }}
              >
                <FontAwesomeIcon
                  icon={faWandMagicSparkles}
                  className="text-matt-green"
                />
              </motion.div>
            </div>
            <p className="font-thin">{t("GLOBAL.SKILLS.UI")}</p>
            <div className="mt-5 grid grid-cols-2 gap-x-5">
              <div className="my-2 rounded-full border px-5 text-center">
                Figma
              </div>
              <div className="my-2 rounded-full border px-5 text-center">
                Photoshop
              </div>
              <div className="my-2 rounded-full border px-5 text-center">
                Illustrator
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="mb-5 flex items-center justify-between border-b">
              <h2 className="mb-3 text-xl font-black">Web development</h2>
              <motion.div
                animate={{ scale: [1.1, 1, 1.1], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity }}
              >
                <FontAwesomeIcon icon={faCode} className="text-matt-green" />
              </motion.div>
            </div>
            <p className="font-thin">{t("GLOBAL.SKILLS.DEV")}</p>
            <div className="mt-5 grid grid-cols-2 gap-x-5">
              <div className="my-2 rounded-full border px-5 text-center">
                HTML/CSS
              </div>
              <div className="my-2 rounded-full border px-5 text-center">
                Typescript
              </div>
              <div className="my-2 rounded-full border px-5 text-center">
                React
              </div>
              <div className="my-2 rounded-full border px-5 text-center">
                Vue
              </div>
              <div className="my-2 rounded-full border px-5 text-center">
                Angular
              </div>
              <div className="my-2 rounded-full border px-5 text-center">
                Nestjs
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="mb-5 flex items-center justify-between border-b">
              <h2 className="mb-3 text-xl font-black">Cloud engineering</h2>
              <motion.div
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, type: "tween" }}
              >
                <FontAwesomeIcon
                  icon={faTerminal}
                  className="text-matt-green"
                />
              </motion.div>
            </div>
            <p className="font-thin">{t("GLOBAL.SKILLS.DEVOPS")}</p>
            <div className="mt-5 grid grid-cols-2 gap-x-5">
              <div className="my-2 rounded-full border px-5 text-center">
                GCP
              </div>
              <div className="my-2 rounded-full border px-5 text-center">
                AWS
              </div>
              <div className="my-2 rounded-full border px-5 text-center">
                Azure
              </div>
              <div className="my-2 rounded-full border px-5 text-center">
                Vercel
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }: { locale: any }) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      allPostsData,
    },
  };
};
