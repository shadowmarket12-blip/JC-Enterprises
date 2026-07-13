import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiArrowLeft, HiStar } from "react-icons/hi2";
import { PRODUCTS, getProductById } from "@/constants/products";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ id: String(product.id) }));
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm mb-6 hover:underline"
          style={{ color: "#082d4a" }}
        >
          <HiArrowLeft />
          Back to Products
        </Link>

        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center">
              <p
                className="text-sm font-bold uppercase tracking-wider mb-2"
                style={{ color: "#082d4a" }}
              >
                {product.category}
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <HiStar
                    key={i}
                    className={`text-xl ${i < product.rating ? "text-amber-400" : "text-gray-200"}`}
                  />
                ))}
                <span className="text-sm text-gray-500">
                  ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl sm:text-4xl font-bold">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
                {product.discount && (
                  <span
                    className="px-3 py-1 rounded-full text-sm font-bold text-white"
                    style={{ background: "#082d4a" }}
                  >
                    {product.discount}% OFF
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <h3 className="font-bold text-lg mb-3">Key Features:</h3>
              <ul className="space-y-2 mb-8">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#082d4a" }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3.5 rounded-xl font-semibold text-white transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, #082d4a 0%, #0d4f7c 100%)",
                }}
              >
                Add to Cart - ${product.price}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
