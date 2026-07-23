"use client";

import {
  memo,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
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

const ALL_BRAND_FILTERS = [
  { id: "all", label: "All Brands", icon: HiSparkles },
  ...BRANDS.map((brand) => ({ id: brand, label: brand, icon: HiTag })),
];

/**
 * FIX: BRAND/CATEGORY FILTER SHOWING NO PRODUCTS
 * ------------------------------------------------
 * The filter matched brand/category with a strict `===`. If the product
 * data has even one small inconsistency versus the BRANDS/CATEGORIES
 * constants (extra whitespace, different casing - e.g. chip id "Sony" vs
 * a product with brand "sony" or "Sony "), the strict comparison fails
 * silently and the grid renders zero products for that brand - which
 * looks exactly like "clicking the brand tab shows nothing."
 *
 * `normalize()` trims and lowercases both sides of every brand/category
 * comparison used for FILTERING (not for object keys/labels, so display
 * text and lookups like `categoryCounts[category.id]` are untouched).
 * This makes matching resilient to that class of data mismatch.
 */
const normalize = (value) => (value ?? "").toString().trim().toLowerCase();

/**
 * NOTE ON REMOVING FRAMER MOTION (vibration fix)
 * ------------------------------------------------
 * This file previously used `motion.div layout="position"` on each product
 * card and `AnimatePresence mode="popLayout"` on the brand chips. Even
 * after removing `layout` from the *grid wrapper*, those two were still
 * enough to trigger it: Framer Motion attaches a single page-wide
 * scroll/resize listener the moment ANY element anywhere on the page has
 * layout-projection enabled (a `layout` prop, or `popLayout` exit mode).
 * That listener re-measures the animated elements on every scroll frame.
 * Because the sticky filter bar sits right above the grid, that constant
 * measuring was forcing the browser to keep recalculating the sticky
 * "stuck" offset mid-scroll - which is what read as vibration.
 *
 * The fix here is to not use Framer Motion at all in this file. Every
 * animation below is plain CSS (Tailwind transition utilities + global
 * @keyframes in globals.css), so there is no JS touching scroll or layout
 * measurement whatsoever. Tap feedback uses `active:scale-95` instead of
 * `whileTap`, and the hero fade-in uses a tiny IntersectionObserver-based
 * hook instead of `whileInView` (IntersectionObserver is async and doesn't
 * force synchronous layout on every scroll frame the way Framer's
 * projection system does, so it's safe to keep).
 *
 * NOTE ON REMOVING <style jsx> (hydration fix)
 * ------------------------------------------------
 * The two small fade-in keyframe animations used to live in <style jsx>
 * blocks inside BrandChips and the products grid. styled-jsx injects a
 * unique scoped classname (e.g. "jsx-f5241781...") onto every element in
 * the component during SSR. With Turbopack in this Next.js version, that
 * scope hash wasn't always reproduced identically between server and
 * client, causing a hydration mismatch on every element inside those
 * components. The animations now live as plain classes (.chip-fade-in,
 * .card-fade-in) in globals.css instead, which have no scoped hash and so
 * can never mismatch.
 */

/**
 * Makes a horizontally-scrollable row usable with a mouse/trackpad, not
 * just touch swipe.
 *
 * - `wheel`: translates vertical wheel/trackpad delta into horizontal
 *   scroll, so tablets/laptops using a mouse or trackpad (instead of a
 *   touch swipe) can scroll the chip row. Only hijacks the event when the
 *   row can actually scroll AND the gesture is predominantly vertical, so
 *   normal page scrolling and native horizontal trackpad swipes still work
 *   untouched.
 * - `pointerdown/move/up`: adds click-and-drag scrolling for mouse users
 *   (a mouse has no swipe gesture at all otherwise).
 */
function useHorizontalScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (el.scrollWidth <= el.clientWidth) return; // nothing to scroll
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return; // let native horizontal gestures through
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;

    const handlePointerDown = (e) => {
      if (e.pointerType !== "mouse") return; // touch/pen keep native behavior
      isDragging = true;
      startX = e.clientX;
      startScrollLeft = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
      el.style.cursor = "grabbing";
    };

    const handlePointerMove = (e) => {
      if (!isDragging) return;
      el.scrollLeft = startScrollLeft - (e.clientX - startX);
    };

    const handlePointerUp = (e) => {
      if (!isDragging) return;
      isDragging = false;
      el.style.cursor = "";
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        // pointer capture may already be released - safe to ignore
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("pointerdown", handlePointerDown);
    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerup", handlePointerUp);
    el.addEventListener("pointerleave", handlePointerUp);

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("pointerdown", handlePointerDown);
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerup", handlePointerUp);
      el.removeEventListener("pointerleave", handlePointerUp);
    };
  }, []);

  return ref;
}

/** Lightweight replacement for Framer's `whileInView` - fires once. */
function useInView(options) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect(); // once: true
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isInView];
}

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
  const scrollRef = useHorizontalScroll();

  return (
    <div
      ref={scrollRef}
      className="no-scrollbar flex flex-nowrap gap-2 overflow-x-auto -mx-4 px-4 w-full cursor-grab"
      style={{
        WebkitOverflowScrolling: "touch",
        overscrollBehaviorX: "contain",
        touchAction: "pan-x",
      }}
    >
      {CATEGORIES.map((category) => {
        const Icon = CATEGORY_ICONS[category.icon] || HiSquares2X2;
        const isActive = selectedCategory === category.id;
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => setSelectedCategory(category.id)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap flex-shrink-0 transition-all duration-300 active:scale-95"
            style={{
              backgroundColor: isActive ? "#082d4a" : "#f3f4f6",
              color: isActive ? "white" : "#6b7280",
            }}
          >
            <Icon className="text-sm flex-shrink-0" />
            {category.label}
          </button>
        );
      })}
    </div>
  );
});

const BrandChips = memo(function BrandChips({
  brandFilters,
  selectedBrand,
  setSelectedBrand,
}) {
  const scrollRef = useHorizontalScroll();

  return (
    <div
      ref={scrollRef}
      className="no-scrollbar w-full min-w-0 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 cursor-grab"
      style={{
        WebkitOverflowScrolling: "touch",
        overscrollBehaviorX: "contain",
        touchAction: "pan-x",
        // Lock a minimum height equal to one row of chips so that switching
        // categories (which changes how many brand chips render) never
        // shrinks/grows this row. A resizing sticky bar shoves the page's
        // scroll position around for a frame, which reads as the fixed
        // navbar "flickering" or jumping on tab switch.
        minHeight: "2.5rem",
      }}
    >
      <div className="flex flex-nowrap gap-2 sm:flex-wrap w-max sm:w-full items-center">
        {brandFilters.map((brand) => {
          const Icon = brand.icon;
          const isActive = normalize(selectedBrand) === normalize(brand.id);
          return (
            <button
              key={brand.id}
              type="button"
              onClick={() => setSelectedBrand(brand.id)}
              className="chip-fade-in flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap flex-shrink-0 transition-all duration-300 active:scale-95"
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
            </button>
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

  const [heroRef, heroInView] = useInView({ threshold: 0.1 });

  // Switching category can drastically shrink the results grid (e.g. a
  // category with only a handful of products). If the user was scrolled
  // far down, the page's total height shrinks out from under them and the
  // browser clamps the scroll position to whatever is now at the bottom —
  // which reads as "clicking a category jumps me to the footer". Scroll
  // the results back into view whenever the category changes to prevent
  // that, but skip the very first render so we don't fight ScrollToTop's
  // own scroll-to-0 on initial page load.
  const resultsRef = useRef(null);
  const isFirstCategoryRender = useRef(true);

  useEffect(() => {
    if (isFirstCategoryRender.current) {
      isFirstCategoryRender.current = false;
      return;
    }
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts = { all: products.length };
    products.forEach((product) => {
      counts[product.categoryId] = (counts[product.categoryId] || 0) + 1;
    });
    return counts;
  }, []);

  // Brands that actually exist within the currently selected category.
  // When category is "all", every brand is available.
  // Uses normalize() so a category/brand string that differs only in
  // casing or stray whitespace from the CATEGORIES/BRANDS constants still
  // matches correctly (see the top-of-file note on the filter fix).
  const brandFilters = useMemo(() => {
    if (selectedCategory === "all") return ALL_BRAND_FILTERS;

    const brandsInCategory = new Set(
      products
        .filter(
          (product) =>
            normalize(product.categoryId) === normalize(selectedCategory),
        )
        .map((product) => normalize(product.brand)),
    );

    return ALL_BRAND_FILTERS.filter(
      (brand) =>
        brand.id === "all" || brandsInCategory.has(normalize(brand.id)),
    );
  }, [selectedCategory]);

  // If the currently selected brand doesn't exist in the newly selected
  // category's brand list, fall back to "all" instead of showing 0 results.
  useEffect(() => {
    const stillValid = brandFilters.some(
      (b) => normalize(b.id) === normalize(selectedBrand),
    );
    if (!stillValid) {
      setSelectedBrand("all");
    }
  }, [brandFilters, selectedBrand]);

  const filteredProducts = useMemo(() => {
    if (isPreview) return products.slice(0, limit);

    const term = normalize(deferredSearchTerm);

    return products
      .filter((product) => {
        const matchesCategory =
          selectedCategory === "all" ||
          normalize(product.categoryId) === normalize(selectedCategory);
        const matchesBrand =
          selectedBrand === "all" ||
          normalize(product.brand) === normalize(selectedBrand);
        const matchesSearch =
          normalize(product.name).includes(term) ||
          normalize(product.category).includes(term) ||
          normalize(product.brand).includes(term);
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
            <div
              ref={heroRef}
              className="text-center mb-8 sm:mb-10 lg:mb-12 transition-all duration-500 ease-out"
              style={{
                opacity: heroInView ? 1 : 0,
                transform: heroInView ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
                Featured Products
              </h2>
              <p className="text-black text-sm sm:text-base mt-2">
                Handpicked picks just for you
              </p>
            </div>

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
            {/* Sidebar - desktop - sticks in place while the right side scrolls */}
            <aside className="hidden lg:block lg:w-64 lg:flex-shrink-0 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
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
            <div
              ref={resultsRef}
              className="min-w-0 flex-1 scroll-mt-20 sm:scroll-mt-24"
            >
              {/*
                Filters - sticky wrapper with negative margins to offset section padding.

                FIX NOTES (mobile sticky vibration bug):
                1. z-40 + isolate -> guarantees this sits above page content and
                   creates its own stacking context.
                2. `sticky` + `top-*` only work if NO ancestor between this div
                   and the scrolling viewport has `overflow: hidden/auto/scroll`,
                   `transform`, `filter`, `perspective`, `contain`, or
                   `will-change: transform`. The single most common cause in
                   Next.js apps is a page-transition wrapper in layout.js/
                   template.js that animates the whole page - remove/relocate
                   that animation if present.
                3. Framer Motion has been removed from this entire file. Any
                   element anywhere on the page using Framer's `layout` prop or
                   `AnimatePresence mode="popLayout"` makes Framer attach a
                   page-wide scroll listener that re-measures elements on every
                   scroll frame - with the grid sitting directly under this
                   sticky bar, that constant re-measuring was forcing the
                   browser to keep recalculating the sticky "stuck" offset
                   mid-scroll, which is what read as vibration/shaking. With no
                   Framer Motion left in this file, nothing is left to trigger
                   that. `contain: layout style paint` below additionally scopes
                   this bar's own layout/paint so reflows elsewhere on the page
                   (image loads, filtering, etc.) can't force it to recompute.
              */}
              <div className="sticky top-16 sm:top-[68px] lg:static lg:top-0 z-40 lg:z-auto -mx-4 sm:-mx-6 lg:mx-0 -mt-8 sm:-mt-12 lg:mt-0 isolate">
                <div
                  className="px-4 pt-4 pb-4 mb-6 lg:pt-0 lg:px-0 lg:pb-0 lg:mb-8 border-b border-gray-100"
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow:
                      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                    // GPU layer promotion lives on this inner element, NOT on
                    // the sticky element itself. Putting transform/will-change
                    // directly on a position:sticky element makes mobile
                    // Safari/Chrome recompute the sticky offset and the
                    // compositor layer against each other every scroll frame.
                    transform: "translateZ(0)",
                    WebkitTransform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    contain: "layout style paint",
                  }}
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
                    <div
                      className="lg:hidden w-full min-w-0"
                      style={{ minHeight: "2.25rem" }}
                    >
                      <CategoryChips
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                      />
                    </div>

                    {/* Quick brand filters - all screens - scoped to selected category */}
                    <BrandChips
                      brandFilters={brandFilters}
                      selectedBrand={selectedBrand}
                      setSelectedBrand={setSelectedBrand}
                    />
                  </div>
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
                          ALL_BRAND_FILTERS.find((b) => b.id === selectedBrand)
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

              {/*
                Products Grid - plain div, no Framer Motion anywhere. Cards
                fade/scale in on mount via a pure-CSS animation (see
                .card-fade-in in globals.css) instead of AnimatePresence, so
                filtering still feels animated without any JS scroll/layout
                listeners running in the background.
              */}
              <div
                className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 relative"
                style={{ zIndex: 1, contain: "layout paint" }}
              >
                {filteredProducts.map((product) => (
                  <div key={product.id} className="card-fade-in h-full">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>

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
