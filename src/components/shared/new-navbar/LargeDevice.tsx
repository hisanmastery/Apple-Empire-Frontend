"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { useGetNavbarCategoryListQuery } from "@/store/features/category/categoryApi";

export default function LargeDevice() {
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);
  const [openSubCategoryId, setOpenSubCategoryId] = useState<string | null>(
    null
  );
  const [openSubSubCategoryId, setOpenSubSubCategoryId] = useState<
    string | null
  >(null);
  const { data: categoriesData }: any = useGetNavbarCategoryListQuery({});

  // Handle main category hover events
  const handleMouseEnterCategory = (categoryId: string) => {
    clearTimeout(closeTimeoutRef.current!);
    setOpenCategoryId(categoryId);
    setOpenSubCategoryId(null);
    setOpenSubSubCategoryId(null);
  };

  const handleMouseLeaveCategory = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenCategoryId(null);
      setOpenSubCategoryId(null);
      setOpenSubSubCategoryId(null);
    }, 400);
  };

  // Handle subcategory hover events
  const handleMouseEnterSubCategory = (subCategoryId: string) => {
    clearTimeout(closeTimeoutRef.current!);
    setOpenSubCategoryId(subCategoryId);
    setOpenSubSubCategoryId(null);
  };

  const handleMouseLeaveSubCategory = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenSubCategoryId(null);
      setOpenSubSubCategoryId(null);
    }, 400);
  };

  // Handle sub-subcategory hover events
  const handleMouseEnterSubSubCategory = (subSubCategoryId: string) => {
    clearTimeout(closeTimeoutRef.current!);
    setOpenSubSubCategoryId(subSubCategoryId);
  };

  const handleMouseLeaveSubSubCategory = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenSubSubCategoryId(null);
    }, 400);
  };

  // Recursive function to render nested subcategories
  const renderCategoryTree = (category: any) => {
    return (
      <li
        key={category._id}
        className="relative group"
        onMouseEnter={() => handleMouseEnterSubCategory(category._id)}
        onMouseLeave={handleMouseLeaveSubCategory}
      >
        <Link
          href={`/category/${category.slug}`}
          className="flex justify-between items-center border-b px-2 py-2 transition-all duration-300 ease-in-out cursor-pointer text-gray-800 hover:bg-gray-100 hover:text-orange-600"
        >
          <span className="text-start">{category.categoryName}</span>
          {category.subcategories && category.subcategories.length > 0 && (
            <span className="ml-2 text-gray-500 transform transition-transform duration-300 group-hover:rotate-90">
              ▶
            </span>
          )}
        </Link>

        {/* Render subcategories if they exist */}
        {openSubCategoryId === category._id &&
          category.subcategories &&
          category.subcategories.length > 0 && (
            <ul className="absolute left-full top-0 min-w-52 bg-_white shadow-lg border rounded-md mt-1 py-2">
              {category.subcategories.map((subCategory: any) => (
                <li
                  key={subCategory._id}
                  className="relative group"
                  onMouseEnter={() =>
                    handleMouseEnterSubSubCategory(subCategory._id)
                  }
                  onMouseLeave={handleMouseLeaveSubSubCategory}
                >
                  <Link
                    href={`/category/${subCategory.slug}`}
                    className="flex justify-between items-center border-b px-4 py-2 transition-all duration-300 ease-in-out cursor-pointer text-gray-800 hover:bg-gray-100 hover:text-orange-600"
                  >
                    <span>{subCategory.categoryName}</span>
                    {subCategory.subcategories &&
                      subCategory.subcategories.length > 0 && (
                        <span className="ml-2 transform transition-transform duration-300 group-hover:rotate-90">
                          ▶
                        </span>
                      )}
                  </Link>

                  {/* Render sub-subcategories if they exist */}
                  {openSubSubCategoryId === subCategory._id &&
                    subCategory.subcategories &&
                    subCategory.subcategories.length > 0 && (
                      <ul className="absolute left-full top-0 min-w-48 bg-_white shadow-lg border rounded-md mt-1 py-2">
                        {subCategory.subcategories.map(
                          (subSubCategory: any) => (
                            <li key={subSubCategory._id} className="group">
                              <Link
                                href={`/category/${subSubCategory.slug}`}
                                className="flex items-center px-4 py-2 border-b transition-all duration-300 ease-in-out cursor-pointer text-gray-800 hover:bg-gray-100 hover:text-orange-600"
                              >
                                {subSubCategory.categoryName}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                </li>
              ))}
            </ul>
          )}
      </li>
    );
  };

  return (
    <div className="hidden md:block">
      <div className="bg-_white text-center flex justify-center items-center h-[50px] smd:h-[60px]">
        <div className="w-full h-full relative">
          <div className="w-full h-full flex justify-center items-center">
            <div className="category-and-nav lg:flex hidden space-x-5 items-center">
              {categoriesData?.data?.map((category: any) => (
                <div
                  key={category._id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnterCategory(category._id)}
                  onMouseLeave={handleMouseLeaveCategory}
                >
                  <div className="w-full h-full flex justify-between text-center items-center">
                    <Link href={`/category/${category.slug}`}>
                      <span className="text-xs xl:text-sm font-semibold hover:text-orange-500 text-gray-800">
                        {category.categoryName}
                      </span>
                    </Link>
                  </div>

                  {/* Render dropdown for categories with subcategories */}
                  {openCategoryId === category._id &&
                    category.subcategories && (
                      <div className="category-dropdown absolute left-0 top-8 mt-2 bg-_white min-w-52 shadow-lg border rounded-md">
                        <ul className="categories-list py-2">
                          {category.subcategories.map((subCategory: any) =>
                            renderCategoryTree(subCategory)
                          )}
                        </ul>
                      </div>
                    )}
                </div>
              ))}
              <div className="lg:flex items-center gap-2 xl:gap-10 hidden text-gray-800 text-xs xl:text-sm font-semibold">
                <div>
                  <Link href={"/"}>Blogs</Link>
                </div>
                <div>
                  <Link href={"/section/used"}>Used Products</Link>
                </div>
                <div>
                  <Link href={"/offers"}>Offers</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
