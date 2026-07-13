"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import sliderimage from "../../../public/images/banner1.jpg";

const sliderImages = [
  {
    id: 1,
    src: sliderimage,
    alt: "Premium Laptop",
  },
  {
    id: 2,
    src: sliderimage,
    alt: "Modern Laptop Setup",
  },
  {
    id: 3,
    src: sliderimage,
    alt: "MacBook Pro",
  },
  {
    id: 4,
    src: sliderimage,
    alt: "Tablet Display",
  },
];

export default function ImageSlider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-full"
    >
      <div className="relative w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop={true}
          speed={800}
          slidesPerView={1}
          className="w-full h-full"
          style={{
            "--swiper-pagination-color": "#082d4a",
            "--swiper-pagination-bullet-inactive-color": "#d1d5db",
            "--swiper-pagination-bullet-inactive-opacity": "0.5",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-pagination-bottom": "20px",
          }}
        >
          {sliderImages.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={image.id === 1}
                  loading={image.id === 1 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 70vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
