// src/app/product/[id]/page.tsx

import { notFound } from "next/navigation";

type ProductPageProps = {
  params: {
    id: string;
  };
};

const Products = [
  { id: "1", name: "Red Maxi", description: "Bright red maxi", price: 1200 },
  { id: "2", name: "Red Shirt", description: "Cotton shirt", price: 2000 },
];

// ✅ Static params
export function generateStaticParams() {
  return Products.map((product) => ({ id: product.id }));
}

// ✅ Correct typing: params is NOT a Promise
export default async function ProductDetailPage({ params }: ProductPageProps) {
  const product = Products.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <main>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>PKR {product.price}</p>
    </main>
  );
}
