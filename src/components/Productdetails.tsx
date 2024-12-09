/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProductDetail = () => {
  return (
    <div className="bg-white">
      {/* Breadcrumb Navigation */}
      <div className="px-10 py-4 text-sm text-gray-600">
        <nav className="flex space-x-2">
          <a href="#" className="hover:text-gray-900">Home</a>
          <span>/</span>
          <a href="#" className="hover:text-gray-900">Shop</a>
          <span>/</span>
          <span className="text-gray-900">Asgaard sofa</span>
        </nav>
      </div>

      {/* Product Detail Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="bg-cream rounded-lg p-4">
            <img
              src="/asgaard_sofa.png"
              alt="Asgaard sofa"
              className="w-full h-auto object-contain"
            />
          </div>
          {/* Thumbnail Images */}
          <div className="flex space-x-4">
            <div className="w-16 h-16 bg-cream rounded-lg flex items-center justify-center">
              <img src="/asgaard_sofa.png" alt="Thumbnail 1" className="object-contain" />
            </div>
            <div className="w-16 h-16 bg-cream rounded-lg flex items-center justify-center">
              <img src="/thumbnail_2.png" alt="Thumbnail 2" className="object-contain" />
            </div>
            <div className="w-16 h-16 bg-cream rounded-lg flex items-center justify-center">
              <img src="/thumbnail_3.png" alt="Thumbnail 3" className="object-contain" />
            </div>
            <div className="w-16 h-16 bg-cream rounded-lg flex items-center justify-center">
              <img src="/thumbnail_4.png" alt="Thumbnail 4" className="object-contain" />
            </div>
          </div>
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Asgaard sofa</h1>
          <p className="text-2xl font-semibold text-gray-900">Rs. 250,000.00</p>
          {/* Ratings */}
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400">
              ⭐⭐⭐⭐⭐
            </div>
            <p className="text-sm text-gray-600">5 Customer Review</p>
          </div>
          {/* Product Description */}
          <p className="text-gray-600">
            Setting the bar as one of the loudest speakers in its class, the Kilburn
            is a compact, stout-hearted hero with a well-balanced audio that boasts
            a clear midrange and extended highs for a sound.
          </p>
          {/* Size Options */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Size</h3>
            <div className="flex space-x-4">
              <button className="px-4 py-2 border border-gray-300 rounded hover:border-gray-900">
                L
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded hover:border-gray-900">
                XL
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded hover:border-gray-900">
                XS
              </button>
            </div>
          </div>
          {/* Color Options */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Color</h3>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full border border-gray-300"></div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full border border-gray-300"></div>
              <div className="w-8 h-8 bg-black rounded-full border border-gray-300"></div>
            </div>
          </div>
          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded">
              <button className="px-4 py-2 hover:bg-gray-100">-</button>
              <input
                type="text"
                value="1"
                className="w-12 text-center border-none focus:ring-0 focus:outline-none"
              />
              <button className="px-4 py-2 hover:bg-gray-100">+</button>
            </div>
            <button className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800">
              Add To Cart
            </button>
          </div>
          {/* Additional Info */}
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              <strong>SKU:</strong> SS001
            </p>
            <p>
              <strong>Category:</strong> Sofas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;