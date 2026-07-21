"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiShieldCheck } from "react-icons/hi2";

const brands = [
  { name: "Anchor", logo: "/images/brand/crompton.png", slug: "anchor" },
  { name: "Polycab", logo: "/images/brand/OrientLogo.png", slug: "polycab" },
  { name: "Havells", logo: "/images/brand/crompton.png", slug: "havells" },
  { name: "RR Kabel", logo: "/images/brand/crompton.png", slug: "rr-kabel" },
  { name: "KEI", logo: "/images/brand/crompton.png", slug: "kei" },
  { name: "Finolex", logo: "/images/brand/crompton.png", slug: "finolex" },
  { name: "Philips", logo: "/images/brand/crompton.png", slug: "philips" },
  { name: "Jaguar", logo: "/images/brand/crompton.png", slug: "jaguar" },
  { name: "Crompton", logo: "/images/brand/crompton.png", slug: "crompton" },
  { name: "Bajaj", logo: "/images/brand/crompton.png", slug: "bajaj" },
  { name: "Orient", logo: "/images/brand/crompton.png", slug: "orient" },
  { name: "Atomberg", logo: "/images/brand/crompton.png", slug: "atomberg" },
  { name: "Usha", logo: "/images/brand/crompton.png", slug: "usha" },
  { name: "Kuhl", logo: "/images/brand/crompton.png", slug: "kuhl" },
  { name: "McCoy", logo: "/images/brand/crompton.png", slug: "mccoy" },
  { name: "V-Guard", logo: "/images/brand/crompton.png", slug: "v-guard" },
  { name: "Lister", logo: "/images/brand/crompton.png", slug: "lister" },
  { name: "Legrand", logo: "/images/brand/crompton.png", slug: "legrand" },
];

export default function BrandShowcase() {
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

        {/* Brand Grid - Visible on mobile/tablet */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:hidden gap-2 sm:gap-3 mb-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <Link
                href={`/brands/${brand.slug}`}
                className="group relative flex items-center justify-center aspect-square p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white border border-gray-100 hover:border-[#082d4a]/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#082d4a]/0 to-[#0f4c7a]/0 group-hover:from-[#082d4a]/5 group-hover:to-[#0f4c7a]/5 transition-all duration-500" />

                {/* Subtle pattern on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#082d4a]/5 to-transparent rounded-bl-3xl" />
                </div>

                <div className="relative w-full h-full flex items-center justify-center p-2">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={100}
                    height={100}
                    className="w-auto h-8 sm:h-10 md:h-12 object-contain group-hover:scale-110 transition-transform duration-500 ease-out filter group-hover:brightness-110"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `<span class="text-[10px] sm:text-xs font-bold text-gray-400">${brand.name}</span>`;
                    }}
                  />
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-[#082d4a]/10 transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Marquee Slider - Visible on desktop */}
        <div className="hidden lg:block relative">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-32 bg-gradient-to-r from-transparent via-white/80 to-white z-10 pointer-events-none" />

          {/* First Row - Left to Right */}
          <div className="relative overflow-hidden mb-4">
            <motion.div
              className="flex gap-3 lg:gap-4"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {[...brands, ...brands].map((brand, index) => (
                <Link
                  key={`${brand.name}-${index}`}
                  href={`/brands/${brand.slug}`}
                  className="group relative flex-shrink-0 w-28 lg:w-32 xl:w-36"
                >
                  <div className="relative flex items-center justify-center aspect-square p-4 lg:p-5 rounded-2xl bg-white border border-gray-100 hover:border-[#082d4a]/30 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#082d4a]/0 to-[#0f4c7a]/0 group-hover:from-[#082d4a]/5 group-hover:to-[#0f4c7a]/5 transition-all duration-500" />

                    {/* Corner accent */}
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-bl from-[#082d4a]/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100" />

                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        width={120}
                        height={120}
                        className="w-auto h-10 lg:h-12 xl:h-14 object-contain group-hover:scale-110 transition-transform duration-500 ease-out filter group-hover:brightness-110 group-hover:saturate-150"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML = `<span class="text-xs lg:text-sm font-bold text-gray-400">${brand.name}</span>`;
                        }}
                      />
                    </div>

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-3 lg:gap-4"
              animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                x: {
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {[...brands, ...brands].map((brand, index) => (
                <Link
                  key={`${brand.name}-reverse-${index}`}
                  href={`/brands/${brand.slug}`}
                  className="group relative flex-shrink-0 w-28 lg:w-32 xl:w-36"
                >
                  <div className="relative flex items-center justify-center aspect-square p-4 lg:p-5 rounded-2xl bg-white border border-gray-100 hover:border-[#082d4a]/30 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#082d4a]/0 to-[#0f4c7a]/0 group-hover:from-[#082d4a]/5 group-hover:to-[#0f4c7a]/5 transition-all duration-500" />

                    <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-tr from-[#082d4a]/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100" />

                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        width={120}
                        height={120}
                        className="w-auto h-10 lg:h-12 xl:h-14 object-contain group-hover:scale-110 transition-transform duration-500 ease-out filter group-hover:brightness-110 group-hover:saturate-150"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML = `<span class="text-xs lg:text-sm font-bold text-gray-400">${brand.name}</span>`;
                        }}
                      />
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>

        {/* View All Brands Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10 sm:mt-12"
        >
          <Link
            href="/brands"
            className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#082d4a] to-[#0f4c7a] text-white text-sm sm:text-base font-semibold overflow-hidden transition-all duration-300 hover:scale-105"
          >
       
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            <span className="relative z-10 flex items-center gap-2">
              View All Brands
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

      
            <div className="absolute inset-0 rounded-full shadow-lg shadow-[#082d4a]/30 group-hover:shadow-xl group-hover:shadow-[#082d4a]/40 transition-all duration-300" />
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
}
