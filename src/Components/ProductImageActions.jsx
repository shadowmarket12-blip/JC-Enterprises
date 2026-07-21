"use client";

import { HiShare } from "react-icons/hi2";

export default function ProductImageActions() {
  return (
    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex flex-col gap-1.5 sm:gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
      <button className="p-2 sm:p-2.5 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-colors">
        <HiShare className="text-base sm:text-lg text-gray-600 hover:text-blue-500 transition-colors" />
      </button>
    </div>
  );
}
