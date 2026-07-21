"use client";

import { memo, useDeferredValue, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import {
  HiMagnifyingGlass,
  HiAdjustmentsHorizontal,
  HiXMark,
  HiArrowRight,
  HiSquares2X2,
  HiBolt,
  HiShieldCheck,
  HiLightBulb,
  HiArrowPath,
  HiFire,
  HiCube,
  HiBuildingOffice2,
  HiWrenchScrewdriver,
  HiSparkles,
  HiTag,
  HiGlobeAlt,
  HiHome,
  HiBeaker,
} from "react-icons/hi2";
import { PRODUCTS as products, CATEGORIES, BRANDS } from "@/constants/products";

const CATEGORY_ICONS = {
  HiSquares2X2: HiSquares2X2,
  HiAdjustmentsHorizontal: HiAdjustmentsHorizontal,
  HiBolt: HiBolt,
  HiShieldCheck: HiShieldCheck,
  HiLightBulb: HiLightBulb,
  HiArrowPath: HiArrowPath,
  HiFire: HiFire,
  HiCube: HiCube,
  HiBuildingOffice2: HiBuildingOffice2,
  HiWrenchScrewdriver: HiWrenchScrewdriver,
  HiGlobeAlt: HiGlobeAlt,
  HiHome: HiHome,
  HiBeaker: HiBeaker,
};

const BRAND_FILTERS = [
  { id: "all", label: "All Brands", icon: HiSparkles },
  ...BRANDS.map((brand) => ({ id: brand, label: brand, icon: HiTag })),
];

const CategoryList = memo(function CategoryList({
  selectedCategory,
  setSelectedCategory,
  categoryCounts,
  onSelect,
}) {
  return (
    <ul className="space-y-1">
      {CATEGORIES.map((category) => {
        const Icon = CATEGORY_ICONS[category.icon] || HiSquares2X2;
        const isActive = selectedCategory === category.id;
        const count = categoryCounts[category.id] || 0;
        return (
          <li key={category.id}>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory(category.id);
                onSelect?.();
              }}
              className="flex w-full items-center justify-between gap-2 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-left text-sm font-medium transition-all duration-300"
              style={{
                backgroundColor: isActive ? "#082d4a" : "transparent",
                color: isActive ? "white" : "#374151",
              }}
            >
              <span className="flex items-center gap-2.5 min-w-0">
                <Icon
                  className="text-base sm:text-lg flex-shrink-0"
                  style={{ color: isActive ? "white" : "#082d4a" }}
                />
                <span className="truncate">{category.label}</span>
              </span>
              <span
                className="flex-shrink-0 rounded-full px-2 py-0.5 text-[10px] sm:text-xs font-semibold"
                style={{
                  backgroundColor: isActive
                    ? "rgba(255,255,255,0.2)"
                    : "#f3f4f6",
                  color: isActive ? "white" : "#6b7280",
                }}
              >
                {count}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
});

const CategoryChips = memo(function CategoryChips({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div
      className="no-scrollbar flex flex-nowrap gap-2 overflow-x-auto -mx-4 px-4 w-full"
      style={{
        WebkitOverflowScrolling: "touch",
        overscrollBehaviorX: "contain",
      }}
    >
      {CATEGORIES.map((category) => {
        const Icon = CATEGORY_ICONS[category.icon] || HiSquares2X2;
        const isActive = selectedCategory === category.id;
        return (
          <motion.button
            key={category.id}
            type="button"
            onClick={() => setSelectedCategory(category.id)}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap flex-shrink-0 transition-colors duration-300"
            style={{
              backgroundColor: isActive ? "#082d4a" : "#f3f4f6",
              color: isActive ? "white" : "#6b7280",
            }}
          >
            <Icon className="text-sm flex-shrink-0" />
            {category.label}
          </motion.button>
        );
      })}
    </div>
  );
});

const BrandChips = memo(function BrandChips({
  selectedBrand,
  setSelectedBrand,
}) {
  return (
    <div
      className="no-scrollbar w-full min-w-0 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0"
      style={{
        WebkitOverflowScrolling: "touch",
        overscrollBehaviorX: "contain",
      }}
    >
      <div className="flex flex-nowrap gap-2 sm:flex-wrap w-max sm:w-full">
        {BRAND_FILTERS.map((brand) => {
          const Icon = brand.icon;
          const isActive = selectedBrand === brand.id;
          return (
            <motion.button
              key={brand.id}
              type="button"
              onClick={() => setSelectedBrand(brand.id)}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap flex-shrink-0 transition-all duration-300"
              style={{
                backgroundColor: isActive ? "#082d4a" : "#f3f4f6",
                color: isActive ? "white" : "#6b7280",
                boxShadow: isActive
                  ? "0 10px 25px -5px rgba(8, 45, 74, 0.3)"
                  : "none",
              }}
            >
              <Icon className="text-sm sm:text-base" />
              {brand.label}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
});

export default function ProductGrid({
  variant = "full",
  limit = 4,
  initialSearchTerm = "",
  initialCategory = "all",
}) {
  const isPreview = variant === "preview";

  const [selectedCategory, setSelectedCategory] = useState(
    CATEGORIES.some((c) => c.id === initialCategory) ? initialCategory : "all",
  );
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [sortBy, setSortBy] = useState("featured");

  const deferredSearchTerm = useDeferredValue(searchTerm);

  const categoryCounts = useMemo(() => {
    const counts = { all: products.length };
    products.forEach((product) => {
      counts[product.categoryId] = (counts[product.categoryId] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredProducts = useMemo(() => {
    if (isPreview) return products.slice(0, limit);

    const term = deferredSearchTerm.toLowerCase();

    return products
      .filter((product) => {
        const matchesCategory =
          selectedCategory === "all" || product.categoryId === selectedCategory;
        const matchesBrand =
          selectedBrand === "all" || product.brand === selectedBrand;
        const matchesSearch =
          product.name.toLowerCase().includes(term) ||
          product.category.toLowerCase().includes(term) ||
          product.brand.toLowerCase().includes(term);
        return matchesCategory && matchesBrand && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "discount") return b.discount - a.discount;
        return 0;
      });
  }, [
    isPreview,
    limit,
    selectedCategory,
    selectedBrand,
    deferredSearchTerm,
    sortBy,
  ]);

  const selectedCategoryLabel = CATEGORIES.find(
    (c) => c.id === selectedCategory,
  )?.label;

  return (
    <section className="py-8 sm:py-12 lg:py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isPreview ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 sm:mb-10 lg:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
                Featured Products
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mt-2">
                Handpicked picks just for you
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="h-full">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="lg:flex lg:items-start lg:gap-8">
            {/* Sidebar - desktop - sticky */}
            <aside className="hidden lg:block lg:w-64 lg:flex-shrink-0 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <h3
                  className="mb-3 px-1 text-sm font-bold uppercase tracking-wider"
                  style={{ color: "#082d4a" }}
                >
                  Categories
                </h3>
                <CategoryList
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  categoryCounts={categoryCounts}
                />
              </div>
            </aside>

            {/* Content */}
            <div className="min-w-0 flex-1">
              {/* Filters — solid, professional sticky bar, snapped to navbar height */}
              <div
                className="sticky top-16 sm:top-[68px] z-30 -mx-4 sm:-mx-6 bg-white px-4 pt-3 pb-4 mb-6 shadow-sm border-b border-gray-100 lg:relative lg:top-auto lg:mx-0 lg:bg-transparent lg:px-0 lg:pt-0 lg:pb-0 lg:mb-8 lg:shadow-none lg:border-none"
                style={{ willChange: "transform" }}
              >
                <div className="flex flex-col gap-3 sm:gap-4 w-full min-w-0">
                  {/* Search and Sort */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
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

                  {/* Category chips - mobile/tablet only */}
                  <div className="lg:hidden w-full min-w-0">
                    <CategoryChips
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
                  </div>

                  {/* Quick brand filters - all screens */}
                  <BrandChips
                    selectedBrand={selectedBrand}
                    setSelectedBrand={setSelectedBrand}
                  />
                </div>
              </div>

              {/* Results Count */}
              <div className="mb-4 sm:mb-6">
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
                        {selectedCategoryLabel}
                      </span>
                    </>
                  )}
                  {selectedBrand !== "all" && (
                    <>
                      {" "}
                      from{" "}
                      <span className="font-medium">
                        {
                          BRAND_FILTERS.find((b) => b.id === selectedBrand)
                            ?.label
                        }
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
              </div>

              {/* Products Grid */}
              <motion.div
                layout="position"
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout="position"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="h-full"
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* Empty State */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-12 sm:py-16">
                  <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🔍</div>
                  <h3
                    className="text-lg sm:text-xl font-bold mb-2"
                    style={{ color: "#082d4a" }}
                  >
                    No products found
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 sm:mb-6 px-4">
                    Try adjusting your search or filter to find what you're
                    looking for.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                      setSelectedBrand("all");
                    }}
                    className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-white text-sm active:scale-95 transition-transform"
                    style={{
                      background:
                        "linear-gradient(135deg, #082d4a 0%, #0d4f7c 100%)",
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {isPreview && (
          <div className="flex justify-center mt-8 sm:mt-10 lg:mt-12">
            <Link href="/products" prefetch>
              <button
                className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base text-white transition-all duration-300 active:scale-95"
                style={{
                  background:
                    "linear-gradient(135deg, #082d4a 0%, #0d4f7c 100%)",
                  boxShadow: "0 10px 25px -5px rgba(8, 45, 74, 0.3)",
                }}
              >
                View All Products
                <HiArrowRight className="text-base sm:text-lg" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
