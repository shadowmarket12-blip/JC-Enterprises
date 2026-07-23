"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

const AUTOPLAY_MS = 6500;

const SLIDES = [
  {
    id: "slide-1",
    image: "/homeslide/1.png",
  },
  {
    id: "slide-2",
    image: "/homeslide/2.png",
  },
  {
    id: "slide-3",
    image: "/homeslide/3.png",
  },
  {
    id: "slide-4",
    image: "/homeslide/4.png",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
};

const lineVariants = {
  hidden: { y: "100%" },
  visible: { y: "0%", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function ArrowIcon({ direction = "right" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={direction === "left" ? "rotate-180" : ""}
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const timeoutRef = useRef(null);
  const total = SLIDES.length;
  const slide = SLIDES[index];

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 45, damping: 20 });
  const springY = useSpring(mvY, { stiffness: 45, damping: 20 });
  const bgX = useTransform(springX, [-0.5, 0.5], [-18, 18]);
  const bgY = useTransform(springY, [-0.5, 0.5], [-12, 12]);

  const goTo = useCallback(
    (i) => {
      setIndex(((i % total) + total) % total);
      setProgressKey((k) => k + 1);
    },
    [total],
  );

  const paginate = useCallback((delta) => goTo(index + delta), [goTo, index]);

  useEffect(() => {
    if (isPaused || reduceMotion) return undefined;
    timeoutRef.current = setTimeout(() => paginate(1), AUTOPLAY_MS);
    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, isPaused, reduceMotion]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mvX.set((e.clientX - rect.left) / rect.width - 0.5);
    mvY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") paginate(1);
    if (e.key === "ArrowLeft") paginate(-1);
  };

  const handleDragEnd = (_e, info) => {
    if (info.offset.x < -80 || info.velocity.x < -500) paginate(1);
    else if (info.offset.x > 80 || info.velocity.x > 500) paginate(-1);
  };

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured collections"
      tabIndex={0}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onMouseMove={handleMouseMove}
      onKeyDown={handleKeyDown}
      className="relative w-full h-[60vh] sm:h-[70vh] min-h-[400px] max-h-[800px] overflow-hidden bg-[#0B0B0C] text-[#F5F1EA] select-none outline-none"
    >
      {/* sr-only live announcement */}
      <div className="sr-only" aria-live="polite">
        {`Slide ${index + 1} of ${total}`}
      </div>

      {/* autoplay progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] z-30 bg-white/10">
        {!reduceMotion && (
          <motion.div
            key={progressKey}
            className="h-full bg-[#C9A961]"
            initial={{ width: "0%" }}
            animate={{ width: isPaused ? "0%" : "100%" }}
            transition={{
              duration: isPaused ? 0.2 : AUTOPLAY_MS / 1000,
              ease: "linear",
            }}
          />
        )}
      </div>

      {/* slides */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.9, ease: "easeInOut" },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
        >
          {/* background image w/ mouse parallax + ken-burns */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              style={{ x: bgX, y: bgY }}
              className="absolute -inset-[5%]"
            >
              <motion.div
                className="relative w-full h-full"
                initial={{ scale: 1 }}
                animate={{ scale: reduceMotion ? 1 : 1.12 }}
                transition={{ duration: 9, ease: "linear" }}
              >
                <Image
                  src={slide.image}
                  alt={`Banner ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                  quality={90}
                />
              </motion.div>
            </motion.div>
            {/* Reduced overlay opacity for better image visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent" />
          </div>

          {/* Text content - Top Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="absolute top-6 sm:top-10 md:top-16 left-4 sm:left-8 md:left-12 lg:left-20 right-4 sm:right-8 md:right-12 z-20 max-w-full sm:max-w-xl md:max-w-2xl"
          >
            {/* Eyebrow */}
            <motion.p
              variants={fadeUpVariants}
              className="text-[10px] sm:text-[11px] md:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#C9A961] mb-2 sm:mb-3 text-center sm:text-left"
            >
              Welcome to JC Enterprises
            </motion.p>

            {/* Main Heading */}
            <h1 className="text-[clamp(1.5rem,5vw,2.5rem)] sm:text-[clamp(2rem,5vw,3rem)] md:text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.1] sm:leading-[1.1] font-bold mb-3 sm:mb-4 text-center sm:text-left text-white drop-shadow-lg">
              <span className="block overflow-hidden">
                <motion.span variants={lineVariants} className="block">
                  Best Electrical Shop
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span variants={lineVariants} className="block">
                  in Bhubaneswar
                </motion.span>
              </span>
            </h1>

            {/* Features List */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap justify-center sm:justify-start items-center gap-x-3 sm:gap-x-4 gap-y-1.5 sm:gap-y-2 text-xs sm:text-sm md:text-base text-white/90 mb-4 sm:mb-5 md:mb-6"
            >
              <span className="flex items-center gap-1 sm:gap-1.5">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#C9A961] flex-shrink-0" />
                <span className="whitespace-nowrap">35+ Years of Trust</span>
              </span>
              <span className="flex items-center gap-1 sm:gap-1.5">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#C9A961] flex-shrink-0" />
                <span className="whitespace-nowrap">
                  Genuine Branded Products
                </span>
              </span>
              <span className="flex items-center gap-1 sm:gap-1.5">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#C9A961] flex-shrink-0" />
                <span className="whitespace-nowrap">Retail & Wholesale</span>
              </span>
              <span className="flex items-center gap-1 sm:gap-1.5">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#C9A961] flex-shrink-0" />
                <span className="whitespace-nowrap">
                  Home Delivery Across Bhubaneswar
                </span>
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-3"
            >
              <Link
                href="/products"
                className="group inline-flex items-center gap-1.5 sm:gap-2 bg-[#F5F1EA] text-[#0B0B0C] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-colors duration-300 hover:bg-[#C9A961] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A961]"
              >
                Shop Now
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-white/90 border border-white/30 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 hover:border-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore Brands
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* bottom control bar: tick-rail pagination + arrows */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex items-center justify-between gap-4 sm:gap-6 px-4 sm:px-6 md:px-12 lg:px-20 pb-3 sm:pb-4 md:pb-6">
        <div
          role="tablist"
          aria-label="Slide navigation"
          className="flex items-center gap-2 sm:gap-3 md:gap-4"
        >
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className="group flex items-center gap-1.5 sm:gap-2 py-1.5 sm:py-2"
            >
              <span
                className={`font-mono text-[10px] sm:text-[11px] tracking-wider transition-colors duration-300 ${
                  i === index
                    ? "text-[#C9A961]"
                    : "text-white/40 group-hover:text-white/70"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`h-[2px] rounded-full transition-all duration-500 ${
                  i === index
                    ? "w-6 sm:w-8 md:w-10 bg-[#C9A961]"
                    : "w-3 sm:w-4 bg-white/25 group-hover:bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            aria-label="Previous slide"
            onClick={() => paginate(-1)}
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 rounded-full border border-white/25 flex items-center justify-center text-white transition-colors duration-300 hover:bg-white/10 hover:border-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            aria-label="Next slide"
            onClick={() => paginate(1)}
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 rounded-full border border-white/25 flex items-center justify-center text-white transition-colors duration-300 hover:bg-white/10 hover:border-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
