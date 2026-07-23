"use client";

import { motion } from "framer-motion";
import { HiEye, HiLightBulb, HiSparkles, HiCheckBadge } from "react-icons/hi2";
import { FaBullseye, FaStar } from "react-icons/fa6";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function MissionVision() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#082d4a]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#082d4a]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Mission & Vision Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Mission Card */}
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#082d4a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#082d4a]/10 to-transparent rounded-bl-full" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: "#082d4a" }}
                  >
                    <FaBullseye className="text-white text-2xl" />
                  </motion.div>
                </div>

                {/* Badge */}
                <div className="inline-block mb-4">
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full text-white uppercase tracking-wider"
                    style={{ backgroundColor: "#082d4a" }}
                  >
                    Our Mission
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  What Drives{" "}
                  <span style={{ color: "#082d4a" }}>Us Forward</span>
                </h2>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  To make premium electrical products easily accessible through
                  genuine brands, competitive pricing, expert guidance, and
                  outstanding customer service while continuously improving the
                  shopping experience.
                </p>

                {/* Bottom Line */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "#082d4a" }}
                  >
                    <HiSparkles className="text-lg" />
                    <span className="font-semibold">
                      Excellence in every connection
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#082d4a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Decorative Corner */}
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#082d4a]/10 to-transparent rounded-tr-full" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: "#082d4a" }}
                  >
                    <HiEye className="text-white text-2xl" />
                  </motion.div>
                </div>

                {/* Badge */}
                <div className="inline-block mb-4">
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full text-white uppercase tracking-wider"
                    style={{ backgroundColor: "#082d4a" }}
                  >
                    Our Vision
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Where We're <span style={{ color: "#082d4a" }}>Headed</span>
                </h2>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  To become Odisha's most trusted destination for electrical and
                  industrial products by combining 35+ years of expertise with a
                  modern eCommerce platform that offers convenience,
                  reliability, and value.
                </p>

                {/* Bottom Line */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "#082d4a" }}
                  >
                    <HiSparkles className="text-lg" />
                    <span className="font-semibold">
                      Building tomorrow, today
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-10">
            <motion.div variants={fadeInUp} className="inline-block mb-3">
              <span
                className="text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider"
                style={{ backgroundColor: "#082d4a" }}
              >
                Why Choose Us
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3"
            >
              The <span style={{ color: "#082d4a" }}>JC Enterprises</span>{" "}
              Difference
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto"
            >
              Experience why we're Bhubaneswar's most trusted electrical shop
            </motion.p>
          </div>

          <motion.div
            variants={scaleIn}
            className="relative bg-gradient-to-br from-[#082d4a] to-[#0d4f7c] rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "30px 30px",
                }}
              />
            </div>

            <div className="relative">
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-center">
                {/* Left Content */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <HiCheckBadge className="text-yellow-400 text-3xl" />
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      Quality You Can Trust
                    </h3>
                  </div>

                  <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                    Choosing the best electrical shop in Bhubaneswar means
                    choosing a business you can trust. JC Enterprises combines
                    experience, quality, affordability, and customer-first
                    service to deliver dependable electrical solutions.
                  </p>

                  <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                    Every product is carefully sourced from reputed
                    manufacturers to ensure safety, durability, and long-lasting
                    performance. Our commitment extends beyond selling
                    products—we aim to build lasting relationships through
                    honesty, reliability, and consistent service excellence.
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {[
                      "35+ Years Experience",
                      "Genuine Products",
                      "Best Pricing",
                      "Expert Guidance",
                      "Home Delivery",
                    ].map((pill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="text-xs sm:text-sm font-medium px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-default"
                      >
                        {pill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Right Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "35+", label: "Years of Trust" },
                    { value: "50+", label: "Top Brands" },
                    { value: "10K+", label: "Products" },
                    { value: "100%", label: "Satisfaction" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-white/70 text-xs sm:text-sm">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Trust Indicators */}
          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-3 gap-4 mt-8"
          >
            {[
              {
                icon: FaStar,
                title: "Premium Quality",
                description: "Every product sourced from trusted manufacturers",
              },
              {
                icon: HiLightBulb,
                title: "Expert Solutions",
                description: "35+ years of industry knowledge at your service",
              },
              {
                icon: HiCheckBadge,
                title: "100% Genuine",
                description: "Authentic products with manufacturer warranty",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                style={{ borderColor: "#082d4a20" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#082d4a")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#082d4a20")
                }
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "#082d4a" }}
                >
                  <item.icon className="text-white text-xl" />
                </div>
                <h4 className="text-gray-900 font-semibold text-sm mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-xs">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
