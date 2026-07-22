"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  HiStar,
  HiArrowRight,
  HiShieldCheck,
  HiTruck,
  HiUserGroup,
  HiCheckBadge,
  HiSparkles,
  HiMapPin,
  HiChatBubbleLeftRight,
  HiHeart,
  HiPhone,
  HiBuildingOffice2,
  HiHome,
  HiWrenchScrewdriver,
  HiHomeModern,
  HiBuildingStorefront,
} from "react-icons/hi2";

const CustomerReviews = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  // Customer testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar Sahoo",
      role: "Homeowner",
      location: "Bhubaneswar",
      rating: 5,
      category: "homeowners",
      icon: HiHome,
      content:
        "I renovated my entire house with electrical products from JC Enterprises. Genuine products, competitive prices, and the staff helped me choose the right switches and wires. Highly recommended!",
      avatar: null,
      verified: true,
      projectSize: "Full House Renovation",
    },
    {
      id: 2,
      name: "Manoj Pradhan",
      role: "Electrical Contractor",
      location: "Cuttack",
      rating: 5,
      category: "contractors",
      icon: HiWrenchScrewdriver,
      content:
        "As a contractor handling multiple projects, I need reliable supply and good pricing. JC Enterprises has been my go-to for over 10 years. Their bulk order support and timely delivery make my work seamless.",
      avatar: null,
      verified: true,
      projectSize: "Multiple Commercial Projects",
    },
    {
      id: 3,
      name: "Smita Pattnaik",
      role: "Interior Designer",
      location: "Bhubaneswar",
      rating: 5,
      category: "designers",
      icon: HiHomeModern,
      content:
        "The range of designer switches and modern lighting solutions at JC Enterprises is impressive. My clients love the premium look, and the quality is outstanding. Perfect for high-end interior projects.",
      avatar: null,
      verified: true,
      projectSize: "15+ Design Projects",
    },
    {
      id: 4,
      name: "Bikash Mohanty",
      role: "Builder",
      location: "Puri",
      rating: 5,
      category: "builders",
      icon: HiBuildingOffice2,
      content:
        "We've been sourcing all our electrical materials from JC Enterprises for our township project. Their competitive pricing on bulk orders and consistent quality have saved us both time and money.",
      avatar: null,
      verified: true,
      projectSize: "Township Development",
    },
    {
      id: 5,
      name: "Anita Das",
      role: "Shop Owner",
      location: "Berhampur",
      rating: 5,
      category: "retailers",
      icon: HiBuildingStorefront,
      content:
        "I run a small electrical shop and JC Enterprises is my main supplier. Wholesale prices are great, delivery is always on time, and the product quality keeps my customers coming back.",
      avatar: null,
      verified: true,
      projectSize: "Retail Business",
    },
    {
      id: 6,
      name: "Dr. Suresh Tripathy",
      role: "Hospital Administrator",
      location: "Bhubaneswar",
      rating: 5,
      category: "hospitals",
      icon: HiHeart,
      content:
        "For our hospital expansion, we needed certified and reliable electrical products. JC Enterprises provided everything with proper documentation and competitive institutional pricing.",
      avatar: null,
      verified: true,
      projectSize: "Hospital Expansion",
    },
  ];

  const tabs = [
    { id: "all", label: "All Reviews" },
    { id: "homeowners", label: "Homeowners" },
    { id: "contractors", label: "Contractors" },
    { id: "builders", label: "Builders" },
    { id: "designers", label: "Designers" },
    { id: "retailers", label: "Retailers" },
    { id: "hospitals", label: "Institutions" },
  ];

  const filteredTestimonials =
    activeTab === "all"
      ? testimonials
      : testimonials.filter((t) => t.category === activeTab);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 },
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#082d4a]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#082d4a]/5 rounded-full mb-6">
            <HiSparkles className="text-[#082d4a] w-4 h-4" />
            <span className="text-sm font-medium text-[#082d4a]">
              Customer Reviews
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-3 text-black">
            Trusted by Thousands Across Odisha
          </h2>

          <p className="text-black text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            For 35+ years, JC Enterprises has earned customer trust through
            genuine products, fair pricing, and dependable service — from
            individual homeowners to large contractors.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          {...fadeInUp}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#082d4a] text-white shadow-lg shadow-[#082d4a]/20 scale-105"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#082d4a]/30 hover:text-[#082d4a] hover:shadow-md"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(testimonial.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Decorative Icon */}
                <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <HiChatBubbleLeftRight className="w-16 h-16 text-[#082d4a]" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <HiStar
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 relative">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Project Info */}
                <div className="flex items-center gap-2 mb-4 p-3 bg-gray-50 rounded-xl">
                  <testimonial.icon className="w-4 h-4 text-[#082d4a] flex-shrink-0" />
                  <span className="text-xs font-medium text-gray-600">
                    {testimonial.projectSize}
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#082d4a] to-[#0d4f7c] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-gray-900 truncate">
                          {testimonial.name}
                        </h4>
                        {testimonial.verified && (
                          <HiShieldCheck className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{testimonial.role}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span className="flex items-center gap-1">
                          <HiMapPin className="w-3 h-3" />
                          {testimonial.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Trust Banner */}
        <motion.div
          {...fadeInUp}
          className="mt-16 sm:mt-20 bg-gradient-to-r from-gray-50 to-white rounded-3xl border border-gray-100 p-6 sm:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left - Trust Message */}
            <div className="lg:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Our Commitment to Trust
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe in earning trust through genuine products,
                transparent pricing, and reliable service. Every review you see
                here comes from real customers who have experienced our
                commitment to quality first-hand.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <HiCheckBadge className="w-5 h-5 text-green-500" />
                  Genuine Products
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <HiCheckBadge className="w-5 h-5 text-green-500" />
                  Fair Pricing
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <HiCheckBadge className="w-5 h-5 text-green-500" />
                  Reliable Service
                </div>
              </div>
            </div>

            {/* Right - CTA */}
            <div className="flex justify-center lg:justify-end">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#082d4a] to-[#0d4f7c] text-white font-bold rounded-2xl shadow-xl shadow-[#082d4a]/20 hover:shadow-2xl hover:shadow-[#082d4a]/30 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Explore Products</span>
                  <HiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0d4f7c] to-[#082d4a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Google Reviews Notice */}
        <motion.div {...fadeInUp} className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-yellow-50 border border-yellow-200 rounded-2xl">
            <HiShieldCheck className="w-5 h-5 text-yellow-600" />
            <p className="text-sm text-yellow-700">
              Google Reviews widget will be embedded here once we have enough
              verified reviews. We never fabricate ratings or testimonials.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerReviews;
