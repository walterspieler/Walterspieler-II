import { useState } from "react";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectButton({
  title,
  year,
  link,
}: {
  title: string;
  year: number;
  link: string;
}) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <Link
      href={{
        pathname: link,
      }}
      target="_blank"
    >
      <motion.button
        initial={{ scale: 1, y: 0 }}
        whileHover={{ scale: 1.01, y: 5 }}
        onHoverStart={() => {
          setX(10);
          setY(-10);
        }}
        onHoverEnd={() => {
          setX(0);
          setY(0);
        }}
        whileTap={{ scale: 0.99, y: 5 }}
        className="grid w-full grid-cols-3 border-t p-3 font-bold"
      >
        <h2 className="text-left font-bold">{title}</h2>
        <div>{year}</div>
        <motion.div
          animate={{ x, y }}
          className="flex items-center justify-end"
        >
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="text-blue-400"
          />
        </motion.div>
      </motion.button>
    </Link>
  );
}
