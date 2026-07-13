"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp, FaPhone, FaPlus, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { PHONE_NUMBER } from "@/constants";

export default function FloatingActionButtons() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${PHONE_NUMBER.replace(/[^0-9]/g, "")}`;
  const callUrl = `tel:${PHONE_NUMBER}`;

  const buttons = [
    {
      icon: FaWhatsapp,
      href: whatsappUrl,
      bg: "bg-green-500 hover:bg-green-600",
      label: "WhatsApp",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: FaPhone,
      href: callUrl,
      bg: "bg-blue-500 hover:bg-blue-600",
      label: "Call Now",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <AnimatePresence>
        {isOpen &&
          buttons.map((button, index) => (
            <motion.div
              key={button.label}
              initial={{
                opacity: 0,
                scale: 0.3,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.3,
                y: 25,
              }}
              transition={{
                duration: 0.25,
                delay: index * 0.08,
              }}
            >
              <Link
                href={button.href}
                target={button.target}
                rel={button.rel}
                aria-label={button.label}
                className={`group flex h-12 w-12 items-center justify-center rounded-full ${button.bg} text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95`}
              >
                <button.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </Link>
            </motion.div>
          ))}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.25 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#082d4a] text-white shadow-2xl ring-4 ring-[#082d4a]/20 transition-all duration-300 hover:bg-[#0b3d63]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "close" : "open"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <FaTimes className="h-5 w-5" />
            ) : (
              <FaPlus className="h-5 w-5" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
