"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { useGetAllCategoryQuery } from "@/store/features/category/categoryApi";

export default function NewNavbar({ type }: any) {
  // Store the ID of the currently open category
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);
  const [categoryToggle, setToggle] = useState(false);
  const { data: categoriesData }: any = useGetAllCategoryQuery({
    page: 1,
    limit: 100,
  });
  const handler = () => {
    setToggle(!categoryToggle);
  };

  // Ref to store the close timeout
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Open category on hover
  const handleMouseEnter = (categoryId: string) => {
    // Clear any existing close timeout when hovering over a new category
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenCategoryId(categoryId); // Open the category when hovered
  };

  // Close category with a 1-second delay when mouse leaves
  const handleMouseLeave = () => {
    // Set a timeout to close the category after 1 second
    closeTimeoutRef.current = setTimeout(() => {
      setOpenCategoryId(null); // Close the category
    }, 200); // 1 second delay
  };

  return (
    <div className="hidden md:block">
      <div
        className={` bg-_white text-center flex justify-center items-center h-[50px] smd:h-[60px]`}
      >
        <div className="">
          <div className="w-full h-full relative">
            <div className="w-full h-full flex justify-center items-center">
              {/*desktop view*/}
              <div className="category-and-nav lg:flex hidden space-x-3 items-center">
                {categoriesData?.categories?.map(
                  (category: any, index: number) => (
                    <div
                      key={index}
                      className="category px-2 rounded-t-md relative"
                      onMouseEnter={() => handleMouseEnter(category._id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* If category has subcategories, show toggle button */}
                      {category.subCategory?.length > 0 ? (
                        <>
                          <div className="w-full h-full flex justify-between text-center items-center">
                            <div className="flex space-x-3 items-center">
                              <span className="text-md font-600 hover:text-_orange text-qblacktext">
                                {category.categoryName}
                              </span>
                            </div>
                          </div>

                          {/* Category Dropdown */}
                          {openCategoryId === category._id && (
                            <div className="category-dropdown w-full min-w-48 absolute left-0 top-[43px] sm:top-[47px] smd:top-[53px]">
                              <ul className="categories-list">
                                {category.subCategory.map(
                                  (subCategory: string, subIndex: number) => (
                                    <li
                                      className="relative group border-b"
                                      key={subIndex}
                                    >
                                      <Link
                                        href={`/category/${category.categoryName}/${subCategory}`}
                                      >
                                        <div
                                          className={`flex justify-between items-center px-2 h-10 bg-_white transition-all duration-300 ease-in-out cursor-pointer text-qblack ${
                                            type === 3
                                              ? "hover:bg-qh3-blue hover:text-white"
                                              : "hover:bg-black hover:text-_orange"
                                          }`}
                                        >
                                          <span className="text-md font-400">
                                            {subCategory}
                                          </span>
                                        </div>
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </>
                      ) : (
                        // Direct link if no subcategories
                        <Link href={`/category/${category.categoryName}`}>
                          <div className="w-full h-full flex justify-between text-center items-center cursor-pointer">
                            <div className="flex space-x-3 items-center">
                              <span className="text-md font-600 hover:text-_orange text-qblacktext">
                                {category.categoryName}
                              </span>
                            </div>
                          </div>
                        </Link>
                      )}
                    </div>
                  )
                )}
                <div className="lg:flex items-center gap-10 hidden">
                  <div className="text-_black text-md">
                    <Link href={"/about"}>About</Link>
                  </div>
                  <div className="text-_black text-md">
                    <Link href={"/"}>Blogs</Link>
                  </div>
                  <div className="text-_black text-md">
                    <Link href={"/contact-us"}>Contact</Link>
                  </div>
                  <div className="text-_black text-md">
                    <Link href={"/section/used"}>Used Products</Link>
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
