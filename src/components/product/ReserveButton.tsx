"use client";

import { useCart } from "@/lib/cart";
import type { Product } from "@/types";

export function ReserveButton({ product }: { product: Product }) {
  const { isReserved, addToCart } = useCart();
  const reserved = isReserved(product.slug);

  return (
    <button
      disabled={reserved}
      onClick={() => addToCart(product)}
      className={`w-full rounded-xl px-6 py-3 text-base font-semibold transition-all
        ${
          reserved
            ? "cursor-not-allowed bg-emerald-100 text-emerald-700"
            : "bg-gray-900 text-white hover:bg-gray-700 active:scale-95"
        }`}
    >
      {reserved ? "Reserved ✓" : "Reserve — One of a Kind"}
    </button>
  );
}
