"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiHelpCircle, FiMessageCircle } from "react-icons/fi";
import Link from "next/link";

const AboutFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const faqs = [
    {
      question:
        "Which is considered as one of the best electrical shops in Bhubaneswar?",
      answer:
        "With 35+ years of experience, genuine branded products, competitive pricing, retail and wholesale expertise, and online ordering with home delivery, JC Enterprises has earned the trust of thousands of customers as one of the best electrical shops in Bhubaneswar.",
      category: "Ordering",
    },
    {
      question: "Can I buy electrical products online in Bhubaneswar?",
      answer:
        "Yes. Our online store allows customers to browse products, place orders, and get doorstep delivery across Bhubaneswar.",
      category: "Delivery",
    },
    {
      question: "Do you provide bulk electrical supplies?",
      answer:
        "Yes. We supply bulk electrical products for contractors, builders, industries, institutions, and commercial projects.",
      category: "Bulk Orders",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!isMounted) {
    return (
      <section className="relative bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="text-[#082d4a]">Frequently Asked Questions</span>
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#082d4a] to-[#0d4f7c] rounded-xl shadow-lg shadow-[#082d4a]/20 mb-5"
          >
            <FiHelpCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-3"
          >
            <span className="text-[#082d4a]">Frequently Asked Questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-sm sm:text-base mt-2"
          >
            Find answers to common questions about our products and services
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group"
            >
              <div
                className={`relative bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border ${
                  activeIndex === index
                    ? "border-[#082d4a] shadow-md"
                    : "border-gray-100 hover:border-[#082d4a]/30"
                }`}
              >
                {/* Category Badge */}
                <div className="absolute -top-3 left-5 sm:left-6 z-10">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider border ${
                      activeIndex === index
                        ? "bg-[#082d4a] text-white border-[#082d4a]"
                        : "bg-gray-50 text-gray-500 border-gray-200 group-hover:bg-[#082d4a]/5 group-hover:text-[#082d4a] group-hover:border-[#082d4a]/20"
                    } transition-colors duration-300`}
                  >
                    {faq.category}
                  </span>
                </div>

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 sm:px-6 py-5 sm:py-6 text-left focus:outline-none focus:ring-2 focus:ring-[#082d4a] focus:ring-offset-2 rounded-xl sm:rounded-2xl transition-all duration-200"
                  aria-expanded={activeIndex === index}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                      <FiMessageCircle
                        className={`w-5 h-5 sm:w-5 sm:h-5 flex-shrink-0 ${
                          activeIndex === index
                            ? "text-[#082d4a]"
                            : "text-gray-400"
                        }`}
                      />
                      <h3
                        className={`text-[15px] sm:text-base md:text-lg font-semibold transition-colors duration-200 leading-snug ${
                          activeIndex === index
                            ? "text-[#082d4a]"
                            : "text-gray-800 group-hover:text-[#082d4a]"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    {/* Chevron Button */}
                    <motion.div
                      animate={{
                        rotate: activeIndex === index ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className={`flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-gradient-to-br from-[#082d4a] to-[#0d4f7c] text-white shadow-md"
                          : "bg-gray-50 text-gray-400 group-hover:bg-[#082d4a]/5 group-hover:text-[#082d4a]"
                      }`}
                    >
                      <FiChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.3, ease: "easeInOut" },
                        opacity: { duration: 0.2 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                          className="h-px bg-gradient-to-r from-[#082d4a]/40 to-[#0d4f7c]/40 mb-4 sm:mb-5 origin-left"
                        />
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                          className="pl-10 sm:pl-12 border-l-2 border-[#082d4a]/20"
                        >
                          <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-10 sm:mt-12"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-5 py-3 bg-white rounded-full shadow-sm border border-gray-100">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full animate-pulse"></span>
            <p className="text-sm sm:text-base text-gray-600">
              Still have questions?{" "}
              <Link
                href="/contact"
                className="text-[#082d4a] font-semibold hover:underline"
              >
                Contact us
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFaq;
