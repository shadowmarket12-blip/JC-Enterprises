"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  FiAward,
  FiShield,
  FiShoppingBag,
  FiPackage,
  FiStar,
  FiTruck,
  FiCheckCircle,
} from "react-icons/fi";

const trustItems = [
  {
    icon: FiAward,
    value: 35,
    suffix: "+",
    label: "Years in Business",
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
    borderColor: "border-amber-200",
    shadowColor: "shadow-amber-500/10",
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-500",
  },
  {
    icon: FiShield,
    value: 100,
    suffix: "%",
    label: "Genuine Products",
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    shadowColor: "shadow-emerald-500/10",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-green-500",
  },
  {
    icon: FiShoppingBag,
    value: 2,
    suffix: "x",
    label: "Retail & Wholesale",
    color: "from-blue-400 to-indigo-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
    shadowColor: "shadow-blue-500/10",
    gradientFrom: "from-blue-500",
    gradientTo: "to-indigo-500",
  },
  {
    icon: FiPackage,
    value: 10000,
    suffix: "+",
    label: "Products Available",
    color: "from-purple-400 to-violet-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-200",
    shadowColor: "shadow-purple-500/10",
    gradientFrom: "from-purple-500",
    gradientTo: "to-violet-500",
  },
  {
    icon: FiStar,
    value: 20,
    suffix: "+",
    label: "Trusted Brands",
    color: "from-rose-400 to-pink-500",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
    borderColor: "border-rose-200",
    shadowColor: "shadow-rose-500/10",
    gradientFrom: "from-rose-500",
    gradientTo: "to-pink-500",
  },
  {
    icon: FiTruck,
    value: 1,
    suffix: "",
    label: "Home Delivery Across Bhubaneswar",
    color: "from-cyan-400 to-teal-500",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
    borderColor: "border-cyan-200",
    shadowColor: "shadow-cyan-500/10",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-teal-500",
    fullText: true,
  },
];

function CountUpAnimation({ targetValue, suffix, duration = 2.5 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentValue = Math.floor(easeOutExpo * targetValue);

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [hasStarted, targetValue, duration]);

  return (
    <span ref={ref} className="font-bold tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function TrustBar() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.03)_0%,transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(30deg, #3B82F6 1px, transparent 1px), linear-gradient(-30deg, #8B5CF6 1px, transparent 1px)`,
            backgroundSize: "80px 80px, 80px 80px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-3 text-black"
            // style={{ color: "#082d4a" }}
          >
            Numbers That Speak
          </h2>

          <p className="text-black text-sm sm:text-base max-w-xl mx-auto">
            Our commitment to excellence is reflected in every number
          </p>
        </motion.div>

        {/* Trust Items Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative"
            >
              <div
                className={`relative h-full bg-white rounded-2xl p-5 sm:p-6 lg:p-7 border ${item.borderColor} shadow-lg ${item.shadowColor} hover:shadow-2xl transition-all duration-500 overflow-hidden`}
              >
                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl`}
                />

                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />

                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.6,
                  }}
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl ${item.bgColor} border ${item.borderColor} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                  />
                  <item.icon
                    className={`w-7 h-7 sm:w-8 sm:h-8 ${item.iconColor} relative z-10 group-hover:scale-110 transition-transform duration-500`}
                  />
                </motion.div>

                {/* Counter Number */}
                <div className="text-center mb-2">
                  {item.fullText ? (
                    <div className="text-center">
                      <span className="text-xs sm:text-sm lg:text-base text-black font-medium leading-tight block max-w-[140px] mx-auto text-center">
                        Home Delivery
                      </span>
                      <span className="text-xs sm:text-sm lg:text-base text-black font-medium leading-tight block max-w-[140px] mx-auto text-center">
                        Across Bhubaneswar
                      </span>
                    </div>
                  ) : (
                    <div className="relative inline-block">
                      <span
                        className={`text-2xl sm:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} bg-clip-text text-transparent`}
                      >
                        <CountUpAnimation
                          targetValue={item.value}
                          suffix={item.suffix}
                        />
                      </span>
                      {/* Glow Effect */}
                      <div
                        className={`absolute -inset-2 bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} opacity-0 group-hover:opacity-10 blur-xl rounded-full transition-opacity duration-500`}
                      />
                    </div>
                  )}
                </div>

                {/* Label */}
                {!item.fullText && (
                  <p className="text-center text-xs sm:text-sm text-black group-hover:text-gray-700 transition-colors duration-500 font-medium whitespace-nowrap">
                    {item.label}
                  </p>
                )}

                {/* Decorative Dots */}
                <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo}`}
                  />
                  <div
                    className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} opacity-60`}
                  />
                  <div
                    className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} opacity-30`}
                  />
                </div>
              </div>

              {/* Card Shadow Glow on Hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-xl -z-10 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 sm:mt-14 lg:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          {/* Rating Badge */}
          <div className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-md"
                >
                  <FiStar className="w-4 h-4 text-white fill-white" />
                </div>
              ))}
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">
                4.9/5 Rating
              </div>
              <div className="text-xs text-gray-500">10,000+ Reviews</div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-12 bg-gray-200" />

          {/* Customer Count */}
          <div className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              <FiCheckCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">50,000+</div>
              <div className="text-xs text-gray-500">Happy Customers</div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-12 bg-gray-200" />

          {/* Delivery Badge */}
          <div className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
              <FiTruck className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">
                Free Delivery
              </div>
              <div className="text-xs text-gray-500">Across Bhubaneswar</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
