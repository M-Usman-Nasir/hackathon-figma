"use client";

import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-50">
      {/* Instagram Section */}
      <div className="text-center py-12">
        <h2 className="text-4xl font-bold mb-2">Our Instagram</h2>
        <p className="text-gray-600 mb-6">Follow our store on Instagram</p>
        <button className="bg-white shadow-md hover:shadow-lg px-6 py-2 rounded-lg text-black font-medium">
          Follow Us
        </button>
      </div>

      {/* Footer Section */}
      <footer className="bg-white py-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Address Section */}
          <div>
            <p className="text-gray-600">
              400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <form className="flex justify-center items-center">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="border border-gray-300 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mt-8 pt-4 text-center text-gray-600 text-sm">
          © 2024 YourBrandName. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer
