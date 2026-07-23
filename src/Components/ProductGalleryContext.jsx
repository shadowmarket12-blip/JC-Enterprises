"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

const ProductGalleryContext = createContext(null);

export function ProductGalleryProvider({ product, children }) {
  const colors = product.colors || [];
  const [selectedIndex, setSelectedIndexState] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const activeColor = colors[selectedIndex] || null;
  const images = activeColor?.images?.length
    ? activeColor.images
    : [product.image];
  const activeImage = images[selectedImageIndex] || images[0];

  // Per-color price is optional — falls back to the product's base price
  // whenever a color doesn't set its own `price` / `originalPrice`.
  const activePrice = activeColor?.price ?? product.price;
  const activeOriginalPrice =
    activeColor?.originalPrice ?? product.originalPrice;

  // Discount is always derived from the active price pair rather than a
  // stored field, so it can never drift out of sync when a color has its
  // own price/originalPrice.
  const activeDiscount =
    activeOriginalPrice && activeOriginalPrice > activePrice
      ? Math.round(
          ((activeOriginalPrice - activePrice) / activeOriginalPrice) * 100,
        )
      : 0;

  // Per-color stock is optional — falls back to the product's base stock
  // whenever a color doesn't set its own `stock`.
  const activeStock = activeColor?.stock ?? product.stock ?? null;

  const setSelectedIndex = useCallback((index) => {
    setSelectedIndexState(index);
    setSelectedImageIndex(0);
  }, []);

  const value = useMemo(
    () => ({
      colors,
      selectedIndex,
      setSelectedIndex,
      activeColor,
      images,
      selectedImageIndex,
      setSelectedImageIndex,
      activeImage,
      activePrice,
      activeOriginalPrice,
      activeDiscount,
      activeStock,
    }),
    [
      colors,
      selectedIndex,
      setSelectedIndex,
      activeColor,
      images,
      selectedImageIndex,
      activeImage,
      activePrice,
      activeOriginalPrice,
      activeDiscount,
      activeStock,
    ],
  );

  return (
    <ProductGalleryContext.Provider value={value}>
      {children}
    </ProductGalleryContext.Provider>
  );
}

export function useProductGallery() {
  const context = useContext(ProductGalleryContext);
  if (!context) {
    throw new Error(
      "useProductGallery must be used inside a ProductGalleryProvider",
    );
  }
  return context;
}
