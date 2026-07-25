"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiPlay, FiPause } from "react-icons/fi";

const carouselImages = [
  {
    id: 1,
    src: "/homeslide/1.png",
  },
  {
    id: 2,
    src: "/homeslide/2.png",
  },
  {
    id: 3,
    src: "/homeslide/3.png",
  },
  {
    id: 4,
    src: "/homeslide/4.png",
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
                    alt={`Slide ${currentSlide + 1}`}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                    quality={90}
                  />
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
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-5 bg-gradient-to-t from-black/40 to-transparent">
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
