"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import { BsSearchHeartFill } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa6";
import { COMPANY_INFO, NAV_LINKS } from "@/constants";
import { useCart } from "@/Components/providers/CartProvider";
import NavLink from "./NavLink";
import ResourcesDropdown from "./ResourcesDropdown";
import MobileMenu from "./MobileMenu";
import SearchSuggestions from "./SearchSuggestions";

export default function Navbar() {
  const { count: cartCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [openWithSearch, setOpenWithSearch] = useState(false);
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);
  const navRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close suggestions on outside click
  useEffect(() => {
    const onClickOutside = (e) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target)
      ) {
        setSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Close the drawer whenever navigation happens
  useEffect(() => {
    setMobileOpen(false);
    setOpenWithSearch(false);
    setSearchFocused(false);
    setSearchQuery("");
  }, [pathname]);

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setSearchFocused(false);
    }
  };

  // Handle mobile search icon click
  const handleMobileSearchClick = () => {
    setOpenWithSearch(true);
    setMobileOpen(true);
  };

  // Handle mobile menu close
  const handleMobileMenuClose = () => {
    setMobileOpen(false);
    setOpenWithSearch(false);
  };

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-[100] w-full [transform:translateZ(0)]"
        ref={navRef}
      >
        <motion.nav
          aria-label="Main navigation"
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={`relative w-full border-b backdrop-blur-xl backdrop-saturate-150 transition-[background-color,box-shadow,border-color] duration-300 ${
            scrolled
              ? "border-neutral-200/70 bg-white/90 shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-neutral-950/90"
              : "border-transparent bg-white/95 dark:bg-neutral-950/95"
          }`}
        >
          <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-2 px-3 sm:h-[68px] sm:gap-4 sm:px-6 lg:h-[72px] lg:px-8">
            {/* Brand */}
            <Link
              href="/"
              aria-label={`${COMPANY_INFO.name} home`}
              className="group flex shrink-0 items-center outline-offset-4"
            >
              <div className="relative flex h-9 shrink-0 items-center sm:h-10 lg:h-11">
                <Image
                  src={COMPANY_INFO.logo}
                  alt={`${COMPANY_INFO.name} logo`}
                  width={300}
                  height={50}
                  priority
                  className="h-full w-auto object-contain transition-all duration-300"
                />
              </div>
            </Link>

            {/* Desktop navigation */}
            <ul className="hidden items-center gap-0.5 lg:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  {link.children ? (
                    <ResourcesDropdown
                      label={link.label}
                      items={link.children}
                    />
                  ) : (
                    <NavLink href={link.href} label={link.label} />
                  )}
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Desktop Search */}
              <div
                ref={searchContainerRef}
                className="relative hidden lg:block"
              >
                <form
                  onSubmit={handleSearch}
                  className="flex items-center gap-2 rounded-full border border-[#082d4a]/15 bg-[#082d4a]/[0.03] px-3.5 py-2 transition-all duration-300 focus-within:border-[#082d4a] focus-within:bg-white focus-within:shadow-md dark:border-white/15 dark:bg-white/5 dark:focus-within:border-[#4a9eff] dark:focus-within:bg-neutral-900"
                >
                  <BsSearchHeartFill
                    size={16}
                    className="shrink-0 text-[#082d4a] dark:text-[#4a9eff]"
                    aria-hidden="true"
                  />
                  <input
                    ref={searchInputRef}
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    placeholder="Search products..."
                    className="w-[160px] bg-transparent text-sm font-medium text-[#082d4a] outline-none placeholder:text-[#082d4a]/40 xl:w-[220px] dark:text-white dark:placeholder:text-white/40 [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden [&::-ms-clear]:hidden [&::-ms-reveal]:hidden"
                    style={{
                      outline: "none",
                      border: "none",
                      boxShadow: "none",
                      WebkitAppearance: "none",
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
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#082d4a]/10 text-[#082d4a] outline-none transition-colors hover:bg-[#082d4a]/20 dark:bg-white/10 dark:text-white"
                    >
                      <FiX size={12} />
                    </motion.button>
                  )}
                </form>

                {/* Live search suggestions dropdown */}
                <AnimatePresence>
                  {searchFocused && searchQuery.trim() && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-2xl border border-[#082d4a]/10 bg-white shadow-2xl dark:border-white/10 dark:bg-neutral-900"
                    >
                      <SearchSuggestions
                        query={searchQuery}
                        onNavigate={() => {
                          setSearchQuery("");
                          setSearchFocused(false);
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile/Tablet Search Icon */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleMobileSearchClick}
                aria-label="Search"
                className="flex h-9 w-9 items-center justify-center rounded-full text-[#082d4a]/70 transition-all duration-300 hover:bg-[#082d4a]/10 hover:text-[#082d4a] lg:hidden dark:text-white/70 dark:hover:text-white"
              >
                <FiSearch size={18} />
              </motion.button>

              {/* Cart Button */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  href="/cart"
                  aria-label={`Cart, ${cartCount} item${cartCount === 1 ? "" : "s"}`}
                  className="relative flex h-9 w-9 items-center justify-center rounded-full text-[#082d4a]/70 transition-all duration-300 hover:bg-[#082d4a]/10 hover:text-[#082d4a] sm:h-10 sm:w-10 dark:text-white/70 dark:hover:text-white"
                >
                  <span className="relative">
                    <FaCartArrowDown
                      size={21}
                      aria-hidden="true"
                      className="sm:size-[22px]"
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
                </Link>
              </motion.div>

              {/* Hamburger Menu */}
              <motion.button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                whileTap={{ scale: 0.92 }}
                onClick={() => {
                  setMobileOpen((v) => !v);
                  if (mobileOpen) {
                    setOpenWithSearch(false);
                  }
                }}
                className="flex h-9 w-9 items-center justify-center rounded-full text-[#082d4a] transition-all duration-300 hover:bg-[#082d4a]/10 lg:hidden dark:text-white"
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
          onClose={handleMobileMenuClose}
          cartCount={cartCount}
          focusSearch={openWithSearch}
        />
      </header>

      {/* Spacer: reserves the exact height the fixed navbar takes up,
          so page content doesn't sit underneath it. Keep these values
          in sync with the h-16 / sm:h-[68px] / lg:h-[72px] above. */}
      <div className="h-16 w-full sm:h-[68px] lg:h-[72px]" aria-hidden="true" />
    </>
  );
}
