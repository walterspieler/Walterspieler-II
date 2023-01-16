import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Button({ text, link }: { text: string; link: string }) {
  const [rotate, setRotate] = useState(0);

  return (
    <div className="flex-1 m-5 border-t font-bold">
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
          className="flex justify-between items-center w-full p-3"
        >
          <div>{text}</div>
          <motion.div animate={{ rotate }}>
            <FontAwesomeIcon
              icon={faAnglesRight}
              className="text-blue-400 rotate-45"
            />
          </motion.div>
        </motion.button>
      </Link>
    </div>
  );
}
