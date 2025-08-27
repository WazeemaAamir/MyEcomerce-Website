import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// 🔽 Dummy Product data
const Products = [
  {
    id: 1,
    name: "Red Maxi",
    slug: "red-maxi",
    description: "A bright red maxi made of cotton.",
    price: 1200,
    image: "Red Maxi.jpg",
  },
  {
    id: 2,
    name: "Red Shirt",
    slug: "red-shirt",
    description: "A bright red shirt made of cotton.",
    price: 2000,
    image: "Red Shirt.jpg",
  },
  {
    id: 11,
    image: "/Suzuki Wagon R.webp",
    model: "Suzuki Wagon R",
    year: 2021,
    mileage: "29,000 KM",
    color: "White",
    price: "2,400,000",
    location: "Shah Faisal Colony, Karachi",
    description:
      "Spacious hatchback with high roof and economical engine. Great value for money.",
  },
  {
    id: 12,
    image: "/Nissan Dayz.jpg",
    model: "Nissan Dayz",
    year: 2018,
    mileage: "40,000 KM",
    color: "Gray",
    price: "2,300,000",
    location: "Johar Mor, Karachi",
    description:
      "Japanese kei car with modern interior and great city driving experience.",
  },
  // ... baqi products
];

// 🔽 Product detail page
export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = Products.find(
    (product) => String(product.id) === params.id
  );

  if (!product) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <div className="relative w-full h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={
              product.image.startsWith("/")
                ? product.image
                : `/products/${product.image}`
            }
            alt={product.name || product.model || "Product image"}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* Product Info */}
        <section className="space-y-6">
          <h1 className="text-4xl font-bold text-blue-900">
            {product.name || product.model}
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            {product.description}
          </p>

          <ul className="space-y-2 text-gray-800 text-base">
            {"year" in product && (
              <li>
                <strong>Year:</strong> {product.year}
              </li>
            )}
            {"mileage" in product && (
              <li>
                <strong>Mileage:</strong> {product.mileage}
              </li>
            )}
            {"color" in product && (
              <li>
                <strong>Color:</strong> {product.color}
              </li>
            )}
            {"location" in product && (
              <li>
                <strong>Location:</strong> {product.location}
              </li>
            )}
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
