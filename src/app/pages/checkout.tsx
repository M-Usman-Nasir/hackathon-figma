/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

import React from "react";

const Checkout = () => {
  return (
    <div className="bg-white h-auto sm:h-12 md:h-16 lg:h-20 flex-col sm:flex-row">
      {/* Header */}
      <header className="border-b py-4">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          <nav className="text-lg flex space-x-10">
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <a href="#" className="hover:text-gray-400">
              Shop
            </a>
            <a href="#" className="hover:text-gray-400">
              About
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </nav>
          <div className="flex space-x-8 text-lg">
            <a href="#" className="hover:text-gray-400">
              👤
            </a>
            <a href="#" className="hover:text-gray-400">
              🔍
            </a>
            <a href="#" className="hover:text-gray-400">
              ❤️
            </a>
            <a href="#" className="hover:text-gray-400">
              🛒
            </a>
          </div>
        </div>
      </header>

      {/* Breadcrumb and Title */}
      <div className="bg-gray-100 py-12">
        <img src="/checkpoint-back.jpg" alt="background" className="w-20 h-25 mx-auto" />
        <div className="container mx-auto text-center">
          <img src="/checkpoint-logo.png" alt="logo" className="w-16 h-16 mx-auto" />
          <h1 className="text-3xl font-bold">Checkout</h1>
          <p className="text-black mt-2" >
            <a href="/" className="hover:text-gray-700">
              Home
            </a>{" "}
            &gt; Checkout
          </p>
        </div>
      </div>

      {/* Main Checkout Section */}
      <div className="container mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Billing Details Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Billing details</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">First Name</label>
                <input type="text" className="w-full border rounded-md p-2" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Last Name</label>
                <input type="text" className="w-full border rounded-md p-2" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">
                Company Name (Optional)
              </label>
              <input type="text" className="w-full border rounded-md p-2" />
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country / Region
              </label>
              <select
                id="country"
                className="mt-1 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>Sri Lanka</option>
                <option>Pakistan</option>
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Mexico</option>
                <option>Argentina</option>
                <option>Chile</option>
                <option>Colombia</option>
                <option>Costa Rica</option>
                <option>El Salvador</option>
                <option>Guatemala</option>
                <option>Honduras</option>
                <option>Mexico</option>
                <option>Nicaragua</option>
                <option>Panama</option>
                <option>Peru</option>
                <option>Uruguay</option>
                <option>Venezuela</option>

                {/* Add more country options as needed */}
              </select>
            </div>

            <div>
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-700"
              >
                Street address
              </label>
              <input
                type="text"
                id="street-address"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                Town / City
              </label>
              <input
                type="text"
                id="city"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="province"
                className="block text-sm font-medium text-gray-700"
              >
                Province
              </label>
              <select
                id="province"
                className="mt-1 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>Western Province</option>
                <option>Southern Province</option>
                <option>Central Province</option>
                <option>Northern Province</option>
                <option>Eastern Province</option>
                <option>North Central Province</option>
                {/* Add more province options as needed */}
              </select>
            </div>

            <div>
              <label
                htmlFor="zip-code"
                className="block text-sm font-medium text-gray-700"
              >
                ZIP code
              </label>
              <input
                type="text"
                id="zip-code"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="additional-info"
                className="block text-sm font-medium text-gray-700"
              >
                Additional information
              </label>
              <textarea
                id="additional-info"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </form>
        </div>

        {/* Product Summary */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Product</h2>
          <div className="border-b pb-4 mb-4">
            <p className="flex justify-between">
              <span>Asgaard sofa × 1</span>
              <span className="font-medium">Rs. 250,000.00</span>
            </p>
          </div>
          <div className="border-b pb-4 mb-4">
            <p className="flex justify-between">
              <span className="font-bold">Subtotal</span>
              <span>Rs. 250,000.00</span>
            </p>
          </div>
          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span className="text-yellow-600">Rs. 250,000.00</span>
          </div>

          <h3 className="font-semibold mb-2">● Direct Bank Transfer</h3>
          <p className="text-gray-500 text-sm">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>

          <div className="flex items-center">
            <input
              type="radio"
              id="direct-bank-transfer"
              name="payment-method"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="direct-bank-transfer"
              className="ml-2 block text-sm text-gray-700"
            >
              Direct Bank Transfer
            </label>
            <input
              type="radio"
              id="cash-on-delivery"
              name="payment-method"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="direct-bank-transfer"
              className="ml-2 block text-sm text-gray-700"
            >
              Cash on Delivery
            </label>

            <p className="text-gray-500 text-sm mt-2" >

            </p>
          </div>
          <div>
            <button
              type="button"
              className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Place order
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-white border-t">
        <div className="bg-pink-50 py-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-1">Free Delivery</h3>
              <p className="text-gray-500">For all orders over $50, consectetur adipim scing elit.</p>
            </div>
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-1">90 Days Return</h3>
              <p className="text-gray-500">If goods have problems, consectetur adipim scing elit.</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-1">Secure Payment</h3>
              <p className="text-gray-500">100% secure payment, consectetur adipim scing elit.</p>
            </div>
          </div>
        </div>
  
        <div className="container mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-gray-500 mb-2">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>
  
          <div className="flex flex-col">
            <h4 className="font-semibold mb-2">Links</h4>
            <a href="#" className="text-gray-500 hover:text-black">Home</a>
            <a href="#" className="text-gray-500 hover:text-black">Shop</a>
            <a href="#" className="text-gray-500 hover:text-black">About</a>
            <a href="#" className="text-gray-500 hover:text-black">Contact</a>
          </div>
  
          <div className="flex flex-col">
            <h4 className="font-semibold mb-2">Help</h4>
            <a href="#" className="text-gray-500 hover:text-black">Payment Options</a>
            <a href="#" className="text-gray-500 hover:text-black">Returns</a>
            <a href="#" className="text-gray-500 hover:text-black">Privacy Policies</a>
          </div>
  
          <div className="md:col-span-3">
            <h4 className="font-semibold mb-2">Newsletter</h4>
            <div className="flex items-center border-b pb-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full p-2 outline-none"
              />
              <button className="font-semibold ml-2">SUBSCRIBE</button>
            </div>
          </div>
        </div>
  
        <div className="border-t py-4">
          <p className="text-left text-gray-500 pl-20">2022 Meubel House. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};
export default Checkout;