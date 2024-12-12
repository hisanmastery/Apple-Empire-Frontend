"use client";
import { images } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SmallDeviceSearchBar from "./small-device-search";
import { useGetAllCategoryQuery } from "@/store/features/category/categoryApi";
import { icons } from "@/constants/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SheetDrawer from "@/components/common/sheet-drawer/indext";
import { policyLinks } from "@/data/small-device-menus";

// Tabs for toggling between Category and Menu views
const tabData = [
  { value: "category", label: "Category" },
  { value: "menu", label: "Menu" },
];

// Interfaces for category tree
interface SubSubCategory {
  _id: string;
  categoryName: string;
  slug: string;
}

interface SubCategory {
  _id: string;
  categoryName: string;
  slug: string;
  subcategories?: SubSubCategory[];
}

interface Category {
  _id: string;
  categoryName: string;
  images: any;
  slug: string;
  subcategories?: SubCategory[];
}

interface SmallDeviceProps {
  type?: string;
}

// Main Component
const SmallDevice: React.FC<SmallDeviceProps> = () => {
  const [selectedTab, setSelectedTab] = useState("category");
  const [categoryToggle, setCategoryToggle] = useState(false);
  const { data: categoriesData, isLoading } = useGetAllCategoryQuery<any>({
    page: 1,
    limit: 100,
  });

  const handleCategoryToggle = () => {
    setCategoryToggle(!categoryToggle);
  };
  if (isLoading) {
    return;
  }
  return (
    <div className="flex justify-between items-center md:hidden bg-black px-5">
      {/* Category Menu Button */}
      <div className="category-and-nav lg:hidden items-center">
        <div className="category rounded-t-md mt-1.5 relative">
          <button
            onClick={handleCategoryToggle}
            type="button"
            className="w-full h-full flex justify-between items-center"
          >
            <div className="flex items-center">
              <span>
                <icons.barsIcon className="text-_primary w-7 h-7" />
              </span>
            </div>
          </button>

          {/* Drawer for Category/Menu */}
          <SheetDrawer
            isOpen={categoryToggle}
            setIsOpen={setCategoryToggle}
            title=""
            direction="left"
          >
            {/* Tabs for Category and Menu */}
            <div className="flex gap-2 px-2">
              {tabData.map((item) => (
                <button
                  onClick={() => setSelectedTab(item?.value)}
                  key={item?.value}
                  className={`${
                    selectedTab === item?.value && "bg-_primary text-_white"
                  } border border-_primary-text rounded-sm mt-2 py-1 w-full flex justify-center`}
                >
                  {item?.label}
                </button>
              ))}
            </div>

            {/* Category Tab */}
            {selectedTab === "category" ? (
              <div className="category-dropdown w-72 mt-3">
                <Accordion type="multiple" className="w-full">
                  {categoriesData?.data?.map((category: Category) => (
                    <div key={category._id}>
                      {category?.subcategories?.length ? (
                        <AccordionItem value={category._id}>
                          <AccordionTrigger className="hover:bg-gray-200 p-2">
                            <div className="flex items-center gap-2 px-2 border-b w-full">
                              <Image
                                className="w-6 h-6"
                                src={category?.images?.imageUrl || ""}
                                alt={category?.images?.altText}
                                width={24}
                                height={24}
                              />
                              <span className="text-sm font-medium">
                                <Link
                                  href={`/category/${category?.slug}`}
                                  onClick={handleCategoryToggle}
                                >
                                  {category?.categoryName}
                                </Link>
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <Accordion type="multiple">
                              {category?.subcategories?.map((subCategory) => (
                                <div key={subCategory._id}>
                                  {subCategory?.subcategories?.length ? (
                                    <AccordionItem value={subCategory._id}>
                                      <AccordionTrigger className="hover:bg-gray-200 p-2 pl-5">
                                        <span className="text-xs font-normal">
                                          <Link
                                            onClick={handleCategoryToggle}
                                            href={`/category/${subCategory?.slug}`}
                                          >
                                            {subCategory?.categoryName}
                                          </Link>
                                        </span>
                                      </AccordionTrigger>
                                      <AccordionContent>
                                        <ul className="pl-5 bg-gray-200">
                                          {subCategory?.subcategories.map(
                                            (subSubCategory) => (
                                              <li
                                                key={subSubCategory._id}
                                                className="py-1 border-b hover:bg-gray-300"
                                              >
                                                <Link
                                                  onClick={handleCategoryToggle}
                                                  href={`/category/${subSubCategory?.slug}`}
                                                >
                                                  <span className="text-xs font-light hover:text-blue-400">
                                                    {
                                                      subSubCategory?.categoryName
                                                    }
                                                  </span>
                                                </Link>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </AccordionContent>
                                    </AccordionItem>
                                  ) : (
                                    <div className="py-2 pl-5 border-b">
                                      <Link
                                        href={`/category/${subCategory?.slug}`}
                                        onClick={handleCategoryToggle}
                                      >
                                        <span className="text-xs font-normal hover:text-blue-500">
                                          {subCategory?.categoryName}
                                        </span>
                                      </Link>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </Accordion>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <div className="py-2 px-2 border-b">
                          <Link
                            href={`/category/${category?.slug}`}
                            onClick={handleCategoryToggle}
                          >
                            <span className="text-sm font-medium hover:text-blue-500">
                              {category?.categoryName}
                            </span>
                          </Link>
                        </div>
                      )}
                    </div>
                  ))}
                </Accordion>

                {/* Close Drawer Button */}
                <button
                  className="absolute top-2 right-2 text-black"
                  onClick={handleCategoryToggle}
                >
                  <icons.crossIcon className="w-4 h-4" />
                </button>
              </div>
            ) : (
              // Menu Tab with Policy Links
              <ul className="px-5 mt-5">
                {policyLinks.map((item, index) => (
                  <Link
                    key={index}
                    onClick={handleCategoryToggle}
                    href={item.href}
                    className={`text-black hover:text-_primary border-b py-2 ${
                      item.label === "Warranty Policy" ||
                      item.label === "Exchange Policy"
                        ? "hover:text-_primary-bg"
                        : ""
                    } block`}
                  >
                    <li className="block">{item.label}</li>
                  </Link>
                ))}
              </ul>
            )}
          </SheetDrawer>
        </div>
      </div>

      {/* Logo */}
      <div className="cursor-pointer">
        <Link href="/">
          <Image
            width={50}
            height={50}
            src={images.NavbarLogo}
            alt="logo"
            className="p-2 w-16"
          />
        </Link>
      </div>

      {/* Search Bar */}
      <div>
        <SmallDeviceSearchBar />
      </div>
    </div>
  );
};

export default SmallDevice;
