/* eslint-disable @next/next/no-img-element */
import React from "react";

const HeroSection2 = () => {
  return (
    <div className="bg-cream h-screen">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-10 py-6">
        {/* Navigation Links */}
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

        {/* Icons */}
        <div className="flex space-x-6 text-gray-800">
          <button className="hover:text-gray-600">👤</button>
          <button className="hover:text-gray-600">🔍</button>
          <button className="hover:text-gray-600">❤️</button>
          <button className="hover:text-gray-600">🛒</button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center h-[calc(100vh-100px)] px-10">
        {/* Text Section */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Rocket single <br /> seater
          </h1>
          <button className="text-gray-900 border-b-2 border-gray-900 font-medium hover:text-gray-600 hover:border-gray-600 transition duration-300">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/single_seater.png" // Replace with your image path
            alt="Rocket single seater"
            className="w-full max-w-lg object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;