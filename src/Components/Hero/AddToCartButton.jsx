"use client";

import { useState } from "react";
import { HiCheck, HiOutlineShoppingCart } from "react-icons/hi2";
import { useCart } from "@/Components/providers/CartProvider";
import { useProductGallery } from "@/Components/ProductGalleryContext";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  const { activePrice, activeColor, activeStock } = useProductGallery();
  const [added, setAdded] = useState(false);

  const outOfStock = activeStock !== null && activeStock <= 0;

  const handleClick = () => {
    if (outOfStock) return;
    addToCart({
      ...product,
      price: activePrice,
      color: activeColor?.name,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={outOfStock}
      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-all disabled:cursor-not-allowed disabled:opacity-60"
      style={{
        background: outOfStock
          ? "#9ca3af"
          : added
            ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
            : "linear-gradient(135deg, #082d4a 0%, #0d4f7c 100%)",
      }}
    >
      {outOfStock ? (
        "Out of Stock"
      ) : added ? (
        <>
          <HiCheck className="text-xl" />
          Added to Cart
        </>
      ) : (
        <>
          <HiOutlineShoppingCart className="text-xl" />
          Add to Cart - ₹{activePrice}
        </>
      )}
    </button>
  );
}
