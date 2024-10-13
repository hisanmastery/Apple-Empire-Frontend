"use client";
import { useGetAllCategoryQuery } from "@/store/features/category/categoryApi";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryTabs = () => {
  const searchParams = useSearchParams();
  const initialSelectedCategory = searchParams.get("category");
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    initialSelectedCategory || null
  );

  // Fetch categories
  const { data: categoriesData, isLoading } = useGetAllCategoryQuery<any>({
    page: 1,
    limit: 20,
  });

  const handleCategoryClick = (categoryName: string) => {
    const newParams = new URLSearchParams(window.location.search);
    newParams.set("category", categoryName);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${newParams}`
    );
    setSelectedSubCategory(categoryName);
  };

  useEffect(() => {
    setSelectedSubCategory(initialSelectedCategory);
  }, [initialSelectedCategory]);

  if (isLoading) return <div className="text-center py-4">Loading...</div>;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {/* "All" Tab */}
      <li
        className={`flex items-center justify-center px-1 py-2 border border-gray-300 rounded-md transition-all duration-200 
          cursor-pointer 
          hover:bg-blue-500 hover:text-white 
          ${
            selectedSubCategory === ""
              ? "font-bold bg-blue-500 text-white"
              : "text-gray-700"
          }
        `}
        onClick={() => handleCategoryClick("")}
        role="tab"
        aria-selected={selectedSubCategory === ""}
        tabIndex={0}
      >
        All
      </li>

      {/* Category Tabs */}
      {categoriesData?.categories?.map((item: any) => (
        <li
          key={item?.id}
          className={`flex items-center justify-center px-1 py-2 border border-gray-300 rounded-md transition-all duration-200 
            cursor-pointer 
            hover:bg-blue-500 hover:text-white 
            ${
              item?.categoryName === selectedSubCategory
                ? "font-bold bg-blue-500 text-white"
                : "text-gray-700"
            }
          `}
          onClick={() => handleCategoryClick(item?.categoryName)}
          role="tab"
          aria-selected={item?.categoryName === selectedSubCategory}
          tabIndex={0}
        >
          {item?.categoryName}
        </li>
      ))}
    </ul>
  );
};

export default CategoryTabs;
