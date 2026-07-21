"use client";

import Image from "next/image";
import { useProductGallery } from "./ProductGalleryContext";

const MAX_THUMBNAILS = 7;

export default function ThumbnailScroller({ product }) {
  const {
    colors,
    selectedIndex,
    setSelectedIndex,
    images,
    selectedImageIndex,
    setSelectedImageIndex,
  } = useProductGallery();

  // Prefer one thumbnail per color variant; if the product has no color
  // variants, fall back to the extra photos of the single gallery instead.
  const useColorThumbnails = colors && colors.length >= 2;
  const items = useColorThumbnails
    ? colors.map((color, index) => ({
        key: `${color.name}-${index}`,
        src: color.images?.[0] || product.image,
        label: color.name,
        isActive: index === selectedIndex,
        onClick: () => setSelectedIndex(index),
      }))
    : (images || []).map((image, index) => ({
        key: `${image}-${index}`,
        src: image,
        label: `View ${index + 1}`,
        isActive: index === selectedImageIndex,
        onClick: () => setSelectedImageIndex(index),
      }));

  if (items.length < 2) return null;

  const thumbnails = items.slice(0, MAX_THUMBNAILS);

  return (
    <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      <div className="flex gap-2 sm:gap-3 min-w-max px-0.5 py-0.5">
        {thumbnails.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={item.onClick}
            aria-label={item.label}
            aria-pressed={item.isActive}
            className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0 rounded-lg sm:rounded-xl overflow-hidden bg-gray-100 border-2 cursor-pointer transition-all duration-300 hover:shadow-md"
            style={{
              borderColor: item.isActive ? "#082d4a" : "#e5e7eb",
              boxShadow: item.isActive
                ? "0 0 0 2px rgba(8, 45, 74, 0.12)"
                : "none",
            }}
          >
            <Image
              src={item.src}
              alt={`${product.name} - ${item.label}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
