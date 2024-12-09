import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-10">
      <div className="container mx-auto px-4">
        {/* Features Section */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-pink-50 p-6 rounded-lg">
          <div className="text-center md:text-left md:w-1/3">
            <h3 className="font-semibold text-lg text-black">Free Delivery</h3>
            <p className="text-sm">For all orders over $50, consectetur adipiscing elit.</p>
          </div>
          <div className="text-center md:text-left md:w-1/3 mt-4 md:mt-0">
            <h3 className="font-semibold text-lg text-black">90 Days Return</h3>
            <p className="text-sm">If goods have problems, consectetur adipiscing elit.</p>
          </div>
          <div className="text-center md:text-left md:w-1/3 mt-4 md:mt-0">
            <h3 className="font-semibold text-lg text-black">Secure Payment</h3>
            <p className="text-sm">100% secure payment, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {/* Address Section */}
          <div>
            <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>
          {/* Links Section */}
          <div>
            <h4 className="font-semibold mb-2">Links</h4>
            <ul>
              <li className="text-sm"><a href="#" className="hover:underline">Home</a></li>
              <li className="text-sm"><a href="#" className="hover:underline">Shop</a></li>
              <li className="text-sm"><a href="#" className="hover:underline">About</a></li>
              <li className="text-sm"><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          {/* Help Section */}
          <div>
            <h4 className="font-semibold mb-2">Help</h4>
            <ul>
              <li className="text-sm"><a href="#" className="hover:underline">Payment Options</a></li>
              <li className="text-sm"><a href="#" className="hover:underline">Returns</a></li>
              <li className="text-sm"><a href="#" className="hover:underline">Privacy Policies</a></li>
            </ul>
          </div>
          {/* Newsletter Section */}
          <div>
            <h4 className="font-semibold mb-2">Newsletter</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="submit"
                className="bg-pink-500 text-white px-4 rounded-r-md hover:bg-pink-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
