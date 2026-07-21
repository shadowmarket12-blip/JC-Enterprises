// components/Hero/HeroSlider.jsx
"use client";

import { useState, useEffect, useCallback, useRef, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { HiArrowRight, HiShieldCheck, HiTruck, HiPhone } from "react-icons/hi2";
import { BsLightningChargeFill, BsBuildings } from "react-icons/bs";
import { FiPlay, FiPause, FiShoppingCart } from "react-icons/fi";

const PLACEHOLDER_IMAGE = "/images/productimages/2.png";

const slides = [
  {
    id: 1,
    badge: "Trusted Since 1989",
    title: "Best Electrical Shop in Bhubaneswar",
    subtitle:
      "35+ Years of Trust | Genuine Branded Products | Retail & Wholesale | Home Delivery Across Bhubaneswar",
    description:
      "Looking for the best electrical shop in Bhubaneswar? Welcome to JC Enterprises, your trusted destination for quality electrical and industrial products with over 35 years of experience. We offer an extensive range of genuine electrical switches, wires, cables, MCBs, lighting solutions, ceiling fans, PVC fittings, industrial accessories, electrical tools, and much more from India's leading brands. Serving both retail and wholesale customers, JC Enterprises makes it easy to buy electrical products online in Bhubaneswar with secure shopping, competitive pricing, home delivery, and dedicated support for bulk orders.",
    image: "/images/productimages/p6.webp",
    accent: "#8B5CF6",
    stats: [
      { icon: HiShieldCheck, text: "35+ Years Experience" },
      { icon: BsBuildings, text: "Retail & Wholesale" },
      { icon: HiTruck, text: "Home Delivery" },
    ],
  },
  {
    id: 2,
    badge: "Premium Products",
    title: "Best Electrical Shop in Bhubaneswar",
    subtitle: "Genuine Brands | Competitive Pricing | Expert Support",
    description:
      "Discover India's leading electrical brands at JC Enterprises, Bhubaneswar's most trusted electrical and industrial product supplier. From premium switches and modular accessories to heavy-duty industrial cables and lighting solutions, we stock everything you need for home, office, and industrial projects. Our commitment to quality, competitive pricing, and personalized service has made us the preferred choice for electricians, contractors, and homeowners across Bhubaneswar for over three decades.",
    image: "/images/productimages/p7.jpeg",
    accent: "#F59E0B",
    stats: [
      { icon: BsLightningChargeFill, text: "100% Genuine Products" },
      { icon: FiShoppingCart, text: "Bulk Orders Welcome" },
      { icon: HiPhone, text: "Expert Consultation" },
    ],
  },
  {
    id: 3,
    badge: "Complete Solutions",
    title: "Best Electrical Shop in Bhubaneswar",
    subtitle: "Industrial Supplies | Home Solutions | Project Needs",
    description:
      "Whether you're wiring a new home, upgrading your office, or managing a large construction project, JC Enterprises has you covered. Our comprehensive inventory includes electrical switches, MCBs, RCCBs, distribution boards, wires and cables of all specifications, ceiling fans, exhaust fans, LED lighting, PVC conduits and fittings, water heaters, bell switches, and industrial automation products. We provide end-to-end solutions with technical guidance, on-time delivery, and after-sales support.",
    image: "/images/productimages/2.png",
    accent: "#10B981",
    stats: [
      { icon: HiShieldCheck, text: "ISO Certified" },
      { icon: HiTruck, text: "Same Day Delivery" },
      { icon: BsLightningChargeFill, text: "Technical Support" },
    ],
  },
  {
    id: 4,
    badge: "Why Choose Us",
    title: "Best Electrical Shop in Bhubaneswar",
    subtitle: "35+ Years Legacy | Trusted by Thousands | Quality Assured",
    description:
      "For over 35 years, JC Enterprises has been Bhubaneswar's go-to destination for electrical and industrial products. Our long-standing relationships with top manufacturers ensure you get authentic products at the best prices. We serve electricians, contractors, builders, and homeowners with the same dedication to quality and service. Buy electrical products online in Bhubaneswar through our easy ordering system and get doorstep delivery. Visit our store or contact us for bulk enquiries and technical consultations.",
    image: "/images/productimages/p4.webp",
    accent: "#3B82F6",
    stats: [
      { icon: BsBuildings, text: "Trusted by 10,000+ Customers" },
      { icon: FiShoppingCart, text: "Easy Online Ordering" },
      { icon: HiPhone, text: "24/7 Customer Support" },
    ],
  },
];

const SafeImage = memo(({ src, alt, fill, className, sizes, priority }) => {
  const [imgSrc, setImgSrc] = useState(src || PLACEHOLDER_IMAGE);

  useEffect(() => {
    setImgSrc(src?.trim() ? src : PLACEHOLDER_IMAGE);
  }, [src]);

  if (!imgSrc?.trim()) {
    return (
      <div
        className={`${className} bg-gray-800 flex items-center justify-center`}
      >
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt || "Product image"}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      onError={() => setImgSrc(PLACEHOLDER_IMAGE)}
      unoptimized={false}
      quality={85}
    />
  );
});

SafeImage.displayName = "SafeImage";

const FloatingCards = memo(({ currentSlide, active }) => {
  const cards = [
    {
      id: 1,
      image: "/images/productimages/p6.webp",
      position: "top-[5%] right-[2%]",
      rotation: 12,
      delay: 0,
    },
    {
      id: 2,
      image: "/images/productimages/p7.jpeg",
      position: "bottom-[15%] right-[3%]",
      rotation: -8,
      delay: 0.15,
    },
    {
      id: 3,
      image: "/images/productimages/2.png",
      position: "top-[15%] left-[2%]",
      rotation: -15,
      delay: 0.3,
    },
    {
      id: 4,
      image: "/images/productimages/p4.webp",
      position: "bottom-[18%] left-[3%]",
      rotation: 10,
      delay: 0.45,
    },
  ];

  return (
    <>
      {cards.map((card) => (
        <motion.div
          key={`${card.id}-${currentSlide}`}
          initial={{ opacity: 0, scale: 0.3, rotate: card.rotation }}
          animate={{ opacity: 1, scale: 0.6, rotate: card.rotation }}
          transition={{ duration: 0.5, delay: card.delay }}
          className={`absolute ${card.position} w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 z-[2]`}
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
          <div
            className="float-bob w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-lg border border-white/30"
            style={{
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
              animationDelay: `${card.delay}s`,
              animationPlayState: active ? "running" : "paused",
            }}
          >
            <SafeImage
              src={card.image}
              alt="Product thumbnail"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, (max-width: 1024px) 56px, 64px"
            />
          </div>
        </motion.div>
      ))}
    </>
  );
});

FloatingCards.displayName = "FloatingCards";

const ProductPlaceholder = memo(({ accent }) => (
  <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6">
    <motion.div
      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full mb-4 flex items-center justify-center"
      style={{ backgroundColor: accent + "20" }}
      animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        style={{ color: accent }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    </motion.div>
    <div className="w-3/4 h-2 sm:h-2.5 rounded-full bg-white/10 mb-2 animate-pulse" />
    <div className="w-1/2 h-2 sm:h-2.5 rounded-full bg-white/5 animate-pulse" />
  </div>
));

ProductPlaceholder.displayName = "ProductPlaceholder";

export default function HeroSlider() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const [imageErrors, setImageErrors] = useState({});
  const [isNavigating, setIsNavigating] = useState(false);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const observerRef = useRef(null);
  const rafRef = useRef(null);
  const slidesLength = slides.length;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const tiltY = useTransform(smoothX, (v) => v * 6);
  const tiltX = useTransform(smoothY, (v) => -v * 6);

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    router.prefetch("/products");
  }, [router]);

  useEffect(() => {
    if (!containerRef.current || !isMounted) return;
    observerRef.current = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observerRef.current.observe(containerRef.current);
    return () => observerRef.current?.disconnect();
  }, [isMounted]);

  useEffect(() => {
    const handleVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const activeAnim = isVisible && !isNavigating && pageVisible;

  const nextSlide = useCallback(() => {
    if (!isVisible) return;
    setDirection(1);
    setCurrent((prev) => (prev === slidesLength - 1 ? 0 : prev + 1));
  }, [slidesLength, isVisible]);

  const prevSlide = useCallback(() => {
    if (!isVisible) return;
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? slidesLength - 1 : prev - 1));
  }, [slidesLength, isVisible]);

  const goToSlide = useCallback(
    (index) => {
      if (!isVisible) return;
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current, isVisible],
  );

  useEffect(() => {
    if (isAutoPlaying && !isHovered && isVisible && pageVisible) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, isHovered, nextSlide, isVisible, pageVisible]);

  const handleMouseMove = useCallback(
    (e) => {
      if (!containerRef.current || !isVisible || rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
        rafRef.current = null;
      });
    },
    [isVisible, mouseX, mouseY],
  );

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleImageError = useCallback((slideId) => {
    setImageErrors((prev) =>
      prev[slideId] ? prev : { ...prev, [slideId]: true },
    );
  }, []);

  const handleShopNow = useCallback(
    (e) => {
      e.preventDefault();
      if (isNavigating) return;
      setIsNavigating(true);
      router.push("/products");
    },
    [router, isNavigating],
  );

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 800 : -800,
      opacity: 0,
      scale: 0.95,
      rotateY: dir > 0 ? 10 : -10,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        x: { type: "spring", stiffness: 200, damping: 25 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.45 },
        rotateY: { duration: 0.45 },
      },
    },
    exit: (dir) => ({
      x: dir < 0 ? 800 : -800,
      opacity: 0,
      scale: 0.95,
      rotateY: dir < 0 ? 10 : -10,
      transition: {
        x: { type: "spring", stiffness: 200, damping: 25 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
        rotateY: { duration: 0.25 },
      },
    }),
  };

  const currentSlide = slides[current];
  const validImageSrc =
    currentSlide?.image && !imageErrors[currentSlide?.id]
      ? currentSlide.image
      : null;

  if (!isMounted) {
    return (
      <section className="relative min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-center overflow-hidden bg-neutral-950">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-0">
          <div className="flex flex-col gap-8 lg:gap-12 items-center">
            <div className="w-full lg:hidden">
              <div className="w-full aspect-square max-w-xs mx-auto bg-white/5 rounded-2xl sm:rounded-3xl animate-pulse" />
            </div>
            <div className="space-y-4 sm:space-y-6 w-full">
              <div className="h-6 sm:h-8 w-24 sm:w-32 bg-white/10 rounded-full animate-pulse" />
              <div className="space-y-2">
                <div className="h-8 sm:h-10 w-64 sm:w-80 bg-white/10 rounded animate-pulse" />
                <div className="h-4 sm:h-5 w-48 sm:w-64 bg-white/10 rounded animate-pulse" />
              </div>
              <div className="h-12 sm:h-14 w-full bg-white/10 rounded animate-pulse" />
              <div className="flex gap-3 sm:gap-4">
                <div className="h-10 sm:h-12 w-28 sm:w-36 bg-white/10 rounded-xl sm:rounded-2xl animate-pulse" />
                <div className="h-10 sm:h-12 w-28 sm:w-36 bg-white/10 rounded-xl sm:rounded-2xl animate-pulse" />
                <div className="h-10 sm:h-12 w-28 sm:w-36 bg-white/10 rounded-xl sm:rounded-2xl animate-pulse" />
              </div>
            </div>
            <div className="hidden lg:block w-full">
              <div className="w-full aspect-square max-w-lg mx-auto bg-white/5 rounded-3xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[20vh] sm:min-h-[35vh] md:min-h-[50vh] lg:min-h-[30vh] flex items-center overflow-hidden bg-neutral-950"
    >
      {/* Background Image */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={`bg-${current}`}
          custom={direction}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {validImageSrc ? (
            <>
              <Image
                src={validImageSrc}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
                priority
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
            </>
          ) : (
            <div className="w-full h-full bg-neutral-900" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-0">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Mobile: Image on top */}
          <div className="w-full lg:hidden order-1">
            {!isDesktop && (
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`mobile-image-${current}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="relative w-full aspect-square">
                    <div className="relative w-full h-full rounded-2xl sm:rounded-3xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl overflow-hidden">
                      {validImageSrc ? (
                        <Image
                          src={validImageSrc}
                          alt={currentSlide.title}
                          fill
                          className="object-contain p-4 sm:p-6"
                          sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, 50vw"
                          priority
                          loading="eager"
                          onError={() => handleImageError(currentSlide.id)}
                          unoptimized={false}
                          quality={85}
                        />
                      ) : (
                        <ProductPlaceholder accent={currentSlide.accent} />
                      )}
                    </div>
                  </div>
                  {isVisible && !isNavigating && (
                    <FloatingCards currentSlide={current} active={activeAnim} />
                  )}
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* Left Content - Clean text without glass card */}
          <div className="w-full order-2 lg:order-1">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium text-white">
                    {currentSlide.badge}
                  </span>
                </motion.div>

                {/* H1 Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-[1.2] tracking-tight"
                >
                  {currentSlide.title}
                </motion.h1>

                {/* Subtitle/Tagline - Always White */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-[11px] sm:text-xs md:text-sm lg:text-base text-white leading-relaxed font-medium"
                >
                  {currentSlide.subtitle}
                </motion.p>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-[11px] sm:text-xs md:text-sm lg:text-base text-white max-w-xl leading-relaxed"
                >
                  {currentSlide.description}
                </motion.p>

                {/* Stats/Features */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-2 sm:gap-3"
                >
                  {currentSlide.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/15 border border-white/30 text-white"
                    >
                      <stat.icon
                        className="text-sm sm:text-base md:text-lg flex-shrink-0"
                        style={{ color: currentSlide.accent }}
                      />
                      <span className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
                        {stat.text}
                      </span>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap gap-2 sm:gap-3"
                >
                  <button
                    onClick={handleShopNow}
                    disabled={isNavigating}
                    className="group relative inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm md:text-base"
                    style={{
                      backgroundColor: currentSlide.accent,
                      boxShadow: `0 8px 30px -8px ${currentSlide.accent}80`,
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                      {isNavigating ? "Loading..." : "Shop Now"}
                      <HiArrowRight className="group-hover:translate-x-1 transition-transform text-sm sm:text-base" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%", opacity: 0 }}
                      whileHover={{ x: 0, opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl font-semibold text-white border-2 border-white/40 hover:border-white/70 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-xs sm:text-sm md:text-base"
                  >
                    <HiPhone className="text-xs sm:text-sm" />
                    Contact Us
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop: Image on right */}
          <div className="relative hidden lg:block order-2">
            {isDesktop && (
              <div
                className="relative flex items-center justify-center"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={current}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="relative w-full aspect-square max-w-md xl:max-w-lg mx-auto"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div
                      className="relative w-full h-full"
                      style={{
                        rotateY: activeAnim ? tiltY : 0,
                        rotateX: activeAnim ? tiltX : 0,
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div className="relative w-full h-full rounded-3xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-2xl overflow-hidden">
                        {validImageSrc ? (
                          <Image
                            src={validImageSrc}
                            alt={currentSlide.title}
                            fill
                            className="object-contain p-6 lg:p-8"
                            sizes="(max-width: 1024px) 50vw, 40vw"
                            priority
                            loading="eager"
                            onError={() => handleImageError(currentSlide.id)}
                            unoptimized={false}
                            quality={85}
                          />
                        ) : (
                          <ProductPlaceholder accent={currentSlide.accent} />
                        )}
                      </div>
                    </motion.div>
                    {isVisible && !isNavigating && (
                      <FloatingCards
                        currentSlide={current}
                        active={activeAnim}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pagination & Controls - Right side only */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 z-20">
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:text-white hover:bg-black/60 transition-all duration-300"
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? (
              <FiPause className="text-xs sm:text-sm" />
            ) : (
              <FiPlay className="text-xs sm:text-sm" />
            )}
          </button>
          <button
            onClick={prevSlide}
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:text-white hover:bg-black/60 transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:text-white hover:bg-black/60 transition-all duration-300"
            aria-label="Next slide"
          >
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-3 sm:top-4 md:top-6 lg:top-8 right-3 sm:right-4 md:right-6 lg:right-8 z-20 hidden sm:block">
        <div className="flex items-center gap-1.5 sm:gap-2 text-white text-xs sm:text-sm font-mono bg-black/30 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/20">
          <span
            className="text-white font-bold text-sm sm:text-base md:text-lg"
            style={{ color: currentSlide.accent }}
          >
            {(current + 1).toString().padStart(2, "0")}
          </span>
          <span className="w-6 sm:w-8 h-px bg-white/40" />
          <span>{slidesLength.toString().padStart(2, "0")}</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatBob {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        .float-bob {
          animation: floatBob 3s ease-in-out infinite;
          will-change: transform;
          transform: translateZ(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .float-bob {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
