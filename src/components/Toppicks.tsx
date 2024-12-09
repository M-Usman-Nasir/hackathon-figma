/* eslint-disable @next/next/no-img-element */
import React from "react";

const TopPicks = () => {
  const products = [
    {
      id: 1,
      name: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      image: "/sofa1.png", // Replace with your image path
    },
    {
      id: 2,
      name: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      image: "/dining_table.png", // Replace with your image path
    },
    {
      id: 3,
      name: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      image: "/bar_table.png", // Replace with your image path
    },
    {
      id: 4,
      name: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      image: "/console_table.png", // Replace with your image path
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Top Picks For You</h2>
        <p className="text-gray-600 mt-2">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center text-center space-y-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="object-contain w-full h-40"
            />
            <h3 className="text-lg font-medium text-gray-900">
              {product.name}
            </h3>
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
  );
};

export default TopPicks;