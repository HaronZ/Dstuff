"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ImagePlus, X, ArrowLeft } from "lucide-react";
import Link from "next/link";

const CATEGORIES = ["Tops", "Bottoms", "Outerwear", "Dresses", "Bags", "Shoes", "Accessories"];
const CONDITIONS = ["BNWT", "Like New", "Good", "Fair"];

interface Props {
  initial?: {
    id: string;
    slug: string;
    name: string;
    brand: string;
    category: string;
    condition: string;
    size: string;
    price_centavos: number;
    images: string[];
    description: string;
    measurements: Record<string, string>;
    reserved: boolean;
  };
}

export function ProductForm({ initial }: Props) {
  const router = useRouter();
  const isEdit = !!initial;

  const [form, setForm] = useState({
    name: initial?.name ?? "",
    brand: initial?.brand ?? "",
    category: initial?.category ?? "Tops",
    condition: initial?.condition ?? "Like New",
    size: initial?.size ?? "",
    price: initial ? String(initial.price_centavos / 100) : "",
    description: initial?.description ?? "",
    reserved: initial?.reserved ?? false,
  });

  const [images, setImages] = useState<string[]>(initial?.images ?? []);
  const [measurements, setMeasurements] = useState<{ key: string; value: string }[]>(
    initial
      ? Object.entries(initial.measurements).map(([key, value]) => ({ key, value }))
      : [{ key: "", value: "" }]
  );
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function set(field: string, value: string | boolean) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;
    setUploading(true);
    try {
      for (const file of files) {
        const fd = new FormData();
        fd.append("file", file);
        const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
        const { url } = await res.json();
        setImages((imgs) => [...imgs, url]);
      }
    } catch {
      setError("Image upload failed.");
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const measurementsObj = Object.fromEntries(
      measurements.filter((m) => m.key && m.value).map((m) => [m.key, m.value])
    );

    const slug = form.name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .slice(0, 60);

    const body = {
      id: initial?.id,
      slug: initial?.slug ?? slug,
      name: form.name,
      brand: form.brand,
      category: form.category,
      condition: form.condition,
      size: form.size,
      price_centavos: Math.round(parseFloat(form.price) * 100),
      images,
      description: form.description,
      measurements: measurementsObj,
      reserved: form.reserved,
    };

    const res = await fetch("/api/admin/products", {
      method: isEdit ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      router.push("/admin/dashboard");
      router.refresh();
    } else {
      const { error: err } = await res.json();
      setError(err ?? "Something went wrong.");
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Link
        href="/admin/dashboard"
        className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800"
      >
        <ArrowLeft className="h-4 w-4" /> Back to dashboard
      </Link>

      <div className="rounded-2xl bg-white p-6 shadow-sm space-y-4">
        <h2 className="font-semibold text-gray-900">Basic Info</h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="label">Product Name</label>
            <input required value={form.name} onChange={(e) => set("name", e.target.value)}
              placeholder="Vintage Ralph Lauren Polo" className="input" />
          </div>
          <div>
            <label className="label">Brand</label>
            <input required value={form.brand} onChange={(e) => set("brand", e.target.value)}
              placeholder="Ralph Lauren" className="input" />
          </div>
          <div>
            <label className="label">Size</label>
            <input required value={form.size} onChange={(e) => set("size", e.target.value)}
              placeholder="M" className="input" />
          </div>
          <div>
            <label className="label">Category</label>
            <select value={form.category} onChange={(e) => set("category", e.target.value)} className="input">
              {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Condition</label>
            <select value={form.condition} onChange={(e) => set("condition", e.target.value)} className="input">
              {CONDITIONS.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Price (₱)</label>
            <input required type="number" min="1" step="0.01" value={form.price}
              onChange={(e) => set("price", e.target.value)} placeholder="499" className="input" />
          </div>
          <div className="flex items-center gap-2 pt-5">
            <input type="checkbox" id="reserved" checked={form.reserved}
              onChange={(e) => set("reserved", e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 accent-emerald-500" />
            <label htmlFor="reserved" className="text-sm text-gray-700">Mark as Reserved</label>
          </div>
        </div>

        <div>
          <label className="label">Description</label>
          <textarea rows={3} value={form.description}
            onChange={(e) => set("description", e.target.value)}
            placeholder="Describe the item's condition, fit, details..." className="input resize-none" />
        </div>
      </div>

      {/* Images */}
      <div className="rounded-2xl bg-white p-6 shadow-sm space-y-3">
        <h2 className="font-semibold text-gray-900">Photos</h2>
        <div className="flex flex-wrap gap-3">
          {images.map((url, i) => (
            <div key={i} className="relative h-24 w-24 overflow-hidden rounded-xl bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt="" className="h-full w-full object-cover" />
              <button type="button" onClick={() => setImages(images.filter((_, j) => j !== i))}
                className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/60 text-white">
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
          <label className="flex h-24 w-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed border-gray-200 text-gray-400 hover:border-gray-400">
            <ImagePlus className="h-6 w-6" />
            <span className="text-xs">{uploading ? "Uploading..." : "Add photo"}</span>
            <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
          </label>
        </div>
      </div>

      {/* Measurements */}
      <div className="rounded-2xl bg-white p-6 shadow-sm space-y-3">
        <h2 className="font-semibold text-gray-900">Measurements</h2>
        {measurements.map((m, i) => (
          <div key={i} className="flex gap-2">
            <input value={m.key} placeholder="e.g. Chest (pit to pit)"
              onChange={(e) => setMeasurements(measurements.map((x, j) => j === i ? { ...x, key: e.target.value } : x))}
              className="input flex-1" />
            <input value={m.value} placeholder="21 in"
              onChange={(e) => setMeasurements(measurements.map((x, j) => j === i ? { ...x, value: e.target.value } : x))}
              className="input w-28" />
            <button type="button" onClick={() => setMeasurements(measurements.filter((_, j) => j !== i))}
              className="rounded-lg px-2 text-gray-400 hover:text-red-500">
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
        <button type="button" onClick={() => setMeasurements([...measurements, { key: "", value: "" }])}
          className="text-sm text-emerald-600 hover:text-emerald-500">
          + Add measurement
        </button>
      </div>

      {error && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>}

      <button type="submit" disabled={saving || uploading}
        className="w-full rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white hover:bg-gray-700 disabled:opacity-50">
        {saving ? "Saving..." : isEdit ? "Save Changes" : "Publish Product"}
      </button>
    </form>
  );
}
