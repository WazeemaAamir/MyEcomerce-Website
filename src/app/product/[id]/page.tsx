import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/product";

// 🔽 Dummy Product data
const Products = [
  {
    id: 1,
    name: "Red Maxi",
    slug: "red-maxi",
    description: "A bright red maxi made of cotton.",
    price: 1200,
    image:"Red Maxi.jpg"
  },
  {
    id: 2,
    name: "Red Shirt",
    slug: "Red Shirt",
    description: "A bright red Shirt made of cotton.",
    price: 2000,
    image: "Red Shirt.jpg"
  },
  {
    id: 3,
    name: "Black Frock",
    slug: "Black Frock",
    description: "A bright Black Frock made of cotton.",
    price: 3500,
    image: "Black Frock.jpg"
  },
  {
   id: 4,
    name: "Blue Maxi",
    slug: "blue-maxis",
    description: "A bright Blue Maxi made of cotton.",
    price: 2000,
    image: "Blue Maxi.jpg"
 },
 {
    id: 5,
    name: "Mahroon Frock",
    slug: "Mahroon Frock",
    description: "A bright Mahroon Frock made of cotton.",
    price: 3500,
    image: "Mahroon Frock.jpg"
 },
  {
    id: 6,
    name: "Purple Maxi",
    slug: "Purple Maxi",
    description: "A bright Purple Maxi made of cotton.",
    price: 3500,
    image: "Purple Maxi.jpg"
 },
  {
    id: 7,
    name: "Blue Maxi2",
    slug: "Blue Maxi2",
    description: "A brightBlue Maxi2 made of cotton.",
    price: 3500,
    image: "Blue Maxi2.jpg"
 },
   {
    id: 8,
    name: "Pink Frock",
    slug: "Pink Frock",
    description: "A bright Pink Frock made of cotton.",
    price: 3500,
    image: "Pink Frock.jpg"
 },
   {
    id: 9,
    name: "Mahroon Frock Elegant",
    slug: "mahroon-frock-elegant",
    description: "An elegant mahroon frock made of cotton.",
    price: 3500,
    image: "Mahroon Frock.jpg"
  },
  {
    id: 10,
    name: "Mahroon Frock Graceful",
    slug: "mahroon-frock-graceful",
    description: "A graceful mahroon frock made of cotton.",
    price: 3500,
    image: "Mahroon Frock.jpg"
  },
  {
    id: "11",
    image: "/Suzuki Wagon R.webp",
    model: "Suzuki Wagon R",
    year: 2021,
    mileage: "29,000 KM",
    color: "White",
    price: "2,400,000",
    location: "Shah Faisal Colony, Karachi",
    description: "Spacious hatchback with high roof and economical engine. Great value for money.",
  },
  {
    id: "12",
    image: "/Nissan Dayz.jpg",
    model: "Nissan Dayz",
    year: 2018,
    mileage: "40,000 KM",
    color: "Gray",
    price: "2,300,000",
    location: "Johar Mor, Karachi",
    description: "Japanese kei car with modern interior and great city driving experience.",
  },
  {
    id: "13",
    image: "/Toyota Aqua.webp",
    model: "Toyota Aqua",
    year: 2015,
    mileage: "60,000 KM",
    color: "Red",
    price: "3,900,000",
    location: "Karimabad, Karachi",
    description: "Hybrid hatchback with incredible fuel economy, ideal for daily commutes.",
  },
  {
    id: "14",
    image: "/Honda BR-V.webp",
    model: "Honda BR-V",
    year: 2022,
    mileage: "28,000 KM",
    color: "White",
    price: "4,850,000",
    location: "University Road, Karachi",
    description: "7-seater SUV with sporty look and smooth handling. Best for large families.",
  },
  {
    id: "15",
    image: "/Toyota Prius.webp",
    model: "Toyota Prius",
    year: 2014,
    mileage: "82,000 KM",
    color: "White",
    price: "4,700,000",
    location: "Bahadurabad, Karachi",
    description: "Eco-friendly hybrid sedan with advanced features and comfortable interior.",
  },
  {
    id: "16",
    image: "/MG HS.webp",
    model: "MG HS",
    year: 2020,
    mileage: "22,000 KM",
    color: "White",
    price: "8,000,000",
    location: "Gulberg, Karachi",
    description: "Luxurious MG SUV with turbocharged engine, leather seats, and panoramic sunroof.",
  },
  {
    id: "17",
    image: "/Changan Alsvin.webp",
    model: "Changan Alsvin",
    year: 2021,
    mileage: "35,000 KM",
    color: "White",
    price: "3,200,000",
    location: "Model Colony, Karachi",
    description: "Smart sedan with European design, digital meter, and DCT transmission.",
  },
  {
    id: "18",
    image: "/KIA Picanto.jpg",
    model: "KIA Picanto",
    year: 2020,
    mileage: "33,000 KM",
    color: "Sky Blue",
    price: "2,400,000",
    location: "Garden West, Karachi",
    description: "Compact and safe city car with premium build and affordable maintenance.",
  },
  {
    id: "19",
    image: "/Suzuki Swift.jpg",
    model: "Suzuki Swift",
    year: 2019,
    mileage: "47,000 KM",
    color: "Red",
    price: "2,900,000",
    location: "Ancholi, Karachi",
    description: "Quick and stylish hatchback with sporty suspension and responsive steering.",
  },
  {
    id: "20",
    image: "/Honda Vezel.webp",
    model: "Honda Vezel",
    year: 2022,
    mileage: "77,000 KM",
    color: "Blue",
    price: "4,950,000",
    location: "Airport, Karachi",
    description: "Elegant hybrid crossover with stylish design and excellent fuel efficiency.",
  },
  // ... باقی کارز کا ڈیٹا
];

// 🔽 Product detail page component
export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = Products.find((product) => product.id === Number(params.id)); // Also convert ID to number if needed

  if (!product) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* 🔹 Product Image */}
        <div className="relative w-full h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-xl">
          <Image
  src={product.image.startsWith("/") ? product.image : `/products/${product.image}`}
  alt={product.name || product.model || "Product image"}
  fill
  className="object-cover hover:scale-105 transition-transform duration-500"
  priority
/>
        </div>

        {/* 🔹Product Info */}
        <section className="space-y-6">
          <h1 className="text-4xl font-bold text-blue-900">{product.slug}</h1>
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