"use client";

import ShopByCategory from "@/Components/Hero/CategorySection";
import HeroSection from "@/Components/Hero/HeroSection";
import ProductGrid from "@/Components/Hero/ProductGrid";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <ShopByCategory />
        <ProductGrid variant="preview" limit={6} />
      </main>
    </div>
  );
}
