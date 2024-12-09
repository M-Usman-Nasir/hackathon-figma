/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";

const MyAccount = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
          <nav className="mt-4 text-sm text-gray-600">
            <a href="/" className="hover:text-gray-900">
              Home
            </a>{" "}
            / <span className="text-gray-900">My account</span>
          </nav>
        </div>
      </div>

      {/* Log In and Register Section */}
      <div className="py-12">
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Log In Section */}
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
    </div>
  );
};

export default MyAccount;