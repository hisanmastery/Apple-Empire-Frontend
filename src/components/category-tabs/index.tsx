"use client";
import { useGetAllCategoryQuery } from "@/store/features/category/categoryApi";
import { useSearchParams } from "next/navigation";

interface Category {
  category: string;
}

const CategoryTabs: React.FC<Category> = ({ category }) => {
  const searchParams = useSearchParams();
  const selectedSubCategory = searchParams.get("subcategory");
  // Fetch categories
  const {
    data: categoriesData,
    isLoading,
    isError,
  } = useGetAllCategoryQuery<any>({
    page: 1,
    limit: 20,
    categoryName: category,
  });

  // Find subcategories for the selected category
  const subcategories: any | undefined = categoriesData?.categories?.find(
    (item: any) => item?.categoryName === category
  );

  const handleCategoryClick = (categoryName: string) => {
    const newParams = new URLSearchParams(window.location.search);
    newParams.set("subcategory", categoryName);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${newParams}`
    );
  };

  if (isLoading) return <div className="text-center py-4">Loading...</div>;
  if (isError)
    return (
      <div className="text-center py-4 text-red-600">
        Error fetching categories
      </div>
    );

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {subcategories?.subCategory?.map((item: any, index: number) => (
        <li
          key={index}
          className={`flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md transition-all duration-200 
            cursor-pointer 
            hover:bg-blue-500 hover:text-white 
            ${
              item === selectedSubCategory
                ? "font-bold bg-blue-600 text-white border-b-4 border-blue-800"
                : "text-gray-700"
            }
          `}
          onClick={() => handleCategoryClick(item)}
          role="tab"
          aria-selected={item === selectedSubCategory}
          tabIndex={0}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default CategoryTabs;
