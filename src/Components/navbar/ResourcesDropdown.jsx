"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

export default function ResourcesDropdown({ label, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const pathname = usePathname();

  // Check if any child is active
  const isChildActive = items.some((item) =>
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href),
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
          isChildActive || isOpen
            ? "bg-[#082d4a]/10 text-[#082d4a] dark:bg-[#082d4a]/20 dark:text-[#4a9eff]"
            : "text-neutral-600 hover:bg-[#082d4a]/5 hover:text-[#082d4a] dark:text-neutral-300 dark:hover:text-white"
        }`}
      >
        <span className="relative z-10">{label}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="relative z-10"
        >
          <FiChevronDown size={16} />
        </motion.span>
        {isChildActive && !isOpen && (
          <motion.div
            layoutId="activeNavIndicator"
            className="absolute inset-0 rounded-lg bg-[#082d4a]/10 dark:bg-[#082d4a]/20"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 top-full z-50 mt-2 w-48 sm:w-56"
          >
            <div className="rounded-xl border border-gray-200 bg-white py-2 shadow-2xl dark:border-white/10 dark:bg-neutral-900/95">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 text-sm transition-all duration-200 hover:bg-[#082d4a]/5 dark:hover:bg-white/5 ${
                    (
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href)
                    )
                      ? "bg-[#082d4a]/10 text-[#082d4a] font-medium dark:bg-[#082d4a]/20 dark:text-[#4a9eff]"
                      : "text-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
