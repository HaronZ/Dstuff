"use client";

import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { FilterSidebar } from "./FilterSidebar";

export function ShopShell({
  count,
  children,
}: {
  count: number;
  children: React.ReactNode;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 pb-24 sm:px-6 md:pb-10">
      {/* Header row */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-black text-gray-900 sm:text-2xl">
          All Drops{" "}
          <span className="text-base font-normal text-gray-400">
            ({count} item{count !== 1 ? "s" : ""})
          </span>
        </h1>
        {/* Mobile filter button */}
        <button
          onClick={() => setDrawerOpen(true)}
          className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 md:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filter
        </button>
      </div>

      <div className="flex gap-8">
        {/* Desktop sidebar */}
        <div className="hidden md:block">
          <FilterSidebar />
        </div>

        {/* Product grid */}
        <div className="flex-1 min-w-0">{children}</div>
      </div>

      {/* Mobile filter drawer overlay */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setDrawerOpen(false)}
          />
          {/* Drawer */}
          <div className="relative ml-auto flex h-full w-72 flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b px-5 py-4">
              <span className="font-semibold text-gray-900">Filters</span>
              <button
                onClick={() => setDrawerOpen(false)}
                className="rounded-lg p-1.5 hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <div className="overflow-y-auto p-5">
              <FilterSidebar onSelect={() => setDrawerOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
