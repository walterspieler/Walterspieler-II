"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import ExternalLinkPDF from "components/externalLinkPDF";
import { useI18n } from "lib/locales/client";

export default function Resume() {
  const t = useI18n();

  return (
    <div className="bg-gray-100 py-16 print:p-0">
      <div className="m-auto grid max-w-[1200px] grid-cols-5 gap-1 bg-white p-8 shadow-xl print:p-0 print:shadow-none">
        <motion.section className="relative mb-5 aspect-square h-[10rem] w-[10rem]">
          <div className="relative left-5 top-5 h-full w-full bg-black"></div>
          <Image
            src={"/images/matt_low.jpg"}
            alt="Matt"
            className="min-h-full min-w-full object-cover object-top"
            fill
          />
          <section className="mt-5 pt-5">
            <h2 className="text-xl font-bold">Coordonnées</h2>
            <div className="mt-2">
              <h3 className="text-xs text-gray-400">
                12 rue des Pénitentes <br /> 59800 Lille FRANCE
              </h3>
            </div>
            <div className="mt-2 pt-2">
              <h3 className="text-xs text-gray-400">+33642763125</h3>
              <h3 className="text-xs text-gray-400">
                matthieu@walterspieler.com
              </h3>
            </div>
          </section>
          <section className="mt-5 border-t pt-3">
            <h2 className="text-xl font-bold">Compétences principales</h2>
            <ul className="mt-2">
              <li className="mb-1 text-xs text-gray-400">
                Developpement Fullstack
              </li>
              <li className="mb-1 text-xs text-gray-400">DevOps</li>
              <li className="mb-1 text-xs text-gray-400">MongoDB</li>
              <li className="mb-1 text-xs text-gray-400">Postgre</li>
              <li className="mb-1 text-xs text-gray-400">NestJS</li>
              <li className="mb-1 text-xs text-gray-400">Angular</li>
              <li className="mb-1 text-xs text-gray-400">Microservices</li>
              <li className="mb-1 text-xs text-gray-400">
                Google Cloud Platform (GCP)
              </li>
              <li className="mb-1 text-xs text-gray-400">AWS</li>
              <li className="mb-1 text-xs text-gray-400">WebSocket</li>
              <li className="mb-1 text-xs text-gray-400">Next.js</li>
            </ul>
          </section>
          <section className="mt-5 border-t pt-3">
            <h2 className="text-xl font-bold">Langues</h2>
            <div className="mt-2">
              <h3 className="text-xs text-gray-400">
                Anglais (Full professional)
              </h3>
              <h3 className="text-xs text-gray-400">Français (Natif)</h3>
            </div>
          </section>
          <section className="mt-5 border-t pt-3">
            <h2 className="text-xl font-bold">Certifications</h2>
            <div className="mt-2">
              <h3 className="mb-2 text-xs text-gray-400">
                CertificationsES2015: The Shape of JavaScript to Come
              </h3>
              <h3 className="mb-2 text-xs text-gray-400 ">
                The Magical Marvels of MongoDB M201
              </h3>
              <h3 className="mb-2 text-xs text-gray-400 ">
                MongoDB Performance
              </h3>
              <h3 className="mb-2 text-xs text-gray-400 ">
                JavaScript Best Practices
              </h3>
              <h3 className="mb-2 text-xs text-gray-400 ">
                Accelerating Through Angular
              </h3>
            </div>
            <div className="mt-5 flex flex-wrap items-start justify-start border-t">
              <ExternalLinkPDF
                text={"Twitter"}
                link={"twitter.com/mwalterspieler"}
              />
              <ExternalLinkPDF
                text={"Github"}
                link={"github.com/walterspieler"}
              />
              <ExternalLinkPDF
                text={"Stack Overflow"}
                link={"stackoverflow.com/users/3918612"}
              />
              <ExternalLinkPDF
                text={"Linkedin"}
                link={"linkedin.com/in/mattwalters3/"}
              />
              <ExternalLinkPDF
                text={"Medium"}
                link={"medium.com/@mwalterspieler_31762"}
              />
            </div>
          </section>
        </motion.section>
        <section className="col-span-4 my-3">
          <h1 className="relative text-[3rem] leading-none">
            <span className="text-5xl font-bold">Matthieu </span>
            <span className="z-10 font-black">WALTERSPIELER</span>
          </h1>
          <h2 className="mb-5 text-4xl font-thin text-gray-500">
            Senior Fullstack Developer || CTO
          </h2>
          <p className="text-xs font-thin text-black">{t("GLOBAL.INTRO")}</p>
          <p className="mt-2 text-sm">
            Mes derniers travaux sont consultable sur mon site{" "}
            <motion.span whileHover={{ scale: 1.01, y: 2 }}>
              <Link
                href={{
                  pathname: "/works",
                }}
                className="font-bold text-matt-green underline underline-offset-4"
              >
                https://walterspieler.com/works
              </Link>
            </motion.span>
          </p>
          <section className="pt-3">
            <h2 className="text-2xl font-black">Expérience</h2>
            <div className="mt-3">
              <h3 className="text-xl font-bold">Blacksmith</h3>
              <div className="flex items-center">
                <h4 className="mr-1">Chief Technology Officer • </h4>
                <p className="text-sm text-gray-500">
                  {" "}
                  Paris, Île-de-France, France • décembre 2019 - Present (3 ans
                  2 mois)
                </p>
              </div>
              <p className="mb-2 text-xs font-thin">
                J'ai commencé comme Lead Developer et suis devenu rapidement
                CTO. J'ai dirigé plusieurs projets majeurs pour des clients tels
                que Riot Games, Kering et APHP. En tant que CTO, j'ai recruté et
                géré des équipes de développeurs fullstack, pris des décisions
                concernant les choix technologiques et les normes de codage.
                J'ai également créé des architectures AWS, intégré des maquettes
                et développé des APIs en garantissant la sécurité des projets.
                J'ai relu des Pull Requests de code pour maintenir les normes de
                qualité. J'ai contribué à la réalisation de projets
                exceptionnels pour nos clients en apportant mon expertise
                technique.
              </p>
              <div className="flex">
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Nestjs
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Redis
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Next.js
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  NodeJS
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Typescript
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  AWS
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  React Native
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Socket.IO
                </div>
              </div>
            </div>

            <div className="mt-5 border-t pt-5">
              <h3 className="text-xl font-bold">Thematics Asset Management</h3>
              <div className="flex items-center">
                <h4 className="mr-1">
                  Fullstack Lead Developer - Mission Freelance •
                </h4>
                <p className="text-sm text-gray-500">
                  Paris, Île-de-France, France • juin 2022 - octobre 2022 (5
                  mois)
                </p>
              </div>
              <p className="mb-2 text-xs font-thin">
                En tant que développeur, j'ai mené à bien une mission de grande
                envergure pour Thematics AM, une filiale de Natixis, en
                effectuant une refonte complète de leur site web. Pour ce faire,
                j'ai travaillé sur différents aspects tels que le Webdesign,
                l'intégration du design, la dynamisation avec les APIs de
                données des fonds Natixis, la mise en place d'un CMS headless
                Strapi et le déploiement sur le Cloud de Microsoft Azure. Le but
                était d'optimiser le site pour les moteurs de recherche et
                d'offrir une expérience utilisateur de qualité.
              </p>
              <div className="flex">
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Next.js
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Strapi
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Vercel
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Figma
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Typescript
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Node.js
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Azure
                </div>
              </div>
            </div>
            <div className="mt-5 border-t pt-5">
              <h3 className="text-xl font-bold">REDBLUE</h3>
              <div className="flex items-center">
                <h4 className="mr-1">
                  Fullstack Lead Developer - Mission Freelance •
                </h4>
                <p className="text-sm text-gray-500 print:mb-1">
                  Paris, Île-de-France, France • février 2022 - mai 2022 (4
                  mois)
                </p>
              </div>
              <p className="mb-2 text-xs font-thin">
                En tant que responsable de la refonte du site internet de
                RedBlue, j'ai apporté une solution complète comprenant une
                refonte du WebDesign pour une meilleure expérience utilisateur,
                une intégration front-end avec Next.js pour une meilleure
                performance et visibilité sur les moteurs de recherche, la
                dynamisation avec des API pour une expérience plus personnalisée
                et enfin la mise en place d'un CMS headless Strapi pour une
                gestion efficace des contenus.
              </p>
              <div className="flex">
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Next.js
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Strapi
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Vercel
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Figma
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Typescript
                </div>
              </div>
            </div>
            <div className="mt-5 border-t pt-5">
              <h3 className="text-xl font-bold">Turgot Asset Management</h3>
              <div className="flex items-center">
                <h4 className="mr-1">Fullstack Lead Developer | CTO • </h4>
                <p className="text-sm text-gray-500 print:mb-1">
                  Paris, Île-de-France, France • janvier 2015 - janvier 2020 (5
                  ans 1 mois)
                </p>
              </div>
              <p className="text-xs font-thin">
                En tant que leader technique, j'ai dirigé la conception et le
                développement de l'outil d'optimisation de revenu en fonction du
                risque SRRI en utilisant des technologies modernes telles que
                NestJS, un framework Node.js pour la création de microservices,
                Angular pour l'interface utilisateur, et Google Cloud Platform
                pour l'hébergement et le déploiement. Nous avons conçu une
                architecture de microservices évolutifs pour garantir la
                flexibilité et la fiabilité du système, tout en exploitant les
                fonctionnalités de sécurité de Google Cloud Platform pour
                protéger les données sensibles de nos clients. Le développement
                a été mené en suivant les pratiques de développement Agile pour
                assurer la qualité du code et la rapidité de livraison.
              </p>
              <ul className="my-3 list-disc pl-5 text-xs font-thin">
                <li>Architecture d'APIs (REST et GraphQL) en microservices.</li>
                <li>Consommation d'API via les différentes webapp</li>
                <li>
                  Connexion avec les web services partenaires pour officier
                  arbitrage en direct.
                </li>
                <li>
                  Récuperation et Scrap des données d'assurance-vie des clients
                  de la plateforme (pour définir les optimisations possibles)
                </li>
                <li>
                  Mise en place d'algorythme d'optimisation (MonteCarlo...)
                </li>
                <li>
                  Mise en place d'une architecture en micro-service via
                  Kubernetes sur Google Cloud Platform
                </li>
              </ul>
              <div className="flex">
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Nestjs
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Google PUB/SUB MQTT
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Angular
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  NodeJS
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Typescript
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  MongoDB
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  GCP
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Kubernetes
                </div>
              </div>
            </div>
            <div className="mt-5 border-t pt-5">
              <h3 className="text-xl font-bold">VINGTROIS</h3>
              <div className="flex items-center">
                <h4 className="mr-1">Fullstack Developer • </h4>
                <p className="text-sm text-gray-500 print:mb-1">
                  Paris, Île-de-France, France • juin 2014 - juin 2015 (1 ans 1
                  mois)
                </p>
              </div>
              <p className="mb-3 text-xs font-thin">
                J'ai acquis de l'expérience en développement à la fois front-end
                et back-end, en utilisant des outils et langages tels que
                HTML5/CSS3 et Sass, JavaScript (y compris Ecmascript 2015,
                AngularJS), SQL/NOSQL (en particulier PostgreSQL et MongoDB),
                Node.js (avec Express et Nestjs) et divers outils de
                construction et gestionnaires de paquets (tels que Webpack,
                Grunt, Gulp, Browserify, NPM et Yarn). De plus, j'ai mis en
                place de la conteneurisation et du déploiement, en particulier
                avec Docker et Kubernetes, et j'ai déployé des applications sur
                Google Cloud Platform (GCP) en utilisant GKE.
              </p>
              <div className="flex">
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Express
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Sass
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  AngularJS
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  NodeJS
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Typescript
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  GCP
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Docker
                </div>
              </div>
            </div>
            <div className="mt-5 border-t pt-5">
              <h3 className="text-xl font-bold">Swap Service</h3>
              <div className="flex items-center">
                <h4 className="mr-1">Fullstack Developer / Designer • </h4>
                <p className="text-sm text-gray-500 print:mb-1">
                  Région de Nancy, France • avril 2013 - juin 2014 (1 an et 3
                  mois)
                </p>
              </div>
              <p className="mb-3 text-xs font-thin">
                Conception de la charte graphique de l'identité d'entreprise,
                des modèles de logiciels (UX, UI), développement front-end
                (HTML5/CSS, JavaScript, PHP).
              </p>
              <div className="flex">
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Adobe Suite
                </div>
                <div className="mr-3 rounded-full border px-3 py-1 text-xs font-thin leading-5">
                  Wordpress
                </div>
              </div>
            </div>
          </section>
          <section className="pt-5">
            <h2 className="text-2xl font-black">Formation</h2>
            <div className="mt-3">
              <h3 className="font-bold">
                Institut de l'Internet et du Multimédia (IIM)
                <span className="ml-3 text-xs font-thin text-gray-400">
                  Paris, Île-de-France, France
                </span>
              </h3>
              <h4 className="mb-5 text-xs font-thin print:mb-1">
                Mastère Manager de la communication numérique (Titre de niveau
                I), Communication numérique et média / multimédia · (2013 -
                2015)
              </h4>
            </div>
            <div className="mt-3 border-t pt-3">
              <h3 className="font-bold">
                Université de Lorraine
                <span className="ml-3 text-xs font-thin text-gray-400">
                  Nancy, Meurthe-et-Moselle, France
                </span>
              </h3>
              <h4 className="mb-5 text-xs font-thin print:mb-1">
                DUT Services et Réseaux de communication (SRC), Communication
                numérique et média / multimédia · (2011 - 2013)
              </h4>
            </div>
            <div className="mt-3 border-t pt-3">
              <h3 className="font-bold">
                Université Nancy 2{" "}
                <span className="ml-3 text-xs font-thin text-gray-400">
                  Nancy, Meurthe-et-Moselle, France
                </span>
              </h3>

              <h4 className="mb-5 text-xs font-thin print:mb-1">
                DUT Gestion des Entreprise et des Administration (GEA),
                Administration et gestion des affaires, général · (2010 - 2011)
              </h4>
            </div>
            <div className="mt-3 border-t pt-3">
              <h3 className="font-bold">
                Lycée Jeanne d'Arc
                <span className="ml-3 text-xs font-thin text-gray-400">
                  Nancy, Meurthe-et-Moselle, France
                </span>
              </h3>
              <h4 className="mb-5 text-xs font-thin print:mb-1">
                Bac ES (Économique et Social) - Mention Bien - (2010)
              </h4>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
