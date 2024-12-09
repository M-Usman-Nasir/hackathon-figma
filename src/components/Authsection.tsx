import React from "react";

const AuthSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Login and Register Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Login Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Log In</h2>
            <form className="space-y-6">
              {/* Username/Email */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username or email address
                </label>
                <input
                  type="text"
                  id="username"
                  className="mt-2 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-2 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              {/* Remember Me and Log In */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-gray-600 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Lost Your Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                Log In
              </button>
            </form>
          </div>

          {/* Register Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Register</h2>
            <form className="space-y-6">
              {/* Email Address */}
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
                  className="mt-2 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              {/* Description */}
              <p className="text-sm text-gray-600">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="text-sm text-gray-600">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <a href="#" className="text-gray-900 hover:underline">
                  privacy policy
                </a>
                .
              </p>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-pink-50 py-8 mt-12">
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
    </div>
  );
};
export default AuthSection;