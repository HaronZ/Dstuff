import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import { ConditionBadge } from "./ConditionBadge";
import { PriceTag } from "./PriceTag";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <ConditionBadge condition={product.condition} />
        </div>
        {product.reserved && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <span className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-gray-900">
              Reserved
            </span>
          </div>
        )}
      </div>
      <div className="mt-3 space-y-0.5 px-1">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
          {product.brand}
        </p>
        <p className="truncate text-sm font-semibold text-gray-900">{product.name}</p>
        <div className="flex items-center justify-between">
          <PriceTag centavos={product.priceCentavos} className="text-sm" />
          <span className="text-xs text-gray-400">{product.size}</span>
        </div>
      </div>
    </Link>
  );
}
