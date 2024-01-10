import type { Metadata } from "next";

import ExternalLink from "components/externalLink";
import ProfilePictureSection from "components/sections/profilePictureSection";
import Skills from "components/skills";
import SpanButton from "components/span-button";
import { getCurrentLocale, getI18n } from "lib/locales/server";
import { getIntro } from "lib/posts";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: "Senior Fullstack Developer | Matthieu Walterspieler",
    description: t("GLOBAL.INTRO"),
  };
}

export default async function Home() {
  const t = await getI18n();
  const locale = getCurrentLocale();
  const intro = await getIntro(locale);

  return (
    <>
      <div className="mt-5 grid md:mb-20 md:grid-cols-3 md:gap-14">
        <ProfilePictureSection />
        <section className="col-span-2 m-5">
          <h1 className="relative mb-5 text-[2rem] leading-none md:text-[3rem] lg:text-[4rem] xl:text-[5rem]">
            <span className="font-bold md:text-5xl">Matthieu</span> <br />
            <span className="z-10 font-black">WALTERSPIELER SALVI</span>
          </h1>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: intro as string }}
          />
          <p className="mt-1 font-thin">
            <span className="mr-1">{t("GLOBAL.INTRO.P2")}</span>
            <SpanButton href="/works">
              <>{t("GLOBAL.INTRO.LINK")}</>
            </SpanButton>
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
        <div className="grid md:grid-cols-2">
          <p className="mb-8 text-2xl font-bold">{t("GLOBAL.SKILLS.INTRO")}</p>
        </div>
        <Skills />
      </div>
    </>
  );
}

/*
export const getStaticProps = async ({ locale }: { locale: any }) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      allPostsData,
    },
  };
};
*/
