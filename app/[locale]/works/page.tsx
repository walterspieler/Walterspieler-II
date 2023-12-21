"use client";

import ProjectButton from "components/projectButton";
import { useI18n } from "lib/locales/client";

export default function Works() {
  const t = useI18n();
  return (
    <>
      <div className="mb-20 mt-10 grid grid-cols-2">
        <p className="mx-20 text-2xl font-bold">{t("WORKS.INTRO")}</p>
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
        <p className="mt-5 text-sm text-gray-400">{t("WORKS.NOTE")}</p>
      </div>
    </>
  );
}
