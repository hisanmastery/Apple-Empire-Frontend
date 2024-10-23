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
const tabData = [
  { value: "category", label: "Category" },
  { value: "menu", label: "Menu" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "EMI Policy", href: "/emi-policy" },
  { label: "Warranty Policy", href: "/warranty-policy" },
  { label: "Exchange Policy", href: "/exchange-policy" },
  { label: "FAQ", href: "/faq" },
];

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
  const [selectedTab, setSelectedTab] = useState("category");
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
            title=""
            direction="left"
          >
            <div className="flex gap-2 px-2">
              {tabData?.map((item: any) => (
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
            {selectedTab === "category" ? (
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
                              <Link href={`/category/${category.categoryName}`}>
                                {category.categoryName}
                              </Link>
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
                                      onClick={handleCategoryToggle}
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
            ) : (
              <ul className="px-5 mt-5">
                {policyLinks.map((item, index) => (
                  <Link
                    key={index}
                    onClick={handleCategoryToggle}
                    href={item.href}
                    className={`text-black hover:text-_primary border-b border-_primary-text py-2 ${
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
