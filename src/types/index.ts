export type Condition = "BNWT" | "Like New" | "Good" | "Fair";

export type Category =
  | "Tops"
  | "Bottoms"
  | "Outerwear"
  | "Dresses"
  | "Bags"
  | "Shoes"
  | "Accessories";

export interface Product {
  slug: string;
  name: string;
  brand: string;
  category: Category;
  condition: Condition;
  size: string;
  priceCentavos: number;
  images: string[];
  description: string;
  measurements: Record<string, string>;
  droppedAt: string; // ISO string, Asia/Manila
  reserved: boolean;
}

export type CartItem = Product;

export type PaymentMethodId = "gcash" | "maya" | "cod" | "card";

export interface PaymentMethod {
  id: PaymentMethodId;
  label: string;
  logo: string;
  available: boolean;
}
