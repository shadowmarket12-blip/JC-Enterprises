// utils/dealProducts.js
import { PRODUCTS } from "@/constants/products";

// Function to get random products for deals
export function getDealProducts() {
  // Get products with discounts, sort by highest discount
  const discountedProducts = PRODUCTS.filter(
    (product) => product.discount && product.discount > 15,
  ).sort((a, b) => b.discount - a.discount);

  // Select top 4-8 products for deals
  const topDeals = discountedProducts.slice(0, 8);

  // Add stock information for deal display
  return topDeals.map((product) => ({
    ...product,
    sold: Math.floor(Math.random() * 70) + 20, // Random sold count (20-90%)
    total: 100,
  }));
}

// Get featured/trending products for smaller sections
export function getFeaturedDeals(limit = 4) {
  return getDealProducts().slice(0, limit);
}
