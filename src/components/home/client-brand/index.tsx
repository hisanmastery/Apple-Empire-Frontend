"use client";
import React, { useRef } from "react";
import Loading from "@/components/common/loading";
import { useGetAllBrandQuery } from "@/store/features/brand/brandApi";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { icons } from "@/constants/icons";

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
  const swiperRef = useRef<any>(null);
  const { data, isLoading }: any = useGetAllBrandQuery({
    limit: 20,
  });

  if (isLoading) return <Loading />;
  return (
    <div>
      <h3 className="text-center text-2xl mt-5 mb-3">Shop By Brand</h3>
      <div className="container relative">
        <Swiper
          modules={[Autoplay, Navigation]}
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
        <div style={{ textAlign: "center" }}>
          <button
            className="button swiper-button-prev absolute bg-_white-ice z-10 p-1 font-thin rounded-full left-0 top-[50%]"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <icons.GoArrowLeft className="text-xl text-_orange" />
          </button>
          <button
            className="button swiper-button-next absolute bg-_white-ice z-10 p-1 font-thin rounded-full right-0 top-[50%]"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <icons.GoArrowRight className="text-xl text-_orange" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientBrand;
