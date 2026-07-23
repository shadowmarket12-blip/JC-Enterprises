"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import footerlogo from "../../../public/images/favicon.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaChevronRight,
  FaHeart,
  FaCheckCircle,
} from "react-icons/fa";
import FloatingActionButtons from "./FloatingActionButtons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const subject = encodeURIComponent("Newsletter Subscription Request");
    const body = encodeURIComponent(
      `Hi Growwyld Team,\n\nI would like to subscribe to your newsletter.\n\nMy email address: ${email}\n\nPlease add me to your mailing list.\n\nThank you!`,
    );

    const mailtoLink = `mailto:nfakir129@gmail.com?subject=${subject}&body=${body}`;

    // Create a temporary anchor element to trigger the mailto
    const link = document.createElement("a");
    link.href = mailtoLink;
    link.click();

    setIsSubscribed(true);
    setEmail("");
    setIsLoading(false);

    // Reset subscription status after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/profile.php?id=61591562384032",
      label: "Facebook",
    },
    {
      icon: FaTwitter,
      href: "https://x.com/jcenterprise0",
      label: "Twitter",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/jcenterprises955/",
      label: "Instagram",
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/channel/UCo2ZNcL2W5cZ2afu3hfBsnw",
      label: "YouTube",
    },
  ];

  const quickLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Our Products", href: "/products" },
    { label: "Brands", href: "/brands" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const categories = [
    {
      label: "Switches & Accessories",
      href: "/products?category=switches-accessories",
    },
    {
      label: "Electrical Wires & Cables",
      href: "/products?category=electrical-wires-cables",
    },
    { label: "MCBs & Protection", href: "/products?category=mcbs-protection" },
    { label: "Lighting", href: "/products?category=lighting" },
    { label: "Fans", href: "/products?category=fans" },
    {
      label: "Water Pumps & Heaters",
      href: "/products?category=water-pumps-heaters",
    },
    { label: "Pipes and Fittings", href: "/products?category=pipes-fittings" },
    {
      label: "Industrial Electrical Products",
      href: "/products?category=industrial-electrical-products",
    },
    {
      label: "Electrical Tools & Accessories",
      href: "/products?category=electrical-tools-accessories",
    },
  ];

  const supportLinks = [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/faqs" },
    { label: "Shipping Policy", href: "/shipping-policy" },
    { label: "Returns & Exchange", href: "/refund-policy" },
  ];

  const contactInfo = [
    {
      icon: FaPhoneAlt,
      text: "+91 8280547730",
      href: "tel:+911234567890",
    },
    {
      icon: FaEnvelope,
      text: "jcenterprises955@gmail.com",
      href: "mailto:jcenterprises955@gmail.com",
    },
    {
      icon: FaMapMarkerAlt,
      text: "Jiban Pattnaik Market Complex, Plot No- 655, Tamando Bazar, Tamando, Bijipur, Bhubaneswar, Odisha 752054",
      href: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#082d4a] via-[#0a3557] to-[#082d4a] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-10"
        style={{
          background: "radial-gradient(circle, #d19912, transparent)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
        style={{
          background: "radial-gradient(circle, #d19912, transparent)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d19912] to-transparent opacity-50" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section - Logo and Description */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="py-12 lg:py-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Logo & Company Info */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-5 space-y-6"
              >
                <Link href="/" className="inline-block">
                  <div className="relative w-48 h-16 sm:w-56 sm:h-20">
                    <Image
                      src={footerlogo}
                      alt="Growwyld"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </Link>

                <p className="text-white text-sm leading-relaxed max-w-md">
                  Your trusted partner for premium electrical products in
                  Bhubaneswar. From switches to industrial solutions, we deliver
                  quality and reliability to your doorstep.
                </p>

                {/* Contact Information */}
                <div className="space-y-3">
                  {contactInfo.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center gap-3 text-white hover:text-[#d19912] transition-colors duration-300 group font-extralight"
                    >
                      <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#d19912]/20 transition-colors duration-300">
                        <item.icon className="text-sm group-hover:text-[#d19912] transition-colors duration-300" />
                      </span>
                      <span className="text-sm">{item.text}</span>
                    </Link>
                  ))}
                </div>

                {/* Social Media Icons */}
                <div>
                  <h4 className="text-white font-semibold text-sm mb-4">
                    Follow Us
                  </h4>
                  <div className="flex items-center gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#d19912] transition-all duration-300 group"
                        aria-label={social.label}
                      >
                        <social.icon className="text-white text-lg group-hover:text-white transition-colors duration-300" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Links Sections */}
              <motion.div variants={itemVariants} className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Quick Links */}
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                      <span className="w-1 h-4 bg-[#d19912] rounded-full" />
                      Quick Links
                    </h4>
                    <ul className="space-y-3">
                      {quickLinks.map((link, index) => (
                        <li key={index}>
                          <Link
                            href={link.href}
                            className="text-white font-extralight text-sm hover:text-[#d19912] transition-colors duration-300 flex items-center gap-2 group"
                          >
                            <FaChevronRight className="font-extralight text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Categories */}
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                      <span className="w-1 h-4 bg-[#d19912] rounded-full" />
                      Categories
                    </h4>
                    <ul className="space-y-3">
                      {categories.map((link, index) => (
                        <li key={index}>
                          <Link
                            href={link.href}
                            className="text-white text-sm hover:text-[#d19912] transition-colors duration-300 flex items-center gap-2 group font-extralight"
                          >
                            <FaChevronRight className="text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0 font-extralight" />
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Support */}
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                      <span className="w-1 h-4 bg-[#d19912] rounded-full" />
                      Support
                    </h4>
                    <ul className="space-y-3">
                      {supportLinks.map((link, index) => (
                        <li key={index}>
                          <Link
                            href={link.href}
                            className="text-white font-extralight text-sm hover:text-[#d19912] transition-colors duration-300 flex items-center gap-2 group"
                          >
                            <FaChevronRight className="font-extralight text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Newsletter Section - FIXED RESPONSIVE */}
                <div className="mt-8 p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="flex flex-col gap-4">
                    <div className="w-full">
                      <h4 className="text-white font-semibold text-sm mb-1">
                        Stay Updated
                      </h4>
                      <p className="text-white/70 text-xs">
                        Get the latest products and exclusive offers.
                      </p>
                    </div>
                    <form onSubmit={handleNewsletterSubmit} className="w-full">
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full sm:flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#d19912] transition-colors duration-300"
                          required
                          disabled={isLoading}
                        />
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          disabled={isLoading}
                          className={`w-full sm:w-auto px-6 py-3 bg-[#d19912] hover:bg-[#b8860f] text-white rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 ${
                            isLoading ? "opacity-75 cursor-not-allowed" : ""
                          }`}
                        >
                          {isLoading ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            />
                          ) : isSubscribed ? (
                            <>
                              <FaCheckCircle className="text-sm" />
                              <span className="text-sm font-medium">
                                Subscribed!
                              </span>
                            </>
                          ) : (
                            <>
                              <FaPaperPlane className="text-sm" />
                              <span className="text-sm font-medium">
                                Subscribe
                              </span>
                            </>
                          )}
                        </motion.button>
                      </div>
                    </form>
                    {isSubscribed && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-green-400 text-xs flex items-center gap-1"
                      >
                        <FaCheckCircle className="text-xs" />
                        Thank you for subscribing! Opening your email client...
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10">
            <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <motion.p
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-white text-xs sm:text-sm text-center sm:text-left"
              >
                © {currentYear}{" "}
                <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d19912] hover:text-[#b8860f] font-medium transition-colors duration-300"
                >
                  JC Enterprises
                </Link>
                . All rights reserved. Designed with{" "}
                <FaHeart className="inline text-red-500 animate-pulse" /> by{" "}
                <Link
                  href="https://growwyldtech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d19912] hover:text-[#b8860f] font-medium transition-colors duration-300"
                >
                  Growwyld
                </Link>
              </motion.p>

              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-4 text-xs text-gray-400"
              >
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#d19912] transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <span className="text-white/20">|</span>
                <Link
                  href="/terms-conditions"
                  className="hover:text-[#d19912] transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
                <span className="text-white/20">|</span>
                <Link
                  href="/refund-policy"
                  className="hover:text-[#d19912] transition-colors duration-300"
                >
                  Refund Policy
                </Link>
              </motion.div>
              <FloatingActionButtons />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
