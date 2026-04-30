import { Suspense } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { FilterSidebar } from "@/components/product/FilterSidebar";
import type { Category, Condition } from "@/types";

interface SearchParams {
  category?: string;
  condition?: string;
}

export const metadata = {
  title: "Shop All Drops — Dstuff",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const filtered = products.filter((p) => {
    if (params.category && p.category !== (params.category as Category)) return false;
    if (params.condition && p.condition !== (params.condition as Condition)) return false;
    return true;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <h1 className="mb-8 text-2xl font-black text-gray-900">
        All Drops{" "}
        <span className="ml-1 text-base font-normal text-gray-400">
          ({filtered.length} item{filtered.length !== 1 ? "s" : ""})
        </span>
      </h1>

      <div className="flex gap-8">
        <Suspense>
          <FilterSidebar />
        </Suspense>

        {filtered.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center py-24 text-gray-400">
            <p className="text-4xl">🫙</p>
            <p className="mt-3 font-semibold">No items match your filter.</p>
            <p className="text-sm">Try a different category or condition.</p>
          </div>
        ) : (
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
