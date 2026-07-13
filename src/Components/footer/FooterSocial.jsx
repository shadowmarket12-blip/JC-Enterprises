"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube, href: "#", label: "Youtube" },
];

export default function FooterSocial() {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4 text-white">Follow Us</h3>
      <div className="flex space-x-4 justify-center md:justify-start">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link
              key={index}
              href={social.href}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label={social.label}
            >
              <Icon size={18} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
