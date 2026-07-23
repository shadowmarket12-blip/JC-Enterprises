"use client";

import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { CATEGORY_SPECS } from "@/constants/products";
import { useProductGallery } from "./ProductGalleryContext";

const PREVIEW_COUNT = 6;

export default function ProductSpecifications({ product }) {
  const [expanded, setExpanded] = useState(false);
  const { activeSpecifications } = useProductGallery();
  const fields = CATEGORY_SPECS[product.categoryId];

  if (!fields || fields.length === 0) return null;

  const specs = activeSpecifications || {};
  const entries = fields.map((label) => [label, specs[label] || "—"]);
  const hasMore = entries.length > PREVIEW_COUNT;
  const visibleEntries = expanded ? entries : entries.slice(0, PREVIEW_COUNT);

  return (
    <div>
      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
        Specifications
      </h3>
      <div className="rounded-xl sm:rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
        {visibleEntries.map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between gap-4 px-3 sm:px-4 py-2.5 sm:py-3 odd:bg-gray-50/60"
          >
            <span className="text-xs sm:text-sm text-gray-500">{label}</span>
            <span className="text-xs sm:text-sm font-medium text-gray-900 text-right">
              {value}
            </span>
          </div>
        ))}
      </div>
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#082d4a] hover:text-[#0d4f7c] transition-colors"
        >
          {expanded ? "Show Less" : `Show All ${entries.length} Specifications`}
          {expanded ? <HiChevronUp /> : <HiChevronDown />}
        </button>
      )}
    </div>
  );
}
