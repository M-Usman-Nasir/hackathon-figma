/* eslint-disable @next/next/no-img-element */
import React from "react";

const ExtendedProductGrid = () => {
  const products = [
    { id: 1, name: "Plain console_", price: "Rs. 258,200.00", image: "/plain_console.png" },
    { id: 2, name: "Reclaimed teak Sideboard", price: "Rs. 20,000.00", image: "/teak_sideboard.png" },
    { id: 3, name: "SJP_0825", price: "Rs. 200,000.00", image: "/sjp_0825.png" },
    { id: 4, name: "Bella chair and table", price: "Rs. 100,000.00", image: "/bella_chair_table.png" },
    { id: 5, name: "Granite square side table", price: "Rs. 258,800.00", image: "/granite_table.png" },
    { id: 6, name: "Asgaard sofa", price: "Rs. 250,000.00", image: "/asgaard_sofa.png" },
    { id: 7, name: "Maya sofa three seater", price: "Rs. 115,000.00", image: "/maya_sofa.png" },
    { id: 8, name: "Outdoor sofa set", price: "Rs. 244,000.00", image: "/outdoor_sofa.png" },
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

export default ExtendedProductGrid;