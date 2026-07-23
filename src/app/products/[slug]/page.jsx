import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  HiArrowLeft,
  HiStar,
  HiChevronRight,
  HiShieldCheck,
  HiArrowPath,
  HiTruck,
  HiClock,
  HiCheckBadge,
} from "react-icons/hi2";
import { PRODUCTS, getProductBySlug } from "@/constants/products";
import AddToCartButton from "@/Components/Hero/AddToCartButton";
import ThumbnailScroller from "@/Components/ThumbnailScroller";
import MainProductImage from "@/Components/MainProductImage";
import ColorSwatches from "@/Components/ColorSwatches";
import ProductPrice from "@/Components/ProductPrice";
import { ProductGalleryProvider } from "@/Components/ProductGalleryContext";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Top Promo Bar */}
      <div className="bg-gradient-to-r from-[#082d4a] to-[#0f4c7a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2">
          <div className="flex items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs">
            <span className="flex items-center gap-1">
              <HiTruck className="text-xs sm:text-sm" /> Free Shipping
            </span>
            <span className="hidden sm:inline opacity-30">|</span>
            <span className="flex items-center gap-1">
              <HiClock className="text-xs sm:text-sm" /> Fast Delivery
            </span>
            <span className="hidden sm:inline opacity-30">|</span>
            <span className="flex items-center gap-1">
              <HiCheckBadge className="text-xs sm:text-sm" /> Secure Payment
            </span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="border-b border-gray-200/60 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <Link
              href="/"
              className="text-gray-400 hover:text-[#082d4a] transition-colors duration-200"
            >
              Home
            </Link>
            <HiChevronRight className="text-gray-300 text-[10px]" />
            <Link
              href="/products"
              className="text-gray-400 hover:text-[#082d4a] transition-colors duration-200"
            >
              Products
            </Link>
            <HiChevronRight className="text-gray-300 text-[10px]" />
            <span className="font-semibold text-[#082d4a] max-w-[120px] sm:max-w-none truncate">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Back Button */}
        <Link
          href="/products"
          className="group inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <HiArrowLeft className="text-xs sm:text-sm transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="text-gray-700">Continue Shopping</span>
        </Link>

        {/* Main Product Section */}
        <ProductGalleryProvider product={product}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Left Column - Image Gallery Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm p-3 sm:p-4 lg:p-5 space-y-4 sm:space-y-5 self-start">
              <MainProductImage product={product} />

              {/* Thumbnail row - up to 7 images, evenly spaced */}
              <ThumbnailScroller product={product} />
            </div>

            {/* Right Column - Product Details */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              {/* Category & Title */}
              <div>
                <span className="inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-[#082d4a]/10 text-[#082d4a] mb-3">
                  {product.category}
                </span>
                <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 leading-tight mb-2 sm:mb-3">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <HiStar
                        key={i}
                        className={`text-sm sm:text-base lg:text-lg ${i < product.rating ? "text-yellow-400" : "text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-600">
                    {product.rating}.0 ({product.reviews} reviews)
                  </span>
                  <span className="text-xs text-gray-400">|</span>
                  <span className="text-xs sm:text-sm text-green-600 font-medium">
                    {Math.floor(Math.random() * 100) + 50} sold in last 24h
                  </span>
                </div>
              </div>

              {/* Color Combination Picker */}
              <ColorSwatches />

              {/* Price Section */}
              <ProductPrice />

              {/* Description */}
              <div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                  Product Description
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">
                  {product.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#082d4a]/10 flex items-center justify-center flex-shrink-0">
                        <HiCheckBadge className="text-[#082d4a] text-xs sm:text-sm" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                    <HiTruck className="text-[#082d4a] text-sm sm:text-base" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-gray-700 text-center">
                    Free Delivery
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-50 to-green-100/50">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                    <HiArrowPath className="text-[#082d4a] text-sm sm:text-base" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-gray-700 text-center">
                    7 Day Return
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-50 to-purple-100/50">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                    <HiShieldCheck className="text-[#082d4a] text-sm sm:text-base" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-gray-700 text-center">
                    Warranty
                  </span>
                </div>
              </div>

              {/* Add to Cart Section */}
              <div className="sticky bottom-0 bg-white/80 backdrop-blur-sm p-3 sm:p-4 -mx-4 sm:mx-0 rounded-t-2xl sm:rounded-none shadow-2xl sm:shadow-none">
                <AddToCartButton product={product} />
              </div>
            </div>
          </div>
        </ProductGalleryProvider>

        {/* Related Products Section */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {PRODUCTS.slice(0, 4).map((relatedProduct, index) => (
              <Link
                key={index}
                href={`/products/${relatedProduct.slug}`}
                className="group"
              >
                <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 mb-2 sm:mb-3 shadow-lg">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-[#082d4a] transition-colors text-xs sm:text-sm">
                  {relatedProduct.name}
                </h3>
                <p className="font-bold text-sm sm:text-base lg:text-lg mt-1">
                  ₹{relatedProduct.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
