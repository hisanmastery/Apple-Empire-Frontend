"use client";
import { useGetAllCategoryQuery } from "@/store/features/category/categoryApi";
import { useSearchParams } from "next/navigation";

const CategoryTabs = () => {
  const searchParams = useSearchParams();
  const selectedSubCategory = searchParams.get("category");

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
  };

  if (isLoading) return <div className="text-center py-4">Loading...</div>;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {categoriesData?.categories?.map((item: any, index: number) => (
        <li
          key={index}
          className={`flex items-center justify-center px-1 py-2 border border-gray-300 rounded-md transition-all duration-200 
            cursor-pointer 
            hover:bg-blue-500 hover:text-_white 
            ${
              item?.categoryName === selectedSubCategory
                ? "font-bold bg-_blue text-_white"
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
