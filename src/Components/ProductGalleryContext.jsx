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

  // Every other variant-specific field follows the same override pattern:
  // a color can set its own `title` / `description` / `features` /
  // `specifications` / `sku`, and anything it doesn't set falls back to the
  // base product's value.
  const activeName = activeColor?.title ?? product.name;
  const activeDescription = activeColor?.description ?? product.description;
  const activeFeatures = activeColor?.features?.length
    ? activeColor.features
    : product.features;

  // Specifications are merged rather than replaced, so a color can override
  // just a couple of rows (e.g. Color, Finish) without having to restate
  // every spec the base product already defines.
  const activeSpecifications = activeColor?.specifications
    ? { ...product.specifications, ...activeColor.specifications }
    : product.specifications;

  const activeSku = useMemo(() => {
    if (activeColor?.sku) return activeColor.sku;
    const baseSku = product.sku || `JCE-${String(product.id).padStart(4, "0")}`;
    if (!activeColor?.name) return baseSku;
    const colorCode = activeColor.name
      .replace(/[^A-Za-z0-9]+/g, "")
      .slice(0, 3)
      .toUpperCase();
    return colorCode ? `${baseSku}-${colorCode}` : baseSku;
  }, [activeColor, product.sku, product.id]);

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
      activeName,
      activeDescription,
      activeFeatures,
      activeSpecifications,
      activeSku,
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
      activeName,
      activeDescription,
      activeFeatures,
      activeSpecifications,
      activeSku,
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
