import { notFound, redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin-auth";
import { adminGetAllProducts, adminDeleteProduct } from "@/lib/products-db";
import { ProductForm } from "@/components/admin/ProductForm";

export const dynamic = "force-dynamic";

export default async function EditProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ delete?: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  const sp = await searchParams;

  const all = await adminGetAllProducts();
  const product = all.find((p) => p.id === id);
  if (!product) notFound();

  // Handle delete
  if (sp.delete === "1") {
    await adminDeleteProduct(id);
    redirect("/admin/dashboard");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <div className="mb-6">
          <h1 className="text-2xl font-black text-gray-900">Edit Product</h1>
          <p className="text-sm text-gray-400">{product.name}</p>
        </div>
        <ProductForm initial={product} />
      </div>
    </div>
  );
}
