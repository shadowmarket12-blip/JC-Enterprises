"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { HiStar, HiArrowRight } from "react-icons/hi2";
import { IoFlash } from "react-icons/io5";

export default function ProductCard({ product }) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  // Warm up the product page as soon as the user shows interest in this
  // card, so the actual click on "Buy Now" feels instant instead of
  // waiting for the route to load/compile at click time.
  const prefetchProductPage = () => {
    router.prefetch(`/products/${product.slug}`);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <HiStar
        key={i}
        className={`text-xs sm:text-sm ${
          i < Math.floor(rating)
            ? "text-amber-400"
            : i < rating
              ? "text-amber-300"
              : "text-gray-200"
        }`}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => {
        setIsHovered(true);
        prefetchProductPage();
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-gray-100 flex flex-col h-full"
      style={{
        boxShadow: isHovered
          ? "0 25px 50px -12px rgba(8, 45, 74, 0.15)"
          : "0 4px 20px rgba(0, 0, 0, 0.06)",
      }}
    >
      {/* Discount Badge */}
      {product.discount && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-xl"
          style={{
            background: "linear-gradient(135deg, #082d4a 0%, #0d4f7c 100%)",
          }}
        >
          <IoFlash className="text-amber-400 text-xs sm:text-sm" />
          {product.discount}% OFF
        </motion.div>
      )}

      {/* Product Image */}
      <Link
        href={`/products/${product.slug}`}
        className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-square cursor-pointer"
        prefetch={true}
        onMouseEnter={prefetchProductPage}
        onTouchStart={prefetchProductPage}
      >
        <motion.div
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />
        </motion.div>

        {/* Hover Overlay */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 flex justify-center p-3 sm:p-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all duration-300"
            style={{ color: "#082d4a" }}
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            View Details
          </motion.div>
        </motion.div>
      </Link>

      {/* Product Info */}
      <div className="p-3 sm:p-5 flex flex-col flex-1">
        {/* Brand */}
        <div className="mb-1.5 sm:mb-2">
          <p
            className="text-[10px] sm:text-xs font-bold uppercase tracking-wider"
            style={{ color: "#082d4a" }}
          >
            {product.brand || product.category}
          </p>
        </div>

        {/* Product Name - Smaller on desktop */}
        <h3 className="text-black text-sm sm:text-sm lg:text-base leading-snug line-clamp-2 mb-2 sm:mb-3 flex-1 transition-colors duration-300 font-medium">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
          <div className="flex items-center">{renderStars(product.rating)}</div>
          <span className="text-[10px] sm:text-xs font-medium text-black">
            ({product.reviews})
          </span>
        </div>

        {/* Price with Indian Rupee */}
        <div className="flex items-baseline gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          <span className="text-lg sm:text-2xl font-bold text-black flex items-center">
            ₹{product.price}
          </span>
          {product.originalPrice && (
            <span className="text-xs sm:text-base text-black line-through opacity-50">
              ₹{product.originalPrice}
            </span>
          )}
        </div>

        {/* Buy Now Button */}
        <Link
          href={`/products/${product.slug}`}
          className="w-full"
          prefetch={true}
          onMouseEnter={prefetchProductPage}
          onTouchStart={prefetchProductPage}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 relative overflow-hidden group/btn"
            style={{
              background: "linear-gradient(135deg, #082d4a 0%, #0d4f7c 100%)",
              color: "white",
              boxShadow: "0 10px 25px -5px rgba(8, 45, 74, 0.3)",
            }}
          >
            Buy Now
            <HiArrowRight className="text-sm sm:text-lg transition-transform duration-300 group-hover/btn:translate-x-1" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
