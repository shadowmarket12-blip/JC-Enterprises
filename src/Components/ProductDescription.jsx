"use client";

import { useProductGallery } from "./ProductGalleryContext";

export default function ProductDescription() {
  const { activeDescription } = useProductGallery();

  if (!activeDescription) return null;

  return (
    <div>
      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
        Product Description
      </h3>
      <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">
        {activeDescription}
      </p>
    </div>
  );
}
