"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  HiHome,
  HiUserGroup,
  HiBuildingOffice2,
  HiAcademicCap,
  HiWrenchScrewdriver,
  HiShoppingBag,
  HiBuildingStorefront,
  HiBriefcase,
  HiHeart,
  HiHomeModern,
  HiTruck,
  HiCube,
  HiPhone,
  HiArrowRight,
  HiCheckBadge,
  HiSparkles,
  HiStar,
  HiMapPin,
  HiClock,
  HiShieldCheck,
  HiBolt,
} from "react-icons/hi2";

const WhoWeServe = () => {
  const [activeCategory, setActiveCategory] = useState("homeowners");
  const [hoveredCard, setHoveredCard] = useState(null);

  const audiences = [
    {
      id: "homeowners",
      title: "Homeowners",
      icon: HiHome,
      color: "#082d4a",
      bgImage:
        "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&h=800&fit=crop",
    },
    {
      id: "electricians",
      title: "Electricians",
      icon: HiWrenchScrewdriver,
      color: "#e85d04",
      bgImage:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=800&fit=crop",
    },
    {
      id: "contractors",
      title: "Contractors",
      icon: HiBuildingOffice2,
      color: "#7b2ff7",
      bgImage:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=800&fit=crop",
    },
    {
      id: "builders",
      title: "Builders",
      icon: HiUserGroup,
      color: "#059669",
      bgImage:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=800&fit=crop",
    },
    {
      id: "architects",
      title: "Architects",
      icon: HiAcademicCap,
      color: "#2563eb",
      bgImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    },
    {
      id: "designers",
      title: "Interior Designers",
      icon: HiHomeModern,
      color: "#db2777",
      bgImage:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=800&fit=crop",
    },
    {
      id: "retailers",
      title: "Shop Owners",
      icon: HiBuildingStorefront,
      color: "#f59e0b",
      bgImage:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=800&fit=crop",
    },
    {
      id: "offices",
      title: "Offices",
      icon: HiBriefcase,
      color: "#0891b2",
      bgImage:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop",
    },
    {
      id: "education",
      title: "Education",
      icon: HiAcademicCap,
      color: "#dc2626",
      bgImage:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=800&fit=crop",
    },
    {
      id: "hospitals",
      title: "Hospitals",
      icon: HiHeart,
      color: "#0891b2",
      bgImage:
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=800&fit=crop",
    },
    {
      id: "hotels",
      title: "Hotels & Restaurants",
      icon: HiStar,
      color: "#d97706",
      bgImage:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=800&fit=crop",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden ">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #082d4a 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-3 text-black">
            Electrical Solutions According to your Needs
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Whether you're renovating a home, wiring a new building, or
            restocking a shop, we supply:
          </p>
        </motion.div>

        {/* Audience Grid - 3D Modern Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.id}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                type: "spring",
                stiffness: 80,
              }}
              onHoverStart={() => setHoveredCard(audience.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
              style={{
                perspective: "1000px",
                maxHeight: "240px",
              }}
            >
              <motion.div
                className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer"
                style={{
                  aspectRatio: "1/1",
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  rotateY: hoveredCard === audience.id ? 5 : 0,
                  rotateX: hoveredCard === audience.id ? -5 : 0,
                  scale: hoveredCard === audience.id ? 1.05 : 1,
                  z: hoveredCard === audience.id ? 50 : 0,
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Card Shadow/Depth Layer */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-300/50 to-gray-100/30 translate-z-[-20px]" />

                {/* Main Card Body */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={audience.bgImage}
                      alt={audience.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Glass Border Effect */}
                  <div className="absolute inset-2 rounded-3xl border border-white/10 group-hover:border-white/25 transition-all duration-500" />

                  {/* Inner Glow on Hover */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      boxShadow: `inset 0 0 50px 10px ${audience.color}25`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-5 z-10">
                    {/* Floating Icon Container */}
                    <motion.div
                      className="relative mb-3 sm:mb-4"
                      animate={{
                        y: hoveredCard === audience.id ? -10 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Outer Ring */}
                      <div className="absolute inset-0 rounded-full bg-white/15 blur-xl scale-150 animate-pulse-slow" />

                      {/* Main Icon Circle */}
                      <div
                        className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${audience.color}50, ${audience.color}30)`,
                          boxShadow: `0 0 30px ${audience.color}40, inset 0 0 20px ${audience.color}30`,
                          border: `1px solid ${audience.color}50`,
                        }}
                      >
                        {/* Rotating Border */}
                        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-white/40 animate-spin-slow" />

                        <audience.icon
                          className="relative text-white text-2xl sm:text-3xl lg:text-3xl drop-shadow-2xl"
                          style={{
                            filter: `drop-shadow(0 0 10px ${audience.color}90)`,
                          }}
                        />
                      </div>

                      {/* Floating Particles */}
                      <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-white/40 blur-sm animate-float" />
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-white/30 blur-sm animate-float animation-delay-1000" />
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-sm sm:text-base lg:text-lg font-bold text-white text-center leading-tight tracking-wide"
                      animate={{
                        y: hoveredCard === audience.id ? -5 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                      style={{
                        textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                      }}
                    >
                      {audience.title}
                    </motion.h3>

                    {/* Animated Divider */}
                    <motion.div
                      className="mt-2 sm:mt-3 h-0.5 rounded-full bg-gradient-to-r from-transparent via-white/80 to-transparent"
                      initial={{ width: "40%" }}
                      animate={{
                        width: hoveredCard === audience.id ? "60%" : "40%",
                      }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Hover Indicator */}
                    <motion.div
                      className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        y: hoveredCard === audience.id ? 0 : 10,
                        opacity: hoveredCard === audience.id ? 1 : 0,
                      }}
                    ></motion.div>
                  </div>

                  {/* Top Light Reflection */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

const DeliveryBulkOrders = () => {
  const deliveryFeatures = [
    {
      icon: HiTruck,
      title: "Fast Home Delivery",
      description:
        "Order online and get electrical products delivered to your doorstep in Bhubaneswar within 24-48 hours.",
      badge: "Free",
      badgeColor: "bg-green-50 text-green-700 border-green-200",
    },
    {
      icon: HiCube,
      title: "Bulk Order Support",
      description:
        "Planning a large project? Get dedicated support, competitive pricing, and priority delivery on bulk orders.",
      badge: "Best Price",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      icon: HiPhone,
      title: "Dedicated Assistance",
      description:
        "Our team provides personalized guidance for contractors, builders, and businesses with bulk requirements.",
      badge: "24/7",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    },
  ];

  const stats = [
    { value: "15K+", label: "Deliveries", icon: HiTruck },
    { value: "2K+", label: "Bulk Orders", icon: HiCube },
    { value: "24h", label: "Delivery Time", icon: HiClock },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section className="relative py-16 sm:py-15 lg:py-20 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-3 text-black">
            Home Delivery & Bulk Orders
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mt-4">
            Browse online, order, and get it delivered to your door in
            Bhubaneswar. Planning a larger project? Get dedicated support and
            competitive pricing on bulk orders.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left - Features List */}
          <div className="lg:col-span-7 space-y-6">
            {deliveryFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-[#082d4a]/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#082d4a]/0 to-[#082d4a]/0 group-hover:from-[#082d4a]/[0.02] group-hover:to-[#082d4a]/[0.05] transition-all duration-300" />

                <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#082d4a] to-[#0d4f7c] flex items-center justify-center flex-shrink-0 shadow-xl shadow-[#082d4a]/20 group-hover:shadow-2xl group-hover:shadow-[#082d4a]/30 transition-all duration-300 group-hover:scale-110">
                    <feature.icon className="text-white text-2xl sm:text-3xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <h4 className="text-[#082d4a] font-bold text-lg sm:text-xl">
                        {feature.title}
                      </h4>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${feature.badgeColor}`}
                      >
                        {feature.badge}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <HiArrowRight className="text-[#082d4a] text-2xl" />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="pt-4"
            >
              <Link href="/bulk-quote">
                <button className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#082d4a] to-[#0d4f7c] text-white font-bold text-lg shadow-xl shadow-[#082d4a]/20 hover:shadow-2xl hover:shadow-[#082d4a]/30 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10">Request a Bulk Quote</span>
                  <HiArrowRight className="relative z-10 text-xl group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0d4f7c] to-[#082d4a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right - Visual Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:sticky lg:top-24"
            >
              <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-8">
                  <HiMapPin className="text-green-600 w-4 h-4" />
                  <span className="text-green-700 font-semibold text-sm">
                    Serving Bhubaneswar
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#082d4a]/30 transition-all cursor-pointer group hover:bg-white hover:shadow-md">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#082d4a] to-[#0d4f7c] flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                      <HiTruck className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#082d4a] font-semibold">
                        Home Delivery
                      </h4>
                      <p className="text-gray-500 text-sm">
                        24-48 hours delivery time
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold border border-green-200">
                      Free
                    </span>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-[#082d4a]/5 border border-[#082d4a]/20 transition-all cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#082d4a] to-[#0d4f7c] flex items-center justify-center shadow-md">
                      <HiCube className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#082d4a] font-semibold">
                        Bulk Orders
                      </h4>
                      <p className="text-gray-500 text-sm">
                        Custom pricing available
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
                      Best Price
                    </span>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#082d4a]/30 transition-all cursor-pointer group hover:bg-white hover:shadow-md">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#082d4a] to-[#0d4f7c] flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                      <HiClock className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#082d4a] font-semibold">
                        Express Delivery
                      </h4>
                      <p className="text-gray-500 text-sm">
                        Same day for urgent orders
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-xs font-semibold border border-yellow-200">
                      Available
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-4 rounded-xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 hover:border-[#082d4a]/20 hover:shadow-md transition-all cursor-pointer"
                    >
                      <stat.icon className="text-[#082d4a] text-xl mx-auto mb-2" />
                      <div className="text-xl font-black text-[#082d4a]">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-[#082d4a] transition-colors group"
                  >
                    <HiPhone className="w-4 h-4" />
                    Need help? Contact our team
                    <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function WhoWeServeAndDelivery() {
  return (
    <>
      <WhoWeServe />
      <DeliveryBulkOrders />
    </>
  );
}

export { WhoWeServe, DeliveryBulkOrders };
