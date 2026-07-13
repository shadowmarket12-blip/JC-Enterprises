"use client";

import Link from "next/link";

export default function FooterLinks({ title, links }) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4" style={{ color: "#082d4a" }}>
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
