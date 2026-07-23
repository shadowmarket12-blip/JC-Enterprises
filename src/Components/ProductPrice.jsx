"use client";

import { useProductGallery } from "./ProductGalleryContext";

export default function ProductPrice() {
  const { activePrice, activeOriginalPrice, activeDiscount, activeStock } =
    useProductGallery();

  const stockKnown = activeStock !== null && activeStock !== undefined;
  const outOfStock = stockKnown && activeStock <= 0;
  const lowStock = stockKnown && activeStock > 0 && activeStock <= 10;

  return (
    <div className="bg-gradient-to-r from-[#082d4a]/5 to-transparent rounded-xl sm:rounded-2xl p-4 sm:p-5">
      <div className="flex items-baseline gap-3 sm:gap-4 flex-wrap">
        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#082d4a] to-[#0f4c7a] bg-clip-text text-transparent">
          ₹{activePrice}
        </span>
        {activeOriginalPrice > activePrice && (
          <>
            <span className="text-lg sm:text-xl text-gray-400 line-through">
              ₹{activeOriginalPrice}
            </span>
            <span className="text-sm sm:text-base font-semibold text-green-600">
              You save ₹{activeOriginalPrice - activePrice}
            </span>
            {activeDiscount > 0 && (
              <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold text-white bg-gradient-to-r from-red-500 to-pink-500">
                {activeDiscount}% OFF
              </span>
            )}
          </>
        )}
      </div>
      <p className="text-xs sm:text-sm text-green-600 mt-1.5 sm:mt-2">
        Inclusive of all taxes
      </p>
      {stockKnown && (
        <p
          className={`text-xs sm:text-sm font-medium mt-1 ${
            outOfStock
              ? "text-red-600"
              : lowStock
                ? "text-amber-600"
                : "text-gray-500"
          }`}
        >
          {outOfStock
            ? "Out of stock"
            : lowStock
              ? `Only ${activeStock} left in stock — order soon`
              : "In stock"}
        </p>
      )}
    </div>
  );
}
