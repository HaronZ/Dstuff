"use client";

import Link from "next/link";
import { ShoppingBag, Search } from "lucide-react";
import { useCart } from "@/lib/cart";

export function Navbar() {
  const { items } = useCart();

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="text-lg font-black tracking-tight text-gray-900">
          D<span className="text-emerald-500">stuff</span>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-gray-600 sm:flex">
          <Link href="/shop" className="hover:text-gray-900 transition-colors">Shop</Link>
          <Link href="/shop?category=Tops" className="hover:text-gray-900 transition-colors">Tops</Link>
          <Link href="/shop?category=Bottoms" className="hover:text-gray-900 transition-colors">Bottoms</Link>
          <Link href="/shop?category=Bags" className="hover:text-gray-900 transition-colors">Bags</Link>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-lg p-2 hover:bg-gray-100 transition-colors">
            <Search className="h-5 w-5 text-gray-600" />
          </button>
          <Link href="/cart" className="relative rounded-lg p-2 hover:bg-gray-100 transition-colors">
            <ShoppingBag className="h-5 w-5 text-gray-600" />
            {items.length > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white">
                {items.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
