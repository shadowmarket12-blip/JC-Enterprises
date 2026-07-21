"use client";

import ShopByCategory from "@/Components/Hero/CategorySection";
import CtaHome from "@/Components/Hero/CtaHome";
import CustomerReviews from "@/Components/Hero/CustomerReview";
// import DealOfTheWeek from "@/Components/Hero/DealPage";
import FAQ from "@/Components/Hero/Faq";
import HeroSlider from "@/Components/Hero/HeroSection";
import ProductShowcase from "@/Components/Hero/Productg";
import ProductGrid from "@/Components/Hero/ProductGrid";
import BrandShowcase from "@/Components/Hero/ShopByBrand";
import TrustBar from "@/Components/Hero/Trustbar";
import WhoWeServeAndDelivery from "@/Components/Hero/WhoWeserve";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSlider />
        <TrustBar />
        <BrandShowcase />
        <ShopByCategory />
        <ProductGrid variant="preview" limit={8} />
        <WhoWeServeAndDelivery />
        {/* <DealOfTheWeek /> */}
        <ProductShowcase />
        <CustomerReviews />
        <FAQ />
        <CtaHome />
      </main>
    </div>
  );
}
