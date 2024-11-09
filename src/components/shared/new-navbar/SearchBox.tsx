"use client";
import { icons } from "@/constants/icons";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SearchBox() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const { data } = useGetProductsListsQuery<any>(
    {
      searchText: searchTerm,
      page: 1,
      limit: 10,
    },
    { skip: !searchTerm }
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setOpen(e.target.value.length > 0);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/search-result?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  const productsData = data?.product;
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  const handleScroll = () => {
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <form className="flex items-center w-full relative">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onClick={() => setOpen(true)}
        className="w-full py-0 md:py-2 pl-5 focus:outline-none rounded md:focus:ring-2 focus:ring-_primary/60 transition-all duration-300 ease-in-out"
        placeholder="Search for products..."
        aria-label="Search"
      />
      <button
        className="absolute right-0 text-_primary bg-_primary/20 p-1 md:p-4 py-1 md:py-4"
        type="button"
        onClick={handleSearch}
      >
        <icons.SearchIcons className="text-xl " />
      </button>
      {open && productsData?.length > 0 && (
        <div
          className="absolute top-12 z-10 w-full bg-white border border-gray-300 rounded-lg shadow-md max-h-96 overflow-auto"
          ref={dropdownRef}
        >
          {productsData?.map((product: any) => (
            <Link href={`/products/${product?._id}`} key={product._id}>
              <div
                className="p-2 group cursor-pointer flex gap-3 items-center"
                onClick={() => setOpen(false)}
              >
                <Image
                  src={product?.image?.imageUrl}
                  alt={product?.image?.altText}
                  width={30}
                  height={30}
                  className="object-cover w-10 h-10"
                  quality={100}
                />
                <h4 className="group-hover:text-_primary group-hover:underline">
                  {product.name}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      )}
    </form>
  );
}
