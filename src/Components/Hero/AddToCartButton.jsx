"use client";

import { useState } from "react";
import { HiCheck, HiOutlineShoppingCart } from "react-icons/hi2";
import { useCart } from "@/Components/providers/CartProvider";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-all"
      style={{
        background: added
          ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
          : "linear-gradient(135deg, #082d4a 0%, #0d4f7c 100%)",
      }}
    >
      {added ? (
        <>
          <HiCheck className="text-xl" />
          Added to Cart
        </>
      ) : (
        <>
          <HiOutlineShoppingCart className="text-xl" />
          Add to Cart - ₹{product.price}
        </>
      )}
    </button>
  );
}
