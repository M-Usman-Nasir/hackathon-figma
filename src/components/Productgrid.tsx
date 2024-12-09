/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProductGrid = () => {
  const products = [
    { id: 1, name: "Trenton modular sofa_3", price: "Rs. 25,000.00", image: "/sofa1.png" },
    { id: 2, name: "Granite dining table with dining chair", price: "Rs. 25,000.00", image: "/dining_table.png" },
    { id: 3, name: "Outdoor bar table and stool", price: "Rs. 25,000.00", image: "/bar_table.png" },
    { id: 4, name: "Plain console with teak mirror", price: "Rs. 25,000.00", image: "/console_table.png" },
    { id: 5, name: "Grain coffee table", price: "Rs. 15,000.00", image: "/grain_table.png" },
    { id: 6, name: "Kent coffee table", price: "Rs. 225,000.00", image: "/kent_table.png" },
    { id: 7, name: "Round coffee table_color 2", price: "Rs. 251,000.00", image: "/round_table.png" },
    { id: 8, name: "Reclaimed teak coffee table", price: "Rs. 25,200.00", image: "/teak_table.png" },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
      </div>
    </div>
  );
};

export default ProductGrid;
