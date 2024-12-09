import React from "react";

const FooterWithFeatures = () => {
  return (
    <div className="bg-white">
      {/* Features Section */}
      <div className="bg-pink-50 py-8">
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-900">Free Delivery</h3>
            <p className="text-gray-600 mt-2">
              For all orders over $50, consectetur adipim scing elit.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-900">90 Days Return</h3>
            <p className="text-gray-600 mt-2">
              If goods have problems, consectetur adipim scing elit.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-900">Secure Payment</h3>
            <p className="text-gray-600 mt-2">
              100% secure payment, consectetur adipim scing elit.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white py-12">
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-600">
          {/* Address */}
          <div>
            <p>
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-4 py-2 rounded-r-lg hover:bg-gray-800"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center border-t border-gray-200 pt-6 text-gray-600 text-sm">
          <p>2022 Meubel House. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default FooterWithFeatures;