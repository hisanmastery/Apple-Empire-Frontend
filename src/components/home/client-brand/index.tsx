"use client";
import React from "react";
import Loading from "@/components/common/loading";
import { useGetAllBrandQuery } from "@/store/features/brand/brandApi";
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
    slidesPerView: 7,
    spaceBetween: 20,
  },
};

const ClientBrand = () => {
  const { data, isLoading }: any = useGetAllBrandQuery({
    limit: 20,
  });
  console.log("brand data", data?.brands);
  if (isLoading) return <Loading />;
  return (
    <div className="container">
      {/* ==================== swiper slider ================ */}
      <Swiper
        className="relative"
        modules={[ Autoplay]}
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
        {data?.brands?.map((brand: any, index: any) => (
          <SwiperSlide key={index} className={`!h-auto !md:h-full`}>
            <div className="w-full !h-full flex items-center">
              <Image
                src={brand?.image?.viewUrl}
                alt={brand?.brandName}
                width={100}
                height={50}
                className="w-[100px] h-[50px] mx-auto transition ease-in-out duration-300 hover:scale-110 hover:cursor-pointer"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientBrand;
