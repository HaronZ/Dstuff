import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";

const SUPABASE_URL = "https://fdsqboyjuyutuwmnbrtz.supabase.co";
const SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkc3Fib3lqdXl1dHV3bW5icnR6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NzU3NTM4NiwiZXhwIjoyMDkzMTUxMzg2fQ.M9vdAEsXuAJu2z7LMljSAT7j9oZYB-0WZDVBzKpanx0";

const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

async function uploadImage(filePath, filename) {
  const buffer = readFileSync(filePath);
  const { error } = await supabase.storage
    .from("product-images")
    .upload(filename, buffer, { contentType: "image/jpeg", upsert: true });
  if (error) throw new Error(`Upload failed: ${error.message}`);
  const { data } = supabase.storage.from("product-images").getPublicUrl(filename);
  return data.publicUrl;
}

async function main() {
  console.log("Uploading images...");

  const urls = [];
  for (const [i, file] of [
    ["C:/Users/Haron/Downloads/d1.jpg", "obey-red-tee-1.jpg"],
    ["C:/Users/Haron/Downloads/d2.jpg", "obey-red-tee-2.jpg"],
    ["C:/Users/Haron/Downloads/d3.jpg", "obey-red-tee-3.jpg"],
  ]) {
    const url = await uploadImage(i, file);
    urls.push(url);
    console.log(`✓ Uploaded: ${url}`);
  }

  console.log("\nInserting product...");
  const { data, error } = await supabase.from("products").insert({
    slug: "obey-icon-face-tee-red",
    name: "OBEY Icon Face Tee — Red",
    brand: "OBEY",
    category: "Tops",
    condition: "Good",
    size: "M",
    price_centavos: 39900,
    images: urls,
    description:
      "OBEY Icon Face graphic tee in deep red. Classic Shepard Fairey box logo print on chest. Slight creasing from hanging — no stains, no holes. A streetwear staple.",
    measurements: {
      "Chest (pit to pit)": "22 in",
      "Length": "28 in",
      "Shoulder": "19 in",
      "Sleeve": "9 in",
    },
    reserved: false,
    dropped_at: new Date().toISOString(),
  });

  if (error) {
    console.error("Insert failed:", error.message);
  } else {
    console.log("✓ Product added:", data);
  }
}

main().catch(console.error);
