"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiPhone,
  HiEnvelope,
  HiBuildingOffice2,
  HiChevronRight,
  HiHome,
  HiClock,
  HiMapPin,
} from "react-icons/hi2";
import { IoFlash } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import {
  HiLightBulb,
  HiBolt,
  HiWrenchScrewdriver,
  HiCpuChip,
  HiPower,
  HiSignal,
} from "react-icons/hi2";

// Floating icons data - deterministic values
const floatingIcons = [
  {
    Icon: HiLightBulb,
    size: 40,
    x: "10%",
    y: "20%",
    delay: 0,
    duration: 6,
    color: "#fbbf24",
  },
  {
    Icon: HiBolt,
    size: 50,
    x: "85%",
    y: "15%",
    delay: 1,
    duration: 7,
    color: "#f59e0b",
  },
  {
    Icon: HiWrenchScrewdriver,
    size: 35,
    x: "75%",
    y: "75%",
    delay: 0.5,
    duration: 5.5,
    color: "#082d4a",
  },
  {
    Icon: HiCpuChip,
    size: 45,
    x: "20%",
    y: "80%",
    delay: 1.5,
    duration: 6.5,
    color: "#0d4f7c",
  },
  {
    Icon: HiPower,
    size: 38,
    x: "50%",
    y: "10%",
    delay: 0.8,
    duration: 5,
    color: "#fbbf24",
  },
  {
    Icon: HiSignal,
    size: 42,
    x: "90%",
    y: "50%",
    delay: 2,
    duration: 7.5,
    color: "#082d4a",
  },
  {
    Icon: IoFlash,
    size: 32,
    x: "5%",
    y: "55%",
    delay: 1.2,
    duration: 6.8,
    color: "#f59e0b",
  },
  {
    Icon: HiLightBulb,
    size: 36,
    x: "60%",
    y: "85%",
    delay: 0.3,
    duration: 5.8,
    color: "#0d4f7c",
  },
];

// Deterministic particle positions using seeded pseudo-random
const generateSeededPositions = (count) => {
  const positions = [];
  let seed = 12345;
  const pseudoRandom = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  for (let i = 0; i < count; i++) {
    positions.push({
      id: i,
      x: pseudoRandom() * 100,
      y: pseudoRandom() * 100,
      size: pseudoRandom() * 4 + 2,
      delay: pseudoRandom() * 3,
      duration: pseudoRandom() * 4 + 3,
    });
  }
  return positions;
};

const particles = generateSeededPositions(20);

// Circuit line pattern component
const CircuitPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.07]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="circuit"
        x="0"
        y="0"
        width="120"
        height="120"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M0 60h40v-20h20v40h40M60 0v40h20v20M100 60v40h-20v-20h-40"
          stroke="#082d4a"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="60" cy="60" r="3" fill="#082d4a" />
        <circle cx="100" cy="100" r="2" fill="#082d4a" />
        <circle cx="20" cy="20" r="2" fill="#082d4a" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circuit)" />
  </svg>
);

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isMounted, setIsMounted] = useState(false);
  const formRef = useRef(null);
  const heroRef = useRef(null);

  // Mark component as mounted to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "product", label: "Product Information" },
    { value: "order", label: "Order Status" },
    { value: "support", label: "Technical Support" },
    { value: "bulk", label: "Bulk Order" },
    { value: "other", label: "Other" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit number";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const whatsappMessage =
      `*New Inquiry from JC Enterprises Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `${formData.email ? `*Email:* ${formData.email}%0A` : ""}` +
      `${formData.subject ? `*Subject:* ${formData.subject}%0A` : ""}` +
      `*Inquiry Type:* ${inquiryTypes.find((t) => t.value === formData.inquiryType)?.label}%0A%0A` +
      `*Message:*%0A${formData.message}`;

    setTimeout(() => {
      window.open(
        `https://wa.me/918280547730?text=${whatsappMessage}`,
        "_blank",
      );
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general",
      });
    }, 800);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner Section with 3D Floating Icons */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#082d4a] to-[#0a4068]"
      >
        {/* Circuit Board Pattern */}
        <CircuitPattern />

        {/* Radial Gradient Overlays */}
        <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-[#082d4a]/30 rounded-full blur-[100px] animate-pulse" />
        <div
          className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-[#0d4f7c]/20 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[120px]" />

        {/* Floating Particles - Only render after mount to avoid hydration mismatch */}
        {isMounted &&
          particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-yellow-400/30"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

        {/* 3D Floating Electronic Icons */}
        {isMounted &&
          floatingIcons.map((item, index) => (
            <motion.div
              key={index}
              className="absolute will-change-transform"
              style={{
                left: item.x,
                top: item.y,
              }}
              animate={{
                y: [0, -25, 0, 25, 0],
                x: [0, 15, 0, -15, 0],
                rotateX: [0, 15, 0, -15, 0],
                rotateY: [0, -15, 0, 15, 0],
                scale: [1, 1.1, 1, 1.05, 1],
              }}
              transition={{
                duration: item.duration,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full blur-2xl"
                style={{
                  backgroundColor: item.color,
                  opacity: 0.15,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Icon container */}
              <motion.div
                className="relative flex items-center justify-center"
                style={{
                  width: item.size + 20,
                  height: item.size + 20,
                }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {/* Glass background */}
                <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl" />

                {/* 3D Icon */}
                <motion.div
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "100px",
                  }}
                  animate={{
                    rotateX: [0, 10, 0, -10, 0],
                    rotateY: [0, -10, 0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    delay: item.delay + 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <item.Icon
                    style={{
                      color: item.color,
                      filter: `drop-shadow(0 0 10px ${item.color}40) drop-shadow(0 0 20px ${item.color}20)`,
                    }}
                    size={item.size}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm mb-8"
          >
            <Link
              href="/"
              className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors"
            >
              <HiHome className="text-base" />
              <span>Home</span>
            </Link>
            <HiChevronRight className="text-white/30 text-base" />
            <span className="text-yellow-400 font-semibold">Contact Us</span>
          </motion.nav>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-6"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.05]">
                Let's Power Your Project
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Together
                </span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg max-w-lg leading-relaxed">
                Premium electrical products, expert guidance, and professional
                installation services. Reach out and let's illuminate your
                space.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 pt-2">
                {[
                  { number: "35+", label: "Years Experience" },
                  { number: "50K+", label: "Happy Customers" },
                  { number: "10K+", label: "Products" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl sm:text-3xl font-black text-yellow-400">
                      {stat.number}
                    </div>
                    <div className="text-white/50 text-xs sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating Quick Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:justify-self-end"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl max-w-sm lg:max-w-none">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <IoFlash className="text-yellow-400" />
                  Quick Connect
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+919337863872"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#082d4a] transition-all duration-300">
                      <HiPhone className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs">Call Us</p>
                      <p className="text-white font-bold">+91 9337863872</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/918280547730"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-green-500 transition-all duration-300">
                      <FaWhatsapp className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs">WhatsApp</p>
                      <p className="text-white font-bold">+91 8280547730</p>
                    </div>
                  </a>
                  <a
                    href="mailto:jcenterprises955@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#082d4a] transition-all duration-300">
                      <HiEnvelope className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs">Email Us</p>
                      <p className="text-white font-bold text-sm">
                        jcenterprises955@gmail.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form & Quick Contact Row */}
      <section className="relative -mt-20 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Contact Form - Takes 2 columns */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 lg:p-10"
            >
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <FaWhatsapp className="text-green-500 text-lg" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-black">
                      Send WhatsApp Message
                    </h2>
                    <p className="text-black/50 text-xs sm:text-sm">
                      Fill the form and we'll redirect you to WhatsApp
                    </p>
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.2,
                      }}
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5"
                    >
                      <FaWhatsapp className="text-4xl text-green-500" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      Redirecting to WhatsApp!
                    </h3>
                    <p className="text-black/50 text-sm mb-5">
                      WhatsApp should open shortly with your pre-filled message.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={resetForm}
                      className="px-6 py-3 rounded-xl font-semibold text-white text-sm"
                      style={{
                        background:
                          "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                        boxShadow: "0 10px 25px -5px rgba(37, 211, 102, 0.3)",
                      }}
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs sm:text-sm font-semibold text-black mb-1.5"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all duration-300 bg-gray-50 text-black text-sm placeholder:text-gray-400 focus:bg-white ${
                            errors.name
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-200 focus:border-[#082d4a] focus:ring-2 focus:ring-[#082d4a]/10"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs sm:text-sm font-semibold text-black mb-1.5"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="9876543210"
                          className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all duration-300 bg-gray-50 text-black text-sm placeholder:text-gray-400 focus:bg-white ${
                            errors.phone
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-200 focus:border-[#082d4a] focus:ring-2 focus:ring-[#082d4a]/10"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs sm:text-sm font-semibold text-black mb-1.5"
                        >
                          Email{" "}
                          <span className="text-gray-400">(optional)</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 outline-none transition-all duration-300 bg-gray-50 text-black text-sm placeholder:text-gray-400 focus:bg-white focus:border-[#082d4a] focus:ring-2 focus:ring-[#082d4a]/10"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="inquiryType"
                          className="block text-xs sm:text-sm font-semibold text-black mb-1.5"
                        >
                          Inquiry Type
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 outline-none transition-all duration-300 bg-gray-50 text-black text-sm focus:bg-white focus:border-[#082d4a] focus:ring-2 focus:ring-[#082d4a]/10 cursor-pointer"
                        >
                          {inquiryTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs sm:text-sm font-semibold text-black mb-1.5"
                      >
                        Subject{" "}
                        <span className="text-gray-400">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 outline-none transition-all duration-300 bg-gray-50 text-black text-sm placeholder:text-gray-400 focus:bg-white focus:border-[#082d4a] focus:ring-2 focus:ring-[#082d4a]/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs sm:text-sm font-semibold text-black mb-1.5"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Tell us about your requirements..."
                        className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all duration-300 bg-gray-50 text-black text-sm placeholder:text-gray-400 focus:bg-white resize-none ${
                          errors.message
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-200 focus:border-[#082d4a] focus:ring-2 focus:ring-[#082d4a]/10"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        background: isSubmitting
                          ? "#6b7280"
                          : "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                        boxShadow: isSubmitting
                          ? "none"
                          : "0 10px 25px -5px rgba(37, 211, 102, 0.3)",
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              repeat: Infinity,
                              duration: 1,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Opening WhatsApp...
                        </>
                      ) : (
                        <>
                          <FaWhatsapp className="text-lg" />
                          Send via WhatsApp
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Quick Contact Sidebar */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="bg-gradient-to-br from-[#082d4a] to-[#0d4f7c] rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <HiClock className="text-yellow-400 text-xl" />
                    <h3 className="text-lg font-bold">Working Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { day: "Monday - Saturday", time: "9:00 AM - 8:00 PM" },
                      { day: "Sunday", time: "10:00 AM - 6:00 PM" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center py-2 border-b border-white/10 last:border-0"
                      >
                        <span className="text-white/70 text-sm">
                          {item.day}
                        </span>
                        <span className="text-white font-semibold text-sm">
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-yellow-400 text-sm font-semibold flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Emergency: 24/7 Available
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-5 sm:p-6">
                <h3 className="text-lg font-bold text-black mb-4">
                  Why Choose Us
                </h3>
                <div className="space-y-3">
                  {[
                    "Genuine branded products",
                    "Professional installation",
                    "Competitive pricing",
                    "Same-day delivery",
                    "After-sales support",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3.5 h-3.5 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-black/70 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section with Side Panel */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 relative h-[350px] sm:h-[400px] lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.123456789012!2d77.12345678901234!3d28.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                  className="grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="lg:col-span-2 bg-gradient-to-br from-[#082d4a] to-[#0d4f7c] p-6 sm:p-8 lg:p-10 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-400/10 rounded-full" />

                <div className="relative space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <HiMapPin className="text-yellow-400 text-2xl" />
                      <h3 className="text-xl sm:text-2xl font-bold">
                        Visit Our Store
                      </h3>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Come visit our showroom to explore our complete range of
                      electrical products. Our expert team is ready to assist
                      you.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <HiMapPin className="text-yellow-400 text-lg" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs mb-0.5">Address</p>
                        <p className="text-white text-sm font-medium leading-relaxed">
                          JC Enterprises, Main Road, Near Electrical Market, New
                          Delhi - 110001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <HiPhone className="text-yellow-400 text-lg" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs mb-0.5">Phone</p>
                        <a
                          href="tel:+919337863872"
                          className="text-white text-sm font-medium hover:text-yellow-400 transition-colors"
                        >
                          +91 9337863872
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <HiEnvelope className="text-yellow-400 text-lg" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs mb-0.5">Email</p>
                        <a
                          href="mailto:jcenterprises955@gmail.com"
                          className="text-white text-sm font-medium hover:text-yellow-400 transition-colors break-all"
                        >
                          jcenterprises955@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4">
                    <a
                      href="https://wa.me/918280547730"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-all duration-300"
                    >
                      <FaWhatsapp />
                      Chat on WhatsApp
                    </a>
                    <a
                      href="tel:+919337863872"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-xl border border-white/20 transition-all duration-300"
                    >
                      <HiPhone />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 sm:py-14 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-black/50 max-w-xl mx-auto text-sm">
              Quick answers about our electrical products and services
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              {
                q: "What brands do you carry?",
                a: "We stock all major electrical brands including Havells, Legrand, Anchor, Philips, and more.",
              },
              {
                q: "Do you offer installation?",
                a: "Yes, professional installation for all electrical products available.",
              },
              {
                q: "What is your return policy?",
                a: "7-day returns on unused products with original packaging and receipt.",
              },
              {
                q: "Do you provide bulk discounts?",
                a: "Yes, special pricing for bulk orders and electrical contractors.",
              },
              {
                q: "Is there warranty on products?",
                a: "All products come with manufacturer warranty. Duration varies by brand.",
              },
              {
                q: "Do you deliver nationwide?",
                a: "Yes, we ship across India with reliable courier partners.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-md border border-gray-100 hover:shadow-lg hover:border-[#082d4a]/20 transition-all duration-300"
              >
                <h3 className="text-black font-semibold mb-1.5 text-sm">
                  {faq.q}
                </h3>
                <p className="text-black/50 text-xs leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
