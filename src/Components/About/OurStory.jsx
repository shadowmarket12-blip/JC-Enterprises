"use client";

import { motion } from "framer-motion";
import {
  HiShieldCheck,
  HiTruck,
  HiStar,
  HiCurrencyDollar,
  HiBuildingStorefront,
  HiHome,
  HiUserGroup,
  HiDocumentText,
  HiLightBulb,
  HiLockClosed,
  HiPhone,
  HiCheckCircle,
} from "react-icons/hi2";
import { FaBolt, FaIndustry } from "react-icons/fa6";

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
      staggerChildren: 0.08,
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

const features = [
  {
    icon: HiShieldCheck,
    title: "35+ Years Experience",
    description: "Trusted industry expertise",
  },
  {
    icon: HiStar,
    title: "Premium Quality",
    description: "Genuine & authentic products",
  },
  {
    icon: HiCurrencyDollar,
    title: "Best Pricing",
    description: "Affordable & transparent rates",
  },
  {
    icon: HiBuildingStorefront,
    title: "Top Brands",
    description: "National & international names",
  },
  { icon: HiTruck, title: "Home Delivery", description: "Across Bhubaneswar" },
  {
    icon: FaIndustry,
    title: "Bulk Orders",
    description: "For contractors & businesses",
  },
  {
    icon: HiDocumentText,
    title: "GST Billing",
    description: "Proper invoicing",
  },
  {
    icon: HiUserGroup,
    title: "Expert Guidance",
    description: "Professional product advice",
  },
  {
    icon: HiLockClosed,
    title: "Secure Shopping",
    description: "Safe transactions",
  },
  {
    icon: HiPhone,
    title: "Customer Support",
    description: "Dedicated assistance",
  },
  {
    icon: HiHome,
    title: "Retail & Wholesale",
    description: "Complete supply solutions",
  },
];

const products = [
  {
    category: "Wiring Solutions",
    items: ["Wires & Cables", "PVC Conduit Fittings", "Cable Accessories"],
    gradient: "from-[#082d4a] to-[#0d4f7c]",
    bgGradient: "from-[#082d4a]/5 to-[#0d4f7c]/5",
    borderHover: "hover:border-[#082d4a]/30",
  },
  {
    category: "Switchgear",
    items: ["Switches & Sockets", "MCBs & RCCBs", "Distribution Boards"],
    gradient: "from-[#082d4a] to-[#0d4f7c]",
    bgGradient: "from-[#082d4a]/5 to-[#0d4f7c]/5",
    borderHover: "hover:border-[#082d4a]/30",
  },
  {
    category: "Lighting",
    items: ["LED Lighting", "Ceiling Fans", "Exhaust Fans"],
    gradient: "from-[#082d4a] to-[#0d4f7c]",
    bgGradient: "from-[#082d4a]/5 to-[#0d4f7c]/5",
    borderHover: "hover:border-[#082d4a]/30",
  },
  {
    category: "Industrial",
    items: ["Water Pumps", "Industrial Plugs", "Testing Equipment"],
    gradient: "from-[#082d4a] to-[#0d4f7c]",
    bgGradient: "from-[#082d4a]/5 to-[#0d4f7c]/5",
    borderHover: "hover:border-[#082d4a]/30",
  },
];

export default function OurStory() {
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Our Story Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="text-center mb-10">
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black mb-3"
            >
              Our Story
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                JC Enterprises started with a simple vision—to provide genuine
                electrical products with honest pricing and dependable customer
                service. Over the years, our commitment to quality has helped us
                grow into one of the best electrical shops in Bhubaneswar.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                For more than three decades, we have built long-term
                relationships with customers by understanding their requirements
                and recommending reliable electrical solutions. Whether it's a
                small home renovation or a large commercial project, our goal
                has always remained the same:
                <span className="font-semibold text-gray-900">
                  {" "}
                  quality products, trusted brands, and complete customer
                  satisfaction.
                </span>
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div
                className="rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden"
                style={{ backgroundColor: "#082d4a" }}
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative grid grid-cols-2 gap-6">
                  {[
                    { number: "35+", label: "Years Experience" },
                    { number: "50+", label: "Trusted Brands" },
                    { number: "10K+", label: "Products Available" },
                    { number: "24/7", label: "Customer Support" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="text-center p-3"
                    >
                      <div
                        className="text-2xl sm:text-3xl font-bold mb-1"
                        style={{ color: "#fbbf24" }}
                      >
                        {stat.number}
                      </div>
                      <div className="text-gray-300 text-xs sm:text-sm">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* What We Offer Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="text-center mb-10">
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black mb-3"
            >
              What We Offer
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto"
            >
              A comprehensive range of electrical and industrial products under
              one roof
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {products.map((category, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${category.borderHover} overflow-hidden`}
              >
                {/* Top Gradient Bar */}
                <div
                  className={`h-1.5 bg-gradient-to-r ${category.gradient}`}
                />

                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative p-5 sm:p-6">
                  {/* Category Badge */}
                  <div className={`inline-block mb-4`}>
                    <span
                      className={`text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r ${category.gradient} text-white shadow-lg`}
                    >
                      {category.category}
                    </span>
                  </div>

                  {/* Product List */}
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex items-center gap-2.5 group/item"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient} flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300`}
                        />
                        <span className="text-gray-700 text-sm group-hover/item:text-gray-900 transition-colors duration-300 font-medium">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover Indicator */}
                  <div className="mt-5 pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors">
                    <span
                      className={`text-xs font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-all duration-300`}
                    >
                      Explore More →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <div
              className="inline-block rounded-2xl px-6 py-4 border"
              style={{ backgroundColor: "#082d4a08", borderColor: "#082d4a20" }}
            >
              <p className="text-gray-700 text-sm">
                <span className="font-bold text-gray-900">JC Enterprises</span>{" "}
                — Your one-stop destination for genuine electrical products in
                Bhubaneswar
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Why Customers Trust Us Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-10">
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black mb-3"
            >
              Why Customers Trust Us
            </motion.h2>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                style={{ borderColor: "#082d4a20" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#082d4a")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#082d4a20")
                }
              >
                {/* Hover gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "#082d4a08" }}
                />

                <div className="relative">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: "#082d4a" }}
                  >
                    <feature.icon className="text-white text-lg" />
                  </div>
                  <h3 className="text-gray-900 font-semibold text-sm mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-xs">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
