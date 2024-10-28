"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { useGetAllCategoryQuery } from "@/store/features/category/categoryApi";

export default function LargeDevice({ type }: any) {
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);
  const [openSubCategoryId, setOpenSubCategoryId] = useState<string | null>(
    null
  );
  const { data: categoriesData }: any = useGetAllCategoryQuery({
    page: 1,
    limit: 7,
  });

  const handleMouseEnter = (categoryId: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenCategoryId(categoryId);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenCategoryId(null);
      setOpenSubCategoryId(null);
    }, 200);
  };

  const handleSubCategoryMouseEnter = (subCategoryId: string) => {
    setOpenSubCategoryId(subCategoryId);
  };

  const handleSubCategoryMouseLeave = () => {
    setOpenSubCategoryId(null);
  };

  return (
    <div className="hidden md:block">
      <div className="bg-_white text-center flex justify-center items-center h-[50px] smd:h-[60px]">
        <div className="">
          <div className="w-full h-full relative">
            <div className="w-full h-full flex justify-center items-center">
              <div className="category-and-nav lg:flex hidden space-x-3 items-center">
                {categoriesData?.data?.map((category: any, index: number) => (
                  <div
                    key={index}
                    className="category px-2 rounded-t-md relative"
                    onMouseEnter={() => handleMouseEnter(category._id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {category.subcategories?.length > 0 ? (
                      <>
                        <div className="w-full h-full flex justify-between text-center items-center">
                          <div className="flex space-x-3 items-center">
                            <Link href={`/category/${category.slug}`}>
                              <span className="text-md font-600 hover:text-_orange text-qblacktext">
                                {category.categoryName}
                              </span>
                            </Link>
                          </div>
                        </div>

                        {openCategoryId === category._id && (
                          <div className="category-dropdown absolute left-0 top-full mt-2 bg-_white min-w-48 shadow-lg border rounded-md">
                            <ul className="categories-list py-2">
                              {category.subcategories.map(
                                (subCategory: any, subIndex: number) => (
                                  <li
                                    className="relative group"
                                    key={subIndex}
                                    onMouseEnter={() =>
                                      handleSubCategoryMouseEnter(
                                        subCategory._id
                                      )
                                    }
                                    onMouseLeave={handleSubCategoryMouseLeave}
                                  >
                                    <Link
                                      href={`/category/${category.slug}?subcategory=${subCategory.slug}`}
                                    >
                                      <div
                                        className={`flex justify-between border-b items-center px-4 py-2 transition-all duration-300 ease-in-out cursor-pointer text-gray-800 ${
                                          type === 3
                                            ? "hover:bg-blue-100 hover:text-blue-700"
                                            : "hover:bg-gray-100 hover:text-orange-600"
                                        }`}
                                      >
                                        <span>{subCategory.categoryName}</span>
                                        {subCategory.subsubcategories?.length >
                                          0 && (
                                          <span className="ml-2 text-gray-500">
                                            ▶
                                          </span>
                                        )}
                                      </div>
                                    </Link>

                                    {openSubCategoryId === subCategory._id &&
                                      subCategory.subsubcategories?.length >
                                        0 && (
                                        <ul className="subsubcategories-list absolute left-full min-w-48 top-0 mt-0 bg-white shadow-lg border rounded-md">
                                          {subCategory.subsubcategories.map(
                                            (
                                              subSubCategory: any,
                                              subSubIndex: number
                                            ) => (
                                              <li key={subSubIndex}>
                                                <Link
                                                  href={`/category/${category.slug}?subcategory=${subCategory.slug}&subsubcategory=${subSubCategory.slug}`}
                                                >
                                                  <div
                                                    className={`flex items-center px-4 py-2 transition-all duration-300 ease-in-out cursor-pointer text-gray-800 ${
                                                      type === 3
                                                        ? "hover:bg-blue-100 hover:text-blue-700"
                                                        : "hover:bg-gray-100 hover:text-orange-600"
                                                    }`}
                                                  >
                                                    {
                                                      subSubCategory.categoryName
                                                    }
                                                  </div>
                                                </Link>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      )}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </>
                    ) : (
                      <Link href={`/category/${category.slug}`}>
                        <div className="w-full h-full flex justify-between text-center items-center cursor-pointer">
                          <div className="flex space-x-3 items-center">
                            <span className="text-md font-600 hover:text-orange-600 text-gray-800">
                              {category.categoryName}
                            </span>
                          </div>
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
                <div className="lg:flex items-center gap-10 hidden">
                  <div className="text-black text-md">
                    <Link href={"/about-us"}>About</Link>
                  </div>
                  <div className="text-black text-md">
                    <Link href={"/"}>Blogs</Link>
                  </div>
                  <div className="text-black text-md">
                    <Link href={"/section/used"}>Used Products</Link>
                  </div>
                  <div className="text-black text-md">
                    <Link href={"/offers"}>Offers</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
