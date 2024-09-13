"use client"
import React from "react";
import { useGetAllCategoryQuery } from "@/store/features/category/categoryApi";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/components/common/loading";
const TopItems = () => {
  const { data ,isLoading}: any = useGetAllCategoryQuery({
    limit:12
  })
  if (isLoading) return <Loading/>;
  return (
    <div className="px-3 ssm:px-5 msm:px-7 lsm:container lsm:px-auto my-5 lsm:my-10">
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
        {data?.categories?.map((category:any, index:number) => (
          <Link href={`/category/${category?.categoryName}`}
           key={index}
          >
          <div
            className="text-center border-[1px] h-full border-_white rounded shadow p-3 hover:font-bold hover:text-[#FF4C06] hover:border hover:border-[#FF4C06] bg-_white hover:bg-slate-200 cursor-pointer transition-all ease-in-out duration-500 group"
            style={{ boxShadow: "0px 0px 2px 0px gray" }}
          >
              <img
                width={100}
                height={100}
              className="w-2/4 mx-auto group-hover:scale-125 transition-all ease-in-out duration-700"
              src={category?.image}
              alt="category"
            />
            <h4>{category?.categoryName}</h4>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopItems;
