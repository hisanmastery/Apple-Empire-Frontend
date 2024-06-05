"use client"
import React from "react";
import categories from "@/../../public/category.json";
import { useGetAllCategoryQuery } from "@/store/features/category/categoryApi";
const TopItems = () => {
  const { data }:any = useGetAllCategoryQuery({})
  console.log(data?.categories);
  return (
    <div className="container mt-10">
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
        {data?.categories?.map((category:any, index:number) => (
          <div
            className="text-center rounded shadow p-3 hover:font-bold hover:text-[#FF4C06] hover:border hover:border-[#FF4C06] bg-_white hover:bg-slate-200 cursor-pointer transition-all ease-in-out duration-500 group"
            key={index}
            style={{ boxShadow: "0px 0px 2px 0px gray" }}
          >
            <img
              className="w-2/4 mx-auto group-hover:scale-125 transition-all ease-in-out duration-700"
              src={category.image}
              alt="category"
            />
            <h4>{category.categoryName}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopItems;
