import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { adminCreateProduct, adminUpdateProduct, adminDeleteProduct } from "@/lib/products-db";

async function isAdmin() {
  const cookieStore = await cookies();
  return cookieStore.get("admin_auth")?.value === process.env.ADMIN_PASSWORD;
}

export async function POST(req: NextRequest) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const body = await req.json();
    const product = await adminCreateProduct({
      slug: body.slug,
      name: body.name,
      brand: body.brand,
      category: body.category,
      condition: body.condition,
      size: body.size,
      price_centavos: body.price_centavos,
      images: body.images,
      description: body.description,
      measurements: body.measurements,
      dropped_at: new Date().toISOString(),
      reserved: body.reserved ?? false,
    });
    return NextResponse.json(product);
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const body = await req.json();
    const { id, ...rest } = body;
    const product = await adminUpdateProduct(id, rest);
    return NextResponse.json(product);
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { id } = await req.json();
    await adminDeleteProduct(id);
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
