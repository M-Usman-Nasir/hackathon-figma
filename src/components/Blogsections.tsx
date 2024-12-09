/* eslint-disable @next/next/no-img-element */
import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Going all-in with millennial design",
      time: "5 min",
      date: "12th Oct 2022",
      image: "/blog1.png", // Replace with your image path
    },
    {
      id: 2,
      title: "Going all-in with millennial design",
      time: "5 min",
      date: "12th Oct 2022",
      image: "/blog2.png", // Replace with your image path
    },
    {
      id: 3,
      title: "Going all-in with millennial design",
      time: "5 min",
      date: "12th Oct 2022",
      image: "/blog3.png", // Replace with your image path
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />

              {/* Blog Content */}
              <div className="p-4 text-center space-y-2">
                <h3 className="text-lg font-medium text-gray-900">
                  {blog.title}
                </h3>
                <button className="text-gray-900 font-semibold hover:text-gray-600 transition">
                  Read More
                </button>
                <div className="flex justify-center items-center space-x-4 text-gray-500 text-sm mt-2">
                  <div className="flex items-center space-x-1">
                    <span>⏱️</span>
                    <span>{blog.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>📅</span>
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Post Button */}
        <div className="text-center mt-12">
          <button className="text-gray-900 border-b-2 border-gray-900 font-medium hover:text-gray-600 hover:border-gray-600 transition duration-300">
            View All Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;