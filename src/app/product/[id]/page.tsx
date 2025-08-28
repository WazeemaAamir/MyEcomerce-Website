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
  // ...rest
];

export function generateStaticParams() {
  return Products.map((product) => ({
    id: product.id,
  }));
}

// 🚀 Do NOT type params → let Next.js handle it
export default function ProductDetailPage({ params }: any) {
  const product = Products.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <div className="relative w-full h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* Product Info */}
        <section className="space-y-6">
          <h1 className="text-4xl font-bold text-blue-900">{product.name}</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            {product.description}
          </p>
          <ul className="space-y-2 text-gray-800 text-base">
            <li>
              <strong>Price:</strong> PKR {product.price}
            </li>
          </ul>

          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-105"
          >
            Contact Seller
          </Link>
        </section>
      </div>
    </main>
  );
}
