export type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

export type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string;
  updatedAt: string;
};

export type ProductList = Product[];

export type ProductCardProps = {
  slug: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  price: string;
};
