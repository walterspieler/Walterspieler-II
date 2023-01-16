import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faTerminal,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import ExternalLink from "components/externalLink";
import Head from "next/head";

export default function Home({}) {
  return (
    <Layout>
      <Head>
        <meta
          name="title"
          content="Fullstack Developer | Matthieu Walterspieler"
        />
        <meta
          name="description"
          content="Born in 1991 in France. I'm a fullstack developer based in Paris. I
            have developed platforms and website mainly for financial and real
            estate companies. I also worked for famous video games developers
            and esports tournament organizers."
        />
      </Head>
      <div className="grid md:grid-cols-3 md:gap-14 mt-5 md:mb-20">
        <motion.section
          whileHover={{ rotate: 1, y: 5, scale: 1.05 }}
          className="w-full relative min-h-[15rem] min-w-[15rem] mb-5"
        >
          <div className="absolute top-5 left-5 w-full h-full bg-black"></div>
          <Image
            src={"/images/matt.jpg"}
            alt="Matt"
            className="object-cover grayscale object-top min-h-full min-w-full"
            fill
          />
        </motion.section>
        <section className="col-span-2 m-5">
          <h1 className="text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] leading-none mb-5 relative">
            <span className="font-bold md:text-5xl">Matthieu</span> <br />
            <span className="font-black z-10">WALTERSPIELER SALVI</span>
          </h1>
          <p className="font-thin">
            Born in 1991 in France. I'm a fullstack developer based in Paris. I
            have developed platforms and website mainly for financial and real
            estate companies. I also worked for famous video games developers
            and esports tournament organizers.
          </p>
          <p className="font-thin mt-1">
            Some of my latest projects are available in the Works section.
          </p>
          <div className="flex justify-start items-center flex-wrap">
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
          </div>
        </section>
      </div>
      <div className="mx-5 lg:mx-24">
        <div className="grid grid-cols-2">
          <p className="mb-8 text-2xl font-bold">
            I love to craft functional solutions for unique problems. These are
            some skills I've picked up over my career.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 lg:gap-14">
          <div className="mb-8">
            <div className="border-b mb-5 flex justify-between items-center">
              <h3 className="font-black text-xl mb-3">UI/UX Design</h3>
              <motion.div
                animate={{ rotate: [-5, 10, -5] }}
                transition={{ repeat: Infinity }}
              >
                <FontAwesomeIcon
                  icon={faWandMagicSparkles}
                  className="text-blue-400"
                />
              </motion.div>
            </div>
            <p className="font-thin">
              I always strive to design memorable experiences that are
              aesthetically appealing, functional and intuitive. Whether it's
              inspiring marketing websites, convincing e-commerce sites or apps
              that are beneficial to users.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-x-5">
              <div className="rounded-full border text-center px-5 my-2">
                Figma
              </div>
              <div className="rounded-full border text-center px-5 my-2">
                Photoshop
              </div>
              <div className="rounded-full border text-center px-5 my-2">
                Illustrator
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="border-b mb-5 flex justify-between items-center">
              <h3 className="font-black text-xl mb-3">Web development</h3>
              <motion.div
                animate={{ scale: [1.1, 1, 1.1], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity }}
              >
                <FontAwesomeIcon icon={faCode} className="text-blue-400" />
              </motion.div>
            </div>
            <p className="font-thin">
              I believe fullstack web development can be more diverse and
              inspiring. With a mission to present the possibilities of web
              design, I am pursuing new ways and solutions iterating through
              experiments and thoughts.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-x-5">
              <div className="rounded-full border text-center px-5 my-2">
                HTML/CSS
              </div>
              <div className="rounded-full border text-center px-5 my-2">
                Typescript
              </div>
              <div className="rounded-full border text-center px-5 my-2">
                React
              </div>
              <div className="rounded-full border text-center px-5 my-2">
                Vue
              </div>
              <div className="rounded-full border text-center px-5 my-2">
                Angular
              </div>
              <div className="rounded-full border text-center px-5 my-2">
                Nestjs
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="border-b mb-5 flex justify-between items-center">
              <h3 className="font-black text-xl mb-3">Cloud engineering</h3>
              <motion.div
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, type: "tween" }}
              >
                <FontAwesomeIcon icon={faTerminal} className="text-blue-400" />
              </motion.div>
            </div>
            <p className="font-thin">
              I'm convinced that a successful project is a project deployed
              depending on its needs with the right architecture and sizing.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-x-5">
              <div className="rounded-full border text-center px-5 my-2">
                GCP
              </div>
              <div className="rounded-full border text-center px-5 my-2">
                AWS
              </div>
              <div className="rounded-full border text-center px-5 my-2">
                Azure
              </div>
              <div className="rounded-full border text-center px-5 my-2">
                Vercel
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
