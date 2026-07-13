"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiSearch, FiShoppingCart, FiX } from "react-icons/fi";
import { COMPANY_INFO, NAV_LINKS } from "@/constants";
import NavLink from "./NavLink";
import ResourcesDropdown from "./ResourcesDropdown";
import MobileMenu from "./MobileMenu";

export default function Navbar({ cartCount = 0 }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);
  const navRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever navigation happens
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [searchOpen]);

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape" && searchOpen) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [searchOpen]);

  return (
    <header
      className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4"
      ref={navRef}
    >
      <motion.nav
        aria-label="Main navigation"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`relative mx-auto max-w-7xl rounded-2xl border backdrop-blur-xl backdrop-saturate-150 transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled
            ? "border-white/50 bg-white/80 shadow-[0_8px_40px_rgba(0,0,0,0.12)] dark:border-white/15 dark:bg-neutral-950/80"
            : "border-white/30 bg-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-neutral-950/60"
        }`}
      >
        <div className="flex h-20 items-center justify-between gap-2 px-3 sm:h-[5rem] sm:gap-4 sm:px-6 lg:h-[5.5rem]">
          {/* Brand */}
          <Link
            href="/"
            aria-label={`${COMPANY_INFO.name} home`}
            className="group flex shrink-0 items-center gap-2 sm:gap-3 outline-offset-4"
          >
            <div className="relative shrink-0">
              <Image
                src={COMPANY_INFO.logo}
                alt=""
                width={120}
                height={140}
                priority
                className="h-10 w-auto rounded-lg object-contain transition-all duration-300 sm:h-14 lg:h-[4.5rem]"
              />
            </div>
            <span className="text-base font-bold tracking-tight text-[#082d4a] transition-colors duration-300 hover:text-[#0a4068] active:text-[#061e33] sm:text-lg lg:text-xl">
              {COMPANY_INFO.name}
            </span>
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {link.children ? (
                  <ResourcesDropdown label={link.label} items={link.children} />
                ) : (
                  <NavLink href={link.href} label={link.label} />
                )}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Desktop Search - Hidden on mobile */}
            <div ref={searchContainerRef} className="relative hidden lg:block">
              <AnimatePresence mode="wait">
                {searchOpen ? (
                  <motion.form
                    key="search-open"
                    initial={{ width: 40, opacity: 0, scale: 0.95 }}
                    animate={{ width: 280, opacity: 1, scale: 1 }}
                    exit={{ width: 40, opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    onSubmit={handleSearch}
                    className="relative"
                  >
                    <div className="flex items-center gap-2 rounded-full border-2 border-[#082d4a]/20 bg-white/80 px-4 py-2 backdrop-blur-sm transition-all duration-300 focus-within:border-[#082d4a] focus-within:bg-white focus-within:shadow-lg dark:border-white/20 dark:bg-neutral-900/80 dark:focus-within:border-[#082d4a] dark:focus-within:bg-neutral-900">
                      <FiSearch
                        size={18}
                        className="shrink-0 text-[#082d4a]"
                        aria-hidden="true"
                      />
                      <input
                        ref={searchInputRef}
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search products..."
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
                          type="button"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setSearchQuery("")}
                          className="flex h-5 w-5 items-center justify-center rounded-full bg-[#082d4a]/10 text-[#082d4a] transition-colors hover:bg-[#082d4a]/20"
                        >
                          <FiX size={12} />
                        </motion.button>
                      )}
                    </div>
                  </motion.form>
                ) : (
                  <motion.button
                    key="search-closed"
                    initial={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    type="button"
                    onClick={() => setSearchOpen(true)}
                    aria-label="Open search"
                    className="group relative flex h-10 w-10 items-center justify-center rounded-full text-[#082d4a]/70 transition-all duration-300 hover:bg-[#082d4a]/10 hover:text-[#082d4a] dark:text-white/70 dark:hover:text-white"
                  >
                    <FiSearch size={20} aria-hidden="true" />
                    <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#082d4a] px-2 py-1 text-[10px] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      Ctrl + K
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Search Button - Visible only on mobile/tablet */}
            <motion.button
              type="button"
              aria-label="Search"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setMobileOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#082d4a]/70 transition-all duration-300 hover:bg-[#082d4a]/10 hover:text-[#082d4a] sm:h-10 sm:w-10 lg:hidden dark:text-white/70 dark:hover:text-white"
            >
              <FiSearch size={18} aria-hidden="true" />
            </motion.button>

            {/* Cart Button */}
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/cart"
                aria-label={`Cart, ${cartCount} item${cartCount === 1 ? "" : "s"}`}
                className="relative flex h-9 w-9 items-center justify-center rounded-full text-[#082d4a]/70 transition-all duration-300 hover:bg-[#082d4a]/10 hover:text-[#082d4a] sm:h-10 sm:w-10 sm:gap-2 sm:px-3 dark:text-white/70 dark:hover:text-white"
              >
                <span className="relative">
                  <FiShoppingCart
                    size={18}
                    aria-hidden="true"
                    className="sm:size-5"
                  />
                  <AnimatePresence mode="popLayout">
                    {cartCount > 0 && (
                      <motion.span
                        key={cartCount}
                        initial={{ scale: 0.4, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.4, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 25,
                        }}
                        aria-hidden="true"
                        className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#082d4a] px-1 text-[10px] font-bold leading-none text-white shadow-md shadow-[#082d4a]/40"
                      >
                        {cartCount}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
                <span className="hidden text-sm font-medium md:inline">
                  Cart
                </span>
              </Link>
            </motion.div>

            {/* Hamburger — tablet & mobile only */}
            <motion.button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#082d4a] transition-all duration-300 hover:bg-[#082d4a]/10 sm:h-10 sm:w-10 lg:hidden dark:text-white"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        cartCount={cartCount}
      />
    </header>
  );
}
