import React from "react";

function SearchBar() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4 md:p-6 space-y-4 md:space-y-0 md:space-x-6 bg-white rounded-xl ">
      <div className="flex bg-gray-100 p-3 md:p-4 w-full md:w-72 space-x-4 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 opacity-30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          className="bg-gray-100 outline-none w-full"
          type="text"
          placeholder="Article name or keyword..."
        />
      </div>
      <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
        <select>
          <option>All Categories</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>Full stack</option>
        </select>
      </div>
      <div className="bg-indigo-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-300 cursor-pointer">
        <span>Search</span>
      </div>
    </div>
  );
}

export default SearchBar;
