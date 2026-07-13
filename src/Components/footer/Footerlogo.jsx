"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { COMPANY_INFO } from "@/constants";

export default function FooterLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="space-y-3"
    >
      <Link href="/" className="inline-block md:inline-block">
        <motion.h2
          className="text-3xl font-bold text-black dark:text-white"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          {COMPANY_INFO.logoText}
        </motion.h2>
      </Link>
      <p className="text-sm text-white dark:text-white max-w-xs mx-auto md:mx-0">
        {COMPANY_INFO.tagline}
      </p>
      <p className="text-sm text-white dark:text-white">
        {COMPANY_INFO.address}
      </p>
    </motion.div>
  );
}
