import { Product, products } from '../data/product';


type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="w-full h-56 overflow-hidden">
        <img
          src={`/images/${product.image}`}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h2>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <p className="text-lg text-pink-600 font-semibold">Rs. {product.price}</p>
      </div>
    </div>
  );
}
