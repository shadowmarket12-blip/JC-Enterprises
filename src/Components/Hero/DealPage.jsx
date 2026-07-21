"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineShoppingBag,
  HiClock,
  HiFire,
  HiArrowRight,
  HiStar,
  HiBolt,
  HiTag,
  HiArrowTrendingUp,
  HiShieldCheck,
  HiTruck,
  HiSparkles,
} from "react-icons/hi2";
import { getDealProducts } from "@/Components/utils/products";

const DealOfTheWeek = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  const [activeTab, setActiveTab] = useState(0);
  const [dealProducts, setDealProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Load deal products
  useEffect(() => {
    const loadDeals = () => {
      const deals = getDealProducts();
      setDealProducts(deals);
      setIsLoading(false);
    };

    loadDeals();
    const refreshInterval = setInterval(loadDeals, 3600000);
    return () => clearInterval(refreshInterval);
  }, []);

  // Countdown Timer Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (
          prev.days === 0 &&
          prev.hours === 0 &&
          prev.minutes === 0 &&
          prev.seconds === 0
        ) {
          return {
            days: 7,
            hours: 0,
            minutes: 0,
            seconds: 0,
          };
        }

        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Auto-rotate tabs
  useEffect(() => {
    if (dealProducts.length === 0) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % dealProducts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [dealProducts.length]);

  const formatNumber = (num) => String(num).padStart(2, "0");

  const timerUnits = [
    { label: "Days", value: formatNumber(timeLeft.days) },
    { label: "Hours", value: formatNumber(timeLeft.hours) },
    { label: "Mins", value: formatNumber(timeLeft.minutes) },
    { label: "Secs", value: formatNumber(timeLeft.seconds) },
  ];

  // Loading skeleton
  if (isLoading) {
    return (
      <section className="relative py-10 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded-full w-40 mx-auto mb-3" />
            <div className="h-8 bg-gray-200 rounded-lg w-72 mx-auto mb-2" />
            <div className="h-4 bg-gray-200 rounded w-56 mx-auto mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="aspect-square bg-gray-200 rounded-3xl" />
              <div className="space-y-3 p-6">
                <div className="h-3 bg-gray-200 rounded w-20" />
                <div className="h-6 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-10 bg-gray-200 rounded w-full mt-6" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // If no deals available
  if (dealProducts.length === 0) {
    return (
      <section className="relative py-10 sm:py-14 lg:py-16 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HiFire className="text-5xl text-red-400 mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            No Active Deals
          </h2>
          <p className="text-gray-600 mb-5">
            Check back soon for new deals and offers!
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-colors text-sm"
          >
            Browse All Products
            <HiArrowRight className="text-base" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-10 sm:py-14 lg:py-16 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        {/* Main Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-red-50" />

        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-red-200/40 via-orange-200/30 to-yellow-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-rose-200/30 via-red-200/20 to-orange-200/30 rounded-full blur-3xl animate-pulse [animation-delay:2000ms]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-red-100/20 via-transparent to-orange-100/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(to right, #ef4444 1px, transparent 1px), linear-gradient(to bottom, #ef4444 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Premium Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.8, 0],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {i % 3 === 0 ? (
              <HiSparkles className="text-red-300/40 text-sm" />
            ) : i % 3 === 1 ? (
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-400 to-orange-400 shadow-lg shadow-red-400/30" />
            ) : (
              <div className="w-2 h-2 rounded-full border border-red-300/30" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -5 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-xl shadow-red-500/30 mb-5 border-2 border-white/20"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <HiFire className="text-lg" />
            </motion.span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest">
              Limited Time Offer
            </span>
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <HiSparkles className="text-base" />
            </motion.span>
          </motion.div>

          {/* Premium Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 leading-tight">
            <span className="relative inline-block">
              Deal of the{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 bg-clip-text text-transparent bg-[length:200%_200%] animate-[gradient_3s_ease_infinite]">
                  Week
                </span>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-red-500/20 via-rose-500/20 to-orange-500/20 blur-xl rounded-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </span>
          </h2>

          {/* Premium Subtitle */}
          <motion.p
            className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            New offers on selected products, updated regularly. Hurry Up!
          </motion.p>
        </motion.div>

        {/* Premium Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12"
        >
          <div className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-xl rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-100">
            <HiClock className="text-xl sm:text-2xl text-red-500" />
            {timerUnits.map((unit, index) => (
              <div
                key={unit.label}
                className="flex items-center gap-2 sm:gap-3"
              >
                <div className="text-center">
                  <motion.div
                    key={unit.value}
                    initial={{ y: -15, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    className="relative bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200/50 px-3 sm:px-4 py-2 sm:py-2.5 min-w-[55px] sm:min-w-[70px]"
                  >
                    <span className="text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent tabular-nums">
                      {unit.value}
                    </span>
                    <span className="block text-[10px] sm:text-xs font-semibold text-gray-500 mt-0.5 uppercase tracking-wider">
                      {unit.label}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </div>
                {index < timerUnits.length - 1 && (
                  <motion.span
                    className="text-xl sm:text-2xl font-black text-red-400"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    :
                  </motion.span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Premium Main Deal Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative bg-white rounded-2xl lg:rounded-3xl shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-100">
            {/* Card Glow Effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-rose-500 rounded-2xl lg:rounded-3xl opacity-0 blur-xl transition-opacity duration-500"
              animate={{ opacity: isHovered ? 0.15 : 0 }}
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-2">
              {/* Premium Product Image Side */}
              <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 p-6 sm:p-8 lg:p-12">
                <div className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-inner">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={
                          dealProducts[activeTab]?.image ||
                          "/images/placeholder.jpg"
                        }
                        alt={dealProducts[activeTab]?.name || "Product"}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Premium Discount Badge */}
                  {dealProducts[activeTab]?.discount && (
                    <motion.div
                      className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10"
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, -2, 2, 0],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-red-500 blur-md rounded-full opacity-50" />
                        <span className="relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-black text-white bg-gradient-to-r from-red-500 to-rose-500 shadow-xl border-2 border-white/30 flex items-center gap-1.5">
                          <HiBolt className="text-base sm:text-lg" />
                          {dealProducts[activeTab].discount}% OFF
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {/* Premium Product Badge */}
                  {dealProducts[activeTab]?.badge && (
                    <motion.div
                      className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10"
                      initial={{ x: 40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-white/95 backdrop-blur-sm shadow-lg border border-gray-200 flex items-center gap-1.5">
                        <HiShieldCheck className="text-green-500 text-sm sm:text-base" />
                        {dealProducts[activeTab].badge}
                      </span>
                    </motion.div>
                  )}

                  {/* Premium Stock Indicator */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-gray-200/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs sm:text-sm font-bold text-gray-600 flex items-center gap-1.5">
                          <HiFire className="text-red-500 text-sm sm:text-base" />
                          {dealProducts[activeTab]?.sold || 0} sold
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-red-500 flex items-center gap-1.5">
                          <HiClock className="text-sm sm:text-base" />
                          {dealProducts[activeTab]
                            ? dealProducts[activeTab].total -
                              dealProducts[activeTab].sold
                            : 0}{" "}
                          left
                        </span>
                      </div>
                      <div className="w-full bg-gray-200/50 rounded-full h-2.5 sm:h-3 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-[length:300%_300%] animate-[gradient_3s_ease_infinite]"
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${
                              dealProducts[activeTab]
                                ? (dealProducts[activeTab].sold /
                                    dealProducts[activeTab].total) *
                                  100
                                : 0
                            }%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.5,
                            delay: 0.5,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium Product Details Side */}
              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50/50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {/* Premium Category Tags */}
                    <div className="flex items-center gap-2.5 mb-4">
                      <span className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 border border-gray-200 flex items-center gap-1.5">
                        <HiTag className="text-gray-500 text-sm" />
                        {dealProducts[activeTab]?.category}
                      </span>
                      <span className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-50 to-blue-100/50 text-blue-700 border border-blue-200 flex items-center gap-1.5">
                        {dealProducts[activeTab]?.brand}
                      </span>
                    </div>

                    {/* Premium Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                          >
                            <HiStar
                              className={`text-base sm:text-lg ${i < Math.floor(dealProducts[activeTab]?.rating || 0) ? "text-yellow-400 drop-shadow-sm" : "text-gray-200"}`}
                            />
                          </motion.div>
                        ))}
                      </div>
                      <span className="text-sm sm:text-base font-bold text-gray-700">
                        {dealProducts[activeTab]?.rating}
                      </span>
                      <span className="text-sm text-gray-400">
                        ({dealProducts[activeTab]?.reviews?.toLocaleString()}{" "}
                        reviews)
                      </span>
                    </div>

                    {/* Premium Product Name */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-4 leading-tight">
                      {dealProducts[activeTab]?.name}
                    </h3>

                    {/* Premium Price Section */}
                    <div className="flex items-baseline gap-3 mb-4">
                      <div className="relative">
                        <span className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                          ₹{dealProducts[activeTab]?.price?.toLocaleString()}
                        </span>
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                          animate={{ scaleX: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                      {dealProducts[activeTab]?.originalPrice && (
                        <div className="flex items-center gap-1">
                          <span className="text-lg sm:text-xl text-gray-400 line-through font-medium">
                            ₹
                            {dealProducts[
                              activeTab
                            ]?.originalPrice?.toLocaleString()}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Premium Savings Badge */}
                    {dealProducts[activeTab]?.originalPrice && (
                      <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 mb-5"
                        whileHover={{ scale: 1.05 }}
                      >
                        <HiArrowTrendingUp className="text-green-600 text-base sm:text-lg" />
                        <span className="text-sm sm:text-base font-bold text-green-600">
                          Save ₹
                          {(
                            dealProducts[activeTab].originalPrice -
                            dealProducts[activeTab].price
                          ).toLocaleString()}
                        </span>
                      </motion.div>
                    )}

                    {/* Premium Features */}
                    {dealProducts[activeTab]?.features && (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {dealProducts[activeTab].features
                          .slice(0, 3)
                          .map((feature, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * index }}
                              className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-gray-50 to-white text-gray-700 border border-gray-200 shadow-sm flex items-center gap-1.5"
                            >
                              <HiShieldCheck className="text-green-500 text-sm" />
                              {feature}
                            </motion.span>
                          ))}
                        {dealProducts[activeTab].features.length > 3 && (
                          <span className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-gray-50 text-gray-500 border border-gray-200">
                            +{dealProducts[activeTab].features.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Premium CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/products/${dealProducts[activeTab]?.slug}`}
                        className="flex-1"
                      >
                        <motion.button
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="relative w-full px-6 sm:px-8 py-4 sm:py-4 rounded-2xl bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 text-white font-bold text-base sm:text-lg shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 overflow-hidden group"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <HiOutlineShoppingBag className="text-xl sm:text-2xl" />
                            Grab This Deal
                            <motion.span
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <HiArrowRight className="text-xl sm:text-2xl" />
                            </motion.span>
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>
                      </Link>

                      <Link href="/products" className="sm:flex-shrink-0">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-4 rounded-2xl border-2 border-gray-200 text-gray-700 font-semibold text-base sm:text-lg hover:border-gray-300 hover:bg-gray-50 transition-all bg-white/50 backdrop-blur-sm"
                        >
                          View All Deals
                        </motion.button>
                      </Link>
                    </div>

                    {/* Premium Trust Badges */}
                    <div className="flex items-center gap-4 sm:gap-5 mt-5 pt-5 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                        <HiTruck className="text-green-500 text-base sm:text-lg" />
                        <span>Free Shipping</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                        <HiShieldCheck className="text-green-500 text-base sm:text-lg" />
                        <span>Warranty</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                        <HiClock className="text-green-500 text-base sm:text-lg" />
                        <span>24/7 Support</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Premium Navigation Dots */}
            {dealProducts.length > 1 && (
              <div className="absolute bottom-5 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2.5 bg-white/95 backdrop-blur-xl rounded-full px-4 sm:px-5 py-2.5 shadow-xl border border-gray-200/50 z-10">
                {dealProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`relative rounded-full transition-all duration-500 ${
                      activeTab === index
                        ? "w-10 sm:w-12 h-3 sm:h-3.5 bg-gradient-to-r from-red-500 to-orange-500 shadow-lg shadow-red-500/30"
                        : "w-3 sm:w-3.5 h-3 sm:h-3.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`View deal ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Premium Quick Deal Cards */}
        {dealProducts.length > 1 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 max-w-6xl mx-auto">
            {dealProducts.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`group relative bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 ${
                  activeTab === index
                    ? "ring-2 ring-red-400 ring-offset-2 shadow-red-500/20"
                    : "border border-gray-100 hover:border-gray-200"
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 mb-2 sm:mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.discount && (
                    <span className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black text-white bg-gradient-to-r from-red-500 to-rose-500 shadow-lg">
                      -{product.discount}%
                    </span>
                  )}
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-gray-900 line-clamp-2 mb-1.5 sm:mb-2 group-hover:text-red-600 transition-colors">
                  {product.name}
                </h4>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm sm:text-base bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    ₹{product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-[10px] sm:text-xs text-gray-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Premium Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8 sm:mt-10"
        >
          <Link
            href="/products?sort=discount"
            className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gray-900 text-white font-bold text-sm sm:text-base hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
              <HiBolt className="text-lg sm:text-xl text-yellow-400" />
              Shop All Deals
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <HiArrowRight className="text-lg sm:text-xl" />
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DealOfTheWeek;
