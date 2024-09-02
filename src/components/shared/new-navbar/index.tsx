"use client";
import CustomNavigationMenu from "@/components/common/navigation-menu";
import { icons } from "@/constants/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LeftSideMenu } from "../navbar/sideMenu";
import Middlebar from "./MiddleNavbar";
import TopBar from "./TopNavbar";
import useAuth from "@/hooks/useAuth";
import { useGetAllCategoryQuery } from "@/store/features/category/categoryApi";

export default function NewNavbar({ className, type }: any) {
  const [categoryToggle, setToggle] = useState(false);
  const [elementsSize, setSize] = useState("0px");
  const { isAuthenticated, customerInfo } = useAuth();
  const handler = () => {
    setToggle(!categoryToggle);
  };

  useEffect(() => {
    if (categoryToggle) {
      const getItems = document.querySelectorAll(`.categories-list li`).length;
      if (categoryToggle && getItems > 0) {
        setSize(`${42 * getItems}px`);
      }
    } else {
      setSize(`0px`);
    }
  }, [categoryToggle]);

  const { data: categoriesData }: any = useGetAllCategoryQuery({
    page: 1,
    limit: 100,
  });

  return (
    <div className="sticky top-0 z-[6]">
      {/* <TopBar /> */}
      <Middlebar />
      <div className={`w-full bg-_primary h-[60px]`}>
        <div className="container mx-auto h-full">
          <div className="w-full h-full relative">
            <div className="w-full h-full flex justify-between items-center">
              <div className="category-and-nav flex xl:space-x-7 space-x-3 items-center">
                <div className="category w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px] relative">
                  <button
                    onClick={handler}
                    type="button"
                    className="w-full h-full flex justify-between items-center"
                  >
                    <div className="flex space-x-3 items-center">
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
                  <div
                    className="category-dropdown w-full absolute left-0 top-[53px] overflow-hidden"
                    style={{ height: `${elementsSize}` }}
                  >
                    <ul className="categories-list">
                      {categoriesData?.categories?.map(
                        (category: any) => (
                          console.log(category),
                          (
                            <li
                              key={category._id}
                              className="category-item relative group"
                            >
                              <Link href={`/category/${category.categoryName}`}>
                                <div
                                  className={`flex justify-between items-center px-5 h-10 bg-white transition-all duration-300 ease-in-out cursor-pointer text-qblack ${
                                    type === 3
                                      ? "hover:bg-qh3-blue hover:text-white"
                                      : "hover:bg-qyellow"
                                  }`}
                                >
                                  <div className="flex items-center space-x-2">
                                    <span className="text-xs font-400">
                                      {category.categoryName}
                                    </span>
                                  </div>
                                </div>
                              </Link>
                              {category.subCategory.length > 0 && (
                                <ul className="subcategories-list absolute left-full top-0 w-[200px] bg-blue-300 shadow-lg hidden group-hover:block">
                                  {category.subCategory.map(
                                    (subCategory: string, subIndex: number) => (
                                      <li
                                        key={subIndex}
                                        className="subcategory-item"
                                      >
                                        <Link
                                          href={`/category/${
                                            category.categoryName
                                          }/${subCategory
                                            .trim()
                                            .toLowerCase()}`}
                                        >
                                          <div
                                            className={`flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer text-qblack ${
                                              type === 3
                                                ? "hover:bg-qh3-blue hover:text-white"
                                                : "hover:bg-qyellow"
                                            }`}
                                          >
                                            <div className="flex items-center space-x-2">
                                              <span className="text-xs font-400">
                                                {subCategory}
                                              </span>
                                            </div>
                                          </div>
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                            </li>
                          )
                        )
                      )}
                    </ul>
                  </div>
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
              <div className="col-span-2 lg:hidden">
                <LeftSideMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
