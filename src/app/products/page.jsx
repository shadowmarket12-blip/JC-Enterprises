import ProductGrid from "@/Components/Hero/ProductGrid";

export default async function ProductsPage({ searchParams }) {
  const { category } = await searchParams;

  return (
    <div className="min-h-screen">
      <ProductGrid initialCategory={category} />
    </div>
  );
}
