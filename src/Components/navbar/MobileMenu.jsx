"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiSearch, FiShoppingCart, FiX } from "react-icons/fi";
import { NAV_LINKS } from "@/constants";
import SearchSuggestions from "./SearchSuggestions";

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 200, damping: 24, mass: 0.8 },
  },
};

export default function MobileMenu({
  open,
  onClose,
  cartCount = 0,
  focusSearch = false,
}) {
  const [expanded, setExpanded] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const closeButtonRef = useRef(null);
  const searchInputRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  // Only portal once we're on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll (both axes) while the drawer is open
  useEffect(() => {
    if (!open) return;
    const { overflow, overflowX } = document.body.style;
    document.body.style.overflow = "hidden";
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.overflowX = overflowX;
    };
  }, [open]);

  // Focus search input when mobile menu opens with search intent
  useEffect(() => {
    if (open && focusSearch && searchInputRef.current) {
      const timer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 420);
      return () => clearTimeout(timer);
    }
  }, [open, focusSearch]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      onClose();
      setSearchQuery("");
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer */}
          <motion.aside
            key="mobile-menu-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            onAnimationComplete={() => closeButtonRef.current?.focus()}
            className="fixed inset-y-0 right-0 z-[120] flex w-[85%] max-w-sm flex-col overflow-x-hidden overflow-y-auto overscroll-contain rounded-l-3xl border-l border-white/40 bg-white/95 shadow-[-20px_0_60px_rgba(0,0,0,0.2)] backdrop-blur-lg dark:border-white/10 dark:bg-neutral-950/95 lg:hidden will-change-transform"
          >
            {/* Header with Close Button Only */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center justify-end border-b border-neutral-200/60 px-5 py-4 dark:border-white/10"
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[#082d4a] transition-colors duration-200 hover:bg-[#082d4a]/10 active:scale-95 dark:text-neutral-300 dark:hover:bg-white/10"
              >
                <FiX size={22} />
              </button>
            </motion.div>

            {/* Mobile Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="px-5 pt-4"
            >
              <form onSubmit={handleSearch}>
                <div className="relative flex items-center gap-3 rounded-xl border-2 border-[#082d4a]/10 bg-[#082d4a]/[0.03] px-4 py-3 transition-all duration-300 focus-within:border-[#082d4a] focus-within:bg-[#082d4a]/[0.06] focus-within:shadow-lg dark:border-white/10 dark:bg-white/5 dark:focus-within:border-[#082d4a] dark:focus-within:bg-white/10">
                  <FiSearch
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 text-[#082d4a] dark:text-[#4a9eff]"
                  />
                  <input
                    ref={searchInputRef}
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    aria-label="Search products"
                    className="w-full bg-transparent text-sm font-medium text-[#082d4a] outline-none placeholder:text-[#082d4a]/40 [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden [&::-ms-clear]:hidden [&::-ms-reveal]:hidden"
                    style={{
                      outline: "none",
                      border: "none",
                      boxShadow: "none",
                      WebkitAppearance: "none",
                      WebkitBoxShadow: "none",
                      MozBoxShadow: "none",
                    }}
                  />
                  {searchQuery && (
                    <motion.button
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-[#082d4a]/10 text-[#082d4a] transition-colors hover:bg-[#082d4a]/20"
                    >
                      <FiX size={12} />
                    </motion.button>
                  )}
                </div>
              </form>

              <AnimatePresence>
                {searchQuery.trim() && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-2 overflow-hidden rounded-xl border border-[#082d4a]/10 bg-white dark:border-white/10 dark:bg-neutral-900"
                  >
                    <SearchSuggestions
                      query={searchQuery}
                      onNavigate={() => {
                        setSearchQuery("");
                        onClose();
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Navigation Links */}
            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="flex-1 space-y-1 px-3 py-5"
            >
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <motion.li key={link.label} variants={itemVariants}>
                    <button
                      type="button"
                      aria-expanded={expanded === link.label}
                      onClick={() =>
                        setExpanded(expanded === link.label ? null : link.label)
                      }
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-[#082d4a] transition-all duration-300 hover:bg-[#082d4a]/10 dark:text-neutral-200 dark:hover:bg-white/10"
                    >
                      {link.label}
                      <motion.span
                        aria-hidden="true"
                        animate={{ rotate: expanded === link.label ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[#082d4a]/60"
                      >
                        <FiChevronDown size={18} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {expanded === link.label && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.5,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          className="overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={onClose}
                                aria-current={
                                  isActive(child.href) ? "page" : undefined
                                }
                                className={`ml-4 flex items-center border-l-2 py-3 pl-5 pr-4 text-sm transition-all duration-300 ${
                                  isActive(child.href)
                                    ? "border-[#082d4a] bg-[#082d4a]/5 font-semibold text-[#082d4a] dark:border-[#4a9eff] dark:text-[#4a9eff]"
                                    : "border-neutral-200 text-neutral-600 hover:border-[#082d4a]/50 hover:bg-[#082d4a]/5 hover:text-[#082d4a] dark:border-white/10 dark:text-neutral-300 dark:hover:text-white"
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ) : (
                  <motion.li key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={`block rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-300 ${
                        isActive(link.href)
                          ? "bg-[#082d4a]/10 font-semibold text-[#082d4a] dark:text-[#4a9eff]"
                          : "text-[#082d4a]/80 hover:bg-[#082d4a]/10 hover:text-[#082d4a] dark:text-neutral-200 dark:hover:bg-white/10 dark:hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ),
              )}
            </motion.ul>

            {/* Cart Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-t border-neutral-200/60 p-5 dark:border-white/10"
            >
              <Link
                href="/cart"
                onClick={onClose}
                className="flex items-center justify-center gap-2.5 rounded-xl bg-[#082d4a] px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#082d4a]/25 transition-all duration-300 hover:bg-[#0a4068] hover:shadow-xl hover:shadow-[#082d4a]/30 active:scale-[0.98]"
              >
                <FiShoppingCart size={18} aria-hidden="true" />
                Cart ({cartCount})
              </Link>
            </motion.div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
