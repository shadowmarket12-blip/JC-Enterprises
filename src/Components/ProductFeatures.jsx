"use client";

import { HiCheckBadge } from "react-icons/hi2";
import { useProductGallery } from "./ProductGalleryContext";

export default function ProductFeatures() {
  const { activeFeatures } = useProductGallery();

  if (!activeFeatures || activeFeatures.length === 0) return null;

  return (
    <div>
      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
        Key Features
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {activeFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#082d4a]/10 flex items-center justify-center flex-shrink-0">
              <HiCheckBadge className="text-[#082d4a] text-xs sm:text-sm" />
            </div>
            <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
