"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function NavLink({ href, label }) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className="relative px-4 py-2 text-sm font-medium transition-colors duration-300"
    >
      <span
        className={`relative z-10 ${
          isActive
            ? "text-[#082d4a] dark:text-[#4a9eff]"
            : "text-neutral-600 hover:text-[#082d4a] dark:text-neutral-300 dark:hover:text-white"
        }`}
      >
        {label}
      </span>
      {isActive && (
        <motion.div
          layoutId="activeNavIndicator"
          className="absolute inset-0 rounded-lg bg-[#082d4a]/10 dark:bg-[#082d4a]/20"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}
