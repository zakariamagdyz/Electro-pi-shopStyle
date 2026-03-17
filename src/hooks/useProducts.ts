import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchProductBySlug } from "@/lib/api";

export function useProducts() {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextOffset,
  });
}

export function useProductBySlug(slug: string) {
  return useQuery({
    queryKey: ["products", slug],
    queryFn: () => fetchProductBySlug(slug),
  });
}
