"use client";
import React, { useRef } from "react";
import Loading from "@/components/common/loading";
import { useGetAllCategoryQuery } from "@/store/features/category/categoryApi";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const breakpoints = {
  0: {
    slidesPerView: 3,
    spaceBetween: 20,
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
  const swiperRef = useRef<any>(null);
  const { data, isLoading }= useGetAllCategoryQuery<any>({
    limit: 20,
  });
  if (isLoading) return <Loading />;
  return (
    <div className="md:container pb-5">
      <h2 className="text-2xl font-semibold text-center pb-4 md:py-4">
        Top Categories
      </h2>

      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        speed={3000}
        allowTouchMove={true}
        breakpoints={breakpoints}
        spaceBetween={12}
      >
        {data?.categories?.map((category: any, index: any) => (
          <SwiperSlide key={index} className={`!h-auto !md:h-full`}>
            <Link href={`/category/${category?.categoryName}`}>
              <div className="w-full !h-full pb-1 md:pb-5 bg-_white rounded-lg">
                <Image
                  src={category?.image}
                  alt={category?.categoryName}
                  width={100}
                  height={100}
                  className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] mx-auto transition ease-in-out duration-300 hover:scale-105 hover:cursor-pointer"
                />
                <h4 className="text-xs md:text-base font-medium leading-normal text-black text-center pt-1 md:pt-3">
                  {category?.categoryName}
                </h4>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopItems;
