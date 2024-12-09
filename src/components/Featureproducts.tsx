/* eslint-disable @next/next/no-img-element */
import React from "react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Side table",
      image: "/side_table_1.png", // Replace with your image path
    },
    {
      id: 2,
      name: "Side table",
      image: "/side_table_2.png", // Replace with your image path
    },
  ];

  return (
    <div className="bg-pink-50 py-12">
      {/* Products Section */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 items-center">
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
            <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
            <button className="text-gray-900 border-b-2 border-gray-900 font-medium hover:text-gray-600 hover:border-gray-600 transition duration-300">
              View More
            </button>
          </div>
        ))}
      </div>

      {/* Section Title */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-900">Top Picks For You</h2>
        <p className="text-gray-600 mt-2">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor, and table lights.
        </p>
      </div>
    </div>
  );
};

export default FeaturedProducts;