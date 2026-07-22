// components/Hero/HeroSection.jsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Zap } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  DATA — replace src paths with your own product photography.               */
/*  Same array powers both the carousel (left) and the bento grid (right).    */
/* -------------------------------------------------------------------------- */

const HERO_ITEMS = [
  {
    id: "switches",
    label: "Switches & Accessories",
    tag: "New Range",
    src: "/images/productimages/atomeberg.jpg",
  },
  {
    id: "wiring",
    label: "Premium Wiring",
    tag: "Best Seller",
    src: "/images/productimages/atomeberg.jpg",
  },
  {
    id: "protection",
    label: "Circuit Protection",
    tag: "Certified Safe",
    src: "/images/productimages/atomeberg.jpg",
  },
  {
    id: "lighting",
    label: "Smart Lighting",
    tag: "Energy Saver",
    src: "/images/productimages/atomeberg.jpg",
  },
  {
    id: "cooling",
    label: "Cooling Solutions",
    tag: "Trending",
    src: "/images/productimages/2.png",
  },
  {
    id: "pumps",
    label: "Water Pumps",
    tag: "Industrial Grade",
    src: "/images/productimages/2.png",
  },
];

const AUTOPLAY_INTERVAL = 5000;

/* -------------------------------------------------------------------------- */
/*  ANIMATION VARIANTS                                                        */
/* -------------------------------------------------------------------------- */

const containerStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 32 : -32,
    scale: 1.02,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -32 : 32,
    scale: 0.99,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* -------------------------------------------------------------------------- */
/*  MAIN COMPONENT                                                            */
/* -------------------------------------------------------------------------- */

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [[activeIndex, direction], setActive] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  // Parallax on scroll — spring-smoothed so it glides instead of
  // jittering on every scroll-event tick (the main source of "lag").
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  // Small, subtle ranges — large parallax offsets are what make scroll
  // feel heavy, especially combined with blur/backdrop-blur layers.
  const yLeft = useTransform(smoothProgress, [0, 1], [0, -18]);
  const yRight = useTransform(smoothProgress, [0, 1], [0, -34]);
  const bgY = useTransform(smoothProgress, [0, 1], [0, 50]);

  const paginate = useCallback((newDirection) => {
    setActive(([current]) => {
      const next =
        (current + newDirection + HERO_ITEMS.length) % HERO_ITEMS.length;
      return [next, newDirection];
    });
  }, []);

  const goTo = useCallback((index) => {
    setActive(([current]) => [index, index > current ? 1 : -1]);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => paginate(1), AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, paginate]);

  const active = HERO_ITEMS[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[70vh] items-center overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12"
    >
      {/* ---------------------------------------------------------------- */}
      {/* Ambient gradient background — lighter blur = cheaper repaints    */}
      {/* ---------------------------------------------------------------- */}
      <motion.div
        style={{ y: bgY, willChange: "transform" }}
        className="pointer-events-none absolute inset-0 -z-10 transform-gpu"
        aria-hidden="true"
      >
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-blue-100/80 blur-[70px]" />
        <div className="absolute -bottom-20 right-1/4 h-64 w-64 rounded-full bg-amber-100/60 blur-[70px]" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="circuit-grid"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 32H24M40 32H64M32 0V24M32 40V64"
              stroke="#1e293b"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="32" cy="32" r="2.5" fill="#1e293b" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-grid)" />
        </svg>
      </motion.div>

      {/* ---------------------------------------------------------------- */}
      {/* Content grid — stacked on mobile, split 12-col on desktop         */}
      {/* ---------------------------------------------------------------- */}
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-5">
        {/* ============================= LEFT: CAROUSEL ============================= */}
        <motion.div
          style={{ y: yLeft, willChange: "transform" }}
          className="relative transform-gpu lg:col-span-7"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="group relative h-[34vh] min-h-[240px] w-full overflow-hidden rounded-2xl sm:h-[38vh] lg:h-[42vh] shadow-lg shadow-gray-200/50">
            {/* breathing glow ring — subtle on white background */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-2xl ring-1 ring-blue-400/30"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* image slides */}
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              <motion.div
                key={active.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 transform-gpu"
              >
                <Image
                  src={active.src}
                  alt={active.label}
                  fill
                  priority={activeIndex === 0}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/5" />
              </motion.div>
            </AnimatePresence>

            {/* overlaid copy */}
            <motion.div
              variants={containerStagger}
              initial="hidden"
              animate="show"
              className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-2.5 p-4 sm:gap-3 sm:p-6"
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/20 bg-white/15 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm"
              >
                <Zap className="h-3 w-3 text-amber-400" strokeWidth={2.5} />
                Powering every home &amp; industry
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="max-w-md text-xl font-semibold leading-[1.1] tracking-tight text-white sm:text-2xl lg:text-3xl"
              >
                Electrical essentials,
                <br />
                engineered to last.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="hidden max-w-xs text-xs leading-relaxed text-white/80 sm:block sm:text-sm"
              >
                Certified components, trusted by electricians and homeowners
                nationwide.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-2 pt-1"
              >
                <Link
                  href="/products"
                  className="group/btn inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-gray-900 shadow-lg shadow-black/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-black/20 active:scale-[0.98] sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  Shop Now
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
                <Link
                  href="/products?category=all"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/50 sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  Explore
                </Link>
              </motion.div>
            </motion.div>

            {/* nav arrows */}
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-white/15 p-1.5 text-white/90 opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:text-white group-hover:opacity-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-white/15 p-1.5 text-white/90 opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:text-white group-hover:opacity-100"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* dots */}
            <div className="absolute right-4 top-4 z-10 flex gap-1.5 sm:right-6 sm:top-6">
              {HERO_ITEMS.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to ${item.label}`}
                  className="group/dot relative h-1.5 w-5 overflow-hidden rounded-full bg-white/30"
                >
                  {i === activeIndex && (
                    <motion.span
                      layoutId="active-dot"
                      className="absolute inset-0 rounded-full bg-white"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ============================= RIGHT: BENTO GRID ============================= */}
        <motion.div
          style={{ y: yRight, willChange: "transform" }}
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid h-[34vh] min-h-[340px] transform-gpu grid-cols-4 grid-rows-4 gap-2 sm:h-[38vh] lg:col-span-5 lg:h-[42vh]"
        >
          {HERO_ITEMS.map((item, i) => (
            <BentoTile
              key={item.id}
              item={item}
              index={i}
              onSelect={() => goTo(i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  BENTO TILE — image only, no text overlay                                  */
/* -------------------------------------------------------------------------- */

const TILE_SPANS = [
  "col-span-2 row-span-3", // 0 — large left block
  "col-span-2 row-span-2", // 1 — top right
  "col-span-1 row-span-1", // 2 — bottom right small
  "col-span-1 row-span-1", // 3 — bottom right small
  "col-span-4 row-span-1", // 4 — wide strip
  "col-span-4 row-span-1", // 5 — extra wide strip (wraps to new implicit row)
];

function BentoTile({ item, index, onSelect }) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      variants={fadeUp}
      whileHover={{ scale: 0.98 }}
      className={`group relative min-h-[56px] transform-gpu overflow-hidden rounded-xl shadow-sm shadow-gray-200/70 ring-1 ring-gray-200/50 ${TILE_SPANS[index] ?? "col-span-1 row-span-1"}`}
    >
      <Image
        src={item.src}
        alt={item.label}
        fill
        sizes="(max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />

      {/* Subtle overlay on hover only — keeps images clean by default */}
      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
    </motion.button>
  );
}
