"use client";

import { useProductGallery } from "./ProductGalleryContext";

export default function ProductName() {
  const { activeName } = useProductGallery();

  return (
    <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 leading-tight mb-2 sm:mb-3">
      {activeName}
    </h1>
  );
}
