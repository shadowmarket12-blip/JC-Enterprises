"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 lg:space-y-10"
        >
          {/* Top - Heading Section */}
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
                Since 1989
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black">
              Best Electrical Shop in Bhubaneswar
            </h2>

            {/* Decorative element */}
            <div className="flex gap-1 mt-6 justify-center">
              <div className="w-12 h-1 bg-black rounded-full"></div>
              <div className="w-6 h-1 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-1 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          {/* Bottom - Content Section */}
          <div className="relative">
            {/* Quote mark */}
            <div className="absolute -top-6 -left-4 text-7xl text-gray-100 select-none">
              "
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed relative z-10 pl-4 sm:pl-8 border-l-2 border-gray-200">
              Looking for the best electrical shop in Bhubaneswar? Welcome to{" "}
              <span className="font-semibold bg-gray-50 px-2 py-0.5 rounded">
                JC Enterprises
              </span>
              , your trusted destination for quality electrical and industrial
              products with over 35 years of experience. We offer an extensive
              range of genuine electrical switches, wires, cables, MCBs,
              lighting solutions, ceiling fans, PVC fittings, industrial
              accessories, electrical tools, and much more from India's leading
              brands. Serving both retail and wholesale customers, JC
              Enterprises makes it easy to buy electrical products online in
              Bhubaneswar with secure shopping, competitive pricing, home
              delivery, and dedicated support for bulk orders.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
