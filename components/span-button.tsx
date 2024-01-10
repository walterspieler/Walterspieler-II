"use client";

import { ReactElement } from "react";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SpanButton({
  children,
  href,
}: {
  children: ReactElement;
  href: string;
}) {
  return (
    <motion.span whileHover={{ scale: 1.01, y: 2 }}>
      <Link
        href={{
          pathname: href,
        }}
        className="font-bold text-matt-green underline underline-offset-4"
      >
        {children}
      </Link>
    </motion.span>
  );
}
