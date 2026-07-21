"use client";

import Image from "next/image";
import ProductImageActions from "@/Components/ProductImageActions";
import { useProductGallery } from "./ProductGalleryContext";

export default function MainProductImage({ product }) {
  const { activeImage, activeColor } = useProductGallery();

  return (
    <div className="relative group">
      <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
        <Image
          key={activeImage}
          src={activeImage}
          alt={
            activeColor ? `${product.name} - ${activeColor.name}` : product.name
          }
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority
        />

        <ProductImageActions />

        {/* Badges */}
        {product.discount && (
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
            <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 shadow-lg animate-pulse">
              -{product.discount}%
            </span>
          </div>
        )}
        {product.badge && (
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
            <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm shadow-lg">
              {product.badge}
            </span>
          </div>
        )}

        {/* Selected color indicator */}
        {activeColor && (
          <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4">
            <span className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold bg-white/90 backdrop-blur-sm shadow-lg text-gray-700">
              <span
                className="w-2.5 h-2.5 rounded-full border border-black/10"
                style={{ backgroundColor: activeColor.hex }}
              />
              {activeColor.name}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
