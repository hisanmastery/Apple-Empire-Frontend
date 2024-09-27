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

const SmallDevice = ({ type }: any) => {
  const [categoryToggle, setCategoryToggle] = useState(false);
  const { data: categoriesData }: any = useGetAllCategoryQuery({
    page: 1,
    limit: 100,
  });

  const handleCategoryToggle = () => {
    setCategoryToggle(!categoryToggle);
  };

  return (
    <div className="flex justify-between items-center md:hidden bg-_black px-5">
      {/* Category Menu */}
      <div className="category-and-nav lg:hidden items-center">
        <div className="category rounded-t-md mt-[6px] relative">
          <button
            onClick={handleCategoryToggle}
            type="button"
            className="w-full h-full flex justify-between items-center"
          >
            <div className="flex items-center">
              <span>
                <icons.barsIcon className="text-white" />
              </span>
            </div>
          </button>
          {categoryToggle && (
            <div
              className="fixed top-0 left-0 w-full h-full -z-10"
              onClick={handleCategoryToggle}
            ></div>
          )}

          {/* Category Accordion */}
          {categoryToggle && (
            <div className="category-dropdown w-72 absolute left-0 top-8 bg-white shadow-lg z-50">
              <div className="max-h-[400px] overflow-y-auto">
                <Accordion type="multiple" className="w-full bg-_white">
                  {categoriesData?.categories?.map((category: any) => (
                    <AccordionItem key={category._id} value={category._id}>
                      <AccordionTrigger>
                        <div className="flex items-center gap-2 px-2 py-2 hover:underline hover:text-_primary text-_black">
                          <Image
                            className="w-6 h-6"
                            src={category.image}
                            alt={category.categoryName}
                            width={10}
                            height={10}
                          />
                          <span className="text-sm font-medium">
                            {category.categoryName}
                          </span>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent>
                        {category.subCategory.length > 0 && (
                          <ul className="pl-10">
                            {category.subCategory.map(
                              (subCategory: string, subIndex: number) => (
                                <li className="py-2" key={subIndex}>
                                  <Link
                                    href={`/category/${
                                      category.categoryName
                                    }/${subCategory.trim().toLowerCase()}`}
                                  >
                                    <span className="text-xs font-normal text-_black hover:text-blue-500">
                                      {subCategory}
                                    </span>
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <button
                className="absolute top-2 right-2 text-_black"
                onClick={handleCategoryToggle}
              >
                <icons.crossIcon className="w-4 h-4" />
              </button>
            </div>
          )}
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
            className="p-2 w-16 ssm:w-20 smd:w-24 mmd:w-28"
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
