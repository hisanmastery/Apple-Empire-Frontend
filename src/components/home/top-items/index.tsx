"use client";
import React from "react";
import Loading from "@/components/common/loading";
import { useGetAllCategoryQuery } from "@/store/features/category/categoryApi";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const breakpoints = {
  0: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 6,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 6,
    spaceBetween: 20,
  },
};

const TopItems = () => {
  const { data, isLoading }: any = useGetAllCategoryQuery({
    limit: 20,
  });
  // console.log("category data", data?.categories);

  if (isLoading) return <Loading />;
  return (
    <div className="container pb-5">
      <h2 className="text-xl font-semibold text-center py-4">Top Categories</h2>
      {/* ==================== swiper slider ================ */}
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        speed={3000}
        allowTouchMove={false}
        breakpoints={breakpoints}
        spaceBetween={12}
      >
        {data?.categories?.map((category: any, index: any) => (
          <SwiperSlide
            key={index}
            className={`!h-auto !md:h-full`}
          >
            <div className="w-full !h-full bg-_white py-5 px-4 rounded-lg">
              <Image
                src={category?.image}
                alt={category?.categoryName}
                width={100}
                height={100}
                className="w-[100px] h-[100px] mx-auto transition ease-in-out duration-300 hover:scale-105 hover:cursor-pointer"
              />
              <h4 className="text-base font-medium leading-normal text-black text-center pt-3">
                {category?.categoryName}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopItems;
