"use client";
import React from "react";
import Loading from "@/components/common/loading";
import Image from "next/image";
import Link from "next/link";
import { useGetAllCategoryForOrderListQuery } from "@/store/features/category/categoryApi";

const TopItems = () => {
  const { data, isLoading } = useGetAllCategoryForOrderListQuery<any>({});
  if (isLoading) return <Loading />;
  return (
    <div className="md:container mb-3 sm:mt-0">
      <h2 className="text-xl md:text-2xl font-semibold text-center pb-4 md:py-4">
        Top Categories
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
        {data?.data?.categories?.map((category: any, index: any) => (
          <div key={index} className={`!h-auto !md:h-full`}>
            <Link href={`/category/${category?.slug}`}>
              <div className="w-full !h-full p-3 bg-_white rounded-lg">
                <Image
                  src={category?.images?.imageUrl || "s"}
                  alt={category?.images?.altText}
                  width={100}
                  height={100}
                  className="w-[60px] md:w-[80px] h-[50px] md:h-[80px] mx-auto transition ease-in-out duration-300 hover:scale-105 hover:cursor-pointer"
                />
                <h4 className="text-xs md:text-base font-medium leading-normal text-black text-center pt-1 md:pt-3">
                  {category?.categoryName}
                </h4>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopItems;
