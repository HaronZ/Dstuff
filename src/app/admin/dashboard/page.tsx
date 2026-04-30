import Link from "next/link";
import { Plus, Pencil, Trash2, LogOut } from "lucide-react";
import { requireAdmin } from "@/lib/admin-auth";
import { adminGetAllProducts } from "@/lib/products-db";
import { formatPHP } from "@/lib/format";
import { AdminLogoutButton } from "@/components/admin/AdminLogoutButton";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  await requireAdmin();
  const products = await adminGetAllProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div>
            <h1 className="text-lg font-black text-gray-900">
              D<span className="text-emerald-500">stuff</span> Admin
            </h1>
            <p className="text-xs text-gray-400">{products.length} products total</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/products/new"
              className="flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700"
            >
              <Plus className="h-4 w-4" /> Add Product
            </Link>
            <AdminLogoutButton />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center text-gray-400">
            <p className="text-4xl">📦</p>
            <p className="mt-3 font-semibold text-gray-700">No products yet</p>
            <p className="text-sm">Add your first ukay drop to get started.</p>
            <Link
              href="/admin/products/new"
              className="mt-4 rounded-xl bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-gray-700"
            >
              Add First Product
            </Link>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
            <table className="w-full text-sm">
              <thead className="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">
                <tr>
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Condition</th>
                  <th className="px-4 py-3">Size</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {products.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {p.images[0] && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            className="h-10 w-10 rounded-lg object-cover"
                          />
                        )}
                        <div>
                          <p className="font-semibold text-gray-900">{p.name}</p>
                          <p className="text-xs text-gray-400">{p.brand}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{p.category}</td>
                    <td className="px-4 py-3 text-gray-600">{p.condition}</td>
                    <td className="px-4 py-3 text-gray-600">{p.size}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {formatPHP(p.price_centavos)}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                          p.reserved
                            ? "bg-red-100 text-red-700"
                            : "bg-emerald-100 text-emerald-700"
                        }`}
                      >
                        {p.reserved ? "Reserved" : "Available"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/admin/products/${p.id}`}
                          className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                        >
                          <Pencil className="h-4 w-4" />
                        </Link>
                        <Link
                          href={`/admin/products/${p.id}?delete=1`}
                          className="rounded-lg p-1.5 text-gray-400 hover:bg-red-50 hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
