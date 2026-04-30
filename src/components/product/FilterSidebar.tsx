"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import type { Category, Condition } from "@/types";

const categories: Category[] = [
  "Tops", "Bottoms", "Outerwear", "Dresses", "Bags", "Shoes", "Accessories",
];
const conditions: Condition[] = ["BNWT", "Like New", "Good", "Fair"];

export function FilterSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function setFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    const current = params.get(key);
    if (current === value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  const activeCategory = searchParams.get("category");
  const activeCondition = searchParams.get("condition");

  return (
    <aside className="w-56 shrink-0 space-y-6">
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-400">Category</p>
        <ul className="space-y-1">
          {categories.map((c) => (
            <li key={c}>
              <button
                onClick={() => setFilter("category", c)}
                className={`w-full rounded-lg px-3 py-1.5 text-left text-sm transition-colors ${
                  activeCategory === c
                    ? "bg-gray-900 font-semibold text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-400">Condition</p>
        <ul className="space-y-1">
          {conditions.map((c) => (
            <li key={c}>
              <button
                onClick={() => setFilter("condition", c)}
                className={`w-full rounded-lg px-3 py-1.5 text-left text-sm transition-colors ${
                  activeCondition === c
                    ? "bg-gray-900 font-semibold text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
