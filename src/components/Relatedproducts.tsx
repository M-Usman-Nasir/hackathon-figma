/* eslint-disable @next/next/no-img-element */
import React from "react";

const RelatedProducts = () => {
  const products = [
    { id: 1, name: "Trenton modular sofa_3", price: "Rs. 25,000.00", image: "/sofa1.png" },
    { id: 2, name: "Granite dining table with dining chair", price: "Rs. 25,000.00", image: "/dining_table.png" },
    { id: 3, name: "Outdoor bar table and stool", price: "Rs. 25,000.00", image: "/bar_table.png" },
    { id: 4, name: "Plain console with teak mirror", price: "Rs. 25,000.00", image: "/console_table.png" },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Related Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />
              {/* Product Name */}
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              {/* Product Price */}
              <p className="text-lg font-bold text-gray-900">{product.price}</p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="text-gray-900 border-b-2 border-gray-900 font-medium hover:text-gray-600 hover:border-gray-600 transition duration-300">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;