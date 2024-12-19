"use client";
import { useGetCategoryWithProductQuery } from "@/store/features/category/categoryApi";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryTabs = ({ productsType }: any) => {
  const searchParams = useSearchParams();
  const initialSelectedCategory = searchParams.get("category");
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    initialSelectedCategory || null
  );

  // Fetch categories
  const { data: categoriesData, isLoading } =
    useGetCategoryWithProductQuery<any>({
      slug: undefined,
      product_type: productsType,
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
    <ul className="flex flex-wrap gap-4 p-4">
      {/* "All" Tab */}
      <li
        className={`flex items-center justify-center px-5 py-[2px] border border-gray-300 rounded-md transition-all duration-200 
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
      {categoriesData?.data?.map((item: any) => (
        <li
          key={item?.id}
          className={`flex items-center text-sm justify-center px-2 py-[2px] border border-gray-300 rounded-md transition-all duration-200 
            cursor-pointer 
            hover:bg-blue-500 hover:text-white 
            ${
              item?.categoryName === selectedSubCategory
                ? "font-bold bg-blue-500 text-white"
                : "text-gray-700"
            }
          `}
          onClick={() => handleCategoryClick(item?.slug)}
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
