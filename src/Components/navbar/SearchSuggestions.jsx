import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/constants/products";

export function getSearchSuggestions(query, limit = 5) {
  const term = query.trim().toLowerCase();
  if (!term) return [];
  return PRODUCTS.filter(
    (product) =>
      product.name.toLowerCase().includes(term) ||
      product.brand.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term),
  ).slice(0, limit);
}

export default function SearchSuggestions({ query, onNavigate, className = "" }) {
  if (!query.trim()) return null;
  const results = getSearchSuggestions(query);

  return (
    <div className={className}>
      {results.length > 0 ? (
        <ul className="divide-y divide-gray-100 dark:divide-white/10">
          {results.map((product) => (
            <li key={product.slug}>
              <Link
                href={`/products/${product.slug}`}
                onClick={onNavigate}
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#082d4a]/5 transition-colors dark:hover:bg-white/10"
              >
                <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-[#082d4a] dark:text-white">
                    {product.name}
                  </p>
                  <p className="text-xs text-[#082d4a]/60 dark:text-white/50">
                    {product.brand}
                  </p>
                </div>
                <span className="flex-shrink-0 text-sm font-bold text-[#082d4a] dark:text-white">
                  ₹{product.price}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="px-4 py-3 text-sm text-[#082d4a]/60 dark:text-white/50">
          No products found for "{query}"
        </p>
      )}
    </div>
  );
}
