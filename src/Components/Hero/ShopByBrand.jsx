"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiShieldCheck } from "react-icons/hi2";
import { useState } from "react";

const brands = [
  { name: "Anchor", logo: "/BrandLogo/Anchor.webp", slug: "anchor" },
  { name: "Polycab", logo: "/BrandLogo/Polycab.webp", slug: "polycab" },
  { name: "Havells", logo: "/BrandLogo/Havells.webp", slug: "havells" },
  { name: "RR Kabel", logo: "/BrandLogo/RR.webp", slug: "rr-kabel" },
  { name: "KEI", logo: "/BrandLogo/Kei.webp", slug: "kei" },
  { name: "Finolex", logo: "/BrandLogo/Finolex.webp", slug: "finolex" },
  { name: "Jaguar", logo: "/BrandLogo/Jaguar.webp", slug: "jaguar" },
  { name: "Crompton", logo: "/BrandLogo/Crompton.webp", slug: "crompton" },
  { name: "Bajaj", logo: "/BrandLogo/Bajaj.webp", slug: "bajaj" },
  { name: "Orient", logo: "/BrandLogo/Orient.webp", slug: "orient" },
  { name: "Atomberg", logo: "/BrandLogo/Atomberg.webp", slug: "atomberg" },
  { name: "Usha", logo: "/BrandLogo/Usha.webp", slug: "usha" },
  { name: "Kuhl", logo: "/BrandLogo/Kuhl.webp", slug: "kuhl" },
  { name: "V-Guard", logo: "/BrandLogo/Vguard.webp", slug: "v-guard" },
  { name: "Lister", logo: "/BrandLogo/Lister.webp", slug: "lister" },
  { name: "Legrand", logo: "/BrandLogo/Legrand.webp", slug: "legrand" },
];

export default function BrandShowcase() {
  const [isPaused, setIsPaused] = useState(false);

  // Handle image error safely
  const handleImageError = (e, brandName) => {
    const target = e.currentTarget;
    const parent = target.parentElement;

    // Hide the image
    target.style.display = "none";

    // Only modify parent if it exists
    if (parent) {
      // Create a span element instead of using innerHTML
      const span = document.createElement("span");
      span.className = "text-xs lg:text-sm font-bold text-gray-400";
      span.textContent = brandName;
      parent.appendChild(span);
    }
  };

  return (
    <section className="relative py-10 sm:py-14 md:py-16 lg:py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-[#082d4a]/10 to-[#0f4c7a]/10 text-[#082d4a] mb-4 sm:mb-5 border border-[#082d4a]/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#082d4a] animate-pulse" />
            Shop by Brand
          </motion.span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-3 text-black">
            Trusted Brands Genuine Products
          </h2>

          <div className="inline-flex items-center gap-2 text-gray-600 text-xs sm:text-sm md:text-base bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <HiShieldCheck className="text-green-500 text-sm sm:text-base flex-shrink-0" />
            <p className="text-left">
              Every product is sourced through authorized channels — no
              duplicate or grey-market stock.
            </p>
          </div>
        </motion.div>

        {/* Single Row Marquee for all screen sizes */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-r from-transparent via-white/80 to-white z-10 pointer-events-none" />

          {/* Single Marquee Row */}
          <div className="relative overflow-hidden py-4">
            <motion.div
              className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              style={{
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {[...brands, ...brands, ...brands, ...brands].map(
                (brand, index) => (
                  <Link
                    key={`${brand.name}-${index}`}
                    href="/products"
                    className="group flex-shrink-0 flex items-center justify-center w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36"
                  >
                    <div className="flex items-center justify-center p-2 transition-all duration-300 group-hover:scale-110">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        width={120}
                        height={120}
                        className="w-auto h-8 sm:h-10 md:h-12 lg:h-14 object-contain transition-all duration-300"
                        onError={(e) => handleImageError(e, brand.name)}
                      />
                    </div>
                  </Link>
                ),
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
