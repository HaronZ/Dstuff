"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart";
import { formatPHP } from "@/lib/format";
import type { PaymentMethodId } from "@/types";

interface PaymentOption {
  id: PaymentMethodId;
  label: string;
  description: string;
  available: boolean;
}

const paymentOptions: PaymentOption[] = [
  { id: "gcash", label: "GCash", description: "Pay via GCash e-wallet", available: true },
  { id: "maya", label: "Maya", description: "Pay via Maya e-wallet", available: true },
  { id: "cod", label: "Cash on Delivery", description: "Pay when your order arrives", available: false },
  { id: "card", label: "Credit / Debit Card", description: "Visa, Mastercard, JCB", available: false },
];

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethodId>("gcash");
  const [submitted, setSubmitted] = useState(false);

  function handleOrder(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
    setTimeout(() => router.push("/"), 3000);
  }

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center justify-center px-4 py-32 text-center">
        <p className="text-5xl">🎉</p>
        <h1 className="mt-4 text-2xl font-black text-gray-900">Order Confirmed!</h1>
        <p className="mt-2 text-gray-500">
          We&apos;ll send your payment details via GCash / Maya shortly. Thank you for shopping
          Dstuff!
        </p>
        <p className="mt-4 text-sm text-gray-400">Redirecting you home...</p>
      </div>
    );
  }

  if (items.length === 0) {
    router.replace("/cart");
    return null;
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="mb-8 text-2xl font-black text-gray-900">Checkout</h1>

      <form onSubmit={handleOrder} className="grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Left: Shipping + Payment */}
        <div className="space-y-8">
          {/* Shipping */}
          <section className="rounded-2xl border border-gray-100 p-6">
            <h2 className="mb-4 font-semibold text-gray-900">Shipping Details</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label className="mb-1 block text-xs font-medium text-gray-500">Full Name</label>
                <input
                  required
                  placeholder="Juan dela Cruz"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-gray-900"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-500">Mobile Number</label>
                <input
                  required
                  placeholder="09XX XXX XXXX"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-gray-900"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-500">Province</label>
                <input
                  required
                  placeholder="Metro Manila"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-gray-900"
                />
              </div>
              <div className="col-span-2">
                <label className="mb-1 block text-xs font-medium text-gray-500">Complete Address</label>
                <textarea
                  required
                  rows={2}
                  placeholder="Barangay, City, Province, ZIP"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-gray-900"
                />
              </div>
              <div className="col-span-2">
                <label className="mb-1 block text-xs font-medium text-gray-500">
                  Order Notes (optional)
                </label>
                <input
                  placeholder="Special instructions for seller..."
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-gray-900"
                />
              </div>
            </div>
          </section>

          {/* Payment */}
          <section className="rounded-2xl border border-gray-100 p-6">
            <h2 className="mb-4 font-semibold text-gray-900">Payment Method</h2>
            <div className="grid gap-2">
              {paymentOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  disabled={!option.available}
                  onClick={() => option.available && setSelectedPayment(option.id)}
                  className={`flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all
                    ${
                      selectedPayment === option.id && option.available
                        ? "border-emerald-500 bg-emerald-50"
                        : "border-gray-100"
                    }
                    ${option.available ? "hover:border-emerald-200" : "cursor-not-allowed opacity-40"}`}
                >
                  <div
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                      selectedPayment === option.id && option.available
                        ? "border-emerald-500 bg-emerald-500"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedPayment === option.id && option.available && (
                      <span className="h-2 w-2 rounded-full bg-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">{option.label}</p>
                    <p className="text-xs text-gray-400">{option.description}</p>
                  </div>
                  {!option.available && (
                    <span className="text-xs text-gray-400">Coming soon</span>
                  )}
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* Right: Order Summary */}
        <div className="space-y-4">
          <section className="sticky top-20 rounded-2xl bg-gray-50 p-6">
            <h2 className="mb-4 font-semibold text-gray-900">Order Summary</h2>
            <ul className="mb-4 space-y-3 text-sm">
              {items.map((item) => (
                <li key={item.slug} className="flex justify-between gap-2">
                  <span className="text-gray-600 leading-tight">{item.name}</span>
                  <span className="shrink-0 font-medium">{formatPHP(item.priceCentavos)}</span>
                </li>
              ))}
            </ul>
            <div className="border-t pt-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-bold">{formatPHP(total())}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Shipping</span>
                <span className="text-gray-400">TBD</span>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 w-full rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-700"
            >
              Place Order via {selectedPayment === "gcash" ? "GCash" : "Maya"}
            </button>
            <p className="mt-2 text-center text-xs text-gray-400">
              Payment instructions will be sent after order is confirmed.
            </p>
          </section>
        </div>
      </form>
    </div>
  );
}
