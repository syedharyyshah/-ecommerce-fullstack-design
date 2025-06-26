import React from 'react';
import { FiMail } from 'react-icons/fi';

const Subscribe = () => {
  return (
    <div className="w-full mx-auto p-10  bg-gray-100 text-center rounded-lg shadow-none">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Subscribe on our newsletter</h2>
      <p className="text-gray-600 mb-4">Get daily news on upcoming offers from many suppliers all over the world</p>
      
      <form className="flex items-center justify-center space-x-2">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            <FiMail className="text-gray-400" />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="pl-8 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;