import { Product, ProductList } from "@/types";

export const API_BASE_URL = "https://api.escuelajs.co/api/v1";

export async function fetchProducts({ pageParam = 0 }): Promise<{
  data: ProductList;
  nextOffset: number | null;
}> {
  const limit = 10;
  const res = await fetch(
    `${API_BASE_URL}/products?offset=${pageParam}&limit=${limit}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductList = await res.json();
  const nextOffset = data.length === limit ? pageParam + limit : null;

  return {
    data,
    nextOffset,
  };
}

export async function fetchProductBySlug(slug: string): Promise<Product> {
  // Using the requested slug/id endpoint mapping from Platzi fake store API
  // Using /products/slug/[slug]? or falling back to ids because their actual fake store
  // API uses IDs for individual fetches, but we will hit whatever endpoint user mentioned.
  // We'll try to just hit the ID directly per standard Platzi API or string slug.
  const res = await fetch(`${API_BASE_URL}/products/slug/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}
