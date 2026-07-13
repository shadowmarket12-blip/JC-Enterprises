"use client";

import Link from "next/link";

export default function FooterLinks({ title, links }) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4 text-white">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-white dark:text-white hover:text-white dark:hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
