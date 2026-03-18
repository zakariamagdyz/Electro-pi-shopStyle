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
  const res = await fetch(`${API_BASE_URL}/products/slug/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}
