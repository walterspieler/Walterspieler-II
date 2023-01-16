import Head from "next/head";

import ProjectButton from "components/projectButton";

import Layout from "../components/layout";

export default function Works() {
  return (
    <Layout>
      <Head>
        <meta
          name="title"
          content="Work from a Fullstack Developer | Matthieu Walterspieler"
        />
        <meta
          name="description"
          content="I love to craft functional solutions for unique problems. These are
          some of my latest projects."
        />
      </Head>
      <div className="mb-20 mt-10 grid grid-cols-2">
        <p className="text-2xl font-bold">
          I love to craft functional solutions for unique problems. These are
          some of my latest projects.
        </p>
      </div>
      <div className="m-5 mb-0 grid gap-x-14">
        <ul>
          <li className="pb-5">
            <ProjectButton
              title={"My Lol Marks - Riot Games"}
              year={2022}
              link={"https://www.mylolmarks.com/"}
            />
          </li>
          <li className="pb-5">
            <ProjectButton
              title={"Thematics Asset Management"}
              year={2022}
              link={"https://thematics-am.fr/"}
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
        <p className="mt-5 text-sm text-gray-400">
          Note: The list is not intended to be exhaustive.
        </p>
      </div>
    </Layout>
  );
}
