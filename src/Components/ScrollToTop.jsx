"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Reset any locked scroll (e.g. mobile menu drawer) just in case
    document.body.style.overflow = "";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // use "smooth" if you want an animated scroll
    });
  }, [pathname, searchParams]);

  return null;
}
