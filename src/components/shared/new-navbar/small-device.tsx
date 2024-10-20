// SmallDevice.tsx
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

interface Category {
  _id: string;
  categoryName: string;
  image: string;
  subCategory: string[];
}

interface SmallDeviceProps {
  type?: string;
}

const SmallDevice: React.FC<SmallDeviceProps> = ({ type }) => {
  const [categoryToggle, setCategoryToggle] = useState(false);
  const { data: categoriesData } = useGetAllCategoryQuery<any>({
    page: 1,
    limit: 100,
  });

  const handleCategoryToggle = () => {
    setCategoryToggle(!categoryToggle);
  };

  return (
    <div className="flex justify-between items-center md:hidden bg-black px-5">
      {/* Category Menu */}
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
          <SheetDrawer
            isOpen={categoryToggle}
            setIsOpen={setCategoryToggle}
            title="Categories"
            direction='left'
          >
            <div className="category-dropdown w-72">
              <div>
                <Accordion type="multiple" className="w-full">
                  {categoriesData?.categories?.map((category: Category) => (
                    <AccordionItem key={category._id} value={category._id}>
                      <AccordionTrigger>
                        <div className="flex items-center gap-2 px-2 py-2 hover:underline hover:text-primary">
                          <Image
                            className="w-6 h-6"
                            src={category.image}
                            alt={category.categoryName}
                            width={24}
                            height={24}
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
                              (subCategory, subIndex) => (
                                <li className="py-2" key={subIndex}>
                                  <Link
                                    href={`/category/${
                                      category.categoryName
                                    }/${subCategory.trim().toLowerCase()}`}
                                  >
                                    <span className="text-xs font-normal hover:text-blue-500">
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
                className="absolute top-2 right-2 text-black"
                onClick={handleCategoryToggle}
              >
                <icons.crossIcon className="w-4 h-4" />
              </button>
            </div>
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
