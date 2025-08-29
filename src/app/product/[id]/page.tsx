import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Products = [
  {
    id: "1",
    name: "red-maxi",
    slug: "red-maxi",
    description: "A bright red maxi made of cotton.",
    price: 1200,
    image: "/red-maxi.jpg",
  },
  {
    id: "2",
    name: "red-shirt",
    slug: "red-shirt",
    description: "A bright red Shirt made of cotton.",
    price: 2000,
    image: "/red-shirt.jpg",
  },
];

// ✅ Static params
export function generateStaticParams() {
  return Products.map((product) => ({
    id: product.id,
  }));
}

// ✅ Async component (await only for data fetching, not for params)
export default async function ProductDetailPage({
  params,
}: {
  params: { id: string }; // 👈 only object, NOT Promise
}) {
  const productId = params.id;

  // Example async call (later can replace with DB/API fetch)
  const product = await Promise.resolve(
    Products.find((p) => p.id === productId)
  );

  if (!product) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p>PKR {product.price}</p>
      <Link href="/contact">Contact Seller</Link>
    </main>
  );
}
