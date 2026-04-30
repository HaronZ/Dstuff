import { Suspense } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { ShopShell } from "@/components/product/ShopShell";
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
    <Suspense>
      <ShopShell count={filtered.length}>
        {filtered.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center py-24 text-gray-400">
            <p className="text-4xl">🫙</p>
            <p className="mt-3 font-semibold">No items match your filter.</p>
            <p className="text-sm">Try a different category or condition.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}
      </ShopShell>
    </Suspense>
  );
}
