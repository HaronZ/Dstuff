import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Product } from "@/types";

interface CartStore {
  items: Product[];
  reservedSlugs: string[];
  addToCart: (product: Product) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  isReserved: (slug: string) => boolean;
  total: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      reservedSlugs: [],

      addToCart: (product) => {
        const { reservedSlugs, items } = get();
        if (reservedSlugs.includes(product.slug)) return;
        set({
          items: [...items, { ...product, reserved: true }],
          reservedSlugs: [...reservedSlugs, product.slug],
        });
      },

      removeFromCart: (slug) => {
        set((s) => ({
          items: s.items.filter((i) => i.slug !== slug),
          reservedSlugs: s.reservedSlugs.filter((s) => s !== slug),
        }));
      },

      clearCart: () => set({ items: [], reservedSlugs: [] }),

      isReserved: (slug) => get().reservedSlugs.includes(slug),

      total: () => get().items.reduce((sum, i) => sum + i.priceCentavos, 0),
    }),
    {
      name: "ukay-cart",
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? localStorage : (({ getItem: () => null, setItem: () => {}, removeItem: () => {} }) as unknown as Storage)
      ),
    }
  )
);
