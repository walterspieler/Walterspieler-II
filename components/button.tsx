import { useState } from "react";

import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Button({ text, link }: { text: string; link: string }) {
  const [rotate, setRotate] = useState(0);

  return (
    <div className="m-2 flex-1 border-t font-bold md:m-5">
      <Link
        href={{
          pathname: link,
        }}
      >
        <motion.button
          initial={{ scale: 1, y: 0 }}
          whileHover={{ scale: 1.01, y: 5 }}
          onHoverStart={() => setRotate(45)}
          onHoverEnd={() => setRotate(0)}
          whileTap={{ scale: 0.99, y: 5 }}
          className="flex w-full items-center justify-between p-3"
        >
          <div className="text-sm md:text-base">{text}</div>
          <motion.div animate={{ rotate }}>
            <FontAwesomeIcon
              icon={faAnglesRight}
              className="rotate-45 text-matt-green"
            />
          </motion.div>
        </motion.button>
      </Link>
    </div>
  );
}
