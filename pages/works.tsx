import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ProjectButton from "components/projectButton";

import Layout from "../components/layout";

export default function Works() {
  const { t: tw } = useTranslation("works");
  return (
    <Layout>
      <Head>
        <meta name="title" content={tw("WORKS.TITLE") || ""} />
        <title>{tw("WORKS.TITLE")}</title>
        <meta name="description" content={tw("WORKS.INTRO") || ""} />
      </Head>
      <div className="mb-20 mt-10 grid grid-cols-2">
        <p className="mx-20 text-2xl font-bold">{tw("WORKS.INTRO")}</p>
      </div>
      <div className="m-5 mb-0 grid gap-x-14">
        <ul>
          <li className="pb-5">
            <ProjectButton
              title={"Etxea Capital - Plateforme de gestion des biens / fonds"}
              year={2023}
              link={"https://www.etxeacapital.fr/"}
            />
          </li>
          <li className="pb-5">
            <ProjectButton
              title={"Etxea Capital - Vitrine"}
              year={2023}
              link={"https://www.etxeacapital.fr/"}
            />
          </li>
          <li className="pb-5">
            <ProjectButton title={"My Lol Marks - Riot Games"} year={2022} />
          </li>
          <li className="pb-5">
            <ProjectButton
              title={"Thematics Asset Management"}
              year={2022}
              link={"https://thematics-am.com/"}
            />
          </li>
          <li className="pb-5">
            <ProjectButton
              title={"RedBlue"}
              year={2022}
              link={"https://redblue.fr/"}
            />
          </li>
          <li className="pb-5">
            <ProjectButton
              title={"Blacksmith"}
              year={"since 2019"}
              link={"https://blacksmith.studio/"}
            />
          </li>
          <li>
            <ProjectButton
              title={"Fundee by Turgot Asset Management"}
              year={"2015-2019"}
              link={"https://fundee.fr/"}
            />
          </li>
        </ul>
        <p className="mt-5 text-sm text-gray-400">{tw("WORKS.NOTE")}</p>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }: { locale: any }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "works"])),
    },
  };
};
