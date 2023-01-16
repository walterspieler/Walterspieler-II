import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function ExternalLink({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

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
          className="flex justify-start items-center w-full p-3"
        >
          <div className="mr-1 font-thin">{text}</div>
          <motion.div
            animate={{ x, y }}
            className="flex justify-end items-center"
          >
            <FontAwesomeIcon
              icon={faArrowUp}
              className="text-blue-400 rotate-45"
            />
          </motion.div>
        </motion.button>
      </Link>
    </div>
  );
}
