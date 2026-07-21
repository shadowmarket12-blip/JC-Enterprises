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
    }),
    [
      colors,
      selectedIndex,
      setSelectedIndex,
      activeColor,
      images,
      selectedImageIndex,
      activeImage,
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
