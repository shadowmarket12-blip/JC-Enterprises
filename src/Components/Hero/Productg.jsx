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
} from "react-icons/fi";
import sliderimage from "../../../public/images/banner1.jpg";
import sliderimage2 from "../../../public/images/banner1.jpg";
import sliderimage3 from "../../../public/images/banner1.jpg";
import sliderimage4 from "../../../public/images/banner1.jpg";

const carouselImages = [
  {
    id: 1,
    src: sliderimage,
    title: "Summer Collection 2024",
    subtitle: "Discover the latest trends in fashion and style",
    cta: "Shop Collection",
    tag: "New Arrival",
    theme: "from-rose-500 via-pink-500 to-orange-400",
  },
  {
    id: 2,
    src: sliderimage2,
    title: "Tech Essentials",
    subtitle: "Upgrade your digital lifestyle with cutting-edge gadgets",
    cta: "Explore Tech",
    tag: "Hot Deal",
    theme: "from-blue-500 via-indigo-500 to-purple-600",
  },
  {
    id: 3,
    src: sliderimage3,
    title: "Premium Audio Experience",
    subtitle: "Immerse yourself in crystal clear sound quality",
    cta: "Listen Now",
    tag: "Premium",
    theme: "from-purple-500 via-violet-500 to-fuchsia-500",
  },
  {
    id: 4,
    src: sliderimage4,
    title: "Smart Living Solutions",
    subtitle: "Transform your home with intelligent automation",
    cta: "Discover More",
    tag: "Smart",
    theme: "from-emerald-500 via-teal-500 to-cyan-500",
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
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Full Width Carousel */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative group/carousel">
            <div
              className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.5/1] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-gray-400/30"
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
                  />

                  {/* Dynamic Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${carouselImages[currentSlide].theme} opacity-85`}
                  />

                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                      }}
                    />
                  </div>

                  {/* Decorative Geometric Shapes */}
                  <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96">
                    <div className="absolute top-10 right-10 w-36 h-36 sm:w-48 sm:h-48 border-2 border-white/10 rounded-full" />
                    <div className="absolute top-20 right-20 w-24 h-24 sm:w-32 sm:h-32 border-2 border-white/20 rounded-full animate-spin-slow" />
                    <div className="absolute top-14 right-14 w-16 h-16 sm:w-24 sm:h-24 border border-white/30 rounded-full animate-pulse" />
                  </div>

                  <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-72 sm:h-72">
                    <div className="absolute bottom-10 left-10 w-28 h-28 sm:w-36 sm:h-36 border-2 border-white/10 rounded-full" />
                    <div className="absolute bottom-16 left-16 w-16 h-16 sm:w-20 sm:h-20 border border-white/20 rounded-full" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full max-w-2xl px-6 sm:px-12 lg:px-16 py-8 sm:py-12">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        className="space-y-3 sm:space-y-5"
                      >
                        {/* Tag */}
                        <motion.span
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-semibold border border-white/30"
                        >
                          {carouselImages[currentSlide].tag}
                        </motion.span>

                        {/* Title */}
                        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                          {carouselImages[currentSlide].title}
                        </h2>

                        {/* Subtitle */}
                        <p className="text-white/80 text-sm sm:text-lg md:text-xl max-w-lg">
                          {carouselImages[currentSlide].subtitle}
                        </p>

                        {/* CTA Button */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="group/btn px-5 sm:px-8 py-2.5 sm:py-4 bg-white text-gray-900 rounded-full font-semibold text-sm sm:text-base hover:shadow-2xl transition-all duration-300 flex items-center gap-2 sm:gap-3 w-fit"
                        >
                          {carouselImages[currentSlide].cta}
                          <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                        </motion.button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-3 sm:px-6 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
                <motion.button
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setDirection(-1);
                    setCurrentSlide(
                      (prev) =>
                        (prev - 1 + carouselImages.length) %
                        carouselImages.length,
                    );
                  }}
                  className="p-3 sm:p-4 rounded-full bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 transition-all shadow-2xl border border-white/20"
                >
                  <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setDirection(1);
                    setCurrentSlide(
                      (prev) => (prev + 1) % carouselImages.length,
                    );
                  }}
                  className="p-3 sm:p-4 rounded-full bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 transition-all shadow-2xl border border-white/20"
                >
                  <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </div>

              {/* Bottom Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/50 to-transparent">
                <div className="flex items-center gap-4">
                  {/* Slide Counter */}
                  <div className="flex items-center gap-1 text-white">
                    <span className="text-xl sm:text-3xl font-bold">
                      {String(currentSlide + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white/40 text-lg sm:text-2xl font-light">
                      /
                    </span>
                    <span className="text-white/40 text-lg sm:text-2xl font-light">
                      {String(carouselImages.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Progress Bars */}
                  <div className="flex gap-2 flex-1">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setDirection(index > currentSlide ? 1 : -1);
                          setCurrentSlide(index);
                        }}
                        className="flex-1 h-1.5 rounded-full overflow-hidden bg-white/30"
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
                          className="h-full bg-gradient-to-r from-white to-white/80 rounded-full"
                        />
                      </button>
                    ))}
                  </div>

                  {/* Play/Pause Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="p-2.5 rounded-full bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    {isAutoPlaying ? (
                      <FiPause className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <FiPlay className="w-4 h-4 sm:w-5 sm:h-5" />
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
