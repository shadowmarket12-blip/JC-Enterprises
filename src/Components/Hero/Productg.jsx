"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import sliderimage from "../../../public/images/banner1.jpg";

const products = [
  {
    id: 1,
    src: sliderimage,
    alt: "Laptop",
  },
  {
    id: 2,
    src: sliderimage,
    alt: "Smartphone",
  },
  {
    id: 3,
    src: sliderimage,
    alt: "Headphones",
  },
  {
    id: 4,
    src: sliderimage,
    alt: "Smartwatch",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ProductGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 gap-3 sm:gap-4 h-full"
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="relative group cursor-pointer"
        >
          <div className="relative w-full aspect-square rounded-xl lg:rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 transition-shadow duration-300">
            <Image
              src={product.src}
              alt={product.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              sizes="(max-width: 768px) 45vw, (max-width: 1200px) 15vw, 15vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Floating animation */}
          <motion.div
            className="absolute inset-0 rounded-xl lg:rounded-2xl ring-1 ring-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
