"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiHeart,
  HiOutlineHeart,
  HiStar,
  HiEye,
  HiArrowRight,
} from "react-icons/hi2";
import { IoFlash } from "react-icons/io5";

export default function ProductCard({ product }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);

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
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setIsHovered(true)}
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

        {/* New/Best Seller Badge */}
        {product.badge && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-xl"
            style={{
              background:
                product.badge === "New"
                  ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                  : "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
              marginTop: product.discount ? "2.5rem" : "0",
            }}
          >
            {product.badge}
          </motion.div>
        )}

        {/* Wishlist Button */}
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <AnimatePresence mode="wait">
              {isLiked ? (
                <motion.div
                  key="liked"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <HiHeart className="text-red-500 text-base sm:text-xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="unliked"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <HiOutlineHeart className="text-black text-base sm:text-xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Product Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-square cursor-pointer">
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
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>

          {/* Bottom Action Buttons on Hover */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 p-3 sm:p-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                setShowQuickView(true);
              }}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{ color: "#082d4a" }}
            >
              <HiEye className="text-sm sm:text-base" />
              Quick View
            </motion.button>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="p-3 sm:p-5 flex flex-col flex-1">
          {/* Category & Tag */}
          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
            <p
              className="text-[10px] sm:text-xs font-bold uppercase tracking-wider"
              style={{ color: "#082d4a" }}
            >
              {product.brand || product.category}
            </p>
            {product.tag && (
              <span className="text-[10px] sm:text-xs text-black bg-gray-100 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                {product.tag}
              </span>
            )}
          </div>

          {/* Product Name - Smaller on desktop */}
          <h3 className="text-black text-sm sm:text-sm lg:text-base leading-snug line-clamp-2 mb-2 sm:mb-3 flex-1 transition-colors duration-300 font-medium">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
            <div className="flex items-center">
              {renderStars(product.rating)}
            </div>
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

          {/* Know More Button */}
          <Link href={`/products/${product.id}`} className="w-full">
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
              Know More
              <HiArrowRight className="text-sm sm:text-lg transition-transform duration-300 group-hover/btn:translate-x-1" />
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {showQuickView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
            onClick={() => setShowQuickView(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-[95%] sm:max-w-md max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Modal Image */}
              <div className="relative w-full h-48 sm:h-64 bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 640px) 90vw, 28rem"
                />
                <button
                  onClick={() => setShowQuickView(false)}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-10"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                {product.discount && (
                  <div
                    className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #082d4a 0%, #0d4f7c 100%)",
                    }}
                  >
                    <IoFlash className="text-amber-400 text-xs sm:text-sm" />
                    {product.discount}% OFF
                  </div>
                )}
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6">
                <p
                  className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5 sm:mb-2"
                  style={{ color: "#082d4a" }}
                >
                  {product.brand || product.category}
                </p>
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-black">
                  {product.name}
                </h3>

                {/* Rating in Modal */}
                <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-xs sm:text-sm text-black">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <p className="text-black text-sm mb-4 sm:mb-6 leading-relaxed opacity-80">
                  {product.description}
                </p>

                {/* Price in Modal with Indian Rupee */}
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl font-bold text-black flex items-center">
                    ₹{product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg sm:text-xl text-black line-through opacity-50">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Modal Actions */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Link href={`/products/${product.id}`} className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-semibold text-sm text-white transition-all flex items-center justify-center gap-2"
                      style={{
                        background:
                          "linear-gradient(135deg, #082d4a 0%, #0d4f7c 100%)",
                        boxShadow: "0 10px 25px -5px rgba(8, 45, 74, 0.3)",
                      }}
                    >
                      Know More
                      <HiArrowRight className="text-sm sm:text-lg" />
                    </motion.button>
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowQuickView(false)}
                    className="px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-semibold text-sm border-2 transition-all w-full sm:w-auto"
                    style={{
                      borderColor: "#082d4a",
                      color: "#082d4a",
                    }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
