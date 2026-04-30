import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { getNewDrops } from "@/data/products";
import type { Category } from "@/types";

const categoryTiles: { label: Category; emoji: string; color: string }[] = [
  { label: "Tops", emoji: "👕", color: "bg-blue-50 hover:bg-blue-100" },
  { label: "Bottoms", emoji: "👖", color: "bg-yellow-50 hover:bg-yellow-100" },
  { label: "Outerwear", emoji: "🧥", color: "bg-orange-50 hover:bg-orange-100" },
  { label: "Bags", emoji: "👜", color: "bg-pink-50 hover:bg-pink-100" },
  { label: "Shoes", emoji: "👟", color: "bg-purple-50 hover:bg-purple-100" },
  { label: "Accessories", emoji: "🕶️", color: "bg-emerald-50 hover:bg-emerald-100" },
];

export default function HomePage() {
  const newDrops = getNewDrops(4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      {/* Hero */}
      <section className="mb-14 rounded-3xl bg-gray-900 px-8 py-16 text-white sm:px-14 sm:py-24">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Pre-loved · One of a Kind
        </p>
        <h1 className="mb-4 max-w-xl text-4xl font-black leading-tight sm:text-5xl">
          Find your next favorite piece — before someone else does.
        </h1>
        <p className="mb-8 max-w-md text-gray-400">
          Curated ukay-ukay drops from top brands. Every item is unique — once it&apos;s gone,
          it&apos;s gone. Shop fast, shop smart.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/shop"
            className="flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
          >
            Shop All Drops <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/shop?condition=BNWT"
            className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Brand New with Tags
          </Link>
        </div>
      </section>

      {/* New Drops */}
      <section className="mb-14">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-black text-gray-900">New Drops</h2>
          <Link
            href="/shop"
            className="flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-500"
          >
            See all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {newDrops.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Category Tiles */}
      <section>
        <h2 className="mb-6 text-xl font-black text-gray-900">Browse by Category</h2>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {categoryTiles.map(({ label, emoji, color }) => (
            <Link
              key={label}
              href={`/shop?category=${label}`}
              className={`flex flex-col items-center justify-center gap-2 rounded-2xl py-6 text-sm font-semibold text-gray-700 transition-colors ${color}`}
            >
              <span className="text-2xl">{emoji}</span>
              {label}
            </Link>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="mt-14 grid grid-cols-1 gap-4 rounded-2xl bg-gray-50 p-6 text-center sm:grid-cols-3">
        <div>
          <p className="text-2xl font-black text-gray-900">100%</p>
          <p className="text-sm text-gray-500">Authentic items</p>
        </div>
        <div>
          <p className="text-2xl font-black text-gray-900">1-of-1</p>
          <p className="text-sm text-gray-500">Every piece is unique</p>
        </div>
        <div>
          <p className="text-2xl font-black text-gray-900">GCash / Maya</p>
          <p className="text-sm text-gray-500">Accepted payments</p>
        </div>
      </section>
    </div>
  );
}
