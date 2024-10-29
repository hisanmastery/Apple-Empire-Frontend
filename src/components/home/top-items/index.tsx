"use client";
import React, { useRef } from "react";
import Loading from "@/components/common/loading";
import { useGetCategoryListQuery } from "@/store/features/category/categoryApi";
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
  const { data, isLoading } = useGetCategoryListQuery<any>({
    page: 1,
    limit: 10,
  });
  console.log(data?.data);
  if (isLoading) return <Loading />;
  return (
    <div className="md:container pb-5 mt-5 md:mt-0">
      <h2 className="text-xl md:text-2xl font-semibold text-center pb-4 md:py-4">
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
        {data?.data?.map((category: any, index: any) => (
          <SwiperSlide key={index} className={`!h-auto !md:h-full`}>
            <Link href={`/category/${category?.categoryName}`}>
              <div className="w-full !h-full p-3 bg-_white rounded-lg">
                <Image
                  src={category?.images?.imageUrl}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopItems;

