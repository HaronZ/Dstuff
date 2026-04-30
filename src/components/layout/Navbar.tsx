"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Tops", href: "/shop?category=Tops" },
  { label: "Bottoms", href: "/shop?category=Bottoms" },
  { label: "Outerwear", href: "/shop?category=Outerwear" },
  { label: "Bags", href: "/shop?category=Bags" },
  { label: "Shoes", href: "/shop?category=Shoes" },
];

export function Navbar() {
  const { items } = useCart();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-black tracking-tight text-gray-900"
            onClick={() => setOpen(false)}
          >
            D<span className="text-emerald-500">stuff</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-gray-900"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-1">
            <button className="rounded-lg p-2 transition-colors hover:bg-gray-100">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <Link
              href="/cart"
              className="relative rounded-lg p-2 transition-colors hover:bg-gray-100"
            >
              <ShoppingBag className="h-5 w-5 text-gray-600" />
              {items.length > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white">
                  {items.length}
                </span>
              )}
            </Link>
            {/* Hamburger — mobile only */}
            <button
              className="rounded-lg p-2 transition-colors hover:bg-gray-100 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? (
                <X className="h-5 w-5 text-gray-700" />
              ) : (
                <Menu className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
            <ul className="mt-2 space-y-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                      pathname === l.href
                        ? "bg-gray-900 text-white"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Mobile bottom tab bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-gray-100 bg-white/95 backdrop-blur-md md:hidden">
        {[
          { href: "/", label: "Home", icon: "🏠" },
          { href: "/shop", label: "Shop", icon: "🛍️" },
          { href: "/shop?category=Tops", label: "Tops", icon: "👕" },
          { href: "/cart", label: "Cart", icon: "🛒", badge: items.length },
        ].map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className="relative flex flex-1 flex-col items-center justify-center gap-0.5 py-2.5 text-[10px] font-medium text-gray-500 transition-colors hover:text-gray-900"
          >
            <span className="text-lg leading-none">{tab.icon}</span>
            {tab.label}
            {tab.badge ? (
              <span className="absolute right-3 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[9px] font-bold text-white">
                {tab.badge}
              </span>
            ) : null}
          </Link>
        ))}
      </div>
    </>
  );
}
