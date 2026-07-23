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
import AboutFaq from "@/Components/About/Aboutfaq";
import AboutBrand from "@/Components/About/BrandWeServe";
import OurStory from "@/Components/About/OurStory";
import MissionVision from "@/Components/About/Vision";

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
        aria-label="About JC Enterprises - Best Electrical Shop in Bhubaneswar"
      >
        {/* Hidden SEO H1 for better indexing */}
        <h1 className="sr-only">
          About JC Enterprises | Best Electrical Products in Bhubaneswar - 35+
          Years of Trusted Service
        </h1>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(#082d4a_1px,transparent_1px),linear-gradient(90deg,#082d4a_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-20">
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
                className="inline-flex items-center gap-2 px-4 py-2  rounded-full border"
              >
                <IoFlash className="text-black text-lg" />
                <span className="text-sm font-semibold text-black uppercase tracking-wider">
                  Trusted Since 1988
                </span>
              </motion.div>

              {/* Main Heading - Visible H2 for better SEO structure */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black leading-[1.05]">
                  About JC Enterprises
                  <br />
                  <span className="relative inline-block">
                    <span className="text-black">World</span>
                  </span>
                </h2>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-black leading-relaxed max-w-xl">
                Looking for the best electrical products in Bhubaneswar? Welcome
                to JC Enterprises, a trusted name with over 35 years of
                experience in delivering premium-quality electrical and
                industrial products. Built on trust, quality, and customer
                satisfaction, we have become the preferred choice for
                homeowners, electricians, contractors, builders, businesses, and
                industries.
              </p>
              <p className="text-sm sm:text-base text-black leading-relaxed max-w-xl">
                From genuine branded electrical products to expert guidance and
                affordable pricing, every solution we provide is backed by
                decades of industry knowledge. Today, customers can also buy
                electrical products online in Bhubaneswar through our eCommerce
                platform with doorstep delivery, secure shopping, and dedicated
                bulk order support.
              </p>
              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/products" title="Explore Electrical Products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ color: "#082d4a" }}
                    className="group relative px-8 py-4  text-white font-semibold rounded-2xl overflow-hidden shadow-2xl shadow-yellow-500/25"
                    aria-label="Explore our electrical products collection"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Products
                      <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>
                <Link href="/contact" title="Contact JC Enterprises">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-gray-300 text-black font-semibold rounded-2xl hover:bg-gray-50 transition-all duration-300"
                    aria-label="Contact our electrical shop in Bhubaneswar"
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
                    src="/homeslide/1.png"
                    alt="JC Enterprises electrical shop showroom in Bhubaneswar"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute  via-transparent to-transparent" />
                </div>

                {/* Small Images */}
                <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl">
                  <Image
                    src="/homeslide/2.png"
                    alt="Electrical products display at JC Enterprises"
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
                    src="/homeslide/3.png"
                    alt="Expert electrical installation service by JC Enterprises"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-xs font-semibold">Expert Installation</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div>
        <OurStory />
      </div>
      <div>
        <MissionVision />
      </div>
      <div>
        <AboutBrand />
      </div>
      <div>
        <AboutFaq />
      </div>
    </main>
  );
}
