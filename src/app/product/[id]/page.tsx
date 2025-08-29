// src/app/product/[id]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";

type ProductPageProps = {
  params: {
    id: string;
  };
};

const Products = [
  { id: "1", name: "Red Maxi", description: "Bright red maxi", price: 1200, image: "/red-maxi.jpg" },
  { id: "2", name: "Red Shirt", description: "Cotton shirt", price: 2000, image: "/red-shirt.jpg" },
];

// ✅ Static params
export function generateStaticParams() {
  return Products.map((product) => ({ id: product.id }));
}

// ✅ Responsive UI
export default async function ProductDetailPage({ params }: ProductPageProps) {
  const product = Products.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <main className="flex justify-center px-3 sm:px-6 py-6 sm:py-10">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-xl overflow-hidden flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-auto">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="p-4 sm:p-6 md:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            {product.name}
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4">
            {product.description}
          </p>
          <p className="text-lg sm:text-xl font-semibold text-green-700 mb-6">
            PKR {product.price}
          </p>

          {/* Add to cart button */}
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
