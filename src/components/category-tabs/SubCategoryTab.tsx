"use client";
import { useGetAllCategoryQuery } from "@/store/features/category/categoryApi";
import { useSearchParams } from "next/navigation";

interface Category {
  category: string;
}

const SubCategoryTabs: React.FC<Category> = ({ category }) => {
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

  const handleCategoryClick = (subCategoryName: string | null) => {
    const newParams = new URLSearchParams(window.location.search);
    if (subCategoryName) {
      newParams.set("subcategory", subCategoryName);
    } else {
      newParams.delete("subcategory");
    }
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${newParams}`
    );
  };

  if (isLoading) return <div className="text-center py-4">Loading...</div>;

  return (
    <ul className="flex flex-wrap gap-4 p-2">
      {/* "All" Tab */}
      <li
        className={`flex items-center justify-center px-5 py-[2px] border border-gray-300 rounded-md transition-all duration-200 
          cursor-pointer 
          hover:bg-blue-500 hover:text-white 
          ${
            selectedSubCategory === null
              ? "font-bold bg-blue-500 text-white"
              : "text-gray-700"
          }
        `}
        onClick={() => handleCategoryClick(null)} // Pass null for "All"
        role="tab"
        aria-selected={selectedSubCategory === null}
        tabIndex={0}
      >
        All
      </li>

      {/* Subcategory Tabs */}
      {subcategories?.subCategory?.map((item: any, index: number) => (
        <li
          key={index}
          className={`flex items-center justify-center px-3 text-sm py-[2px] border border-gray-300 rounded-md transition-all duration-200 
            cursor-pointer 
            hover:bg-blue-500 hover:text-white 
            ${
              item === selectedSubCategory
                ? "font-bold bg-blue-500 text-white"
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

export default SubCategoryTabs;
