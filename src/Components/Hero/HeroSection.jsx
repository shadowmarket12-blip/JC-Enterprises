"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ImageSlider from "./ImageSlider";
import ProductGrid from "./Productg";

export default function HeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const rate = scrolled * 0.15;

        const sliderElement =
          sectionRef.current.querySelector(".parallax-slider");
        if (sliderElement && rect.top < window.innerHeight && rect.bottom > 0) {
          sliderElement.style.transform = `translateY(${rate}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Mobile: Stack layout */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Left Side - Image Slider (70% on desktop, 60% on tablet) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[70%] xl:w-[70%] parallax-slider"
          >
            <div className="h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
              <ImageSlider />
            </div>
          </motion.div>

          {/* Right Side - Product Grid (30% on desktop, 40% on tablet) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-[30%] xl:w-[30%]"
          >
            <div className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[450px] xl:h-[500px]">
              <ProductGrid />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
