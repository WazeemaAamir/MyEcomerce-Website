"use client";

import React from "react";

// -------------------------
// Product Type
// -------------------------
type Product = {
  id: string;
  image: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
};

// -------------------------
// Dummy Product Array
// -------------------------
const products: Product[] = [
  {
    id: "1",
    image: "/pink-frock.jpg",
    name: "Pink Frock",
    description: "Beautiful pink frock for party wear",
    price: 2500,
    quantity: 20,
  },
  {
    id: "2",
    image: "/blue-maxi.jpg",
    name: "Blue Maxi",
    description: "Elegant blue maxi for formal events",
    price: 3200,
    quantity: 20,
  },
  {
    id: "3",
    image: "/blue-maxi2.jpg",
    name: "Blue Maxi (Style 2)",
    description: "Stylish maxi with premium fabric",
    price: 3500,
    quantity: 20,
  },
  {
    id: "4",
    image: "/black-frock.jpg",
    name: "Black Frock",
    description: "Classic black frock with lace design",
    price: 2800,
    quantity: 20,
  },
  {
    id: "5",
    image: "/mahroon-frock.jpg",
    name: "Mahroon Frock",
    description: "Trendy mahroon frock for casual wear",
    price: 2700,
    quantity: 20,
  },
  {
    id: "6",
    image: "/purple-maxi.jpg",
    name: "Purple Maxi",
    description: "Luxury purple maxi for weddings",
    price: 4000,
    quantity: 20,
  },
  {
    id: "7",
    image: "/red-maxi.jpg",
    name: "Red Maxi",
    description: "Elegant red maxi for parties",
    price: 3500,
    quantity: 20,
  },
  {
    id: "8",
    image: "/red-shirt.jpg",
    name: "Red Shirt",
    description: "Casual red shirt, soft cotton fabric",
    price: 1500,
    quantity: 20,
  },
  {
    id: "9",
    image: "/whatsApp-women234.jpg",
    name: "Trendy Outfit",
    description: "Stylish outfit for everyday wear",
    price: 2200,
    quantity: 15,
  },
  {
    id: "10",
    image: "/whatsApp-women235.jpg",
    name: "Trendy Outfit",
    description: "Stylish outfit for everyday wear",
    price: 2200,
    quantity: 15,
  },
  {
    id: "11",
    image: "/whatsApp-women236.jpg",
    name: "Trendy Dress",
    description: "Latest fashion wear for women",
    price: 3800,
    quantity: 15,
  },
  {
    id: "12",
    image: "/WhatsApp-women237.jpg",
    name: "Women’s Stylish Dress",
    description: "Trendy women’s outfit, perfect for parties and casual wear.",
    price: 3000,
    quantity: 15,
  },
  {
    id: "13",
    image: "/WhatsApp-women238.jpg",
    name: "Stylish Women Dress",
    description: "Trendy casual dress perfect for outings.",
    price: 2800,
    quantity: 15,
  },
  {
    id: "14",
    image: "/WhatsApp-women239.jpg",
    name: "Elegant Evening Gown",
    description: "Premium fabric evening gown for parties and weddings.",
    price: 4200,
    quantity: 10,
  },
];

// -------------------------
// Product Card Component
// -------------------------
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="w-full h-56 sm:h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 line-clamp-1">
          {product.name}
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto">
          <p className="text-base sm:text-lg text-pink-600 font-semibold">
            Rs. {product.price}
          </p>
          <p className="text-[11px] sm:text-xs text-gray-500">
            Stock: {product.quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

// -------------------------
// Main Browse Page
// -------------------------
const BrowsePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8 sm:mb-12">
        Browse Products
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrowsePage;
