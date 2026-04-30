import { requireAdmin } from "@/lib/admin-auth";
import { ProductForm } from "@/components/admin/ProductForm";

export default async function NewProductPage() {
  await requireAdmin();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <div className="mb-6">
          <h1 className="text-2xl font-black text-gray-900">Add New Product</h1>
          <p className="text-sm text-gray-400">Fill in the details for a new ukay drop.</p>
        </div>
        <ProductForm />
      </div>
    </div>
  );
}
