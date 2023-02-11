import { useState } from "react";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ExternalLinkPDF({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  const [, setX] = useState(0);
  const [, setY] = useState(0);

  return (
    <div className="font-bold">
      <Link
        href={{
          pathname: link,
        }}
      >
        <motion.button
          initial={{ scale: 1, y: 0 }}
          whileHover={{ scale: 1.01, y: 5 }}
          onHoverStart={() => {
            setX(5);
            setY(-5);
          }}
          onHoverEnd={() => {
            setX(0);
            setY(0);
          }}
          whileTap={{ scale: 0.99, y: 5 }}
          className="w-full py-3"
        >
          <div className="mr-1 text-left text-xs font-thin">
            <FontAwesomeIcon
              icon={faArrowUp}
              className="rotate-45 text-blue-400"
            />{" "}
            <span className="font-bold">{text}</span>
            <div className="">{link}</div>
          </div>
        </motion.button>
      </Link>
    </div>
  );
}
