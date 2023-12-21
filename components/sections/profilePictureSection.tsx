"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfilePictureSection() {
  return (
    <motion.section
      whileHover={{ rotate: 1, y: 5, scale: 1.05 }}
      className="relative mb-5 max-h-[20rem] w-full min-w-[15rem]"
    >
      <div className="absolute top-5 left-5 h-full w-full bg-black"></div>
      <Image
        src={"/images/matt_low.jpg"}
        alt="Matt"
        className="min-h-full min-w-full object-cover object-top"
        fill
      />
    </motion.section>
  );
}
