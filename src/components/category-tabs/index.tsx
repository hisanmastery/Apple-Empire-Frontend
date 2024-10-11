"use client";
import { useGetAllCategoryQuery } from "@/store/features/category/categoryApi";
import Link from "next/link";
import { useState } from "react";

const CategoryTabs = ({ category }: any) => {
  const { data: categoriesData }: any = useGetAllCategoryQuery({
    page: 1,
    limit: 100,
  });

  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);

  // Show subcategories on hover
  const handleMouseEnter = (categoryId: string) => {
    setOpenCategoryId(categoryId);
  };

  const handleMouseLeave = () => {
    setOpenCategoryId(null);
  };

  return (
    <div className="py-4 bg-gray-100">
      <div className="container mx-auto">
        {/* Horizontal scrollable tabs for categories */}
        <div className="flex overflow-x-auto scrollbar-hide space-x-4 px-4">
          {categoriesData?.categories?.map((category: any) => (
            <div
              key={category._id}
              className="relative"
              onMouseEnter={() => handleMouseEnter(category._id)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={`/category/${category.categoryName}`}>
                <div className="whitespace-nowrap py-2 px-4 bg-white border border-gray-300 rounded-md cursor-pointer text-gray-800 hover:bg-gray-200 transition-all duration-150">
                  {category.categoryName}
                </div>
              </Link>

              {/* Subcategories Dropdown */}
              {openCategoryId === category._id &&
                category.subCategory?.length > 0 && (
                  <div className="absolute top-12 left-0 bg-white border border-gray-300 rounded-md shadow-md mt-2 w-48">
                    <ul className="py-2">
                      {category.subCategory.map(
                        (subCategory: string, index: number) => (
                          <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 transition-all duration-150"
                          >
                            <Link
                              href={`/category/${category.categoryName}/${subCategory}`}
                            >
                              <span className="text-sm text-gray-700">
                                {subCategory}
                              </span>
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
