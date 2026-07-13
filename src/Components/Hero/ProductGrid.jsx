"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import {
  HiMagnifyingGlass,
  HiAdjustmentsHorizontal,
  HiXMark,
  HiFire,
  HiSparkles,
  HiStar,
  HiArrowTrendingUp,
  HiArrowRight,
} from "react-icons/hi2";
import { PRODUCTS as products } from "@/constants/products";

const categories = [
  { id: "all", label: "All", icon: HiSparkles },
  { id: "best-sellers", label: "Best Sellers", icon: HiFire },
  { id: "new-arrivals", label: "New Arrivals", icon: HiSparkles },
  { id: "popular", label: "Popular", icon: HiArrowTrendingUp },
  { id: "featured", label: "Featured", icon: HiStar },
];

export default function ProductGrid({
  variant = "full",
  limit = 3,
  initialSearchTerm = "",
}) {
  const isPreview = variant === "preview";

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = isPreview
    ? products.slice(0, limit)
    : products
        .filter((product) => {
          const matchesCategory =
            selectedCategory === "all" ||
            product.badgeType === selectedCategory;
          const matchesSearch =
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase());
          return matchesCategory && matchesSearch;
        })
        .sort((a, b) => {
          if (sortBy === "price-low") return a.price - b.price;
          if (sortBy === "price-high") return b.price - a.price;
          if (sortBy === "rating") return b.rating - a.rating;
          if (sortBy === "discount") return b.discount - a.discount;
          return 0;
        });

  return (
    <section className=" py-8 sm:py-12 lg:py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4"
            style={{ color: "#082d4a" }}
          >
            {isPreview ? "Featured Products" : "All Products"}
          </h2>
          <p className="text-black text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            {isPreview
              ? "Discover our handpicked selection of premium products designed for quality and performance"
              : "Browse our full catalog, filter by category, and search for exactly what you need"}
          </p>
        </motion.div>

        {/* Filters - full catalog only */}
        {!isPreview && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="sticky top-0 z-30 bg-gray-50/95 backdrop-blur-sm pb-4 mb-6 sm:relative sm:top-auto sm:bg-transparent sm:backdrop-blur-none sm:pb-0 sm:mb-8 lg:mb-10"
          >
            <div className="flex flex-col gap-4">
              {/* Search and Sort Row */}
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                {/* Search */}
                <div className="relative w-full sm:w-64 lg:w-72">
                  <HiMagnifyingGlass className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base sm:text-lg" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 sm:pl-11 pr-10 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-100 outline-none transition-all duration-300 bg-white text-sm"
                    style={{ color: "#082d4a" }}
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <HiXMark className="text-base sm:text-lg" />
                    </button>
                  )}
                </div>

                {/* Sort */}
                <div className="flex items-center gap-2">
                  <HiAdjustmentsHorizontal className="text-gray-400 text-base sm:text-lg flex-shrink-0" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl sm:rounded-2xl border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-100 outline-none text-sm bg-white w-full"
                    style={{ color: "#082d4a" }}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="discount">Biggest Discount</option>
                  </select>
                </div>
              </div>

              {/* Category Filter - Using Tailwind classes for scrollbar hide */}
              <div className="flex gap-2 sm:gap-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <motion.button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0"
                      style={{
                        backgroundColor:
                          selectedCategory === category.id
                            ? "#082d4a"
                            : "#f3f4f6",
                        color:
                          selectedCategory === category.id
                            ? "white"
                            : "#6b7280",
                        boxShadow:
                          selectedCategory === category.id
                            ? "0 10px 25px -5px rgba(8, 45, 74, 0.3)"
                            : "none",
                      }}
                    >
                      <Icon className="text-sm sm:text-base" />
                      {category.label}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* Results Count - full catalog only */}
        {!isPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 sm:mb-6"
          >
            <p className="text-xs sm:text-sm text-gray-500">
              Showing{" "}
              <span className="font-semibold" style={{ color: "#082d4a" }}>
                {filteredProducts.length}
              </span>{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
              {selectedCategory !== "all" && (
                <>
                  {" "}
                  in{" "}
                  <span className="font-medium">
                    {categories.find((c) => c.id === selectedCategory)?.label}
                  </span>
                </>
              )}
              {searchTerm && (
                <>
                  {" "}
                  for "<span className="font-medium">{searchTerm}</span>"
                </>
              )}
            </p>
          </motion.div>
        )}

        {/* Products Grid - each card animates independently so filtering/
            searching reflows smoothly instead of the whole grid flashing */}
        <motion.div
          layout
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="h-full"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All - preview only */}
        {isPreview && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mt-8 sm:mt-10 lg:mt-12"
          >
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base text-white transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #082d4a 0%, #0d4f7c 100%)",
                  boxShadow: "0 10px 25px -5px rgba(8, 45, 74, 0.3)",
                }}
              >
                View All Products
                <HiArrowRight className="text-base sm:text-lg" />
              </motion.button>
            </Link>
          </motion.div>
        )}

        {/* Empty State - full catalog only */}
        {!isPreview && filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12 sm:py-16"
          >
            <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🔍</div>
            <h3
              className="text-lg sm:text-xl font-bold mb-2"
              style={{ color: "#082d4a" }}
            >
              No products found
            </h3>
            <p className="text-gray-500 text-sm mb-4 sm:mb-6 px-4">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-white text-sm"
              style={{
                background: "linear-gradient(135deg, #082d4a 0%, #0d4f7c 100%)",
              }}
            >
              Clear Filters
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
