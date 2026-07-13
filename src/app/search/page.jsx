import ProductGrid from "@/Components/Hero/ProductGrid";

export default async function SearchPage({ searchParams }) {
  const { q } = await searchParams;

  return (
    <div className="min-h-screen">
      <ProductGrid variant="full" initialSearchTerm={q ?? ""} />
    </div>
  );
}
