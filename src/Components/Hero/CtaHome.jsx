"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  HiArrowRight,
  HiShoppingBag,
  HiPhone,
  HiCube,
  HiSparkles,
  HiShieldCheck,
  HiMapPin,
  HiStar,
  HiBolt,
  HiTruck,
  HiClock,
} from "react-icons/hi2";

const FinalCTA = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-white"
    >
      {/* Subtle Animated Accent Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            className="absolute -top-10 -left-10 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[#082d4a]/10 to-transparent rotate-45"
            animate={{
              x: [0, 50, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[#0d4f7c]/10 to-transparent -rotate-45"
            animate={{
              x: [0, -50, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Premium Animated Icon */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6 sm:mb-8"
          >
            <div className="relative">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute -inset-6 sm:-inset-8 rounded-full border-2 border-dashed border-[#082d4a]/8"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              {/* Middle rotating ring */}
              <motion.div
                className="absolute -inset-3 sm:-inset-5 rounded-full border border-[#082d4a]/12"
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />

              {/* Center icon with subtle glow */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-[#082d4a] to-[#0d4f7c] flex items-center justify-center shadow-lg shadow-[#082d4a]/20">
                <HiBolt className="text-white text-xl sm:text-2xl lg:text-3xl" />
              </div>
            </div>
          </motion.div>

          {/* Enhanced Badge */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-3 sm:mb-4"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-[#082d4a]/8 to-[#0d4f7c]/8 border border-[#082d4a]/15 backdrop-blur-sm">
              <HiSparkles className="text-[#082d4a] text-xs sm:text-sm" />
              <span className="text-[#082d4a] font-bold text-[10px] sm:text-xs lg:text-sm tracking-widest uppercase">
                Let&apos;s Build Something Great
              </span>
              <HiSparkles className="text-[#082d4a] text-xs sm:text-sm" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-center mb-3 sm:mb-4 leading-tight px-2"
          >
            <span className="text-gray-800">Looking for Quality</span>
            <br className="sm:hidden" />
            <span className="sm:inline"> </span>
            <span className="relative inline-block mx-1">
              <span className="bg-gradient-to-r from-[#082d4a] via-[#0d4f7c] to-[#082d4a] bg-clip-text text-transparent">
                Electrical Products
              </span>
              <svg
                className="absolute -bottom-2 sm:-bottom-3 left-0 w-full"
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="underlineGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#082d4a" stopOpacity="0" />
                    <stop offset="50%" stopColor="#082d4a" stopOpacity="1" />
                    <stop offset="100%" stopColor="#082d4a" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 10 Q 50 20 100 10 Q 150 0 200 10"
                  stroke="url(#underlineGrad)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="text-gray-800">?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm lg:text-base text-gray-600 max-w-3xl mx-auto text-center mb-6 sm:mb-8 leading-relaxed px-4"
          >
            Whether you&apos;re renovating your home, managing a commercial
            project, or sourcing materials in bulk —{" "}
            <span className="font-bold text-[#082d4a]">JC Enterprises</span> is
            ready to help, with genuine products and reliable delivery across
            Bhubaneswar.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 lg:gap-4 mb-8 sm:mb-10"
          >
            {/* Primary - Shop Now */}
            <Link href="/products" className="w-full sm:w-auto group">
              <div className="relative w-full sm:w-auto px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-2xl bg-gradient-to-r from-[#082d4a] via-[#0a3557] to-[#0d4f7c] text-white font-bold text-xs sm:text-sm lg:text-base shadow-lg shadow-[#082d4a]/20 hover:shadow-xl hover:shadow-[#082d4a]/30 transition-all duration-300 cursor-pointer overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <HiShoppingBag className="text-base sm:text-lg lg:text-xl" />
                  <span>Shop Now</span>
                  <HiArrowRight className="text-base sm:text-lg lg:text-xl group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>
            </Link>

            {/* Secondary - Contact Us */}
            <Link href="/contact" className="w-full sm:w-auto group">
              <div className="relative w-full sm:w-auto px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-2xl border-2 border-[#082d4a] text-[#082d4a] font-bold text-xs sm:text-sm lg:text-base hover:text-white transition-all duration-300 overflow-hidden shadow-md hover:shadow-lg cursor-pointer">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <HiPhone className="text-base sm:text-lg lg:text-xl" />
                  <span>Contact Us</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#082d4a] to-[#0d4f7c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </Link>

            {/* Tertiary - Bulk Quote */}
            <Link href="/bulk-quote" className="w-full sm:w-auto group">
              <div className="relative w-full sm:w-auto px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-2xl bg-gray-50 text-[#082d4a] font-bold text-xs sm:text-sm lg:text-base hover:bg-[#082d4a]/5 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer border-2 border-transparent hover:border-[#082d4a]/20">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <HiCube className="text-base sm:text-lg lg:text-xl" />
                  <span>Request Bulk Quote</span>
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Trust Indicators with Glass Effect */}
          <motion.div variants={itemVariants}>
            <div className="relative flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl bg-white border border-gray-200 shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-lg bg-green-50 flex items-center justify-center">
                  <HiShieldCheck className="text-green-500 text-sm sm:text-base lg:text-lg" />
                </div>
                <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-gray-700">
                  100% Genuine Products
                </span>
              </div>
              <div className="hidden sm:block w-[1px] h-5 bg-gray-300" />
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-lg bg-green-50 flex items-center justify-center">
                  <HiTruck className="text-green-500 text-sm sm:text-base lg:text-lg" />
                </div>
                <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-gray-700">
                  Free Bhubaneswar Delivery
                </span>
              </div>
              <div className="hidden sm:block w-[1px] h-5 bg-gray-300" />
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-lg bg-green-50 flex items-center justify-center">
                  <HiClock className="text-green-500 text-sm sm:text-base lg:text-lg" />
                </div>
                <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-gray-700">
                  Same Day Dispatch
                </span>
              </div>
              <div className="hidden sm:block w-[1px] h-5 bg-gray-300" />
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                  <HiMapPin className="text-[#082d4a] text-sm sm:text-base lg:text-lg" />
                </div>
                <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-gray-700">
                  Serving Since 2010
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bottom Highlight */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-5 sm:mt-6"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border-2 border-yellow-300/40 shadow-md shadow-yellow-100/50">
              <HiStar className="text-yellow-500 text-xs sm:text-sm lg:text-base" />
              <span className="text-yellow-800 font-bold text-[10px] sm:text-xs lg:text-sm">
                Trusted by 5000+ Happy Customers Across Bhubaneswar
              </span>
              <HiStar className="text-yellow-500 text-xs sm:text-sm lg:text-base" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
