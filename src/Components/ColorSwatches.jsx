"use client";

import { useProductGallery } from "./ProductGalleryContext";

export default function ColorSwatches() {
  const { colors, selectedIndex, setSelectedIndex, activeColor } =
    useProductGallery();

  if (!colors || colors.length === 0) return null;

  return (
    <div className="border-t border-b border-gray-100 py-4 sm:py-5">
      <div className="flex items-center gap-2 mb-2.5 sm:mb-3.5">
        <h3 className="text-xs sm:text-sm font-semibold text-gray-900">
          Color
        </h3>
        <span className="text-xs sm:text-sm text-gray-500">
          {activeColor?.name}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {colors.map((color, index) => {
          const isActive = index === selectedIndex;
          return (
            <button
              key={color.name}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`Select ${color.name}`}
              aria-pressed={isActive}
              className="group flex flex-col items-center gap-1.5"
            >
              <span
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 shadow-sm transition-all duration-300 flex items-center justify-center"
                style={{
                  backgroundColor: color.hex,
                  borderColor: isActive ? "#082d4a" : "#e5e7eb",
                  boxShadow: isActive
                    ? "0 0 0 3px rgba(8, 45, 74, 0.15)"
                    : "none",
                }}
              >
                {isActive && (
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white mix-blend-difference" />
                )}
              </span>
              <span
                className="text-[10px] sm:text-xs font-medium transition-colors duration-300"
                style={{ color: isActive ? "#082d4a" : "#6b7280" }}
              >
                {color.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
