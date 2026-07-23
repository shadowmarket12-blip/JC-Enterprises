"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiPlay,
  FiPause,
  FiArrowRight,
  FiShoppingBag,
} from "react-icons/fi";

const carouselImages = [
  {
    id: 1,
    src: "/homeslide/1.png",
    title: "Summer Collection 2024",
    subtitle: "Discover the latest trends in fashion and style",
    cta: "Shop Collection",
    tag: "New Arrival",
  },
  {
    id: 2,
    src: "/homeslide/2.png",
    title: "Tech Essentials",
    subtitle: "Upgrade your digital lifestyle with cutting-edge gadgets",
    cta: "Explore Tech",
    tag: "Hot Deal",
  },
  {
    id: 3,
    src: "/homeslide/3.png",
    title: "Premium Audio Experience",
    subtitle: "Immerse yourself in crystal clear sound quality",
    cta: "Listen Now",
    tag: "Premium",
  },
  {
    id: 4,
    src: "/homeslide/4.png",
    title: "Smart Living Solutions",
    subtitle: "Transform your home with intelligent automation",
    cta: "Discover More",
    tag: "Smart",
  },
];

export default function ProductShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 1.05,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <div className="w-full bg-white">
      {/* Carousel Container */}
      <div className="w-full px-0 sm:px-4 lg:px-6 pt-0 sm:pt-4 lg:pt-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative group/carousel">
            <div
              className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2.2/1] rounded-none sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  {/* Background Image */}
                  <Image
                    src={carouselImages[currentSlide].src}
                    alt={carouselImages[currentSlide].title}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                    quality={90}
                  />

                  {/* Subtle Dark Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full max-w-xl lg:max-w-2xl px-5 sm:px-10 lg:px-14 py-6 sm:py-10">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="space-y-3 sm:space-y-4 lg:space-y-5"
                      >
                        {/* Tag */}
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1, duration: 0.4 }}
                          className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-white/15 backdrop-blur-md rounded-full text-white text-[10px] sm:text-xs lg:text-sm font-semibold tracking-wide border border-white/20 shadow-lg"
                        >
                          {carouselImages[currentSlide].tag}
                        </motion.span>

                        {/* Title */}
                        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] sm:leading-tight tracking-tight drop-shadow-lg">
                          {carouselImages[currentSlide].title}
                        </h2>

                        {/* Subtitle */}
                        <p className="text-white/85 text-xs sm:text-base md:text-lg lg:text-xl max-w-md font-light leading-relaxed">
                          {carouselImages[currentSlide].subtitle}
                        </p>

                        {/* CTA Button */}
                        <motion.button
                          whileHover={{ scale: 1.03, y: -2 }}
                          whileTap={{ scale: 0.97 }}
                          className="group/btn inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-2.5 sm:py-3.5 bg-white text-gray-900 rounded-full font-semibold text-xs sm:text-sm lg:text-base shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                          <FiShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                          {carouselImages[currentSlide].cta}
                          <FiArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                        </motion.button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 sm:px-4 lg:px-6 pointer-events-none">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setDirection(-1);
                    setCurrentSlide(
                      (prev) =>
                        (prev - 1 + carouselImages.length) %
                        carouselImages.length,
                    );
                  }}
                  className="pointer-events-auto p-2 sm:p-3 lg:p-4 rounded-full bg-white/15 backdrop-blur-xl text-white hover:bg-white/30 transition-all shadow-xl border border-white/20 opacity-0 group-hover/carousel:opacity-100 translate-x-2 group-hover/carousel:translate-x-0 transition-all duration-300"
                >
                  <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setDirection(1);
                    setCurrentSlide(
                      (prev) => (prev + 1) % carouselImages.length,
                    );
                  }}
                  className="pointer-events-auto p-2 sm:p-3 lg:p-4 rounded-full bg-white/15 backdrop-blur-xl text-white hover:bg-white/30 transition-all shadow-xl border border-white/20 opacity-0 group-hover/carousel:opacity-100 -translate-x-2 group-hover/carousel:translate-x-0 transition-all duration-300"
                >
                  <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </motion.button>
              </div>

              {/* Bottom Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-5 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Progress Bars */}
                  <div className="flex gap-1.5 sm:gap-2 flex-1">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setDirection(index > currentSlide ? 1 : -1);
                          setCurrentSlide(index);
                        }}
                        className="flex-1 h-1 sm:h-1.5 rounded-full overflow-hidden bg-white/25 hover:bg-white/40 transition-colors"
                      >
                        <motion.div
                          initial={false}
                          animate={{
                            width: index === currentSlide ? "100%" : "0%",
                          }}
                          transition={{
                            duration: index === currentSlide ? 5 : 0.3,
                            ease: "linear",
                          }}
                          className="h-full bg-white rounded-full"
                        />
                      </button>
                    ))}
                  </div>

                  {/* Slide Counter */}
                  <div className="flex items-center gap-1 text-white/80">
                    <span className="text-xs sm:text-sm font-bold tabular-nums">
                      {String(currentSlide + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white/40 text-xs sm:text-sm">/</span>
                    <span className="text-white/40 text-xs sm:text-sm tabular-nums">
                      {String(carouselImages.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Play/Pause Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="p-1.5 sm:p-2 rounded-full bg-white/10 backdrop-blur-xl text-white hover:bg-white/25 transition-all border border-white/15"
                  >
                    {isAutoPlaying ? (
                      <FiPause className="w-3 h-3 sm:w-4 sm:h-4" />
                    ) : (
                      <FiPlay className="w-3 h-3 sm:w-4 sm:h-4" />
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
