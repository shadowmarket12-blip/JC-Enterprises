"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  HiArrowLeft,
  HiArrowRight,
  HiCheckCircle,
  HiCube,
  HiTruck,
  HiPhone,
  HiEnvelope,
  HiMapPin,
  HiUser,
  HiBuildingOffice2,
  HiDocumentText,
  HiCalculator,
  HiClipboardDocumentList,
  HiPaperAirplane,
  HiShieldCheck,
  HiSparkles,
  HiStar,
  HiCurrencyRupee,
  HiClock,
  HiCheckBadge,
  HiGlobeAlt,
} from "react-icons/hi2";

export default function BulkQuotePage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    productCategory: "",
    quantity: "",
    description: "",
    timeline: "",
    budget: "",
    address: "",
    city: "Bhubaneswar",
    pincode: "",
  });
  const [errors, setErrors] = useState({});

  const productCategories = [
    "Wires & Cables",
    "Switches & Sockets",
    "Lighting & Bulbs",
    "Circuit Breakers",
    "Distribution Boards",
    "Conduits & Pipes",
    "Fans & Coolers",
    "Solar Products",
    "Industrial Equipment",
    "Home Automation",
    "Safety Equipment",
    "Other Products",
  ];

  const timelineOptions = [
    "Immediate (Within 1 week)",
    "Within 2 weeks",
    "Within 1 month",
    "Within 3 months",
    "Flexible / Not Sure",
  ];

  const budgetOptions = [
    "Under ₹10,000",
    "₹10,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹5,00,000",
    "₹5,00,000 - ₹10,00,000",
    "Above ₹10,00,000",
    "Not Sure / To Be Discussed",
  ];

  const steps = [
    { number: 1, title: "Contact Info", icon: HiUser },
    { number: 2, title: "Requirements", icon: HiClipboardDocumentList },
    { number: 3, title: "Delivery Details", icon: HiDocumentText },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateStep = (stepNumber) => {
    const newErrors = {};

    if (stepNumber === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (formData.phone.replace(/\D/g, "").length < 10) {
        newErrors.phone = "Enter a valid 10-digit number";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Enter a valid email";
      }
    } else if (stepNumber === 2) {
      if (!formData.productCategory)
        newErrors.productCategory = "Select a product category";
      if (!formData.quantity) newErrors.quantity = "Quantity is required";
      if (!formData.timeline) newErrors.timeline = "Select timeline";
    } else if (stepNumber === 3) {
      if (!formData.address.trim()) newErrors.address = "Address is required";
      if (!formData.pincode.trim()) {
        newErrors.pincode = "Pincode is required";
      } else if (formData.pincode.replace(/\D/g, "").length !== 6) {
        newErrors.pincode = "Enter a valid 6-digit pincode";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const sendToWhatsApp = () => {
    const message =
      `*New Bulk Quote Request*%0A%0A` +
      `*Contact Information:*%0A` +
      `Name: ${formData.name}%0A` +
      `Company: ${formData.company || "N/A"}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Email: ${formData.email}%0A%0A` +
      `*Requirements:*%0A` +
      `Product Category: ${formData.productCategory}%0A` +
      `Quantity: ${formData.quantity}%0A` +
      `Timeline: ${formData.timeline}%0A` +
      `Budget: ${formData.budget || "Not specified"}%0A` +
      `Description: ${formData.description || "N/A"}%0A%0A` +
      `*Delivery Details:*%0A` +
      `Address: ${formData.address}%0A` +
      `City: ${formData.city}%0A` +
      `Pincode: ${formData.pincode}`;

    const whatsappNumber = "916370365515"; // Your WhatsApp number with country code
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Send to WhatsApp
    sendToWhatsApp();

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const progressPercentage = ((step - 1) / 2) * 100;

  const stats = [
    { icon: HiCheckBadge, value: "10K+", label: "Happy Customers" },
    { icon: HiCube, value: "50K+", label: "Products Delivered" },
    { icon: HiGlobeAlt, value: "500+", label: "Cities Served" },
    { icon: HiStar, value: "4.8", label: "Customer Rating" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <div className="relative bg-gradient-to-br from-[#082d4a] via-[#0a3857] to-[#0d4f7c] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full"
          />
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-1/2 w-4 h-4 bg-white/10 rounded-full"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-1/3 w-3 h-3 bg-white/10 rounded-full"
          />
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 right-1/4 w-2 h-2 bg-white/20 rounded-full"
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-sm mb-8"
          >
            <Link
              href="/"
              className="text-white/60 hover:text-white transition-colors flex items-center gap-1"
            >
              <HiArrowLeft className="w-4 h-4" />
              Home
            </Link>
            <span className="text-white/40">/</span>
            <Link
              href="/products"
              className="text-white/60 hover:text-white transition-colors"
            >
              Products
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Bulk Quote</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <HiSparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-white/90">
                  Bulk Order Benefits
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Get the{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                    Best Prices
                  </span>
                  <motion.div
                    animate={{ scaleX: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full"
                  />
                </span>{" "}
                on Bulk Orders
              </h1>

              <p className="text-white/70 text-base sm:text-lg mb-8 max-w-lg leading-relaxed">
                Planning a large project? Get competitive wholesale pricing,
                dedicated support, and priority delivery for your bulk
                requirements.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: HiCurrencyRupee, text: "Wholesale Prices" },
                  { icon: HiTruck, text: "Fast Delivery" },
                  { icon: HiShieldCheck, text: "Quality Assured" },
                  { icon: HiClock, text: "24h Response" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                  >
                    <feature.icon className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-white/90 font-medium">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-center p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <stat.icon className="w-5 h-5 text-yellow-400 mx-auto mb-2" />
                    <div className="text-lg sm:text-xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/60">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative">
                {/* Main Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
                >
                  <div className="w-32 h-32 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center shadow-2xl shadow-yellow-500/20">
                    <HiCube className="text-6xl text-white" />
                  </div>

                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-bold text-white">
                      Bulk Order Benefits
                    </h3>
                    <div className="space-y-2">
                      {[
                        "Wholesale pricing",
                        "Priority delivery",
                        "Dedicated support",
                        "Quality guarantee",
                      ].map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-white/70"
                        >
                          <HiCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating Badges */}
                  <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-3 shadow-xl"
                  >
                    <HiCheckBadge className="text-2xl text-white" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl p-3 shadow-xl"
                  >
                    <HiCurrencyRupee className="text-2xl text-white" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-16 pb-16 relative z-10">
        {!isSubmitted ? (
          <>
            {/* Progress Steps */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 mb-8">
              <div className="flex items-center justify-between mb-8">
                {steps.map((s, index) => (
                  <div key={s.number} className="flex items-center flex-1">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-bold text-sm sm:text-base transition-all duration-300 ${
                          step > s.number
                            ? "bg-green-500 text-white shadow-lg shadow-green-500/20"
                            : step === s.number
                              ? "bg-[#082d4a] text-white shadow-lg shadow-[#082d4a]/20 scale-110"
                              : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {step > s.number ? (
                          <HiCheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                        ) : (
                          <s.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        )}
                      </div>
                      <div className="hidden sm:block">
                        <p
                          className={`text-sm font-semibold ${
                            step >= s.number ? "text-gray-900" : "text-gray-400"
                          }`}
                        >
                          {s.title}
                        </p>
                        <p className="text-xs text-gray-500">Step {s.number}</p>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flex-1 mx-4 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{
                            width: step > s.number ? "100%" : "0%",
                          }}
                          className="h-full bg-[#082d4a] rounded-full"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: `${progressPercentage}%` }}
                  className="h-full bg-gradient-to-r from-[#082d4a] to-[#0d4f7c] rounded-full"
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8"
                >
                  {/* Step 1: Contact Information */}
                  {step === 1 && (
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                        Contact Information
                      </h3>
                      <p className="text-gray-500 mb-8 text-sm sm:text-base">
                        Please provide your contact details so we can reach you
                        with the best quote.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="sm:col-span-2">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Enter your full name"
                              className={`w-full pl-12 pr-4 py-3.5 text-sm border rounded-2xl focus:outline-none focus:ring-2 transition-all ${
                                errors.name
                                  ? "border-red-200 focus:ring-red-500/20"
                                  : "border-gray-200 focus:ring-[#082d4a]/20 focus:border-[#082d4a]"
                              }`}
                            />
                          </div>
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1.5 ml-1">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Company Name
                          </label>
                          <div className="relative">
                            <HiBuildingOffice2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              placeholder="Your company (optional)"
                              className="w-full pl-12 pr-4 py-3.5 text-sm border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#082d4a]/20 focus:border-[#082d4a] transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <HiPhone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="Enter 10-digit number"
                              className={`w-full pl-12 pr-4 py-3.5 text-sm border rounded-2xl focus:outline-none focus:ring-2 transition-all ${
                                errors.phone
                                  ? "border-red-200 focus:ring-red-500/20"
                                  : "border-gray-200 focus:ring-[#082d4a]/20 focus:border-[#082d4a]"
                              }`}
                            />
                          </div>
                          {errors.phone && (
                            <p className="text-red-500 text-xs mt-1.5 ml-1">
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <HiEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="Enter your email"
                              className={`w-full pl-12 pr-4 py-3.5 text-sm border rounded-2xl focus:outline-none focus:ring-2 transition-all ${
                                errors.email
                                  ? "border-red-200 focus:ring-red-500/20"
                                  : "border-gray-200 focus:ring-[#082d4a]/20 focus:border-[#082d4a]"
                              }`}
                            />
                          </div>
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1.5 ml-1">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Requirements */}
                  {step === 2 && (
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                        Your Requirements
                      </h3>
                      <p className="text-gray-500 mb-8 text-sm sm:text-base">
                        Tell us about the products you need and the scale of
                        your project.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="sm:col-span-2">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Product Category *
                          </label>
                          <select
                            name="productCategory"
                            value={formData.productCategory}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3.5 text-sm border rounded-2xl focus:outline-none focus:ring-2 transition-all ${
                              errors.productCategory
                                ? "border-red-200 focus:ring-red-500/20"
                                : "border-gray-200 focus:ring-[#082d4a]/20 focus:border-[#082d4a]"
                            }`}
                          >
                            <option value="">Select product category</option>
                            {productCategories.map((cat) => (
                              <option key={cat} value={cat}>
                                {cat}
                              </option>
                            ))}
                          </select>
                          {errors.productCategory && (
                            <p className="text-red-500 text-xs mt-1.5 ml-1">
                              {errors.productCategory}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Approximate Quantity *
                          </label>
                          <div className="relative">
                            <HiCalculator className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              name="quantity"
                              value={formData.quantity}
                              onChange={handleInputChange}
                              placeholder="e.g., 100 units, 50 boxes"
                              className={`w-full pl-12 pr-4 py-3.5 text-sm border rounded-2xl focus:outline-none focus:ring-2 transition-all ${
                                errors.quantity
                                  ? "border-red-200 focus:ring-red-500/20"
                                  : "border-gray-200 focus:ring-[#082d4a]/20 focus:border-[#082d4a]"
                              }`}
                            />
                          </div>
                          {errors.quantity && (
                            <p className="text-red-500 text-xs mt-1.5 ml-1">
                              {errors.quantity}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Timeline *
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3.5 text-sm border rounded-2xl focus:outline-none focus:ring-2 transition-all ${
                              errors.timeline
                                ? "border-red-200 focus:ring-red-500/20"
                                : "border-gray-200 focus:ring-[#082d4a]/20 focus:border-[#082d4a]"
                            }`}
                          >
                            <option value="">Select timeline</option>
                            {timelineOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          {errors.timeline && (
                            <p className="text-red-500 text-xs mt-1.5 ml-1">
                              {errors.timeline}
                            </p>
                          )}
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3.5 text-sm border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#082d4a]/20 focus:border-[#082d4a] transition-all"
                          >
                            <option value="">Select budget range</option>
                            {budgetOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Product Description / Specifications
                          </label>
                          <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows={4}
                            placeholder="Describe the products you need, including any specific requirements, brands, or specifications..."
                            className="w-full px-4 py-3.5 text-sm border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#082d4a]/20 focus:border-[#082d4a] transition-all resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Delivery Details */}
                  {step === 3 && (
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                        Delivery Details
                      </h3>
                      <p className="text-gray-500 mb-8 text-sm sm:text-base">
                        Provide your delivery address for accurate shipping
                        estimates.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="sm:col-span-2">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Delivery Address *
                          </label>
                          <div className="relative">
                            <HiMapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                            <textarea
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              rows={3}
                              placeholder="Enter complete delivery address"
                              className={`w-full pl-12 pr-4 py-3.5 text-sm border rounded-2xl focus:outline-none focus:ring-2 transition-all resize-none ${
                                errors.address
                                  ? "border-red-200 focus:ring-red-500/20"
                                  : "border-gray-200 focus:ring-[#082d4a]/20 focus:border-[#082d4a]"
                              }`}
                            />
                          </div>
                          {errors.address && (
                            <p className="text-red-500 text-xs mt-1.5 ml-1">
                              {errors.address}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3.5 text-sm border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#082d4a]/20 focus:border-[#082d4a] transition-all bg-gray-50"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Pincode *
                          </label>
                          <input
                            type="text"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleInputChange}
                            placeholder="Enter 6-digit pincode"
                            className={`w-full px-4 py-3.5 text-sm border rounded-2xl focus:outline-none focus:ring-2 transition-all ${
                              errors.pincode
                                ? "border-red-200 focus:ring-red-500/20"
                                : "border-gray-200 focus:ring-[#082d4a]/20 focus:border-[#082d4a]"
                            }`}
                          />
                          {errors.pincode && (
                            <p className="text-red-500 text-xs mt-1.5 ml-1">
                              {errors.pincode}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Quick Review */}
                      <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                        <h4 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                          <HiClipboardDocumentList className="w-4 h-4" />
                          Quick Summary
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="text-gray-500">Name:</span>{" "}
                            <span className="font-medium text-gray-900">
                              {formData.name || "-"}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500">Phone:</span>{" "}
                            <span className="font-medium text-gray-900">
                              {formData.phone || "-"}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500">Category:</span>{" "}
                            <span className="font-medium text-gray-900">
                              {formData.productCategory || "-"}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500">Quantity:</span>{" "}
                            <span className="font-medium text-gray-900">
                              {formData.quantity || "-"}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500">Timeline:</span>{" "}
                            <span className="font-medium text-gray-900">
                              {formData.timeline || "-"}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500">Budget:</span>{" "}
                            <span className="font-medium text-gray-900">
                              {formData.budget || "-"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-100">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-600 hover:text-[#082d4a] transition-colors"
                      >
                        <HiArrowLeft className="w-5 h-5" />
                        Back
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#082d4a] text-white text-sm font-semibold rounded-2xl hover:bg-[#0a3857] transition-all shadow-lg shadow-[#082d4a]/20 hover:shadow-xl hover:shadow-[#082d4a]/30"
                      >
                        Continue
                        <HiArrowRight className="w-5 h-5" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#082d4a] to-[#0d4f7c] text-white text-sm font-semibold rounded-2xl hover:shadow-xl transition-all shadow-lg shadow-[#082d4a]/20 hover:shadow-[#082d4a]/30 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <HiPaperAirplane className="w-5 h-5" />
                            Submit Request
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </form>
          </>
        ) : (
          /* Success Message */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <HiCheckCircle className="w-12 h-12 sm:w-14 sm:h-14 text-green-500" />
            </motion.div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Quote Request Submitted!
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Thank you for your inquiry. Our team will review your requirements
              and get back to you within 24 hours with a competitive quote.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#082d4a] text-white font-semibold rounded-2xl hover:bg-[#0a3857] transition-all shadow-lg shadow-[#082d4a]/20">
                  Browse Products
                  <HiArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/">
                <button className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-gray-200 text-gray-700 font-semibold rounded-2xl hover:border-[#082d4a] hover:text-[#082d4a] transition-all">
                  Back to Home
                </button>
              </Link>
            </div>

            <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">
                Need immediate assistance?
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="tel:+916370365515"
                  className="flex items-center gap-2 text-sm text-[#082d4a] hover:underline"
                >
                  <HiPhone className="w-4 h-4" />
                  +91 63703 65515
                </a>
                <a
                  href="mailto:info@jcenterprises.com"
                  className="flex items-center gap-2 text-sm text-[#082d4a] hover:underline"
                >
                  <HiEnvelope className="w-4 h-4" />
                  info@jcenterprises.com
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Features Grid */}
        {!isSubmitted && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              {
                icon: HiShieldCheck,
                title: "Best Price Guarantee",
                desc: "Competitive pricing on bulk orders",
              },
              {
                icon: HiTruck,
                title: "Fast Delivery",
                desc: "Quick shipping across Bhubaneswar",
              },
              {
                icon: HiSparkles,
                title: "24h Response",
                desc: "Get your quote within 24 hours",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#082d4a]/5 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-[#082d4a]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-gray-500">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
