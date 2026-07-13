"use client";

import { motion } from "framer-motion";
import FooterLogo from "./Footerlogo";
import FooterLinks from "./FooterLinks";
import FooterCategories from "./FooterCategories";
import FooterSupport from "./FooterSupport";
import FooterSocial from "./FooterSocial";
import FooterCopyright from "./FooterCopyright";
import FloatingActionButtons from "./FloatingActionButtons";
import { FOOTER_LINKS } from "@/constants";
import FooterNewsletter from "./FooterNewsletter";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* Animated Background Orbs - Smooth animation */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(8, 45, 74, 0.1)" }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(8, 45, 74, 0.1)" }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-8 text-center md:text-left">
            <FooterLogo />
            <FooterSocial />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 col-span-1 md:col-span-2 lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <FooterLinks title="Company" links={FOOTER_LINKS.company} />
              <FooterCategories />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <FooterSupport />
              {/* Newsletter removed */}
              <FooterNewsletter />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <FooterCopyright />
      </div>

      {/* Floating Action Buttons */}
      <FloatingActionButtons />
    </footer>
  );
}
