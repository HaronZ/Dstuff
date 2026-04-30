"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatPHP } from "@/lib/format";
import { ConditionBadge } from "@/components/product/ConditionBadge";

export default function CartPage() {
  const { items, removeFromCart, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-4 py-32 text-center">
        <ShoppingBag className="mb-4 h-16 w-16 text-gray-200" />
        <h1 className="text-xl font-black text-gray-900">Your cart is empty</h1>
        <p className="mt-2 text-gray-500">Reserve an item from our drops before it&apos;s gone.</p>
        <Link
          href="/shop"
          className="mt-6 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-700"
        >
          Browse Drops
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="mb-8 text-2xl font-black text-gray-900">Your Cart</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.slug}
            className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
          >
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={item.images[0]}
                alt={item.name}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  {item.brand}
                </p>
                <p className="font-semibold text-gray-900">{item.name}</p>
                <div className="mt-1 flex items-center gap-2">
                  <ConditionBadge condition={item.condition} />
                  <span className="text-xs text-gray-400">Size: {item.size}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-900">{formatPHP(item.priceCentavos)}</span>
                <button
                  onClick={() => removeFromCart(item.slug)}
                  className="rounded-lg p-1.5 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-gray-50 p-6">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal ({items.length} item{items.length !== 1 ? "s" : ""})</span>
          <span className="font-bold text-gray-900">{formatPHP(total())}</span>
        </div>
        <p className="mt-1 text-xs text-gray-400">Shipping calculated at checkout</p>
        <Link
          href="/checkout"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-700"
        >
          Proceed to Checkout <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
