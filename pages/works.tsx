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
      <div className="m-5 grid grid-cols-2">
        <p className="mb-8 text-2xl font-bold">
          I love to craft functional solutions for unique problems. These are
          some of my latest projects.
        </p>
      </div>
      <div className="m-5 grid gap-14">
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
        </ul>
      </div>
    </Layout>
  );
}
