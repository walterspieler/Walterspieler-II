"use client";

import {
  faCode,
  faTerminal,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import { useI18n } from "lib/locales/client";

export default function Skills() {
  const t = useI18n();

  return (
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
          <div className="my-2 rounded-full border px-5 text-center">Figma</div>
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
          <div className="my-2 rounded-full border px-5 text-center">React</div>
          <div className="my-2 rounded-full border px-5 text-center">Vue</div>
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
            <FontAwesomeIcon icon={faTerminal} className="text-matt-green" />
          </motion.div>
        </div>
        <p className="font-thin">{t("GLOBAL.SKILLS.DEVOPS")}</p>
        <div className="mt-5 grid grid-cols-2 gap-x-5">
          <div className="my-2 rounded-full border px-5 text-center">GCP</div>
          <div className="my-2 rounded-full border px-5 text-center">AWS</div>
          <div className="my-2 rounded-full border px-5 text-center">Azure</div>
          <div className="my-2 rounded-full border px-5 text-center">
            Vercel
          </div>
        </div>
      </div>
    </div>
  );
}
