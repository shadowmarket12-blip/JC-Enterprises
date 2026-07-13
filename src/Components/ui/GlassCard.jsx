"use client";

import { motion } from "framer-motion";

export default function GlassCard({ children, className = "" }) {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
