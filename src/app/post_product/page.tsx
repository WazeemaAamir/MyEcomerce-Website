"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

const PostProductPage = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setImage(null);
    setPreview(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!");
    // TODO: backend integration
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 py-6 sm:py-10">
      <h1 className="text-2xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-10 text-gray-800">
        Post Your Product for Sale
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-4 sm:p-8 space-y-5 sm:space-y-6"
      >
        {/* Product Quality */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <input
            type="text"
            placeholder="e.g., Toyota Corolla"
            required
            className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price
          </label>
          <input
            type="text"
            placeholder="e.g., $18,000"
            required
            className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Upload Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Product Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border border-gray-300 rounded-md p-1 sm:p-2 file:mr-2 file:sm:mr-4 file:py-1 file:px-3 sm:file:px-4 file:rounded-full file:border-0 file:bg-blue-600 file:text-white text-xs sm:text-sm hover:file:bg-blue-700 transition"
          />
        </div>

        {/* Preview Image */}
        {preview && (
          <div className="mt-3 sm:mt-4">
            <p className="text-xs sm:text-sm text-gray-600 mb-2">Image Preview:</p>
            <div className="relative w-full h-48 sm:h-64">
              <Image
                src={preview}
                alt="Preview"
                fill
                className="object-contain rounded shadow"
              />
              <button
                type="button"
                onClick={clearImage}
                className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          </div>
        )}

        {/* Additional Details */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Details
          </label>
          <textarea
            placeholder="Write something about the product..."
            className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 h-20 sm:h-24 resize-none text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Submit Product Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostProductPage;
