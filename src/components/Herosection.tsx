/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Herosection = () => {
  return (
    <div className="bg-cream">
    {/* Main Section */}
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-4 py-12">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src="/sofa.png" // Replace with your sofa image URL
          alt="Asgaard Sofa"
          className="object-contain w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left space-y-4">
        <p className="text-gray-600 font-medium">New Arrivals</p>
        <h1 className="text-4xl font-bold text-gray-900">Asgaard sofa</h1>
        <button className="border border-gray-900 text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-900 hover:text-white transition duration-300">
          Order Now
        </button>
      </div>
    </div>

    {/* Blogs Section */}
    <div className="text-center py-8 bg-white">
      <h2 className="text-3xl font-bold text-gray-900">Our Blogs</h2>
      <p className="text-gray-600 mt-2">
        Find a bright idea to suit your taste with our great selection
      </p>
    </div>
  </div>
  )
}

export default Herosection
