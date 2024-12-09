import React from 'react';

const Pagination: React.FC = () => {
  return (
    <div className="flex justify-center my-6">
      <button className="px-4 py-2 bg-yellow-100 border border-gray-300 rounded-l-md">
        1
      </button>
      <button className="px-4 py-2 bg-yellow-100 border border-gray-300">
        2
      </button>
      <button className="px-4 py-2 bg-yellow-100 border border-gray-300">
        3
      </button>
      <button className="px-4 py-2 bg-yellow-100 border border-gray-300 rounded-r-md">
        Next
      </button>
    </div>
  );
};
export default Pagination;