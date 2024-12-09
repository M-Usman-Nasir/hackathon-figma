/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Tabs Navigation */}
        <div className="flex justify-center space-x-6 border-b border-gray-200 pb-4">
          <button
            className={`text-lg font-medium ${
              activeTab === "description"
                ? "text-gray-900 border-b-2 border-gray-900"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`text-lg font-medium ${
              activeTab === "additional"
                ? "text-gray-900 border-b-2 border-gray-900"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("additional")}
          >
            Additional Information
          </button>
          <button
            className={`text-lg font-medium ${
              activeTab === "reviews"
                ? "text-gray-900 border-b-2 border-gray-900"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews [5]
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === "description" && (
            <div className="space-y-6 text-gray-600">
              <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on
                the road.
              </p>
              <p>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced.
              </p>
              {/* Product Images Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-cream p-4 rounded-lg">
                  <img
                    src="/sofa_1.png"
                    alt="Sofa Image 1"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="bg-cream p-4 rounded-lg">
                  <img
                    src="/sofa_2.png"
                    alt="Sofa Image 2"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "additional" && (
            <div className="space-y-4 text-gray-600">
              <p>Here you can add additional information about the product.</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Material: Wood and Fabric</li>
                <li>Dimensions: 200cm x 100cm x 90cm</li>
                <li>Weight: 25kg</li>
              </ul>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-6 text-gray-600">
              <p className="font-medium text-gray-900">Customer Reviews</p>
              <div>
                <p className="font-bold">John Doe</p>
                <p>⭐⭐⭐⭐⭐</p>
                <p>Great product, excellent quality!</p>
              </div>
              <div>
                <p className="font-bold">Jane Smith</p>
                <p>⭐⭐⭐⭐</p>
                <p>Very satisfied with the purchase.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
