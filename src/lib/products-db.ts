import { supabase, supabaseAdmin } from "./supabase";
import type { Product, Category, Condition } from "@/types";

interface DbProduct {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: Category;
  condition: Condition;
  size: string;
  price_centavos: number;
  images: string[];
  description: string;
  measurements: Record<string, string>;
  dropped_at: string;
  reserved: boolean;
}

function toProduct(row: DbProduct): Product {
  return {
    slug: row.slug,
    name: row.name,
    brand: row.brand,
    category: row.category,
    condition: row.condition,
    size: row.size,
    priceCentavos: row.price_centavos,
    images: row.images,
    description: row.description,
    measurements: row.measurements,
    droppedAt: row.dropped_at,
    reserved: row.reserved,
  };
}

export async function getAllProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("dropped_at", { ascending: false });
  if (error) throw error;
  return (data as DbProduct[]).map(toProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error) return null;
  return toProduct(data as DbProduct);
}

export async function getNewDrops(count = 4): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("dropped_at", { ascending: false })
    .limit(count);
  if (error) throw error;
  return (data as DbProduct[]).map(toProduct);
}

// Admin only — uses service role
export async function adminGetAllProducts(): Promise<(DbProduct & { id: string })[]> {
  const { data, error } = await supabaseAdmin
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data as (DbProduct & { id: string })[];
}

export async function adminCreateProduct(product: Omit<DbProduct, "id">) {
  const { data, error } = await supabaseAdmin
    .from("products")
    .insert(product)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function adminUpdateProduct(id: string, product: Partial<DbProduct>) {
  const { data, error } = await supabaseAdmin
    .from("products")
    .update(product)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function adminDeleteProduct(id: string) {
  const { error } = await supabaseAdmin.from("products").delete().eq("id", id);
  if (error) throw error;
}

export async function uploadProductImage(file: File): Promise<string> {
  const ext = file.name.split(".").pop();
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const { error } = await supabaseAdmin.storage
    .from("product-images")
    .upload(filename, file, { contentType: file.type });
  if (error) throw error;
  const { data } = supabaseAdmin.storage.from("product-images").getPublicUrl(filename);
  return data.publicUrl;
}
