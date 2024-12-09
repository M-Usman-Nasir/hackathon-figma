/* eslint-disable @next/next/no-img-element */
import React from "react";

const ShopPage = () => {
  const products = [
    { id: 1, name: "Trenton modular sofa_3", price: "Rs. 25,000.00", image: "/sofa1.png" },
    { id: 2, name: "Granite dining table with dining chair", price: "Rs. 25,000.00", image: "/dining_table.png" },
    { id: 3, name: "Outdoor bar table and stool", price: "Rs. 25,000.00", image: "/bar_table.png" },
    { id: 4, name: "Plain console with teak mirror", price: "Rs. 25,000.00", image: "/console_table.png" },
  ];

  return (
    <div className="bg-gray-50">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-10 py-6 bg-white shadow-md">
        <ul className="flex space-x-8 text-gray-800 font-medium">
          <li>
            <a href="#" className="hover:text-gray-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex space-x-6 text-gray-800">
          <button className="hover:text-gray-600">👤</button>
          <button className="hover:text-gray-600">🔍</button>
          <button className="hover:text-gray-600">❤️</button>
          <button className="hover:text-gray-600">🛒</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gray-200 h-48 flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold text-gray-900">Shop</h1>
        <p className="text-gray-600 mt-2">
          <span className="text-gray-800">Home</span> / Shop
        </p>
      </div>

      {/* Filter and Sorting Section */}
      <div className="bg-pink-50 py-4 px-10 flex justify-between items-center text-sm">
        <div className="flex space-x-4 items-center">
          <button className="flex items-center space-x-2 hover:text-gray-600">
            <span>⚙️</span>
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-gray-600">
            <span>⬛</span>
            <span>Grid</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-gray-600">
            <span>☰</span>
            <span>List</span>
          </button>
        </div>
        <p className="text-gray-800">Showing 1–16 of 32 results</p>
        <div className="flex space-x-4 items-center">
          <label htmlFor="show" className="text-gray-600">
            Show
          </label>
          <select
            id="show"
            className="border border-gray-300 rounded px-2 py-1 text-gray-600 focus:outline-none focus:ring focus:ring-pink-300"
          >
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="48">48</option>
          </select>
          <label htmlFor="sort" className="text-gray-600">
            Short by
          </label>
          <select
            id="sort"
            className="border border-gray-300 rounded px-2 py-1 text-gray-600 focus:outline-none focus:ring focus:ring-pink-300"
          >
            <option value="default">Default</option>
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-screen-xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
            <p className="text-lg font-bold text-gray-900">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;