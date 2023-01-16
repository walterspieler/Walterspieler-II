import Layout from "../components/layout";
import ProjectButton from "components/projectButton";
import Head from "next/head";

export default function Works({}) {
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
      <div className="grid grid-cols-2 m-5">
        <p className="mb-8 text-2xl font-bold">
          I love to craft functional solutions for unique problems. These are
          some of my latest projects.
        </p>
      </div>
      <div className="grid gap-14 m-5">
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
