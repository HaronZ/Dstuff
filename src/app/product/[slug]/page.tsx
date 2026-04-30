import { notFound } from "next/navigation";
import { Ruler, Tag, Info } from "lucide-react";
import { getProductBySlug, products } from "@/data/products";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ConditionBadge } from "@/components/product/ConditionBadge";
import { PriceTag } from "@/components/product/PriceTag";
import { ReserveButton } from "@/components/product/ReserveButton";
import { formatManilaDate } from "@/lib/format";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Dstuff | ₱${(product.priceCentavos / 100).toLocaleString()}`,
    description: `${product.condition} ${product.category} by ${product.brand}. ${product.description}`,
    openGraph: { images: [product.images[0]] },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 pb-28 pt-6 sm:px-6 sm:py-10 md:pb-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
        {/* Gallery */}
        <ProductGallery images={product.images} name={product.name} />

        {/* Info */}
        <div className="space-y-5">
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-gray-400">
              {product.brand} · {product.category}
            </p>
            <h1 className="text-2xl font-black text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          <div className="flex items-center gap-3">
            <PriceTag centavos={product.priceCentavos} className="text-2xl" />
            <ConditionBadge condition={product.condition} />
          </div>

          {/* One-of-one notice */}
          <div className="flex items-start gap-2 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-700">
            <Info className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              This is a <strong>one-of-a-kind</strong> item. Only 1 available — reserve it now
              before someone else does.
            </span>
          </div>

          {/* Size */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Tag className="h-4 w-4" />
            <span>
              Size: <strong>{product.size}</strong>
            </span>
          </div>

          <ReserveButton product={product} />

          <p className="text-xs text-gray-400">
            Dropped {formatManilaDate(product.droppedAt)} · GCash & Maya accepted at checkout
          </p>

          {/* Description */}
          <div className="border-t pt-5">
            <h2 className="mb-2 font-semibold text-gray-900">Description</h2>
            <p className="text-sm leading-relaxed text-gray-600">{product.description}</p>
          </div>

          {/* Measurements */}
          <div className="border-t pt-5">
            <h2 className="mb-3 flex items-center gap-1.5 font-semibold text-gray-900">
              <Ruler className="h-4 w-4" />
              Measurements
            </h2>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100">
                {Object.entries(product.measurements).map(([label, value]) => (
                  <tr key={label}>
                    <td className="py-2 text-gray-500">{label}</td>
                    <td className="py-2 text-right font-medium text-gray-900">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
