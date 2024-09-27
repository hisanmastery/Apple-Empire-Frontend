"use client";
import React from "react";
import { useGetAllCategoryQuery } from "@/store/features/category/categoryApi";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/components/common/loading";
import MultiCarousel from "@/components/common/carousel";

const TopItems = () => {
  const { data, isLoading }: any = useGetAllCategoryQuery({
    limit: 20,
  });

  if (isLoading) return <Loading />;

  return (
    <div className="px-1 ssm:px-2 md:px-10 sm:container sm:px-auto my-5 lsm:my-10">
      {/* Title or section header */}
      <h2 className="text-center text-xl font-bold mb-5">Top Categories</h2>

      {/* Carousel for displaying top categories */}
      <MultiCarousel
        settings={{ slidesToShow: 8 }}
        className="mb-8 p-5"
      >
        {data?.categories?.map((category: any, index: number) => (
          <div key={index} className="space-y-5">
            <div className="cursor-pointer">
              <Link href={`/category/${category?.categoryName}`}>
                <div className="w-24 h-24 mx-auto rounded-full border border-_primary transition-all ease-in-out duration-500 group">
                  <Image
                    width={100}
                    height={100}
                    className="w-full group-hover:scale-125 transition-all ease-in-out duration-700"
                    src={category?.image}
                    alt={category?.categoryName}
                  />
                </div>
                <h4 className="text-center text-md sm:text-md">
                  {category?.categoryName}
                </h4>
              </Link>
            </div>
          </div>
        ))}
      </MultiCarousel>
    </div>
  );
};

export default TopItems;
