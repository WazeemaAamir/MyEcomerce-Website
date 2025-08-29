import { Product } from "@/data/product";
import Image from "next/image";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      {/* Product Image */}
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image
          src={`/images/${product.image}`}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
          {product.name}
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mb-2">
          {product.description}
        </p>
        <p className="text-base sm:text-lg text-pink-600 font-semibold">
          Rs. {product.price}
        </p>
      </div>
    </div>
  );
}
