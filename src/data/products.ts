import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "ralph-lauren-polo-vintage-navy",
    name: "Vintage Ralph Lauren Polo",
    brand: "Ralph Lauren",
    category: "Tops",
    condition: "Like New",
    size: "M",
    priceCentavos: 49900,
    images: [
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80",
    ],
    description:
      "Classic navy polo from Ralph Lauren. Perfect condition with no pilling, fading, or stains. A timeless wardrobe staple.",
    measurements: {
      "Chest (pit to pit)": "21 in",
      Length: "28 in",
      Shoulder: "17 in",
      Sleeve: "9 in",
    },
    droppedAt: "2026-05-01T08:00:00+08:00",
    reserved: false,
  },
  {
    slug: "levis-501-light-wash-30x30",
    name: "Levi's 501 Light Wash Jeans",
    brand: "Levi's",
    category: "Bottoms",
    condition: "Good",
    size: "30x30",
    priceCentavos: 79900,
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
    ],
    description:
      "Iconic 501 straight cut in a faded light wash. Minor wear on knees — adds to the character. No rips or tears.",
    measurements: {
      Waist: "30 in",
      Inseam: "30 in",
      Rise: "10.5 in",
      "Thigh (across)": "12.5 in",
    },
    droppedAt: "2026-05-01T08:00:00+08:00",
    reserved: false,
  },
  {
    slug: "gap-fleece-zip-hoodie-olive",
    name: "GAP Olive Zip-Up Fleece Hoodie",
    brand: "GAP",
    category: "Outerwear",
    condition: "Good",
    size: "L",
    priceCentavos: 59900,
    images: [
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=600&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    ],
    description:
      "Thick fleece zip-up in muted olive. Cozy for Baguio trips or Makati office air-con. Zipper works perfectly.",
    measurements: {
      "Chest (pit to pit)": "23 in",
      Length: "27.5 in",
      Shoulder: "18.5 in",
      Sleeve: "25 in",
    },
    droppedAt: "2026-04-30T08:00:00+08:00",
    reserved: false,
  },
  {
    slug: "zara-floral-midi-dress-white",
    name: "Zara Floral Midi Dress",
    brand: "Zara",
    category: "Dresses",
    condition: "Like New",
    size: "S",
    priceCentavos: 69900,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=600&q=80",
    ],
    description:
      "Flowy white midi with subtle floral print. Worn once for a birthday. Still has Zara tags attached.",
    measurements: {
      Bust: "34 in",
      Waist: "27 in",
      Length: "45 in",
    },
    droppedAt: "2026-05-01T08:00:00+08:00",
    reserved: false,
  },
  {
    slug: "coach-leather-crossbody-tan",
    name: "Coach Leather Crossbody Bag",
    brand: "Coach",
    category: "Bags",
    condition: "Good",
    size: "One Size",
    priceCentavos: 189900,
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    ],
    description:
      "Genuine Coach tan leather crossbody with gold hardware. Minor scuff on bottom corner — priced to move.",
    measurements: {
      Width: "10 in",
      Height: "7 in",
      Depth: "3 in",
      "Strap drop": "22 in",
    },
    droppedAt: "2026-04-29T08:00:00+08:00",
    reserved: false,
  },
  {
    slug: "new-balance-990v4-grey-us9",
    name: "New Balance 990v4 Grey US9",
    brand: "New Balance",
    category: "Shoes",
    condition: "Good",
    size: "US 9",
    priceCentavos: 249900,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
    ],
    description:
      "Made in USA 990v4 in classic grey. Soles have moderate wear but uppers are clean. Box not included.",
    measurements: {
      Size: "US 9 / EU 42.5",
      Insole: "27.5 cm",
    },
    droppedAt: "2026-04-28T08:00:00+08:00",
    reserved: false,
  },
  {
    slug: "uniqlo-heattech-turtleneck-black-m",
    name: "Uniqlo HEATTECH Turtleneck — Black",
    brand: "Uniqlo",
    category: "Tops",
    condition: "BNWT",
    size: "M",
    priceCentavos: 29900,
    images: [
      "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600&q=80",
    ],
    description:
      "Brand new with tags. Uniqlo HEATTECH Extra Warm turtleneck in black. Perfect for cold weather or Baguio season.",
    measurements: {
      "Chest (pit to pit)": "19.5 in",
      Length: "26 in",
      Sleeve: "24 in",
    },
    droppedAt: "2026-05-01T10:00:00+08:00",
    reserved: false,
  },
  {
    slug: "thrifted-90s-windbreaker-red",
    name: "90s Colorblock Windbreaker — Red/Black",
    brand: "Unknown",
    category: "Outerwear",
    condition: "Good",
    size: "L (fits XL)",
    priceCentavos: 44900,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    ],
    description:
      "Vibes-heavy 90s windbreaker in red and black. Full zip, elastic cuffs, small logo on chest. Very Y2K.",
    measurements: {
      "Chest (pit to pit)": "24 in",
      Length: "28 in",
      Shoulder: "20 in",
    },
    droppedAt: "2026-04-27T08:00:00+08:00",
    reserved: false,
  },
  {
    slug: "hm-wide-leg-trousers-beige",
    name: "H&M Wide Leg Trousers — Beige",
    brand: "H&M",
    category: "Bottoms",
    condition: "Like New",
    size: "S/M",
    priceCentavos: 34900,
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80",
    ],
    description:
      "Chic wide-leg trousers in warm beige. Worn twice, no signs of wear. High-waist with button closure.",
    measurements: {
      Waist: "27 in",
      Hip: "38 in",
      Inseam: "28 in",
      "Leg opening": "14 in",
    },
    droppedAt: "2026-04-30T08:00:00+08:00",
    reserved: false,
  },
  {
    slug: "fossil-leather-bifold-wallet-brown",
    name: "Fossil Leather Bifold Wallet",
    brand: "Fossil",
    category: "Accessories",
    condition: "Good",
    size: "One Size",
    priceCentavos: 24900,
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80",
    ],
    description:
      "Genuine leather Fossil bifold in cognac brown. Natural patina from use. All slots intact.",
    measurements: {
      Width: "4.25 in",
      Height: "3.5 in",
    },
    droppedAt: "2026-04-28T08:00:00+08:00",
    reserved: false,
  },
  {
    slug: "nike-acg-cargo-pants-black-32",
    name: "Nike ACG Cargo Pants — Black",
    brand: "Nike",
    category: "Bottoms",
    condition: "Like New",
    size: "32",
    priceCentavos: 149900,
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
    ],
    description:
      "Technical ACG cargo pants with zip pockets. Barely worn — no fading, all zippers smooth.",
    measurements: {
      Waist: "32 in",
      Inseam: "30 in",
      Rise: "11 in",
      "Cargo pocket": "7x6 in",
    },
    droppedAt: "2026-05-01T08:00:00+08:00",
    reserved: false,
  },
  {
    slug: "tommy-hilfiger-striped-rugby-shirt",
    name: "Tommy Hilfiger Striped Rugby Shirt",
    brand: "Tommy Hilfiger",
    category: "Tops",
    condition: "Good",
    size: "L",
    priceCentavos: 54900,
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80",
    ],
    description:
      "Classic Tommy rugby shirt in navy and white stripes. Polo collar, button placket, embroidered logo on chest. Minimal fading.",
    measurements: {
      "Chest (pit to pit)": "22.5 in",
      Length: "29 in",
      Shoulder: "18 in",
      Sleeve: "10 in",
    },
    droppedAt: "2026-05-01T09:00:00+08:00",
    reserved: false,
  },
  {
    slug: "champion-reverse-weave-crewneck-grey",
    name: "Champion Reverse Weave Crewneck — Grey",
    brand: "Champion",
    category: "Tops",
    condition: "Like New",
    size: "XL",
    priceCentavos: 64900,
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80",
    ],
    description:
      "Heavyweight reverse weave crewneck in heather grey. Classic C logo on left sleeve. Thick, warm, and barely worn.",
    measurements: {
      "Chest (pit to pit)": "25 in",
      Length: "28.5 in",
      Shoulder: "21 in",
      Sleeve: "25 in",
    },
    droppedAt: "2026-04-29T08:00:00+08:00",
    reserved: false,
  },
  {
    slug: "columbia-fleece-vest-red-m",
    name: "Columbia Fleece Vest — Red",
    brand: "Columbia",
    category: "Outerwear",
    condition: "Good",
    size: "M",
    priceCentavos: 39900,
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80",
    ],
    description:
      "Columbia zip-up fleece vest in a bold red. Great layering piece. Two hand pockets. Minor pilling on front.",
    measurements: {
      "Chest (pit to pit)": "21 in",
      Length: "26 in",
      Shoulder: "17.5 in",
    },
    droppedAt: "2026-04-27T08:00:00+08:00",
    reserved: false,
  },
  {
    slug: "levis-wedgie-high-rise-black-27",
    name: "Levi's Wedgie High-Rise Jeans — Black",
    brand: "Levi's",
    category: "Bottoms",
    condition: "Like New",
    size: "27",
    priceCentavos: 89900,
    images: [
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=600&q=80",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
    ],
    description:
      "Black high-rise wedgie fit jeans. Flattering cut, minimal stretch, ankle length. Worn a handful of times.",
    measurements: {
      Waist: "27 in",
      Inseam: "27 in",
      Rise: "11.5 in",
      "Thigh (across)": "11 in",
    },
    droppedAt: "2026-05-01T07:00:00+08:00",
    reserved: false,
  },
  {
    slug: "adidas-trefoil-track-jacket-black",
    name: "Adidas Trefoil Track Jacket — Black",
    brand: "Adidas",
    category: "Outerwear",
    condition: "Good",
    size: "M",
    priceCentavos: 74900,
    images: [
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&q=80",
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80",
    ],
    description:
      "Classic Adidas track jacket in black with white 3-stripe detail. Full zip, ribbed cuffs. A streetwear essential.",
    measurements: {
      "Chest (pit to pit)": "21.5 in",
      Length: "27 in",
      Shoulder: "17 in",
      Sleeve: "24 in",
    },
    droppedAt: "2026-04-28T08:00:00+08:00",
    reserved: false,
  },
  {
    slug: "nike-air-force-1-white-us8",
    name: "Nike Air Force 1 Low — White",
    brand: "Nike",
    category: "Shoes",
    condition: "Good",
    size: "US 8",
    priceCentavos: 189900,
    images: [
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80",
      "https://images.unsplash.com/photo-1584735175315-9d5df23be4d0?w=600&q=80",
    ],
    description:
      "Classic triple white AF1 Low. Creasing on toe box from wear, soles still have good tread. Cleaned and ready to rock.",
    measurements: {
      Size: "US 8 / EU 41",
      Insole: "26 cm",
    },
    droppedAt: "2026-04-30T08:00:00+08:00",
    reserved: false,
  },
  {
    slug: "converse-chuck-70-black-us9",
    name: "Converse Chuck 70 High — Black",
    brand: "Converse",
    category: "Shoes",
    condition: "Good",
    size: "US 9",
    priceCentavos: 149900,
    images: [
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&q=80",
    ],
    description:
      "Chuck 70 high top in black canvas. Thicker outsole than classic Chuck. Some yellowing on sole edges — normal patina.",
    measurements: {
      Size: "US 9 / EU 42.5",
      Insole: "27.5 cm",
    },
    droppedAt: "2026-04-26T08:00:00+08:00",
    reserved: false,
  },
  {
    slug: "kate-spade-mini-satchel-blush",
    name: "Kate Spade Mini Satchel — Blush",
    brand: "Kate Spade",
    category: "Bags",
    condition: "Like New",
    size: "One Size",
    priceCentavos: 219900,
    images: [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
    ],
    description:
      "Pebbled leather mini satchel in dusty blush. Gold-tone hardware, structured shape, top handle + crossbody strap.",
    measurements: {
      Width: "9 in",
      Height: "6.5 in",
      Depth: "3.5 in",
      "Strap drop": "21 in",
    },
    droppedAt: "2026-05-01T06:00:00+08:00",
    reserved: false,
  },
  {
    slug: "ray-ban-wayfarer-tortoise",
    name: "Ray-Ban Wayfarer — Tortoise",
    brand: "Ray-Ban",
    category: "Accessories",
    condition: "Good",
    size: "One Size",
    priceCentavos: 119900,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80",
    ],
    description:
      "Classic RB2140 Wayfarer in tortoise shell. Minor scratches on lens — not visible when wearing. Case not included.",
    measurements: {
      "Lens width": "50 mm",
      "Bridge": "22 mm",
      "Temple": "150 mm",
    },
    droppedAt: "2026-04-25T08:00:00+08:00",
    reserved: false,
  },
  {
    slug: "uniqlo-linen-button-down-white",
    name: "Uniqlo Premium Linen Shirt — White",
    brand: "Uniqlo",
    category: "Tops",
    condition: "BNWT",
    size: "S",
    priceCentavos: 39900,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    ],
    description:
      "Brand new with tags. Premium linen button-down in crisp white. Breathable and perfect for Manila heat.",
    measurements: {
      "Chest (pit to pit)": "20 in",
      Length: "27.5 in",
      Shoulder: "16 in",
      Sleeve: "24 in",
    },
    droppedAt: "2026-05-01T11:00:00+08:00",
    reserved: false,
  },
  {
    slug: "zara-satin-slip-skirt-emerald",
    name: "Zara Satin Slip Skirt — Emerald",
    brand: "Zara",
    category: "Bottoms",
    condition: "Like New",
    size: "M",
    priceCentavos: 44900,
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80",
    ],
    description:
      "Silky satin slip skirt in deep emerald green. Midi length, bias cut, side slit. Worn once for a dinner event.",
    measurements: {
      Waist: "29 in",
      Hip: "40 in",
      Length: "32 in",
    },
    droppedAt: "2026-04-29T08:00:00+08:00",
    reserved: false,
  },
  {
    slug: "fossil-crossbody-canvas-khaki",
    name: "Fossil Canvas Crossbody — Khaki",
    brand: "Fossil",
    category: "Bags",
    condition: "Fair",
    size: "One Size",
    priceCentavos: 34900,
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80",
    ],
    description:
      "Casual canvas crossbody in khaki with leather trim. Shows honest wear on corners. Priced for the bargain hunters.",
    measurements: {
      Width: "11 in",
      Height: "8 in",
      Depth: "2.5 in",
      "Strap drop": "24 in",
    },
    droppedAt: "2026-04-24T08:00:00+08:00",
    reserved: false,
  },
  {
    slug: "longchamp-le-pliage-tote-navy",
    name: "Longchamp Le Pliage Tote — Navy",
    brand: "Longchamp",
    category: "Bags",
    condition: "Good",
    size: "One Size",
    priceCentavos: 159900,
    images: [
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=80",
    ],
    description:
      "Classic Longchamp navy tote. Nylon body with leather trim, snap closure. Light scuff on handle.",
    measurements: {
      Width: "13 in",
      Height: "11.5 in",
      "Handle drop": "6 in",
    },
    droppedAt: "2026-04-26T08:00:00+08:00",
    reserved: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getNewDrops(count = 4): Product[] {
  return [...products]
    .sort((a, b) => new Date(b.droppedAt).getTime() - new Date(a.droppedAt).getTime())
    .slice(0, count);
}
