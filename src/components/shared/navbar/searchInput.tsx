'use client';
import { Search } from 'lucide-react';

const SearchInput = () => {
  return (
    <div className="relative">
      {/* <form className="relative"> */}
      <input
        type="text"
        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none block w-full rounded-full py-2 px-5"
        placeholder="Search..."
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 px-3 lg:py-2 border border-transparent rounded-md bg-transparent text-[#FF4C06] hover:text-[#1E272E] focus:outline-none"
      >
        <Search />
      </button>
      {/* </form> */}
    </div>
  );
};

export default SearchInput;
