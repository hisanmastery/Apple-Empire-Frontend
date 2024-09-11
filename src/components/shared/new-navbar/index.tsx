"use client";
import { icons } from "@/constants/icons";
import Link from "next/link";
import { useState } from "react";
import { useGetAllCategoryQuery } from "@/store/features/category/categoryApi";

export default function NewNavbar({ className, type }: any) {
  const [categoryToggle, setToggle] = useState(false);
  const { data: categoriesData }: any = useGetAllCategoryQuery({
    page: 1,
    limit: 100,
  });

  const handler = () => {
    setToggle(!categoryToggle);
  };

  return (
    <div className="sticky top-0 z-[6]">
      <div className={`w-full bg-_primary h-[50px] ssm:h-[60px]`}>
        <div className="container mx-auto h-full">
          <div className="w-full h-full relative">
            <div className="w-full h-full flex justify-between items-center">
              <div className="category-and-nav flex xl:space-x-7 space-x-3 items-center">
                <div className="category w-[78vw] xsm:w-[80vw] sm:w-[270px] h-[40px] ssm:h-[53px] bg-white px-5 rounded-t-md mt-[10px] ssm:mt-[6px] relative">
                  <button
                    onClick={handler}
                    type="button"
                    className="w-full h-full flex justify-between items-center"
                  >
                    <div className="flex space-x-1 items-center">
                      <span>
                        <icons.barsIcon />
                      </span>
                      <span className="text-sm font-600 text-qblacktext">
                        All Categories
                      </span>
                    </div>
                  </button>
                  {categoryToggle && (
                    <div
                      className="fixed top-0 left-0 w-full h-full -z-10"
                      onClick={handler}
                    ></div>
                  )}

                  {/* Category Dropdown */}
                  {categoryToggle && (
                    <div className="category-dropdown w-full absolute left-0 top-[42px] ssm:top-[53px]">
                      <ul className="categories-list">
                        {categoriesData?.categories?.map((category: any) => (
                          <li
                            key={category._id}
                            className="relative group border-b"
                          >
                            {/* Category Link */}
                            <Link href={`/category/${category.categoryName}`}>
                              <div
                                className={`flex justify-between items-center px-2 h-10 bg-white transition-all duration-300 ease-in-out cursor-pointer text-qblack ${
                                  type === 3
                                    ? "hover:bg-qh3-blue hover:text-white"
                                    : "hover:bg-_primary hover:text-white"
                                }`}
                              >
                                <span className="text-xs font-400 flex items-center gap-4">
                                  <span>
                                    <img
                                      className="w-4 h-4"
                                      src={category.image}
                                      alt={category.categoryName}
                                    />
                                  </span>
                                  {category.categoryName}
                                </span>
                              </div>
                            </Link>

                            {/* Subcategory Dropdown */}
                            {category.subCategory.length > 0 && (
                              <ul
                                className="absolute left-full top-0 hidden group-hover:block w-[200px] bg-white shadow-lg"
                                style={{ zIndex: 10 }}
                              >
                                {category.subCategory.map(
                                  (subCategory: string, subIndex: number) => (
                                    <li className="border-b" key={subIndex}>
                                      <Link
                                        href={`/category/${
                                          category.categoryName
                                        }/${subCategory.trim().toLowerCase()}`}
                                      >
                                        <div
                                          className={`flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer text-qblack ${
                                            type === 3
                                              ? "hover:bg-qh3-blue hover:text-white"
                                              : "hover:bg-_primary hover:text-white"
                                          }`}
                                        >
                                          <span className="text-xs font-400">
                                            {subCategory}
                                          </span>
                                        </div>
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:flex items-center gap-10 hidden">
                <div className="text-_white text-md">
                  <Link href={"/"}>Home</Link>
                </div>
                <div className="text-_white text-md">
                  <Link href={"/section/popular-products"}>Shop</Link>
                </div>
                <div className="text-_white text-md">
                  <Link href={"/about"}>About</Link>
                </div>
                <div className="text-_white text-md">
                  <Link href={"/"}>Blogs</Link>
                </div>
                <div className="text-_white text-md">
                  <Link href={"/"}>Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
