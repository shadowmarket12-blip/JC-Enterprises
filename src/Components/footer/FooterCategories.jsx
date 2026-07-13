"use client";

import Link from "next/link";

const categories = [
  { label: "Fans", href: "/categories/fans" },
  { label: "Lighting", href: "/categories/lighting" },
  { label: "Water Heaters", href: "/categories/water-heaters" },
  { label: "Exhaust Fans", href: "/categories/exhaust-fans" },
  { label: "Irons", href: "/categories/irons" },
  { label: "Mixer Grinders", href: "/categories/mixer-grinders" },
];

export default function FooterCategories() {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4" style={{ color: "#082d4a" }}>
        Categories
      </h3>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index}>
            <Link
              href={category.href}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              {category.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
