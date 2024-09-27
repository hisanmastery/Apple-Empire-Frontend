import { icons } from "@/constants/icons";
import { useState } from "react";

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log(searchTerm);
  };

  return (
    <form className="flex items-center w-full relative">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 focus:outline-none rounded-full focus:ring-2 focus:ring-_primary transition-all duration-300 ease-in-out"
        placeholder="Search for products..."
        aria-label="Search"
      />
      <button
        className="absolute top-2 text-_primary right-3"
        type="submit"
        onClick={handleSearch}
      >
        <icons.SearchIcons className="text-xl" />
      </button>
    </form>
  );
}
