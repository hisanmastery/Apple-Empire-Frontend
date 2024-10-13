"use client";
import { icons } from "@/constants/icons";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { data } = useGetProductsListsQuery<any>(
    {
      searchText: searchTerm,
    },
    { skip: !searchTerm }
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setOpen(e.target.value.length > 0);
  };

  const handleSearch = () => {};
  const productsData = data?.product;
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
      setSearchTerm("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form className="flex items-center w-full relative">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        className="w-full p-2 px-5 focus:outline-none rounded-full focus:ring-2 focus:ring-_primary transition-all duration-300 ease-in-out"
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
      {/* Conditional rendering of search results */}
      {productsData?.length > 0 && searchTerm && open && (
        <div
          className="absolute top-12  z-10 w-full bg-white border border-gray-300 rounded-lg shadow-md max-h-96 overflow-auto"
          ref={dropdownRef}
        >
          {productsData.map((product: any) => (
            <Link href={`/products/${product?._id}`} key={product._id}>
              <div
                className="p-2 group hover:bg-_primary cursor-pointer flex gap-3 items-center"
                onClick={() => setOpen(false)}
              >
                <Image
                  src={product?.image?.viewUrl}
                  alt={product?.image?.altText}
                  width={50}
                  height={50}
                  className="object-fill"
                  quality={100}
                />
                <h4 className="group-hover:text-white group-hover:underline">
                  {product.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      )}
    </form>
  );
}
