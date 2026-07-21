"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  HiPlay,
  HiShieldCheck,
  HiLightBulb,
  HiStar,
  HiUserGroup,
  HiTrophy,
  HiArrowRight,
  HiCheckCircle,
  HiBuildingOffice2,
  HiGlobeAsiaAustralia,
  HiChartBar,
  HiSparkles,
  HiChevronLeft,
  HiChevronRight,
  HiEye,
  HiHeart,
  HiShoppingBag,
} from "react-icons/hi2";
import {
  IoFlash,
  IoDiamond,
  IoRibbon,
  IoBulb,
  IoHammer,
  IoConstruct,
} from "react-icons/io5";
import { COMPANY_INFO } from "@/constants";

// Image grid data
const galleryImages = [
  {
    id: 1,
    src: "/about/gallery-1.jpg",
    alt: "Electrical showroom interior",
    category: "Showroom",
    span: "col-span-1 row-span-1",
  },
  {
    id: 2,
    src: "/about/gallery-2.jpg",
    alt: "Product display section",
    category: "Products",
    span: "col-span-1 row-span-2",
  },
  {
    id: 3,
    src: "/about/gallery-3.jpg",
    alt: "Customer service counter",
    category: "Service",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: "/about/gallery-4.jpg",
    alt: "Warehouse and inventory",
    category: "Warehouse",
    span: "col-span-1 row-span-1",
  },
  {
    id: 5,
    src: "/about/gallery-5.jpg",
    alt: "Electrical products range",
    category: "Products",
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    src: "/about/gallery-6.jpg",
    alt: "Team of electricians",
    category: "Team",
    span: "col-span-1 row-span-2",
  },
  {
    id: 7,
    src: "/about/gallery-7.jpg",
    alt: "Installation service",
    category: "Service",
    span: "col-span-1 row-span-1",
  },
];

// Stats data
const stats = [
  {
    number: "35+",
    label: "Years of Excellence",
    icon: HiTrophy,
    color: "from-amber-400 to-orange-500",
  },
  {
    number: "50K+",
    label: "Happy Customers",
    icon: HiUserGroup,
    color: "from-blue-400 to-blue-600",
  },
  {
    number: "10K+",
    label: "Products Available",
    icon: HiSparkles,
    color: "from-purple-400 to-purple-600",
  },
  {
    number: "500+",
    label: "Brand Partners",
    icon: HiShieldCheck,
    color: "from-green-400 to-green-600",
  },
];

// Features/values
const features = [
  {
    icon: IoBulb,
    title: "Premium Products",
    description:
      "We stock only genuine, high-quality electrical products from authorized manufacturers with full warranty.",
    gradient: "from-yellow-400 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-50",
  },
  {
    icon: IoHammer,
    title: "Expert Installation",
    description:
      "Our certified electricians provide professional installation services for all types of electrical equipment.",
    gradient: "from-blue-400 to-blue-600",
    bgGradient: "from-blue-50 to-blue-50",
  },
  {
    icon: IoConstruct,
    title: "Technical Support",
    description:
      "Get expert technical guidance and after-sales support from our experienced team of professionals.",
    gradient: "from-green-400 to-green-600",
    bgGradient: "from-green-50 to-green-50",
  },
  {
    icon: IoDiamond,
    title: "Best Pricing",
    description:
      "Competitive wholesale and retail pricing with special discounts for contractors and bulk orders.",
    gradient: "from-purple-400 to-purple-600",
    bgGradient: "from-purple-50 to-purple-50",
  },
];

// Team members
const team = [
  {
    name: "Rajesh Sharma",
    role: "Founder & Director",
    image: "/team/founder.jpg",
    experience: "35+ Years",
    expertise: "Industry Veteran",
  },
  {
    name: "Amit Patel",
    role: "Technical Head",
    image: "/team/technical.jpg",
    experience: "20+ Years",
    expertise: "Certified Engineer",
  },
  {
    name: "Priya Singh",
    role: "Sales Manager",
    image: "/team/sales.jpg",
    experience: "15+ Years",
    expertise: "Customer Relations",
  },
];

// Timeline
const timeline = [
  {
    year: "1988",
    title: "Humble Beginnings",
    description:
      "Started as a small electrical repair shop with a vision to serve the community with quality electrical solutions.",
  },
  {
    year: "1995",
    title: "Retail Expansion",
    description:
      "Opened our first retail showroom offering a wide range of electrical products from leading brands.",
  },
  {
    year: "2005",
    title: "Authorized Dealership",
    description:
      "Became authorized dealer for premium brands like Havells, Crompton, Philips, and Legrand.",
  },
  {
    year: "2015",
    title: "Service Excellence",
    description:
      "Launched professional installation and after-sales service division with certified electricians.",
  },
  {
    year: "2023",
    title: "Digital Presence",
    description:
      "Expanded to online platform offering nationwide delivery and virtual consultation services.",
  },
];

// Testimonials
const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Electrical Contractor",
    image: "/testimonials/rahul.jpg",
    content:
      "Best electrical supplier in the region. Their product quality and technical support are unmatched. Been their customer for over 10 years.",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    role: "Interior Designer",
    image: "/testimonials/sneha.jpg",
    content:
      "Love their premium range of switches and lighting fixtures. Perfect for our high-end residential projects. Highly recommended!",
    rating: 5,
  },
  {
    name: "Arun Kumar",
    role: "Factory Owner",
    image: "/testimonials/arun.jpg",
    content:
      "Reliable industrial electrical supplies with genuine products. Their bulk pricing and delivery service is excellent.",
    rating: 4,
  },
];

export default function AboutPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8,
      },
    },
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center bg-white overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400/5 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(#082d4a_1px,transparent_1px),linear-gradient(90deg,#082d4a_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full border border-yellow-400/20"
              >
                <IoFlash className="text-yellow-500 text-lg" />
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Trusted Since 1988
                </span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-[1.05]">
                  Powering Your
                  <br />
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-transparent bg-clip-text">
                      World
                    </span>
                    <svg
                      className="absolute -bottom-3 left-0 w-full"
                      viewBox="0 0 200 8"
                      fill="none"
                    >
                      <path
                        d="M4 4C50 1 150 1 196 4"
                        stroke="url(#hero-line)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="hero-line">
                          <stop stopColor="#f59e0b" />
                          <stop offset="1" stopColor="#ef4444" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                Your one-stop destination for premium electrical products,
                expert installation services, and technical support. Serving
                homes and businesses with quality and trust for over three
                decades.
              </p>

              {/* Stats Mini Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                {stats.slice(0, 4).map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-lg border border-gray-100"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <stat.icon className="text-white text-lg" />
                    </div>
                    <div>
                      <div className="text-xl font-black text-gray-900">
                        {stat.number}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-2xl overflow-hidden shadow-2xl shadow-yellow-500/25"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Products
                      <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:bg-gray-50 transition-all duration-300"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Large Image */}
                <div className="col-span-2 relative rounded-3xl overflow-hidden aspect-[16/9] shadow-2xl">
                  <Image
                    src="/about/hero-main.jpg"
                    alt="Electrical shop showroom"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-semibold">Main Showroom</p>
                    <p className="text-xs text-white/80">Visit us today</p>
                  </div>
                </div>

                {/* Small Images */}
                <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl">
                  <Image
                    src="/about/hero-small-1.jpg"
                    alt="Products display"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-xs font-semibold">10,000+ Products</p>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl">
                  <Image
                    src="/about/hero-small-2.jpg"
                    alt="Installation service"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-xs font-semibold">Expert Installation</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-2xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                    <HiStar className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <HiStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-600 font-medium">
                      4.9/5 Rating
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section with Image Grid */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-yellow-50 rounded-full border border-yellow-200 mb-6"
            >
              <IoFlash className="text-yellow-600" />
              <span className="text-sm font-semibold text-yellow-700 uppercase tracking-wider">
                Why Choose Us
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              What Makes Us{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">
                Different
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We combine premium products with exceptional service to deliver
              the best electrical shopping experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className={`group relative bg-gradient-to-br ${feature.bgGradient} rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-default`}
                >
                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <feature.icon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  {/* Decorative gradient */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${feature.gradient} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity duration-500`}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Right - Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden aspect-square shadow-2xl">
                  <Image
                    src="/about/feature-main.jpg"
                    alt="Electrical products"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl">
                  <Image
                    src="/about/feature-1.jpg"
                    alt="Wiring accessories"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl">
                  <Image
                    src="/about/feature-2.jpg"
                    alt="Lighting solutions"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Overlay Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 max-w-xs"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <HiCheckCircle className="text-white text-2xl" />
                  </div>
                  <div>
                    <p className="text-lg font-black text-gray-900">100%</p>
                    <p className="text-xs text-gray-500">Genuine Products</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  All products come with manufacturer warranty and authenticity
                  guarantee
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">
                Gallery
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Take a virtual tour of our showroom, warehouse, and service
              centers
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(image)}
                className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group ${
                  index === 0
                    ? "col-span-2 row-span-2"
                    : index === 3
                      ? "col-span-2"
                      : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-sm">
                    {image.alt}
                  </p>
                  <p className="text-white/70 text-xs">{image.category}</p>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <HiEye className="text-gray-700" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">
                Journey
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From a small shop to a trusted name in electrical retail
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-yellow-400 via-orange-400 to-red-400" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg shadow-yellow-500/50 ring-4 ring-white z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setActiveTimeline(index)}
                      className={`bg-white rounded-2xl p-6 shadow-xl border cursor-pointer transition-all duration-300 ${
                        activeTimeline === index
                          ? "border-yellow-400 shadow-2xl shadow-yellow-500/10"
                          : "border-gray-100 hover:shadow-2xl"
                      }`}
                    >
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Image Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">
                Team
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The dedicated professionals behind our success
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-yellow-600 font-semibold text-sm mb-2">
                    {member.role}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <HiTrophy className="text-yellow-500" />
                      {member.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <HiStar className="text-yellow-500" />
                      {member.expertise}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Customer{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">
                Love
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <HiStar
                      key={i}
                      className={`text-2xl ${
                        i < testimonials[activeTestimonial].rating
                          ? "text-yellow-400"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[activeTestimonial].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p className="text-gray-500">
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all duration-300"
              >
                <HiChevronLeft className="text-xl" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === activeTestimonial
                        ? "bg-yellow-500 w-8"
                        : "bg-gray-300 w-2.5 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all duration-300"
              >
                <HiChevronRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">
              Ready to Experience
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
                Quality Electrical Shopping?
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Visit our showroom or browse online. Expert assistance, genuine
              products, and competitive prices guaranteed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-2xl shadow-2xl shadow-yellow-500/25 flex items-center gap-2"
                >
                  <HiShoppingBag className="text-xl" />
                  Shop Now
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  Visit Our Store
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full aspect-[16/10] rounded-3xl overflow-hidden"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
